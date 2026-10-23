"""Ship gates, counted from dist/ (never from memory). Brief section 7, plus the blueprint cross-check.

Run after `npm run build`:  python3 -I scripts/gates.py [--json out.json]
Prints a table: gate, count now, expected now (for the pages built so far), expected at the end.
Exit code 1 when any hard gate fails. Counts are made by counting the things in the built files.
"""
import json, re, socket, sys, threading, urllib.request
from collections import defaultdict
from functools import partial
from html.parser import HTMLParser
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
sys.path.insert(0, str(ROOT / 'scripts/lib'))
import blueprint  # noqa: E402

SITE = 'https://chatsworthpt.com'
PAGES = json.loads((ROOT / 'src/data/pages.json').read_text())
site_ts = (ROOT / 'src/data/site.ts').read_text()
CITY_LIVE = 'CITY_PAGES_LIVE = true' in site_ts
LEGAL_READY = 'LEGAL_TEXT_READY = true' in site_ts
PREVIEW = 'PREVIEW = true' in site_ts
ADDRESS = re.search(r"addressLine: '([^']+)'", site_ts).group(1)
BANNED = ['whether you want', "in today's digital landscape", 'look no further', 'unlock', 'elevate', 'game-changer', 'seamless', "we've got you covered", 'we have got you covered']
OTHER_CLIENTS = ['Fred Astaire', 'Solana Beach', 'Alhambra', 'San Jose', 'Valley Fair', 'JenErg', 'Jenerg', 'Northridge Photo Studio', 'NPStudio', 'Ballroom Pages', 'ballroompages', 'All Year Heating', "Tony's Pool", 'sfvpoolcare', 'Lomas Santa Fe', '2121 Orange', 'Suite I,', 'Suite I ', 'z-ratings']
NAV_PATHS = {'/our-services/', '/back-pain-therapy/', '/sports-injury-recovery/', '/pre-post-surgical-rehabilitation/', '/orthopedic-rehabilitation/', '/balance-and-fall-prevention/', '/pain-management/', '/pediatric-physical-therapy/', '/neurological-rehabilitation/', '/red-light-therapy/', '/therapeutic-ultrasound/', '/electrical-stimulation-tens-nmes/', '/personal-training-weight-loss/', '/conditions/', '/conditions/sciatica/', '/conditions/herniated-disc/', '/conditions/neck-pain/', '/conditions/shoulder-pain-rotator-cuff/', '/conditions/frozen-shoulder/', '/conditions/knee-pain/', '/conditions/acl-recovery/', '/conditions/knee-replacement-recovery/', '/conditions/hip-replacement-recovery/', '/conditions/ankle-sprain/', '/conditions/plantar-fasciitis/', '/conditions/vertigo-bppv/', '/about-us/', '/reviews/', '/first-visit/', '/insurance-and-cost/', '/faqs/', '/blog/', '/contact/'}


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.h1 = 0
        self.links = []  # (href, text, in_nav, in_footer, in_main)
        self.imgs = []
        self.meta = {}
        self.canonical = None
        self.title = ''
        self.ld = []
        self.ids = set()
        self.dup_ids = []
        self.text = []
        self.footer_address = []
        self.sticky = None
        self.nav_current = []
        self.marks = 0
        self.ph = 0
        self.legal_ph = 0
        self.h1_text = ''
        self.review_keys = []
        self._stack = []
        self._in = defaultdict(int)
        self._a = None
        self._cap = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        cls = (a.get('class') or '').split()
        if 'id' in a:
            if a['id'] in self.ids:
                self.dup_ids.append(a['id'])
            self.ids.add(a['id'])
        self._stack.append((tag, cls))
        for k in ('script', 'style', 'title', 'nav', 'footer', 'main', 'h1'):
            if tag == k:
                self._in[k] += 1
        if tag == 'nav' and 'nav' in cls:
            self._in['mainnav'] += 1
        if tag == 'span' and 'footer-address' in cls:
            self._cap = 'addr'
        if tag == 'h1':
            self.h1 += 1
        if tag == 'a':
            self._a = [a.get('href', ''), '', bool(self._in['mainnav']), bool(self._in['footer']), bool(self._in['main'])]
            if self._in['mainnav'] and a.get('aria-current') == 'page':
                self.nav_current.append(a.get('href'))
        if tag in ('img', 'source', 'video'):
            for k in ('src', 'srcset', 'poster'):
                if a.get(k):
                    for part in a[k].split(','):
                        self.imgs.append(part.strip().split(' ')[0])
        if tag == 'meta':
            key = a.get('name') or a.get('property')
            if key:
                self.meta[key] = a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical = a.get('href')
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self._cap = 'ld'
            self.ld.append('')
        if tag == 'div' and a.get('id') == 'sticky':
            self.sticky = (a.get('data-page'), a.get('data-book-label'))
        if tag == 'mark' and 'confirm' in cls:
            self.marks += 1
        if 'ph' in cls and a.get('role') == 'img':
            self.ph += 1
        if 'legal-placeholder' in cls:
            self.legal_ph += 1
        if tag == 'figure' and a.get('data-review'):
            self.review_keys.append(a['data-review'])

    def handle_endtag(self, tag):
        while self._stack:
            t, cls = self._stack.pop()
            if t == 'nav' and 'nav' in cls:
                self._in['mainnav'] -= 1
            if t in ('script', 'style', 'title', 'nav', 'footer', 'main', 'h1'):
                self._in[t] -= 1
            if t == tag:
                break
        if tag == 'a' and self._a:
            self.links.append(tuple(self._a))
            self._a = None
        if tag == 'script' and self._cap == 'ld':
            self._cap = None
        if tag == 'span' and self._cap == 'addr':
            self._cap = None

    def handle_data(self, data):
        if self._cap == 'ld':
            self.ld[-1] += data
            return
        if self._cap == 'addr':
            self.footer_address.append(data)
        if self._in['title']:
            self.title += data
            return
        if self._in['script'] or self._in['style']:
            return
        if self._in['h1']:
            self.h1_text += data
        if self._a is not None:
            self._a[1] += data
        self.text.append(data)


