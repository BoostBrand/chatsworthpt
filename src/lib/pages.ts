// The page registry (src/data/pages.json, generated from the architecture CSV) plus the header, footer and
// breadcrumb rules from blueprint section 3. Every internal link label is the exact page name.
import pagesJson from '../data/pages.json';
import { CITY_PAGES_LIVE, LEGAL_TEXT_READY } from '../data/site';

export interface PageMeta {
  id: string;
  path: string;
  name: string;
  full: string;
  type: string;
  file: string;
  city?: string;
  parent: string | null;
  primaryKeyword: string;
  linksFrom: string[];
  priority: string;
}

export const PAGES = pagesJson as PageMeta[];

export function pageById(id: string): PageMeta {
  const p = PAGES.find((x) => x.id === id);
  if (!p) throw new Error('Unknown page ' + id);
  return p;
}

export function pageByPath(path: string): PageMeta | undefined {
  return PAGES.find((x) => x.path === path);
}

export const path = (id: string) => pageById(id).path;

// noindex: the 404, the two city pages until CITY_PAGES_LIVE, the two legal pages until their text lands.
export function isNoindex(p: PageMeta): boolean {
  if (p.type === '404') return true;
  if (p.type === 'city') return !CITY_PAGES_LIVE;
  if (p.type === 'legal') return !LEGAL_TEXT_READY;
  return false;
}

export interface Crumb {
  name: string;
  path: string;
}

// Home > Services > page; Home > Conditions > page; Home > Blog > post; Home > page for the rest.
export function crumbsFor(p: PageMeta): Crumb[] {
  const home = { name: 'Home', path: '/' };
  if (p.type === 'home') return [home];
  if (p.type === 'service') return [home, { name: 'Services', path: '/our-services/' }, { name: p.name, path: p.path }];
  if (p.type === 'condition') return [home, { name: 'Conditions', path: '/conditions/' }, { name: p.name, path: p.path }];
  if (p.type === 'post') return [home, { name: 'Blog', path: '/blog/' }, { name: p.name, path: p.path }];
  return [home, { name: p.name, path: p.path }];
}

// ---------------------------------------------------------------- header
// Services dropdown: the eight clinical services in homepage order, then a "More" group.
export const SERVICES_MENU = ['P-004', 'P-005', 'P-006', 'P-007', 'P-009', 'P-008', 'P-010', 'P-011'];
export const SERVICES_MORE = ['P-021', 'P-012', 'P-013', 'P-014', 'P-015'];
export const MENU_LABEL: Record<string, string> = { 'P-021': 'Conditions we treat' };

// Top-level items on inner pages. The homepage keeps its approved in-page anchors.
export const NAV_INNER = [
  { label: 'Services', href: '/our-services/', id: 'P-003' },
  { label: 'Dr. Ed', href: '/about-us/', id: 'P-002' },
  { label: 'Reviews', href: '/reviews/', id: 'P-018' },
  { label: 'Visit', href: '/contact/', id: 'P-020' },
  { label: 'Questions', href: '/faqs/', id: 'P-019' },
];
export const NAV_HOME = [
  { label: 'Services', href: '#services' },
  { label: 'Dr. Ed', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
  { label: 'Questions', href: '#faq' },
];

// ---------------------------------------------------------------- footer (blueprint section 3)
export const FOOTER_COLUMNS: { title: string; links: { text: string; href: string }[] }[] = [
  {
    title: 'Conditions',
    links: [
      { text: 'Back pain therapy', href: '/back-pain-therapy/' },
      { text: 'Sports injury rehab', href: '/sports-injury-recovery/' },
      { text: 'Pre and post-op physical therapy', href: '/pre-post-surgical-rehabilitation/' },
      { text: 'Orthopedic rehabilitation', href: '/orthopedic-rehabilitation/' },
      { text: 'Balance and fall prevention', href: '/balance-and-fall-prevention/' },
      { text: 'Pain management', href: '/pain-management/' },
    ],
  },
  {
    title: 'More services',
    links: [
      { text: 'Pediatric physical therapy', href: '/pediatric-physical-therapy/' },
      { text: 'Neurological rehabilitation', href: '/neurological-rehabilitation/' },
      { text: 'Red light therapy', href: '/red-light-therapy/' },
      { text: 'Therapeutic ultrasound', href: '/therapeutic-ultrasound/' },
      { text: 'Electrical stimulation', href: '/electrical-stimulation-tens-nmes/' },
      { text: 'Personal training and weight loss', href: '/personal-training-weight-loss/' },
      { text: 'All services', href: '/our-services/' },
    ],
  },
  {
    title: 'Clinic',
    links: [
      { text: 'About Dr. Ed', href: '/about-us/' },
      { text: 'Reviews', href: '/reviews/' },
      { text: 'Your first visit', href: '/first-visit/' },
      { text: 'Insurance and cost', href: '/insurance-and-cost/' },
      { text: 'Questions', href: '/faqs/' },
      { text: 'Conditions we treat', href: '/conditions/' },
      { text: 'Blog', href: '/blog/' },
      { text: 'Book an evaluation', href: '/contact/#book' },
      { text: 'Privacy policy', href: '/privacy-policy/' },
      { text: 'Cookie policy', href: '/cookie-policy/' },
      { text: 'Terms of service', href: '/terms-of-service/' },
      { text: 'Disclaimer', href: '/disclaimer/' },
    ],
  },
];

export const cityPagesLinked = CITY_PAGES_LIVE;
