# Chatsworth PT design rulings (20 Oct 2026, 8:20 to 11:05pm)

These override the clinic-homepage standard in the boost-web-design skill (section 4b) wherever they differ. The build reads this file. The master is claude/HOMEPAGE-DRAFT4-chatsworthpt.html (the file name says draft 4; it holds draft 9, published as version 13 of the artifact; draft 8.2 was version 12). On Vlad's PC: design-reference\homepage-draft-1\homepage-draft-9.html with img\, img\source\ and video\ beside it.

## Brand source
- There is no brand guide document in Drive (searched the client folder and all of Drive on 20 Oct 2026; both "Brand" folders under Boost Brand Marketing are empty). The brand source is the logo file, "Chatsworth Physical Therapy - LOGO - MAIN.svg" (Drive id 1BzGE0RCxmlVzzcBYq7e2hg2-s-QUIV_K), which holds exactly two colors: navy #004F79 and blue #0096D0.
- The live site (read 20 Oct 2026) renders text #001620, ground #FDFDFD, accent rgb(21,150,210), light tint #E2F6FF, font Inter.

## Palette, locked (Vlad, 8:22pm)
Every color on the page is from the logo or the live site; three greys are derived from the navy.
- white #FFFFFF: page ground, cards
- navy #004F79: dark bands (trust strip, About, Book), primary buttons, headings on white, the map pin
- navy-deep #003C5C: hover and pressed only
- blue #0096D0: accents only (icons, step numbers, list chevrons, focus ring, FAQ chevrons). Not a button color: white on #0096D0 is 3.35:1, under AA.
- sky #E2F6FF: soft band (reviews), hover fill on list rows, the map's mid-tone
- text #001620, muted #4B5E6B, line #D5E3EC; star #F2B01E (Google stars only)
- Retired: ink #0B2A3F, paper #F5F8FA, sky #E4F2FA.

## Theme
- Light only, no dark-mode block (Vlad, 8:17pm). The real site has no dark mode.

## Marks and decoration
- The logo's raised-arm arc is never used as decoration (Vlad, 8:22pm). The logo appears only as the logo.
- The "Where does it hurt?" body map (draft 5) is withdrawn: Vlad, 9:11pm, "I don't know if I like that section". The code is in the artifact's version 7 if it is ever wanted again. Do not bring it back without his ask.

## Layout, frozen (Vlad, 10:30pm: "the layout is good")
Section order and content as of draft 8.2: sticky header (logo, nav, phone with the open-today line, Book button); photo hero; trust strip; What we treat (rows plus mosaic); About Dr. Ed band (navy) with portrait, two documents, credentials, Susan's quote, social icons; three first-visit steps with the mid-page CTA; reviews band (sky) with Matt's video, Matthew's quote, three cards; Visit (map, facts table, service area, eight FAQs); Book band (navy) with the call line, photo and form; footer; mobile sticky Call and Book bar. Draft 9 kept all of it (page height identical at 390 and 1440); it only changed how the page moves (see "Motion in draft 9" below).

## The map (draft 8, Vlad, 10:13pm: "don't forget the map")
- A real map, not a drawing: OpenStreetMap tiles at zoom 16 around 34.2363732, -118.5663664, stitched (5 by 4 tiles), cropped 16:10 with the pin a little below centre, tinted to the brand (grayscale mapped navy to sky to white, 18 percent of the original colour kept so parks and roads still read), a navy teardrop pin at the clinic, and the required credit "© OpenStreetMap contributors" in the corner. Files: img/map-chatsworth-physical-therapy-19851-nordhoff.webp (1200x750), a 4:3 phone crop, and the untinted source in img/source/. Licence: OpenStreetMap data is ODbL; the credit line must stay on the image or next to it on the live site.
- The map is a link to the Google listing (Maps URL with place id ChIJjzo2DhibwoAR1KeHYSgrQkE) with the address card floating on it (static below it on phones). "Get directions" and the call button sit under it.
- How it was fetched (for the build or a refresh): the sandbox and the desktop VM cannot reach any tile server (proxy 403). Chrome extension on openstreetmap.org, a script stitched the tiles on a canvas and saved a PNG to Vlad's Downloads (the extension blocks returning image data directly), then the file was staged from Downloads. The build can instead embed Google Maps (free embed, no key) or keep this static image; the static image is lighter and on brand.
- The pin's tip sits at 50% across and 56% down on both map crops (measured 20 Oct); draft 9's pulse rings are placed there.

