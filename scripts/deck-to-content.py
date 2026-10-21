"""Batch A: turns the six approved pages in copy deck v2.1 into content files, word for word.

Reads reference/COPY-DECK-chatsworthpt-inner-pages-v2-1.html, keeps every sentence exactly as approved
(the deck master already carries the three rulings: surgeon notes cut, concussion cut, BPPV confirmed),
and adds only the blueprint's gap fills: links on existing words down to the conditions pages and the
blog post links. Reviews come from the reviews CSV by key (the CSV is the only source for review text).
Meta title and description come from the blueprint entry; the script stops if the deck's H1 differs from
the blueprint's. Run: python3 -I scripts/deck-to-content.py
"""
import html, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
deck = (ROOT / 'reference/COPY-DECK-chatsworthpt-inner-pages-v2-1.html').read_text(encoding='utf-8')
bp = (ROOT / 'reference/PAGE-BLUEPRINT-chatsworthpt-v1.html').read_text(encoding='utf-8')


def inline(s):
    """Deck HTML to the content mini-markup: <b> to **, <a> to [text](href); <i> notes are dropped."""
    s = re.sub(r'<i>.*?</i>', '', s, flags=re.S)
    s = re.sub(r'<br\s*/?>', ' ', s)
    s = re.sub(r'<a href="([^"]+)">(.*?)</a>', lambda m: f'[{m.group(2)}]({m.group(1)})', s)
    s = re.sub(r'</?b>', '**', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s)
    return re.sub(r'\s+', ' ', s).strip()


sys.path.insert(0, str(ROOT / 'scripts/lib'))
import blueprint  # noqa: E402


def entry(pid):
    return blueprint.seo(pid)


pages = re.split(r'<h1>Page \d+: ', deck)[1:]
names = ['neuro', 'pediatric', 'back', 'sports', 'postop', 'balance']
parsed = {}
for name, chunk in zip(names, pages):
    chunk = chunk.split('<hr>')[0]
    secs = re.split(r'<h2>Section \d+: ', chunk)[1:]
    out = {}
    for s in secs:
        title, body = s.split('</h2>', 1)
        out[html.unescape(title.strip())] = body
    parsed[name] = out


def field_p(body, label):
    m = re.search(r'<p><b>' + re.escape(label) + r'</b>\s*(.*?)</p>', body, re.S)
    return m.group(1) if m else None


def h2_of(body):
    return inline(field_p(body, 'H2:'))


def paras(body):
    """Body paragraphs and lists in order, skipping the labelled build fields and notes."""
    blocks = []
    for m in re.finditer(r'<p>(.*?)</p>|<ul>(.*?)</ul>|<ol>(.*?)</ol>', body, re.S):
        if m.group(1) is not None:
            p = m.group(1)
            if p.startswith('<b>') and re.match(r'<b>[^<]*:</b>', p):
                continue  # H2:, Image slot:, Buttons:, Build notes: and similar labels
            if p.startswith('Note:') or p.startswith('Each item links') or p.startswith('Lead line:') or p.startswith('Form:') or p.startswith('Links under') or p.startswith('<i>'):
                continue
            blocks.append({'type': 'p', 'text': inline(p)})
        elif m.group(2) is not None:
            blocks.append({'type': 'ul', 'items': [inline(li) for li in re.findall(r'<li>(.*?)</li>', m.group(2), re.S)]})
        else:
            blocks.append({'type': 'ol', 'raw': re.findall(r'<li>(.*?)</li>', m.group(3), re.S)})
    return blocks


def leads(items):
    out = []
    for it in items:
        m = re.match(r'\*\*(.+?)\*\* (.*)$', it)
        if not m:
            sys.exit(f'Lead item without a bold lead: {it}')
        out.append({'lead': m.group(1), 'text': m.group(2)})
    return out


def faqs(body):
    items = []
    for li in re.findall(r'<li>(.*?)</li>', re.search(r'<ol>(.*?)</ol>', body, re.S).group(1), re.S):
        q, a = re.match(r'<b>(.*?)</b><br>(.*)$', li, re.S).groups()
        items.append({'q': inline(q), 'a': inline(a)})
    return items


