import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-024',
  path: '/conditions/neck-pain/',
  title: 'Neck Pain and Pinched Nerve Physical Therapy | Chatsworth',
  description: 'Neck pain or a pinched nerve that massage and adjustments never fixed for long: Dr. Edward finds the cause and treats it one-on-one in Chatsworth. Book.',
  hero: {
    h1: 'Neck pain and pinched nerve physical therapy in Chatsworth',
    lede: 'Massage and adjustments never fixed it for long. Dr. Edward finds the cause and treats it himself, one-on-one.',
    image: {
      src: '/img/cervical-spine-pinched-nerve-illustration-1600.webp',
      alt: 'Rear-view illustration of neck vertebrae, muscles and nerves, with one area highlighted in red.',
      width: 1600,
      height: 893,
      srcSet: [
        { src: '/img/cervical-spine-pinched-nerve-illustration-640.webp', width: 640 },
        { src: '/img/cervical-spine-pinched-nerve-illustration-960.webp', width: 960 },
        { src: '/img/cervical-spine-pinched-nerve-illustration-1600.webp', width: 1600 },
      ],
      whole: true,
      stock: {
        title: 'Cervical spine and pinched-nerve illustration',
        description: 'Rear-view illustration of neck vertebrae, muscles and nerves, with one area highlighted in red.',
        creditText: 'Nazlykhan - stock.adobe.com',
        acquireLicensePage: 'https://stock.adobe.com/images/anatomy-of-human-cervical-spine-with-nerves-and-muscles-cervical-radiculopathy-or-herniated-disc-showing-pinched-nerve-inflammation-medical-visualization-of-neck-pain-and-injury/2008747282',
        license: 'https://www.adobe.com/go/stockterms',
        aiLabel: true,
      },
    },
    book: 'Book my evaluation',
    stars: true,
  },
  sections: [
    {
      kind: 'who',
      h2: 'Is this you?',
      items: [
        {
          lead: 'Your stiff neck limits how far you can turn.',
          text: 'Checking your blind spot in the car is when you notice it.',
        },
        {
          lead: 'Pain, tingling or weakness runs into your arm.',
          text: 'It may be a pinched nerve, and it may not. Dr. Edward tests the nerve so you know which.',
        },
        {
          lead: 'Headaches seem to start in your neck.',
          text: 'Dr. Edward checks if your neck is behind them.',
        },
        {
          lead: 'Desk work and phone time make it worse.',
          text: 'It feels worst by the end of a workday or after a long stretch looking down at your phone.',
        },
        {
          lead: 'Massage and adjustments only help for a short while.',
          text: 'The relief fades and the pain returns, sometimes for years. Dr. Edward looks for the cause behind it.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Edward does about it',
      intro: 'Dr. Edward builds your physical therapy plan around what the evaluation finds. The work can include:',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: 'Nerve tests.',
              text: 'He tests the nerve to find out if it is pinched. If it is, treatment aims at what is pressing on it.',
            },
            {
              lead: 'Joint and soft-tissue work.',
              text: 'Hands-on treatment for the joints and soft tissue of your neck, to help it move more freely.',
            },
            {
              lead: 'Posture and desk changes.',
              text: 'Only the ones that matter for you. He looks at how you sit, work and hold your phone, and changes what is adding to the strain.',
            },
            {
              lead: 'Strengthening.',
              text: 'Exercises for the deep muscles of the neck and the muscles around your shoulder blades.',
            },
            {
              lead: 'E-stim or ultrasound, where they help.',
              text: 'Electrical stimulation or therapeutic ultrasound, used alongside the hands-on work and exercises when your neck calls for them.',
            },
          ],
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What to expect',
      blocks: [
        {
          type: 'p',
          text: 'Your first visit is an evaluation, one-on-one with Dr. Edward. He checks how your neck moves, tests the nerve and explains what he found in plain terms.',
        },
        {
          type: 'p',
          text: 'Then comes a plan: hands-on treatment in the clinic and a short home program that Dr. Edward adjusts as you improve.',
        },
        {
          type: 'p',
          text: 'He does not quote a number of visits up front. How long it takes depends on your neck and how your body responds, and he tells you what to expect once he has examined you.',
        },
        {
          type: 'p',
          text: 'Evening and Saturday appointments are available, so you can fit treatment around work.',
        },
      ],
    },
    {
      kind: 'review',
      review: { key: 'david', context: 'pinched nerve in the neck' },
    },
    {
      kind: 'prose',
      h2: 'Related pages',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: '[Back pain therapy](/back-pain-therapy/)',
              text: 'The full service, with low back pain, sciatica, disc problems and posture.',
            },
            {
              lead: '[Shoulder pain and rotator cuff](/conditions/shoulder-pain-rotator-cuff/)',
              text: 'For pain that sits in the shoulder, not only the neck.',
            },
            {
              lead: '[Sciatica](/conditions/sciatica/)',
              text: 'For nerve pain in the low back and leg.',
            },
          ],
        },
      ],
    },
    {
      kind: 'insurance',
    },
    {
      kind: 'faq',
      h2: 'Questions about neck pain and pinched nerves',
      items: [
        {
          q: 'Is it a pinched nerve?',
          a: 'Dr. Edward tests the nerve as part of your evaluation, so you find out instead of guessing. If it is a pinched nerve, treatment aims at what is pressing on it.',
        },
        {
          q: 'Do I need an MRI?',
          a: 'Not usually. Dr. Edward examines you first. If your signs call for an MRI, he will say so.',
        },
        {
          q: 'Can you help after neck surgery?',
          a: 'Yes. Dr. Edward works with people who have [nerve weakness after surgery](/neurological-rehabilitation/), and a patient tells his own story on that page.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your neck pain evaluation',
    lead: 'Tell Dr. Edward where it hurts and what you have already tried. He will confirm your time by phone or email, usually the same day.',
    service: 'Back pain',
  },
  related: [
    { text: 'Back pain therapy', href: '/back-pain-therapy/' },
    { text: 'All conditions', href: '/conditions/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  ],
  schema: {
    condition: {
      name: 'Neck pain and pinched nerve',
      associatedAnatomy: 'Cervical spine',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/back-pain-therapy/',
    },
  },
  notes: [
    'Hero (25 Oct 2026): Adobe Stock 2008747282, the picture Dr. Edward chose for this page in his website email of 24 Oct 2026, 8:36pm. Shown whole, never cropped, at 640, 960 and 1600 px. Standard license on Vlad\'s Adobe Stock account; credit Nazlykhan - stock.adobe.com; the Adobe page labels it Generated with AI. A stock illustration, not Dr. Edward or a patient.',
    'No blog post is named in the entry links out and none about neck pain exists in pages.json, so Related pages lists the parent service and the two sibling conditions only.',
    'What to expect: the entry asks for how long it usually takes, said plainly with no fixed numbers. No duration is in the facts, so the page says it depends on the neck and how the body responds, and that Dr. Edward says what to expect after the evaluation. Dr. Edward can add a plain range in words if he wants one.',
    'The hero lede is new wording built from the entry meta description. Vlad or Dr. Edward to approve.',
  ],
};

export default page;
