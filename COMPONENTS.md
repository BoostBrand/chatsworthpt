# Components and content files (read this before writing a page)

Every inner page is two small files. Copy, links and SEO fields live in a **content file** (data only);
a **page file** passes it to the template for its page type. Nobody writes HTML for a normal page.

```
src/content/<slug>.ts             one PageContent object (or PostContent for a blog post)
src/content/conditions/<slug>.ts  conditions pages
src/content/blog/<slug>.ts        blog posts
src/pages/<slug>.astro            the page file (5 lines, below)
```

Page file, exactly this shape (change the template and the import path only):

```astro
---
import ServicePage from '../components/templates/ServicePage.astro';
import content from '../content/back-pain-therapy';
---
<ServicePage content={content} />
```

Nested pages import with one more `../` (`src/pages/conditions/sciatica.astro` imports
`'../../components/templates/ConditionPage.astro'` and `'../../content/conditions/sciatica'`).

## Templates (one per page type)

| Template | Use for | JSON-LD it builds |
|---|---|---|
| `ServicePage` | the 12 service pages | Service (with the page's Review), FAQPage, BreadcrumbList |
| `InfoPage` | About, the hubs, insurance, first visit, reviews, FAQs | Review (itemReviewed the clinic, or Dr. Ed on About), FAQPage if any, BreadcrumbList; Person on About; Physiotherapy on contact |
| `ConditionPage` | the 12 pages under /conditions/ | MedicalCondition, Review if shown, FAQPage, BreadcrumbList |
| `CityPage` | Northridge, Porter Ranch | Service with areaServed the city, FAQPage, BreadcrumbList; noindex while CITY_PAGES_LIVE is false |
| `BlogPostPage` | the 12 posts (`post` prop, PostContent) | BlogPosting, FAQPage if the post has FAQs, BreadcrumbList |
| `LegalPage` | privacy, terms | BreadcrumbList only |

Every template already renders: the header, the breadcrumbs, the hero, your sections in order, the booking
band (navy) with the call line, "Dr. Ed answers his own phone.", the address once and "No payment is required
to book.", the related links, the footer and the phone sticky bar. Do not repeat any of those in a section.

## Content model (src/lib/types.ts is the source of truth)

```ts
import type { PageContent } from '../lib/types';   // '../../lib/types' from a subfolder
const page: PageContent = {
  id: 'P-007', path: '/orthopedic-rehabilitation/',
  title: '...exactly the entry's Meta title...',      // 60 or fewer characters
  description: '...exactly the entry's Meta description...', // 155 or fewer
  hero: { h1: '...exactly the entry's H1...', lede: 'promise line', image: {...} | placeholder: 'PHOTO: ...', book: 'Book my evaluation' },
  sections: [ ...in the entry's "Sections in order"... ],
  booking: { h2: 'Book your orthopedic evaluation', lead: '... He will confirm your time by phone or email, usually the same day.', service: 'Orthopedic injury' },
  related: [{ text: 'All services', href: '/our-services/' }, ...],
  schema: { serviceType: 'Orthopedic rehabilitation' },
  notes: ['anything Vlad or Dr. Ed must decide; never rendered'],
};
export default page;
```

A content file holds data only: no runtime imports, no functions, `import type` only.

### Inline text (every string you write)
- `**bold**`, `[anchor text](/path/)` (internal paths end with a slash; `/contact/#book` is fine),
  `[CONFIRM ...]`, `[verify: ...]`, `[SOURCE NEEDED: what it must show]`. Nothing else, no HTML.
- Markers render highlighted in the preview. Keep a [CONFIRM] exactly as the blueprint words it.
- The phone number `(818) 749-3205` becomes a tap-to-call link by itself; just write it.

### Sections (kind decides the component)

| kind | Component | Fields | Rule |
|---|---|---|---|
| `who` | WhoThisIsFor | `h2`, `intro?`, `items: {lead, text}[]`, `outro?` | the situations that bring people in; `lead` is a short bold sentence ending in a period |
| `prose` | Treatment | `h2`, `intro?`, `blocks`, `tone?: 'white'\|'sky'`, `layout?: 'stack'\|'split'` | any written section: treatment, a deeper topic, how a tool works |
| `conditions` | ConditionsList | `h2`, `intro?`, `items: {text, href?, note?}[]`, `outro?`, `columns?` | conditions linked down to their pages; an item whose text holds its own link gets no `href` |
| `review` | ReviewBlock | `review: {key, context?, sentences?}`, `more?` | ONE per page. `key` from src/data/reviews.json; `sentences: [0, 1]` cuts to whole sentences; text always comes from the CSV |
| `insurance` | InsuranceNote | `h2?`, `blocks?`, `siteLines?` (default true), `more?` (default true) | prints the three site-wide lines (referral, insurance, visit length) and the insurance page link; add page-specific lines as `blocks` |
| `faq` | FAQ | `h2`, `items: {q, a}[]` | feeds FAQPage JSON-LD automatically; `a` may be a string or an array of paragraphs |
| `cards` | Cards | `h2`, `intro?`, `cards` or `groups: {title, cards}[]`, `columns?` | hubs only: `{title, href, text, meta?, image? \| placeholder?}` |
| `steps` | Steps | `h2`, `intro?`, `steps: {title, text}[]` | a real sequence only (the first visit) |
| `custom` | page file markup | `id`, `h2?` | rendered from a named slot on the page file (`<Fragment slot="map">`); used by contact and reviews only |

Blocks inside `prose` and `insurance`: `{type:'p', text}`, `{type:'ul', items}`, `{type:'ol', items}`,
`{type:'h3', text}`, `{type:'callout', text}`, `{type:'leads', items:[{lead,text}]}`,
`{type:'image', image, caption?}`, `{type:'placeholder', label:'PHOTO: ...'}`,
`{type:'links', label?, items:[{text, href}]}`.

### Hero
`{ h1, lede, image? | placeholder?, book?: string | false, call?: boolean, stars?: boolean, callFirst?: boolean }`.
`book` is the first-person button label (default "Book my evaluation") and goes to the page's own `#book`.
`stars` prints "5.0 on Google, 28 reviews" once. `callFirst` leads with the call button (cost and FAQ pages).
Images: only files in `public/img` (list below), with `width`, `height` and alt text a blind patient would want.
No real photo: `placeholder: 'PHOTO: <the entry's photo description>, to be shot'`. Never stock, never generated.

### Booking
`{ h2, lead, service, messagePrompt?, button? }`. `service` preselects the form option; use one of:
Back pain, Sports injury, Before or after surgery, Orthopedic injury, Balance or fall prevention, Pain management,
Pediatric physical therapy, Neurological rehabilitation, Not sure yet (a different label is added to that page's
list only). Conditions pages preselect their parent service. The lead line ends with
"He will confirm your time by phone or email, usually the same day."

### Related links
Exact page names as anchors: All services, Pain management, Pre and post-op physical therapy, and so on.

## Images in public/img
`hero-dr-ed-treating-patient-chatsworth.webp` 1800x1125 (and `-mobile` 900x1125), `back-pain-therapy-chatsworth.webp`
900x900 (core stability exercise, hands on the lower back), `sports-injury-rehab-chatsworth.webp` 900x900 (ankle
treatment), `post-op-physical-therapy-chatsworth.webp` 900x900 (knee taping), `red-light-therapy-chatsworth.webp`
900x900 (red light session), `dr-ed-shut-in-clinic-chatsworth.webp` 1000x1000 (Dr. Ed at his desk),
`dr-ed-explaining-anatomy-chatsworth.webp` 1200x960 (anatomy chart with a patient), `dpt-diploma-mount-saint-marys.webp`
1000x754, `california-pt-license-301809.webp` 1000x734, `matt-and-dr-ed-chatsworth-pt.webp` 720x1280 (video poster),
`map-chatsworth-physical-therapy-19851-nordhoff.webp` 1200x750, `dr-ed-shut-dpt-headshot-chatsworth.webp` 240x240.

## Shared parts (only the build lead edits these)
`src/layouts/BaseLayout.astro`, `src/components/**`, `src/lib/**`, `src/data/**`, `src/styles/**`, `src/scripts/**`.
If a page needs a change to a shared component, write the request in your report; the build lead makes it,
additive, with the default behaviour unchanged.

## Checks
`node scripts/check-content.mjs src/content/<file>.ts` validates a content file (fields against the blueprint
entry, lengths, links to real pages, review keys and reuse, markers, dashes, banned phrases, numbers that are
not on the facts list). The build lead runs `npm run build`, `python3 -I scripts/gates.py` and the renders.
