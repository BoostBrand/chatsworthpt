import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-025',
  path: '/conditions/shoulder-pain-rotator-cuff/',
  title: 'Shoulder Pain and Rotator Cuff Physical Therapy | Chatsworth',
  description:
    'Shoulder pain, a rotator cuff strain or tear, impingement: see how Dr. Ed treats shoulders one-on-one in Chatsworth, before and after surgery. Book now.',
  hero: {
    h1: 'Shoulder pain and rotator cuff physical therapy in Chatsworth',
    lede: 'When reaching overhead hurts or the shoulder wakes you at night, Dr. Ed finds out why and treats it himself.',
    image: {
      src: '/img/hero-dr-ed-treating-patient-chatsworth.webp',
      alt: 'Dr. Ed Shut guiding a patient through a back exercise on the treatment table at Chatsworth Physical Therapy',
      width: 1800,
      height: 1125,
      srcMobile: '/img/hero-dr-ed-treating-patient-chatsworth-mobile.webp',
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
          lead: 'Reaching overhead or behind your back hurts.',
          text: 'A high shelf, a jacket sleeve, a seat belt. Movements you never thought about now stop you partway.',
        },
        {
          lead: 'The shoulder wakes you at night.',
          text: 'Rolling onto that side sets it off, or the ache keeps you from getting back to sleep.',
        },
        {
          lead: 'Imaging shows a rotator cuff tear, and a surgeon said to try therapy first.',
          text: 'Dr. Ed tests the shoulder and gives you an honest read on what therapy can do.',
        },
        {
          lead: 'You are recovering from a rotator cuff repair.',
          text: 'Your surgeon wrote the protocol. Dr. Ed works from it.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Ed does about it',
      blocks: [
        {
          type: 'p',
          text: 'Dr. Ed treats shoulder pain, rotator cuff strains and tears, and impingement, before and after surgery.',
        },
        {
          type: 'leads',
          items: [
            {
              lead: 'Testing the rotator cuff and the shoulder blade.',
              text: 'Dr. Ed explains what he found in plain terms.',
            },
            {
              lead: 'Hands-on work.',
              text: 'He works on the shoulder with his hands to ease the pain and help it move.',
            },
            {
              lead: 'Strengthening, in the right order.',
              text: 'He builds up the rotator cuff and the muscles that move the shoulder blade. Dr. Ed sets the order for your shoulder.',
            },
            {
              lead: 'Overhead work for throwers and swimmers.',
              text: 'If you throw or swim, he looks at how the arm moves overhead and works on it.',
            },
            {
              lead: 'After surgery.',
              text: "Bring your surgeon's post-op protocol and your discharge paperwork to the first visit. Dr. Ed works from your surgeon's instructions, not a generic plan. More on [rotator cuff repair rehab](/pre-post-surgical-rehabilitation/).",
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
          text: '**Evaluation first.** Dr. Ed tests the shoulder, tells you what he found and sets the plan with you.',
        },
        {
          type: 'p',
          text: '**One-on-one.** You work with Dr. Ed himself: hands-on treatment in the clinic, and a home program for between visits. He adjusts the program as the shoulder improves.',
        },
        {
          type: 'p',
          text: '**How long it takes.** It depends on what is injured. A strain usually takes weeks. A repair usually takes months. Dr. Ed will not quote a number of visits before he has examined you.',
        },
        {
          type: 'p',
          text: '**Evenings and Saturdays.** Book an evening or Saturday slot if that fits your week.',
        },
      ],
    },
    {
      kind: 'review',
      review: { key: 'linda', context: 'shoulder and neck mobility', sentences: [0, 2] },
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
              text: 'The service page for shoulder, elbow, hip, knee and ankle injuries.',
            },
            {
              lead: '[Frozen shoulder](/conditions/frozen-shoulder/)',
              text: 'Another shoulder problem, with its own page.',
            },
            {
              lead: '[Neck pain and pinched nerve](/conditions/neck-pain/)',
              text: 'If the pain is in your neck, or a nerve feels pinched, start here.',
            },
          ],
        },
      ],
    },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Questions about shoulder rehab',
      items: [
        {
          q: 'Do all rotator cuff tears need surgery?',
          a: 'No. Many partial tears do well with therapy. After testing your shoulder, Dr. Ed gives you an honest read on yours.',
        },
        {
          q: 'How long does shoulder rehab take?',
          a: 'It depends on the tissue that is injured. Rehab for a strain usually takes weeks, and after a repair it usually takes months. Dr. Ed gives you a plan after your evaluation, not a guess up front.',
        },
        {
          q: 'Is this frozen shoulder?',
          a: '[Frozen shoulder](/conditions/frozen-shoulder/) is a different problem from a rotator cuff injury and has its own page. If you are not sure which one you have, Dr. Ed tests the shoulder and tells you what he finds.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your shoulder evaluation',
    lead: 'Tell Dr. Ed where your shoulder hurts and what it will not do. He will confirm your time by phone or email, usually the same day.',
    service: 'Orthopedic injury',
  },
  related: [
    { text: 'Orthopedic rehabilitation', href: '/orthopedic-rehabilitation/' },
    { text: 'All conditions', href: '/conditions/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  ],
  schema: {
    condition: {
      name: 'Rotator cuff injury',
      associatedAnatomy: 'Shoulder',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/orthopedic-rehabilitation/',
    },
  },
  notes: [
    'No shoulder blog post exists in the plan, so the entry\'s "one blog post where it exists" is left out of Related pages.',
    'Linda review is cut to her first three sentences. The fourth is general and names manipulation, a technique no approved page lists. Remove the cut to show all four.',
    'Hero is the shared hero frame until the shoulder session is shot. Its alt text describes a back exercise because that is what the photo shows; replace both together.',
    'The After surgery card uses the approved post-op wording because the entry points to post-op protocol work.',
    'Timing wording follows the entry: weeks for a strain, months after a repair, no number of visits quoted.',
  ],
};

export default page;
