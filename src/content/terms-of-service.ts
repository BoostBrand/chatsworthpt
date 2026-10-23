import type { PageContent } from '../lib/types';

// P-051. Shows the clinic's Termageddon terms of service (the embed key lives in site.ts). The disclaimer
// has its own page (P-054): termageddon.js fills one embed per page.
const page: PageContent = {
  id: 'P-051',
  path: '/terms-of-service/',
  title: 'Terms of Service | Chatsworth Physical Therapy',
  description: 'Read the terms that apply to using the Chatsworth Physical Therapy website and booking requests sent through it.',
  hero: { h1: 'Terms of service', lede: '' },
  sections: [],
  booking: false,
  termageddon: 'terms',
  related: [
    { text: 'Disclaimer', href: '/disclaimer/' },
    { text: 'Privacy policy', href: '/privacy-policy/' },
    { text: 'Contact', href: '/contact/' },
  ],
  notes: ['The Termageddon terms of service, as on the live site (key in site.ts).'],
};
export default page;
