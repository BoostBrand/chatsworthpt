import type { PageContent } from '../lib/types';

// P-051. Same pattern as the privacy policy: placeholder and noindex until the live text of
// /terms-of-service/ and /disclaimer/ (folded in as a "not medical advice" section) is in the Project.
const page: PageContent = {
  id: 'P-051',
  path: '/terms-of-service/',
  title: 'Terms of Service | Chatsworth Physical Therapy',
  description: 'Read the terms that apply to using the Chatsworth Physical Therapy website and booking requests sent through it.',
  hero: { h1: 'Terms of service', lede: '' },
  sections: [],
  booking: false,
  related: [
    { text: 'Contact', href: '/contact/' },
    { text: 'Privacy policy', href: '/privacy-policy/' },
  ],
  notes: ['Waiting on the live text of /terms-of-service/ and /disclaimer/.'],
};
export default page;
