import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-032',
  path: '/conditions/plantar-fasciitis/',
  title: 'Plantar Fasciitis Physical Therapy Chatsworth | Dr. Ed, DPT',
  description: 'Heel pain with the first steps of the morning: Dr. Ed treats plantar fasciitis in Chatsworth and finds the calf, foot and gait issues feeding it. Book now.',
  hero: {
    h1: 'Plantar fasciitis physical therapy in Chatsworth',
    lede: 'The first steps of the morning hurt your heel. Dr. Ed finds the calf, foot and walking issues feeding it.',
    image: {
      src: '/img/sports-injury-rehab-chatsworth.webp',
      alt: 'Ankle treatment during a sports injury rehab session in Chatsworth',
      width: 900,
      height: 900,
    },
    book: 'Book my evaluation',
    stars: true,
  },
  sections: [
    {
      kind: 'who',
      h2: 'Is this you?',
      items: [
        {
          lead: 'Heel pain with the first steps of the day.',
          text: 'It is there before you are fully awake, on the walk to the bathroom or the coffee maker.',
        },
        {
          lead: 'Pain after standing all shift.',
          text: 'The heel is what you notice at the end of a long day on your feet.',
        },
        {
          lead: 'A diagnosis from your doctor and a referral to therapy.',
          text: 'Your doctor named it plantar fasciitis and sent you to physical therapy. Dr. Ed starts with his own evaluation and builds the plan from it.',
        },
        {
          lead: 'Achilles pain on the same side.',
          text: 'If your Achilles also hurts on the same side, say so at the evaluation. It is part of what Dr. Ed looks at.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Ed does about it',
      blocks: [
        {
          type: 'p',
          text: 'Physical therapy for plantar fasciitis with Dr. Ed does not stop at the heel. The evaluation covers the full chain: the foot, the calf, how you walk and how you stand. He is looking for whatever is feeding the pain. When it is more than one thing, each gets its own part of the plan.',
        },
        { type: 'p', text: 'Depending on what he finds, your plan can include:' },
        {
          type: 'ul',
          items: [
            'Calf and foot mobility work.',
            'Hands-on treatment from Dr. Ed.',
            'Strengthening exercises.',
            'Advice on footwear and standing habits.',
            '[Therapeutic ultrasound](/therapeutic-ultrasound/) where it helps.',
          ],
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What to expect',
      blocks: [
        {
          type: 'p',
          text: '**Evaluation first.** Your first visit is the evaluation, one-on-one with Dr. Ed. He examines how you move, explains what he found in plain terms and tells you what the plan is.',
        },
        {
          type: 'p',
          text: '**A plan you can follow at home.** Treatment is hands-on work in the clinic plus a short home program, adjusted at each visit as you progress.',
        },
        {
          type: 'p',
          text: '**How long it takes.** Plantar fasciitis takes weeks to months to settle, and the morning pain usually eases first. Dr. Ed does not quote a number of visits up front. He sets the plan after your evaluation.',
        },
        {
          type: 'p',
          text: '**Evenings and Saturdays.** Appointments are available after work and on Saturdays, so treatment can fit around your workday.',
        },
      ],
    },
    { kind: 'review', review: { key: 'melissa', context: 'plantar fasciitis' } },
    {
      kind: 'prose',
      h2: 'Related pages',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: '[Orthopedic rehabilitation](/orthopedic-rehabilitation/)',
              text: 'The service this page belongs to, for shoulder, elbow, hip, knee and ankle injuries.',
            },
            {
              lead: '[Ankle sprain](/conditions/ankle-sprain/)',
              text: 'For pain at the ankle after a roll or a twist.',
            },
          ],
        },
      ],
    },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Common questions',
      items: [
        {
          q: 'How long does plantar fasciitis take to settle?',
          a: 'Weeks to months. The morning pain usually eases first. How fast it moves depends on what the evaluation finds and how your body responds.',
        },
        {
          q: 'Do I need orthotics?',
          a: 'Sometimes. The evaluation decides it, not a rule of thumb. Dr. Ed looks at your foot, your calf and how you walk, then tells you plainly whether orthotics belong in your plan.',
        },
        {
          q: 'Should I stop walking?',
          a: 'No. You change how and how much you walk, and the plan spells out both. Dr. Ed builds that plan from your evaluation, with footwear and standing habits included.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your plantar fasciitis evaluation',
    lead: 'Tell Dr. Ed what hurts and when it is worst. He will confirm your time by phone or email, usually the same day.',
    service: 'Orthopedic injury',
  },
  related: [
    { text: 'Orthopedic rehabilitation', href: '/orthopedic-rehabilitation/' },
    { text: 'All conditions', href: '/conditions/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  ],
  schema: {
    condition: {
      name: 'Plantar fasciitis',
      associatedAnatomy: 'Plantar fascia of the foot',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/orthopedic-rehabilitation/',
    },
  },
  notes: [
    'Hero uses the ankle photo (sports-injury-rehab-chatsworth) until the foot or calf hands-on frame is shot (Gabby, shoot list).',
    'The entry asks for two sibling conditions and one blog post under Related. The build lead decision names only Ankle sprain, and the entry links out name no other condition and no blog post, so Related pages holds the parent service and Ankle sprain.',
    'Orthotics FAQ follows the entry (Sometimes; the evaluation says). The page does not say whether Dr. Ed supplies or fits orthotics. Dr. Ed to say if it should.',
    'Insurance and cost is in the related list because the entry lists it as a link out. The insurance section also prints its own link to that page.',
    'The Is this you H2 is the entry wording; change it if a question mark in a heading counts as a rhetorical question.',
  ],
};

export default page;
