"""Renders built pages in headless Chromium (the pre-installed Playwright; never `playwright install`).

For each page and width: 0 horizontal overflow, broken images, h1 count, script errors, page height, and
optionally a full-page screenshot into dist-preview/. Serves dist/ on a local port it picks itself and checks
each page's <title> before measuring, so it never measures another server's site.

Usage:
  python3 -I scripts/render.py                       # every page in src/data/pages.json, 390 and 1440, no shots
  python3 -I scripts/render.py --shots / /contact/  # these pages, with screenshots
  python3 -I scripts/render.py --url file:///x/index.html --label master --shots
Prints a JSON summary; exits 1 if any page overflows, has a broken image, a script error, or not exactly one h1.
"""
import argparse, json, os, socket, sys, threading
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
PREVIEW = ROOT / 'dist-preview'


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def send_error(self, code, message=None, explain=None):
        if code == 404 and (DIST / '404.html').exists():
            body = (DIST / '404.html').read_bytes()
            self.send_response(404)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().send_error(code, message, explain)


def serve():
    s = socket.socket(); s.bind(('127.0.0.1', 0)); port = s.getsockname()[1]; s.close()
    httpd = ThreadingHTTPServer(('127.0.0.1', port), partial(Handler, directory=str(DIST)))
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, port


MEASURE = """async () => {
  await document.fonts.ready;
  const H = () => document.documentElement.scrollHeight;
  for (let y = 0; y < H(); y += Math.round(innerHeight * 0.8)) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
  window.scrollTo(0, H()); await new Promise(r => setTimeout(r, 300));
  const imgs = [...document.images];
  await Promise.all(imgs.map(i => i.complete ? null : new Promise(r => { i.onload = i.onerror = r; setTimeout(r, 3000); })));
  window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 200));
  const main = document.querySelector('main');
  return {
    title: document.title,
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    height: document.documentElement.scrollHeight,
    h1: document.querySelectorAll('h1').length,
    broken: imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.currentSrc || i.src),
    sections: main ? [...main.children].map(c => (c.tagName.toLowerCase() + (c.id ? '#' + c.id : '') + (c.classList.length ? '.' + [...c.classList].join('.') : ''))) : [],
  };
}"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('paths', nargs='*')
    ap.add_argument('--shots', action='store_true')
    ap.add_argument('--widths', default='390,1440')
    ap.add_argument('--url')
    ap.add_argument('--label', default='')
    ap.add_argument('--reduce', action='store_true', help='emulate prefers-reduced-motion')
    a = ap.parse_args()
    widths = [int(w) for w in a.widths.split(',')]
    httpd, port = (None, None) if a.url else serve()
    if a.url:
        targets = [(a.label or 'page', a.url)]
    else:
        paths = a.paths or [p['path'] for p in json.loads((ROOT / 'src/data/pages.json').read_text())]
        targets = []
        for p in paths:
            rel = '404.html' if p in ('/404', '/404/') else p.lstrip('/')
            targets.append((p, f'http://127.0.0.1:{port}/{rel}'))
    PREVIEW.mkdir(exist_ok=True)
    results, failed = [], False
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        for path, url in targets:
            for w in widths:
                ctx = browser.new_context(viewport={'width': w, 'height': 900}, reduced_motion='reduce' if a.reduce else 'no-preference')
                page = ctx.new_page()
                errors = []
                page.on('pageerror', lambda e: errors.append(str(e)))
                page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
                resp = page.goto(url, wait_until='load')
                r = page.evaluate(MEASURE)
                r.update({'path': path, 'width': w, 'status': resp.status if resp else None, 'errors': errors})
                if a.shots:
                    slug = (a.label or path.strip('/').replace('/', '_') or 'home')
                    shot = PREVIEW / f'{slug}-{w}.png'
                    page.screenshot(path=str(shot), full_page=True)
                    r['shot'] = str(shot.relative_to(ROOT))
                bad = r['overflow'] > 0 or r['broken'] or r['errors'] or r['h1'] != 1
                failed |= bool(bad)
                results.append(r)
                ctx.close()
        browser.close()
    if httpd:
        httpd.shutdown()
    print(json.dumps(results, indent=1))
    sys.exit(1 if failed else 0)


if __name__ == '__main__':
    main()
