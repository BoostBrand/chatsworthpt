import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-029',
  path: '/conditions/knee-replacement-recovery/',
  title: 'Knee Replacement Physical Therapy Chatsworth | Dr. Edward',
  description:
    "After a knee replacement, see how Dr. Edward Shut, DPT works on bending, straightening and walking, one-on-one in Chatsworth. Book an evaluation.",
  hero: {
    h1: 'Knee replacement recovery: physical therapy in Chatsworth',
    lede: 'I had my knee replaced. Now I want to walk, take stairs and get in the car without thinking about it.',
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
          lead: 'You went home with a new knee and a sheet of exercises.',
          text: 'A sheet cannot watch how you do them, or change as your knee changes.',
        },
        {
          lead: 'The knee is stiff and not getting better.',
          text: 'Bending and straightening have stalled, or the swelling is not going down.',
        },
        {
          lead: 'Your limp has become normal.',
          text: 'You stopped noticing it, but it is still something to work on.',
        },
        {
          lead: 'The second knee is coming up.',
          text: 'You want it to go better this time. Dr. Edward also sees patients before surgery.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Edward does about it',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: 'Range of motion and swelling, early.',
              text: 'Getting the knee moving and the swelling down comes first, inside what your surgeon allows.',
            },
            {
              lead: 'Bend and straighten.',
              text: 'For everyday function, Dr. Edward works toward about 110 degrees of bend and a knee that straightens fully, to 0 degrees or as close to it as possible.',
            },
            {
              lead: 'Gait retraining.',
              text: 'He watches you walk, finds where the pattern is off and retrains it.',
            },
            {
              lead: 'Quad strength.',
              text: 'Dr. Edward builds it with exercise, and with electrical stimulation (NMES) where it helps.',
            },
            {
              lead: 'Stairs and the car.',
              text: 'You practice what the knee has to do every day: stairs, and getting in and out of the car.',
            },
            {
              lead: 'Walking, gardening, golf.',
              text: 'These are what the work builds toward. Tell Dr. Edward what you want the knee back for.',
            },
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
          text: "Bring your surgeon's post-op protocol and your discharge paperwork to the first visit. Dr. Edward works from your surgeon's instructions, not a generic plan. That visit is an evaluation: he examines how the knee moves and how you walk, then explains what he found in plain terms.",
        },
        {
          type: 'p',
          text: 'From there, treatment is hands-on and one-on-one, with a short home program. Both are adjusted each visit as you progress.',
        },
        {
          type: 'p',
          text: 'How long recovery takes depends on your knee and how your body responds. Dr. Edward does not quote a number of visits up front. He sets the plan after the evaluation and tells you plainly what to expect.',
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
              lead: '[Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
              text: 'Prehab before surgery, and recovery after knee, hip and shoulder surgery.',
            },
            {
              lead: '[Hip replacement recovery](/conditions/hip-replacement-recovery/)',
              text: 'If your surgery was on the hip instead.',
            },
            {
              lead: '[Knee replacement recovery: the first six weeks](/blog/knee-replacement-recovery-first-six-weeks/)',
              text: 'For the early weeks after surgery.',
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
          q: 'How soon should I start?',
          a: 'When your surgeon says so, which for most joint replacements and repairs is within the first one to two weeks. Book the evaluation before the surgery date if you can, so there is no gap.',
        },
        {
          q: 'Does Medicare cover it?',
          a: 'Yes. We accept Medicare, and Medicare patients need a referral from the start, so ask your surgeon for one before your first visit. See the [insurance and cost](/insurance-and-cost/) page for more.',
        },
        {
          q: 'How long until I walk without a limp?',
          a: 'It depends on your knee and how your body responds, so Dr. Edward will not guess before he has seen you. At the evaluation he gives you a realistic answer. Gait retraining is part of the plan from there.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your knee replacement evaluation',
    lead: 'Tell Dr. Edward when you had surgery, or when it is booked. He will confirm your time by phone or email, usually the same day.',
    service: 'Before or after surgery',
  },
  related: [
    { text: 'Pre and post-op physical therapy', href: '/pre-post-surgical-rehabilitation/' },
    { text: 'All conditions', href: '/conditions/' },
  ],
  schema: {
    condition: {
      name: 'Knee replacement recovery',
      associatedAnatomy: 'Knee',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/pre-post-surgical-rehabilitation/',
    },
  },
  notes: [
    'No review section: the entry assigns none (Susan is committed to the balance page).',
    'The degree targets marker sits in the Bend and straighten item of What Dr. Edward does about it. No degree numbers anywhere on the page.',
    'Related lists one sibling condition, Hip replacement recovery, as the decisions file says. The entry text says two siblings but names only one.',
    'The Medicare FAQ uses the site-wide word referral where the entry says prescription.',
    "Build lead: the body line 'The first six weeks decide your range of motion for years' was taken out (a medical claim no source on hand backs); the blueprint meta description still says it, flagged for Vlad.",
    "Neither FACTS nor the entry gives a usual recovery time, so What to expect says it varies and is set after the evaluation. Add Dr. Edward's own plain words if he gives a usual range.",
  ],
};

export default page;
