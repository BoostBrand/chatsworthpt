// Generates src/data/pages.json (the page registry) and src/data/reviews.json (the 28 Google reviews)
// from the reference CSVs. Run: node scripts/build-data.mjs
// Review text is copied byte for byte from REVIEWS-chatsworthpt-28.csv; nothing here edits a quote.
import { writeFileSync } from 'node:fs';
import { readCsvObjects } from './lib/csv.mjs';

const REF = new URL('../reference/', import.meta.url);
const OUT = new URL('../src/data/', import.meta.url);

// ---------------------------------------------------------------- pages
// Names come from the site tree in blueprint section 3. `crumb` is the visible breadcrumb label.
const META = {
  'P-001': { name: 'Home', type: 'home', file: 'home' },
  'P-002': { name: 'About Dr. Edward', type: 'about', file: 'about-us' },
  'P-003': { name: 'Services', full: 'Services hub', type: 'services-hub', file: 'our-services' },
  'P-004': { name: 'Back pain therapy', type: 'service', file: 'back-pain-therapy' },
  'P-005': { name: 'Sports injury recovery', type: 'service', file: 'sports-injury-recovery' },
  'P-006': { name: 'Pre and post-op physical therapy', type: 'service', file: 'pre-post-surgical-rehabilitation' },
  'P-007': { name: 'Orthopedic rehabilitation', type: 'service', file: 'orthopedic-rehabilitation' },
  'P-008': { name: 'Pain management', type: 'service', file: 'pain-management' },
  'P-009': { name: 'Balance and fall prevention', type: 'service', file: 'balance-and-fall-prevention' },
  'P-010': { name: 'Pediatric physical therapy', type: 'service', file: 'pediatric-physical-therapy' },
  'P-011': { name: 'Neurological rehabilitation', type: 'service', file: 'neurological-rehabilitation' },
  'P-012': { name: 'Red light therapy', type: 'service', file: 'red-light-therapy' },
  'P-013': { name: 'Therapeutic ultrasound', type: 'service', file: 'therapeutic-ultrasound' },
  'P-014': { name: 'Electrical stimulation', full: 'Electrical stimulation (TENS and NMES)', type: 'service', file: 'electrical-stimulation-tens-nmes' },
  'P-015': { name: 'Personal training and weight loss', type: 'service', file: 'personal-training-weight-loss' },
  'P-016': { name: 'Insurance and cost', type: 'info', file: 'insurance-and-cost' },
  'P-017': { name: 'Your first visit', type: 'info', file: 'first-visit' },
  'P-018': { name: 'Reviews', type: 'info', file: 'reviews' },
  'P-019': { name: 'FAQs', type: 'info', file: 'faqs' },
  'P-020': { name: 'Contact', full: 'Contact and booking', type: 'contact', file: 'contact' },
  'P-021': { name: 'Conditions', full: 'Conditions we treat', type: 'conditions-hub', file: 'conditions' },
  'P-022': { name: 'Sciatica', type: 'condition', file: 'conditions/sciatica' },
  'P-023': { name: 'Herniated disc', type: 'condition', file: 'conditions/herniated-disc' },
  'P-024': { name: 'Neck pain and pinched nerve', type: 'condition', file: 'conditions/neck-pain' },
  'P-025': { name: 'Shoulder pain and rotator cuff', type: 'condition', file: 'conditions/shoulder-pain-rotator-cuff' },
  'P-026': { name: 'Frozen shoulder', type: 'condition', file: 'conditions/frozen-shoulder' },
  'P-027': { name: 'Knee pain', type: 'condition', file: 'conditions/knee-pain' },
  'P-028': { name: 'ACL recovery', type: 'condition', file: 'conditions/acl-recovery' },
  'P-029': { name: 'Knee replacement recovery', type: 'condition', file: 'conditions/knee-replacement-recovery' },
  'P-030': { name: 'Hip replacement recovery', type: 'condition', file: 'conditions/hip-replacement-recovery' },
  'P-031': { name: 'Ankle sprain', type: 'condition', file: 'conditions/ankle-sprain' },
  'P-032': { name: 'Plantar fasciitis', type: 'condition', file: 'conditions/plantar-fasciitis' },
  'P-033': { name: 'Vertigo and BPPV', type: 'condition', file: 'conditions/vertigo-bppv' },
  'P-035': { name: 'Physical therapy for Northridge', type: 'city', file: 'physical-therapy-northridge', city: 'Northridge' },
  'P-036': { name: 'Physical therapy for Porter Ranch', type: 'city', file: 'physical-therapy-porter-ranch', city: 'Porter Ranch' },
  'P-037': { name: 'Blog', type: 'blog-hub', file: 'blog' },
  'P-038': { name: 'Referral for physical therapy in California', type: 'post', file: 'blog/referral-for-physical-therapy-in-california' },
  'P-039': { name: 'Does Medicare cover physical therapy?', type: 'post', file: 'blog/does-medicare-cover-physical-therapy' },
  'P-040': { name: 'Your first physical therapy visit', type: 'post', file: 'blog/what-to-expect-first-physical-therapy-visit' },
  'P-041': { name: 'Stroke recovery at an outpatient clinic', type: 'post', file: 'blog/stroke-recovery-outpatient-physical-therapy' },
  'P-042': { name: 'Fall-prevention checklist', type: 'post', file: 'blog/fall-prevention-checklist-parents-house' },
  'P-043': { name: 'Young gymnast back pain', type: 'post', file: 'blog/young-gymnast-back-pain' },
  'P-044': { name: 'Knee replacement: the first six weeks', type: 'post', file: 'blog/knee-replacement-recovery-first-six-weeks' },
  'P-045': { name: 'Vertigo and BPPV: why the room spins', type: 'post', file: 'blog/vertigo-bppv-why-the-room-spins' },
  'P-046': { name: 'Return to sport after ACL surgery', type: 'post', file: 'blog/return-to-sport-after-acl-surgery' },
  'P-047': { name: 'Red light therapy for back and knee pain', type: 'post', file: 'blog/red-light-therapy-back-knee-pain' },
  'P-048': { name: 'Sciatica: disc or hip?', type: 'post', file: 'blog/sciatica-disc-or-hip' },
  'P-049': { name: 'Cash-pay physical therapy cost', type: 'post', file: 'blog/cash-pay-physical-therapy-chatsworth-cost' },
  'P-050': { name: 'Privacy policy', type: 'legal', file: 'privacy-policy' },
  'P-051': { name: 'Terms of service', type: 'legal', file: 'terms-of-service' },
  'P-052': { name: 'Page not found', type: '404', file: 'not-found', path: '/404' },
};

