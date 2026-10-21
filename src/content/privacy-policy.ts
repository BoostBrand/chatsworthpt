import type { PageContent } from '../lib/types';

// P-050. The live policy text is not in the Project yet (the live site cannot be fetched from the build
// sandbox). While LEGAL_TEXT_READY is false the template shows the highlighted placeholder and the page is
// noindex. When the text lands: paste it as prose sections below (the cookie policy as one section), update
// the entity name and the GA4 and Clarity disclosure, then set LEGAL_TEXT_READY to true in src/data/site.ts.
const page: PageContent = {
  id: 'P-050',
  path: '/privacy-policy/',
  title: 'Privacy Policy | Chatsworth Physical Therapy',
  description: 'Read how Chatsworth Physical Therapy handles the information you send through this website, including form submissions and analytics.',
  hero: { h1: 'Privacy policy', lede: '' },
  sections: [],
  booking: false,
  related: [
    { text: 'Contact', href: '/contact/' },
    { text: 'Terms of service', href: '/terms-of-service/' },
  ],
  notes: ['Waiting on the live text of /privacy-policy/ and /cookie-policy/ (Vlad asked GPT to read them into the Project).'],
};
export default page;