def page_file(path):
    return DIST / '404.html' if path == '/404' else DIST / path.lstrip('/') / 'index.html'


def main():
    html_files = sorted(DIST.rglob('*.html'))
    built = {p['path']: p for p in PAGES if page_file(p['path']).exists()}
    parsed = {}
    for path, p in built.items():
        pg = Page()
        pg.feed(page_file(path).read_text(encoding='utf-8'))
        parsed[path] = pg
    n = len(built)
    is404 = lambda path: path == '/404'
    city = {'/physical-therapy-northridge/', '/physical-therapy-porter-ranch/'}
    legal = {'/privacy-policy/', '/terms-of-service/'}
    noindex_expected = {p for p in built if is404(p) or (p in city and not CITY_LIVE) or (p in legal and not LEGAL_READY)}
    rows = []
    hard_fail = []

    def gate(name, count, expect_now, expect_end, hard=True, detail=None):
        ok = (count == expect_now) if expect_now is not None else True
        rows.append({'gate': name, 'count': count, 'expected_now': expect_now, 'expected_end': expect_end, 'ok': ok, 'detail': detail})
        if hard and not ok:
            hard_fail.append(name)

    gate('HTML pages in dist', len(html_files), n, '53 (52 index.html plus 404.html)', detail=[str(f.relative_to(DIST)) for f in html_files if f.relative_to(DIST).as_posix() not in {('404.html' if is404(p) else p.lstrip('/') + 'index.html') for p in built}])
    one_h1 = [p for p, g in parsed.items() if g.h1 == 1]
    gate('Pages with exactly one h1', len(one_h1), n, 53, detail=[p for p in parsed if p not in one_h1])
    canon = [p for p, g in parsed.items() if g.canonical == SITE + (p if p != '/' else '/')]
    gate('Pages with a canonical on https://chatsworthpt.com (own URL)', len(canon), n - (1 if '/404' in built else 0), '50 (the 404 has none)', detail=[p for p in parsed if p not in canon and not is404(p)])
    ld_total, ld_bad, ld_multi = 0, [], []
    for p, g in parsed.items():
        ld_total += len(g.ld)
        if len(g.ld) > 1 or (is404(p) and g.ld) or (not is404(p) and len(g.ld) != 1):
            ld_multi.append((p, len(g.ld)))
        for raw in g.ld:
            try:
                d = json.loads(raw)
                assert '@graph' in d
            except Exception as e:  # noqa: BLE001
                ld_bad.append((p, str(e)[:80]))
    gate('JSON-LD scripts (one per page, none on the 404)', ld_total, n - (1 if '/404' in built else 0), 52, detail=ld_multi)
    gate('JSON-LD scripts that fail to parse', len(ld_bad), 0, 0, detail=ld_bad)
    noidx = {p for p, g in parsed.items() if 'noindex' in g.meta.get('robots', '')}
    gate('Pages with noindex', len(noidx), len(noindex_expected), '3 (two city pages and the 404), plus the four legal pages until their text lands', detail=sorted(noidx ^ noindex_expected))
    sm_urls = []
    for f in DIST.glob('sitemap-*.xml'):
        if f.name == 'sitemap-index.xml':
            continue
        sm_urls += re.findall(r'<loc>(.*?)</loc>', f.read_text())
    expect_sm = sorted(SITE + p for p in built if p not in noindex_expected)
    gate('URLs in the sitemap', len(sm_urls), len(expect_sm), '50, or 46 while the four legal pages are noindex', detail=sorted(set(sm_urls) ^ set(expect_sm)))
    # Text gates across every served text file.
    text_files = [f for f in DIST.rglob('*') if f.is_file() and f.suffix in ('.html', '.xml', '.txt', '.js', '.css', '.json', '') and f.name not in ('.DS_Store',)]
    dash_hits = []
    for f in text_files:
        t = f.read_text(encoding='utf-8', errors='ignore')
        c = t.count('\u2014') + t.count('\u2013')
        if c:
            dash_hits.append((str(f.relative_to(DIST)), c))
    gate('Em dashes and en dashes (every served text file)', sum(c for _, c in dash_hits), 0, 0, detail=dash_hits)
    src_dash = []
    for f in list((ROOT / 'src').rglob('*')) + list((ROOT / 'scripts').rglob('*')) + list((ROOT / 'functions').rglob('*')) + list((ROOT / 'public').glob('_*')) + [ROOT / 'COMPONENTS.md', ROOT / 'README.md', ROOT / 'astro.config.mjs', ROOT / 'tailwind.config.mjs']:
        if f.is_file() and f.suffix in ('.ts', '.astro', '.mjs', '.js', '.py', '.css', '.json', '.md', '') :
            t = f.read_text(encoding='utf-8', errors='ignore')
            c = t.count('\u2014') + t.count('\u2013')
            if c:
                src_dash.append((str(f.relative_to(ROOT)), c))
    gate('Em dashes and en dashes in source and comments', sum(c for _, c in src_dash), 0, 0, detail=src_dash)
    body_text = {p: ' '.join(g.text) for p, g in parsed.items()}
    raw_html = {p: page_file(p).read_text(encoding='utf-8') for p in parsed}
    dollar = [(p, m) for p, t in raw_html.items() for m in re.findall(r'\$\d[\d,.]*', t)]
    # Dr. Ed's direct-pay rates, relayed by Vlad on 21 Oct 2026, are the only dollar figures allowed.
    confirmed = {'$175', '$125'}
    stray = [(p, m) for p, m in dollar if m.rstrip('.,') not in confirmed]
    gate('$ followed by a digit, other than the confirmed rates $175 and $125', len(stray), 0, 0, detail=stray)
    gate('Confirmed rate mentions, $175 and $125 (not a gate)', len(dollar) - len(stray), None, 'reported', hard=False)
    banned = [(p, b) for p, t in body_text.items() for b in BANNED if b in t.lower()]
    banned += [(p, b) for p, t in raw_html.items() for b in BANNED if b in re.sub(r'<[^>]+>', ' ', t).lower() and (p, b) not in banned]
    gate('Banned phrases (section 2 list)', len(banned), 0, 0, detail=banned)
    moj = [(p, t.count('Ã')) for p, t in raw_html.items() if 'Ã' in t]
    gate('Mojibake (Ã)', sum(c for _, c in moj), 0, 0, detail=moj)
    old = [(p, w) for p, t in raw_html.items() for w, rx in (('19860', r'19860'), ('Suite 201', r'Suite 201'), ('surf', r'\bsurf(?:ing|er|ers|board)?\b')) if re.search(rx, t, re.I)]
    gate('"19860", "Suite 201", "surf"', len(old), 0, 0, detail=old)
    dn = sorted(p for p, t in body_text.items() if 'dry needling' in t.lower())
    gate('"dry needling" outside /faqs/', len([p for p in dn if p != '/faqs/']), 0, 'only on /faqs/', detail=dn)
    oc = [(p, w) for p, t in raw_html.items() for w in OTHER_CLIENTS if w in t]
    gate("Other clients' names, studios and addresses", len(oc), 0, 0, detail=oc)
    missing_imgs = []
    for p, g in parsed.items():
        for src in g.imgs:
            if src.startswith('http'):
                continue
            target = DIST / src.split('?')[0].lstrip('/')
            if not target.exists():
                missing_imgs.append((p, src))
    gate('Images referenced by src or srcset that do not exist in dist', len(missing_imgs), 0, 0, detail=missing_imgs)
    # A link that wraps a paragraph, list, heading or section usually means markup was re-opened by mistake.
    wraps = {}
    for wp, wt in raw_html.items():
        wn = len(re.findall(r'<a\b[^>]*>(?:(?!</a>).)*?<(?:div|p|ul|ol|h[1-6]|section|table)\b', wt, re.S))
        if wn:
            wraps[wp] = wn
    gate('Links wrapping a paragraph, list, heading or section', sum(wraps.values()), 0, 0, detail=wraps)
    dups = {p: g.dup_ids for p, g in parsed.items() if g.dup_ids}
    gate('Duplicate id attributes on a page', sum(len(v) for v in dups.values()), 0, 0, detail=dups)
    gate('PHOTO: placeholders (elements, not a gate)', sum(g.ph for g in parsed.values()), None, 'reported', hard=False, detail={p: g.ph for p, g in parsed.items() if g.ph})
    # The legal placeholder paragraph holds its own [CONFIRM] mark, so it is counted once.
    marks = {p: max(g.marks, g.legal_ph) for p, g in parsed.items() if g.marks or g.legal_ph}
    gate('[CONFIRM markers rendered (not a gate while PREVIEW is true)', sum(marks.values()), None if PREVIEW else 0, '0 with PREVIEW false before launch', hard=not PREVIEW, detail=marks)
    titles = {p: g.title.strip() for p, g in parsed.items()}
    descs = {p: g.meta.get('description', '') for p, g in parsed.items()}
    t_ok = [p for p, t in titles.items() if len(t) <= 60 and list(titles.values()).count(t) == 1]
    d_ok = [p for p, d in descs.items() if 0 < len(d) <= 155 and list(descs.values()).count(d) == 1]
    gate('Meta titles 60 or fewer and unique', len(t_ok), n, 53, detail=[(p, len(titles[p])) for p in titles if p not in t_ok])
    gate('Meta descriptions 155 or fewer and unique', len(d_ok), n, 53, detail=[(p, len(descs[p])) for p in descs if p not in d_ok])
    # Links
    broken, pending, inbound = [], [], defaultdict(set)
    paths = set(built)
    planned = {pp['path'] for pp in PAGES}
    for p, g in parsed.items():
        for href, _text, _nav, _foot, _main in g.links:
            if not href or href.startswith(('http', 'mailto:', 'tel:')):
                continue
            target, _, frag = href.partition('#')
            if target == '':
                target = p
            if target not in paths:
                (pending if target in planned else broken).append((p, href))
                continue
            if frag and frag not in parsed[target].ids:
                broken.append((p, href))
            if target != p:
                inbound[target].add(p)
    gate('Internal links that do not resolve to a built page or anchor', len(broken), 0, 0, detail=broken[:40])
    gate('Internal links to planned pages not built yet (not a gate until the end)', len(pending), None, 0, hard=False, detail=sorted({h for _, h in pending})[:60])
    exempt = {'/404'} | (set() if CITY_LIVE else city)
    few = [(p, len(inbound[p])) for p in built if p not in exempt and len(inbound[p]) < 2]
    gate('Pages with fewer than two inbound links', len(few), 0, '0 (the 404 and the city pages excepted while unlinked)', detail=few)
    by_id = {pp['id']: pp['path'] for pp in PAGES}
    csv_miss = []
    for path, meta in built.items():
        for src_id in meta['linksFrom']:
            src = by_id.get(src_id)
            if src in built and path not in [h.partition('#')[0] or src for h, *_ in parsed[src].links]:
                if not (meta['type'] == 'city' and not CITY_LIVE):
                    csv_miss.append((src, path))
    gate('Architecture CSV minimum inbound links missing', len(csv_miss), 0, 0, detail=csv_miss)
    if not CITY_LIVE:
        city_links = [(p, h) for p, g in parsed.items() for h, *_ in g.links if h.partition('#')[0] in city and p not in city]
        gate('Links to the city pages while CITY_PAGES_LIVE is false', len(city_links), 0, 0, detail=city_links)
    nav_pages = [p for p in built if p in NAV_PATHS]
    nav_ok = [p for p in nav_pages if p in parsed[p].nav_current]
    gate('aria-current="page" on the matching nav item', len(nav_ok), len(nav_pages), 'every page with a nav match (33)', detail=[p for p in nav_pages if p not in nav_ok])
    sticky_ok = [p for p, g in parsed.items() if g.sticky and g.sticky[0] == built[p]['id'] and g.sticky[1]]
    gate('Sticky bar present with the per-page label', len(sticky_ok), n, 53, detail=[p for p in parsed if p not in sticky_ok])
    bare = []
    for p, t in raw_html.items():
        body = t[t.find('<body'):]
        body = re.sub(r'<script\b.*?</script>', '', body, flags=re.S)
        for m in re.finditer(r'\(818\) 749-3205', body):
            before = body[:m.start()]
            if before.rfind('<a ') <= before.rfind('</a>') or 'tel:' not in before[before.rfind('<a '):]:
                bare.append(p)
    gate('Bare phone numbers (not inside a tel: link)', len(bare), 0, 0, detail=sorted(set(bare)))
    addr_ok = [p for p, g in parsed.items() if ''.join(g.footer_address).strip() == ADDRESS]
    gate('Address string identical in every footer', len(addr_ok), n, 53, detail=[p for p in parsed if p not in addr_ok])
    # Reviews: one per service or conditions page, never shared between them.
    rev_pages = {p: g.review_keys for p, g in parsed.items() if built[p]['type'] in ('service', 'condition')}
    multi = [(p, k) for p, k in rev_pages.items() if len(k) > 1]
    seen = defaultdict(list)
    for p, ks in rev_pages.items():
        for k in ks:
            seen[k].append(p)
    shared = {k: v for k, v in seen.items() if len(v) > 1}
    gate('Service or conditions pages with more than one review', len(multi), 0, 0, detail=multi)
    gate('Reviews shared by two service or conditions pages', len(shared), 0, 0, detail=shared)
    # Blueprint cross-check: H1, title and description equal the entry.
    cross = []
    for p, g in parsed.items():
        e = blueprint.seo(built[p]['id'])
        if e['h1'] and g.h1_text.strip() != e['h1']:
            cross.append((p, 'h1', g.h1_text.strip()[:70], e['h1'][:70]))
        if e['title'] and titles[p] != e['title']:
            cross.append((p, 'title', titles[p], e['title']))
        if e['description'] and descs[p] != e['description']:
            cross.append((p, 'description', descs[p][:70], e['description'][:70]))
    gate('Blueprint cross-check: H1, meta title and description equal the entry', len(cross), 0, 0, detail=cross)
    # Every built URL returns 200 from a local server over dist.
    class H(SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    s = socket.socket(); s.bind(('127.0.0.1', 0)); port = s.getsockname()[1]; s.close()
    httpd = ThreadingHTTPServer(('127.0.0.1', port), partial(H, directory=str(DIST)))
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    ok200 = []
    for p in built:
        url = f'http://127.0.0.1:{port}' + ('/404.html' if p == '/404' else p)
        try:
            with urllib.request.urlopen(url, timeout=10) as r:
                if r.status == 200:
                    ok200.append(p)
        except Exception:  # noqa: BLE001
            pass
    httpd.shutdown()
    gate('Built URLs that return 200 from a local server over dist', len(ok200), n, 53, detail=[p for p in built if p not in ok200])

    width = max(len(r['gate']) for r in rows)
    print(f"{'Gate'.ljust(width)}  Count  Now   End")
    for r in rows:
        mark = 'ok ' if r['ok'] else 'FAIL'
        print(f"{r['gate'].ljust(width)}  {str(r['count']).rjust(5)}  {str(r['expected_now']).rjust(4)}  {r['expected_end']}  {mark}")
        if r['detail'] and (not r['ok'] or r['expected_now'] is None):
            print('    ', json.dumps(r['detail'])[:600])
    print(f'\nPages built: {n} of 53. Hard gates failing: {len(hard_fail)}' + (f' ({", ".join(hard_fail)})' if hard_fail else ''))
    if '--json' in sys.argv:
        Path(sys.argv[sys.argv.index('--json') + 1]).write_text(json.dumps(rows, indent=1))
    sys.exit(1 if hard_fail else 0)


if __name__ == '__main__':
    main()
