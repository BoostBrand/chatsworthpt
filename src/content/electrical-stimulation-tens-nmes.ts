import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-014',
  path: '/electrical-stimulation-tens-nmes/',
  title: 'Electrical Stimulation, TENS, NMES | Chatsworth, Dr. Edward',
  description:
    'Find out how TENS and NMES electrical stimulation calm pain and wake up weak muscles in physical therapy with Dr. Edward Shut, DPT in Chatsworth. Book now.',
  ogImage: '/img/electrical-stimulation-upper-back-electrodes-share-1200.jpg',
  ogImageMeta: { alt: "Electrode pads attached to a person's upper back and shoulder.", width: 1200, height: 857 },
  hero: {
    h1: 'Electrical stimulation (TENS and NMES) in Chatsworth physical therapy',
    lede: 'Two kinds of electrical stimulation: TENS for pain, NMES to make a weak muscle fire.',
    book: 'Book my evaluation',
    image: {
      src: '/img/electrical-stimulation-upper-back-electrodes-1600.webp',
      alt: "Electrode pads attached to a person's upper back and shoulder.",
      width: 1600,
      height: 1143,
      srcSet: [
        { src: '/img/electrical-stimulation-upper-back-electrodes-480.webp', width: 480 },
        { src: '/img/electrical-stimulation-upper-back-electrodes-768.webp', width: 768 },
        { src: '/img/electrical-stimulation-upper-back-electrodes-1200.webp', width: 1200 },
        { src: '/img/electrical-stimulation-upper-back-electrodes-1600.webp', width: 1600 },
      ],
      whole: true,
      title: 'Electrode pads on the upper back',
      description: "Electrode pads attached to a person's upper back and shoulder area.",
    },
  },
  sections: [
    {
      kind: 'prose',
      h2: 'TENS: for pain',
      blocks: [
        {
          type: 'p',
          text: 'TENS stands for transcutaneous electrical nerve stimulation. Dr. Edward puts pads, called electrodes, on your skin and connects them to the TENS unit. The unit sends a gentle current through the pads, and the aim is to calm the pain.',
        },
        {
          type: 'p',
          text: 'Dr. Edward uses TENS for back pain, neck pain and pain after surgery.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'NMES: for a weak muscle',
      blocks: [
        {
          type: 'p',
          text: 'NMES stands for neuromuscular electrical stimulation. In physical therapy it does a different job from TENS: a current through pads on your skin makes a weak muscle fire.',
        },
        {
          type: 'p',
          text: 'Dr. Edward uses NMES when a muscle will not switch on after surgery (see [post-op physical therapy](/pre-post-surgical-rehabilitation/)) or after a stroke (see [neurological rehabilitation](/neurological-rehabilitation/)). One example is the quad, the large muscle on the front of your thigh, after knee surgery (see [knee replacement recovery](/conditions/knee-replacement-recovery/)).',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'How it fits into a visit',
      blocks: [
        {
          type: 'p',
          text: 'Electrical stimulation in physical therapy is one part of your plan, not all of it. At the Chatsworth clinic, Dr. Edward starts with an evaluation. He examines how you move and finds what is causing the problem. If stimulation fits, he puts the pads on, adjusts the unit himself and uses it alongside hands-on treatment and exercise.',
        },
        {
          type: 'callout',
          text: 'Tell Dr. Edward about any implanted device, such as a pacemaker, before your first visit.',
        },
        {
          type: 'p',
          text: 'Dr. Edward uses stimulation here at the clinic. He does not set patients up with a TENS unit for home use, though he can give you some basic guidance if you already use one.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: "A patient's review",
      blocks: [
        {
          type: 'p',
          text: "A patient named Jennifer mentions stimulation in her Google review. Read [Jennifer's review on the red light page](/red-light-therapy/).",
        },
      ],
    },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Questions about electrical stimulation',
      items: [
        {
          q: 'Does it hurt?',
          a: 'You feel a tingling or a gentle muscle pull. Dr. Edward sets the intensity to what you find comfortable.',
        },
        {
          q: 'Is it safe with a pacemaker?',
          a: 'No, it is not safe with a pacemaker. Tell Dr. Edward about a pacemaker or any other implanted device before your first visit.',
        },
        {
          q: 'Can I use a TENS unit at home?',
          a: 'Dr. Edward does not set up home TENS units. He uses stimulation at the clinic and can give you some basic guidance if you already use a unit at home.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Dr. Edward will work out at your evaluation whether stimulation fits your problem. He will confirm your time by phone or email, usually the same day.',
    service: 'Pain management',
    messagePrompt: 'What hurts, or what feels weak? Mention any pacemaker or other implanted device.',
  },
  related: [
    { text: 'Pain management', href: '/pain-management/' },
    { text: 'Therapeutic ultrasound', href: '/therapeutic-ultrasound/' },
    { text: 'All services', href: '/our-services/' },
  ],
  schema: { serviceType: 'Electrical stimulation (TENS and NMES)' },
  notes: [
    'Home TENS unit practice is open for Dr. Edward: whether he sets patients up with a home unit, and how. The marker sits in the visit section and in the third FAQ.',
    'No review is assigned to this page: no unused review names stimulation apart from Jennifer, whose review lives on the red light page. She is pointed to, never quoted or reworded here. Ask the next patient for a review.',
    'Hero is the old site\'s picture for this page, restored 25 Oct 2026 on Vlad\'s instruction (electrode pads on the upper back, from the legacy service-image package).',
    'The Google Business Profile service is spelled Electrical Stimiluation / TENS / NMES. It should read Electrical Stimulation / TENS / NMES, with its description taken from this page.',
  ],
};

export default page;
