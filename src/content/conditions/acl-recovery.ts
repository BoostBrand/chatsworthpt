import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-028',
  path: '/conditions/acl-recovery/',
  title: 'ACL Recovery Physical Therapy in Chatsworth | Dr. Edward',
  description:
    'ACL rehab in Chatsworth with Dr. Edward Shut, DPT: prehab, the stages after reconstruction and the tests you pass before you play again. Book now.',
  hero: {
    h1: 'ACL recovery physical therapy in Chatsworth, before and after surgery',
    lede: 'Rehab in stages, and the tests you pass before you play again.',
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
          lead: 'Your ACL is torn and surgery is coming.',
          text: 'You can start with Dr. Edward before the operation.',
        },
        {
          lead: 'You are in the weeks after reconstruction.',
          text: "You have your surgeon's protocol and want someone to work through it with you.",
        },
        {
          lead: 'You are about nine months out and not sure you are ready.',
          text: 'Dr. Edward tests the knee against your sport, not just whether it hurts.',
        },
        {
          lead: 'You are the parent of a teen athlete.',
          text: 'Teenagers are welcome, and a parent is in the room for every visit.',
        },
        {
          lead: 'You have a history of ACL injury and want the other knee protected.',
          text: 'Dr. Edward builds a prevention program for the other side.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Edward does about it',
      blocks: [
        {
          type: 'p',
          text: "Dr. Edward works from your surgeon's protocol, not a generic plan. The rehab runs in stages, and you are tested before each one.",
        },
        {
          type: 'leads',
          items: [
            { lead: 'Before surgery.', text: 'Prehab, so the work starts before the operation.' },
            {
              lead: 'Early on.',
              text: 'Range of motion, and getting your quad, the muscle on the front of your thigh, working again.',
            },
            { lead: 'In the middle.', text: 'Strength and balance.' },
            {
              lead: 'Before you go back.',
              text: 'Single-leg hop and cutting tests, measured against what your sport demands.',
            },
            {
              lead: 'The other knee.',
              text: 'After an ACL injury, the same testing becomes a prevention program for the other side.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Pain going away is not the same as being ready to play. The injury that comes back is usually the one that was rested, felt fine and was never retested. You know where you are at every visit and what the next gate is.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What to expect',
      blocks: [
        {
          type: 'p',
          text: 'The first visit is an evaluation. Dr. Edward looks at the knee and at everything above and below it, including how you land, cut and squat. He explains what he found and what the plan is, with a realistic line on when you can train and when you can play.',
        },
        {
          type: 'p',
          text: 'You work one-on-one with Dr. Edward, start to finish. Treatment is hands-on, plus a short home program that changes as you progress. Evening and Saturday appointments are available.',
        },
        {
          type: 'p',
          text: 'ACL recovery takes months. How many visits you need depends on how your knee responds, so Dr. Edward sets the plan after the evaluation rather than guessing up front.',
        },
        {
          type: 'p',
          text: "Read [Maggie and Mark's review on the post-op page](/pre-post-surgical-rehabilitation/), from a patient who had ACL reconstruction.",
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
              lead: '[Sports injury recovery](/sports-injury-recovery/)',
              text: 'Sprains, strains, ACL, rotator cuff and return to sport.',
            },
            {
              lead: '[Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
              text: 'Prehab before surgery and recovery after knee, hip and shoulder surgery.',
            },
            {
              lead: '[Return to sport after ACL surgery: the tests before you play](/blog/return-to-sport-after-acl-surgery/)',
              text: 'The tests you pass before you play, explained.',
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
          q: 'When can I start after surgery?',
          a: "When your surgeon says so, usually within the first one to two weeks. Bring your surgeon's protocol and discharge paperwork to the first visit.",
        },
        {
          q: 'How long until I play?',
          a: 'It is a nine-to-twelve-month road for an athlete, done in stages and tested before each one. Dr. Edward tells you plainly when you pass and what is still missing.',
        },
        {
          q: 'Do you do prehab?',
          a: 'Yes. Dr. Edward does prehab for people waiting on ACL surgery. Book before your surgery date if you can, so there is no gap afterward.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your ACL evaluation',
    lead: 'Tell Dr. Edward where you are in the process. He will confirm your time by phone or email, usually the same day.',
    service: 'Sports injury',
  },
  related: [
    { text: 'Sports injury recovery', href: '/sports-injury-recovery/' },
    { text: 'All conditions', href: '/conditions/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  ],
  schema: {
    condition: {
      name: 'ACL tear',
      associatedAnatomy: 'Anterior cruciate ligament of the knee',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/sports-injury-recovery/',
    },
  },
  notes: [
    "Review: none on this page by design. Maggie and Mark's ACL review sits on the post-op page and is linked in 'What to expect', never quoted.",
    "FAQ 'How long until I play?' uses the approved ACL line from the decisions file ('a nine-to-twelve-month road for an athlete, done in stages and tested before each one'). The entry's own answer says 'for most athletes'.",
    'Hero photo is the ankle frame (sports-injury-rehab-chatsworth.webp) until a knee strength frame exists.',
    "The entry's Related item names two sibling conditions, but its links-out list and the decisions file name none, so none are linked.",
    'Ask the next ACL athlete for a Google review.',
  ],
};

export default page;