def hero_of(body):
    h1 = inline(re.search(r'<b>H1 \(chosen\):</b>(.*?)<br>', body, re.S).group(1))
    promise = inline(re.search(r'<b>Promise line \(chosen\):</b>(.*?)<br>', body, re.S).group(1))
    buttons = field_p(body, 'Buttons:')
    book = re.search(r'"([^"]+)"', buttons).group(1)
    slot = field_p(body, 'Image slot:')
    return h1, promise, book, slot


def booking_of(body):
    h2 = h2_of(body)
    lead = inline(re.search(r'<p>Lead line: (.*?)</p>', body, re.S).group(1))
    form = re.search(r'<p>Form: (.*?)</p>', body, re.S).group(1)
    pre = re.search(r'preselected "([^"]+)"', form).group(1)
    prompt = re.search(r'prompt "([^"]+)"', form)
    button = re.search(r'Button "([^"]+)"', form).group(1)
    links = re.findall(r'<a href="([^"]+)">(.*?)</a>', re.search(r'<p>Links under the booking block: (.*?)</p>', body, re.S).group(1))
    return {'h2': h2, 'lead': lead, 'pre': pre, 'prompt': prompt.group(1) if prompt else None, 'button': button, 'links': links}


def review_ctx(body):
    """The deck's attribution line, e.g. 'George, Google review, August 2025, severe lower back pain.'"""
    ps = re.findall(r'<p>(.*?)</p>', body, re.S)
    text = ps[0]
    attribution = text.split('<br>')[1]
    attribution = re.sub(r'\(.*?\)', '', html.unescape(attribution)).strip()
    ctx = attribution.split(', ', 3)[3].rstrip('.') if attribution.count(',') >= 3 else None
    return ctx


# ---------------------------------------------------------------- per-page assembly
# Booking form option labels from the homepage list ("Pre and post-op" ruling: "Before or after surgery").
FORM_OPTION = {
    'Neurological rehabilitation': 'Neurological rehabilitation',
    'Pediatric physical therapy': 'Pediatric physical therapy',
    'Back pain': 'Back pain',
    'Sports injury': 'Sports injury',
    'Recovery after surgery': 'Before or after surgery',
    'Balance or fall prevention': 'Balance or fall prevention',
}
# Related links under the booking block: exact page names (the deck's "Post-op physical therapy" becomes the
# ruled page name "Pre and post-op physical therapy" in this structural list only; body copy is unchanged).
PAGE_NAME = {
    '/our-services/': 'All services',
    '/balance-and-fall-prevention/': 'Balance and fall prevention',
    '/pre-post-surgical-rehabilitation/': 'Pre and post-op physical therapy',
    '/sports-injury-recovery/': 'Sports injury recovery',
    '/back-pain-therapy/': 'Back pain therapy',
    '/pain-management/': 'Pain management',
    '/orthopedic-rehabilitation/': 'Orthopedic rehabilitation',
    '/pediatric-physical-therapy/': 'Pediatric physical therapy',
    '/neurological-rehabilitation/': 'Neurological rehabilitation',
}

