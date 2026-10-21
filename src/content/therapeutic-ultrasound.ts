import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-013',
  path: '/therapeutic-ultrasound/',
  title: 'Therapeutic Ultrasound in Chatsworth | Dr. Ed Shut, DPT',
  description:
    'Learn how therapeutic ultrasound eases pain and speeds healing inside physical therapy sessions with Dr. Ed Shut, DPT in Chatsworth. Book an evaluation.',
  hero: {
    h1: 'Therapeutic ultrasound in Chatsworth: how Dr. Ed uses it in treatment',
    lede: 'Sound waves warm and loosen tissue before hands-on work. This is treatment ultrasound, not the imaging kind.',
    placeholder: 'PHOTO: Dr. Ed applying the ultrasound head on a shoulder or ankle, to be shot',
    book: 'Book my evaluation',
  },
  sections: [
    {
      kind: 'prose',
      h2: 'What therapeutic ultrasound does',
      blocks: [
        {
          type: 'p',
          text: 'At his Chatsworth clinic, Dr. Ed applies ultrasound to the area he is treating. He uses it for:',
        },
        {
          type: 'ul',
          items: ['Deep heating of tissue', 'Settling muscle spasm', 'Helping tendons and ligaments recover'],
        },
        {
          type: 'p',
          text: 'Diagnostic ultrasound takes pictures. This kind treats.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'How it fits a visit',
      blocks: [
        {
          type: 'p',
          text: 'Ultrasound takes a few minutes on the treated area. Manual therapy and exercise follow.',
        },
        {
          type: 'p',
          text: 'Ultrasound is part of treatment for tendinitis, muscle strains, post-op stiffness and [plantar fasciitis](/conditions/plantar-fasciitis/). Dr. Ed decides at your evaluation whether you need it.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What it is not for',
      blocks: [
        {
          type: 'p',
          text: 'Dr. Ed does not use it over a fracture, a numb area, or the abdomen during pregnancy. [CONFIRM contraindication wording with Dr. Ed]',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What a patient says',
      blocks: [
        {
          type: 'p',
          text: "Ultrasound comes up in [Maggie and Mark's review on the post-op page](/pre-post-surgical-rehabilitation/).",
        },
      ],
    },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Questions about ultrasound',
      items: [
        {
          q: "Is it the same as the ultrasound at the doctor's office?",
          a: 'No. This one treats by warming tissue, and it does not take pictures.',
        },
        {
          q: 'Does it hurt?',
          a: 'No. You feel gentle warmth or nothing at all.',
        },
        {
          q: 'Is it covered?',
          a: 'It is part of a physical therapy visit, not billed separately [CONFIRM]. See the insurance notes above for how the visit is paid for.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Ed what hurts. He will confirm your time by phone or email, usually the same day.',
    service: 'Pain management',
  },
  related: [
    { text: 'Pain management', href: '/pain-management/' },
    { text: 'Electrical stimulation', href: '/electrical-stimulation-tens-nmes/' },
    { text: 'All services', href: '/our-services/' },
  ],
  schema: { serviceType: 'Therapeutic ultrasound' },
  notes: [
    'Two items wait on Dr. Ed: the contraindication wording (marker in the "What it is not for" section) and whether ultrasound is ever billed separately (marker in the "Is it covered?" answer).',
    'The meta description is copied exactly from the blueprint entry and says "speeds healing". The page body makes no healing-speed claim. Decide whether the meta description should change.',
    'No review on this page by design. The patient line points to the post-op page by link and reprints nothing. Ask the next patient who gets ultrasound for a review.',
    'Photo to shoot: Dr. Ed applying the ultrasound head on a shoulder or ankle (Gabby). Filename therapeutic-ultrasound-chatsworth.webp. The hero shows a labelled placeholder until then.',
    '"Deep heating" is the blueprint entry\'s own wording. No depth, frequency or study claim was added.',
    'Word count: this page is written to the 400 to 500 target as entry-check.py counts it (visible text in main, which includes the site-wide insurance lines and the booking band). The content checker prints a lower number because it does not see the template text.',
  ],
};

export default page;
