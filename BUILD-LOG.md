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

## Batch F: blog hub and twelve posts (21 Oct, in progress)

Hub: P-037 /blog/ built by the build lead (about 90 words of its own; the post list, newest first with the parent page
as a tag, and the CollectionPage and ItemList schema come from the post files themselves).

Posts accepted so far, each checked against its entry and decision sheet, every outside quote matched to a page the
build lead fetched on 21 Oct 2026:
- P-038 referral in California (931 words before review). Sources: Business and Professions Code section 2620.1 on
  Justia (re-fetched by the build lead: the (a)(1), (a)(4) and (d) wording matches, apostrophes aside) and
  Medicare.gov "Physical therapy services". Build lead edit: the paragraph quoting (a)(3) (the therapist notifies
  your doctor, with your written authorization) came out, because it describes an intake step Dr. Ed has not
  confirmed and sits outside the sheet's scope; "the window does not help you" now reads "does not apply".
- P-039 Medicare (783 words). Source: Medicare.gov "Physical therapy services" (Part B coverage, certification by
  your doctor or other health care provider, 20% after the Part B deductible, no yearly limit). No dollar figures.
- P-040 first visit (814 words). No outside source; every fact traces to FACTS.md or the built Your first visit page.

### Open questions from Batch F (so far)

For Vlad:
1. Approved homepage trust row: "Medicare accepted" sits directly above "No referral needed to start." A Medicare
   patient can read that as no referral needed, but Medicare patients need one from the start. Approved copy, so not
   changed. One way to fix it: "Most patients need no referral to start."
2. P-040's blueprint meta description promises the first visit "minute by minute"; there are no per-step times in
   the facts, so the post gives the order, not minutes. Suggest "step by step" (blueprint field, not changed).
3. Section 2620.1 is quoted from Justia because the official leginfo page does not load from here. One look on
   leginfo.legislature.ca.gov before launch.

For Dr. Ed:
- Medicare Advantage: are Advantage plans accepted? The site says only "Medicare".
- Does the 45-day and 12-visit count start again for a new injury or after a break in care? The posts do not say.
- P-040: two explaining clauses to confirm or cut ("the area that hurts should be easy to see and free to move";
  "the aim is to return you to the things that matter to you").
