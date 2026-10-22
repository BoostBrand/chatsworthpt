import type { PageContent } from '../../lib/types';

const page: PageContent = {
  id: 'P-031',
  path: '/conditions/ankle-sprain/',
  title: 'Ankle Sprain Rehab in Chatsworth | Dr. Ed Shut, DPT',
  description:
    "Keep rolling the same ankle? See how Dr. Ed Shut, DPT rebuilds balance and strength one-on-one in Chatsworth before you go back. Book now.",
  hero: {
    h1: 'Ankle sprain rehab in Chatsworth: stop the sprain that keeps coming back',
    lede: 'I keep rolling my ankle, and I do not trust it.',
    image: {
      src: '/img/sports-injury-rehab-chatsworth.webp',
      alt: 'Ankle treatment during a sports injury rehab session in Chatsworth',
      width: 900,
      height: 900,
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
          lead: 'A fresh sprain and a swollen ankle.',
          text: 'You rolled it recently, and it is swollen and sore. You want to know how bad it is and what to do first.',
        },
        {
          lead: 'An ankle that has rolled more than once.',
          text: 'It has gone over before. Now a curb, a stair or one wrong step is enough to roll it again.',
        },
        {
          lead: 'A teen athlete back too soon.',
          text: 'Practice started again, but the ankle is not ready for it. Teens are welcome.',
        },
        {
          lead: 'An ankle that never feels stable on uneven ground.',
          text: 'Grass, gravel, a trail or a crowded sidewalk. You watch every step.',
        },
      ],
    },
    {
      kind: 'prose',
      h2: 'What Dr. Ed does about it',
      blocks: [
        {
          type: 'p',
          text: 'The sprain that comes back is usually the one that was rested, felt fine and was never retested. Ankle sprain physical therapy with Dr. Ed rebuilds balance and strength and tests the ankle before you go back.',
        },
        {
          type: 'ul',
          items: [
            '**He grades the sprain.** That means he works out how serious it is.',
            '**Early motion and swelling control.** He gets the ankle moving early and works on the swelling.',
            "**Balance and proprioception retraining.** Proprioception is your ankle's sense of where it is. He retrains it together with your balance.",
            '**Calf and peroneal strength.** He builds up the calf and the peroneal muscles.',
            '**Landing and cutting work before return.** Before you go back to sport, you practice landing and cutting. Cutting means changing direction fast.',
            '**Taping where it helps.** Some ankles do better with tape. He will tell you if yours does.',
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
          text: '**Evaluation first.** Your first visit is an evaluation, one-on-one with Dr. Ed. He examines how you move, finds what is actually causing the pain, and explains it in plain terms.',
        },
        {
          type: 'p',
          text: '**A plan you can follow at home.** Treatment in the clinic is hands-on, and you leave with a short home program that he adjusts each visit as you progress.',
        },
        {
          type: 'p',
          text: '**How long it takes.** It depends on the ankle. A mild sprain is a matter of weeks. A chronically unstable ankle, also called chronic ankle instability, needs a strength program. Dr. Ed does not quote a number of visits up front. He sets the plan after your evaluation.',
        },
        {
          type: 'p',
          text: '**Evenings and Saturdays.** Appointments run into the evening and on Saturdays, so you can come after work or school.',
        },
        {
          type: 'p',
          text: "For a patient's view of ankle rehab with Dr. Ed, read [Maggie's review on the sports injury page](/sports-injury-recovery/).",
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
              lead: '[Sports injury recovery](/sports-injury-recovery/)',
              text: 'The full sports rehab service, from sprains to return to sport.',
            },
            {
              lead: '[Plantar fasciitis](/conditions/plantar-fasciitis/)',
              text: 'Read this if the pain is in your heel or foot instead of the ankle.',
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
          q: 'Do I need an X-ray?',
          a: 'Yes, if you cannot put weight on the ankle or the bone is tender. Get the X-ray first, then bring the report to your first visit.',
        },
        {
          q: 'How long does a sprain take?',
          a: 'A mild sprain takes weeks. A chronically unstable ankle, one that keeps giving way, takes a strength program. After your evaluation, Dr. Ed tells you what to expect for your ankle.',
        },
        {
          q: "Can you treat kids' ankles?",
          a: 'Yes. Dr. Ed sees school-age children and teenagers, with a parent in the room for every visit. [Pediatric physical therapy](/pediatric-physical-therapy/) has more.',
        },
      ],
    },
  ],
  booking: {
    h2: 'Book your ankle evaluation',
    lead: 'Tell Dr. Ed what happened to your ankle and when. He will confirm your time by phone or email, usually the same day.',
    service: 'Sports injury',
  },
  related: [
    { text: 'Sports injury recovery', href: '/sports-injury-recovery/' },
    { text: 'All conditions', href: '/conditions/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  ],
  schema: {
    condition: {
      name: 'Ankle sprain',
      associatedAnatomy: 'Ankle ligaments',
      possibleTreatment: 'Physical therapy',
      parentServicePath: '/sports-injury-recovery/',
    },
  },
  notes: [
    'Build lead: the body no longer says an ankle sprained twice will sprain again (a categorical claim); it uses the approved sports page line about the injury that was rested and never retested. The blueprint meta description still makes the claim, flagged for Vlad.',
    'No review section, per the build lead decision. The Maggie sentence in What to expect links to her review on the sports injury page and never quotes it.',
    'Entry asks for two sibling conditions and one blog post where it exists. It names only Plantar fasciitis and no ankle post exists in pages.json, so Related pages lists the parent service and Plantar fasciitis, as the decision file says.',
    'FAQ on the X-ray gives only the entry yes case, plus a line to bring the report (reworded from the approved back pain imaging answer). No otherwise sentence was added.',
    'Short plain definitions of grading, proprioception and cutting are the only additions beyond the entry wording. Cut them if Dr. Ed prefers.',
  ],
};

export default page;
