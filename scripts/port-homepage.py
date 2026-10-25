"""Ports the approved homepage (draft 9, reference/HOMEPAGE-DRAFT4-chatsworthpt.html) into the build.

Writes src/pages/index.astro (the main markup, copy untouched) and src/content/home.ts (SEO fields and
the FAQ, review and video data the JSON-LD needs, copied from the master's own graph). Every edit below is
a link or an asset path; each pattern must match the expected number of times or the script stops.
Run: python3 -I scripts/port-homepage.py
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
src = (ROOT / 'reference/HOMEPAGE-DRAFT4-chatsworthpt.html').read_text(encoding='utf-8')

main = src[src.index('<main id="top">') + len('<main id="top">'):src.index('</main>')]
ld = json.loads(src[src.index('<script type="application/ld+json">') + len('<script type="application/ld+json">'):src.index('</script>', src.index('<script type="application/ld+json">'))])

# Vlad, 24 Oct 2026: the site says "Dr. Edward", never "Dr. Ed". Patients' review words are quoted as written,
# so review bodies are never renamed; every authored line is (markup below, FAQ and video data here).
ED = re.compile(r"\b(?:Dr\.?|Doctor) Ed\b(?!ward)")
for node in ld['@graph']:
    if node['@type'] == 'FAQPage':
        for m in node['mainEntity']:
            m['name'] = ED.sub('Dr. Edward', m['name'])
            m['acceptedAnswer']['text'] = ED.sub('Dr. Edward', m['acceptedAnswer']['text'])
    if node['@type'] == 'VideoObject':
        for k in ('name', 'description'):
            node[k] = ED.sub('Dr. Edward', node[k])

def sub(old, new, count=1):
    global main
    n = main.count(old)
    if n != count:
        sys.exit(f'Expected {count} of {old!r}, found {n}')
    main = main.replace(old, new)

# Asset paths become root-relative.
sub('src="img/', 'src="/img/', 11)
sub('srcset="img/', 'srcset="/img/', 2)
sub('poster="img/', 'poster="/img/', 1)
sub('src="video/', 'src="/video/', 1)
sub('data-photo="img/', 'data-photo="/img/', 4)

# Service rows and mosaic tiles link to their inner pages (blueprint P-001 links out; anchors unchanged).
for old, new, n in [
    ('#back-pain', '/back-pain-therapy/', 2),
    ('#sports', '/sports-injury-recovery/', 2),
    ('#post-op', '/pre-post-surgical-rehabilitation/', 2),
    ('#pain', '/pain-management/', 2),
    ('#ortho', '/orthopedic-rehabilitation/', 1),
    ('#balance', '/balance-and-fall-prevention/', 1),
    ('#pediatric', '/pediatric-physical-therapy/', 1),
    ('#neuro', '/neurological-rehabilitation/', 1),
    ('#training', '/personal-training-weight-loss/', 1),
    ('#about-page', '/about-us/', 1),
]:
    sub(f'href="{old}"', f'href="{new}"', n)

# Conditions we treat most: each condition links to its page (same words, links added).
cond_old = ("<p class=\"conditions\"><strong>Conditions we treat most:</strong> sciatica and herniated discs, rotator cuff injuries and frozen shoulder, "
            "ACL and meniscus injuries, ankle sprains, plantar fasciitis, tennis elbow, neck pain and pinched nerves, knee and hip replacement recovery, "
            "vertigo and BPPV, Parkinson's disease, stroke recovery, back pain in young gymnasts and dancers.</p>")
cond_new = ("<p class=\"conditions\"><strong>Conditions we treat most:</strong> <a href=\"/conditions/sciatica/\">sciatica</a> and "
            "<a href=\"/conditions/herniated-disc/\">herniated discs</a>, <a href=\"/conditions/shoulder-pain-rotator-cuff/\">rotator cuff injuries</a> and "
            "<a href=\"/conditions/frozen-shoulder/\">frozen shoulder</a>, <a href=\"/conditions/acl-recovery/\">ACL</a> and "
            "<a href=\"/conditions/knee-pain/\">meniscus injuries</a>, <a href=\"/conditions/ankle-sprain/\">ankle sprains</a>, "
            "<a href=\"/conditions/plantar-fasciitis/\">plantar fasciitis</a>, <a href=\"/sports-injury-recovery/\">tennis elbow</a>, "
            "<a href=\"/conditions/neck-pain/\">neck pain and pinched nerves</a>, <a href=\"/conditions/knee-replacement-recovery/\">knee</a> and "
            "<a href=\"/conditions/hip-replacement-recovery/\">hip replacement recovery</a>, <a href=\"/conditions/vertigo-bppv/\">vertigo and BPPV</a>, "
            "<a href=\"/neurological-rehabilitation/\">Parkinson's disease</a>, <a href=\"/neurological-rehabilitation/\">stroke recovery</a>, "
            "<a href=\"/pediatric-physical-therapy/\">back pain in young gymnasts and dancers</a>.</p>")
sub(cond_old, cond_new)

# Social icons: Font Awesome <i> tags become the inline-SVG component (same order, same labels).
social_old = re.search(r'<div class="social" aria-label="Chatsworth Physical Therapy on social media"><span>Follow Dr\. Ed</span>.*?</div>', main, re.S)
if not social_old:
    sys.exit('About-band social row not found')
main = main.replace(social_old.group(0), '<SocialIcons label="Follow Dr. Edward" />')

# How your first visit works links to /first-visit/ (same heading text).
sub('<h2 id="h-steps">How your first visit works</h2>', '<h2 id="h-steps"><a class="h-link" href="/first-visit/">How your first visit works</a></h2>')

# Read all 28 reviews: to /reviews/ as well as to Google, same visible words.
g = 'https://www.google.com/maps/search/?api=1&query=Chatsworth+Physical+Therapy&query_place_id=ChIJjzo2DhibwoAR1KeHYSgrQkE'
sub(f'<a href="{g}" target="_blank" rel="noopener">Read all 28 reviews on Google</a>',
    f'<span class="reviews-links"><a href="/reviews/">Read all 28 reviews</a> <a href="{g}" target="_blank" rel="noopener">on Google</a></span>')

# Service-area line: Porter Ranch and Northridge link to their pages only once CITY_PAGES_LIVE is true.
sub('<p class="service-area">Patients come from Chatsworth, Porter Ranch, Northridge, West Hills, Canoga Park, Granada Hills and Simi Valley.</p>',
    '<p class="service-area">Patients come from Chatsworth, {CITY_PAGES_LIVE ? <a href="/physical-therapy-porter-ranch/">Porter Ranch</a> : \'Porter Ranch\'}, '
    '{CITY_PAGES_LIVE ? <a href="/physical-therapy-northridge/">Northridge</a> : \'Northridge\'}, West Hills, Canoga Park, Granada Hills and Simi Valley.</p>')

# The one bare phone number in the approved copy (the insurance FAQ) becomes a tap-to-call link; words unchanged.
sub('Direct-pay patients are welcome. Call (818) 749-3205 and we will walk you through the cost before your first visit.</p>',
    'Direct-pay patients are welcome. Call <a href="tel:+18187493205">(818) 749-3205</a> and we will walk you through the cost before your first visit.</p>')

# Edits made in the build after the port, now carried here so a rerun keeps them:
# Vlad's ruling (a), 21 Oct: the trust row; Vlad, 23 Oct: a comma after CA; Vlad, 23 Oct: the Russian line in the booking band.
sub('<strong>Medicare accepted</strong>No referral needed to start. Call and begin this week.',
    '<strong>Medicare accepted</strong>Most patients need no referral to start. Call and begin this week.')
sub('Chatsworth, CA 91311<small>Between Winnetka', 'Chatsworth, CA, 91311<small>Between Winnetka')
sub('<small>Dr. Ed answers his own phone.</small></p>\n',
    '<small>Dr. Ed answers his own phone.</small></p>\n      <p class="ru-line" lang="ru">Говорим по-русски</p>\n')

# Dr. Edward's homepage feedback, email of 24 Oct 2026 (brief: Vlad's CLAUDE-BRIEF-Ed-homepage-feedback-2026-10-24.md).
# Item 4: the mosaic caption goes; the group gets a neutral label.
sub('\n        <p class="mosaic-caption">Real sessions at the clinic. Every one of them is Dr. Ed.</p>', '')
sub('<div class="mosaic" aria-label="Real sessions at the clinic">', '<div class="mosaic" aria-label="Physical therapy treatments">')
# Item 3: the mosaic is static (no hover or focus photo swap), and the knee ultrasound tile becomes a hands-on
# leg mobility photo (Drive "With Meta Data On It", 78-REL08989.jpg, 1SihkGtdBseWTnUlGJIXp1BFUztzyk_2T: Dr. Edward holds a
# patient's bent leg at the ankle with his other hand on her hip; square crop 1000,80 to 3900,2980, 900 px).
swap = re.search(r'<img class="mosaic-swap" id="mosaic-swap" [^>]*>', main)
if not swap:
    sys.exit('Mosaic swap image not found')
main = main.replace(swap.group(0), '')
sub('<a href="/back-pain-therapy/" id="mosaic-lead">', '<a href="/back-pain-therapy/">')
n = len(re.findall(r' data-photo="/img/[^"]+"', main))
if n != 4:
    sys.exit(f'Expected 4 data-photo attributes, found {n}')
main = re.sub(r' data-photo="/img/[^"]+"', '', main)
sub('<img src="/img/post-op-physical-therapy-chatsworth.webp" width="900" height="900" alt="Knee taping during post-op physical therapy in Chatsworth"',
    '<img src="/img/dr-edward-hands-on-leg-mobility-chatsworth.webp" width="900" height="900" alt="Dr. Edward guiding a patient\'s bent leg through a hands-on mobility exercise"')
# Item 2: the homepage no longer repeats the About page; a short section on how the plan is built takes its place.
about = re.search(r'<section class="about band" id="about" aria-labelledby="h-about">.*?</section>', main, re.S)
if not about:
    sys.exit('About band not found')
main = main.replace(about.group(0), """<section class="about approach band" id="approach" aria-labelledby="h-approach">
  <div class="wrap">
    <figure class="portrait"><img src="/img/dr-ed-shut-in-clinic-chatsworth.webp" width="1000" height="1000" alt="Dr. Edward Shut, DPT, at his desk in the Chatsworth Physical Therapy clinic" loading="lazy" decoding="async"></figure>
    <div class="about-copy">
      <h2 id="h-approach">A plan built around your movement</h2>
      <p>Back pain, a sports injury and recovery after surgery call for different treatment plans. Dr. Edward starts with an evaluation of how you move and what you need to get back to. Treatment may include hands-on techniques, guided exercise and a short home program. Your plan is adjusted as you progress.</p>
      <p class="approach-links"><a class="btn btn-light" href="/our-services/">Explore our treatments</a><a class="approach-about" href="/about-us/">Meet Dr. Edward</a></p>
    </div>
  </div>