const arch = readCsvObjects(new URL('Chatsworth_Physical_Therapy_Recommended_SEO_Architecture.csv', REF));
const pages = [];
for (const row of arch) {
  if (row.Action === 'Redirect') continue;
  const meta = META[row.Page_ID];
  if (!meta) throw new Error('No name for ' + row.Page_ID);
  const path = meta.path ?? row.URL_Proposed;
  pages.push({
    id: row.Page_ID,
    path,
    name: meta.name,
    full: meta.full ?? meta.name,
    type: meta.type,
    file: meta.file,
    ...(meta.city ? { city: meta.city } : {}),
    parent: row.Parent || null,
    primaryKeyword: row.Primary_Keyword,
    linksFrom: row.Internal_Links_From ? row.Internal_Links_From.split(';').map((s) => s.trim()).filter(Boolean) : [],
    priority: row.Priority,
  });
}
// Added after the blueprint (23 Oct 2026): termageddon.js fills the one element with id "policy" on a page, so
// the cookie policy and the disclaimer keep their own pages, as on the live site, instead of the blueprint's
// 301s into the privacy and terms pages.
pages.push(
  { id: 'P-053', path: '/cookie-policy/', name: 'Cookie policy', full: 'Cookie policy', type: 'legal', file: 'cookie-policy', parent: 'P-001', primaryKeyword: '(none; not a target)', linksFrom: ['P-050'], priority: 'Low' },
  { id: 'P-054', path: '/disclaimer/', name: 'Disclaimer', full: 'Disclaimer', type: 'legal', file: 'disclaimer', parent: 'P-001', primaryKeyword: '(none; not a target)', linksFrom: ['P-051'], priority: 'Low' },
);
if (pages.length !== 53) throw new Error('Expected 53 pages, got ' + pages.length);
writeFileSync(new URL('pages.json', OUT), JSON.stringify(pages, null, 2) + '\n');

// ---------------------------------------------------------------- reviews
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// Left off the site by the build defaults in the brief (section 4): Vlada T and Keith; Jonathan has no text.
const OFF = { 'vlada-t': 'Left off the site (shares Vlad\'s surname); Vlad can reverse.', keith: 'Left off the site (unverified satellite location); Vlad can reverse.', jonathan: 'Five stars with no text; not quoted.' };
const rows = readCsvObjects(new URL('REVIEWS-chatsworthpt-28.csv', REF));
const reviews = rows.map((r) => {
  const label = r.reviewer_first_name.trim();
  const key = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  // First name only on the page: drop a trailing initial or short surname fragment ("Matthew S", "Maggie McC").
  const displayName = label.replace(/\s+(?:[A-Z]|Mc[A-Z])[a-zA-Z]{0,2}\.?$/, '');
  const [y, m] = r.date.split('-').map(Number);
  return {
    key,
    label,
    displayName,
    date: r.date,
    month: `${MONTHS[m - 1]} ${y}`,
    theme: r.theme,
    quote: r.quote_as_shown_on_google_trimmed,
    usable: !OFF[key] && Boolean(r.quote_as_shown_on_google_trimmed.trim()),
    ...(OFF[key] ? { note: OFF[key] } : {}),
  };
});
if (reviews.length !== 28) throw new Error('Expected 28 reviews, got ' + reviews.length);
writeFileSync(new URL('reviews.json', OUT), JSON.stringify(reviews, null, 2) + '\n');
console.log(`pages.json: ${pages.length} pages; reviews.json: ${reviews.length} reviews (${reviews.filter((r) => r.usable).length} usable)`);
