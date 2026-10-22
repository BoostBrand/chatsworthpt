import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-016',
  path: '/insurance-and-cost/',
  title: 'Insurance, Cost and Referrals | Chatsworth Physical Therapy',
  description:
    'Medicare accepted, direct pay welcome, PPO superbills and personal injury liens. See what a visit costs and when California needs a referral. Call today.',
  hero: {
    h1: 'Insurance, cost and referrals at Chatsworth Physical Therapy',
    lede: 'Plain answers on referrals, insurance and payment before your first visit. Call and Dr. Ed will walk you through the cost.',
    image: {
      src: '/img/dr-ed-explaining-anatomy-chatsworth.webp',
      width: 1200,
      height: 960,
      alt: 'Dr. Ed explaining an anatomy chart to a patient',
    },
    book: 'Book my evaluation',
    callFirst: true,
  },
  sections: [
    {
      kind: 'prose',
      h2: 'Do I need a referral?',
      blocks: [
        {
          type: 'p',
          text: '**No, not to start.** California law lets you see a physical therapist without a referral for up to 12 visits or 45 days, whichever comes first. This is called direct access. After that, we need a referral from your doctor to continue.',
        },
        {
          type: 'p',
          text: 'Medicare patients are the exception. They need a referral from the start.',
        },
        {
          type: 'p',
          text: 'If your doctor has already given you a referral, bring it to your first visit. For the longer answer, read [Do you need a referral in California?](/blog/referral-for-physical-therapy-in-california/)',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Medicare',
      blocks: [
        {
          type: 'p',
          text: '**We accept original Medicare, with a referral from your doctor.** The referral is needed from the start. Medicare Advantage plans are not accepted at this time.',
        },
        { type: 'p', text: 'Bring these to your first visit:' },
        {
          type: 'ul',
          items: [
            'The referral from your doctor',
            'Your Medicare card',
            'Imaging reports, if you have them',
          ],
        },
        {
          type: 'p',
          text: 'To read more, see [Does Medicare cover physical therapy?](/blog/does-medicare-cover-physical-therapy/)',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'PPO and other insurance',
      blocks: [
        {
          type: 'p',
          text: '**If you have PPO insurance, we give you a superbill.** A superbill is an itemized receipt you send to your insurer for reimbursement.',
        },
        {
          type: 'p',
          text: 'We do not bill PPO or other private insurance plans directly.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Direct pay',
      blocks: [
        {
          type: 'p',
          text: '**Direct-pay patients are welcome.** Direct pay, also called cash pay or private pay, means you pay for your visit yourself.',
        },
        {
          type: 'p',
          text: '**Your first evaluation is $175. Each follow-up visit is $125.** The evaluation is a full first visit: Dr. Ed checks how you walk and move, tests your mobility, finds the pain points and confirms your pain is mechanical, the kind physical therapy treats. If it is not, he tells you and refers you to the right doctor. CSUN students and faculty can ask about a discount when they book.',
        },
        {
          type: 'p',
          text: 'Visits run about 60 minutes, depending on what you need, and every one is one-on-one with Dr. Ed.',
        },
        {
          type: 'p',
          text: 'Dr. Ed does not quote a number of visits up front. After your first evaluation, he sets a plan based on your condition and how your body responds.',
        },
        {
          type: 'p',
          text: 'More on cash-pay visits is in [Cash-pay physical therapy: what a visit costs](/blog/cash-pay-physical-therapy-chatsworth-cost/).',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Personal injury',
      blocks: [
        {
          type: 'p',
          text: '**We accept personal injury cases on a lien.** To start, your attorney emails Dr. Ed your details, such as your name, address and date of birth.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Kids and teens',
      blocks: [
        {
          type: 'p',
          text: '**No referral is needed to start.** Dr. Ed treats school-age children and teenagers, gymnasts and dancers included. A parent stays in the room for every visit.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Payment methods',
      blocks: [
        {
          type: 'p',
          text: '**We accept credit and debit cards, HSA and FSA cards, checks, Zelle and Venmo.**',
        },
      ],
    },
    { kind: 'review', review: { key: 'elena', context: 'explained everything clearly' } },
    {
      kind: 'faq',
      h2: 'Questions about insurance and cost',
      items: [
        {
          q: 'Do I need a referral to start physical therapy in California?',
          a: 'No. You can start without one, and you can keep going for up to 12 visits or 45 days, whichever comes first. After that, we need a referral from your doctor to continue. Medicare patients need a referral from the start.',
        },
        {
          q: 'Do you take Medicare?',
          a: 'Yes, original Medicare, with a referral from your doctor. Medicare patients need one from the start. Medicare Advantage plans are not accepted at this time. Bring the referral, your Medicare card and any imaging reports to your first visit.',
        },
        {
          q: 'Do you take my PPO?',
          a: 'We give you a superbill, an itemized receipt you send to your insurer for reimbursement. We do not bill the plan directly.',
        },
        {
          q: 'How much does a visit cost without insurance?',
          a: 'The first evaluation is $175, and each follow-up visit is $125. The total depends on how many visits you need, and Dr. Ed does not quote that number before your first evaluation.',
        },
        {
          q: 'Do you take personal injury cases?',
          a: 'Yes. We accept personal injury cases on a lien. Call (818) 749-3205 with questions about your case.',
        },
        {
          q: 'What should I bring to the first visit?',
          a: 'Bring your ID, and your insurance card or referral if you have one. Bring any imaging reports you have. Wear comfortable clothes: shorts for a knee, hip or ankle problem, and a tank top or loose shirt for a shoulder, neck or back problem.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Ed what is going on and when you can come in. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'Your first visit', href: '/first-visit/' },
    { text: 'FAQs', href: '/faqs/' },
    { text: 'All services', href: '/our-services/' },
    { text: 'Book an evaluation', href: '/contact/' },
  ],
  notes: [
    'Open for Dr. Ed: whether any insurance plan is billed directly. The PPO section and the PPO FAQ carry the marker.',
    'Open for Vlad and Dr. Ed: publish the direct-pay prices or keep the call-for-the-rate line. The Direct pay section and the cost FAQ carry the markers.',
    'Open for Dr. Ed: the one-line lien process. The Personal injury section carries the marker; no process sentence is written until it is confirmed.',
    'Open for Dr. Ed: payment methods beyond cards (HSA and FSA cards, checks, Zelle). The Payment methods section carries the marker.',
    'Ruling applied: no insurance section on this page. The referral, insurance and visit-length facts are written as the sections of this page, in the site-wide wording.',
    'The referral FAQ uses the site-wide facts, which are longer than the short answer in the entry.',
    'The paymentAccepted and priceRange values in the Physiotherapy block on the home and contact pages must match this page once the markers are answered.',
    'The Google Business Profile attribute Medicare accepted must be confirmed as set.',
  ],
};

export default page;
