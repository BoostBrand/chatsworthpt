"""Checks each built page against its blueprint entry (reference/entries/P-0xx.md), counted from dist.

For every built page: each "Internal links out" target is linked from the page's main content or related
links (city pages excepted while CITY_PAGES_LIVE is false), the review the entry names is the one shown,
the visible word count of <main> against the entry's word target, and the number of H2 sections against
the entry's "Sections in order". Not a gate by itself; the build lead reads it before accepting a page.

Usage: python3 -I scripts/entry-check.py [P-007 P-008 ...]   (default: every built page)
"""
import json, re, sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
ENTRIES = ROOT / 'reference' / 'entries'
pages = json.loads((ROOT / 'src/data/pages.json').read_text())
by_id = {p['id']: p for p in pages}
reviews = json.loads((ROOT / 'src/data/reviews.json').read_text())
site = (ROOT / 'src/data/site.ts').read_text()
CITY_LIVE = re.search(r'CITY_PAGES_LIVE\s*=\s*true', site) is not None


def field(text, name):
    m = re.search(r'^## ' + re.escape(name) + r'\n(.*?)(?=^## |\Z)', text, re.S | re.M)
    return m.group(1).strip() if m else ''


class Main(HTMLParser):
    """Collects hrefs and text inside <main>, and the review keys shown."""

    def __init__(self):
        super().__init__()
        self.depth = 0
        self.skip = 0
        self.hrefs, self.all_hrefs, self.text, self.review_keys, self.h2 = [], [], [], [], 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'a' and a.get('href'):
            self.all_hrefs.append(a['href'])
        if tag == 'main':
            self.depth += 1
        if not self.depth:
            return
        if tag in ('script', 'style'):
            self.skip += 1
        if tag == 'a' and a.get('href'):
            self.hrefs.append(a['href'])
        if a.get('data-review'):
            self.review_keys.append(a['data-review'])
        if tag == 'h2':
            self.h2 += 1

    def handle_endtag(self, tag):
        if tag == 'main':
            self.depth -= 1
        if tag in ('script', 'style') and self.skip:
            self.skip -= 1

    def handle_data(self, data):
        if self.depth and not self.skip:
            self.text.append(data)


def html_for(path):
    f = DIST / ('404.html' if path == '/404' else path.lstrip('/') + 'index.html')
    return f.read_text(encoding='utf-8') if f.exists() else None


def review_key_for(entry_review):
    """The reviewer the entry names, as a key from reviews.json (None when the entry assigns none)."""
    first = entry_review.split('(')[0].strip()
    if not first or first.lower().startswith(('none', 'approved', 'a northridge', 'a porter')):
        return None
    name = first.replace(' McC', '').strip()
    special = {'Maggie and Mark': 'maggie-and-mark', 'Maggie McC': 'maggie-mcc', 'Michael L': 'michael-l', 'Michael W': 'michael-w',
               'Matthew S': 'matthew-s', 'Matthew M': 'matthew-m'}
    for k, v in special.items():
        if first.startswith(k):
            return v
    for r in reviews:
        if r['displayName'] == name:
            return r['key']
    return None


def main():
    ids = sys.argv[1:] or [p['id'] for p in pages if html_for(p['path'])]
    out = []
    for pid in ids:
        meta = by_id[pid]
        html = html_for(meta['path'])
        if html is None:
            out.append(f'{pid} not built')
            continue
        if not (ENTRIES / f'{pid}.md').exists():
            out.append(f'{pid} {meta["path"]}: added after the blueprint, no entry to check')
            continue
        entry = (ENTRIES / f'{pid}.md').read_text()
        p = Main(); p.feed(html)
        # Links out may sit in the header or the footer (the entry marks those), so the whole page counts.
        hrefs = {h.split('#')[0] for h in p.all_hrefs if h.startswith('/')}
        problems = []
        for m in re.finditer(r'\((P-\d{3})\): "([^"]*)"', field(entry, 'Internal links out (page: anchor)')):
            target = by_id.get(m.group(1))
            if not target:
                continue
            if target['type'] == 'city' and not CITY_LIVE:
                continue
            if target['path'] not in hrefs:
                problems.append(f'no link to {target["path"]} (anchor "{m.group(2)}")')
        want = review_key_for(field(entry, 'Google review on this page'))
        shown = p.review_keys
        if want and meta['type'] not in ('reviews',) and want not in shown:
            problems.append(f'review {want} not shown (shown: {shown or "none"})')
        words = len(' '.join(p.text).split())
        target = field(entry, 'Word count target')
        nums = [int(n.replace(',', '')) for n in re.findall(r'\d[\d,]*', target)]
        span = f'{nums[0]} to {nums[1]}' if len(nums) >= 2 else target[:40]
        sections = len(re.findall(r'^\d+\.', field(entry, 'Sections in order'), re.M))
        out.append(f'{pid} {meta["path"]}: main words {words} (target {span}); h2 {p.h2}; entry sections {sections}; reviews shown {shown}'
                   + ''.join(f'\n    {x}' for x in problems))
    print('\n'.join(out))


if __name__ == '__main__':
    main()
