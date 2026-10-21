import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-026',
  path: '/conditions/frozen-shoulder/',
  title: 'Frozen Shoulder Physical Therapy in Chatsworth | Dr. Ed, DPT',
  description:
    "Frozen shoulder is slow, but it moves faster with the right hands-on work. Watch Matt's recovery and see how Dr. Ed treats it in Chatsworth. Book now.",
  hero: {
    h1: 'Frozen shoulder physical therapy in Chatsworth',
    lede: 'When your shoulder will not lift and will not reach behind your back, Dr. Ed treats it with hands-on work.',
    image: {
      src: '/img/matt-and-dr-ed-chatsworth-pt.webp',
      width: 720,
      height: 1280,
      alt: 'Dr. Ed shaking hands with Matt, a frozen shoulder patient, at Chatsworth Physical Therapy',
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
          lead: 'It has stiffened over months.',
          text: 'You lost movement a little at a time.',
        },
        {
          lead: 'You cannot reach behind your back or overhead.',
          text: 'Back pockets, bra straps, high shelves and washing your hair are where you notice it.',
        },
        {
          lead: 'It is worse at night.',
          text: 'The shoulder bothers you most once the day is over and you lie down.',
        },
        {
          lead: 'It often starts after 40.',
          text: 'It can also follow an injury or surgery, and diabetes makes it more common.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Ed does about it',
      blocks: [
        {
          type: 'p',
          text: 'Frozen shoulder, also called adhesive capsulitis, moves through three stages ([AAOS OrthoInfo](https://www.orthoinfo.org/diseases--conditions/frozen-shoulder) describes them this way). Dr. Ed shows you which one you are in.',
        },
        {
          type: 'leads',
          items: [
            { lead: 'Freezing.', text: 'The shoulder hurts more and more and begins to lose movement.' },
            { lead: 'Frozen.', text: 'The pain may ease, but the stiffness stays.' },
            { lead: 'Thawing.', text: 'Movement slowly improves.' },
          ],
        },
        {
          type: 'p',
          text: 'Frozen shoulder treatment with Dr. Ed is hands-on, and the aim is to get the shoulder moving. The work includes:',
        },
        {
          type: 'ul',
          items: [
            '**End-range mobility work** at the point where the shoulder stops, to win back a little more movement.',
            "**Joint mobilization**, where Dr. Ed's hands move the joint through small, controlled motions.",
            '**External rotation** work, turning the arm outward a little further as the shoulder allows.',
            '**Cuff and scapular strengthening** for the rotator cuff and the muscles that move the shoulder blade.',
            '**A home program** to keep the work going between visits.',
          ],
        },
        {
          type: 'p',
          text: 'Frozen shoulder is slow, and Dr. Ed says so plainly. Therapy shortens the stiff and thawing stages.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What to expect',
      blocks: [
        {
          type: 'p',
          text: 'You start with an evaluation. Dr. Ed examines how your shoulder moves, finds what is limiting it and explains it in plain terms. You work with him one-on-one.',
        },
        {
          type: 'p',
          text: 'After that you get a plan you can follow at home, a short program that Dr. Ed adjusts at each visit as you progress.',
        },
        {
          type: 'p',
          text: 'This is not a one-visit fix. The pace depends on the stage your shoulder is in and how it responds, so Dr. Ed does not quote a number of visits up front.',
        },
        {
          type: 'p',
          text: 'Evening and Saturday appointments are available, so treatment can fit around work.',
        },
      ],
    },
    {
      kind: 'review',
      review: { key: 'matthew-s', context: 'frozen shoulder' },
      more: "[Watch Matt's 42-second story on the homepage](/#reviews).",
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
              text: 'The service behind this page: shoulder, elbow, hip, knee and ankle injuries.',
            },
            {
              lead: '[Shoulder pain and rotator cuff](/conditions/shoulder-pain-rotator-cuff/)',
              text: 'Shoulder pain and rotator cuff problems, and how Dr. Ed treats them.',
            },
            {
              lead: '[Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
              text: 'Prehab before surgery and recovery after shoulder surgery.',
            },
          ],
        },
      ],
    },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Frozen shoulder questions',
      items: [
        {
          q: 'How long does frozen shoulder last?',
          a: 'Untreated, frozen shoulder lasts months to a year or more. Physical therapy shortens the stiff and thawing stages. How long yours takes depends on the stage and how the shoulder responds.',
        },
        {
          q: 'Will the treatment hurt?',
          a: 'End-range work is uncomfortable for a moment, because it takes the shoulder to the edge of its movement. Nothing is forced. If it is too much, tell Dr. Ed and he stops.',
        },
        {
          q: 'Do I need a cortisone shot first?',
          a: 'Sometimes a shot helps with pain. Whether to have one is a conversation with your physician. Therapy continues either way.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your frozen shoulder evaluation',
    lead: 'Tell Dr. Ed what your shoulder will not do. He will confirm your time by phone or email, usually the same day.',
    service: 'Orthopedic injury',
  },
  related: [
    { text: 'Orthopedic rehabilitation', href: '/orthopedic-rehabilitation/' },
    { text: 'All conditions', href: '/conditions/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
    { text: 'Reviews', href: '/reviews/' },
  ],
  schema: {
    condition: {
      name: 'Frozen shoulder',
      alternateName: ['Adhesive capsulitis'],
      associatedAnatomy: 'Shoulder',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/orthopedic-rehabilitation/',
    },
  },
  notes: [
    'Build lead: the three stages are cited to AAOS OrthoInfo (https://www.orthoinfo.org/diseases--conditions/frozen-shoulder), re-fetched 21 Oct 2026; the stage sentences match its wording. No durations used.',
    "Matt's clip: the build default applies. The quote is on this page and the video stays on the homepage only, with one link to it in the review block. The entry's open question about the clip is carried in the build log, not on the page.",
    'The entry asks for the three stages explained but names only the stiff and thawing stages. The page uses freezing, frozen and thawing in plain words with no durations. Dr. Ed to confirm the wording.',
    'No frozen shoulder blog post exists in pages.json, so the Related section has no blog link.',
    'The shoot list item, a shoulder session, has no PHOTO line in the entry, so no placeholder is placed. The hero uses the Matt and Dr. Ed photo as the decisions file says.',
    'Diabetes is named once, as the entry names it. Adhesive capsulitis appears once in the copy and as the schema alternate name, because the entry lists it as a supporting keyword.',
  ],
};

export default page;