CONFIG = {
    'back': dict(
        id='P-004', path='/back-pain-therapy/', file='back-pain-therapy', review='george', service_type='Back pain therapy',
        image=dict(src='/img/back-pain-therapy-chatsworth.webp', alt='Dr. Ed guiding a patient through a core stability exercise for back pain at Chatsworth Physical Therapy', width=900, height=900),
        order=['Who this is for', 'What treatment looks like with Dr. Ed', 'Conditions treated', 'One real Google review', 'Insurance and referrals', 'FAQs (FAQ schema)'],
        cond_links={'Sciatica and pinched nerves': '/conditions/sciatica/', 'Herniated or bulging discs': '/conditions/herniated-disc/', 'Mid-back and neck pain that travels with the lower back': '/conditions/neck-pain/'},
        word_links={}, blog=None,
    ),
    'sports': dict(
        id='P-005', path='/sports-injury-recovery/', file='sports-injury-recovery', review='maggie-mcc', service_type='Sports injury recovery',
        image=dict(src='/img/sports-injury-rehab-chatsworth.webp', alt='Ankle treatment during a sports injury rehab session in Chatsworth', width=900, height=900),
        order=['Who this is for', 'What treatment looks like with Dr. Ed', 'Back to your sport, not just out of pain', 'Conditions treated', 'One real Google review', 'Insurance and referrals', 'FAQs (FAQ schema)'],
        cond_links={'Ankle sprains and chronic ankle instability': '/conditions/ankle-sprain/', 'ACL, MCL and meniscus injuries, before and after surgery': '/conditions/acl-recovery/', "Runner's knee, patellar tendinitis, IT band pain": '/conditions/knee-pain/', 'Rotator cuff strains and tears, shoulder impingement, labral injuries': '/conditions/shoulder-pain-rotator-cuff/', 'Achilles tendinitis and plantar fasciitis': '/conditions/plantar-fasciitis/'},
        word_links={}, blog=None,
    ),
    'postop': dict(
        id='P-006', path='/pre-post-surgical-rehabilitation/', file='pre-post-surgical-rehabilitation', review='maggie-and-mark', service_type='Pre and post-op physical therapy',
        image=dict(src='/img/post-op-physical-therapy-chatsworth.webp', alt='Knee taping during post-op physical therapy in Chatsworth', width=900, height=900),
        order=['Who this is for', 'What treatment looks like with Dr. Ed', 'Knee replacement, hip replacement and ACL', 'Surgeries we rehabilitate', 'One real Google review', 'Insurance and referrals', 'FAQs (FAQ schema)'],
        cond_links={'Total and partial knee replacement': '/conditions/knee-replacement-recovery/', 'Total hip replacement': '/conditions/hip-replacement-recovery/', 'ACL reconstruction and meniscus repair': '/conditions/acl-recovery/'},
        word_links={}, blog=None,
    ),
    'balance': dict(
        id='P-009', path='/balance-and-fall-prevention/', file='balance-and-fall-prevention', review='susan', service_type='Balance and fall prevention',
        placeholder='PHOTO: Dr. Ed spotting an older patient in a standing balance exercise, to be shot',
        order=['Who this is for', 'What treatment looks like with Dr. Ed', 'Vertigo and dizziness', 'Conditions treated', 'One real Google review', 'Insurance and referrals', 'FAQs (FAQ schema)'],
        cond_links={'Vertigo and BPPV': '/conditions/vertigo-bppv/'},
        word_links={}, blog=('/blog/fall-prevention-checklist-parents-house/', "A fall-prevention checklist for your parent's house", 'related'),
    ),
    'pediatric': dict(
        id='P-010', path='/pediatric-physical-therapy/', file='pediatric-physical-therapy', review='tati', service_type='Pediatric physical therapy',
        placeholder="PHOTO: Dr. Ed working with a child or teen athlete, parent in frame, to be shot",
        order=['Who this is for', 'What treatment looks like with Dr. Ed', 'Young athletes', 'Conditions treated', 'One real Google review', 'Insurance and referrals', 'FAQs (FAQ schema)'],
        cond_links={'Ankle sprains and recurring ankle instability': '/conditions/ankle-sprain/', "Knee pain in growing athletes (including Osgood-Schlatter) and heel pain (including Sever's disease)": '/conditions/knee-pain/'},
        word_links={}, blog=('/blog/young-gymnast-back-pain/', "When a young gymnast's back pain is not just a growing pain", 'Young athletes'),
    ),
    'neuro': dict(
        id='P-011', path='/neurological-rehabilitation/', file='neurological-rehabilitation', review='anthony', service_type='Neurological rehabilitation',
        placeholder='PHOTO: balance or gait session with a patient, to be shot',
        order=['Who this is for', 'What treatment looks like with Dr. Ed', 'Stroke recovery', 'Conditions treated', 'One real Google review', 'Insurance and referrals', 'FAQs (FAQ schema)'],
        cond_links={},
        word_links={
            'Vertigo and dizziness (see [balance and fall prevention](/balance-and-fall-prevention/))': '[Vertigo and dizziness](/conditions/vertigo-bppv/) (see [balance and fall prevention](/balance-and-fall-prevention/))',
            'a disc problem or a pinched nerve.': 'a disc problem or a [pinched nerve](/conditions/neck-pain/).',
        },
        blog=('/blog/stroke-recovery-outpatient-physical-therapy/', 'What stroke recovery looks like at an outpatient clinic', 'Stroke recovery'),
    ),
}

notes_common = [
    'Approved copy from deck v2.1, converted by scripts/deck-to-content.py; sentences unchanged.',
    'Review text comes from REVIEWS-chatsworthpt-28.csv (the only source); where the deck quoted more or corrected the reviewer, the CSV text is used and the difference is in the build log.',
]


def ts(v):
    return json.dumps(v, ensure_ascii=False, indent=2)


