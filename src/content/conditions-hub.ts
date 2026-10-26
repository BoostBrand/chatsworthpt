import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-021',
  path: '/conditions/',
  title: 'Conditions We Treat | Chatsworth Physical Therapy',
  description:
    'Find your condition, from sciatica and frozen shoulder to vertigo and knee replacement recovery, and see how Dr. Edward treats it in Chatsworth. Book now.',
  hero: {
    h1: 'Conditions we treat at Chatsworth Physical Therapy',
    lede: 'Find your condition, read how Dr. Edward treats it, then book.',
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
              image: {
                "src": "/img/sciatica-nerve-pain-illustration-1600.webp",
                "alt": "Illustration of a seated man holding his lower back, with a highlighted nerve path extending into his leg.",
                "width": 1600,
                "height": 893,
                "srcSet": [
                  {
                    "src": "/img/sciatica-nerve-pain-illustration-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/sciatica-nerve-pain-illustration-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/sciatica-nerve-pain-illustration-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
            },
            {
              title: 'Herniated disc',
              href: '/conditions/herniated-disc/',
              text: 'You have been told a disc is behind your back pain.',
              meta: 'Part of [Back pain therapy](/back-pain-therapy/)',
              image: {
                "src": "/img/lumbar-herniated-disc-illustration-1600.webp",
                "alt": "Lumbar spine illustration with a protruding disc and nearby nerve highlighted.",
                "width": 1600,
                "height": 893,
                "srcSet": [
                  {
                    "src": "/img/lumbar-herniated-disc-illustration-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/lumbar-herniated-disc-illustration-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/lumbar-herniated-disc-illustration-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
            },
            {
              title: 'Neck pain and pinched nerve',
              href: '/conditions/neck-pain/',
              text: 'Your neck hurts, with or without a pinched nerve.',
              meta: 'Part of [Back pain therapy](/back-pain-therapy/)',
              image: {
                "src": "/img/cervical-spine-pinched-nerve-illustration-1600.webp",
                "alt": "Rear-view illustration of neck vertebrae, muscles and nerves, with one area highlighted in red.",
                "width": 1600,
                "height": 893,
                "srcSet": [
                  {
                    "src": "/img/cervical-spine-pinched-nerve-illustration-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/cervical-spine-pinched-nerve-illustration-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/cervical-spine-pinched-nerve-illustration-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
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
              image: {
                "src": "/img/shoulder-pain-anatomy-illustration-1600.webp",
                "alt": "Illustration of a seated man holding his upper arm, with an anatomy overlay highlighting the shoulder.",
                "width": 1600,
                "height": 893,
                "srcSet": [
                  {
                    "src": "/img/shoulder-pain-anatomy-illustration-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/shoulder-pain-anatomy-illustration-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/shoulder-pain-anatomy-illustration-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
            },
            {
              title: 'Frozen shoulder',
              href: '/conditions/frozen-shoulder/',
              text: 'Your shoulder has gone stiff and will not move the way it used to.',
              meta: 'Part of [Orthopedic rehabilitation](/orthopedic-rehabilitation/)',
              image: {
                "src": "/img/frozen-shoulder-joint-comparison-1600.webp",
                "alt": "Diagram comparing a normal shoulder joint with a frozen shoulder, with joint-capsule and movement labels.",
                "width": 1600,
                "height": 893,
                "srcSet": [
                  {
                    "src": "/img/frozen-shoulder-joint-comparison-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/frozen-shoulder-joint-comparison-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/frozen-shoulder-joint-comparison-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
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
              image: {
                "src": "/img/knee-pain-anatomy-illustration-1600.webp",
                "alt": "Illustration of a standing person holding one knee, with a highlighted knee-joint anatomy overlay.",
                "width": 1600,
                "height": 893,
                "srcSet": [
                  {
                    "src": "/img/knee-pain-anatomy-illustration-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/knee-pain-anatomy-illustration-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/knee-pain-anatomy-illustration-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
            },
            {
              title: 'ACL recovery',
              href: '/conditions/acl-recovery/',
              text: 'You injured your ACL, or you are recovering from ACL surgery.',
              meta: 'Part of [Sports injury recovery](/sports-injury-recovery/)',
              image: {
                "src": "/img/acl-knee-injury-football-illustration-1600.webp",
                "alt": "Illustration of a football player beside an enlarged knee joint with the ACL injury highlighted.",
                "width": 1600,
                "height": 893,
                "srcSet": [
                  {
                    "src": "/img/acl-knee-injury-football-illustration-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/acl-knee-injury-football-illustration-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/acl-knee-injury-football-illustration-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
            },
            {
              title: 'Knee replacement recovery',
              href: '/conditions/knee-replacement-recovery/',
              text: 'You have had a knee replacement, or one is coming up.',
              meta: 'Part of [Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
              image: {
                "src": "/img/knee-replacement-joint-comparison-1600.webp",
                "alt": "Side-by-side illustration of a damaged knee joint and a knee-replacement implant.",
                "width": 1600,
                "height": 1067,
                "srcSet": [
                  {
                    "src": "/img/knee-replacement-joint-comparison-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/knee-replacement-joint-comparison-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/knee-replacement-joint-comparison-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
            },
            {
              title: 'Hip replacement recovery',
              href: '/conditions/hip-replacement-recovery/',
              text: 'You are recovering from a hip replacement, or getting ready for one.',
              meta: 'Part of [Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
              image: {
                "src": "/img/hip-replacement-joint-comparison-1600.webp",
                "alt": "Diagram comparing an arthritic hip joint with a total hip-replacement implant.",
                "width": 1600,
                "height": 893,
                "srcSet": [
                  {
                    "src": "/img/hip-replacement-joint-comparison-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/hip-replacement-joint-comparison-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/hip-replacement-joint-comparison-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
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
              image: {
                "src": "/img/basketball-ankle-sprain-illustration-1600.webp",
                "alt": "Illustration of a basketball player seated on a court holding an ankle, with the painful area highlighted.",
                "width": 1600,
                "height": 900,
                "srcSet": [
                  {
                    "src": "/img/basketball-ankle-sprain-illustration-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/basketball-ankle-sprain-illustration-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/basketball-ankle-sprain-illustration-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
            },
            {
              title: 'Plantar fasciitis',
              href: '/conditions/plantar-fasciitis/',
              text: 'Your heel or foot hurts, or you were told it is plantar fasciitis.',
              meta: 'Part of [Orthopedic rehabilitation](/orthopedic-rehabilitation/)',
              image: {
                "src": "/img/plantar-fasciitis-heel-pain-illustration-1600.webp",
                "alt": "Illustration of a person holding the back of one foot, with the heel highlighted in red.",
                "width": 1600,
                "height": 893,
                "srcSet": [
                  {
                    "src": "/img/plantar-fasciitis-heel-pain-illustration-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/plantar-fasciitis-heel-pain-illustration-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/plantar-fasciitis-heel-pain-illustration-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
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
              image: {
                "src": "/img/vertigo-bppv-dizziness-illustration-1600.webp",
                "alt": "Illustration of a woman holding her temples, with circular light trails suggesting dizziness.",
                "width": 1600,
                "height": 897,
                "srcSet": [
                  {
                    "src": "/img/vertigo-bppv-dizziness-illustration-640.webp",
                    "width": 640
                  },
                  {
                    "src": "/img/vertigo-bppv-dizziness-illustration-960.webp",
                    "width": 960
                  },
                  {
                    "src": "/img/vertigo-bppv-dizziness-illustration-1600.webp",
                    "width": 1600
                  }
                ],
                "whole": true
              },
            },
          ],
        },
      ],
    },
    {
      kind: 'conditions',
      h2: 'Treated inside a service page',
      intro:
        'These sit inside a service page instead of having a page of their own. Follow a link to read how Dr. Edward treats them.',
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
          text: 'Not sure which one you need? Call (818) 749-3205 and Dr. Edward will tell you in two minutes.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Edward the name of your condition, or just where it hurts, and what it keeps you from doing. He will confirm your time by phone or email, usually the same day.',
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
    'The twelve card lines are plain descriptions of each situation written from the page names. Dr. Edward or the build lead should glance over them.',
  ],
};

export default page;
