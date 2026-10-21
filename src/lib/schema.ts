// JSON-LD builders. Every page prints exactly one <script type="application/ld+json"> holding one @graph
// (the 404 prints none). Physiotherapy appears on the homepage and the contact page only; reviews are marked
// up only where shown, with the first name; never aggregateRating.
import { SITE_URL, BUSINESS, SOCIAL, AREA_SERVED } from '../data/site';
import type { Crumb } from './pages';
import type { FaqItem } from './types';
import { plainInline } from './inline';

export const CLINIC_ID = `${SITE_URL}/#clinic`;
export const PERSON_ID = `${SITE_URL}/#dr-ed`;
export const abs = (p: string) => (p.startsWith('http') ? p : `${SITE_URL}${p}`);

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

export function physiotherapyNode(reviews: Node[] = []): Node {
  return {
    '@type': 'Physiotherapy',
    '@id': CLINIC_ID,
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    telephone: BUSINESS.phoneSchema,
    email: BUSINESS.email,
    description:
      'One-on-one physical therapy in Chatsworth, CA with Dr. Ed Shut, DPT: back pain, sports injuries, pre and post-op rehab, orthopedic rehabilitation, balance and vertigo, pediatric and neurological rehab. Evening and Saturday hours, Medicare accepted.',
    image: [abs('/img/hero-dr-ed-treating-patient-chatsworth.webp'), abs('/img/dr-ed-shut-in-clinic-chatsworth.webp')],
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
    medicalSpecialty: 'PhysicalTherapy',
    knowsLanguage: [...BUSINESS.languages],
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    areaServed: [...AREA_SERVED],
    sameAs: SOCIAL.map((s) => s.url),
    paymentAccepted: BUSINESS.paymentAccepted,
    ...(reviews.length ? { review: reviews } : {}),
  };
}

// Person as on the approved homepage graph; the About page adds the social profiles.
export function personNode(withSameAs = false): Node {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: BUSINESS.doctor.name,
    alternateName: 'Dr. Ed',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'DPT',
    jobTitle: 'Physical Therapist',
    image: abs('/img/dr-ed-shut-in-clinic-chatsworth.webp'),
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
    ...(withSameAs ? { sameAs: SOCIAL.map((s) => s.url) } : {}),
  };
}

export function breadcrumbNode(crumbs: Crumb[]): Node {
  return {
    '@type': 'BreadcrumbList',
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
    provider: { '@id': CLINIC_ID, name: BUSINESS.name },
    areaServed: (opts.areaServed ?? [...AREA_SERVED]).map((c) => ({ '@type': 'City', name: c })),
    ...(opts.reviews?.length ? { review: opts.reviews } : {}),
  };
}

export function webPageNode(path: string, name: string, type = 'WebPage', extra: Node = {}): Node {
  return { '@type': type, '@id': `${abs(path)}#webpage`, url: abs(path), name, isPartOf: { '@id': `${SITE_URL}/#website` }, ...extra };
}

export function itemListNode(name: string, items: { name: string; path: string }[]): Node {
  return {
    '@type': 'ItemList',
    name,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.path) })),
  };
}

export function graph(nodes: Node[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
