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
