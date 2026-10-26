// Homepage (P-001). The approved draft 9 copy is ported unchanged into src/pages/index.astro by
// scripts/port-homepage.py; this file holds the SEO fields and the data the JSON-LD graph needs, copied
// from the master's own graph so the markup and the schema cannot drift.
//
// SEO fields: the blueprint's 53-character title and 155-character description (build default for
// pending ruling 3 in claude/CHANGES-blueprint-vs-plan-v3.md). The approved head block, kept here for Vlad:
//   approved title (72): Physical Therapy in Chatsworth, CA | Dr. Ed Shut, DPT | Chatsworth Physical Therapy
//   approved fallback (64): Physical Therapy in Chatsworth, CA | Chatsworth Physical Therapy
//   approved description (207): Physical therapy in Chatsworth, CA with Dr. Ed Shut, DPT. One-on-one visits for back pain, sports injuries, pre and post-op rehab, balance and vertigo. Open until 8pm, Medicare accepted. Call (818) 749-3205.

export default {
  id: 'P-001',
  path: '/',
  title: 'Physical Therapy in Chatsworth, CA | Dr. Edward Shut, DPT',
  description: 'Physical therapy in Chatsworth with Dr. Edward Shut, DPT. One-on-one visits for back pain, sports injuries, post-op rehab, balance and vertigo. Book today.',
  ogTitle: 'Physical Therapy in Chatsworth, CA | Dr. Edward Shut, DPT',
  ogDescription: 'One-on-one physical therapy with a Doctor of Physical Therapy. Back pain, sports injuries, pre and post-op rehab, balance and vertigo. Evening and Saturday hours.',
  h1: 'Physical therapy in Chatsworth, one-on-one with Dr. Edward',
  // The four reviews the approved homepage shows, as the approved graph marks them up.
  reviews: [
  {
    "name": "Matthew",
    "body": "I came in with a frozen shoulder and very limited mobility. Remarkably, within just a few sessions, I began to regain movement. After a few weeks, I could lift my arm above my head and reach behind my back, something I hadn't been able to do at all before."
  },
  {
    "name": "Mary",
    "body": "He took the time to listen to my concerns, explain the treatment process, and made me feel comfortable during every visit. I've noticed a big improvement in my shoulder pain and mobility thanks to his care and guidance."
  },
  {
    "name": "Lauren",
    "body": "I really appreciated how he customized my treatment plan based on my specific needs rather than using a one-size-fits-all approach. You can tell he genuinely cares about his patients and their progress."
  },
  {
    "name": "Tati",
    "body": "My daughter is 10 years old, a rhythmic gymnast, and had a back injury. Edward was very patient with her and worked very diligently with the problem. Results were already showing after 2 sessions."
  }
],
  faqs: [
  {
    "q": "Do I need a referral from my doctor?",
    "a": "No. California law lets you see a physical therapist without a referral for up to 12 visits or 45 days, whichever comes first. After that, we need a referral from your doctor to continue. Medicare patients need a referral from the start."
  },
  {
    "q": "Do you take insurance?",
    "a": "We accept Medicare and personal injury liens. If you have PPO insurance, we provide a superbill, an itemized receipt you send to your insurer for reimbursement. Direct-pay patients are welcome. Call (818) 749-3205 and we will walk you through the cost before your first visit."
  },
  {
    "q": "How long is each visit, and how many will I need?",
    "a": "Visits run about 60 minutes, depending on what you need, and every one is one-on-one with Dr. Edward. How many you need depends on your condition and how your body responds, so Dr. Edward sets the plan after your first evaluation rather than guessing up front."
  },
  {
    "q": "Will I see Dr. Edward every time?",
    "a": "Yes. Every visit is one-on-one with Dr. Edward, from the first evaluation through discharge."
  },
  {
    "q": "What should I wear?",
    "a": "Comfortable clothes you can move in. Shorts for knee, hip or ankle issues, and a tank top or loose shirt for shoulder, neck and back."
  },
  {
    "q": "Can you treat kids and teen athletes?",
    "a": "Yes. School-age children and teenagers are welcome, including gymnasts and dancers, with a parent in the room for every visit."
  },
  {
    "q": "Do you treat vertigo, dizziness or stroke recovery?",
    "a": "Yes. Dr. Edward treats vertigo and balance problems, and works with patients recovering from a stroke on strength, walking and everyday movement."
  },
  {
    "q": "Do you speak Russian?",
    "a": "Yes. Dr. Edward speaks English and Russian, so you can be treated in either."
  }
],
  video: {
  "name": "Matt's frozen shoulder story at Chatsworth Physical Therapy",
  "description": "A patient describes recovering from a frozen shoulder with Dr. Edward Shut at Chatsworth Physical Therapy.",
  "uploadDate": "2026-04-12",
  "duration": "PT43S"
},
};
