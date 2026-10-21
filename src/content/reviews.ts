import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-018',
  path: '/reviews/',
  title: 'Chatsworth Physical Therapy Reviews | 5.0 on Google',
  description:
    'Read real Google reviews of Chatsworth Physical Therapy and Dr. Ed Shut, DPT: back pain, shoulders, post-op rehab, kids and seniors. Leave your own review.',
  hero: {
    h1: "Chatsworth Physical Therapy reviews, in patients' own words",
    lede: 'Real Google reviews, shown as patients wrote them, with first names and dates.',
    stars: true,
    actions: [
      {
        text: 'Leave a review',
        href: 'https://search.google.com/local/writereview?placeid=ChIJjzo2DhibwoAR1KeHYSgrQkE',
        style: 'light',
      },
      {
        text: 'Read all on Google',
        href: 'https://www.google.com/maps/search/?api=1&query=Chatsworth+Physical+Therapy&query_place_id=ChIJjzo2DhibwoAR1KeHYSgrQkE',
        style: 'ghost',
      },
    ],
  },
  sections: [
    {
      kind: 'video',
      h2: "Matt's frozen shoulder story",
      review: { key: 'matthew-s', context: 'frozen shoulder' },
      note: 'Matt came back to tell his story on camera, with captions on screen.',
    },
    {
      kind: 'reviews',
      h2: 'Reviews by what brought patients in',
      groups: [
        {
          title: 'Back pain',
          items: [
            { key: 'george', context: 'severe back pain', href: '/back-pain-therapy/', linkText: 'back pain therapy' },
            { key: 'chris', context: 'back pain', href: '/back-pain-therapy/', linkText: 'back pain therapy' },
            { key: 'anrii', context: 'back pain', href: '/back-pain-therapy/', linkText: 'back pain therapy' },
            { key: 'nadezhda', context: 'back pain', href: '/back-pain-therapy/', linkText: 'back pain therapy' },
          ],
        },
        {
          title: 'Neck and shoulder',
          items: [
            { key: 'mike', context: 'shoulder pain', href: '/orthopedic-rehabilitation/', linkText: 'orthopedic rehabilitation' },
            { key: 'jennifer', context: 'partial shoulder tear', href: '/red-light-therapy/', linkText: 'red light therapy' },
            { key: 'mary', context: 'shoulder pain', href: '/orthopedic-rehabilitation/', linkText: 'orthopedic rehabilitation' },
            { key: 'david', context: 'pinched nerve', href: '/conditions/neck-pain/', linkText: 'neck pain' },
            { key: 'michael-l', context: 'neck and shoulder pain', href: '/orthopedic-rehabilitation/', linkText: 'orthopedic rehabilitation' },
            { key: 'linda', context: 'limited mobility', href: '/orthopedic-rehabilitation/', linkText: 'orthopedic rehabilitation' },
          ],
        },
        {
          title: 'After surgery',
          items: [
            { key: 'maggie-and-mark', context: 'ACL reconstruction', href: '/pre-post-surgical-rehabilitation/', linkText: 'pre and post-op physical therapy' },
            { key: 'susan', context: 'hip replacement', href: '/pre-post-surgical-rehabilitation/', linkText: 'pre and post-op physical therapy' },
          ],
        },
        {
          title: 'Feet and ankles',
          items: [
            { key: 'maggie-mcc', context: 'ankles', href: '/sports-injury-recovery/', linkText: 'sports injury recovery' },
            { key: 'melissa', context: 'heel and foot pain', href: '/conditions/plantar-fasciitis/', linkText: 'plantar fasciitis' },
          ],
        },
        {
          title: 'Kids and teens',
          items: [
            { key: 'rika', context: "daughter's pain", href: '/pediatric-physical-therapy/', linkText: 'pediatric physical therapy' },
            { key: 'tati', context: "gymnast's back injury", href: '/pediatric-physical-therapy/', linkText: 'pediatric physical therapy' },
          ],
        },
        {
          title: 'Neurological',
          items: [
            { key: 'anthony', context: 'nerve issues after neck surgeries', href: '/neurological-rehabilitation/', linkText: 'neurological rehabilitation' },
          ],
        },
        {
          title: 'Weight loss',
          items: [
            { key: 'kate', context: 'back and knee pain', href: '/personal-training-weight-loss/', linkText: 'personal training and weight loss' },
          ],
        },
        {
          title: 'General',
          items: [
            { key: 'sarkis' },
            { key: 'dolores' },
            { key: 'elena' },
            { key: 'matthew-m' },
            { key: 'michael-w' },
            { key: 'lauren' },
          ],
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'How reviews are collected',
      blocks: [
        {
          type: 'p',
          text: 'We ask patients for a review after discharge. We never pay for one. Each review is shown as written on Google, with the first name and the month it was posted.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Ed what hurts. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'About Dr. Ed', href: '/about-us/' },
  ],
  notes: [
    'This page prints 25 of the 28 Google reviews: 24 in the groups plus Matthew S beside the video. Left off by the build lead: Vlada, Keith, Jonathan. The badge says 28 because Google does.',
    'The review file column is quote as shown on Google, trimmed. Matthew S has theme words (near workplace, flexible scheduling) that his quote does not contain, so some quotes may be shorter than the full Google review. The collection paragraph therefore says shown as written on Google, never in full.',
    'The collection paragraph (asked after discharge, never paid for) is from the blueprint entry. Dr. Ed should confirm both statements are true before launch.',
    'The six General reviews carry no context label because none of them states a situation.',
  ],
};

export default page;
