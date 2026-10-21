import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-035',
  path: '/physical-therapy-northridge/',
  title: 'Physical Therapy Near Northridge, CA | Dr. Ed Shut, DPT',
  description:
    'Northridge patients drive a few minutes west on Nordhoff to see Dr. Ed Shut, DPT one-on-one. Evenings, Saturdays, Medicare, free parking. Book now.',
  hero: {
    h1: 'Physical therapy for Northridge patients, ten minutes away in Chatsworth',
    lede:
      "The clinic is at 19851 Nordhoff Place in Chatsworth. [verify: distance and drive time from Nordhoff and Reseda to 19851 Nordhoff Place; the 'ten minutes' in the H1 and description is unverified until then]",
    placeholder: 'PHOTO: the front of the building from Nordhoff Place with the street sign, to be shot',
    book: 'Book my evaluation',
  },
  sections: [
    {
      kind: 'prose',
      h2: 'Why Northridge patients come here',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: 'A Doctor of Physical Therapy.',
              text: 'Dr. Ed treats you himself, one-on-one, at every visit.',
            },
            {
              lead: 'A CSUN graduate.',
              text: "He earned his bachelor's degree in exercise science at California State University, Northridge (CSUN), and his DPT at Mount Saint Mary's.",
            },
            {
              lead: 'Time with him.',
              text: 'A visit runs about 60 minutes, depending on what you need.',
            },
            {
              lead: 'Evenings and Saturdays.',
              text: 'Book after work or on a Saturday, whichever fits your week.',
            },
            {
              lead: 'Medicare accepted.',
              text: 'Medicare patients need a referral from their doctor from the start. Everyone else can begin without one.',
            },
          ],
        },
        { type: 'p', text: '[CONFIRM]' },
      ],
    },
    {
      kind: 'prose',
      h2: 'Northridge patients',
      blocks: [
        {
          type: 'ul',
          items: [
            '[CONFIRM which of the 28 reviewers live in Northridge; if none, this section is cut and the page fails the test]',
            'CSUN students and athletes treated [CONFIRM]',
            'Patients discharged from Northridge Hospital after joint replacement [CONFIRM any]',
          ],
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Getting here from Northridge',
      blocks: [
        { type: 'p', text: 'Take Nordhoff Street west to Corbin, then turn left on Nordhoff Place. [verify]' },
        { type: 'p', text: 'Park in the free lot in front of the building. There is no gate code.' },
        { type: 'p', text: 'From CSUN and from Northridge Fashion Center [verify both routes]' },
        { type: 'placeholder', label: 'PHOTO: the map image with Northridge labelled, to be shot' },
        { type: 'p', text: 'A map and the [directions](/contact/) are on the contact page.' },
      ],
    },
    {
      kind: 'conditions',
      h2: 'What Northridge patients can come in for',
      items: [
        {
          text: '[Pre and post-op physical therapy](/pre-post-surgical-rehabilitation/)',
          note: 'Rehab before an operation, and recovery after a knee, hip or shoulder surgery.',
        },
        {
          text: '[Sports injury recovery](/sports-injury-recovery/)',
          note: 'Sprains, strains and the work of getting back to your sport.',
        },
        {
          text: '[Back pain therapy](/back-pain-therapy/)',
          note: 'Low back pain, sciatica and disc problems.',
        },
        {
          text: '[Balance and fall prevention](/balance-and-fall-prevention/)',
          note: 'For balance problems, and for anyone who wants to avoid a fall.',
        },
      ],
    },
    { kind: 'insurance' },
    {
      kind: 'faq',
      h2: 'Questions about coming from Northridge',
      items: [
        {
          q: 'How far is the clinic from Northridge?',
          a: 'The clinic is at 19851 Nordhoff Place in Chatsworth, west of Northridge. [verify] The route is laid out above.',
        },
        {
          q: 'Is there parking?',
          a: 'Yes. The lot in front of the building is free, and there is no gate code. Street parking is also available. The entrance and the parking are wheelchair accessible.',
        },
        {
          q: 'Do you have evening appointments?',
          a: 'Yes. The clinic is open until 8pm, Monday to Saturday. Pick an evening or Saturday slot when you book.',
        },
        {
          q: 'Do you take Medicare?',
          a: 'Yes. Dr. Ed accepts Medicare. Medicare patients need a referral from their doctor from the start.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Ed what is going on and pick a time that fits, evenings and Saturdays included. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  ],
  schema: { areaServed: ['Northridge'] },
  notes: [
    'The H1 and the meta description carry "ten minutes" and "a few minutes west on Nordhoff" exactly as the entry words them. Both are unverified until the drive is checked by map. The hero line holds the entry marker for it.',
    'Section 2 leaves the comparison with group and network clinics unwritten. The bare marker stands where it would go. It needs Dr. Ed to confirm the comparison as his own experience.',
    'Section 3 holds the entry three proof markers. If no reviewer lives in Northridge, the section is cut and the page does not go live.',
    'Section 4: the entry route says left on Nordhoff Place, while the approved homepage visit line puts the clinic just north of Nordhoff St. Heading west, a left turn goes south. Check the turn by map before the marker comes off.',
    'No review section. The Northridge review in the entry depends on the reviewer check in section 3.',
    'Section 5 heading says can come in for, not most often come in for: nobody has confirmed what Northridge patients most often come in for. No mention of Northridge Hospital, CSUN, the high schools or the retirement communities until confirmed.',
    'Section 2 and the insurance block both state the referral, Medicare and visit length facts because the decisions file lists them for section 2.',
    'The page list shows P-035 among the pages that link to P-036, but the entry has no link to Porter Ranch, so none was added.',
  ],
};

export default page;
