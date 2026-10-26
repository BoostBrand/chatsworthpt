import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-003',
  path: '/our-services/',
  title: 'Physical Therapy Services in Chatsworth | Dr. Edward, DPT',
  description:
    'See every physical therapy service at Chatsworth Physical Therapy: back pain, sports injuries, post-op, balance, kids and neuro. Book an evaluation.',
  hero: {
    h1: 'Physical therapy services in Chatsworth, every visit with Dr. Edward',
    lede: 'Every visit is one-on-one with [Dr. Edward](/about-us/) and lasts about an hour. Medicare accepted. Evening and Saturday appointments.',
    book: 'Book my evaluation',
    stars: true,
  },
  sections: [
    {
      kind: 'cards',
      h2: 'Our services',
      intro: 'Not sure which one you need? Call (818) 749-3205 and Dr. Edward will tell you in two minutes.',
      columns: 3,
      cards: [
        {
          title: 'Back pain therapy',
          href: '/back-pain-therapy/',
          text: 'For low back pain and posture problems.',
          meta: '[Sciatica](/conditions/sciatica/), [herniated disc](/conditions/herniated-disc/)',
          image: {
            "src": "/img/back-pain-therapy-upper-back-massage-1600.webp",
            "alt": "Hands massaging a person's upper back and shoulder.",
            "width": 1600,
            "height": 914,
            "srcSet": [
              {
                "src": "/img/back-pain-therapy-upper-back-massage-480.webp",
                "width": 480
              },
              {
                "src": "/img/back-pain-therapy-upper-back-massage-768.webp",
                "width": 768
              },
              {
                "src": "/img/back-pain-therapy-upper-back-massage-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/back-pain-therapy-upper-back-massage-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Sports injury recovery',
          href: '/sports-injury-recovery/',
          text: 'For sprains, strains and getting back to your sport.',
          meta: '[Ankle sprain](/conditions/ankle-sprain/), [ACL recovery](/conditions/acl-recovery/), [rotator cuff](/conditions/shoulder-pain-rotator-cuff/)',
          image: {
            "src": "/img/sports-injury-recovery-runner-1600.webp",
            "alt": "Runner on an outdoor path in warm sunlight.",
            "width": 1600,
            "height": 897,
            "srcSet": [
              {
                "src": "/img/sports-injury-recovery-runner-480.webp",
                "width": 480
              },
              {
                "src": "/img/sports-injury-recovery-runner-768.webp",
                "width": 768
              },
              {
                "src": "/img/sports-injury-recovery-runner-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/sports-injury-recovery-runner-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Pre and post-op physical therapy',
          href: '/pre-post-surgical-rehabilitation/',
          text: 'For getting ready for surgery and for recovery after it.',
          meta: '[Knee replacement recovery](/conditions/knee-replacement-recovery/), [hip replacement recovery](/conditions/hip-replacement-recovery/), shoulder surgery',
          image: {
            "src": "/img/surgical-rehabilitation-hospital-room-1600.webp",
            "alt": "Hospital bed and monitoring equipment.",
            "width": 1600,
            "height": 897,
            "srcSet": [
              {
                "src": "/img/surgical-rehabilitation-hospital-room-480.webp",
                "width": 480
              },
              {
                "src": "/img/surgical-rehabilitation-hospital-room-768.webp",
                "width": 768
              },
              {
                "src": "/img/surgical-rehabilitation-hospital-room-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/surgical-rehabilitation-hospital-room-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Orthopedic rehabilitation',
          href: '/orthopedic-rehabilitation/',
          text: 'For shoulder, elbow, hip, knee and ankle injuries.',
          meta: '[Shoulder pain and rotator cuff](/conditions/shoulder-pain-rotator-cuff/), [frozen shoulder](/conditions/frozen-shoulder/), [knee pain](/conditions/knee-pain/)',
          image: {
            "src": "/img/orthopedic-rehabilitation-leg-cast-crutches-1600.webp",
            "alt": "Person with a blue lower-leg support standing beside crutches.",
            "width": 1600,
            "height": 912,
            "srcSet": [
              {
                "src": "/img/orthopedic-rehabilitation-leg-cast-crutches-480.webp",
                "width": 480
              },
              {
                "src": "/img/orthopedic-rehabilitation-leg-cast-crutches-768.webp",
                "width": 768
              },
              {
                "src": "/img/orthopedic-rehabilitation-leg-cast-crutches-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/orthopedic-rehabilitation-leg-cast-crutches-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Pain management',
          href: '/pain-management/',
          text: 'For pain treated with manual therapy, red light, ultrasound and electrical stimulation.',
          meta: '[Sciatica](/conditions/sciatica/), [neck pain and pinched nerve](/conditions/neck-pain/)',
          image: {
            "src": "/img/pain-management-tablets-bottle-800.webp",
            "alt": "Tablets beside an open amber medicine bottle.",
            "width": 800,
            "height": 533,
            "srcSet": [
              {
                "src": "/img/pain-management-tablets-bottle-480.webp",
                "width": 480
              },
              {
                "src": "/img/pain-management-tablets-bottle-768.webp",
                "width": 768
              },
              {
                "src": "/img/pain-management-tablets-bottle-800.webp",
                "width": 800
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Personal training and weight loss',
          href: '/personal-training-weight-loss/',
          text: 'The step after rehab, with the same doctor.',
          image: {
            "src": "/img/personal-training-supervised-balance-exercise-1600.webp",
            "alt": "Dr. Edward supervising an exercise on a balance platform at Chatsworth Physical Therapy.",
            "width": 1600,
            "height": 1520,
            "srcSet": [
              {
                "src": "/img/personal-training-supervised-balance-exercise-480.webp",
                "width": 480
              },
              {
                "src": "/img/personal-training-supervised-balance-exercise-768.webp",
                "width": 768
              },
              {
                "src": "/img/personal-training-supervised-balance-exercise-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/personal-training-supervised-balance-exercise-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Balance and fall prevention',
          href: '/balance-and-fall-prevention/',
          text: 'For unsteady balance and the risk of falls.',
          meta: '[Vertigo and BPPV](/conditions/vertigo-bppv/), dizziness',
          image: {
            "src": "/img/balance-fall-prevention-assisted-walking-1600.webp",
            "alt": "Therapist supporting an older man as he practices walking.",
            "width": 1600,
            "height": 1067,
            "srcSet": [
              {
                "src": "/img/balance-fall-prevention-assisted-walking-480.webp",
                "width": 480
              },
              {
                "src": "/img/balance-fall-prevention-assisted-walking-768.webp",
                "width": 768
              },
              {
                "src": "/img/balance-fall-prevention-assisted-walking-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/balance-fall-prevention-assisted-walking-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Pediatric physical therapy',
          href: '/pediatric-physical-therapy/',
          text: 'For school-age kids and teens, including gymnasts, dancers and athletes, with a parent in the room.',
          meta: '[Ankle sprain](/conditions/ankle-sprain/), [knee pain](/conditions/knee-pain/)',
          image: {
            "src": "/img/pediatric-physical-therapy-child-portrait-1600.webp",
            "alt": "Smiling child in a bright indoor setting.",
            "width": 1600,
            "height": 1067,
            "srcSet": [
              {
                "src": "/img/pediatric-physical-therapy-child-portrait-480.webp",
                "width": 480
              },
              {
                "src": "/img/pediatric-physical-therapy-child-portrait-768.webp",
                "width": 768
              },
              {
                "src": "/img/pediatric-physical-therapy-child-portrait-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/pediatric-physical-therapy-child-portrait-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Neurological rehabilitation',
          href: '/neurological-rehabilitation/',
          text: 'For stroke recovery and other neurological conditions, working on strength, walking and everyday movement.',
          meta: "Parkinson's, MS, spinal cord injury",
          image: {
            "src": "/img/neurological-rehabilitation-brain-scans-1600.webp",
            "alt": "Series of brain scan images.",
            "width": 1600,
            "height": 1067,
            "srcSet": [
              {
                "src": "/img/neurological-rehabilitation-brain-scans-480.webp",
                "width": 480
              },
              {
                "src": "/img/neurological-rehabilitation-brain-scans-768.webp",
                "width": 768
              },
              {
                "src": "/img/neurological-rehabilitation-brain-scans-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/neurological-rehabilitation-brain-scans-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
      ],
      outro: 'Every physical therapy plan is hands-on treatment in the clinic plus a short home program, adjusted each visit as you progress.',
    },
    {
      kind: 'cards',
      h2: 'Treatments used inside your plan',
      intro: 'Dr. Edward may add these to your plan, next to hands-on treatment and exercise.',
      columns: 3,
      cards: [
        {
          title: 'Red light therapy',
          href: '/red-light-therapy/',
          text: 'Low-level red light on the treated area, no UV, applied by Dr. Edward as part of your visit.',
          image: {
            "src": "/img/red-light-therapy-clinic-treatment-1600.webp",
            "alt": "Person lying beneath red light equipment at Chatsworth Physical Therapy.",
            "width": 1600,
            "height": 1067,
            "srcSet": [
              {
                "src": "/img/red-light-therapy-clinic-treatment-480.webp",
                "width": 480
              },
              {
                "src": "/img/red-light-therapy-clinic-treatment-768.webp",
                "width": 768
              },
              {
                "src": "/img/red-light-therapy-clinic-treatment-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/red-light-therapy-clinic-treatment-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Therapeutic ultrasound',
          href: '/therapeutic-ultrasound/',
          text: 'Sound waves that warm and loosen tissue before hands-on work. It treats; it does not take pictures.',
          image: {
            "src": "/img/therapeutic-ultrasound-probe-face-1600.webp",
            "alt": "Clinician positioning a handheld treatment probe beside a patient's face.",
            "width": 1600,
            "height": 873,
            "srcSet": [
              {
                "src": "/img/therapeutic-ultrasound-probe-face-480.webp",
                "width": 480
              },
              {
                "src": "/img/therapeutic-ultrasound-probe-face-768.webp",
                "width": 768
              },
              {
                "src": "/img/therapeutic-ultrasound-probe-face-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/therapeutic-ultrasound-probe-face-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
        {
          title: 'Electrical stimulation',
          href: '/electrical-stimulation-tens-nmes/',
          text: 'TENS to calm pain, and NMES to help a weak muscle fire again after surgery or a stroke.',
          image: {
            "src": "/img/electrical-stimulation-upper-back-electrodes-1600.webp",
            "alt": "Electrode pads attached to a person's upper back and shoulder.",
            "width": 1600,
            "height": 1143,
            "srcSet": [
              {
                "src": "/img/electrical-stimulation-upper-back-electrodes-480.webp",
                "width": 480
              },
              {
                "src": "/img/electrical-stimulation-upper-back-electrodes-768.webp",
                "width": 768
              },
              {
                "src": "/img/electrical-stimulation-upper-back-electrodes-1200.webp",
                "width": 1200
              },
              {
                "src": "/img/electrical-stimulation-upper-back-electrodes-1600.webp",
                "width": 1600
              }
            ],
            "whole": true
          },
        },
      ],
      outro: 'When your rehab is finished, [Personal training and weight loss](/personal-training-weight-loss/) is the next step, with the same doctor.',
    },
    {
      kind: 'conditions',
      h2: 'Conditions we treat',
      columns: 2,
      items: [
        { text: 'Sciatica', href: '/conditions/sciatica/' },
        { text: 'Herniated disc', href: '/conditions/herniated-disc/' },
        { text: 'Neck pain and pinched nerve', href: '/conditions/neck-pain/' },
        { text: 'Shoulder pain and rotator cuff', href: '/conditions/shoulder-pain-rotator-cuff/' },
        { text: 'Frozen shoulder', href: '/conditions/frozen-shoulder/' },
        { text: 'Knee pain', href: '/conditions/knee-pain/' },
        { text: 'ACL recovery', href: '/conditions/acl-recovery/' },
        { text: 'Knee replacement recovery', href: '/conditions/knee-replacement-recovery/' },
        { text: 'Hip replacement recovery', href: '/conditions/hip-replacement-recovery/' },
        { text: 'Ankle sprain', href: '/conditions/ankle-sprain/' },
        { text: 'Plantar fasciitis', href: '/conditions/plantar-fasciitis/' },
        { text: 'Vertigo and BPPV', href: '/conditions/vertigo-bppv/' },
      ],
      outro: 'Each condition has its own page, and the whole list is gathered at [Conditions we treat](/conditions/).',
    },
    { kind: 'review', review: { key: 'dolores', context: 'during recovery' } },
    { kind: 'insurance' },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Edward what hurts and when you can come in. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'Your first visit', href: '/first-visit/' },
    { text: 'Reviews', href: '/reviews/' },
  ],
  notes: [
    'The About link (anchor Dr. Edward) sits in the hero lede. The entry lists no link to About, but pages.json gives P-002 linksFrom P-001 and P-003, so it is added. Remove it if the build lead disagrees.',
    'Card meta conditions: Pain management (sciatica, neck pain) and Pediatric physical therapy (ankle sprain, knee pain) come from pages.json linksFrom, because the homepage lines name no condition for them. Neurological rehabilitation comes from FACTS.md. Balance uses vertigo (FACTS.md) and dizziness (the homepage card name). Dr. Edward should confirm the Pain management and Pediatric pairs.',
    'The sentence under the nine cards (every physical therapy plan is hands-on treatment plus a short home program, adjusted each visit) restates the approved first visit step and is not in the entry. It is optional; delete the outro line if the build lead does not want it.',
    'Personal training and weight loss has no meta line (no condition).',
    'Photos (25 Oct 2026, Dr. Edward email at 7:43pm Pacific): all twelve cards use the same uncropped picture and responsive files as the corresponding service page. Keep these card images synchronized when a service hero is changed.',
    'The entry schema block says an ItemList of nine; the build lead set it to build from the cards of both sections, so it holds twelve.',
    'Build lead: the three treatment card lines are written from the P-012, P-013 and P-014 entries (low-level light with no UV; sound waves that warm tissue and do not take pictures; TENS for pain and NMES for a weak muscle after surgery or a stroke).',
  ],
};

export default page;
