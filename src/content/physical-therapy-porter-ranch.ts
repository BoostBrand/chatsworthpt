import type { PageContent } from '../lib/types';

const page: PageContent = {
  id: 'P-036',
  path: '/physical-therapy-porter-ranch/',
  title: 'Physical Therapy Near Porter Ranch | Dr. Ed Shut, DPT',
  description:
    "Physical therapy for Porter Ranch families, one-on-one with Dr. Ed Shut, DPT in nearby Chatsworth. Book an evaluation.",
  hero: {
    h1: 'Physical therapy for Porter Ranch families, one-on-one in nearby Chatsworth',
    lede: 'Dr. Ed sees patients at 19851 Nordhoff Place, Unit 105, in Chatsworth, under 4 miles from Porter Ranch Town Center straight down Corbin Avenue.',
    book: 'Book my evaluation',
  },
  sections: [
    {
      kind: 'prose',
      h2: 'Why Porter Ranch patients come here',
      blocks: [
        {
          type: 'p',
          text: 'Porter Ranch is part of the area this clinic serves. Four things to know before you book.',
        },
        {
          type: 'leads',
          items: [
            {
              lead: 'One doctor, every visit.',
              text: 'Dr. Ed is a Doctor of Physical Therapy. He evaluates you on day one and treats you himself, one-on-one, at every visit after that.',
            },
            {
              lead: 'Evenings and Saturdays.',
              text: 'You can book a time after work or on a Saturday, so treatment does not have to cut into your workday.',
            },
            {
              lead: 'Kids and teens welcome.',
              text: 'A parent stays in the room for every visit with a school-age child or a teenager.',
            },
            {
              lead: 'Medicare accepted.',
              text: 'The rules on referrals, and how other insurance works, are further down this page.',
            },
          ],
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'Getting here from Porter Ranch',
      blocks: [
        { type: 'p', text: 'Take Corbin Avenue south from Porter Ranch and turn right onto Nordhoff Place.' },
        {
          type: 'p',
          text: 'Park free in the lot in front of the building. There is no gate code, and street parking is also available. The contact page has a map and [directions](/contact/).',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Porter Ranch patients come in for',
      blocks: [
        {
          type: 'leads',
          items: [
            {
              lead: 'Kids and teens.',
              text: 'Dr. Ed provides [pediatric physical therapy](/pediatric-physical-therapy/) for school-age children and teenagers, gymnasts and dancers included.',
            },
            {
              lead: 'Sports injuries.',
              text: 'Dr. Ed treats sprains, strains, ACL and rotator cuff injuries under [sports injury recovery](/sports-injury-recovery/), through to the return to sport.',
            },
            {
              lead: 'Balance and dizziness.',
              text: 'Balance problems, dizziness and vertigo are treated under [balance and fall prevention](/balance-and-fall-prevention/).',
            },
            {
              lead: 'Before and after surgery.',
              text: 'Dr. Ed offers [pre and post-op physical therapy](/pre-post-surgical-rehabilitation/), from prehab before the operation to recovery after knee, hip and shoulder surgery.',
            },
            {
              lead: 'Back pain.',
              text: '[Back pain therapy](/back-pain-therapy/) covers low back pain, sciatica, disc problems and posture.',
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
          q: 'How far is Chatsworth from Porter Ranch?',
          a: 'The clinic is at 19851 Nordhoff Place, Unit 105, in Chatsworth, under 4 miles from Porter Ranch Town Center, straight down Corbin Avenue.',
        },
        {
          q: 'Do you treat kids?',
          a: 'Yes. Dr. Ed treats school-age children and teenagers only, and a parent stays in the room for every visit. That includes gymnasts, dancers and other young athletes.',
        },
        {
          q: 'Do you take Medicare?',
          a: 'Yes. Dr. Ed accepts Medicare. Medicare patients need a referral from the start, so ask your doctor for one before you begin.',
        },
        {
          q: 'Is parking easy?',
          a: 'Yes. The lot in front of the building is free and has no gate code, and street parking is available too. The entrance and the parking are wheelchair accessible.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your evaluation',
    lead: 'Tell Dr. Ed what hurts and which days work for you. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'All services', href: '/our-services/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
    { text: 'Physical therapy for Northridge', href: '/physical-therapy-northridge/' },
  ],
  schema: { areaServed: ['Porter Ranch'] },
  notes: [
    'Live (Vlad, 23 Oct 2026: both city pages go live at launch, CITY_PAGES_LIVE true). Linked from the homepage service-area line and the contact page directions.',
    'Entry rule: if Dr. Ed confirms no Porter Ranch reviews and no school or club families, section 3 is cut and the page is not built. Nobody knows which reviewers live here (Vlad, 23 Oct 2026), so the reviewer section is cut; Vlad chose to publish the page anyway.',
    'Section 2 uses the build lead places-search wording of 21 Oct 2026, with the marker [verify before launch]. It does not name another clinic.',
    'The meta description is the entry text and says Porter Ranch has no physical therapy clinic of its own. The places result supports only that no clinic was found with a Porter Ranch address. Decide whether to soften the meta line before launch.',
    'The H1 and meta description say nearby and a short drive away. Both depend on the route and drive time check in the hero lede, the Getting here section and the first FAQ.',
    'Left out on purpose: any claim about who lives in Porter Ranch (the entry mentions young families and a retirement community), any drive time, any route, and any other clinic by name.',
    'The Medicare FAQ answers with the site-wide fact (referral from the start). The entry answer was Yes with a referral.',
    'The shoot list item map with Porter Ranch labelled has no slot on this page. Add a placeholder in Getting here once the route is verified.',
    'The supporting keyword 91326 is not used because the ZIP is not on the facts list.',
  ],
};
export default page;