## Social links (draft 8.2, Vlad, 10:22pm: "the icons, see current site, that's how it should be")
- Icons, not text chips, matching the live site: Facebook, Instagram, YouTube, X as round 42px buttons (1.5px line border, navy glyph, blue border and sky fill on hover; on the navy About band they are translucent white). Two placements: under Dr. Ed's credentials ("Follow Dr. Ed") and in the footer ("Follow"). The footer's duplicate text links were removed.
- Icons come from Font Awesome 6.5.2 brand set, loaded as two deferred scripts from cdnjs (fontawesome.min.js and brands.min.js); classes fa-facebook-f, fa-instagram, fa-youtube, fa-x-twitter. Verified in Chrome that the cdnjs file carries all four. In the build, inline the four SVGs instead of loading the library (self-hosted, no third-party script).
- URLs: facebook.com/chatsworthdpt, instagram.com/chatsworthdpt, youtube.com/@ChatsworthDPT, x.com/ChatsworthDPT. All open in a new tab with rel noopener and an aria-label.

## Type
- Headings Bricolage Grotesque 700. Body Inter 400/500/600 at 18px (the live site's face). Self-host both in the build.

## Buttons
- Primary on light: navy fill, white text, lifts 1px with a soft shadow on hover. Primary on navy bands and the photo hero: white fill, navy text. Call buttons: ghost on dark, navy outline on light. Pill, 52px, first-person labels. Draft 9 added a press state (scale .98, 100ms) on every button.

## "What we treat" (drafts 6 to 8)
- A complete list of the nine service pages as rows (name in display type, one line under it, blue chevron, sky hover), beside a mosaic of the four real session photos (core exercise lead, then ankle, knee taping, red light three across), each photo linking to its service, one caption. The mosaic is sticky on desktop. No equipment photos (Dr. Ed, 9:00pm).
- Under the list: "Not sure which one you need? Call (818) 749-3205 and Dr. Ed will tell you in two minutes." Under the whole block: "Conditions we treat most:" with the long-tail terms (sciatica, frozen shoulder, ACL, plantar fasciitis, vertigo and BPPV, Parkinson's, stroke, gymnasts' back pain).
- "Pre and post-op physical therapy" is the service name everywhere (Vlad, 9:46pm): list, footer, booking form ("Before or after surgery").
- In the build each row links to its inner page; the anchors in the draft are placeholders.

## The patient video (draft 6)
- The clip is the client's own ad "MATT REDO ADD.mp4" (Matt, frozen shoulder; the same patient as Matthew Smith's August 2025 Google review). Trimmed to 42.6 seconds, 720x1280, H.264 at about 1.5 Mbps, 4.4 MB: video/matt-frozen-shoulder-story-chatsworth-pt.mp4. Captions are burned in; the end card carries the correct 19851 Nordhoff address.
- It leads the reviews band in a 9:16 rounded frame with a poster (the handshake at 39.2 seconds, img/matt-and-dr-ed-chatsworth-pt.webp) and a custom play button; sound on when tapped, native controls after that, poster returns when it ends. Beside it, Matthew's Google review verbatim as the pull quote.
- "dr. ed 02.mp4" is NOT usable on the site: stock footage, emoji captions and the old 19860 Nordhoff address in its end card. Its first 10 seconds are caption-free b-roll if a muted loop is ever wanted.

