# chatsworthpt.com

Astro 5 and Tailwind 3 static site for Chatsworth Physical Therapy, built by Boost Brand Marketing.
Cloudflare Pages: build command `npm run build`, output directory `dist`, Node 22 from `.node-version`.

## Where things live
- `src/data/site.ts`: every business fact, the tracking IDs and the build switches (FORMS_ENABLED,
  TRACKING_ENABLED, CITY_PAGES_LIVE, LEGAL_TEXT_READY, PREVIEW). Nothing is pasted into pages.
- `src/content/`: one content file per page (data only). `src/pages/`: one thin page file per URL.
- `src/components/`: the header, footer, sticky bar and the inner-page kit. See `COMPONENTS.md`.
- `public/_redirects` and `functions/[[path]].js` (scoped by `public/_routes.json`): the 301 and 410 map.
- `reference/`: read-only copies of the Project documents the build is made from.
- `scripts/`: data generation, the homepage port, the gates and the renders.

## Checks (all count from `dist` after `npm run build`)
- `npm run gates`: the brief's section 7 gate table, with the expected value beside each count.
- `npm run check`: validates the content files (fields against the blueprint entry, lengths, links, reviews, markers).
- `npm run entries`: each built page against its blueprint entry (links out, review shown, sections, words).
- `npm run render -- --shots / /contact/`: 390 and 1440 renders in headless Chromium, screenshots in dist-preview/.
- `npm run a11y`: contrast, alt text, link and button names, form labels, skip link, heading order.
- `npm run perf -- / /back-pain-therapy/`: page weight and throttled mobile LCP and CLS (`--fast` for fast 4G).
- `npm run export > COPY-EXPORT.md`: every page's copy, generated from the content files, for review.

## Build notes
- `BUILD-LOG.md`: what was built when, the counts and the open questions (also in the Claude Project).
- `reference/entries/`: one blueprint entry per page; `reference/subagent/`: the rules and decision sheets the page
  builders worked from.

Nothing here deploys anything. Publishing, DNS, Search Console and the Google listing stay with Vlad.
