import type { PostContent } from '../../lib/types';

const post: PostContent = {
  id: 'P-040',
  path: '/blog/what-to-expect-first-physical-therapy-visit/',
  title: 'First Physical Therapy Visit: What to Expect | Dr. Ed, DPT',
  description:
    "Your first physical therapy visit, step by step: the questions, the tests, the first treatment and what to wear. Dr. Ed Shut, DPT explains.",
  h1: 'What to expect at your first physical therapy visit, and what to wear',
  datePublished: '2026-10-21',
  parent: { text: 'Your first visit', href: '/first-visit/' },
  summary: 'The order of a first visit with Dr. Ed, how long it takes, what to wear and what to bring.',
  answer:
    'At Chatsworth Physical Therapy, your first visit is an evaluation with Dr. Ed Shut, DPT: he asks what hurts, watches you move, measures your strength and how far your joints move, explains what he found and starts treatment. It runs about 60 minutes, depending on what you need, and you should wear comfortable clothes you can move in.',
  body: [
    { type: 'h2', text: 'What to wear to physical therapy' },
    {
      type: 'p',
      text: 'Comfortable clothes you can move in. Shorts for knee, hip or ankle issues, and a tank top or loose shirt for shoulder, neck and back.',
    },
    {
      type: 'p',
      text: 'The reason is practical. Dr. Ed watches how you move and measures how far each joint goes, so the area that hurts should be easy to see and free to move. If you are not sure what suits your problem, ask when you book.',
    },

    { type: 'h2', text: 'How long a physical therapy session lasts' },
    {
      type: 'p',
      text: 'At Chatsworth Physical Therapy, a session runs about 60 minutes, depending on what you need, and every one is one-on-one with Dr. Ed. At your first visit, the time goes to the evaluation, your first treatment and your home program.',
    },
    {
      type: 'p',
      text: 'You do not have to come alone. Bring a family member or caregiver if you like. For a child or teenager, a parent stays in the room for the whole visit. You can be treated in English or Russian, whichever you prefer.',
    },

    { type: 'h2', text: 'What to bring and where to park' },
    {
      type: 'p',
      text: 'Think about what is hurting, how it began and what you want to be able to do again, because Dr. Ed starts with those questions. Then bring whatever applies from this list.',
    },
    {
      type: 'ul',
      items: [
        'If you have Medicare, a referral from your doctor. Medicare patients need one from the start.',
        'Any imaging reports you have.',
        "If you had surgery, your surgeon's protocol.",
        'A list of the medications you take.',
      ],
    },
    {
      type: 'p',
      text: 'The clinic is between Winnetka and Corbin, just north of Nordhoff St. The lot in front is free and has no gate code, and you can also park on the street. The entrance and the parking are wheelchair accessible.',
    },

    { type: 'h2', text: 'What happens at the first visit, step by step' },
    {
      type: 'p',
      text: 'The first visit is an examination and a first treatment, not only a conversation. Here is the order it follows, from the first question to the home program.',
    },
    {
      type: 'ol',
      items: [
        '**You tell your story.** Dr. Ed asks where it hurts, how it started and what you hope to get back to. The last part counts as much as the first two, because the aim is to return you to the things that matter to you.',
        '**He watches you move.** Instead of working from your description alone, he sees the problem himself. This is where your clothes matter.',
        '**He measures.** Two things get measured: your strength, and how far each joint moves.',
        '**He finds the cause.** He puts your history, your movement and the measurements together and works out what is actually causing your pain.',
        '**He explains it in plain terms.** You hear what he found before any treatment begins. Ask about anything that is unclear.',
        '**Treatment starts.** You are treated at this visit, not the next. What you get depends on what he found, and it may include manual therapy, corrective exercise, therapeutic ultrasound, red light therapy, cryo massage or electrical stimulation.',
        '**You go home with a program.** It is short, and you follow it between visits.',
      ],
    },
    {
      type: 'placeholder',
      label: 'PHOTO: Dr. Ed watching a patient move during an evaluation, to be shot',
    },

    { type: 'h2', text: 'After the first visit' },
    {
      type: 'p',
      text: 'You see Dr. Ed himself at every visit, from the first evaluation until you are discharged. In the clinic the work is hands-on, and he changes your home program as you progress. You can book after work or on a Saturday.',
    },
    {
      type: 'p',
      text: 'How many visits you need depends on your condition and how your body responds. Dr. Ed does not give a number before the evaluation. He sets the plan once he has examined you.',
    },

    { type: 'h2', text: 'What to do next' },
    {
      type: 'p',
      text: 'Book the evaluation when you are ready. If you have questions about insurance or cost, ask when you call: the clinic walks you through the cost before your first visit.',
    },
    {
      type: 'p',
      text: 'The [Your first visit](/first-visit/) page has the short version of these steps and the same list of what to bring. To learn who you will be working with, read [About Dr. Ed](/about-us/). To see what patients say, visit the [Reviews page](/reviews/).',
    },
  ],
  booking: {
    h2: 'Book your first physical therapy visit',
    lead: 'Pick a day that works for you and tell Dr. Ed what is bothering you. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'All posts', href: '/blog/' },
    { text: 'Your first visit', href: '/first-visit/' },
    { text: 'About Dr. Ed', href: '/about-us/' },
  ],
  notes: [
    'The meta description (fixed by the entry) promises minute by minute. The facts list has no per-step minute counts, so the post gives the order of the visit, not times. Per-step times would need Dr. Ed to confirm them.',
    'The what-to-bring list and the seven evaluation steps come from the built Your first visit page (src/content/first-visit.ts), reworded. The family and parent line and the after work and Saturday line come from that page and FACTS.md. The cross-street, parking and wheelchair lines, the cost pointer, the English and Russian line and the treatment list (with may include) are FACTS.md lines.',
    'Two clauses are explanations, not stated facts: the area that hurts should be easy to see and free to move (why the clothes advice), and the aim is to return you to the things that matter to you (from the About mission line). Dr. Ed to confirm or cut.',
    'Not in the post: whether a non-Medicare patient needs a referral. The built Your first visit page leaves it out too. If wanted, add one line and a link to /insurance-and-cost/.',
    'No outside source is cited, per the decision sheet, so the post has no sources list.',
    'The entry asks for one real frame of each step; the decision sheet reduces it to the one placeholder in the steps section.',
  ],
};

export default post;
