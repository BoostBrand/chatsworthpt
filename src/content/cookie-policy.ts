import type { PageContent } from '../lib/types';

// P-053, added after the blueprint (23 Oct 2026). The blueprint 301'd /cookie-policy/ into the privacy page,
// but termageddon.js fills one embed per page, so the cookie policy keeps its own page, as on the live site.
const page: PageContent = {
  id: 'P-053',
  path: '/cookie-policy/',
  title: 'Cookie Policy | Chatsworth Physical Therapy',
  description: 'Read how the Chatsworth Physical Therapy website uses cookies and similar tools, and how to manage your choices.',
  hero: { h1: 'Cookie policy', lede: '' },
  sections: [],
  booking: false,
  termageddon: 'cookies',
  related: [
    { text: 'Privacy policy', href: '/privacy-policy/' },
    { text: 'Contact', href: '/contact/' },
  ],
  notes: ['The Termageddon cookie policy, as on the live site (key in site.ts).'],
};
export default page;
