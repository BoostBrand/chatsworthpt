// JSON-LD builders. Every page prints exactly one <script type="application/ld+json"> holding one @graph
// (the 404 prints none). The clinic node appears on the homepage and the contact page only. No Review or
// AggregateRating markup anywhere (24 Oct 2026: the clinic's own reviews are ineligible, see page-schema.ts).
// Every page also carries a WebPage node (25 Oct 2026) tied to the WebSite, its breadcrumb and its main entity.
import { SITE_URL, BUSINESS, SOCIAL, AREA_SERVED } from '../data/site';
import type { Crumb } from './pages';
import type { FaqItem } from './types';
import { plainInline } from './inline';

export const CLINIC_ID = `${SITE_URL}/#clinic`;
export const PERSON_ID = `${SITE_URL}/#dr-ed`;
export const abs = (p: string) => (p.startsWith('http') ? p : `${SITE_URL}${p}`);
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const CLINIC_TYPE = ['MedicalClinic', 'Physiotherapy'];
// How other pages point at the clinic: typed and named, so the reference reads on its own where the full clinic
// node (homepage and contact page only) is not on the page.
export const CLINIC_REF = { '@type': CLINIC_TYPE, '@id': CLINIC_ID, name: BUSINESS.name };

// Dr. Edward at the clinic entrance (25 Oct 2026, Vlad): suit, window lettering "C - Chatsworth Physical Therapy",
// "19851 #105" over the door. Drive 1srQnp2qK6VWDSdC7rD_74EaeggTWl7Y3 (CPT Images for 2nd citation-blast); square,
// uncropped, at 480, 768, 1200 and 1600 px. Credit as embedded in the source; no creator or copyright is claimed.
export const PORTRAIT = {
  src: '/img/dr-edward-shut-chatsworth-clinic-entrance-1600.webp',
  width: 1600,
  height: 1600,
  alt: 'Dr. Edward Shut standing outside Chatsworth Physical Therapy beside the clinic entrance at 19851 Nordhoff Place.',
  title: 'Dr. Edward Shut at the Chatsworth Physical Therapy entrance',
  description: 'Dr. Edward Shut in a dark suit beside the clinic entrance, with Chatsworth Physical Therapy lettering on the window and 19851 #105 above the door.',
  creditText: 'Chatsworth Physical Therapy',
} as const;

type Node = Record<string, unknown>;

export function reviewNode(name: string, body: string, extra: Node = {}): Node {
  return {
    '@type': 'Review',
    author: { '@type': 'Person', name },
    reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    reviewBody: body,
    ...extra,
  };
}

// The clinic. 25 Oct 2026: schema.org lists Physiotherapy both as a MedicalBusiness type and as a MedicalSpecialty
// value, and medicalSpecialty belongs to MedicalClinic (not to Physiotherapy), with a MedicalSpecialty value (the old
// text 'PhysicalTherapy' names a therapy type, not a specialty). So the clinic is typed as both, as Google allows
// ("If you have multiple types, specify them as an array"), with the specialty as the enumeration URL. @id unchanged.
export function physiotherapyNode(reviews: Node[] = []): Node {
  return {
    '@type': CLINIC_TYPE,
    '@id': CLINIC_ID,
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    telephone: BUSINESS.phoneSchema,
    email: BUSINESS.email,
    description:
      'One-on-one physical therapy in Chatsworth, CA with Dr. Edward Shut, DPT: back pain, sports injuries, pre and post-op rehab, orthopedic rehabilitation, balance and vertigo, pediatric and neurological rehab. Evening and Saturday hours, Medicare accepted.',
    image: [abs('/img/hero-dr-ed-treating-patient-chatsworth.webp'), abs(PORTRAIT.src)],
    logo: abs('/img/logo.svg'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.latitude, longitude: BUSINESS.geo.longitude },
    hasMap: BUSINESS.mapsUrl,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: [...BUSINESS.openDays], opens: BUSINESS.opens, closes: BUSINESS.closes },
    ],
    medicalSpecialty: 'https://schema.org/Physiotherapy',
    knowsLanguage: [...BUSINESS.languages],
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    areaServed: [...AREA_SERVED],
    sameAs: SOCIAL.map((s) => s.url),
    paymentAccepted: BUSINESS.paymentAccepted,
    ...(reviews.length ? { review: reviews } : {}),
  };
}

// Person as on the approved homepage graph. 25 Oct 2026: no sameAs. The four social profiles are the clinic's
// (chatsworthdpt) and stay on the clinic node only, so the two entities are not merged. A Doctor of Physical
// Therapy: jobTitle Physical Therapist, never Physician.
export function personNode(): Node {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: BUSINESS.doctor.name,
    alternateName: 'Dr. Edward',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'DPT',
    jobTitle: 'Physical Therapist',
    url: abs('/about-us/'),
    image: [abs(PORTRAIT.src), abs('/img/dr-ed-shut-in-clinic-chatsworth.webp')],
    worksFor: { '@id': CLINIC_ID },
    knowsLanguage: [...BUSINESS.languages],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: "Mount Saint Mary's University" },
      { '@type': 'CollegeOrUniversity', name: 'California State University, Northridge' },
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Doctor of Physical Therapy' },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'Physical Therapist license PT 301809',
        recognizedBy: { '@type': 'Organization', name: 'Physical Therapy Board of California' },
      },
    ],
  };
}

export function breadcrumbNode(crumbs: Crumb[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(crumbs[crumbs.length - 1].path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

export function faqNode(items: FaqItem[]): Node {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: (Array.isArray(f.a) ? f.a : [f.a]).map(plainInline).join(' ') },
    })),
  };
}

export function serviceNode(opts: { name: string; path: string; description?: string; areaServed?: string[]; reviews?: Node[] }): Node {
  return {
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.name,
    url: abs(opts.path),
    ...(opts.description ? { description: opts.description } : {}),
    provider: CLINIC_REF,
    areaServed: (opts.areaServed ?? [...AREA_SERVED]).map((c) => ({ '@type': 'City', name: c })),
    ...(opts.reviews?.length ? { review: opts.reviews } : {}),
  };
}

export function webPageNode(path: string, name: string, type = 'WebPage', extra: Node = {}): Node {
  return { '@type': type, '@id': `${abs(path)}#webpage`, url: abs(path), name, isPartOf: { '@id': WEBSITE_ID }, inLanguage: 'en-US', ...extra };
}

// A page's image as a small ImageObject for primaryImageOfPage (its file, size and alt text).
export function imageRefNode(img: { src: string; width: number; height: number; alt: string }): Node {
  return { '@type': 'ImageObject', contentUrl: abs(img.src), url: abs(img.src), width: img.width, height: img.height, caption: img.alt };
}

export function itemListNode(name: string, items: { name: string; path: string }[], id?: string): Node {
  return {
    '@type': 'ItemList',
    ...(id ? { '@id': id } : {}),
    name,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.path) })),
  };
}

export function graph(nodes: Node[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
