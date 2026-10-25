import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-023',
  path: '/conditions/herniated-disc/',
  title: 'Herniated Disc Physical Therapy Chatsworth | Dr. Edward, DPT',
  description:
    'A herniated or bulging disc rarely needs surgery first. See how Dr. Edward treats disc pain one-on-one in Chatsworth with hands-on care and a home plan.',
  hero: {
    h1: 'Herniated disc physical therapy in Chatsworth',
    lede: 'Your MRI shows a disc problem and someone has mentioned surgery. Dr. Edward tests how you move, treats you hands-on and gives you a home program.',
    image: {
      src: '/img/back-pain-therapy-chatsworth.webp',
      alt: 'Dr. Edward guiding a patient through a core stability exercise for back pain at Chatsworth Physical Therapy',
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
          lead: 'Your MRI report says bulge or herniation.',
          text: 'Also called a bulging disc or a slipped disc. Dr. Edward reads the report alongside how you actually move.',
        },
        {
          lead: 'Your back hurts, with or without leg symptoms.',
          text: 'The evaluation shows whether a disc is behind it or something else, such as the hip.',
        },
        {
          lead: 'Your surgeon said to try therapy first.',
          text: 'Dr. Edward treats disc pain and says plainly if it is time to go back to your surgeon.',
        },
        {
          lead: 'Your back pain began after lifting or sitting.',
          text: 'A heavy lift, months at a desk, hours behind the wheel. Dr. Edward checks how your back moves and shows you what to change.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Edward does about it',
      blocks: [
        {
          type: 'p',
          text: 'He starts with directional movement testing. You move in different directions, and he sees which ones ease your pain and which ones bring it on. Your plan is built from that.',
        },
        {
          type: 'leads',
          items: [
            {
              lead: 'Hands-on treatment.',
              text: 'Done in the clinic, to get you moving more comfortably.',
            },
            {
              lead: 'Positions that unload the disc.',
              text: 'He finds which ones take pressure off the disc and shows you how to use them.',
            },
            {
              lead: 'Core and hip strengthening.',
              text: 'Exercises for the muscles that are supposed to hold your spine steady.',
            },
            {
              lead: 'Posture at the desk and in the car.',
              text: 'He looks at how you sit and drive, then shows you what to change.',
            },
          ],
        },
        {
          type: 'callout',
          text: 'Therapy is not right for every disc. If your signs say it is time to go back to your surgeon, Dr. Edward tells you so plainly.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What to expect',
      blocks: [
        {
          type: 'p',
          text: 'The first visit is an evaluation, one-on-one with Dr. Edward. He examines how you move, tells you what he found in everyday words and sets out the plan: hands-on treatment in the clinic plus a short home program that he updates at every visit.',
        },
        {
          type: 'p',
          text: 'How long it takes depends on your condition and how your body responds. Dr. Edward sets the plan after your evaluation instead of guessing a number of visits up front.',
        },
        {
          type: 'p',
          text: 'Bring your MRI report if you have one, and wear clothes you can move in. Evening and Saturday appointments are available.',
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
              lead: '[Sciatica](/conditions/sciatica/)',
              text: 'Read this if the pain runs down your leg more than it sits in your back.',
            },
            {
              lead: '[Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
              text: 'If surgery does become the right call, this covers care before and after it.',
            },
            {
              lead: '[Is it the disc or the hip?](/blog/sciatica-disc-or-hip/)',
              text: 'How the evaluation tells a disc problem from a hip problem.',
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
          q: 'Do I need surgery?',
          a: 'Most disc pain settles with therapy, so surgery is rarely the first step. Dr. Edward will say plainly if your signs say otherwise and it is time to go back to your surgeon.',
        },
        {
          q: 'Can I come in while it is flared?',
          a: 'Yes, and it is a good time to come. Dr. Edward adjusts the first visit to what you can tolerate, and the goal of that visit is to get you moving more comfortably, not to put you through a workout.',
        },
        {
          q: 'Should I stop exercising?',
          a: "Not completely. Dr. Edward's plan says what is safe this week, and he adjusts it at each visit as you progress.",
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your disc evaluation',
    lead: 'Tell Dr. Edward where it hurts. He will confirm your time by phone or email, usually the same day.',
    service: 'Back pain',
  },
  related: [
    { text: 'Back pain therapy', href: '/back-pain-therapy/' },
    { text: 'All conditions', href: '/conditions/' },
  ],
  schema: {
    condition: {
      name: 'Herniated disc',
      associatedAnatomy: 'Lumbar intervertebral disc',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/back-pain-therapy/',
    },
  },
  notes: [
    'No review on this page: the entry says no review names a disc. Ask the next disc patient.',
    'The plain-words gloss of directional movement testing (which movements ease the pain and which bring it on) is the page writer\'s; Dr. Edward to confirm it describes what he does.',
    'No emergency-symptoms line was written because the entry gives none. Dr. Edward to decide whether he wants one on a disc page.',
    'The parent service link sits in related as "Back pain therapy" (the page name), not as the entry\'s "parent service" text.',
  ],
};

export default page;
