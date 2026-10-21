import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-017',
  path: '/first-visit/',
  title: 'Your First Visit, Step by Step | Chatsworth Physical Therapy',
  description:
    'See what happens at your first physical therapy visit with Dr. Ed Shut, DPT: the evaluation, how long it takes, what to wear and bring. Book today.',
  hero: {
    h1: 'Your first visit at Chatsworth Physical Therapy: what to expect',
    lede: 'About an hour, one-on-one with Dr. Ed. You leave with a plan you can follow at home.',
    image: {
      src: '/img/hero-dr-ed-treating-patient-chatsworth.webp',
      srcMobile: '/img/hero-dr-ed-treating-patient-chatsworth-mobile.webp',
      width: 1800,
      height: 1125,
      alt: 'Dr. Ed Shut guiding a patient through a back exercise on the treatment table at Chatsworth Physical Therapy',
    },
    book: 'Book my evaluation',
  },
  sections: [
    {
      kind: 'prose',
      h2: 'Before you come',
      blocks: [
        {
          type: 'p',
          text: 'Call (818) 749-3205 or use the booking section at the bottom of this page. Tell us what hurts, and we confirm your time, usually the same day.',
        },
        { type: 'h3', text: 'What to bring' },
        {
          type: 'ul',
          items: [
            'A referral from your doctor, if you have Medicare.',
            'Imaging reports, if you have them.',
            "Your surgeon's protocol, if you had surgery.",
            'A list of your medications.',
          ],
        },
        { type: 'h3', text: 'What to wear to physical therapy' },
        {
          type: 'p',
          text: 'Comfortable clothes you can move in. Shorts for knee, hip or ankle issues, and a tank top or loose shirt for shoulder, neck and back.',
        },
        { type: 'h3', text: 'Parking' },
        {
          type: 'p',
          text: 'Parking is free in the lot in front, and there is no gate code. Street parking is available too. For the map, see [directions and parking](/contact/).',
        },
      ],
    },
    {
      kind: 'steps',
      h2: 'The evaluation, step by step',
      intro:
        'Your first physical therapy appointment is an evaluation with Dr. Ed Shut, DPT. It takes about 60 minutes, depending on what you need, and it is one-on-one from start to finish.',
      steps: [
        {
          title: 'History',
          text: 'You tell Dr. Ed what hurts, how it started and what you want to get back to.',
        },
        {
          title: 'Watching you move',
          text: 'He watches how you move, so he sees the problem for himself.',
        },
        {
          title: 'Strength and range of motion',
          text: 'He measures your strength and how far each joint moves.',
        },
        {
          title: 'Finding the cause',
          text: 'He puts it together and finds what is actually causing your pain.',
        },
        {
          title: 'A plain explanation',
          text: 'He explains what he found in plain terms, before treatment starts.',
        },
        {
          title: 'First treatment',
          text: 'Treatment starts at this visit, not the next one. Depending on what he found, it may include manual therapy, corrective exercise, therapeutic ultrasound, red light therapy, cryo massage or electrical stimulation.',
        },
        {
          title: 'Home program',
          text: 'You leave with a short home program to follow between visits.',
        },
      ],
      outro:
        'You can also read the blog post [What to expect at your first visit](/blog/what-to-expect-first-physical-therapy-visit/).',
    },
    {
      kind: 'prose',
      h2: 'After the first visit',
      blocks: [
        {
          type: 'p',
          text: 'Every follow-up is one-on-one with Dr. Ed himself, never handed off. Each visit is hands-on treatment in the clinic plus your home program, adjusted as you progress.',
        },
        {
          type: 'p',
          text: 'How many physical therapy sessions you need depends on your condition and how your body responds. Dr. Ed sets the plan after your evaluation. He never quotes a number of visits up front.',
        },
        {
          type: 'p',
          text: 'Evening and Saturday slots are available, so visits can fit around work.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Who comes with you',
      blocks: [
        {
          type: 'p',
          text: 'A family member or caregiver is welcome to come with you. If the patient is a child or teen, a parent stays for the whole visit.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'The clinic',
      blocks: [
        {
          type: 'p',
          text: 'The entrance and the parking are wheelchair accessible, and there is a restroom. Dr. Ed speaks English and Russian, so you can be treated in either.',
        },
        {
          type: 'image',
          image: {
            src: '/img/dr-ed-explaining-anatomy-chatsworth.webp',
            width: 1200,
            height: 960,
            alt: 'Dr. Ed explaining an anatomy chart to a patient',
          },
        },
      ],
    },
    { kind: 'review', review: { key: 'chris', context: 'back pain' } },
    {
      kind: 'faq',
      h2: 'Common questions about your first visit',
      items: [
        {
          q: 'How long is the first visit?',
          a: 'The first visit runs about 60 minutes, depending on what you need, and it is one-on-one with Dr. Ed. That time covers your evaluation, your first treatment and your home program.',
        },
        {
          q: 'What should I wear?',
          a: 'Comfortable clothes you can move in. Shorts work for a knee, hip or ankle problem. For a shoulder, neck or back problem, wear a tank top or a loose shirt.',
        },
        {
          q: 'What should I bring?',
          a: "Bring a referral if you have Medicare, any imaging reports, your surgeon's protocol if you had surgery, and a list of your medications. If you are not sure what applies to you, ask when you book.",
        },
        {
          q: 'Will I be treated on the first visit?',
          a: 'Yes. The evaluation ends with treatment and a short home program. You start on the first visit, not the second.',
        },
        {
          q: 'Can someone come with me?',
          a: 'Yes. A family member or caregiver is welcome to come with you. With a child or teen, a parent stays for the whole visit.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your first visit',
    lead: 'Tell Dr. Ed what hurts and when you would like to come. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
    { text: 'FAQs', href: '/faqs/' },
    { text: 'About Dr. Ed', href: '/about-us/' },
  ],
  notes: [
    'The treatments named in the First treatment step come from the approved About paragraph on the homepage facts list, with the words may include. Remove that sentence if the page should hold only what the blueprint entry lists.',
    'The restroom line in the clinic section comes from the blueprint entry; it is not on the confirmed facts list. Dr. Ed to confirm.',
    'The clinic section uses the anatomy chart photo until the shoot list (front door, parking lot, reception, treatment room) is done.',
    'The first FAQ answer uses the site-wide visit length wording, which is longer than the entry answer.',
  ],
};

export default page;
