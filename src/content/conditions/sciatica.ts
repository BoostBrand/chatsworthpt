import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-022',
  path: '/conditions/sciatica/',
  title: 'Sciatica Physical Therapy in Chatsworth | Dr. Ed Shut, DPT',
  description: 'Sciatica that runs down your leg starts at the disc or the hip. Dr. Ed finds which, treats it one-on-one in Chatsworth and gives you a home plan. Book now.',
  hero: {
    h1: 'Sciatica treatment with physical therapy in Chatsworth',
    lede: 'Pain that runs down your leg and gets worse when you sit or drive. Dr. Ed finds what is irritating the nerve.',
    image: {
      src: '/img/back-pain-therapy-chatsworth.webp',
      alt: 'Dr. Ed guiding a patient through a core stability exercise for back pain at Chatsworth Physical Therapy',
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
          lead: 'Pain, tingling or numbness runs into your buttock, thigh or foot.',
          text: 'Where you feel it can be a long way from where it starts.',
        },
        {
          lead: 'Sitting or driving makes it worse.',
          text: 'A long drive or a day at a desk is when you feel it most.',
        },
        {
          lead: 'The stretches you found online did not hold.',
          text: 'You tried them and the relief did not last. Dr. Ed starts by finding the cause.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Ed does about it',
      blocks: [
        {
          type: 'p',
          text: "With sciatica, Dr. Ed's first question is whether a disc or a tight hip muscle is the one irritating the nerve. He does not start with the sore spot. He watches how you stand, bend, twist, sit and walk, tests the hips, the mid-back and the muscles that are supposed to be holding the spine steady, and checks whether a nerve is involved. Back pain usually has a cause somewhere other than where it hurts, and the evaluation is where he finds it. Then he explains it in plain terms and tells you what the plan is.",
        },
        { type: 'p', text: 'Treatment then has three parts:' },
        {
          type: 'ul',
          items: [
            'Hands-on work to calm the irritated nerve.',
            'Correcting the movements that keep irritating it.',
            'Graded strengthening: exercises that get harder in steps as you handle them.',
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
          text: 'The first visit is the evaluation. It is one-on-one with Dr. Ed, and treatment starts from what he finds.',
        },
        {
          type: 'p',
          text: 'You get a plan you can follow at home. Treatment is hands-on work in the clinic plus a short home program, and Dr. Ed adjusts it at each visit as you progress.',
        },
        {
          type: 'p',
          text: 'How long it takes depends on what he finds and how your body responds. The nerve pain often eases first. Working on the cause takes longer. Dr. Ed sets the plan after your first evaluation, not before.',
        },
        {
          type: 'p',
          text: 'Evening and Saturday appointments are available.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Related pages',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: '[Back pain therapy](/back-pain-therapy/)',
              text: 'The service page that covers low back pain, sciatica, disc problems and posture.',
            },
            {
              lead: '[Herniated disc](/conditions/herniated-disc/)',
              text: 'Read this if a disc turns out to be the cause.',
            },
            {
              lead: '[Neck pain and pinched nerve](/conditions/neck-pain/)',
              text: 'Read this if your nerve trouble is in the neck instead of the back and leg.',
            },
            {
              lead: '[Is it the disc or the hip?](/blog/sciatica-disc-or-hip/)',
              text: 'How the evaluation tells the two apart.',
            },
          ],
        },
      ],
    },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Questions about sciatica',
      items: [
        {
          q: 'Can physical therapy help sciatica?',
          a: 'In most cases, yes. Treatment aims at what is irritating the nerve, usually a disc or a tight muscle in the hip, and at the movements that keep irritating it.',
        },
        {
          q: 'Do I need an MRI first?',
          a: 'No. The evaluation is how Dr. Ed finds out what is going on: he looks at how you move and what brings the pain on. If imaging is needed, he will say so. If you already have a report, bring it.',
        },
        {
          q: 'How long until it eases?',
          a: 'The nerve pain often eases within the first few visits. The cause takes longer. Dr. Ed does not quote a number of visits up front, because the right number depends on what he finds and how your body responds.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your sciatica evaluation',
    lead: 'Tell Dr. Ed where the pain runs and when it is worst. He will confirm your time by phone or email, usually the same day.',
    service: 'Back pain',
  },
  related: [
    { text: 'Back pain therapy', href: '/back-pain-therapy/' },
    { text: 'All conditions', href: '/conditions/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  ],
  schema: {
    condition: {
      name: 'Sciatica',
      associatedAnatomy: 'Lumbar spine and sciatic nerve',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/back-pain-therapy/',
    },
  },
  notes: [
    'No review section: the entry assigns none because no review names sciatica. Add one when a sciatica patient reviews.',
    'FAQ 1 is the approved answer word for word. The evaluation paragraph under What Dr. Ed does about it reuses the approved back pain evaluation language word for word, as the decision file allows.',
    'FAQ 3 follows the entry: nerve pain often eases within the first few visits, the cause takes longer, no visit count is quoted.',
    'The entry words the parent service anchor as parent service. The page shows the page name Back pain therapy as the visible anchor.',
    'Hero photo is back-pain-therapy-chatsworth.webp until a dedicated sciatica frame exists.',
  ],
};

export default page;
