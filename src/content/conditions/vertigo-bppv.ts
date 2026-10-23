import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-033',
  path: '/conditions/vertigo-bppv/',
  title: 'Vertigo and BPPV Physical Therapy Chatsworth | Dr. Ed, DPT',
  description:
    'The room spins when you roll over or look up: that is usually BPPV, and repositioning in the clinic often settles it in a few visits. Book with Dr. Ed.',
  hero: {
    h1: 'Vertigo and BPPV treatment with physical therapy in Chatsworth',
    lede: 'The room spins when you roll over or look up. Dr. Ed tests for BPPV and treats it in the clinic.',
    book: 'Book my evaluation',
    stars: true,
  },
  sections: [
    {
      kind: 'who',
      h2: 'Is this you?',
      items: [
        {
          lead: 'The room spins when you roll over in bed or look up.',
          text: 'That is usually BPPV, and Dr. Ed tests for it.',
        },
        {
          lead: 'Your dizziness followed an ear infection or a knock to the head, or came with age.',
          text: 'The positional test usually tells Dr. Ed whether it is BPPV.',
        },
        {
          lead: 'You feel unsteady and blame your balance.',
          text: 'It may be your balance, or it may be dizziness. Dr. Ed tests for both.',
        },
        {
          lead: 'Your doctor referred you for vestibular therapy.',
          text: 'Dr. Ed offers it for vertigo, dizziness and balance problems.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Ed does about it',
      blocks: [
        {
          type: 'p',
          text: 'Dr. Ed starts by finding out what is behind the dizziness, because the cause decides the treatment. He also tells you when to see a physician first.',
        },
        { type: 'h3', text: 'The positional test' },
        {
          type: 'p',
          text: 'In its [patient guide to BPPV](https://www.choosept.com/guide/physical-therapy-guide-benign-paroxysmal-positional-vertigo-bppv), the American Physical Therapy Association (APTA) says: "Physical therapists use positional tests to recreate BPPV symptoms." Dr. Ed does this test in the clinic, and it usually answers whether you have BPPV in one visit. He is trained in the Dix-Hallpike test and the Epley maneuver, and he screens you first to make sure they are right for you.',
        },
        { type: 'h3', text: 'Repositioning maneuvers' },
        {
          type: 'p',
          text: 'The [APTA guide](https://www.choosept.com/guide/physical-therapy-guide-benign-paroxysmal-positional-vertigo-bppv) also says BPPV occurs when crystals in the inner ear break off and move to a part called the semicircular canal. The guide adds: "Most cases of BPPV can be managed with treatment maneuvers by a physical therapist." The maneuvers are designed to move the crystals from the canal back into the appropriate area. Dr. Ed does repositioning maneuvers in the clinic, and they often settle BPPV within a few visits.',
        },
        { type: 'h3', text: 'If it is not BPPV' },
        {
          type: 'p',
          text: 'For other dizziness, Dr. Ed builds a graded program of head and eye movements that goes up in steps. If you are unsteady too, he adds balance work, covered on the [Balance and fall prevention](/balance-and-fall-prevention/) page.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What to expect',
      blocks: [
        {
          type: 'p',
          text: 'Your first visit is an evaluation, one-on-one with Dr. Ed. He explains what he found in plain terms and tells you the plan. Treatment is in the clinic plus a short home program, adjusted each visit as you progress.',
        },
        {
          type: 'p',
          text: 'How long it takes depends on the cause. BPPV often settles within a few visits. Other dizziness follows a graded program, so the pace depends on how you respond. Evening and Saturday appointments are available.',
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
              lead: '[Balance and fall prevention](/balance-and-fall-prevention/)',
              text: 'Balance work, fall prevention and vestibular therapy.',
            },
            {
              lead: '[Neurological rehabilitation](/neurological-rehabilitation/)',
              text: "Dr. Ed's work with stroke, Parkinson's, MS, and spinal cord and brain injury.",
            },
            {
              lead: '[Vertigo and BPPV: why the room spins](/blog/vertigo-bppv-why-the-room-spins/)',
              text: 'Why the room spins, and what a physical therapist does about it.',
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
          q: 'Is it BPPV?',
          a: 'Spinning when you roll over or look up is usually BPPV. The positional test in the clinic usually answers it in one visit.',
        },
        {
          q: 'How many visits?',
          a: 'For BPPV, repositioning maneuvers done in the clinic often settle it within a few visits. Other dizziness improves with a graded exercise program. Dr. Ed sets the plan after your first evaluation rather than guessing up front.',
        },
        {
          q: 'Does Medicare cover vestibular therapy?',
          a: 'Yes. We accept Medicare, and Medicare patients need a referral from the start. Dizziness is a common reason for one. The [insurance and cost](/insurance-and-cost/) page has the rest.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your vertigo evaluation',
    lead: 'Tell us what sets off the spinning. He will confirm your time by phone or email, usually the same day.',
    service: 'Balance or fall prevention',
  },
  related: [
    { text: 'Balance and fall prevention', href: '/balance-and-fall-prevention/' },
    { text: 'All conditions', href: '/conditions/' },
  ],
  schema: {
    condition: {
      name: 'Benign paroxysmal positional vertigo (BPPV)',
      associatedAnatomy: 'Inner ear (vestibular system)',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/balance-and-fall-prevention/',
    },
  },
  notes: [
    'No vertigo review exists yet, so the page has no review section. Ask the next vertigo patient.',
    'The hero is a placeholder until a vertigo repositioning frame is shot.',
    'The positional test and repositioning maneuvers are confirmed by Dr. Ed (20 Oct 2026).',
    'The lines on what BPPV is, the positional test and the maneuvers come from the APTA ChoosePT guide to BPPV (expert review 15 Mar 2020, fetched 21 Oct 2026). The page says nothing beyond that guide. It names no specific test or maneuver, so the page names none.',
    'The entry asks for two sibling conditions but names none in its links out. Related pages follow the build lead decision: Balance and fall prevention, Neurological rehabilitation and the blog post.',
    'The Medicare FAQ answer carries the site-wide Medicare and referral facts because the entry answer was shorter. The Yes to the coverage question is the entry wording.',
  ],
};

export default page;
