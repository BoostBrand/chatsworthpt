"""Page weight and a throttled mobile load in the pre-installed headless Chromium (no Lighthouse needed).

For each page: bytes transferred and request count on first load (cold cache), and LCP and CLS measured with
PerformanceObserver on a 390 px phone viewport under Lighthouse's mobile throttling numbers (150 ms RTT,
1.6 Mbps down, 750 Kbps up, CPU slowed 4x). Lazy images below the fold are not scrolled into view, so the
weight is what a visitor downloads before scrolling. Serves dist/ itself on a free local port.

Usage: python3 -I scripts/perf.py / /back-pain-therapy/            (Lighthouse mobile, the slow 4G profile)
       python3 -I scripts/perf.py --fast / /back-pain-therapy/     (Chrome's fast 4G: 60 ms, 9 Mbps down, 1.5 Mbps up)
"""
import json, socket, sys, threading
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'


class Quiet(SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def serve():
    s = socket.socket(); s.bind(('127.0.0.1', 0)); port = s.getsockname()[1]; s.close()
    httpd = ThreadingHTTPServer(('127.0.0.1', port), partial(Quiet, directory=str(DIST)))
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, port


OBSERVE = """() => {
  window.__lcp = 0; window.__cls = 0;
  new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lcp = e.renderTime || e.loadTime || e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
}"""


def main():
    fast = '--fast' in sys.argv
    paths = [a for a in sys.argv[1:] if not a.startswith('--')] or ['/']
    net = {'latency': 60, 'down': 9 * 1024 * 1024 / 8, 'up': 1.5 * 1024 * 1024 / 8} if fast else {'latency': 150, 'down': 1.6 * 1024 * 1024 / 8, 'up': 750 * 1024 / 8}
    httpd, port = serve()
    out = []
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        for path in paths:
            ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
            page = ctx.new_page()
            cdp = ctx.new_cdp_session(page)
            cdp.send('Network.enable')
            cdp.send('Network.setCacheDisabled', {'cacheDisabled': True})
            cdp.send('Network.emulateNetworkConditions', {'offline': False, 'latency': net['latency'], 'downloadThroughput': net['down'], 'uploadThroughput': net['up']})
            cdp.send('Emulation.setCPUThrottlingRate', {'rate': 4})
            sizes = {}
            cdp.on('Network.loadingFinished', lambda e: sizes.__setitem__(e['requestId'], e['encodedDataLength']))
            page.add_init_script(f'({OBSERVE})()')
            page.goto(f'http://127.0.0.1:{port}{path}', wait_until='load')
            page.wait_for_timeout(2500)
            lcp, cls = page.evaluate('[window.__lcp, window.__cls]')
            out.append({'profile': 'fast 4G' if fast else 'slow 4G (Lighthouse mobile)', 'path': path, 'kb_transferred': round(sum(sizes.values()) / 1024, 1), 'requests': len(sizes), 'lcp_ms': round(lcp), 'cls': round(cls, 4)})
            ctx.close()
        browser.close()
    httpd.shutdown()
    print(json.dumps(out, indent=1))


if __name__ == '__main__':
    main()
