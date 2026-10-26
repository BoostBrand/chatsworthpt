import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-008',
  path: '/pain-management/',
  title: 'Pain Management Physical Therapy Chatsworth | Dr. Edward',
  description:
    'Chronic pain treated without a one-size-fits-all plan: manual therapy, red light, ultrasound and e-stim with Dr. Edward Shut, DPT in Chatsworth. Book now.',
  ogImage: '/img/pain-management-tablets-bottle-share-800.jpg',
  ogImageMeta: { width: 800, height: 533 },
  hero: {
    h1: 'Pain management physical therapy in Chatsworth, hands-on with Dr. Edward',
    lede: 'Pain that has lasted months gets a cause, a hands-on plan and tools that calm it between visits.',
    image: {
      src: '/img/pain-management-tablets-bottle-800.webp',
      alt: 'Tablets beside an open amber medicine bottle.',
      width: 800,
      height: 533,
      srcSet: [
        { src: '/img/pain-management-tablets-bottle-480.webp', width: 480 },
        { src: '/img/pain-management-tablets-bottle-768.webp', width: 768 },
        { src: '/img/pain-management-tablets-bottle-800.webp', width: 800 },
      ],
      whole: true,
      title: 'Tablets beside a medicine bottle',
      description: 'Several tablets resting beside an open amber medicine bottle.',
      maxWidth: 455,
      sizes: '(min-width: 1180px) 455px, (min-width: 960px) calc((100vw - 88px) * 5 / 12), (min-width: 487px) 455px, calc(100vw - 32px)',
    },
    book: 'Book my evaluation',
  },
  sections: [
    {
      kind: 'who',
      h2: 'Who this is for',
      intro: 'Pain management here is physical therapy for pain that has not gone away. This page is for you if one of these sounds familiar.',
      items: [
        {
          lead: 'The pain has outlasted the injury.',
          text: 'Whatever started it is long over, yet it still hurts. Dr. Edward looks for what is keeping it going.',
        },
        {
          lead: 'Arthritis pain limits your day.',
          text: 'Sore joints make ordinary things harder, and you want to keep moving.',
        },
        {
          lead: 'Widespread pain, like fibromyalgia.',
          text: 'The ache is in many places, not one spot. Dr. Edward treats fibromyalgia-type pain.',
        },
        {
          lead: 'Pain after surgery that never settled.',
          text: 'The operation is done, and the pain is still here.',
        },
        {
          lead: 'A flare-up you want handled without stronger medication.',
          text: 'You want hands-on help and a plan. Dr. Edward keeps your physician in the loop.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What treatment looks like with Dr. Edward',
      blocks: [
        {
          type: 'p',
          text: 'It starts with an evaluation of what keeps your pain going. Dr. Edward examines how you move, explains what he finds in plain terms, and sets your plan from there.',
        },
        {
          type: 'p',
          text: 'There is no standard package. The evaluation decides which of these parts go into your plan:',
        },
        {
          type: 'ul',
          items: [
            '**Manual therapy.** Dr. Edward treats the sore area with his hands.',
            '**Graded exercise.** Movement that builds up step by step.',
            '**Posture and movement.** Work on how you sit, stand and move through the day.',
            '**The tools.** Red light therapy, therapeutic ultrasound and electrical stimulation. More on each below.',
            '**A home program.** A short set of exercises for between visits, adjusted each visit as you progress.',
          ],
        },
        {
          type: 'p',
          text: 'How many visits you need is set after the evaluation, not before.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'The tools: red light, ultrasound and electrical stimulation',
      intro: 'Dr. Edward adds these to your plan when the evaluation says they fit. They sit beside the hands-on work, not in place of it.',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: '[Red light therapy](/red-light-therapy/).',
              text: 'Low-level red light on the treated area, with no UV. Dr. Edward applies it during your visit, next to the hands-on work.',
            },
            {
              lead: '[Therapeutic ultrasound](/therapeutic-ultrasound/).',
              text: 'Sound waves that warm and loosen tissue before hands-on work. It treats the tissue; it does not take pictures.',
            },
            {
              lead: '[Electrical stimulation](/electrical-stimulation-tens-nmes/).',
              text: 'Often called e-stim. TENS calms pain; NMES helps a weak muscle fire again.',
            },
          ],
        },
      ],
    },
    {
      kind: 'conditions',
      h2: 'Conditions treated',
      intro: 'These are the kinds of long-lasting pain Dr. Edward treats.',
      columns: 2,
      items: [
        { text: 'Low back pain', href: '/back-pain-therapy/' },
        { text: 'Neck pain', href: '/conditions/neck-pain/' },
        { text: 'Arthritis' },
        { text: 'Tendinitis' },
        { text: 'Fibromyalgia' },
        { text: 'Nerve pain, including sciatica down the leg', href: '/conditions/sciatica/' },
        { text: 'Post-surgical pain', href: '/pre-post-surgical-rehabilitation/' },
      ],
      outro: 'Shoulder, elbow, hip, knee and ankle injuries are covered on the [Orthopedic rehabilitation](/orthopedic-rehabilitation/) page. If your pain is not named here, book an evaluation and Dr. Edward will tell you what he finds in plain terms.',
    },
    { kind: 'review', review: { key: 'nadezhda', context: 'back pain' } },
    {
      kind: 'insurance',
      more: false,
      blocks: [
        {
          type: 'p',
          text: 'Personal injury cases are treated on a lien. See [insurance and cost](/insurance-and-cost/) for the details.',
        },
      ],
    },
    {
      kind: 'faq',
      h2: 'Common questions about pain management',
      items: [
        {
          q: 'Is this the same as a pain management doctor?',
          a: 'No. Dr. Edward is a Doctor of Physical Therapy and does not give injections or write prescriptions. He treats pain with movement, hands-on treatment and tools such as red light, ultrasound and electrical stimulation. He keeps your physician in the loop.',
        },
        {
          q: 'Does Medicare cover this?',
          a: 'Medicare covers medically necessary physical therapy, and Medicare patients need a referral from the start. If you are not on Medicare, you can start without a referral. California law allows up to 12 visits or 45 days, whichever comes first, and after that we need a referral from your doctor to continue.',
        },
        {
          q: 'Will it hurt?',
          a: 'Some hands-on work is uncomfortable for a moment. Dr. Edward tells you before he does it, and nothing is forced. If something is too much, tell him.',
        },
        {
          q: 'How many visits will I need?',
          a: 'Dr. Edward does not quote a number up front. Your visits are set after the evaluation, once he knows what he is treating. Chronic pain usually takes longer than a fresh injury, and he says so plainly.',
        },
        {
          q: 'Do you treat personal injury cases?',
          a: 'Yes. Dr. Edward treats personal injury cases on a lien.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your pain management evaluation',
    lead: 'Tell Dr. Edward what hurts and how long it has lasted. He will confirm your time by phone or email, usually the same day.',
    service: 'Pain management',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'Back pain therapy', href: '/back-pain-therapy/' },
    { text: 'Orthopedic rehabilitation', href: '/orthopedic-rehabilitation/' },
  ],
  schema: { serviceType: 'Pain management physical therapy' },
  notes: [
    'Tools section: the build lead wrote the three lines from the P-012, P-013 and P-014 entries (low-level light with no UV; sound waves that warm tissue and do not take pictures; TENS for pain, NMES for a weak muscle).',
    'The one-line patient outcome from the reviews that the entry asks for in the tools section is left out on purpose: every review belongs to one page only.',
    'Medicare FAQ is answered with the site-wide referral and Medicare facts, not the entry line about direct pay needing none.',
    'Post-surgical pain links to the pre and post-op page, which is not in the entry list of links out; remove the link if the plan should stay as written.',
    'The Orthopedic rehabilitation page is linked twice: once after the conditions list (approved homepage service line) and once in the related links.',
  ],
};

export default page;