</section>""")
# Item 6: the service-area sentence is plain text; the two area pages get their own labelled line.
sub('<p class="service-area">Patients come from Chatsworth, {CITY_PAGES_LIVE ? <a href="/physical-therapy-porter-ranch/">Porter Ranch</a> : \'Porter Ranch\'}, '
    '{CITY_PAGES_LIVE ? <a href="/physical-therapy-northridge/">Northridge</a> : \'Northridge\'}, West Hills, Canoga Park, Granada Hills and Simi Valley.</p>',
    '<p class="service-area">Patients come from Chatsworth, Porter Ranch, Northridge, West Hills, Canoga Park, Granada Hills and Simi Valley.</p>\n'
    '      {CITY_PAGES_LIVE && <p class="area-links">Nearby areas: <a href="/physical-therapy-porter-ranch/">Porter Ranch</a><span aria-hidden="true">|</span><a href="/physical-therapy-northridge/">Northridge</a></p>}')
# Item 5: booking band photo, the frame two shots earlier in which Dr. Edward is not laughing (Drive "With Meta Data On It",
# 31-REL08860.jpg, 10lNyODk8SHNKMbAlbFMH7rMQj7_SQ-mm; same crop as the old file, which came from 32-REL08862.jpg).
# Only the homepage changes: the old file stays for the pages that use it. Alt made neutral (the seated man is Vlad, not a patient).
sub('<img src="/img/dr-ed-explaining-anatomy-chatsworth.webp" width="1200" height="960" alt="Dr. Ed explaining an anatomy chart to a patient"',
    '<img src="/img/dr-edward-anatomy-chart-chatsworth.webp" width="1200" height="960" alt="Dr. Edward explaining an anatomy chart in the Chatsworth clinic"')
# Item 1: every authored "Dr. Ed" in the markup becomes "Dr. Edward". The homepage review cards hold no
# instance (checked here), so no patient's words change.
reviews_band = re.search(r'<section class="reviews band".*?</section>', main, re.S)
if reviews_band and ED.search(reviews_band.group(0)):
    sys.exit('A review card on the homepage names Dr. Ed: decide how to quote it before renaming')
main = ED.sub('Dr. Edward', main)

# Booking form: the shared component renders the approved form, or the call panel while the key is a placeholder.
form = re.search(r'<form class="form" id="book-form" novalidate>.*?</form>', main, re.S)
if not form:
    sys.exit('Booking form not found')
main = main.replace(form.group(0), '<BookingForm pageName="Home" />')

# FAQ answers and questions, read from the markup, must equal the master's FAQPage (they do in draft 9).
faq_html = [(q, re.sub(r'<[^>]+>', '', a)) for q, a in re.findall(r'<details><summary>(.*?)</summary><p>(.*?)</p></details>', main)]
faq_ld = next(n for n in ld['@graph'] if n['@type'] == 'FAQPage')['mainEntity']
assert [(q, a) for q, a in faq_html] == [(m['name'], m['acceptedAnswer']['text']) for m in faq_ld], 'FAQ markup and JSON-LD differ'

clinic = next(n for n in ld['@graph'] if n['@type'] == 'Physiotherapy')
video = next(n for n in ld['@graph'] if n['@type'] == 'VideoObject')
reviews = [{'name': r['author']['name'], 'body': r['reviewBody']} for r in clinic['review']]

hero_js = src[src.index('  // Hero: measure where the headline naturally breaks'):src.index('  // Header nav: one underline')]

home_ts = f"""// Homepage (P-001). The approved draft 9 copy is ported unchanged into src/pages/index.astro by
// scripts/port-homepage.py; this file holds the SEO fields and the data the JSON-LD graph needs, copied
// from the master's own graph so the markup and the schema cannot drift.
//
// SEO fields: the blueprint's 53-character title and 155-character description (build default for
// pending ruling 3 in claude/CHANGES-blueprint-vs-plan-v3.md). The approved head block, kept here for Vlad:
//   approved title (72): Physical Therapy in Chatsworth, CA | Dr. Ed Shut, DPT | Chatsworth Physical Therapy
//   approved fallback (64): Physical Therapy in Chatsworth, CA | Chatsworth Physical Therapy
//   approved description (207): Physical therapy in Chatsworth, CA with Dr. Ed Shut, DPT. One-on-one visits for back pain, sports injuries, pre and post-op rehab, balance and vertigo. Open until 8pm, Medicare accepted. Call (818) 749-3205.

