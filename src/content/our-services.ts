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
            src: '/img/back-pain-therapy-chatsworth.webp',
            width: 900,
            height: 900,
            alt: 'Dr. Edward guiding a patient through a core stability exercise for back pain at Chatsworth Physical Therapy',
          },
        },
        {
          title: 'Sports injury recovery',
          href: '/sports-injury-recovery/',
          text: 'For sprains, strains and getting back to your sport.',
          meta: '[Ankle sprain](/conditions/ankle-sprain/), [ACL recovery](/conditions/acl-recovery/), [rotator cuff](/conditions/shoulder-pain-rotator-cuff/)',
          image: {
            src: '/img/sports-injury-rehab-chatsworth.webp',
            width: 900,
            height: 900,
            alt: 'Ankle treatment during a sports injury rehab session in Chatsworth',
          },
        },
        {
          title: 'Pre and post-op physical therapy',
          href: '/pre-post-surgical-rehabilitation/',
          text: 'For getting ready for surgery and for recovery after it.',
          meta: '[Knee replacement recovery](/conditions/knee-replacement-recovery/), [hip replacement recovery](/conditions/hip-replacement-recovery/), shoulder surgery',
          image: {
            src: '/img/post-op-physical-therapy-chatsworth.webp',
            width: 900,
            height: 900,
            alt: "Clinician holding a handheld treatment head on a patient's knee during physical therapy in Chatsworth",
          },
        },
        {
          title: 'Orthopedic rehabilitation',
          href: '/orthopedic-rehabilitation/',
          text: 'For shoulder, elbow, hip, knee and ankle injuries.',
          meta: '[Shoulder pain and rotator cuff](/conditions/shoulder-pain-rotator-cuff/), [frozen shoulder](/conditions/frozen-shoulder/), [knee pain](/conditions/knee-pain/)',
          image: {
            src: '/img/dr-ed-explaining-anatomy-chatsworth.webp',
            width: 1200,
            height: 960,
            alt: 'Dr. Edward explaining an anatomy chart to a patient',
          },
        },
        {
          title: 'Pain management',
          href: '/pain-management/',
          text: 'For pain treated with manual therapy, red light, ultrasound and electrical stimulation.',
          meta: '[Sciatica](/conditions/sciatica/), [neck pain and pinched nerve](/conditions/neck-pain/)',
          image: {
            src: '/img/hero-dr-ed-treating-patient-chatsworth.webp',
            width: 1800,
            height: 1125,
            alt: 'Dr. Edward Shut guiding a patient through a back exercise on the treatment table at Chatsworth Physical Therapy',
          },
        },
        {
          title: 'Personal training and weight loss',
          href: '/personal-training-weight-loss/',
          text: 'The step after rehab, with the same doctor.',
          image: {
            src: '/img/dr-ed-shut-in-clinic-chatsworth.webp',
            width: 1000,
            height: 1000,
            alt: 'Dr. Edward Shut, DPT, at his desk in the Chatsworth Physical Therapy clinic',
          },
        },
        {
          title: 'Balance and fall prevention',
          href: '/balance-and-fall-prevention/',
          text: 'For unsteady balance and the risk of falls.',
          meta: '[Vertigo and BPPV](/conditions/vertigo-bppv/), dizziness',
        },
        {
          title: 'Pediatric physical therapy',
          href: '/pediatric-physical-therapy/',
          text: 'For school-age kids and teens, including gymnasts, dancers and athletes, with a parent in the room.',
          meta: '[Ankle sprain](/conditions/ankle-sprain/), [knee pain](/conditions/knee-pain/)',
        },
        {
          title: 'Neurological rehabilitation',
          href: '/neurological-rehabilitation/',
          text: 'For stroke recovery and other neurological conditions, working on strength, walking and everyday movement.',
          meta: "Parkinson's, MS, spinal cord injury",
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
        },
        {
          title: 'Therapeutic ultrasound',
          href: '/therapeutic-ultrasound/',
          text: 'Sound waves that warm and loosen tissue before hands-on work. It treats; it does not take pictures.',
        },
        {
          title: 'Electrical stimulation',
          href: '/electrical-stimulation-tens-nmes/',
          text: 'TENS to calm pain, and NMES to help a weak muscle fire again after surgery or a stroke.',
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
    'Photos (23 Oct 2026, Vlad chose real clinic photos where they fit, the rest out): six cards carry clinic photos (Orthopedic uses the anatomy chart photo, Pain management the hero photo, Personal training the desk photo). Balance, Pediatric and Neurological have no photo that fits, so they are text only and sit together in the last row, which keeps each row even. Put them back in their old places if a shoot adds photos.',
    'The entry schema block says an ItemList of nine; the build lead set it to build from the cards of both sections, so it holds twelve.',
    'Build lead: the three treatment card lines are written from the P-012, P-013 and P-014 entries (low-level light with no UV; sound waves that warm tissue and do not take pictures; TENS for pain and NMES for a weak muscle after surgery or a stroke).',
  ],
};

export default page;
