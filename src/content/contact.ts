import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-020',
  path: '/contact/',
  title: 'Contact and Directions | Chatsworth Physical Therapy',
  description:
    'Book an evaluation or call (818) 749-3205. 19851 Nordhoff Place, Unit 105 (Suite C), Chatsworth, CA, 91311. Mon to Sat 10am to 8pm. Park free in front.',
  hero: {
    h1: 'Contact Chatsworth Physical Therapy: book, call or visit',
    lede: 'Book online or call. Dr. Edward confirms your time, usually the same day.',
  },
  sections: [
    {
      kind: 'visit',
      h2: 'Address, hours and parking',
      // 25 Oct 2026 preview (Vlad's call): the entrance photo shows the street number, unit and Suite C lettering.
      photo: {
        src: '/img/dr-edward-shut-chatsworth-clinic-entrance-480.webp',
        width: 480,
        height: 480,
        alt: 'Dr. Edward Shut standing outside Chatsworth Physical Therapy beside the clinic entrance at 19851 Nordhoff Place.',
        srcSet: [
          { src: '/img/dr-edward-shut-chatsworth-clinic-entrance-480.webp', width: 480 },
          { src: '/img/dr-edward-shut-chatsworth-clinic-entrance-768.webp', width: 768 },
          { src: '/img/dr-edward-shut-chatsworth-clinic-entrance-1200.webp', width: 1200 },
          { src: '/img/dr-edward-shut-chatsworth-clinic-entrance-1600.webp', width: 1600 },
        ],
      },
      photoCaption: 'Look for 19851 #105 over the door and Chatsworth Physical Therapy on the window.',
      blocks: [
        {
          type: 'p',
          text: 'Park free in the lot in front. There is no gate code, and street parking is also available. You will find us between Winnetka and Corbin, just north of Nordhoff St.',
        },
        {
          type: 'p',
          text: 'Dr. Edward speaks English and Russian, so you can be treated in either.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Getting here from each city',
      intro: 'For turn-by-turn directions from your own address, use the Get directions button on the map. From outside Chatsworth, these are the main roads in from each city we serve.',
      blocks: [
        {
          type: 'ul',
          items: [
            'From [Porter Ranch](/physical-therapy-porter-ranch/), take Corbin Avenue south and turn right onto Nordhoff Place.',
            'From [Northridge](/physical-therapy-northridge/), take Nordhoff Street west, keep right where Nordhoff Way splits off, and continue across Corbin Avenue onto Nordhoff Place.',
            'From West Hills or Canoga Park, take Topanga Canyon Boulevard to Parthenia Street, head east to Corbin Avenue, turn left, then turn left again onto Nordhoff Place.',
            'From Granada Hills, take Devonshire Street west to Corbin Avenue, turn left, then turn right onto Nordhoff Place.',
            'From Simi Valley, take the 118 east to the De Soto Avenue exit, head south on De Soto, turn left on Plummer Street, then right on Oakdale Avenue to the clinic.',
          ],
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What happens after you book',
      blocks: [
        {
          type: 'ol',
          items: [
            'Dr. Edward confirms your time by phone or email, usually the same day. If an evening or Saturday time suits you better, say so when you book.',
            'Wear clothes you can move in. Shorts work for a knee, hip or ankle problem. A tank top or loose shirt works for the shoulder, neck or back.',
            'At your first visit, Dr. Edward examines how you move, finds what is causing the pain and explains it in plain terms.',
            'After that, Dr. Edward sets your plan instead of guessing how many visits you will need. It combines hands-on treatment in the clinic with a short home program, adjusted each visit as you progress.',
          ],
        },
        {
          type: 'p',
          text: 'School-age children and teens are welcome, including gymnasts and dancers. If you are booking for one, a parent stays in the room for every visit.',
        },
        {
          type: 'p',
          text: '[Your first visit](/first-visit/) walks through each step. For referrals, Medicare and cost, read [Insurance and cost](/insurance-and-cost/).',
        },
      ],
    },
    { kind: 'review', review: { key: 'mike', context: 'shoulder pain' } },
    {
      kind: 'social',
      h2: 'Also on',
      label: 'Follow',
      text: 'Find the clinic on Facebook, Instagram, YouTube and X, or read patient reviews on [Chatsworth Physical Therapy on Google](https://www.google.com/maps/search/?api=1&query=Chatsworth+Physical+Therapy&query_place_id=ChIJjzo2DhibwoAR1KeHYSgrQkE).',
    },
  ],
  booking: false,
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'Your first visit', href: '/first-visit/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  ],
  notes: [
    'Drive times are left out on purpose (build lead ruling). The marker in the Getting here section covers the routes only.',
    'Wheelchair access: this page relies on the facts table access row to print the approved line. If the table does not print it, add the approved line to the parking paragraph.',
    'What to bring: only the approved what-to-wear facts are used. A document list (photo ID, insurance card, referral, imaging) needs an answer from Dr. Edward before it goes on the page.',
    'No front door or parking lot photo placeholder added: the entry gives a shoot list line, not a photo description.',
    'This page has no insurance section, so the three site-wide lines do not print here. The page points to Insurance and cost instead.',
  ],
};

export default page;