export default {{
  id: 'P-001',
  path: '/',
  title: 'Physical Therapy in Chatsworth, CA | Dr. Edward Shut, DPT',
  description: 'Physical therapy in Chatsworth with Dr. Edward Shut, DPT. One-on-one visits for back pain, sports injuries, post-op rehab, balance and vertigo. Book today.',
  ogTitle: 'Physical Therapy in Chatsworth, CA | Dr. Edward Shut, DPT',
  ogDescription: 'One-on-one physical therapy with a Doctor of Physical Therapy. Back pain, sports injuries, pre and post-op rehab, balance and vertigo. Evening and Saturday hours.',
  h1: 'Physical therapy in Chatsworth, one-on-one with Dr. Edward',
  // The four reviews the approved homepage shows, as the approved graph marks them up.
  reviews: {json.dumps(reviews, ensure_ascii=False, indent=2)},
  faqs: {json.dumps([{'q': m['name'], 'a': m['acceptedAnswer']['text']} for m in faq_ld], ensure_ascii=False, indent=2)},
  video: {json.dumps({k: video[k] for k in ['name', 'description', 'uploadDate', 'duration']}, ensure_ascii=False, indent=2)},
}};
"""
(ROOT / 'src/content/home.ts').write_text(home_ts, encoding='utf-8')

index = """---
// Homepage, ported from the approved draft 9 (scripts/port-homepage.py writes this file; do not hand-edit
// the markup, edit the port script and run it again). Copy, structure and motion are unchanged; links to
// inner pages, root-relative asset paths, inline social icons and the booking switch are the only edits.
import BaseLayout from '../layouts/BaseLayout.astro';
import BookingForm from '../components/kit/BookingForm.astro';
import home from '../content/home';
import { CITY_PAGES_LIVE } from '../data/site';
import { SITE_URL } from '../data/site';
import { physiotherapyNode, personNode, reviewNode, faqNode, graph, abs, CLINIC_ID } from '../lib/schema';
const SITE_URL_SLASH = `${SITE_URL}/`;

