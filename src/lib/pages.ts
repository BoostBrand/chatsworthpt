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
// One menu on every page, the homepage included (Vlad, 23 Oct 2026: the homepage's in-page anchors kept
// visitors on the homepage, and Contact belongs in the menu). Dropdown items use the exact page names.
export interface NavGroup { title?: string; ids: string[] }
export interface NavItem {
  label: string;
  href: string;
  section?: 'services' | 'conditions' | 'patients'; // the menu item the underline rests on for that part of the site
  groups?: NavGroup[];
  all?: { text: string; href: string };
}
export const NAV: NavItem[] = [
  {
    label: 'Services', href: '/our-services/', section: 'services',
    groups: [
      { title: 'Physical therapy', ids: ['P-004', 'P-005', 'P-006', 'P-007', 'P-009', 'P-008', 'P-010', 'P-011'] },
      { title: 'Treatments and training', ids: ['P-012', 'P-013', 'P-014', 'P-015'] },
    ],
    all: { text: 'All services', href: '/our-services/' },
  },
  {
    label: 'Conditions', href: '/conditions/', section: 'conditions',
    groups: [
      { ids: ['P-022', 'P-023', 'P-024', 'P-025', 'P-026', 'P-027'] },
      { ids: ['P-028', 'P-029', 'P-030', 'P-031', 'P-032', 'P-033'] },
    ],
    all: { text: 'All conditions', href: '/conditions/' },
  },
  { label: 'Dr. Ed', href: '/about-us/' },
  { label: 'Reviews', href: '/reviews/' },
  {
    label: 'New patients', href: '/first-visit/', section: 'patients',
    groups: [{ ids: ['P-017', 'P-016', 'P-019', 'P-037'] }],
  },
  { label: 'Contact', href: '/contact/' },
];
// Short labels where the page name would crowd the menu.
export const MENU_LABEL: Record<string, string> = { 'P-019': 'Questions' };

// Which menu item a page belongs to, so the underline rests on it.
export function navSectionFor(p: PageMeta | undefined): NavItem['section'] | null {
  if (!p) return null;
  if (p.type === 'service' || p.type === 'services-hub') return 'services';
  if (p.type === 'condition' || p.type === 'conditions-hub') return 'conditions';
  if (['P-016', 'P-017', 'P-019', 'P-037'].includes(p.id) || p.type === 'post') return 'patients';
  return null;
}

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
