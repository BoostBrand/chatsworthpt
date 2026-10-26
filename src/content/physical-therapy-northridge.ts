import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-035',
  path: '/physical-therapy-northridge/',
  title: 'Physical Therapy Near Northridge, CA | Dr. Edward Shut, DPT',
  description:
    'Northridge patients drive a few minutes west on Nordhoff to see Dr. Edward Shut, DPT one-on-one. Evenings, Saturdays, Medicare, free parking. Book now.',
  ogImage: '/img/northridge-csun-university-library-share.jpg',
  ogImageMeta: {
    alt: 'Front steps and facade of the CSUN University Library in Northridge.',
    width: 1200,
    height: 715,
  },
  hero: {
    h1: 'Physical therapy for Northridge patients, ten minutes away in Chatsworth',
    lede:
      'The clinic is at 19851 Nordhoff Place in Chatsworth, about 2 miles west of Nordhoff Street and Reseda Boulevard.',
    book: 'Book my evaluation',
    image: {
      src: '/img/northridge-csun-university-library-1200.webp',
      alt: 'Front steps and facade of the CSUN University Library in Northridge.',
      width: 1200,
      height: 715,
      whole: true,
      maxWidth: 1600,
      title: 'CSUN University Library in Northridge',
      description: 'The front facade, steps and lawn of the CSUN University Library in Northridge, photographed in 2008.',
      caption: 'CSUN University Library. [CSUN Central Campus.JPG](https://commons.wikimedia.org/wiki/File:CSUN_Central_Campus.JPG) by [Cbl62](https://en.wikipedia.org/wiki/User:Cbl62), with prior edits by [Pd THOR](https://en.wikipedia.org/wiki/User:Pd_THOR), via Wikimedia Commons, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Resized and converted for the web; no additional cropping.',
      srcSet: [
        { src: '/img/northridge-csun-university-library-480.webp', width: 480 },
        { src: '/img/northridge-csun-university-library-768.webp', width: 768 },
        { src: '/img/northridge-csun-university-library-1200.webp', width: 1200 },
        { src: '/img/northridge-csun-university-library-1600.webp', width: 1600 },
      ],
    },
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
              text: 'Dr. Edward treats you himself, one-on-one, at every visit.',
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
        { type: 'p', text: 'It is rare for a physical therapy clinic to have a licensed physical therapist work with you for the entire visit. Here, Dr. Edward does, every visit.' },
      ],
    },
    {
      kind: 'prose',
      h2: 'Northridge patients',
      blocks: [
        {
          type: 'ul',
          items: [
            'Dr. Edward treats CSUN students and athletes, and CSUN students and faculty can ask about a discount when they book.',
            'Many of his joint replacement patients come to him after discharge from Northridge Hospital.',
          ],
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Getting here from Northridge',
      blocks: [
        { type: 'p', text: 'Take Nordhoff Street west. Keep right where Nordhoff Way splits off, cross Corbin Avenue, and you are on Nordhoff Place, with the clinic just ahead.' },
        { type: 'p', text: 'Park in the free lot in front of the building. There is no gate code.' },
        { type: 'p', text: 'From CSUN, it is under 3 miles west along Nordhoff Street. From Northridge Fashion Center, take Shirley Avenue south to Nordhoff Street, turn right, and continue across Corbin Avenue onto Nordhoff Place, just under a mile.' },
    { type: 'image', image: { src: '/img/map-chatsworth-physical-therapy-19851-nordhoff.webp', width: 1200, height: 750, alt: 'Map showing Chatsworth Physical Therapy at 19851 Nordhoff Place, between Winnetka Avenue and Corbin Avenue, north of Nordhoff Street' } },
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
          a: 'The clinic is at 19851 Nordhoff Place in Chatsworth, about 2 miles west of Nordhoff Street and Reseda Boulevard and under 3 miles from CSUN. The route is laid out above.',
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
          a: 'Yes. Dr. Edward accepts Medicare. Medicare patients need a referral from their doctor from the start.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Edward what is going on and pick a time that fits, evenings and Saturdays included. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
    { text: 'Physical therapy for Porter Ranch', href: '/physical-therapy-porter-ranch/' },
  ],
  schema: { areaServed: ['Northridge'] },
  notes: [
    'Live (Vlad, 23 Oct 2026: both city pages go live at launch, CITY_PAGES_LIVE true). Linked from the homepage service-area line and the contact page directions. The reviewer line is out (nobody knows which reviewers live here); the CSUN, Northridge Hospital and route proof stays.',
    'The H1 and the meta description carry "ten minutes" and "a few minutes west on Nordhoff" exactly as the entry words them. Both are unverified until the drive is checked by map. The hero line holds the entry marker for it.',
    'Section 2 leaves the comparison with group and network clinics unwritten. The bare marker stands where it would go. It needs Dr. Edward to confirm the comparison as his own experience.',
    'Section 3 holds the entry three proof markers. If no reviewer lives in Northridge, the section is cut and the page does not go live.',
    'Section 4: the entry route says left on Nordhoff Place, while the approved homepage visit line puts the clinic just north of Nordhoff St. Heading west, a left turn goes south. Check the turn by map before the marker comes off.',
    'No review section. The Northridge review in the entry depends on the reviewer check in section 3.',
    'Section 5 heading says can come in for, not most often come in for: nobody has confirmed what Northridge patients most often come in for. No mention of Northridge Hospital, CSUN, the high schools or the retirement communities until confirmed.',
    'Section 2 and the insurance block both state the referral, Medicare and visit length facts because the decisions file lists them for section 2.',
    'Related links include Porter Ranch (the architecture CSV has each city page linking to the other; added when both went live, 23 Oct 2026).',
  ],
};

export default page;
