import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-027',
  path: '/conditions/knee-pain/',
  title: 'Knee Pain Physical Therapy in Chatsworth | Dr. Ed Shut, DPT',
  description:
    'Knee pain on stairs, running or after a twist: Dr. Ed finds whether it is the kneecap, the meniscus or the hip and treats it one-on-one in Chatsworth.',
  hero: {
    h1: 'Knee pain physical therapy in Chatsworth',
    lede: 'Your knee hurts on the stairs, when you run or after a twist. Dr. Ed finds out why.',
    image: {
      src: '/img/post-op-physical-therapy-chatsworth.webp',
      alt: 'Knee taping during a physical therapy session in Chatsworth',
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
          lead: 'It hurts going down stairs or when you squat.',
          text: 'Dr. Ed tests the kneecap, and the hip and ankle too.',
        },
        {
          lead: 'Your knee swells after activity.',
          text: 'Tell Dr. Ed when it swells and what you were doing. He tests the knee and the joints above and below it.',
        },
        {
          lead: 'Your imaging shows a meniscus tear.',
          text: 'Dr. Ed tests the meniscus himself and tells you what he finds. If surgery is a question, your surgeon is part of that decision.',
        },
        {
          lead: "You have runner's knee or IT band pain.",
          text: 'Dr. Ed looks at how you land and how you run.',
        },
        {
          lead: 'You were told to live with arthritis.',
          text: 'Dr. Ed tests how the knee moves and how strong your quads and hips are, then builds your plan from that.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Ed does about it',
      blocks: [
        {
          type: 'p',
          text: 'Dr. Ed tests before he treats. He checks the kneecap and the meniscus. He checks the hip and ankle too, because they load the knee.',
        },
        {
          type: 'p',
          text: 'The treatment follows what he finds, and it can include:',
        },
        {
          type: 'ul',
          items: [
            'Hands-on work in the clinic.',
            'Strengthening for the quads and hips.',
            'Work on how you land and how you run.',
            'Taping, where it helps.',
            'Red light therapy or electrical stimulation, where they help.',
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
          text: 'The first visit is an evaluation, one-on-one with Dr. Ed. He examines how you move, works out what is causing the pain and explains it in plain terms.',
        },
        {
          type: 'p',
          text: 'After that you get hands-on treatment in the clinic and a short home program, adjusted each visit as you progress.',
        },
        {
          type: 'p',
          text: 'How long it takes depends on what he finds and how your knee responds, so he does not quote a number of visits up front. He sets the plan after the evaluation.',
        },
        {
          type: 'p',
          text: 'Evening and Saturday appointments are available, so you can come after work.',
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
              lead: '[Orthopedic rehabilitation](/orthopedic-rehabilitation/)',
              text: 'The service for shoulder, elbow, hip, knee and ankle injuries.',
            },
            {
              lead: '[ACL recovery](/conditions/acl-recovery/)',
              text: 'For an ACL injury or recovery after ACL surgery.',
            },
            {
              lead: '[Knee replacement recovery](/conditions/knee-replacement-recovery/)',
              text: 'For recovery after a knee replacement.',
            },
            {
              lead: '[Red light therapy for back and knee pain](/blog/red-light-therapy-back-knee-pain/)',
              text: 'What red light therapy does and does not do.',
            },
          ],
        },
      ],
    },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Questions about knee pain',
      items: [
        {
          q: 'Can a meniscus tear heal without surgery?',
          a: 'Many do with therapy. Whether yours can is a decision for the evaluation and your surgeon. Dr. Ed tests the meniscus himself and tells you what he finds.',
        },
        {
          q: 'Should I stop running?',
          a: 'Usually not completely. The plan sets what is safe this week and is adjusted each visit as you progress. Dr. Ed also looks at how you land and how you run.',
        },
        {
          q: 'Is it my hip, not my knee?',
          a: 'Often partly. The hip and the ankle both load the knee, so the evaluation checks them along with the kneecap and the meniscus. Dr. Ed explains what he finds in plain terms.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your knee evaluation',
    lead: 'Tell Dr. Ed where the knee hurts and what sets it off. He will confirm your time by phone or email, usually the same day.',
    service: 'Orthopedic injury',
  },
  related: [
    { text: 'Orthopedic rehabilitation', href: '/orthopedic-rehabilitation/' },
    { text: 'All conditions', href: '/conditions/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  ],
  schema: {
    condition: {
      name: 'Knee pain',
      associatedAnatomy: 'Knee',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/orthopedic-rehabilitation/',
    },
  },
  notes: [
    "No Google review assigned: none yet. Kate's knee line belongs to the personal training page. Ask the next knee patient.",
    'How long it usually takes: no source gives a usual length of care, so the page says it depends and that Dr. Ed sets the plan after the evaluation. A plain usual range would need Dr. Ed.',
    'The blog post Red light therapy for back and knee pain (P-047) and the two sibling condition pages are planned pages; the links work once they are built.',
  ],
};

export default page;
