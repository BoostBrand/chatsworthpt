import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-012',
  path: '/red-light-therapy/',
  title: 'Red Light Therapy in Chatsworth | Dr. Edward Shut, DPT',
  description:
    "Red light therapy in Chatsworth, used by Dr. Edward Shut, DPT as part of one-on-one physical therapy for pain and injuries. See what the research shows.",
  hero: {
    h1: 'Red light therapy in Chatsworth, as part of your physical therapy plan',
    lede: 'Red light is one tool inside your physical therapy plan, applied by Dr. Edward himself. It is not a wellness lounge session.',
    image: {
      src: '/img/red-light-therapy-chatsworth.webp',
      width: 900,
      height: 900,
      alt: 'Red light therapy session at Chatsworth Physical Therapy',
    },
    book: 'Book my evaluation',
  },
  sections: [
    {
      kind: 'prose',
      h2: 'What red light therapy is, and what it is not',
      blocks: [
        {
          type: 'p',
          text: 'Red light therapy puts low-level light on the treated area. Researchers call this kind of treatment photobiomodulation, and many studies use the name low-level laser therapy.',
        },
        {
          type: 'p',
          text: 'The research is mixed. [A 2017 review in the European Journal of Physical and Rehabilitation Medicine](https://pubmed.ncbi.nlm.nih.gov/28145397/) pooled earlier studies and found that adults with muscle and joint problems had lower pain on average with low-level laser therapy than in comparison groups. Results differed widely from study to study.',
        },
        {
          type: 'p',
          text: '[A 2018 assessment by the Washington State Department of Labor and Industries](https://www.lni.wa.gov/patient-care/_docs/HTAupdateLLLT_011818.pdf) rated the overall quality of the evidence as low or very low and called the results on whether it works highly inconsistent. It saw a small short-term difference from placebo for some conditions, and said it was uncertain whether that difference is meaningful for patients. Long-term data were lacking, and wavelength, dose, session length and number of sessions varied widely between studies.',
        },
        {
          type: 'p',
          text: 'Here, red light is added to hands-on treatment and exercise, not used in place of them. It is one tool inside a plan, never the whole plan.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'How Dr. Edward uses it',
      blocks: [
        {
          type: 'p',
          text: 'Dr. Edward applies red light to the treated area, usually after manual therapy, for about 10 minutes as part of the visit. It is not a separate treatment and is not sold on its own. It is best avoided on skin with eczema or an infection. His device is a KOZE LED unit (KOZE lists 660 and 850 nanometers, red and near-infrared, for its panels), not a laser, so read the studies above as a guide to the field rather than a promise about this device.',
        },
      ],
    },
    {
      kind: 'conditions',
      h2: 'Where red light fits in a plan',
      intro: 'Dr. Edward adds red light to the plan for these problems. The linked pages explain the rest of the treatment.',
      items: [
        {
          text: 'Recovery after ACL and shoulder repairs: more on [Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
        },
        { text: 'Tendon pain' },
        { text: 'Back pain: more on [back pain therapy](/back-pain-therapy/)' },
        { text: 'Knee pain: more on [knee pain](/conditions/knee-pain/)' },
      ],
    },
    { kind: 'review', review: { key: 'jennifer', context: 'partial shoulder tear' } },
    {
      kind: 'insurance',
      blocks: [
        {
          type: 'p',
          text: 'Red light is part of a physical therapy visit and included in its price. It is not offered on its own.',
        },
      ],
    },
    {
      kind: 'faq',
      h2: 'Questions about red light therapy',
      items: [
        {
          q: 'Is red light therapy the same as a tanning bed or a spa session?',
          a: 'No. Red light therapy is low-level light on the treated area, with no UV. Dr. Edward applies it as part of treatment.',
        },
        {
          q: 'Does it hurt?',
          a: 'No. Most people feel mild warmth. Tell Dr. Edward if anything feels uncomfortable.',
        },
        {
          q: 'How many sessions?',
          a: 'Red light rides along with your visits, though not every visit: Dr. Edward decides from your results, your medical history and your condition. He does not quote a number of visits up front.',
        },
        {
          q: 'Can I come just for red light?',
          a: 'No. Red light is only offered as part of a physical therapy visit.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Edward what hurts and when you are free. He will confirm your time by phone or email, usually the same day.',
    service: 'Pain management',
  },
  related: [
    { text: 'Pain management', href: '/pain-management/' },
    { text: 'Pre and post-op physical therapy', href: '/pre-post-surgical-rehabilitation/' },
    { text: 'Red light therapy for back and knee pain', href: '/blog/red-light-therapy-back-knee-pain/' },
    { text: 'All services', href: '/our-services/' },
  ],
  schema: { serviceType: 'Red light therapy' },
  notes: [
    'Section 2 sources were fetched on 2026-10-21: PubMed 28145397 (2017 meta-analysis of low-level laser therapy for musculoskeletal pain) and the Washington State Department of Labor and Industries technology assessment update dated 2018-01-18. Re-fetch both before accepting.',
    'The coverage decision that went with the 2018 assessment was superseded by a new L&I payment policy effective 2023-11-01. The assessment is still listed by L&I as a reference. Build lead to decide whether the 2018 source is current enough.',
    'Ask Dr. Edward which device he uses (laser or LED, and the wavelength). Both cited sources are about low-level laser therapy.',
    'The meta description says "speed tissue recovery". Neither cited source shows that red light speeds recovery, so the body copy does not repeat it.',
    'Open markers for Dr. Edward: minutes per application and stand-alone sale (section 3), stand-alone pricing (insurance block), and whether anyone can come just for red light (FAQ 4).',
  ],
};

export default page;