## Dr. Ed's rulings (relayed by Vlad, 20 Oct 2026, 9:00pm)
- Portrait: him at his desk in the clinic (img/dr-ed-shut-in-clinic-chatsworth.webp). Alternate on file: "dr-ed-pt-clinic-chatsworth-portrait-pt.jpg" (navy polo, white background, 3394px).
- Documents: recut from "rehab-therapy-portrait-chatsworth-ca.jpg" at 1000px wide each, white mat, labels.
- Referral FAQ: no referral needed; California law allows 12 visits or 45 days, whichever comes first, then a referral; Medicare from the start. (Matches B&P Code 2620.1.) Applies to every inner page in copy deck v3.
- Insurance FAQ: Medicare, personal injury liens, superbill for PPO. Applies to v3.
- Visit length (Vlad, 9:46pm): "about 60 minutes, depending on what you need"; never a flat "60 minutes". Hero says "About an hour". Applies to v3 on every page.
- Russian line: keep.

## SEO carried in the page (draft 7)
- Head block at the top of the master (title in a comment, description, canonical, robots, Open Graph, geo tags); the build moves it into <head>. Title: "Physical Therapy in Chatsworth, CA | Dr. Ed Shut, DPT | Chatsworth Physical Therapy".
- One JSON-LD graph: Physiotherapy (NAP, geo, hasMap, hours, medicalSpecialty, knowsLanguage en and ru, areaServed, sameAs, four Reviews with first names), Person for Dr. Ed (DPT, CSUN, licence PT 301809 recognised by the Physical Therapy Board of California), VideoObject for Matt's clip, FAQPage with the eight homepage questions, WebSite. No aggregateRating by rule.
- H2s carry the search phrases naturally; image alts name the place; lazy images decode async; skip link at the top.

## Motion in draft 8.2 (the base draft 9 built on)
- Hero photo settles from 1.07 to 1.0 over 16 seconds on load. Header gains a soft shadow after scrolling (script toggles .scrolled). Primary and light buttons lift 1px with a shadow on hover. Service rows tint sky, indent .75rem and slide the chevron on hover. Mosaic photos scale 1.03 on hover; the map scales 1.02; the play button scales 1.06; FAQ answers fade in (.25s); social icons flip border and fill. All off under prefers-reduced-motion.

