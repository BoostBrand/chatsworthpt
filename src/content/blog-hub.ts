import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-037',
  path: '/blog/',
  title: 'Blog | Chatsworth Physical Therapy, Dr. Ed Shut, DPT',
  description:
    'Read plain answers from Dr. Ed Shut, DPT on recovery, referrals, Medicare, vertigo, ACL rehab and what to expect at physical therapy in Chatsworth.',
  hero: {
    h1: 'Plain answers from Dr. Ed',
    lede: 'Short answers to the questions patients ask Dr. Ed, from referrals and Medicare to what happens at your first visit.',
    book: 'Book my evaluation',
    stars: false,
  },
  sections: [
    {
      kind: 'posts',
      h2: 'All posts',
      intro: 'Newest first. The tag under each post names the service it belongs to.',
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'If a post does not answer your question, tell Dr. Ed what is going on and he will answer it at your evaluation. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'About Dr. Ed', href: '/about-us/' },
  ],
  notes: [
    'Built by the build lead. The post list is generated from src/content/blog/, newest first, so a new post needs no change here.',
    'The entry asks for about 150 words plus the list. The hero, intro and booking lead cover the entry fully below that, so nothing was padded.',
  ],
};

export default page;
