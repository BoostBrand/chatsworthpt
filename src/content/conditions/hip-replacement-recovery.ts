import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-030',
  path: '/conditions/hip-replacement-recovery/',
  title: 'Hip Replacement Physical Therapy in Chatsworth | Dr. Ed, DPT',
  description:
    'After a hip replacement: walk without a limp, rebuild hip strength and trust the new joint. One-on-one with Dr. Ed Shut, DPT in Chatsworth. Book now.',
  hero: {
    h1: 'Hip replacement recovery: physical therapy in Chatsworth',
    lede: 'You have a new hip. Now you want to walk without a limp and trust it.',
    image: {
      src: '/img/hero-dr-ed-treating-patient-chatsworth.webp',
      srcMobile: '/img/hero-dr-ed-treating-patient-chatsworth-mobile.webp',
      alt: 'Dr. Ed Shut guiding a patient through a back exercise on the treatment table at Chatsworth Physical Therapy',
      width: 1800,
      height: 1125,
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
          lead: 'You have a new hip and precautions you are not sure about.',
          text: 'You want a clear answer on what is safe, and why.',
        },
        {
          lead: 'You are walking with a limp.',
          text: 'You can feel it in every step, and you want your walk back.',
        },
        {
          lead: 'Stairs and low chairs are a struggle.',
          text: 'You pull on the rail going up and push with both arms to stand.',
        },
        {
          lead: 'Your balance is not what it was.',
          text: 'You feel less steady and you do not want a fall.',
        },
        {
          lead: 'The other hip is next.',
          text: 'Dr. Ed also works with patients before surgery, not only after it.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Ed does about it',
      blocks: [
        {
          type: 'p',
          text: 'Hip replacement recovery is part of [Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/). Dr. Ed works on these with you:',
        },
        {
          type: 'leads',
          items: [
            {
              lead: 'Precaution review.',
              text: "Precautions after hip replacement have eased as surgery has improved. Follow what your surgeon tells you; Dr. Ed goes over your surgeon's instructions with you and works within them.",
            },
            {
              lead: 'Gait retraining.',
              text: 'He watches how you walk, finds where the pattern is off and retrains it. The aim is a walk without a limp.',
            },
            {
              lead: 'Hip abductor strength.',
              text: 'The [hip abductors](https://my.clevelandclinic.org/health/body/hip-abductors) are muscles near your hip that help you walk and keep your balance. He builds this strength with exercises he adjusts as you progress.',
            },
            {
              lead: 'Balance work.',
              text: 'He tests your balance and trains it. The [Balance and fall prevention](/balance-and-fall-prevention/) page explains his approach.',
            },
            {
              lead: 'Driving and daily tasks.',
              text: "He works with you on getting back to driving and daily tasks, within your surgeon's instructions.",
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
          text: "Your first visit is an evaluation, one-on-one with Dr. Ed. He looks at how you move, explains what he finds in plain terms and tells you the plan. Bring your surgeon's instructions and your discharge papers. He builds the plan from them.",
        },
        {
          type: 'p',
          text: 'Treatment is hands-on in the clinic, plus a short home program that he adjusts at each visit as you progress.',
        },
        {
          type: 'p',
          text: "There is no fixed number of visits or weeks. How long you need depends on your surgeon's plan and how your body responds, so Dr. Ed sets the plan after your first evaluation. Evening and Saturday appointments are available.",
        },
        {
          type: 'p',
          text: "Read [Susan's review on the balance page](/balance-and-fall-prevention/), from a patient who saw Dr. Ed after hip replacement surgery.",
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Related pages',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: '[Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
              text: 'Therapy before and after knee, hip and shoulder surgery.',
            },
            {
              lead: '[Balance and fall prevention](/balance-and-fall-prevention/)',
              text: 'How Dr. Ed tests and trains balance.',
            },
            {
              lead: '[Knee replacement recovery](/conditions/knee-replacement-recovery/)',
              text: 'For patients recovering from a knee replacement.',
            },
          ],
        },
      ],
    },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Common questions',
      items: [
        {
          q: 'When can I start?',
          a: 'You can start when your surgeon clears outpatient therapy, usually within two weeks of surgery. If you know your surgery date, book your evaluation ahead of time so there is no gap.',
        },
        {
          q: 'Can you help with balance after a hip replacement?',
          a: 'Yes. Balance is part of recovery after a hip replacement, and Dr. Ed works on it with you. The [Balance and fall prevention](/balance-and-fall-prevention/) page shows how.',
        },
        {
          q: 'Does Medicare cover it?',
          a: 'Yes, we accept Medicare. Medicare patients need a referral from the start, so ask your surgeon or doctor for one. The [insurance and cost](/insurance-and-cost/) page covers the rest.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your hip replacement evaluation',
    lead: 'Tell Dr. Ed which hip was replaced and when. He will confirm your time by phone or email, usually the same day.',
    service: 'Before or after surgery',
  },
  related: [
    { text: 'Pre and post-op physical therapy', href: '/pre-post-surgical-rehabilitation/' },
    { text: 'All conditions', href: '/conditions/' },
  ],
  schema: {
    condition: {
      name: 'Hip replacement recovery',
      associatedAnatomy: 'Hip',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/pre-post-surgical-rehabilitation/',
    },
  },
  notes: [
    "Open for Dr. Ed: his wording on anterior versus posterior precautions. The marker sits at the precaution review in What Dr. Ed does about it. The page says nothing specific about precautions.",
    'Photo: the hero frame is a stand-in. Shoot list: a gait or step-up frame with an older patient (Gabby). Swap it in when shot.',
    "Review: none on this page, by the build lead's decision. One sentence at the end of What to expect links Susan's review on the balance page and never quotes it. Ask the next hip patient for a review of their own.",
    "The Medicare FAQ uses the site-wide wording (Medicare patients need a referral from the start). The entry says the answer is yes with the surgeon's prescription.",
    'How long recovery usually takes: no duration for hip replacement is on file, so the page says there is no fixed number and Dr. Ed sets the plan after the evaluation. Add a plain usual range if Dr. Ed gives one.',
    'Outside source: the hip abductor sentence rests on the Cleveland Clinic page https://my.clevelandclinic.org/health/body/hip-abductors (fetched 2026-10-21), linked beside the claim. It is the only outbound link on the page. Delete the first sentence of that line and its link together if outbound links are not wanted; the second sentence stands on its own.',
  ],
};

export default page;