for name, cfg in CONFIG.items():
    page = parsed[name]
    e = entry(cfg['id'])
    h1, promise, book, slot = hero_of(page['Hero'])
    if h1 != e['h1']:
        sys.exit(f"{cfg['id']}: deck H1 {h1!r} differs from blueprint {e['h1']!r}")
    sections = []
    used = set()
    for title in cfg['order']:
        key = next((k for k in page if k == title or k.startswith(title)), None)
        if key is None:
            # the deck's own section titles for the extra sections
            key = next(k for k in page if title.split()[0] in k and k not in used)
        used.add(key)
        body = page[key]
        h2 = h2_of(body) if 'One real Google review' not in key else None
        blocks = paras(body)
        if key.startswith('Who this is for'):
            intro = blocks[0]['text'] if blocks and blocks[0]['type'] == 'p' else None
            ul = next(b for b in blocks if b['type'] == 'ul')
            items = leads(ul['items'])
            for it in items:
                for old, new in cfg['word_links'].items():
                    if old in it['text']:
                        it['text'] = it['text'].replace(old, new)
            sections.append({'kind': 'who', 'h2': h2, **({'intro': intro} if intro else {}), 'items': items})
        elif key.startswith('Conditions treated') or key.startswith('Surgeries we rehabilitate'):
            ul = next(b for b in blocks if b['type'] == 'ul')
            items = []
            for it in ul['items']:
                it2 = it
                for old, new in cfg['word_links'].items():
                    if it2 == old:
                        it2 = new
                href = cfg['cond_links'].get(it)
                items.append({'text': it2, **({'href': href} if href else {})})
            missing = set(cfg['cond_links']) - set(ul['items'])
            if missing:
                sys.exit(f'{name}: condition items not found: {missing}')
            sections.append({'kind': 'conditions', 'h2': h2, 'items': items})
        elif key.startswith('One real Google review'):
            ref = {'key': cfg['review']}
            ctx = review_ctx(body)
            if ctx:
                ref['context'] = ctx
            sections.append({'kind': 'review', 'review': ref})
        elif key.startswith('Insurance and referrals'):
            sections.append({'kind': 'insurance', 'h2': h2, 'blocks': blocks, 'siteLines': False, 'more': False})
        elif key.startswith('FAQs'):
            sections.append({'kind': 'faq', 'h2': h2, 'items': faqs(body)})
        else:
            sec = {'kind': 'prose', 'h2': h2, 'blocks': blocks}
            if cfg['blog'] and cfg['blog'][2] != 'related' and key.startswith(cfg['blog'][2]):
                sec['blocks'].append({'type': 'links', 'label': 'From the blog:', 'items': [{'text': cfg['blog'][1], 'href': cfg['blog'][0]}]})
            sections.append(sec)
    bk = booking_of(page['Booking'])
    related = [{'text': PAGE_NAME[h], 'href': h} for h, _t in bk['links']]
    if cfg['blog'] and cfg['blog'][2] == 'related':
        related.append({'text': cfg['blog'][1], 'href': cfg['blog'][0]})
    hero = {'h1': h1, 'lede': promise, 'book': book}
    if 'image' in cfg:
        hero['image'] = cfg['image']
    else:
        hero['placeholder'] = cfg['placeholder']
    content = {
        'id': cfg['id'],
        'path': cfg['path'],
        'approved': True,
        'title': e['title'],
        'description': e['description'],
        'hero': hero,
        'sections': sections,
        'booking': {'h2': bk['h2'], 'lead': bk['lead'], 'service': FORM_OPTION[bk['pre']], **({'messagePrompt': bk['prompt']} if bk['prompt'] else {}), 'button': bk['button']},
        'related': related,
        'schema': {'serviceType': cfg['service_type']},
        'notes': notes_common,
    }
    src = (f"// {cfg['id']} {cfg['service_type']}: approved copy (deck v2.1), generated by scripts/deck-to-content.py.\n"
           "// Do not hand-edit sentences here: approved copy is never rewritten. Gap fills are links only.\n"
           "import type { PageContent } from '../lib/types';\n\n"
           f"const page: PageContent = {ts(content)};\n\nexport default page;\n")
    (ROOT / 'src/content' / f"{cfg['file']}.ts").write_text(src, encoding='utf-8')
    print(cfg['id'], cfg['file'], len(sections), 'sections')
