"""Reads page entries from reference/PAGE-BLUEPRINT-chatsworthpt-v1.html (one <h3>P-0xx Name</h3> plus a
two-column table per page). Shared by the deck converter, the entry splitter and the blueprint cross-check."""
import html, json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
BP = (ROOT / 'reference/PAGE-BLUEPRINT-chatsworthpt-v1.html').read_text(encoding='utf-8')


def _text(cell):
    cell = re.sub(r'<br\s*/?>', '\n', cell)
    return html.unescape(re.sub(r'<[^>]+>', '', cell)).strip()


def entry_ids():
    return re.findall(r'<h3>(P-\d{3})\s', BP)


def entry(pid):
    a = BP.index(f'<h3>{pid} ')
    nxt = re.search(r'<h[23]>', BP[a + 5:])
    chunk = BP[a:a + 5 + nxt.start()] if nxt else BP[a:]
    title = _text(re.search(r'<h3>(.*?)</h3>', chunk, re.S).group(1))
    fields = {}
    for k, v in re.findall(r'<tr><td>(.*?)</td><td>(.*?)</td></tr>', chunk, re.S):
        key = re.sub(r'\s*\(\d+ characters\)', '', _text(k))
        fields[key] = _text(v)
    return {'id': pid, 'heading': title, 'fields': fields, 'html': chunk}


RULINGS = ROOT / 'reference/SEO-RULINGS.json'


def rulings():
    """Vlad's rulings that change a blueprint SEO field (reference/SEO-RULINGS.json), keyed by page id."""
    if not RULINGS.exists():
        return {}
    return {k: v for k, v in json.loads(RULINGS.read_text(encoding='utf-8')).items() if k.startswith('P-')}


def seo(pid):
    try:
        f = entry(pid)['fields']
        out = {'h1': f.get('H1 (exact)'), 'title': f.get('Meta title'), 'description': f.get('Meta description')}
    except ValueError:  # a page added after the blueprint: its fields come from SEO-RULINGS.json only
        out = {'h1': None, 'title': None, 'description': None}
    for k in ('h1', 'title', 'description'):
        v = rulings().get(pid, {}).get(k)
        if v:
            out[k] = v
    return out
