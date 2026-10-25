import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-007',
  path: '/orthopedic-rehabilitation/',
  title: 'Orthopedic Rehabilitation in Chatsworth | Dr. Edward, DPT',
  description:
    'Orthopedic rehabilitation in Chatsworth for shoulder, knee, hip, elbow and ankle, one-on-one with Dr. Edward Shut, DPT. Evenings and Saturdays. Book.',
  hero: {
    h1: 'Orthopedic rehabilitation in Chatsworth, one-on-one with Dr. Edward',
    lede: 'Joint and muscle injuries treated by Dr. Edward himself. About an hour a visit, plus a home program to follow between appointments.',
    image: {
      src: '/img/post-op-physical-therapy-chatsworth.webp',
      width: 900,
      height: 900,
      alt: 'Knee taping during a physical therapy session in Chatsworth',
    },
    book: 'Book my evaluation',
  },
  sections: [
    {
      kind: 'who',
      h2: 'Who this is for',
      intro: 'These are the situations that bring people to Dr. Edward for orthopedic physical therapy.',
      items: [
        {
          lead: 'A shoulder that will not lift.',
          text: 'Reaching for a shelf, pulling on a jacket or lying on that side hurts. The arm no longer does what it used to.',
        },
        {
          lead: 'A knee or hip that hurts on stairs.',
          text: 'Stairs, getting out of a car and standing up from a chair set it off. You have started to plan your day around them.',
        },
        {
          lead: 'An elbow, wrist or ankle injury.',
          text: 'A fall, a twist or a sprain that is not settling. Gripping, lifting or putting weight on it hurts.',
        },
        {
          lead: 'Arthritis that is limiting daily life.',
          text: 'Stiff, aching joints are getting in the way of walking, working and the things you do every day.',
        },
        {
          lead: 'An injury that was rested and came back.',
          text: 'You gave it time off, and the pain returned as soon as you went back to your normal routine.',
        },
      ],
      outro: 'If one of these sounds like you, the evaluation is the place to start.',
    },
    {
      kind: 'prose',
      h2: 'What treatment looks like with Dr. Edward',
      blocks: [
        {
          type: 'p',
          text: 'Every plan starts with an evaluation. Dr. Edward examines the sore joint and everything above and below it, checks how you move and works out what is actually causing the pain. He explains it in plain terms.',
        },
        { type: 'p', text: 'Treatment is then hands-on and active:' },
        {
          type: 'ul',
          items: [
            'Manual therapy, strengthening, mobility work and movement correction, matched to what the evaluation found.',
            '[Ultrasound](/therapeutic-ultrasound/), [e-stim](/electrical-stimulation-tens-nmes/) and [red light](/red-light-therapy/), where they help.',
            'A short home program, adjusted each visit as you progress, so the work carries on between appointments.',
          ],
        },
        {
          type: 'p',
          text: 'Dr. Edward sets how many visits you need after the evaluation, once he knows what he is treating. Evening and Saturday appointments are available, so you can come in after work.',
        },
      ],
    },
    {
      kind: 'conditions',
      h2: 'Joints and injuries treated',
      intro: 'Orthopedic rehabilitation with Dr. Edward covers these joints and the injuries listed under each. Conditions with their own page are linked, so you can read more about each one.',
      items: [
        {
          text: '**Shoulder:** [shoulder pain and rotator cuff](/conditions/shoulder-pain-rotator-cuff/) problems, impingement and [frozen shoulder](/conditions/frozen-shoulder/).',
        },
        { text: "**Elbow:** tennis elbow and golfer's elbow." },
        { text: '**Hip:** bursitis, impingement and arthritis.' },
        {
          text: '**Knee:** meniscus injuries, patellar pain, arthritis and other [knee pain](/conditions/knee-pain/).',
        },
        {
          text: '**Ankle and foot:** [ankle sprain](/conditions/ankle-sprain/), Achilles injuries and [plantar fasciitis](/conditions/plantar-fasciitis/).',
        },
      ],
      outro: 'If your injury is not listed, describe it when you book.',
    },
    { kind: 'review', review: { key: 'michael-l', context: 'severe neck and shoulder pain' } },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Common questions',
      items: [
        {
          q: 'Do I need an X-ray or MRI before physical therapy?',
          a: 'Usually not. The evaluation tells Dr. Edward what is going on in the joint, and he explains it in plain terms. If imaging is needed, he says so.',
        },
        {
          q: 'Can physical therapy help arthritis?',
          a: 'Yes. Strength, mobility and load management reduce pain and keep the joint moving. Load management means adjusting how much you ask of the joint, and when. Dr. Edward puts all three into your plan and your home program.',
        },
        {
          q: 'How soon after an injury should I come in?',
          a: 'Within the first few days, once you can bear weight. If a fracture or an unstable joint is suspected, you get imaged first.',
        },
        {
          q: 'Do I need a referral?',
          a: 'No referral is needed to start. California law lets you see a physical therapist without a referral for up to 12 visits or 45 days, whichever comes first. After that, we need a referral from your doctor to continue. Medicare patients need a referral from the start.',
        },
        {
          q: 'Will I see Dr. Edward every time?',
          a: 'Yes. Every visit is one-on-one with Dr. Edward himself, from your evaluation to your last session. He is the one who examines you, treats you and adjusts your home program.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your orthopedic evaluation',
    lead: 'Tell Dr. Edward which joint is giving you trouble, what happened and when you can come in. He will confirm your time by phone or email, usually the same day.',
    service: 'Orthopedic injury',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'Pre and post-op physical therapy', href: '/pre-post-surgical-rehabilitation/' },
    { text: 'Sports injury recovery', href: '/sports-injury-recovery/' },
    { text: 'Neck pain and pinched nerve', href: '/conditions/neck-pain/' },
  ],
  schema: { serviceType: 'Orthopedic rehabilitation' },
  notes: [
    'Hero uses the post-op knee photo (post-op-physical-therapy-chatsworth.webp) until the shoulder or knee session is shot as orthopedic-rehabilitation-chatsworth.webp (Gabby, rung 3).',
    'The referral FAQ answers with the site-wide referral facts, not the entry line that says only Medicare needs a referral.',
    'The treatment list links ultrasound, e-stim and red light to their planned pages (/therapeutic-ultrasound/, /electrical-stimulation-tens-nmes/, /red-light-therapy/). Remove those links if the pages do not ship.',
  ],
};

export default page;
