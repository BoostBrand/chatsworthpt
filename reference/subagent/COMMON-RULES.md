# Common rules for page builders (read first, every page)

You build ONE page of chatsworthpt.com (Chatsworth Physical Therapy, Dr. Edward Shut, DPT) for an Astro site.
The build lead (another session) owns everything shared, runs the builds and the gates, and checks your page
against its blueprint entry before accepting it. Your report is not proof; the page is.

## What you read (nothing else)
1. This file.
2. `COMPONENTS.md` at the repo root: the two files you write, the content model, the section kinds.
3. `reference/subagent/FACTS.md`: the facts confirmed by Vlad and Dr. Ed, and the site-wide lines.
4. Your entry: `reference/entries/P-0xx.md` (your page's blueprint entry; it is the spec).
5. `reference/REVIEWS-chatsworthpt-28.csv` (the only source for review text) and `src/data/reviews.json`
   (the same reviews with their keys; use it to find your reviewer's `key`).
6. `src/data/pages.json` (every page's id, name and path; use it to turn the entry's links into paths).
7. `src/lib/types.ts` if you need the exact field names.
Do not read other pages' content files and do not reuse their sentences.

## What you write (nothing else)
- `src/content/<slug>.ts` (or `src/content/conditions/<slug>.ts`, `src/content/blog/<slug>.ts`) and
  `src/pages/<path>.astro`, exactly the shape COMPONENTS.md shows. The slug is the last part of the page's path.
- No other file. No git commands. No npm install. Do not run `npm run build` (the build lead does).
- When you are done, run `node scripts/check-content.mjs <your content file>` and fix every `error:` line.
  Read every `warn:` line and either fix it or explain it in your report.
- If the page needs a change to a shared component, do not make it: describe it in your report.

## Hard rules (from Vlad's brief, word for word where quoted)
- "No em dashes or en dashes anywhere: not in copy, not in code comments, not in reports. No AI phrasing
  ("Whether you want X or Y", "in today's digital landscape", "look no further", "unlock", "elevate",
  "game-changer", "seamless", "we've got you covered"). Plain terms, short sentences."
  Use commas, periods or colons instead of dashes. Straight quotes only.
- "Facts come only from the Project docs. A new fact (a price, a minute count, a route, who lives where, a
  Russian sentence) is a [CONFIRM] item: keep the marker visible in the content exactly as the blueprint
  writes it, never fill it with a guess." Your facts are FACTS.md plus your entry. Nothing else.
- "Visit length is "about 60 minutes, depending on what you need", never a flat "60 minutes"."
  "About an hour" is fine in a hero line where the entry says it.
- "Dry needling is off; shockwave, pelvic floor and hand therapy get no page and no "offered" or "not
  offered" claim until Dr. Ed answers." Do not mention any of the four on your page (the FAQs page is the
  one exception and its own prompt says how).
- "Review text is verbatim from claude/REVIEWS-chatsworthpt-28.csv with the first name and month shown. A
  quote may be cut to whole sentences from the CSV text; it is never extended, reworded or completed."
  You never type review text: the review section takes the `key` and the template prints the CSV text.
  Use the one review your entry names. Reviews left off the site: Vlada, Keith, Jonathan.
- "Nothing medical beyond what the entry and the approved pages already say." Do not add conditions,
  techniques, timelines, outcomes, statistics or promises the entry does not give you. No "cure", no
  guarantees, no number of visits quoted up front.
- No dollar figure anywhere. Prices: "Call (818) 749-3205 for the current rate" with the entry's [CONFIRM]
  marker beside it. Personal training: "prices by phone" with the marker.
- Russian: the English line that Dr. Ed treats in English and Russian is fine; no sentence in Russian.
- No Spanish. No Yelp, no Healthgrades.
- Never delete anything.
- Stop condition: "if a step fails, or you would have to guess at a fact or a sentence, stop that step,
  record the question in [your report], and continue with the next step that does not depend on it. Do
  not improvise." A missing fact becomes a [CONFIRM ...] marker or a question in your report, never a guess.

## Copy rules (brief section 4)
"Write to the blueprint entry: its H1 exactly, its sections in order, its word target, its FAQs, its review,
its links with the anchor text given. The entry's "sections in order" field is the outline; the "what Dr.
Ed does about it" lines are the facts to use."
- `title`, `description` and `hero.h1` are copied exactly from the entry (the checker compares them).
- Sections in the entry's order, one section per numbered item (the hero is `hero`; the booking block and
  the related links are `booking` and `related`, not sections).
- Word count: the entry's target applies to the words you write, which is the checker's count (the template adds
  the site-wide lines, the booking band and the footer on top). Do not pad: if every section the entry asks for is
  fully covered below the target, stop and say so in your report.
- FAQs: the entry's questions in the patient's words, answered in two to four plain sentences from the
  entry's answer. Where an entry answer is shorter than or differs from the site-wide lines (referral,
  insurance, visit length), answer with the site-wide facts and say so in your report. Every question ends
  with a question mark.
- Links: every "Internal links out" item appears once as a link in the copy or in `related`, with the
  anchor text the entry gives (sentence case inside a sentence is fine). Internal paths end with a slash.
  Links to pages not built yet are fine; they are in the plan.
- The insurance section keeps `siteLines` on (the referral, insurance and visit-length lines print by
  themselves). Add page-specific lines as blocks only when the entry asks for them. Never restate the
  three site-wide lines in your own words elsewhere on the page.
- The booking band already prints "Prefer to talk? Call (818) 749-3205. Dr. Ed answers his own phone.",
  the address, the hours and "No payment is required to book." Do not repeat them.
- Booking lead: one or two sentences ending with "He will confirm your time by phone or email, usually the
  same day."
- Voice: a sharp local clinician talking to a patient. Second person, short sentences, specific over
  superlative. Say what Dr. Ed does, in what order, and why. No hype words (amazing, cutting-edge,
  state-of-the-art, holistic, journey, empower, transform, comprehensive, tailored solutions, world-class).
  No rhetorical questions in body copy. No exclamation marks.
- Images: only the files listed in COMPONENTS.md, with honest alt text. A shot that does not exist yet is a
  `placeholder` with the entry's "PHOTO:" description, ending ", to be shot".

## Your report (short, plain text, no dashes)
1. Files written (paths).
2. Checker result: errors 0, the word count, and each warning with what you did about it.
3. Sections in order: one line each, entry item number to section kind and H2.
4. Review used (key) and any sentence cut.
5. [CONFIRM] or [SOURCE NEEDED] markers placed, each with where it sits.
6. Questions for the build lead (anything you would have had to guess), and any shared-component request.
7. For any outside source you cite: the URL, the date you fetched it, and the exact sentence on the page
   that supports the claim.
