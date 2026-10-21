"""Accessibility checks in the pre-installed headless Chromium, counted from the built pages.

Per page, at 390 and 1440 px: text contrast below 4.5:1 (3:1 for large text) against the nearest solid background,
white text on the accent blue #0096D0, images without an alt attribute, links and buttons without an accessible name,
form fields without a label, a missing skip link, and heading levels that skip (h2 straight to h4). Elements inside
the preview note and the [CONFIRM] highlights are skipped (both leave the site before launch). Backgrounds drawn as
images or gradients are not seen, so text over a photo is reported for a human look, not counted as a failure.

Usage: python3 -I scripts/a11y.py            # every built page
       python3 -I scripts/a11y.py / /contact/
Exits 1 if any page has a failure.
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


CHECK = r"""() => {
  const parse = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(',').map(x => parseFloat(x)); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const lum = (c) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
  const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  const bgOf = (el) => {
    let n = el, imageBehind = false;
    while (n && n.nodeType === 1) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== 'none' && !cs.backgroundImage.startsWith('linear-gradient(currentcolor')) imageBehind = true;
      const c = parse(cs.backgroundColor);
      if (c && c.a > 0.9) return { c, imageBehind };
      n = n.parentElement;
    }
    return { c: { r: 255, g: 255, b: 255, a: 1 }, imageBehind };
  };
  const visible = (el) => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && parseFloat(cs.opacity) > 0.05; };
  const skip = (el) => el.closest('.draft-note, mark.confirm, [aria-hidden="true"], .sr-only, .visually-hidden, noscript');
  const out = { contrast: [], photoText: [], whiteOnBlue: [], imgNoAlt: [], linkNoName: [], buttonNoName: [], fieldNoLabel: [], headingSkips: [], skipLink: !!document.querySelector('a[href="#top"], a.skip, .skip-link') };
  const seen = new Set();
  for (const el of document.querySelectorAll('body *')) {
    if (skip(el) || !visible(el)) continue;
    const own = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (!own) continue;
    const cs = getComputedStyle(el);
    const fg = parse(cs.color); if (!fg) continue;
    const { c: bg, imageBehind } = bgOf(el);
    const size = parseFloat(cs.fontSize); const bold = parseInt(cs.fontWeight) >= 700;
    const large = size >= 24 || (bold && size >= 18.66);
    const r = ratio(fg, bg);
    const text = el.textContent.trim().replace(/\s+/g, ' ').slice(0, 60);
    const key = el.tagName + '|' + text;
    if (seen.has(key)) continue; seen.add(key);
    if (Math.round(fg.r) === 255 && Math.round(fg.g) === 255 && Math.round(fg.b) === 255 && Math.round(bg.r) === 0 && Math.round(bg.g) === 150 && Math.round(bg.b) === 208) out.whiteOnBlue.push(text);
    if (r < (large ? 3 : 4.5)) (imageBehind ? out.photoText : out.contrast).push(`${r.toFixed(2)} ${el.tagName.toLowerCase()}.${[...el.classList].join('.')} "${text}"`);
  }
  for (const img of document.images) if (!img.hasAttribute('alt')) out.imgNoAlt.push(img.currentSrc || img.src);
  for (const a of document.querySelectorAll('a[href]')) { const name = (a.getAttribute('aria-label') || a.textContent || a.querySelector('img[alt]')?.alt || '').trim(); if (!name) out.linkNoName.push(a.getAttribute('href')); }
  for (const b of document.querySelectorAll('button')) { const name = (b.getAttribute('aria-label') || b.textContent || '').trim(); if (!name) out.buttonNoName.push(b.outerHTML.slice(0, 80)); }
  for (const f of document.querySelectorAll('input:not([type=hidden]):not([tabindex="-1"]), select, textarea')) { const ok = f.labels?.length || f.getAttribute('aria-label') || f.getAttribute('aria-labelledby'); if (!ok) out.fieldNoLabel.push(f.name || f.id); }
  let last = 0; for (const h of document.querySelectorAll('h1, h2, h3, h4, h5, h6')) { if (h.closest('[aria-hidden="true"]')) continue; const lv = +h.tagName[1]; if (last && lv > last + 1) out.headingSkips.push(`h${last} to h${lv}: "${h.textContent.trim().slice(0, 50)}"`); last = lv; }
  return out;
}"""


def main():
    paths = [a for a in sys.argv[1:] if not a.startswith('--')]
    if not paths:
        built = lambda p: (DIST / ('404.html' if p == '/404' else p.lstrip('/') + 'index.html')).exists()
        paths = [p['path'] for p in json.loads((ROOT / 'src/data/pages.json').read_text()) if built(p['path'])]
    httpd, port = serve()
    failures, report = 0, []
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        for path in paths:
            for w in (390, 1440):
                ctx = browser.new_context(viewport={'width': w, 'height': 900}, reduced_motion='reduce')
                page = ctx.new_page()
                rel = '404.html' if path in ('/404', '/404/') else path.lstrip('/')
                page.goto(f'http://127.0.0.1:{port}/{rel}', wait_until='load')
                page.wait_for_timeout(300)
                r = page.evaluate(CHECK)
                bad = {k: v for k, v in r.items() if k not in ('skipLink', 'photoText') and v}
                if not r['skipLink']:
                    bad['skipLink'] = 'missing'
                failures += sum(len(v) if isinstance(v, list) else 1 for v in bad.values())
                if bad or r['photoText']:
                    report.append({'path': path, 'width': w, **bad, **({'photoText (look at it)': r['photoText']} if r['photoText'] else {})})
                ctx.close()
        browser.close()
    httpd.shutdown()
    print(json.dumps(report, indent=1) if report else '[]')
    print(f'pages {len(paths)}, widths 2, failures {failures}')
    sys.exit(1 if failures else 0)


if __name__ == '__main__':
    main()
