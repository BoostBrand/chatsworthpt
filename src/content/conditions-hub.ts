import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-021',
  path: '/conditions/',
  title: 'Conditions We Treat | Chatsworth Physical Therapy',
  description:
    'Find your condition, from sciatica and frozen shoulder to vertigo and knee replacement recovery, and see how Dr. Ed treats it in Chatsworth. Book now.',
  hero: {
    h1: 'Conditions we treat at Chatsworth Physical Therapy',
    lede: 'Find your condition, read how Dr. Ed treats it, then book.',
    book: 'Book my evaluation',
  },
  sections: [
    {
      kind: 'cards',
      h2: 'Conditions by area',
      intro: 'Open the page that matches your diagnosis. Each card also links to the service it belongs to.',
      cards: [],
      groups: [
        {
          title: 'Back and neck',
          cards: [
            {
              title: 'Sciatica',
              href: '/conditions/sciatica/',
              text: 'Pain runs from your low back down your leg.',
              meta: 'Part of [Back pain therapy](/back-pain-therapy/)',
            },
            {
              title: 'Herniated disc',
              href: '/conditions/herniated-disc/',
              text: 'You have been told a disc is behind your back pain.',
              meta: 'Part of [Back pain therapy](/back-pain-therapy/)',
            },
            {
              title: 'Neck pain and pinched nerve',
              href: '/conditions/neck-pain/',
              text: 'Your neck hurts, with or without a pinched nerve.',
              meta: 'Part of [Back pain therapy](/back-pain-therapy/)',
            },
          ],
        },
        {
          title: 'Shoulder',
          cards: [
            {
              title: 'Shoulder pain and rotator cuff',
              href: '/conditions/shoulder-pain-rotator-cuff/',
              text: 'Your shoulder hurts, or you were told it is the rotator cuff.',
              meta: 'Part of [Orthopedic rehabilitation](/orthopedic-rehabilitation/)',
            },
            {
              title: 'Frozen shoulder',
              href: '/conditions/frozen-shoulder/',
              text: 'Your shoulder has gone stiff and will not move the way it used to.',
              meta: 'Part of [Orthopedic rehabilitation](/orthopedic-rehabilitation/)',
            },
          ],
        },
        {
          title: 'Knee and hip',
          cards: [
            {
              title: 'Knee pain',
              href: '/conditions/knee-pain/',
              text: 'Knee pain is getting in the way of walking, stairs or exercise.',
              meta: 'Part of [Orthopedic rehabilitation](/orthopedic-rehabilitation/)',
            },
            {
              title: 'ACL recovery',
              href: '/conditions/acl-recovery/',
              text: 'You injured your ACL, or you are recovering from ACL surgery.',
              meta: 'Part of [Sports injury recovery](/sports-injury-recovery/)',
            },
            {
              title: 'Knee replacement recovery',
              href: '/conditions/knee-replacement-recovery/',
              text: 'You have had a knee replacement, or one is coming up.',
              meta: 'Part of [Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
            },
            {
              title: 'Hip replacement recovery',
              href: '/conditions/hip-replacement-recovery/',
              text: 'You are recovering from a hip replacement, or getting ready for one.',
              meta: 'Part of [Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
            },
          ],
        },
        {
          title: 'Foot and ankle',
          cards: [
            {
              title: 'Ankle sprain',
              href: '/conditions/ankle-sprain/',
              text: 'You rolled your ankle and it still hurts or feels unsteady.',
              meta: 'Part of [Sports injury recovery](/sports-injury-recovery/)',
            },
            {
              title: 'Plantar fasciitis',
              href: '/conditions/plantar-fasciitis/',
              text: 'Your heel or foot hurts, or you were told it is plantar fasciitis.',
              meta: 'Part of [Orthopedic rehabilitation](/orthopedic-rehabilitation/)',
            },
          ],
        },
        {
          title: 'Balance',
          cards: [
            {
              title: 'Vertigo and BPPV',
              href: '/conditions/vertigo-bppv/',
              text: 'The room spins, or you feel dizzy and off balance.',
              meta: 'Part of [Balance and fall prevention](/balance-and-fall-prevention/)',
            },
          ],
        },
      ],
    },
    {
      kind: 'conditions',
      h2: 'Treated inside a service page',
      intro:
        'These sit inside a service page instead of having a page of their own. Follow a link to read how Dr. Ed treats them.',
      items: [
        {
          text: "Parkinson's, MS and stroke",
          href: '/neurological-rehabilitation/',
          note: 'Also spinal cord injury and brain injury.',
        },
        {
          text: 'Tennis elbow and shin splints',
          href: '/sports-injury-recovery/',
          note: 'Also Achilles pain.',
        },
        {
          text: 'Arthritis and fibromyalgia',
          href: '/pain-management/',
        },
        {
          text: 'Growth-plate pain',
          href: '/pediatric-physical-therapy/',
          note: 'In school-age kids and teens.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Not sure what you have',
      blocks: [
        {
          type: 'callout',
          text: 'Not sure which one you need? Call (818) 749-3205 and Dr. Ed will tell you in two minutes.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Ed the name of your condition, or just where it hurts, and what it keeps you from doing. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'FAQs', href: '/faqs/' },
  ],
  notes: [
    'Entry item 3 says each item links to its section on the service page. The build lead gave page-level paths, so each item links to the service page. Anchors can be added once those pages have section ids.',
    'The cards section uses groups only and leaves cards empty, because the types file requires the cards field.',
    'No image or placeholder in the hero, as the build lead decided. The default stars line and call button are kept.',
    'The twelve card lines are plain descriptions of each situation written from the page names. Dr. Ed or the build lead should glance over them.',
  ],
};

export default page;
