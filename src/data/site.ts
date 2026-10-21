// Chatsworth Physical Therapy: every business fact, URL, tracking ID and build switch lives here once.
// Pages, the footer and the JSON-LD read from this file. Facts confirmed by Vlad and Dr. Ed on 20 Oct 2026
// (claude/HANDOFF-chatsworthpt-next-session.md, "Facts confirmed"). Never paste these values into a page.

export const SITE_URL = 'https://chatsworthpt.com';

export const BUSINESS = {
  name: 'Chatsworth Physical Therapy',
  legalName: 'Chatsworth Physical Therapy',
  phone: '(818) 749-3205',
  phoneHref: 'tel:+18187493205',
  phoneSchema: '+1-818-749-3205',
  email: 'chatsworthpt@gmail.com',
  street: '19851 Nordhoff Place, Unit 105 (Suite C)',
  streetShort: '19851 Nordhoff Pl, Unit 105 (Suite C)',
  city: 'Chatsworth',
  region: 'CA',
  postalCode: '91311',
  country: 'US',
  // The one address string every footer prints, identical on every page (QA gate).
  addressLine: '19851 Nordhoff Place, Unit 105 (Suite C), Chatsworth, CA 91311',
  geo: { latitude: 34.2363732, longitude: -118.5663664 },
  placeId: 'ChIJjzo2DhibwoAR1KeHYSgrQkE',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chatsworth+Physical+Therapy&query_place_id=ChIJjzo2DhibwoAR1KeHYSgrQkE',
  hoursLine: 'Mon to Sat 10am to 8pm, Sun closed',
  hoursLong: ['Monday to Saturday, 10am to 8pm', 'Sunday closed'],
  opens: '10:00',
  closes: '20:00',
  openDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  // The two ways a visitor pays that are confirmed (Dr. Ed's rulings and the listing's attributes).
  paymentAccepted: 'Medicare, personal injury liens, credit and debit cards',
  languages: ['en', 'ru'],
  doctor: {
    name: 'Edward Shut',
    display: 'Dr. Edward Shut, DPT',
    short: 'Dr. Ed',
    license: 'PT 301809',
    licenseNumber: '301809',
  },
} as const;

// Google listing numbers, shown as written on the approved homepage: "5.0 on Google, 28 reviews".
export const RATING = { value: '5.0', count: 28, line: '5.0 on Google, 28 reviews' } as const;

// The four social profiles verified live on 20 Oct 2026. Yelp and Healthgrades stay out until confirmed.
export const SOCIAL = [
  { name: 'Facebook', url: 'https://www.facebook.com/chatsworthdpt', icon: 'facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/chatsworthdpt', icon: 'instagram' },
  { name: 'YouTube', url: 'https://www.youtube.com/@ChatsworthDPT', icon: 'youtube' },
  { name: 'X', url: 'https://x.com/ChatsworthDPT', icon: 'x' },
] as const;

export const AREA_SERVED = [
  'Chatsworth',
  'Porter Ranch',
  'Northridge',
  'West Hills',
  'Canoga Park',
  'Granada Hills',
  'Simi Valley',
] as const;

// ---------------------------------------------------------------------------------------------
// Protected values. Never invented, never edited by batch work. Placeholders until Vlad supplies them.
// ---------------------------------------------------------------------------------------------
export const GA4_PROPERTY_ID = '469861709';
export const GA4_MEASUREMENT_ID = 'TODO_GA4_MEASUREMENT_ID';
export const CLARITY_ID = 'TODO_CLARITY_ID';
export const WEB3FORMS_KEY = 'TODO_WEB3FORMS_KEY';

const isSet = (v: string) => Boolean(v) && !v.startsWith('TODO');

// ---------------------------------------------------------------------------------------------
// Build switches
// ---------------------------------------------------------------------------------------------
// Fail closed: no <form> renders anywhere while the Web3Forms key is a placeholder. The booking
// block shows the call panel in the form's place and keeps the #book anchor.
export const FORMS_ENABLED = isSet(WEB3FORMS_KEY);

// No tracking tag renders while either ID is a placeholder.
export const TRACKING_ENABLED = isSet(GA4_MEASUREMENT_ID) && isSet(CLARITY_ID);

// Northridge and Porter Ranch pages build with noindex, stay out of the sitemap and are linked from
// nowhere until Dr. Ed's local proof arrives. Flipping this adds the service-area links on the
// homepage and the contact page, drops the noindex and adds both pages to the sitemap.
export const CITY_PAGES_LIVE = false;

// The live privacy, cookie, terms and disclaimer text is not in the Project yet. While false the two
// legal pages show a highlighted placeholder and carry noindex (and stay out of the sitemap).
export const LEGAL_TEXT_READY = false;

// Review build: [CONFIRM], [verify] and [SOURCE NEEDED] markers render highlighted and a slim note
// says the page is a preview. The ship gate requires zero markers with PREVIEW false.
export const PREVIEW = true;
