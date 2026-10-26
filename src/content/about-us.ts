import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-002',
  path: '/about-us/',
  title: 'Dr. Edward Shut, DPT | Physical Therapist in Chatsworth, CA',
  description:
    'Meet Dr. Edward Shut, Doctor of Physical Therapy in Chatsworth, CA. License 301809, 15+ years, one-on-one care in English and Russian. Book now.',
  // 25 Oct 2026 preview (Vlad's call): share image is the square JPEG of the entrance portrait.
  ogImage: '/img/dr-edward-shut-chatsworth-clinic-entrance-share-1200.jpg',
  ogImageMeta: { alt: 'Dr. Edward Shut standing outside Chatsworth Physical Therapy beside the clinic entrance at 19851 Nordhoff Place.', width: 1200, height: 1200 },
  hero: {
    h1: 'Meet Dr. Edward Shut, DPT, your physical therapist in Chatsworth',
    lede: 'Every visit is one-on-one with Dr. Edward, about an hour, with evening and Saturday appointments.',
    // 25 Oct 2026 preview: the entrance portrait (suit, clinic lettering, 19851 #105), whole and square at every width.
    image: {
      src: '/img/dr-edward-shut-chatsworth-clinic-entrance-1200.webp',
      width: 1200,
      height: 1200,
      alt: 'Dr. Edward Shut standing outside Chatsworth Physical Therapy beside the clinic entrance at 19851 Nordhoff Place.',
      srcSet: [
        { src: '/img/dr-edward-shut-chatsworth-clinic-entrance-480.webp', width: 480 },
        { src: '/img/dr-edward-shut-chatsworth-clinic-entrance-768.webp', width: 768 },
        { src: '/img/dr-edward-shut-chatsworth-clinic-entrance-1200.webp', width: 1200 },
        { src: '/img/dr-edward-shut-chatsworth-clinic-entrance-1600.webp', width: 1600 },
      ],
      whole: true,
    },
    book: 'Book my evaluation',
  },
  sections: [
    {
      kind: 'prose',
      h2: "In Dr. Edward's words",
      blocks: [
        {
          type: 'p',
          text: "I'm Dr. Edward, a licensed physical therapist proudly serving patients in Chatsworth, CA and the surrounding area. My mission is to help people recover from injury, reduce pain, restore movement, and return to the activities that matter most to them.",
        },
        {
          type: 'p',
          text: 'At Chatsworth PT, I take a personalized approach to care by working one-on-one with each patient. Every treatment plan is tailored to your specific needs and may include manual therapy, corrective exercise, therapeutic ultrasound, red light therapy, cryo massage, electrical stimulation, and practical education to support recovery and long-term wellness.',
        },
        {
          type: 'p',
          text: 'I treat every patient myself. You see me at every visit, from your evaluation to discharge. A visit runs about 60 minutes, depending on what you need, and all of it is one-on-one with me. The person who finds the cause of your pain should be the one who treats it and changes the plan as you improve. I have been treating patients for 15+ years, and I never hand a patient off.',
        },
      ],
    },
    {
      kind: 'credentials',
      h2: 'Credentials and license',
      blocks: [
        {
          type: 'p',
          text: 'Dr. Edward holds a Doctor of Physical Therapy degree and a California physical therapist license. He is a physical therapist, not a physician.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'How Dr. Edward works',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: 'Evaluation first.',
              text: 'Your first visit is an evaluation with Dr. Edward. He examines how you move.',
            },
            {
              lead: 'The cause, not the symptom.',
              text: 'He finds what is actually causing the pain and explains it in plain terms.',
            },
            {
              lead: 'Hands-on treatment.',
              text: 'Treatment in the clinic is hands-on and comes from Dr. Edward himself.',
            },
            {
              lead: 'A home program you will actually do.',
              text: 'It is a short plan you can follow at home, adjusted each visit as you progress.',
            },
            {
              lead: 'No hand-offs.',
              text: 'You work with Dr. Edward himself at every visit.',
            },
          ],
        },
        {
          type: 'p',
          text: 'For neurological patients, including stroke recovery, Dr. Edward uses NDT and PNF.',
        },
      ],
    },
    {
      kind: 'conditions',
      h2: 'Who Dr. Edward treats',
      intro: 'Dr. Edward treats patients across these services. Each one has its own page.',
      items: [
        {
          text: 'Back pain therapy',
          href: '/back-pain-therapy/',
          note: 'Low back pain, sciatica, disc problems, posture.',
        },
        {
          text: 'Sports injury recovery',
          href: '/sports-injury-recovery/',
          note: 'Sprains, strains, ACL, rotator cuff, return to sport.',
        },
        {
          text: 'Pre and post-op physical therapy',
          href: '/pre-post-surgical-rehabilitation/',
          note: 'Prehab before surgery, recovery after knee, hip and shoulder surgery.',
        },
        {
          text: 'Orthopedic rehabilitation',
          href: '/orthopedic-rehabilitation/',
          note: 'Shoulder, elbow, hip, knee and ankle injuries.',
        },
        {
          text: 'Balance and fall prevention',
          href: '/balance-and-fall-prevention/',
          note: 'Fall prevention and vestibular therapy, Medicare accepted.',
        },
        {
          text: 'Pain management',
          href: '/pain-management/',
          note: 'Manual therapy, red light, ultrasound and e-stim.',
        },
        {
          text: 'Pediatric physical therapy',
          href: '/pediatric-physical-therapy/',
          note: 'Kids and teens: gymnasts, dancers and school-age athletes, parent in the room.',
        },
        {
          text: 'Neurological rehabilitation',
          href: '/neurological-rehabilitation/',
          note: 'Stroke recovery: strength, walking and everyday movement.',
        },
        {
          text: 'Personal training and weight loss',
          href: '/personal-training-weight-loss/',
          note: 'The step after rehab, with the same doctor.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Care in English or Russian',
      blocks: [
        {
          type: 'p',
          text: 'Dr. Edward is a Russian-speaking physical therapist in Chatsworth. He treats patients in English or Russian, so use whichever language is easier for you.',
        },
        {
          type: 'p',
          lang: 'ru',
          text: 'Доктор Эдвард говорит по-русски. Вы можете пройти приём и лечение на русском языке.',
        },
      ],
    },
    {
      kind: 'review',
      review: { key: 'sarkis', context: 'after working with several physical therapists', sentences: [0, 2] },
    },
    {
      kind: 'social',
      h2: 'Follow Dr. Edward',
      label: 'Follow',
    },
  ],
  booking: {
    h2: 'Book your evaluation with Dr. Edward',
    lead: 'Tell Dr. Edward what hurts and when you can come in. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'Your first visit', href: '/first-visit/' },
    { text: 'Reviews', href: '/reviews/' },
    { text: 'Book an evaluation', href: '/contact/' },
  ],
  notes: [
    "The third paragraph of the In Dr. Edward's words section is new first-person copy, built only from the confirmed facts: every visit himself, never handed off, about 60 minutes depending on what you need, 15+ years. Dr. Edward should read it before launch.",
    'The Russian sentence was written by Claude on Vlad\'s go (21 Oct 2026, answer 27: whatever you think is best) and is marked lang ru.',
    'The review is cut to its first three sentences so the page never uses the bare profession word; the fourth sentence of the review does. Remove the sentences field to show the full review.',
    'NDT and PNF are named once, in How Dr. Edward works, and are not spelled out because the facts list does not spell them out.',
    'The pediatric and neurological links sit in the Who Dr. Edward treats list, so they are not linked a second time in the copy.',
  ],
};

export default page;
