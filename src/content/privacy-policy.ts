import type { PageContent } from '../lib/types';

// P-050. Shows the clinic's Termageddon privacy policy (the embed key lives in site.ts). The cookie policy
// has its own page (P-053): termageddon.js fills one embed per page.
const page: PageContent = {
  id: 'P-050',
  path: '/privacy-policy/',
  title: 'Privacy Policy | Chatsworth Physical Therapy',
  description: 'Read how Chatsworth Physical Therapy handles the information you send through this website, including form submissions and analytics.',
  hero: { h1: 'Privacy policy', lede: '' },
  sections: [],
  booking: false,
  termageddon: 'privacy',
  related: [
    { text: 'Cookie policy', href: '/cookie-policy/' },
    { text: 'Terms of service', href: '/terms-of-service/' },
    { text: 'Contact', href: '/contact/' },
  ],
  notes: ['The Termageddon privacy policy, as on the live site (key in site.ts).'],
};
export default page;
