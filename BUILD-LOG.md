# Chatsworth PT site build log

Build lead session started 21 Oct 2026 from the brief "build the whole Chatsworth PT site in one work loop".
This file is the resume point: a new session reads it, then the repo. The same text is kept in the Project
as claude/BUILD-LOG-chatsworthpt.md and in the repo root as BUILD-LOG.md.

## Where things are

- Repo: built in the cloud sandbox at /home/claude/chatsworthpt, branch main, committed after every batch.
  GitHub BoostBrand/chatsworthpt did not exist when the session started (add_repo: not found, rechecked after
  Batch A). Everything is pushed the moment Vlad creates it and adds it to the Claude GitHub app.
- Stack as pinned in the brief: astro 5.18.2, @astrojs/tailwind 6.0.2, tailwindcss 3.4.19, @astrojs/sitemap
  3.7.4, @fontsource-variable/bricolage-grotesque 5.3.0, @fontsource-variable/inter 5.3.0. Node 22 via
  .node-version. Cloudflare Pages settings for Vlad or GPT: build command npm run build, output dist.
- Page specs: reference/entries/P-0xx.md (one file per blueprint entry, split by scripts/split-entries.py).
- Builder kit: COMPONENTS.md, reference/subagent/COMMON-RULES.md, reference/subagent/FACTS.md.
- Checks: node scripts/check-content.mjs (content files), npm run gates (the section 7 gate table, counted
  from dist), python3 -I scripts/render.py (390 and 1440 renders, --shots for screenshots in dist-preview/).
- Switches in src/data/site.ts: FORMS_ENABLED false (Web3Forms key placeholder), TRACKING_ENABLED false (GA4
  measurement ID and Clarity ID placeholders), CITY_PAGES_LIVE false, LEGAL_TEXT_READY false, PREVIEW true.

## Step 1: setup (commit 04262e7)

Scaffold, tokens, self-hosted fonts, site.ts, BaseLayout, header with the open-today line, footer per
blueprint section 3, phone sticky bar, breadcrumbs, one JSON-LD @graph per page, robots.txt, sitemap with the
noindex filter, 404 page.

Redirects: public/_redirects carries the 15 rows marked 301 (static lines with and without the trailing
slash, then the splat lines for category, tag, author, page/N and the old sitemap names). The 11 rows marked
410 are answered by a Pages Function (functions/[[path]].js, scoped by public/_routes.json) that returns 410
with the 404 page as body. Tested locally with Wrangler 4.151.3 pages dev: every 301, every 410, the excluded
upload PNG (301) and a missing path (custom 404) behaved as specified.

Rows _redirects cannot express, for the cutover brief: the query-string sources (/?s=, /?p=N, /?page_id=N,
/?attachment_id=N) and http to https (zone setting). Commented placeholders wait for the sitemap export at
cutover (roadmap T-009): the three 2020 fitness-trainer post slugs (301 to /blog/) and the Windows 10
activator spam slug (410).

## Step 2: homepage port (commit ca55e1b)

- The artifact's index.html equals the Project master except one trailing newline; the master was used.
- Same sections in the same order, visible text identical to the master except two intended changes: the
  "Read all 28 reviews" line now links to /reviews/ and to Google (brief), and the form shows the call panel
  while FORMS_ENABLED is false (brief). All # anchors replaced with the real URLs from the entry.
- Title and description: the blueprint's 53 and 155 character pair; the approved 72 and 207 character pair is
  kept in a comment in src/content/home.ts (build default).
- JSON-LD: the master's nodes unchanged except three additions: paymentAccepted on Physiotherapy, an @id on
  WebSite, ImageObject nodes for the hero and the portrait.
- Renders: 0 overflow, 0 broken images, 1 h1 at 390 and 1440. Page height 12,999 px at 390 (master 13,157)
  and 8,264 at 1440 (master 8,189); the difference is the call panel and the longer footer.

## Batch A: six service pages with approved copy (commit 52e35c4, 21 Oct)

Pages: P-004 /back-pain-therapy/, P-005 /sports-injury-recovery/, P-006 /pre-post-surgical-rehabilitation/,
P-009 /balance-and-fall-prevention/, P-010 /pediatric-physical-therapy/, P-011 /neurological-rehabilitation/.

How: converted from deck v2.1 by script (scripts/deck-to-content.py) instead of by subagents, so every
sentence stays verbatim; then every deck sentence was searched in the built pages (36 to 43 per page, 0
missing). Gap fills only, as the blueprint lists them: links down to the conditions pages, the blog links
(balance, pediatric, neuro), related links with exact page names.

Reviews: george (back pain), maggie-mcc (sports), maggie-and-mark (post-op), susan (balance), tati
(pediatric), anthony (neuro). No review is shared between service pages.

