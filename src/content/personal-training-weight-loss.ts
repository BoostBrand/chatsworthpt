import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-015',
  path: '/personal-training-weight-loss/',
  title: 'Personal Training and Weight Loss Chatsworth | Dr. Edward',
  description:
    'After rehab: personal training and weight loss coaching in Chatsworth with Dr. Edward Shut, DPT, the doctor who treated you. Call (818) 749-3205.',
  hero: {
    h1: 'Personal training and weight loss in Chatsworth, the step after physical therapy',
    lede: 'Train with the doctor who knows your injury history.',
    image: {
      src: '/img/dr-ed-explaining-anatomy-chatsworth.webp',
      width: 1200,
      height: 960,
      alt: 'Dr. Edward explaining an anatomy chart to a patient',
    },
    book: 'Book my first session',
  },
  sections: [
    {
      kind: 'who',
      h2: 'Who this is for',
      intro:
        'Most people who train here start after rehab. Some come to Dr. Edward for the first time, and they are welcome too.',
      items: [
        {
          lead: 'You finished physical therapy and want to keep going.',
          text: 'Stay with the doctor who treated you. He knows what was hurt and how you move, so you do not start over with a new trainer.',
        },
        {
          lead: 'You hurt, and a regular gym worries you.',
          text: 'Dr. Edward starts with how you move and what hurts, then builds your sessions around it.',
        },
        {
          lead: 'You want to lose weight, and a joint makes it harder.',
          text: 'A doctor who treats joint injuries builds your program around the one that was hurt. If weight loss is one of your goals, your training is built around it.',
        },
        {
          lead: 'You want to get back to fitness after an injury.',
          text: 'Dr. Edward finds out where you stand today and builds your return from there.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What training looks like with Dr. Edward',
      blocks: [
        {
          type: 'p',
          text: 'You train one-on-one with Dr. Edward, in English or Russian. He holds a Doctor of Physical Therapy degree from Mount Saint Mary\'s and a BS in Exercise Science from CSUN.',
        },
        {
          type: 'leads',
          items: [
            {
              lead: 'Evaluation first.',
              text: 'Training starts with an evaluation, the same approach Dr. Edward uses in physical therapy. He examines how you move, goes through your injury history and explains what he finds in plain terms. Your program starts from what he finds.',
            },
            {
              lead: 'Built around the joint that was hurt.',
              text: 'If your knee was the problem, your program is built around your knee, not around a standard routine.',
            },
            {
              lead: 'No diet plans.',
              text: 'Dr. Edward is not a nutritionist and does not give nutrition advice. Your sessions are about exercise.',
            },
          ],
        },
      ],
    },
    {
      kind: 'insurance',
      h2: 'Pricing, insurance and referrals',
      blocks: [
        {
          type: 'p',
          text: 'Personal training is direct pay only, at the same prices as physical therapy visits: $175 for the first evaluation and $125 for each session after that. You can book a package or pay per session.',
        },
        {
          type: 'p',
          text: 'If you start with physical therapy first, these apply to those visits:',
        },
      ],
      siteLines: true,
      more: true,
    },
    {
      kind: 'review',
      review: { key: 'kate', context: 'almost three years with Dr. Edward', sentences: [0, 1] },
    },
    {
      kind: 'faq',
      h2: 'Questions about personal training',
      items: [
        {
          q: 'Is this covered by insurance?',
          a: 'No. Personal training is direct pay only. Physical therapy visits follow separate insurance and referral rules.',
        },
        {
          q: 'Do I have to have been a patient first?',
          a: 'No. Most people start after rehab, but you do not need to have been a physical therapy patient. If you are new to Dr. Edward, you begin with the same evaluation, so he learns your injury history before you train.',
        },
        {
          q: 'How is this different from a gym trainer?',
          a: 'Dr. Edward is a Doctor of Physical Therapy. He evaluates how you move before you train, and he knows your injury history from your rehab or learns it at your first evaluation. Your sessions are built from that.',
        },
        {
          q: 'Do you give diet plans?',
          a: 'No. Dr. Edward is not a nutritionist and does not give nutrition advice or diet plans.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your first training session',
    lead: 'Tell Dr. Edward what you want to work on and what hurts. He will confirm your time by phone or email, usually the same day.',
    service: 'Personal training and weight loss',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'Pain management', href: '/pain-management/' },
    { text: 'Orthopedic rehabilitation', href: '/orthopedic-rehabilitation/' },
  ],
  schema: { serviceType: 'Personal training' },
  notes: [
    'Nutrition guidance scope is unconfirmed. The marker sits in the Nutrition guidance lead under "What training looks like" and in the diet plans FAQ. Nothing about diets, calories or weight targets is written.',
    'Prices are unconfirmed. The marker sits in the pricing paragraph. If Dr. Edward gives prices by phone only, the marker can come out and the line stays.',
    'Hero photo is the stand-in (Dr. Edward with the anatomy chart). Shoot a strength session with a patient and save it as personal-training-chatsworth.webp, then swap the hero image.',
    'The diet plans FAQ answer is one sentence by the build lead decision for P-015.',
    'The insurance and cost link comes from the insurance section (more: true), not from the copy.',
    'The opening paragraph under "What training looks like" carries two lines from the facts list: English or Russian, and the credentials (Doctor of Physical Therapy, Mount Saint Mary\'s; BS in Exercise Science, CSUN). Remove either if Dr. Edward wants it on About only. Training in English or Russian extends the approved "treated in either" line to training sessions.',
    'The line "Weight loss coaching is part of the work" follows the meta description wording. Revisit it when the nutrition answer arrives.',
    'The review label says "almost three years with Dr. Edward" because Kate wrote that she had worked with him for almost 3 years. It does not say training, because her review does not.',
  ],
};

export default page;