## Motion rules (Vlad, 10:30pm: "level up the design, very high quality hovers or micro animations")
- One orchestrated moment on load, in the hero only. Everything else answers the visitor (hover, focus, tap, open, submit) or marks one real sequence coming into view (the steps connector drawing, the trust icons' strokes). No per-section fade-ups, parallax, scroll-jacking, cursor effects, count-ups or progress bars.
- Durations 150 to 400ms for responses, up to 900ms for the one-off reveals; ease-out curves; transforms and opacity only (no layout animation). Every animation off under prefers-reduced-motion. Nothing delays the phone number, the CTAs or any content.
- No new libraries. CSS first; small vanilla JS only where CSS cannot (FAQ height, nav underline, active section). The Font Awesome scripts for the social icons are the only third-party script besides Google Fonts.
- Content, copy, layout, palette and type do not change in that pass.

## Motion in draft 9 (published 20 Oct, 11:00pm as version 13; awaiting Vlad's review)
Everything here is CSS plus about 60 lines of plain script at the bottom of the page; no library was added. Two timing curves are defined once (an ease-out for every response, a small spring for the step discs only). A `js` class on the html element gates the states that start hidden, so a visitor without script sees everything at once.
- Hero, the one load moment: script measures where the headline naturally breaks (words and the hyphen breaks inside "one-on-one"), wraps each line in a mask for the moment, and each line rises out of its mask 90ms after the previous one; the sentence, the two buttons and the review pill follow at 420, 520 and 640ms. When the last line lands the plain headline text is put back, so the responsive wrapping is untouched. The 16-second photo settle stays.
- Header: after 16px of scroll it compresses from 76 to 64px and the logo from 46 to 40px, over 250ms; its space in the page stays 76 (min-height down 12 and margin-bottom up 12 on the same curve), so the content below never jumps. One blue underline slides between nav items on hover or keyboard focus and rests on the item for the section in view (aria-current, judged by which section's top has passed 38% of the viewport; "Questions" takes over only once the FAQ list is well up the screen; nothing is current in the Book band). The phone number tints blue on hover. Nothing about the phone or the Book button is delayed.
- Trust strip: each icon draws its stroke once when the strip comes into view (pathLength 1, dashoffset 1 to 0, 400ms), the three starting 140ms apart.
- Services: hovering or focusing a row cross-fades the lead mosaic photo to that service's photo (sports, post-op and pain management; back pain is the lead itself) over 400ms and gives the matching small tile the same 1.03 lift; the row tints sky, indents and slides the chevron 3px. Only on devices with a real hover; on phones the row tints on tap.
- About: the two framed documents tilt 2 degrees (first anti-clockwise, second clockwise), lift 3px and deepen their shadow on hover, 350ms. The portrait does nothing.
- Steps: once, when the band comes into view, the dashed connector draws from step 1 to step 3 over 900ms (a white cover slides off it, so the dashes keep their shape) and the three discs pop in at 0, 300 and 600ms with the small spring. On phones there is no connector; the discs still pop.
- Reviews: the video frame lifts 2px with a deeper shadow on hover; the play button breathes once (to 1.1 and back) when the band comes into view and scales 1.08 on hover; on play the overlay fades out over 400ms instead of vanishing, and returns when the clip ends. The three cards lift 3px with a soft navy shadow on hover. "Read all 28 reviews" grows its underline from the left.
- Visit: two blue rings pulse out from the pin once when the map comes into view (the pin is part of the map image, so it cannot itself bounce; the rings mark it instead), 320ms apart. The address card lifts 2px when the map is hovered (desktop only). The phone and email links grow their underline from the left.
- FAQ: open and close animate the height (Web Animations API, 320ms open, 260ms close); the open question's title turns navy; a closed question's chevron nudges down on hover and the chevron turns over 300ms.
- Form: a missing name or phone shakes the field once (4px, 300ms), outlines it navy and writes one line under it ("Please add your name." / "Please add a phone number so we can confirm your time."), which clears as soon as the visitor types. After submit the thank-you draws a blue check (circle 550ms, tick 400ms) and the words rise in after it.
- Buttons: 1px hover lift kept; press state scale .98 over 100ms. Social icons keep the 1px lift and the glyph grows to 1.12 on hover.
- Reduced motion: one rule turns every animation and transition off and sets each gated element to its finished state; the hero shows at once as plain text; the FAQ opens without animating; the map rings and the steps cover are not drawn. Verified in Playwright: zero running animations while scrolling the page with reduced motion on, at 390 and 1440.
- Checks that passed before publishing (Playwright, Chromium, 390 and 1440): 0 horizontal overflow, 0 broken images, 0 script errors, 0 em dashes, 1 h1, JSON-LD parses, page height identical to draft 8.2 at both widths, headline line breaks identical before, during and after the hero moment.

## Small polish (drafts 6 to 8)
- Header phone line says "Open today until 8pm" (or "Closed today, opens Monday 10am" on Sundays) by script. The three first-visit steps are joined by a dashed line on desktop. Anchored sections carry scroll-margin for the sticky header.
- Booking form fields: name, phone, email, what you need help with, when works best (any time, mornings, afternoons, evenings after 5pm, Saturdays), optional message. "No payment is required to book."

## Still to do on the design
- Vlad's read of draft 9; adjust by taste from his notes.
- Photo shoot list for Gabby (rung 3): hero with hands on a patient and room on the left for the headline; a sharp portrait; balance, kids, vertigo, shoulder and knee sessions; front door, parking lot, reception; a second patient story on camera without burned-in captions.
- Build items: self-hosted fonts, inline social SVGs, live Google reviews, online booking if he has a scheduler, page speed. Map: static image as above, or the free Google embed. Carry the draft 9 motion over as written (it is plain CSS and script, nothing to port).

## Files
- Review page: artifact "Chatsworth PT Homepage", https://claude.ai/artifact/UwZfWaLaasMZ3XckTdNUAt, shared as anyone with the link since 20 Oct 2026, 9:05pm; version 13 is draft 9 (version 12 is draft 8.2). Master in this Project: claude/HOMEPAGE-DRAFT4-chatsworthpt.html. On Vlad's PC: design-reference\homepage-draft-1\ (homepage-draft-6/7/8/9.html, img\, img\source\, video\). Connected folder this session: C:\Users\Vlad\Projects\Chatsworth PT (a new session must ask for the folder again; one prompt).