Counts after Batch A (8 pages built of 51): every hard gate passes (0 failing); renders 16 of 16 clean (0
overflow, 0 broken images, 1 h1); PHOTO placeholders 3 (balance, pediatric, neuro heroes); [CONFIRM markers
0; titles and descriptions 8 of 8 within limits and unique; 0 broken internal links; 403 links point at
planned pages not built yet (expected until the last batch).

Moved to _holding (never deleted): _holding/equipment-photos-ruled-out/ (balance-fall-prevention-chatsworth.webp,
orthopedic-rehab-chatsworth.webp; Dr. Ed ruled no equipment photos) and _holding/unreferenced-draft-images/
(dr-ed-shut-dpt-diplomas.webp, dr-edward-shut-dpt-chatsworth.webp).

New image: public/img/dr-ed-shut-dpt-headshot-chatsworth.webp (240 by 240, cut from the approved desk portrait,
EXIF stripped) for the blog byline.

## Open questions

### For Vlad (rulings)

1. Approved copy against later rulings. The six deck pages say a flat "60 minutes" 18 times (back pain 3,
   sports 2, post-op 3, balance 3, pediatric 4, neuro 3), and their insurance sections and referral FAQs say
   "only for Medicare, direct-pay patients can book straight away" instead of the California rule (12 visits or
   45 days, then a referral) and leave out PI liens and the PPO superbill. Pediatric says visits for children
   are direct pay. Not changed (approved copy is never rewritten). Fix on a yes: one edit per page, swapping
   in the site-wide lines and "about 60 minutes, depending on what you need".
2. Review text. The reviews CSV holds only the first sentence for George and for Maggie (February 2025); the
   deck quoted their longer reviews. The CSV text is used. The back pain page's who-item still says "his review
   is below" about improvement by the end of the week, which the one-sentence quote does not show. Susan's "is
   also been" and Tati's wording are shown as written in the CSV.
3. Navigation details decided by the build lead: a phone menu was added on inner pages (the homepage has none
   in draft 9); the header Book button goes to /contact/#book per the blueprint while the sticky bar's Book goes
   to the page's own booking band; "All services" added to the footer's More services column.

### For Dr. Ed ([CONFIRM] items)

None from Batch A (the deck pages carry no markers).

## Batch B: About, services hub and six service pages with new copy (21 Oct)

Pages: P-002 /about-us/, P-003 /our-services/, P-007 /orthopedic-rehabilitation/, P-008 /pain-management/,
P-012 /red-light-therapy/, P-013 /therapeutic-ultrasound/, P-014 /electrical-stimulation-tens-nmes/,
P-015 /personal-training-weight-loss/.

How: one Sonnet subagent per page, three at a time, each given only its entry, COMPONENTS.md,
reference/subagent/COMMON-RULES.md (the brief's voice and fact rules), FACTS.md (the handoff facts and the site-wide
lines), the reviews CSV and, from P-014 on, a decision sheet per page (reference/subagent/decisions/). Each page was
read in full by the build lead against its entry before it was accepted; scripts/entry-check.py confirms every
"links out" target, the review shown and the section count from the built HTML.

Edits by the build lead after review: the services hub's three treatment lines and the pain management tool lines
(written from the red light, ultrasound and e-stim entries), the hub's booking lead (it described the hidden form),
the About review label, one doubled insurance link on pain management.

Sources (red light page): both re-fetched by the build lead on 21 Oct 2026 and the quoted sentences confirmed:
pubmed.ncbi.nlm.nih.gov/28145397 (2017 meta-analysis, Eur J Phys Rehabil Med) and the Washington State Department
of Labor and Industries LLLT technology assessment update of 18 January 2018.

Kit additions for Batches B and C (additive, defaults unchanged): section kinds credentials, social, reviews, video,
visit and posts; a contact hero (phone first, form beside it); hero action buttons; an automatic ItemList on hubs and
CollectionPage on the blog hub; city page links print as plain text while CITY_PAGES_LIVE is false; markers are
stripped from JSON-LD; FAQ sections get their own ids; footer column titles are h2 styled as before, so pages without
an h2 skip no heading level. New checks: scripts/entry-check.py, scripts/a11y.py (contrast, alt text, names, labels,
skip link, heading order), scripts/perf.py (page weight, throttled LCP and CLS), scripts/copy-export.mjs; a duplicate
id gate in scripts/gates.py.

Moved to _holding: _holding/no-effect/content.config.ts (an empty content config tried against an Astro warning about
the empty blog folder; it had no effect).

Counts after Batch B (18 pages built of 51: home, 404, the two legal placeholders, Batch A and Batch B): every hard
gate passes (0 failing); 0 dashes, 0 dollar figures, 0 banned phrases, 0 broken links, 0 missing images, 0
duplicate ids; titles and descriptions 18 of 18 within limits, unique and equal to the blueprint; 0 pages with fewer
than two inbound links; JSON-LD 17 of 17 parse; sitemap 15 URLs; PHOTO placeholders 10; [CONFIRM markers 12 (Batch B
pages and the two legal pages); 427 links point at planned pages not built yet. Renders 36 of 36 clean (0 overflow,
0 broken images, 1 h1); accessibility check 0 failures on 18 pages at both widths. Form and tracking round trip: with
test values in site.ts, 15 forms, 0 call panels, GA4 and Clarity tags on 18 of 18 pages; with the placeholders back
(file read back, identical to before), 0 forms, 15 call panels, 0 tracking tags. Redirects and 410s re-tested with
Wrangler against this build: all as specified. Page weight: homepage 471 KB on first load (target under 500 KB);
throttled phone load (Lighthouse's slow 4G numbers) LCP 1.9 s home, 1.6 s back pain, CLS 0; on fast 4G LCP 0.8 s
home and 0.6 s back pain, CLS 0 inner and 0.03 home (the heading font swapping in; the sandbox's fallback font is
wider than the fallbacks real phones use).

### Open questions from Batch B

For Vlad:
1. Meta descriptions from the blueprint promise more than the pages can back up: red light "to speed tissue recovery"
   and ultrasound "speeds healing". The cited research on red light reports pain and function, with low-quality and
   inconsistent evidence; the pages say so. Suggest softening both descriptions (one edit each).
2. Personal training page: it carries the site-wide insurance and referral lines (brief rule for every service page)
   under a lead-in saying they apply to physical therapy visits, since training itself is direct pay only.
3. Pain management: the entry asked for one-line patient outcomes from the reviews that name each tool; left out,
   because each review belongs to one page only.
4. The new pages answer referral questions with the California rule (12 visits or 45 days) while the six approved
   pages still say "only for Medicare" (Batch A question 1); the site disagrees with itself until that is ruled on.

For Dr. Ed ([CONFIRM] items shown highlighted on the pages):
- About: the exact Russian sentence (slot left out by build default); a read of the new first-person paragraph.
- Red light: minutes per application and frequency; whether it is sold stand-alone and at what price; can a patient
  come just for red light; laser or LED, and which device (the cited studies are about laser).
- Ultrasound: the contraindication wording; that it is part of a visit and not billed separately.
- E-stim: whether he sets patients up with a home TENS unit.
- Personal training: prices by phone or published; what nutrition guidance he gives, if any; diet plans.
- Services hub: the conditions shown on the pain management and pediatric cards (inferred from the linked pages).

## Batch C: patient information and legal pages (21 Oct)

Pages: P-016 /insurance-and-cost/, P-017 /first-visit/, P-018 /reviews/, P-019 /faqs/, P-020 /contact/; P-050
/privacy-policy/ and P-051 /terms-of-service/ (built in Batch B as noindex placeholders, unchanged); P-052 404
verified against its entry (H1, title, description, links to All services, Conditions, Contact and the phone).

Build lead edits after review: first visit (the booking line no longer points at a form that is not live yet); FAQs
(three markers the builder added were replaced with facts the blueprint entries and approved pages already give: what
to bring, family members welcome, the restroom); the contact page facts table (a compiler quirk re-opened the email
link around the next paragraph, so every line below the table became a link; fixed in the component and a new gate
counts links that wrap a paragraph, list, heading or section); review cards now read "More on <page>".

Reviews page: all 25 usable reviews print from the CSV (Vlada, Keith and Jonathan left off), grouped as the blueprint
lists them, with Review markup for each (25) and no aggregate rating. Matt's clip is embedded here as the blueprint's
section 2 asks; it is the only second embed (the frozen shoulder page will link to the homepage video). "Leave a
review" opens Google's write-a-review box for the listing (URL pattern read on a third-party guide on 21 Oct 2026;
the Business Profile's own short review link can replace it).

Counts after Batch C (24 pages built of 51, including the conditions hub from Batch D): every hard gate passes;
JSON-LD 23 of 23 parse; sitemap 21 URLs; noindex 3 (404 and the two legal pages); [CONFIRM markers 21; PHOTO
placeholders 10; 0 links wrapping block elements; 0 duplicate ids; 134 links still point at planned pages (conditions,
city pages, blog). Renders 48 of 48 clean; accessibility check 0 failures on 24 pages at both widths.

### Open questions from Batch C

For Vlad:
1. Matt's clip on the Reviews page as well as the homepage (blueprint section 2 of the Reviews entry, marked "ruling
   needed"). Built in; one edit removes it.
2. The direct-pay [CONFIRM] on the insurance page is the blueprint's wording and names a competitor (Performance MFR)
   inside the highlighted note; it disappears with the answer.

For Dr. Ed:
- Insurance and cost: does the clinic bill any plan directly; publish a direct-pay price or keep "call for the current
  rate"; the one-line lien process; payment methods beyond credit and debit cards (HSA and FSA cards, checks, Zelle).
- Reviews page: the "how reviews are collected" paragraph says patients are asked after discharge and reviews are
  never paid for (blueprint wording); confirm both.
- Contact: the route line for each city (the blueprint's draft routes are shown with the marker; no drive times).
- First visit and FAQs: the restroom line comes from the blueprint; confirm.
- Shockwave, pelvic floor and hand therapy: one highlighted line on the FAQs page asks patients to call; nothing says
  offered or not offered.

## Batch D: the conditions layer (21 Oct)

Pages: P-021 /conditions/ (hub) and the twelve conditions pages: P-022 sciatica, P-023 herniated disc, P-024 neck
pain and pinched nerve, P-025 shoulder pain and rotator cuff, P-026 frozen shoulder, P-027 knee pain, P-028 ACL
recovery, P-029 knee replacement recovery, P-030 hip replacement recovery, P-031 ankle sprain, P-032 plantar
fasciitis, P-033 vertigo and BPPV. Each carries MedicalCondition markup, the site-wide lines, its parent service's
booking option, and the review the blueprint assigns (David, Linda, Matthew S, Melissa); the others carry none, and
ACL, hip replacement and ankle sprain link to the review on the page that owns it instead of reprinting it.

Build lead edits after review: frozen shoulder now names AAOS OrthoInfo beside the three stages (re-fetched 21 Oct
2026, wording matches); knee replacement no longer says in the body that "the first six weeks decide your range of
motion for years" and ankle sprain no longer says "an ankle sprained twice will sprain again" (both categorical
claims with no source on hand; ankle sprain now uses the approved sports page line); neck pain's parent link reads
"Back pain therapy". Three inbound links the architecture CSV requires were missing and are now related links: pre
and post-op to herniated disc, balance and fall prevention to hip replacement recovery (both approved pages: a related
link only, no copy changed), orthopedic to neck pain.

Outside sources on conditions pages, each re-fetched by the build lead: AAOS OrthoInfo frozen shoulder page (stages);
Cleveland Clinic hip abductors page (hip replacement); APTA ChoosePT BPPV guide (vertigo).

## Batch E: the city pages (21 Oct)

Pages: P-035 /physical-therapy-northridge/ and P-036 /physical-therapy-porter-ranch/, built with noindex, out of the
sitemap and linked from nowhere while CITY_PAGES_LIVE is false (links to them inside copy print as plain text until
the switch flips). Their proof is almost all [CONFIRM] or [verify] markers, as the blueprint says: if Dr. Ed has no
Northridge or Porter Ranch patients to name, the blueprint's own test says these pages do not go live.

Porter Ranch check at build time (Google places search, 21 Oct 2026): no listing typed as a physical therapy clinic
carries a Porter Ranch address; the nearest list Northridge addresses in 91326, and the one Porter Ranch address
found is an orthopedic doctors' clinic. The page says only that we could not find one, with a [verify] marker.

Counts after Batches D and E (38 pages built of 51): every hard gate passes; JSON-LD 37 of 37 parse; sitemap 33 URLs;
noindex 5 (404, two legal placeholders, two city pages); [CONFIRM and verify markers 37; PHOTO placeholders 14; 88
links still point at the blog (not built yet). Renders 76 of 76 clean; accessibility check 0 failures on 38 pages.

### Open questions from Batches D and E

For Vlad:
1. Three more blueprint meta descriptions say more than the pages can back up: knee replacement ("the first six
   weeks decide your range of motion for years"), ankle sprain ("an ankle sprained twice will sprain again"), and
   Porter Ranch ("Porter Ranch has no physical therapy clinic of its own"; we could only confirm none with a Porter
   Ranch address). Suggest softening (one edit each, title and description are blueprint fields).
2. Northridge route: the blueprint says "Nordhoff Street west to Corbin, left on Nordhoff Place", but the approved
   homepage puts the clinic just north of Nordhoff Street, which would be a right turn heading west. Marked [verify].

For Dr. Ed:
- Knee replacement: the bend and straighten targets he states, if any. Hip replacement: his wording on precautions by
  surgical approach.
- Northridge and Porter Ranch: which reviewers live there; CSUN, Northridge Hospital, school or club ties; routes and
  drive times; whether he wants the comparison with group clinics.
- Plantar fasciitis: whether he supplies or fits orthotics (the page only says the evaluation decides).

## Batch F: blog hub and twelve posts (21 Oct)

Hub: P-037 /blog/ built by the build lead (about 90 words of its own; the post list, newest first with the parent page
as a tag, and the CollectionPage and ItemList schema come from the post files themselves).

Posts accepted, each checked against its entry and decision sheet, every outside quote matched to a page the build
lead fetched on 21 Oct 2026 (WebFetch yes or no checks, with planted false phrases as a control from P-045 on):
- P-038 referral in California (931 words before review). Sources: Business and Professions Code section 2620.1 on
  Justia (re-fetched by the build lead: the (a)(1), (a)(4) and (d) wording matches, apostrophes aside) and
  Medicare.gov "Physical therapy services". Build lead edit: the paragraph quoting (a)(3) (the therapist notifies
  your doctor, with your written authorization) came out, because it describes an intake step Dr. Ed has not
  confirmed and sits outside the sheet's scope; "the window does not help you" now reads "does not apply".
- P-039 Medicare (783 words). Source: Medicare.gov "Physical therapy services" (Part B coverage, certification by
  your doctor or other health care provider, 20% after the Part B deductible, no yearly limit). No dollar figures.
- P-040 first visit (814 words). No outside source; every fact traces to FACTS.md or the built Your first visit page.
- P-042 fall checklist for a parent's house (946 words). Source: CDC "Check for Safety" (STEADI, 2017); all fourteen
  checklist items are the sheet's verified CDC sentences, five with "you" changed to "your parent" (said in the
  source note). The clinic tests and the plan come from the approved balance page.
- P-041 stroke recovery (918 words). Sources, both re-fetched by the build lead and matched sentence by sentence:
  American Stroke Association "What to Expect from Stroke Rehabilitation" (start in the hospital, continue after
  release; home healthcare agencies or outpatient offices) and the NINDS fact sheet "Post-Stroke Rehabilitation" (timing,
  repetitive practice, rewiring over months to years, does not reverse brain damage). The approved neuro page line
  "the weeks and months after a stroke are when the nervous system is most ready to relearn" is left out of the post
  as an uncited claim; NINDS's timing sentence carries the point instead. The story marker "[CONFIRM] a stroke
  patient's story when one exists" stays visible. Build lead edit: the "parent page" anchor now reads "neurological
  rehabilitation".
- P-043 young gymnast back pain (863 words). Sources, both re-fetched by the build lead and matched phrase by phrase:
  AAOS OrthoInfo "Spondylolysis and Spondylolisthesis" (definition, symptoms, doctor's exam and imaging, the
  nonsurgical list) and Rady Children's Health "Linemen, Gymnasts at Highest Risk of Spondylolysis" (who is at
  higher risk and why, main symptom, rest plus physical therapy). No review retold. Build lead edits: the answer no
  longer says the five signs mean it "is not just a growing pain" (the approved FAQ says only that they are worth an
  evaluation, and the post itself says none of them proves an injury); the "parent page" anchor now reads "pediatric
  physical therapy".
- P-044 knee replacement, first six weeks (983 words after review). Sources, re-fetched by the build lead phrase by
  phrase: AAOS OrthoInfo "Activities After Knee Replacement" (discharge goals, help at home, swelling, driving, work,
  warning signs, the 2 month exercise rule) and "Total Knee Replacement Exercise Guide" (walker or crutches at first;
  a single crutch or cane "often about 2 to 3 weeks"; light ankle weights "usually 4 to 6 weeks"; full recovery takes
  several months). Build lead edit: AAOS tells readers to "tell your doctor right away" about chest pain or shortness
  of breath, so one sentence now adds the CDC's instruction to seek medical help immediately for the signs of a clot
  in the lungs (CDC "About Venous Thromboembolism (Blood Clots)", fetched 21 Oct 2026). The marker "[CONFIRM the
  targets he states]" stays visible; when Dr. Ed's targets replace it, trim elsewhere to stay under 1,000 words.
- P-045 vertigo and BPPV (939 words). Sources, re-fetched by the build lead with a control check (planted false
  phrases came back NO): APTA ChoosePT BPPV guide (what BPPV is, the crystals, 15 to 45 seconds, positional tests,
  maneuvers, no known prevention, symptoms return for about half of people within three years) and MedlinePlus
  "Benign positional vertigo" (Dix-Hallpike test and Epley maneuver described; get medical help right away with
  weakness, slurred speech or vision problems). The post names Dix-Hallpike and Epley only as MedlinePlus names them
  and does not say Dr. Ed uses them by name.
- P-046 return to sport after ACL surgery (930 words). Sources, re-fetched by the build lead with control phrases:
  Grindem and colleagues, BJSM, Delaware-Oslo cohort (106 patients; re-injury rate down 51% for each month return was
  delayed until 9 months, no further drop after; quadriceps symmetry; the four hop tests; pass mark above 90),
  Kyritsis and colleagues, BJSM (158 male professional athletes; not meeting all six discharge criteria, about four
  times the risk of graft rupture) and Wiggins and colleagues, AJSM 2016 (second ACL injury 15% overall, 7% same knee,
  8% other knee; 23% for athletes under 25 who return to sport). The ACL story is a link to Reviews only. Build lead
  edits: the answer no longer says "you are ready when you pass" (the post itself says passing is not a promise);
  the cutting line reads "Dr. Ed tests it if your sport calls for it".
- P-047 red light for back and knee pain (947 words). Sources, re-fetched by the build lead with control phrases:
  PubMed 28145397 (2017 meta-analysis, 18 studies, 1,462 adults), the Washington L&I technology assessment update
  (2018; its four conclusions quoted word for word, plus its summaries of a Cochrane review on low back pain and a
  Hayes review on knee osteoarthritis), Arthritis Research & Therapy 2015 (low back pain: pain lower than placebo,
  no effect shown on disability or range of motion) and BMJ Open 2019 (knee osteoarthritis: 22 trials; pain and
  disability lower than placebo; not recommended in major guidelines). Every study is on low-level laser therapy, so
  the post says so and calls the findings a guide to the field, not a promise about one machine. The marker
  "[CONFIRM minutes per application and frequency]" stays visible.
- P-049 cash-pay cost and the superbill (910 words). Sources, re-fetched by the build lead with control phrases:
  HealthCare.gov glossary entries for PPO, non-preferred provider, out-of-network coinsurance and allowed amount. No
  dollar figure; "Call (818) 749-3205 for the current rate. [CONFIRM publishing it]" in the answer and the cost
  section. The worked superbill example is steps with no amounts. The post never says whether the clinic is in or out
  of any network and never promises what a plan pays back. The copay comparison is left out: it needs the clinic's
  own numbers.
- P-048 sciatica, disc or hip (916 words). Sources, re-fetched by the build lead with control phrases: MedlinePlus
  "Sciatica" (definition, nerve path, other causes, the signs to contact a provider right away), AAOS OrthoInfo
  "Sciatica" (broad term, nerve root compression, the doctor's exam), NINDS "Piriformis Syndrome" and StatPearls
  "Sciatica" (a disc is the most common cause; the piriformis can cause sciatica symptoms; a clinical diagnosis).
  Build lead edits: the hip paragraph now carries NINDS's own words that piriformis syndrome is "a rare disorder"
  (left out, the post read as if the hip cause were as common as the disc); "The clinic's approach comes down to one
  line" now reads "Dr. Ed's treatment aims at".

Counts after Batch F (51 of 51 pages built): every hard gate passes; JSON-LD 50 of 50 parse; sitemap 46 URLs (48 once
the legal pages are indexable); noindex 5 (404, two legal placeholders, two city pages); links to pages not built 0;
[CONFIRM and verify markers 42; PHOTO placeholders 26 (one per post). One architecture CSV link was missing (the red
light page to its post) and is now a related link on that page (Batch B copy, not approved copy). Renders 102 of 102
clean; accessibility check 0 failures on 51 pages at both widths. Word counts: all twelve posts are 700 to 1,000 words
on the checker's count (the words written); the entry check's "main words" reads 900 to 1,100 because it also counts
the byline, the Sources list, the author box and the booking band the template adds.

### Open questions from Batch F

For Vlad:
1. Approved homepage trust row: "Medicare accepted" sits directly above "No referral needed to start." A Medicare
   patient can read that as no referral needed, but Medicare patients need one from the start. Approved copy, so not
   changed. One way to fix it: "Most patients need no referral to start."
2. P-040's blueprint meta description promises the first visit "minute by minute"; there are no per-step times in
   the facts, so the post gives the order, not minutes. Suggest "step by step" (blueprint field, not changed).
3. Section 2620.1 is quoted from Justia because the official leginfo page does not load from here. One look on
   leginfo.legislature.ca.gov before launch.
4. P-044's blueprint meta description repeats the knee replacement claim already raised for the conditions page
   ("the first six weeks ... decide your range of motion for years"); no source says it. Suggested: "What the first
   six weeks after a knee replacement involve, from your surgeon's rules to the home work. Dr. Ed Shut, DPT in
   Chatsworth explains." (143 characters).
5. P-049's blueprint meta description promises "what a cash-pay physical therapy visit costs", that a superbill "gets
   you reimbursed" and "when paying direct is simpler"; the post can give none of the three until the rate is
   published. Suggested: "Cash-pay physical therapy in Chatsworth: how to get the current rate, how a PPO
   superbill works, and what to ask your insurer. By Dr. Ed." (137 characters).

For Dr. Ed:
- Medicare Advantage: are Advantage plans accepted? The site says only "Medicare".
- Does the 45-day and 12-visit count start again for a new injury or after a break in care? The posts do not say.
- P-040: two explaining clauses to confirm or cut ("the area that hurts should be easy to see and free to move";
  "the aim is to return you to the things that matter to you").
- P-041: a stroke patient's story, with consent, when one exists (marker on the page).
- P-044: his milestones for each stage after a knee replacement (marker on the page).
- P-045: the names of the test and maneuvers he uses (Dix-Hallpike, Epley?), so the post can say so.
- P-043: whether he wants a line on when he sends a child to a doctor for imaging first.
- P-047: which red light device he uses (laser or LED panel, and the wavelength). The studies cited are all on
  low-level laser therapy; if his device is an LED panel, the post's caveat matters more.
- P-048: his approved line says sciatica is "usually a disc or a tight muscle in the hip"; NINDS calls piriformis
  syndrome rare. He may want to word the hip side his own way.
- P-049: whether to publish the cash rate; whether the clinic is in network with any plan.

## Final pass (21 Oct)

- Whole-site gates at 51 pages: 0 failing. 51 HTML pages, 51 with one h1, 50 canonicals, 50 JSON-LD blocks that all
  parse, 0 em or en dashes served or in source, 0 dollar figures, 0 banned phrases, 0 broken internal links, 0 links to
  unbuilt pages, every page with two or more inbound links, titles and descriptions within length and unique, H1,
  title and description equal to the blueprint entry on every page, 51 of 51 URLs return 200 from a local server.
- Renders: 102 of 102 clean (0 horizontal overflow, 0 broken images, 0 script errors, one h1). Accessibility: 0
  failures on 51 pages at 390 and 1440.
- Screenshots sent to Vlad: home, back pain therapy, sciatica, contact and the Medicare post, each at 390 and 1440.
- Speed (throttled phone, Lighthouse's slow 4G numbers): home 472 KB on first load, 12 requests, LCP 1.8 s, CLS 0 to
  0.03; Medicare post 214 KB, LCP 1.5 s, CLS 0; sciatica 245 KB, LCP 1.6 s, CLS 0.
- Form and tracking switches at 51 pages: with test values in site.ts, 48 booking forms (each with the honeypot), 0
  call panels, GA4 and Clarity tags on 51 of 51 pages; with the placeholders back (file compared byte for byte with the
  copy taken before the test: identical), 0 forms, 48 call panels, 0 tracking tags.
- Redirects and 410s re-tested with Wrangler against the 51-page build: the blog hub and posts return 200; old blog,
  category and pagination URLs 301 to /blog/; WordPress, theme and spam URLs 410; the one old upload 301 to
  /neurological-rehabilitation/; an unknown URL 404.
- Copy export: claude/COPY-EXPORT-chatsworthpt-site.md in the Project (all 51 pages, generated from the content files,
  about 39,000 words).
- GitHub: every commit is local and ready; the push waits on the empty repo BoostBrand/chatsworthpt (steps sent to
  Vlad). Nothing was deployed, and no DNS, Cloudflare, Google Business Profile or Search Console change was made.

Before launch (not this session): Web3Forms key, GA4 measurement ID and Clarity ID into site.ts (the switches turn the
form and tracking on by themselves); the live privacy and terms text, then LEGAL_TEXT_READY true; Dr. Ed's answers for
the 42 markers, then PREVIEW false (the ship gate needs 0 markers); the photo shoot for the 26 placeholders; Vlad's
rulings on the open questions; CITY_PAGES_LIVE only if the Northridge and Porter Ranch proof exists.

## Session 2 (21 Oct 2026, evening): on GitHub, the rulings and Dr. Ed's answers

GitHub and the build
- Vlad created BoostBrand/chatsworthpt (public, his choice; GitHub labels BoostBrand a personal account, so the
  Claude app's repo list is under Settings, Applications, Installed GitHub Apps) and gave the Claude app access.
- The repo came back from chatsworthpt-repo-2026-10-21.bundle (verified, complete history, 13 commits, main at
  fba9d3b), pushed; GitHub's commit list matched local exactly. The build session's 14th commit (the handoff count
  fix, made after the bundle was sent) was redone. A scan before the push found no secrets (keys are placeholders;
  the only email is the clinic's).
- Clean clone: npm ci, npm run build (51 pages), npm run gates (0 failing), as the build session reported.
- .node-version 22 is now 22.16.0: Cloudflare's build image docs only show full versions, and 22.16.0 is the
  image default. public/_headers adds X-Robots-Tag: noindex for *.pages.dev only (Cloudflare Pages headers docs
  recipe), so the preview and, after launch, the pages.dev copy stay out of search; chatsworthpt.com is unaffected.

Preview (waiting)
- GPT's paste-ready directions went to Vlad: a new Cloudflare Pages project (not a Worker), production branch main,
  Astro preset, npm run build, output dist, no custom domain, no DNS. Sources: Cloudflare Pages Git integration,
  Astro guide, GitHub integration, build configuration, build image docs (read 21 Oct 2026).
- This sandbox cannot reach *.pages.dev (proxy 403). GPT saves the live checks on Vlad's PC in
  Projects\Chatsworth PT\preview-check\: results.tsv (status, Location, X-Robots-Tag for the 70 paths in urls.txt:
  5 pages, the 31 files they load, 34 redirect, 410, 404 and sitemap checks), the five pages' HTML, the build log.
  Claude compares them with dist through the device bridge. urls.txt still matches the build at 60b02f7.

Vlad's rulings (his "go ahead and continue", 21 Oct 9:11pm, read as yes to Claude's picks)
- (a) yes, commit f8e6a76: the 18 flat 60 minute lines on the six approved pages now say about 60 minutes; their
  insurance sections show the site-wide lines and the referral FAQs give the 12 visits or 45 days rule; children's
  visits are no longer called direct pay; homepage trust row: Most patients need no referral to start.
- (b) yes, commit 4d56fc9: eight softer descriptions. reference/SEO-RULINGS.json records every ruling that changes
  a blueprint SEO field; scripts/lib/blueprint.py (gates) and scripts/check-content.mjs apply it on top of the
  blueprint, so the cross-check gate stays meaningful. P-049's description was updated again once the rates were
  published.
- (c) keep Matt's video on the Reviews page: no change.

Dr. Ed's answers (questions in claude/DR-ED-QUESTIONS-chatsworthpt.md, sent 21 Oct 8:27pm; Vlad relayed the
answers at 9:11pm). Applied in commits 109a1e7, 750ece0, de2c468 and 60b02f7:
- Rates published (Vlad: whatever you think is best): $175 first evaluation, $125 each follow-up; personal
  training at the same prices. The price checks allow only $175 and $125. The evaluation checks walking, movement,
  mobility and pain points and confirms the pain is mechanical; if not, Dr. Ed refers out. CSUN students and
  faculty can ask about a discount (no amount, by his wish).
- Original Medicare only, no Medicare Advantage. No PPO or other private plan billed directly. Personal injury:
  the attorney emails Dr. Ed the patient's details. Payment: cards, HSA and FSA cards (read from his yes to the
  question), checks, Zelle, Venmo.
- Red light: about 10 minutes inside the visit, included in the price, never sold alone, best avoided on skin with
  eczema or an infection; device KOZE (LED; KOZE lists 660 and 850 nm for its panels, kozehealth.com, read 21 Oct
  2026), so the pages say it is not a laser. Ultrasound: not used with a history of cancer or in pregnancy (the
  unconfirmed fracture and numb-area wording is gone); included in the price. Not every tool at every visit.
  E-stim: no home TENS setup, basic guidance only.
- Knee replacement: about 110 degrees of bend and 0 degrees extension, no weekly milestones. Hip: precautions have
  eased; follow the surgeon. Stroke story line removed. Vertigo: trained in Dix-Hallpike and Epley, screens first.
  Young gymnast: after a serious injury, see a doctor first. Sciatica: hip-side sciatica is his specialty; the
  NINDS "rare" wording is gone. Plantar fasciitis: no orthotics, referral to a trusted podiatrist. Referral post:
  the count does not reset. Hand therapy offered; shockwave and pelvic floor not. No nutrition advice.
- Routes (Vlad: figure it out from a map): OSRM demo router on OpenStreetMap data, 21 Oct 2026, one sample origin
  per area (Porter Ranch Town Center, CSUN, Northridge Fashion Center, Granada Hills Charter, Simi Valley Town
  Center, UCLA West Valley Medical Center, Canoga Park High School, Nordhoff and Reseda). Nordhoff Street becomes
  Nordhoff Place at Corbin Avenue; the 118 has no Winnetka exit, so the old Granada Hills and Simi lines were wrong.
- City pages: the full-visit line (general, not Northridge-only, as Dr. Ed asked), CSUN students treated, many
  Northridge Hospital joint replacement patients; Porter Ranch's no-clinic claim and schools item removed.
- About: Russian sentence written by Claude (Vlad: whatever you think is best), marked lang ru.
- First visit post: Vlad did not follow question 35; both explaining clauses kept (one explains the clothing advice,
  the other echoes the About mission line).

Counts at 60b02f7: 51 pages; gates 0 failing; JSON-LD 50 of 50 parse; renders 102 of 102 clean; accessibility 0
failures; markers 4 (Northridge reviewers, Porter Ranch reviewers, privacy text, terms text); confirmed rate
mentions 22; PHOTO placeholders 26; all posts under 1,000 words on the checker's count (knee post 999).

Still open
- Dr. Ed: which Google reviewers live in Northridge and in Porter Ranch; his read of the About paragraph. The city
  pages stay hidden (CITY_PAGES_LIVE false) until that proof exists.
- Vlad or GPT: the live privacy and terms text (Dr. Ed: carry them over as they are), the Web3Forms key, the GA4
  measurement ID, the Clarity ID, the preview and its check files, one look at section 2620.1 on leginfo, Gabby's
  shoot for the 26 photo placeholders.

## Session 2, continued (23 Oct 2026): preview checked, keys in, legal pages live on the preview

Preview (GPT, 22 Oct 2026, Boost's Cloudflare account sales@boostbrandmarketing.com)
- Cloudflare Pages project chatsworthpt, Git-connected to BoostBrand/chatsworthpt, production branch main, Astro
  preset, npm run build, dist, no custom domain, no DNS. Address: https://chatsworthpt.pages.dev/. The Cloudflare
  GitHub app was given chatsworthpt only (Only select repositories kept).
- GPT's checks (in Vlad's Projects\Chatsworth PT\preview-check\): 70 of 70 paths returned exactly the expected
  status and Location (every 301, 410 and the 404); X-Robots-Tag noindex on every response; the five pages' HTML
  byte-identical to the local build of 1619f90, so the local renders stand for the preview at 390 and 1440.
- Cloudflare's build log: Node 22.16.0, 51 pages, Functions compiled, _routes.json uploaded, deployed. One warning
  mattered: undici 8.12.3 (astro > unifont > undici) wants Node 22.19.0 or newer. .node-version is now 22.22.0
  (commit 44f9e62), the version every local build and check ran on. The Astro content-collection warnings about
  the empty blog and conditions folders are cosmetic (noted in Batch B).

Launch inputs (GPT, launch-inputs.txt in Vlad's Chatsworth PT folder)
- GA4: property 469861709, stream 10036050468, measurement ID G-ZQ3F4WQ8GN, the same ID the live site uses.
- Clarity: new project "Chatsworth Physical Therapy" under sales@boostbrandmarketing.com, Health & Wellness (Vlad
  approved its terms), project ID in site.ts.
- Web3Forms (free plan, account sales@boostbrandmarketing.com): form "Chatsworth Physical Therapy Booking
  Requests", sole verified recipient chatsworthpt@gmail.com; access key in site.ts. No test submission yet.
- Termageddon: the four policy embed keys from the live pages. Usercentrics cookie banner settings ID
  qH0BCcOkhR_sVA (the live pages load the banner scripts twice). The banner is not on the new site: waiting on
  Vlad's yes.

Changes (commits f8a1793, 44f9e62, ee10223, pushed)
- Keys in site.ts only. Round trip at 51 pages: 48 booking forms with the honeypot, 0 call panels, GA4 and
  Clarity on 51 of 51. Tracking now loads only on chatsworthpt.com and www.chatsworthpt.com (TRACKING_HOSTS),
  tested in headless Chromium on all four hosts, so preview visits never reach the clinic's data.
- Legal pages: Termageddon embeds as on the live site; LEGAL_TEXT_READY true. termageddon.js fills the one element
  with id "policy" on a page (its source: a single getElementById, no loop), so /cookie-policy/ (P-053) and
  /disclaimer/ (P-054) stay pages instead of the blueprint's 301s; the four 301 lines left _redirects; the footer
  lists all four; build-data.mjs appends the two pages; SEO-RULINGS.json gives their SEO fields; entry-check skips
  pages without a blueprint entry; gate labels read 53.
- Counts at ee10223: 53 pages; gates 0 failing; noindex 3; sitemap 50; markers 2 (the two hidden city pages);
  accessibility 0 failures; renders 106, all clean except that this sandbox cannot download termageddon.js on the
  four legal pages (checked on the preview instead). urls.txt now expects 200 for /cookie-policy/ and /disclaimer/.

Waiting
- Vlad: yes to one test booking from the preview (it lands in Dr. Ed's inbox, chatsworthpt@gmail.com); yes or no
  to the cookie banner.
- Dr. Ed: Northridge and Porter Ranch reviewers (the last two markers; the city pages stay hidden until then), and
  his read of the About paragraph.
- Before launch: section 2620.1 on leginfo; Gabby's shoot (26 photo placeholders); PREVIEW false; the cutover list.

Live check of ee10223 on https://chatsworthpt.pages.dev/ (23 Oct 2026, Chrome, no screenshots): /cookie-policy/,
/disclaimer/, /terms-of-service/ and /privacy-policy/ return 200 with the embed and all four footer links; the
privacy policy loads from Termageddon (13,019 characters, "Last updated: Aug 22, 2025"); /book-appointment/ still
301s to /contact/ and /wp-login.php returns 410; noindex on every response; /contact/ carries the live booking form;
no GA4 or Clarity script loads on pages.dev. The Termageddon privacy policy names Google Analytics but not
Microsoft Clarity, Web3Forms or Usercentrics: its questionnaire needs updating before launch (Termageddon account).

## 23 Oct 2026, late morning: one menu everywhere, cookie banner, first test booking, Russian page question

- Test booking (Vlad's yes): sent from https://chatsworthpt.pages.dev/contact/ at about 11:07am through the live
  form, marked "TEST from Boost Brand Marketing (please ignore)", no call needed. Web3Forms answered 200 with
  success and the thank-you state showed. Arrival in chatsworthpt@gmail.com is for Dr. Ed or the Web3Forms dashboard
  to confirm (Boost cannot open that inbox).
- Menu (Vlad: the homepage menu stayed on the homepage; Contact must be in the menu), commit d78e567: one menu on
  every page, the homepage included: Services (8 physical therapy pages, then red light, ultrasound, e-stim,
  personal training, then All services), Conditions (12, then All conditions), Dr. Ed, Reviews, New patients (first
  visit, insurance and cost, questions, blog) and Contact. The tap-open menu shows below 1180px on every page, groups
  open one at a time. Fit checked at 390 to 1920; dropdowns inside the window with nothing clipped from 1180 up;
  keyboard focus opens a dropdown; Escape closes the phone menu. NAV_PATHS in gates.py lists the 33 menu pages
  (aria-current 33 of 33). The homepage's scroll-spy anchors are gone; the scroll-spy code stays dormant in
  src/scripts/site.ts (it only runs when every menu link is an in-page anchor).
- Cookie banner (Vlad's yes), commit f4ae41f: src/components/ConsentBanner.astro at the top of the head, the live
  site's complete Usercentrics set once (blocker, loader with settings ID qH0BCcOkhR_sVA, Termageddon translations);
  COOKIE_BANNER_SETTINGS_ID in site.ts. Live on the preview: blocker and banner load, UC_UI initializes, the banner
  shows. Its service list (UC_UI.getServicesBaseInfo, 23 Oct 2026): Usercentrics CMP, Google Fonts, Google Tag
  Manager, Cloudflare, Google Maps, Google Analytics. Microsoft Clarity is missing: to add in the Usercentrics
  settings with the Termageddon policy update. Google Fonts and Google Maps are the live WordPress site's; leave them
  until cutover. The blocker is render-blocking by design; cached reload on the preview: first paint 324 ms.
- Clarity masking: default Balanced masks numbers and email addresses; input boxes and dropdowns are masked in every
  mode (Microsoft docs, read 23 Oct 2026). No change needed for the booking form.
- Russian page question (research by a subagent, 23 Oct 2026): Semrush US shows no measurable volume for "russian
  speaking physical therapist" (and the near me and Los Angeles forms) or for the Russian LA terms; the only Russian
  term with volume is the national "физиотерапевт" (140 a month). Search Console, 16 months: no query with "russia"
  or Cyrillic. GA4: Russian browser language 13 of 1,851 sessions (0.7%). Verdict given to Vlad: not worth a page as
  an SEO play; cheaper visibility moves instead.
- Counts at f4ae41f: 53 pages; gates 0 failing; renders 106 clean (outside scripts aside); accessibility 0 failures.

## 23 Oct 2026, afternoon: city pages, photos, Termageddon settled, tracking waits for the banner's yes

- City pages (commit 5b58ce3; Vlad: nobody knows which reviewers live in Northridge or Porter Ranch): the reviewer
  lines are out. Northridge keeps its other local proof (CSUN students and athletes, the CSUN discount, Northridge
  Hospital joint replacement patients, the routes); Porter Ranch loses its Porter Ranch patients section, which held
  only the reviewer line. Both stay hidden (CITY_PAGES_LIVE false). The site renders 0 markers, so PREVIEW can go
  false at launch.
- Test booking: GPT confirmed it reached chatsworthpt@gmail.com on 23 Oct 2026 at 11:06:49am Pacific. GPT saved its
  notes to C:/Users/Vlad/Documents/Codex/2026-10-22/files-pasted-by-the-user-you/outputs/launch-inputs.txt, not to
  the launch-inputs.txt in Vlad's Projects\Chatsworth PT folder.
- Photos (commit ec3f7ed; Vlad's option 2: real clinic photos where they fit, the rest out). All 26 grey PHOTO
  placeholders are gone.
  - Heroes with no fitting photo show text only: balance, pediatric, neurological, ultrasound, electrical
    stimulation, vertigo, Northridge, Porter Ranch.
  - Body photos: Northridge, the map image; cash-pay post, the desk photo; referral and first visit posts, the
    anatomy chart photo; sciatica post, the back exercise photo; knee replacement post, the post-op photo; red light
    post, the red light photo; ACL post, the sports rehab photo. Five posts lose the spot (young gymnast, vertigo,
    fall checklist, stroke, Medicare).
  - Services hub: orthopedic gets the anatomy chart photo, pain management the hero photo, personal training the
    desk photo (it had the anatomy photo). Balance, pediatric and neurological have no fitting photo, so they are
    text only and moved to the last row, which keeps every row even at 3 and at 2 columns.
  - Checked: renders 106 with 0 real problems (the only errors are the outside banner and policy scripts, which this
    sandbox cannot reach); accessibility 0 failures; gates 0 failing; content check clean. Screens looked at: the
    balance hero (390, 1440), the Northridge and e-stim heroes, the gymnast post and the services hub (768, 1440).
- Termageddon and the banner. GPT reported at about 11am that Clarity could not be added; with Vlad's yes it then
  added Microsoft Clarity to the banner (Marketing, with Usercentrics' Clarity consent setting on) and published two
  privacy policy sections Vlad approved: "Booking requests and Web3Forms" ("We use Web3Forms to deliver information
  submitted through our booking-request form to the clinic's email inbox, so we can review and respond to
  appointment inquiries.") and "Microsoft Clarity" (behavioral analytics, heatmaps and session replay, with a link to
  https://www.microsoft.com/privacy/privacystatement). Read on the preview in the built-in browser at about 3:30pm
  and again at about 4:05pm: the banner lists Microsoft Clarity (Marketing; processor Microsoft Ireland Operations
  Limited); the cookie policy lists it under Marketing cookies ("Last updated: Oct 23, 2026 5:31 PM"); the privacy
  policy names Clarity in Analytics programs and in its own section, names Web3Forms, and reads "Last updated: Oct
  23, 2026 5:54 PM". Both new sections match what the site does. Termageddon work is finished.
  - Banner settings (UC_UI.getSettingsCore): opt-in everywhere (acceptAllImplicitlyOutsideEU false; CCPA, TCF and
    Google Consent Mode off). Every service but the CMP starts switched off; the banner shows on a first visit
    (Accept All, Deny, More Information).
  - Events seen on Deny: UC_UI_CMP_EVENT {source FIRST_LAYER, type DENY_ALL}, then UC_UI_VIEW_CHANGED {FIRST_LAYER to
    PRIVACY_BUTTON}; no custom window event is configured. The test choice was cleared afterwards
    (UC_UI.clearStorage), so that browser is back to a first visit. Accept was not clicked.
  - Still in the banner list from the old site: Google Fonts and Google Maps (the new site self-hosts its fonts and
    shows the map as an image). A Termageddon rescan after cutover can drop them. Not urgent.
- Tracking (commit fe42d0d): GA4 loads only when the banner's "Google Analytics" is on, and Clarity only when
  "Microsoft Clarity" is on; still only on chatsworthpt.com and www. Switching a service off later reloads the page;
  a blocked banner means nothing loads. Tested with a stand-in banner in headless Chromium (consent_test.mjs, session
  scratchpad): 15 of 15 (blocked banner, first visit, Accept All, Deny, Clarity switched off later, returning visitor
  with GA only, slow banner, preview and local hosts). On the preview: the new code is in the HTML and no GA4 or
  Clarity script loads.
- Section 2620.1 (the referral post's source): leginfo refuses automated reads from here. Justia's 2025 California
  Code shows the section last amended by Stats. 2022, Ch. 509 (SB 1438), effective 1 Jan 2023, with the 45 calendar
  days or 12 visits limit in (a)(4). The one 2025 to 2026 bill found that would have changed direct access, AB 2497,
  was refused passage on 28 May 2026 (CalMatters Digital Democracy). The post's wording stands.
- Counts at fe42d0d: 53 pages; gates 0 failing; markers 0; PHOTO placeholders 0; renders 106 clean apart from outside
  scripts; accessibility 0 failures. Copy export regenerated.
- City pages live (commit d94ab60; Vlad: "make both of them go live"; the recommendation had been Northridge only,
  since Porter Ranch names no local patients, schools or hospital). CITY_PAGES_LIVE true: no noindex, both in the
  sitemap, linked from the homepage service-area line and the contact page directions, and each page's related links
  name the other (the architecture CSV wants that link both ways; the gate caught it). Gate labels updated.
- Russian line (commit e4a8178; Vlad's yes): "Говорим по-русски" as a pill under the phone line in every booking band
  (the homepage's included) and in the contact hero, and as a plain line under the email in the footer, each with
  lang="ru". Screens checked at 390 and 1440.
- Counts at e4a8178: 53 pages; gates 0 failing; noindex 1 (the 404); sitemap 52; markers 0; PHOTO placeholders 0;
  renders 106 clean apart from outside scripts; accessibility 0 failures.
- Open with Vlad: the launch go (PREVIEW false, custom domain, DNS, Search Console).

## 23 Oct 2026, evening: comma after CA, Home in the menu, favicon, the Russian page question again

- Address (commit 69794c4; Vlad: a comma after CA everywhere): "Chatsworth, CA, 91311" in the shared address line
  in site.ts (footer, booking bands, contact hero), the visit table and map tag (homepage and the visit block), the
  contact page description (SEO-RULINGS.json, P-020) and the FAQ answer. The schema keeps state and ZIP in separate
  fields, unchanged. Most US addresses are written without that comma; it has no effect on Google.
- Menu (commit 7615e23; Vlad: add a Home button): Home is the first menu item on every page and in the phone menu.
  One row from 1180px up (checked at 1180, 1280, 1440 and 1920); the gate expects 34 menu pages.
- Favicon (commit 99f6d2c; Vlad: don't forget the favicon). The site had one (the blue figure from the logo), but its
  SVG was not square and the .ico held one size. Now favicon.svg has a square view, favicon.ico holds 16, 32 and 48
  pixels, and apple-touch-icon.png (180) leaves room around the figure. The old three files are in
  _holding/favicon-before-square-23oct/.
- Service area pages: confirmed for Vlad; both city pages are live on the preview and linked.
- Russian page (Vlad asked again): none exists. Answer given: not worth building for Google (Semrush, checked 23 Oct:
  about 140 US searches a month for "физиотерапевт", no measurable Los Angeles searches; GA4: about 0.7% of visits
  use a Russian-language browser). Its use would be a page Dr. Ed can text to Russian-speaking patients; it needs his
  proofreading and double upkeep of prices and hours. Recommendation: skip for launch; build on Vlad's word, with Dr.
  Ed proofreading the Russian.
- Analytics event (commit a526374): a sent booking request now fires generate_lead (Google's
  recommended event, "submits a form or a request for information") instead of form_submit, which GA4's enhanced
  measurement sends by itself on every submit click. Tested with a stubbed Web3Forms success after consent:
  generate_lead with the service and page path lands in the dataLayer. call_click and book_click unchanged.
- Tracking setup brief for GPT (Vlad asked, 23 Oct evening; his yes to three extras: key events, 14 months of data,
  Search Console linked to GA4). GPT reads codes and changes only the approved settings; Claude adds every code to
  the site (site.ts only). Asked of GPT: GA4 (reuse property 469861709, stream and enhanced measurement report, data
  retention 14 months, generate_lead and call_click as key events, list the old key events); Search Console (list
  the chatsworthpt.com properties and how each is verified, copy an HTML tag without clicking Verify, note any HTML
  file, link to GA4); Bing (report if already there, else import from Search Console, which verifies by itself
  (Bing blog, Sept 2019), else copy the meta tag); GTM (report any existing container and its tags, else create
  account "Chatsworth Physical Therapy" with Web container "chatsworthpt.com", no tags); Clarity (confirm project
  z1ujczxp26, URL, masking). Sitemaps are submitted after launch, not now. Plan for GTM: load it with the same
  banner lock ("Google Tag Manager" service) and keep GA4 direct, so nothing counts twice.
- GPT's tracking report (23 Oct, about 5:25pm; also in Vlad's Projects\Chatsworth PT\launch-inputs.txt):
  - GA4: account 338496227, property 469861709, stream 10036050468 (https://chatsworthpt.com), G-ZQ3F4WQ8GN.
    Enhanced measurement off (left off: the tag's config sends the page view on load by default, Google's "Measure
    pageviews" page, and the site sends its own lead and call events). Retention already 14 months. generate_lead
    and call_click added as key events; the old purchase key event left alone.
  - Search Console: one Domain property, sc-domain:chatsworthpt.com; sales@ has Full access, the verified owner is
    vladislavtk@gmail.com. A Domain property verifies only through DNS (Google, "Verify your site ownership"), so
    there is no HTML tag to carry over; the TXT record must stay in the domain's DNS at launch. The verification
    screen pre-selected Cloudflare as the domain's DNS provider. The GA4 link needs a verified owner of the Search
    Console property and Editor on GA4 (Google, "Connect Search Console to Google Analytics").
  - Bing: nothing under sales@. The Search Console import asks Google for read access to every verified site of the
    signing account; GPT's approval check stopped it. Manual meta tag instead.
  - Tag Manager: no container under sales@; account "Chatsworth Physical Therapy" and Web container "chatsworthpt.com"
    prepared, waiting on Vlad's yes to Google's terms.
  - Clarity: z1ujczxp26, https://chatsworthpt.com, Balanced masking.
- Tag Manager and Bing slots (commit 23b6841): GTM_ID and BING_SITE_VERIFICATION in site.ts, empty until GPT sends
  them. Tag Manager loads only on the real domain and only after the visitor allows "Google Tag Manager" in the banner;
  GA4 stays direct; the site's events also feed Tag Manager's data layer once it is loaded. The msvalidate.01 tag
  renders when the Bing value is set. Tested with throwaway test IDs: 16 of 16; GA4 and Clarity checks 15 of 15 with
  the IDs empty. Reply to GPT given to Vlad: link Search Console through the owner login (vladislavtk@gmail.com, given
  Editor on the GA4 property if missing), Bing by meta tag, accept the Tag Manager terms for this one account.
- GPT's last report (23 Oct, about 6:40pm): Search Console linked in GA4 (no permission changes needed); Bing site
  added by hand under sales@, not yet verified; Tag Manager container GTM-MTLHQPDR created with no tags (Google made
  an initial empty version; nothing published). Clarity: sales@ is the sole admin.
- Codes in (commit 8a414a9): GTM_ID GTM-MTLHQPDR and BING_SITE_VERIFICATION in site.ts. Tested with the real IDs:
  16 of 16. On the preview: the Bing tag is in every page and nothing loads on pages.dev.
- Launch brief for a new session: reference/BRIEF-chatsworthpt-launch.md (Project copy
  claude/BRIEF-chatsworthpt-launch.md). Cloudflare facts in it checked 23 Oct against Cloudflare's Pages docs (apex
  custom domain must be a zone on the Pages project's account; adding the CNAME by hand first gives a 522; CAA records
  can block the certificate; www to apex by Bulk Redirect plus a proxied A record to 192.0.2.1).

## 23 Oct 2026, 8pm: launch session started; the domain is in Vlad's personal Cloudflare account

- Clean clone at 4eb46da: npm ci, npm run build, npm run gates. 53 pages, 0 hard gates failing, sitemap 52, noindex 1
  (the 404), markers 0, PHOTO placeholders 0, as expected.
- Dr. Ed: no reply in the JenErg mailbox to the 21 Oct question email (sent from jenny@jenerg.com to
  chatsworthpt@gmail.com); his other answers came through Vlad on 21 Oct. Question 36 (the About paragraph) is still
  open. Vlad asked for the link to send him: https://chatsworthpt.pages.dev/ and /about-us/ (sent to Vlad with a
  ready text).
- Tracking confirmed in site.ts for Vlad: GA4 G-ZQ3F4WQ8GN, Clarity z1ujczxp26, GTM-MTLHQPDR (no tags), the Bing tag,
  the Usercentrics banner; TRACKING_HOSTS limits all of it to chatsworthpt.com and www. Launch-day jobs left: Bing
  Verify, sitemaps to Search Console and Bing, one Accept and one Deny check, GA4 Realtime.
- Cloudflare (Vlad, 23 Oct 7:42pm): the chatsworthpt.com zone is in his personal Cloudflare account and must move to
  the Boost account sales@boostbrandmarketing.com, where the Pages project is ("for anything we do"). Cloudflare's
  Pages docs require an apex custom domain to be a zone on the Pages project's account, so the move comes before
  launch, as its own change, with the WordPress site kept running.
- How Cloudflare moves a zone between accounts (read 23 Oct 2026):
  - Move a domain between Cloudflare accounts (developers.cloudflare.com/fundamentals/manage-domains/move-domain/):
    remove DNSSEC and add-ons or subscriptions first; export the records and import them in the new account (or the
    scan picks up proxied records and the site can show a 1000 error); add the domain to the new account; change the
    nameservers at the registrar; Overview, Re-check now. A Cloudflare Registrar domain needs the inter-account
    transfer request instead (developers.cloudflare.com/registrar/account-options/inter-account-transfer/).
  - Domain statuses (developers.cloudflare.com/dns/zone-setups/reference/domain-status/): a Pending zone answers DNS
    on its assigned nameservers but does not proxy; a free zone in Moved is deleted 7 days later; Deleted zones still
    answer and can be re-added, purged after 7 more days.
  - Import and export (developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/): the export marks
    proxied records cf-proxied:true, and on import that tag wins over the Proxy imported DNS records checkbox.
  - Universal SSL (developers.cloudflare.com/ssl/edge-certificates/universal-ssl/enable-universal-ssl/): issued 15
    minutes to 24 hours after activation; to avoid downtime, keep records unproxied until the certificate is active.
  - DNSSEC (developers.cloudflare.com/dns/dnssec/): remove the DS record at the registrar and wait for its TTL,
    commonly 24 to 48 hours, before changing nameservers, or validating resolvers return SERVFAIL.
  - Nameservers (developers.cloudflare.com/dns/nameservers/nameserver-options/): a zone added in a second account is
    more likely to get different nameserver names.
- GPT block given to Vlad: write down the old zone (settings, export, registrar, WordPress host, undo nameservers),
  stop on Cloudflare Registrar, DNSSEC, a paid plan, no registrar login or an existing Boost zone; otherwise onboard
  on the Free plan in the Boost account, import the export, compare the two exports, copy the SSL/TLS mode, Always
  Use HTTPS and redirect rules, change the nameservers, Re-check now, wait for Active and the certificate, check the
  WordPress site and the Search Console TXT record. Files go to Vlad's Projects\Chatsworth PT\cloudflare-move\.
  Nothing deleted, no Pages custom domain, no launch.
- Waiting: GPT's move report; Vlad's answer on launching before Dr. Ed reads the About paragraph; Vlad's "go".

## 23 Oct 2026, 8:15pm: launch before Dr. Ed's About answer; launch block ready

- Vlad (8:11pm): launch before Dr. Ed reads the About paragraph ("we can always change what he asks for"). He sent
  the zone-move block to GPT.
- Prep while GPT works: reference/GPT-LAUNCH-BLOCK-chatsworthpt.md (Project copy claude/GPT-LAUNCH-BLOCK-chatsworthpt.md)
  holds the launch-day GPT block (Pages custom domain, www Bulk Redirect with the A record to 192.0.2.1, Always Use
  HTTPS, sitemaps to Search Console and Bing, Bing Verify), Claude's check list, and two prep decisions: no
  query-string redirect rule at launch (the homepage canonical covers /?p=N and the others; none is in the Search
  Console URL list), and T-009 retried after the move (the live sitemap sits behind the personal zone's security
  check; the built-in browser did not pass it and it was left alone). Always Use HTTPS read 23 Oct 2026 at
  developers.cloudflare.com/ssl/edge-certificates/additional-options/always-use-https/; the www guide at
  developers.cloudflare.com/pages/how-to/www-redirect.
- Waiting: GPT's move report in Vlad's Projects\Chatsworth PT\cloudflare-move\; then Vlad's "go".

## 23 Oct 2026, 9:49pm Pacific: the zone is in the Boost Cloudflare account

- GPT's move (files in Vlad's Projects\Chatsworth PT\cloudflare-move\, report.txt 9:54pm): personal zone Free, SSL
  Full, Always Use HTTPS off, DNSSEC off (no DS at GoDaddy), no page or redirect rules, Under Attack Mode on,
  registrar GoDaddy. New zone in account cfe2da24c9f3664bf54475f308ad2e7e (Sales@boostbrandmarketing.com's
  Account), Free, records by file import (no scan), SSL Full set by hand, Always Use HTTPS off. Nameservers at
  GoDaddy: clara and earl (were ben and liv). Zone Active about 04:49 UTC 24 Oct; Universal certificate active.
- With Vlad's approvals during the run: SiteGround had no valid certificate for the domain, so GPT installed a free
  Let's Encrypt certificate there (after a temporary rule in the old zone let the validation through; that rule is
  now disabled, not deleted); apex and www went DNS only for the switch, then back to proxied; Under Attack Mode kept
  ON in the new zone.
- Records: 14 (7 A at 35.215.84.147, all proxied: apex, www, autoconfig, autodiscover, ftp, mail, ssh; a proxied
  DKIM CNAME; 3 MX to mailspamprotection.com, SiteGround's mail filter; TXT for Google verification, SPF, DMARC). No
  CAA. Claude's own diff of old-zone-records.txt and new-zone-records.txt (SOA and NS left out): identical.
- Public DNS at 05:01 UTC (built-in browser): dns.google gives clara and earl; cloudflare-dns.com still gives ben and
  liv (TTL 86400). Launch waits until both agree.
- Not in GPT's report: a check that the Pages project chatsworthpt is in account cfe2da24. It is step 0 of the launch
  block now. Launch block also gained: read the WordPress post list for T-009 (step 0b), Under Attack Mode off at
  launch (step 0c, Vlad's yes with his go), the current www record. Old zone in the personal account: kept; its
  status after the move was not rechecked.

## 23 Oct 2026, 10:20pm: fresh check of the deployed preview (GPT's handoff asked for one)

- GPT's handoff (Vlad pasted it, 10:08pm) recommended fresh QA of the deployed build before launch. Done by script in
  the built-in browser: every page, robots.txt and both sitemaps on chatsworthpt.pages.dev are byte-identical to the
  build of main; redirects (14 tried), 410s (13 tried) and the 404 behave as built; noindex on every preview response;
  no tracking request on the preview; the contact form, honeypot and phone link are there; the banner shows.
- Local re-runs on main: renders 106 with 0 overflow, 0 broken images, one h1 (outside scripts unreachable in the
  sandbox); accessibility 53 pages at 2 widths, 0 failures; gates 0 failing.
- Found: the Termageddon Terms of Service names the old address, 19860 Nordhoff Place, Unit 201 (the privacy policy,
  cookie policy and disclaimer do not). It is Termageddon's text, not the repo's. Added as step 7 of the launch block
  with the cookie rescan; needs Vlad's yes.
- GPT's other points are covered: the October 22 preview-check files are history (this check replaces them); GTM is
  loaded by the site after consent with an empty container, GA4 is sent directly, so nothing counts twice; booking
  and call events get a real check on the live domain after launch. A WordPress backup is not needed for launch
  because nothing on SiteGround changes; take one before SiteGround is ever cancelled.

## 23 Oct 2026, 10:45pm: link check after Dr. Ed said some links did not work

- Vlad: Dr. Ed, checking the preview, said some links looked broken; Vlad gave his yes to send GPT the Terms of
  Service address fix.
- Internal links in the build: 0 broken, 0 broken in-page anchors, no absolute links to chatsworthpt.com (they would
  have reached the old WordPress site from the preview). 312 phone links and 55 email links.
- Tap test (Playwright on dist, session scratchpad linktest/hit.mjs): every visible link on all 53 pages at 390 and
  1440, scrolled into view and hit-tested on each line of the link (5,670 links), plus the phone menu and the desktop
  dropdowns. One real fault: on the homepage at 1024 to 1920 the line "Not sure which one you need? Call (818)
  749-3205 ..." sat in the left column under the sticky photo mosaic, which slid over it, so the phone link could not
  be clicked and its text printed over the photo caption. Fix (layout only, no copy): the line moves under the
  services list in the right column from 900px up (src/styles/home-draft9.css). Re-tested at 1024, 1180, 1280, 1440
  and 1920: clickable, no overlap. Phone layout unchanged.
- Not faults: the phone sticky Call and Book bar is hidden at the top of a page and near the booking band by design
  (tappable whenever shown, checked at 15 to 70 percent of the page); the phone link inside the homepage insurance
  question works once the question is opened; on a first visit the cookie notice covers the lower half of a phone
  screen until Accept or Deny, as on the old site.
- Outside links (35: social profiles, Google review and map links, the cited sources): the built-in browser check
  stopped when Vlad's computer disconnected. Sent to GPT with the Termageddon fix.

## 23 Oct 2026, 11:40pm: GPT's four prep jobs done

- Termageddon: business address now 19851 Nordhoff Place, Unit 105 (Suite C), Chatsworth, CA, 91311; GPT saw it in
  the Terms of Service loaded on the preview. Nothing else changed.
- Outside links: 34 of 35 opened the right page (all four social profiles, the Google Maps listing and the review
  form among them). The NINDS post-stroke rehabilitation PDF gave GPT a 403; Claude's fetch of the same URL on 23 Oct
  returned the fact sheet ("Post-Stroke Rehabilitation", NIH Publication No. 20-NS-4846), so the link stays.
- SiteGround email: no @chatsworthpt.com mailboxes or forwarders; only the default catch-all that refuses mail. So
  nothing depends on SiteGround's mail; SiteGround can be cancelled after launch once Vlad decides.
- SiteGround backup: one free manual backup, "Chatsworth pre-launch 2026-10-23", 23 Oct 10:44pm.
- GPT's notes: Vlad's Projects\Chatsworth PT\launch-prep-report.txt. Next: DNS settles, then Vlad's go.

## 24 Oct 2026: LAUNCHED. chatsworthpt.com serves the new site

- DNS settled (9:10am, built-in browser): dns.google and cloudflare-dns.com both return clara and earl; apex and www
  on the new zone; Google verification TXT and MX present.
- Vlad, 9:19am: "yes go ahead" to "go, yes, yes" (launch; Under Attack Mode off; one Accept click on the banner).
- Commit 65c837d: PREVIEW false. Gates 0 failing, markers 0, noindex 1 (the 404), sitemap 52, preview note on 0
  pages. Deployed to the Pages project in 31 seconds (GPT read the deployment: success, 9:20am).
- T-009 (commit 50202c9): GPT read the WordPress admin (old-wordpress-posts.txt: 5 posts, 32 pages). The three 2020
  posts (/how-much-training-is-too-much/, /tips-for-fitness-based-nutrition/, /5-reasons-why-you-should-not-over-train/)
  301 to /blog/; /windows-10-activator-software/ (dated 23 Jan 2024 in WordPress, not February 2026 as the notes had
  it) joins the 410 list; the Vavada post was already 410. Every one of the 32 WordPress pages has a page or a rule on
  the new site. GPT held the launch on the date difference; Vlad said proceed.
- GPT's launch (cloudflare-move\launch-report.txt, final status 10:31am): Pages project confirmed in account
  cfe2da24c9f3664bf54475f308ad2e7e; Under Attack Mode off; custom domain chatsworthpt.com Active (apex now CNAME to
  chatsworthpt.pages.dev, proxied; was A 35.215.84.147); www now A 192.0.2.1 proxied (was A 35.215.84.147) with a
  Bulk Redirect 301 to https://chatsworthpt.com keeping path and query; Always Use HTTPS on; SSL mode Full; the other
  12 records unchanged (final-dns-records.txt). Search Console: sitemap-index.xml submitted, status Success. Bing:
  verified by the meta tag, sitemap submitted (Processing). Termageddon: rescan run on the live sitemap; Google Fonts
  and Google Maps are still in the banner's service list (the scan did not remove them; nothing removed by hand).
- Claude's live checks (built-in browser, 24 Oct about 10:40am):
  - 52 pages 200, canonical on their own https://chatsworthpt.com URL, no noindex meta and no X-Robots-Tag; robots.txt
    and both sitemaps byte-identical to the build. The HTML differs from the build only by Cloudflare's Email Address
    Obfuscation (on in this zone, as in the old one): the email becomes a /cdn-cgi/l/email-protection link plus
    Cloudflare's email-decode script, which turns it back into mailto:chatsworthpt@gmail.com in the browser (checked;
    JSON-LD untouched). Confirmed on five pages by masking the email on both sides: otherwise identical.
  - 10 old addresses 301 to the right page (the three 2020 posts among them); 9 WordPress, theme and spam addresses
    410 (the activator and Vavada posts among them); an unknown address 404; http://www.chatsworthpt.com/about-us/?check=1
    lands on https://chatsworthpt.com/about-us/?check=1; Bing tag present; no preview note.
  - Consent: first visit shows the banner and loads no GA4, Clarity or Tag Manager. Accept All (Vlad's yes): GA4
    G-ZQ3F4WQ8GN loads and sends page_view, Clarity z1ujczxp26 loads and collects, GTM-MTLHQPDR loads. Fresh visit
    (storage cleared), Deny: none load.
- Left for Vlad: tell Dr. Ed it is live; SiteGround can be cancelled when he decides (backup taken 23 Oct, no
  @chatsworthpt.com mailboxes; WordPress is no longer reachable on the domain); optional Termageddon tidy-up of the
  Google Fonts and Google Maps entries; optional test booking on the live domain (sends to Dr. Ed's inbox).

## 24 Oct 2026, 11:15am: GPT's follow-ups after launch

- GA4 Realtime (about 10:58am): 1 active user in the last 30 minutes and one new-site page view (consistent with
  Claude's Accept test; GPT cannot tell whose visit it was).
- Search Console: Request Indexing accepted for /, /our-services/, /back-pain-therapy/, /sports-injury-recovery/,
  /pre-post-surgical-rehabilitation/, /about-us/, /contact/ and /physical-therapy-northridge/ (Northridge was not yet
  indexed; now queued). No quota block.
- Termageddon (Vlad's yes): Google Fonts and Google Maps removed from the banner's service list, published; the
  live cookie policy no longer lists them. The other five services unchanged.
- Next, Vlad's call: cancel SiteGround in a week or two; at that point tidy the DNS records that point to it (the
  five host A records at 35.215.84.147, the DKIM CNAME, MX and SPF), since nothing uses its mail. Check Search
  Console indexing after a week.

## 24 Oct 2026, evening: Dr. Edward's homepage feedback (branch ed-feedback-2026-10-24, not published)

Source: Vlad's brief CLAUDE-BRIEF-Ed-homepage-feedback-2026-10-24.md (his Chatsworth PT folder), from Dr. Edward's
email of 24 Oct 3:16pm and Vlad's ruling that the site says "Dr. Edward", never "Dr. Ed".

1. Naming, site-wide: 658 authored "Dr. Ed" / "Dr Ed" / "Doctor Ed" became "Dr. Edward" in src and scripts (menus,
   headings, body copy, buttons, booking lines, FAQs, alt text, captions, schema, blog bylines, the review context
   label on personal training, the Russian About line "Доктор Эдвард"). The homepage generator renames its own output
   (markup, FAQ and video data), so a rerun keeps it. Patients' reviews are quoted as written: 7 pages show reviews
   that say "Dr. Ed" or "Dr Ed" (reviews.json, kept verbatim; the homepage review cards have none). Person schema:
   name "Edward Shut", alternateName "Dr. Edward" (was "Dr. Ed"); @id unchanged. Image file names unchanged. The
   blueprint and older rulings keep their wording as records; scripts/lib/blueprint.py and check-content.mjs read the
   expected SEO fields through the same rename. 43 titles and descriptions went over 60 or 155 characters with the
   longer name; each got the smallest fix (mostly "| Dr. Edward, DPT" or "| Dr. Edward" as the title tail, or a two to
   ten character trim) and is recorded in reference/SEO-RULINGS.json under "naming". Header: labels kept on one line
   (white-space nowrap), menu gap 0.95rem from 1180px, logo set not to shrink; same menu width as before (640 px).
2. Homepage biography replaced by "A plan built around your movement" (Vlad's brief copy, unchanged), portrait kept,
   links "Explore our treatments" (/our-services/) and "Meet Dr. Edward" (/about-us/). Credentials, diploma and
   license frames, the Susan quote and the social row are gone from the homepage; all remain on About and the footer.
3. Service photos: the knee ultrasound tile is now a hands-on leg mobility photo, public/img/dr-edward-hands-on-leg-
   mobility-chatsworth.webp (900 px, 29 KB) from Drive "With Meta Data On It" 78-REL08989.jpg
   (1SihkGtdBseWTnUlGJIXp1BFUztzyk_2T): Dr. Edward holds a patient's bent leg at the ankle, other hand on her hip.
   The brief's suggested file (rehab-therapy-manual-therapy-knee-exercise-chatsworth-pt.jpg, 17.6 MB) could not be
   downloaded (connector limit 10 MB); a subagent found the hands-on series 76 to 79 in the shoot originals and could
   not confirm which frame the SEO copy was exported from. The mosaic is static: hover and focus photo swapping
   removed (site.ts block, the overlay image, data-photo attributes, the .mosaic-swap styles). The old post-op image
   file stays (other pages may use it).
4. Caption "Real sessions at the clinic. Every one of them is Dr. Ed." removed; mosaic label "Physical therapy treatments".
5. Booking photo: public/img/dr-edward-anatomy-chart-chatsworth.webp (1200 x 960) from 31-REL08860.jpg
   (10lNyODk8SHNKMbAlbFMH7rMQj7_SQ-mm), two frames before the laughing one (32-REL08862.jpg, the old file's source,
   matched by pixels), same camera, same people and chart, Dr. Edward's mouth closed; same crop as the old file. Alt
   "Dr. Edward explaining an anatomy chart in the Chatsworth clinic". Homepage only: six inner pages still use the old
   (laughing) file.
6. City line plain text; "Nearby areas: Porter Ranch | Northridge" below it (links only while CITY_PAGES_LIVE).
   One line from 360 px; wraps at 320.

Generator: scripts/port-homepage.py now also carries the three edits made in the build after the port (trust row
"Most patients need no referral", the comma after CA, the Russian booking line); a second regeneration is
byte-identical. Checks on the branch: gates 0 failing (53 pages), content check 0 failing, accessibility 0 failures
(53 pages, 2 widths), renders 106 with 0 overflow, 0 broken images, one h1; tap test 5,664 links, only the phone
sticky bar's by-design hiding; header one row at 1180 to 1920 with the logo at full width. Before and after
screenshots sent to Vlad. Not published: main is unchanged until Vlad's yes.