const schema = graph([
  physiotherapyNode(home.reviews.map((r) => reviewNode(r.name, r.body))),
  personNode(),
  {
    '@type': 'VideoObject',
    ...home.video,
    thumbnailUrl: abs('/img/matt-and-dr-ed-chatsworth-pt.webp'),
    contentUrl: abs('/video/matt-frozen-shoulder-story-chatsworth-pt.mp4'),
    publisher: { '@id': CLINIC_ID },
  },
  faqNode(home.faqs),
  { '@type': 'WebSite', '@id': `${SITE_URL_SLASH}#website`, url: SITE_URL_SLASH, name: 'Chatsworth Physical Therapy', publisher: { '@id': CLINIC_ID } },
  {
    '@type': 'ImageObject',
    '@id': `${SITE_URL_SLASH}#hero-image`,
    contentUrl: abs('/img/hero-dr-ed-treating-patient-chatsworth.webp'),
    url: abs('/img/hero-dr-ed-treating-patient-chatsworth.webp'),
    width: 1800,
    height: 1125,
    caption: 'Dr. Edward Shut guiding a patient through a back exercise on the treatment table at Chatsworth Physical Therapy',
    creditText: 'Chatsworth Physical Therapy',
    copyrightNotice: 'Chatsworth Physical Therapy',
    creator: { '@id': CLINIC_ID },
  },
  {
    '@type': 'ImageObject',
    '@id': `${SITE_URL_SLASH}#portrait`,
    contentUrl: abs('/img/dr-ed-shut-in-clinic-chatsworth.webp'),
    url: abs('/img/dr-ed-shut-in-clinic-chatsworth.webp'),
    width: 1000,
    height: 1000,
    caption: 'Dr. Edward Shut, DPT, at his desk in the Chatsworth Physical Therapy clinic',
    creditText: 'Chatsworth Physical Therapy',
    copyrightNotice: 'Chatsworth Physical Therapy',
    creator: { '@id': CLINIC_ID },
  },
]);
---
<BaseLayout pageId="P-001" path="/" title={home.title} description={home.description} ogTitle={home.ogTitle} ogDescription={home.ogDescription} geo home schema={schema}>
""" + main.strip('\n') + """
<script is:inline>
(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
""" + hero_js.rstrip() + """
})();
</script>
</BaseLayout>
"""
(ROOT / 'src/pages/index.astro').write_text(index, encoding='utf-8')
print('index.astro and home.ts written;', len(faq_html), 'FAQs,', len(reviews), 'reviews')
