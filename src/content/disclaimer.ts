import type { PageContent } from '../lib/types';

// P-054, added after the blueprint (23 Oct 2026). The blueprint 301'd /disclaimer/ into the terms page, but
// termageddon.js fills one embed per page, so the disclaimer keeps its own page, as on the live site.
const page: PageContent = {
  id: 'P-054',
  path: '/disclaimer/',
  title: 'Disclaimer | Chatsworth Physical Therapy',
  description: 'Read the disclaimer that applies to the information on the Chatsworth Physical Therapy website.',
  hero: { h1: 'Disclaimer', lede: '' },
  sections: [],
  booking: false,
  termageddon: 'disclaimer',
  related: [
    { text: 'Terms of service', href: '/terms-of-service/' },
    { text: 'Contact', href: '/contact/' },
  ],
  notes: ['The Termageddon disclaimer, as on the live site (key in site.ts).'],
};
export default page;
