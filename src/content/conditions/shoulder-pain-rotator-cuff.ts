import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-025',
  path: '/conditions/shoulder-pain-rotator-cuff/',
  title: 'Shoulder Pain and Rotator Cuff Physical Therapy | Chatsworth',
  description:
    'Shoulder pain, a rotator cuff strain or tear, impingement: see how Dr. Edward treats shoulders one-on-one in Chatsworth, before and after surgery. Book.',
  hero: {
    h1: 'Shoulder pain and rotator cuff physical therapy in Chatsworth',
    lede: 'When reaching overhead hurts or the shoulder wakes you at night, Dr. Edward finds out why and treats it himself.',
    image: {
      src: '/img/shoulder-pain-anatomy-illustration-1600.webp',
      alt: 'Illustration of a seated man holding his upper arm, with an anatomy overlay highlighting the shoulder.',
      width: 1600,
      height: 893,
      srcSet: [
        { src: '/img/shoulder-pain-anatomy-illustration-640.webp', width: 640 },
        { src: '/img/shoulder-pain-anatomy-illustration-960.webp', width: 960 },
        { src: '/img/shoulder-pain-anatomy-illustration-1600.webp', width: 1600 },
      ],
      whole: true,
      stock: {
        title: 'Shoulder pain and anatomy illustration',
        description: 'Illustration of a seated man holding his upper arm, with an anatomy overlay highlighting the shoulder.',
        creditText: 'Muhammed - stock.adobe.com',
        acquireLicensePage: 'https://stock.adobe.com/images/man-suffering-shoulder-injury-after-workout-with-shoulder-anatomy-overlay-in-gym/2088849649',
        license: 'https://www.adobe.com/go/stockterms',
        aiLabel: true,
      },
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
          text: 'Dr. Edward tests the shoulder and gives you an honest read on what therapy can do.',
        },
        {
          lead: 'You are recovering from a rotator cuff repair.',
          text: 'Your surgeon wrote the protocol. Dr. Edward works from it.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Edward does about it',
      blocks: [
        {
          type: 'p',
          text: 'Dr. Edward treats shoulder pain, rotator cuff strains and tears, and impingement, before and after surgery.',
        },
        {
          type: 'leads',
          items: [
            {
              lead: 'Testing the rotator cuff and the shoulder blade.',
              text: 'Dr. Edward explains what he found in plain terms.',
            },
            {
              lead: 'Hands-on work.',
              text: 'He works on the shoulder with his hands to ease the pain and help it move.',
            },
            {
              lead: 'Strengthening, in the right order.',
              text: 'He builds up the rotator cuff and the muscles that move the shoulder blade. Dr. Edward sets the order for your shoulder.',
            },
            {
              lead: 'Overhead work for throwers and swimmers.',
              text: 'If you throw or swim, he looks at how the arm moves overhead and works on it.',
            },
            {
              lead: 'After surgery.',
              text: "Bring your surgeon's post-op protocol and your discharge paperwork to the first visit. Dr. Edward works from your surgeon's instructions, not a generic plan. More on [rotator cuff repair rehab](/pre-post-surgical-rehabilitation/).",
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
          text: '**Evaluation first.** Dr. Edward tests the shoulder, tells you what he found and sets the plan with you.',
        },
        {
          type: 'p',
          text: '**One-on-one.** You work with Dr. Edward himself: hands-on treatment in the clinic, and a home program for between visits. He adjusts the program as the shoulder improves.',
        },
        {
          type: 'p',
          text: '**How long it takes.** It depends on what is injured. A strain usually takes weeks. A repair usually takes months. Dr. Edward will not quote a number of visits before he has examined you.',
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
          a: 'No. Many partial tears do well with therapy. After testing your shoulder, Dr. Edward gives you an honest read on yours.',
        },
        {
          q: 'How long does shoulder rehab take?',
          a: 'It depends on the tissue that is injured. Rehab for a strain usually takes weeks, and after a repair it usually takes months. Dr. Edward gives you a plan after your evaluation, not a guess up front.',
        },
        {
          q: 'Is this frozen shoulder?',
          a: '[Frozen shoulder](/conditions/frozen-shoulder/) is a different problem from a rotator cuff injury and has its own page. If you are not sure which one you have, Dr. Edward tests the shoulder and tells you what he finds.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your shoulder evaluation',
    lead: 'Tell Dr. Edward where your shoulder hurts and what it will not do. He will confirm your time by phone or email, usually the same day.',
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
    'Hero (25 Oct 2026): Adobe Stock 2088849649, the picture Dr. Edward chose for this page in his website email of 24 Oct 2026, 8:36pm. Shown whole, never cropped, at 640, 960 and 1600 px. Standard license on Vlad\'s Adobe Stock account; credit Muhammed - stock.adobe.com; the Adobe page labels it Generated with AI. A stock illustration, not Dr. Edward or a patient.',
    'The After surgery card uses the approved post-op wording because the entry points to post-op protocol work.',
    'Timing wording follows the entry: weeks for a strain, months after a repair, no number of visits quoted.',
  ],
};

export default page;
