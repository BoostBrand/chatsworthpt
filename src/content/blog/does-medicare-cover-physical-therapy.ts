import type { PostContent } from '../../lib/types';

const post: PostContent = {
  id: 'P-039',
  path: '/blog/does-medicare-cover-physical-therapy/',
  title: 'Does Medicare Cover Physical Therapy? | Dr. Ed Shut, DPT',
  description: 'Medicare Part B covers medically necessary physical therapy with a referral. Dr. Ed Shut, DPT in Chatsworth explains what is covered and what to bring.',
  h1: 'Does Medicare cover physical therapy? Yes, and here is what to bring',
  datePublished: '2026-10-21',
  parent: { text: 'Insurance and cost', href: '/insurance-and-cost/' },
  summary: 'What Part B covers, what you pay, and the three things to bring to your first visit with Dr. Ed.',
  answer: 'Yes, Medicare Part B helps pay for medically necessary outpatient physical therapy if you are eligible, and your doctor or other health care provider must certify that you need it ([Medicare.gov](https://www.medicare.gov/coverage/physical-therapy-services)). Dr. Ed accepts Medicare at Chatsworth Physical Therapy, and Medicare patients need a referral from the start.',
  body: [
    { type: 'h2', text: 'What Medicare Part B covers' },
    {
      type: 'p',
      text: "Part B is the medical insurance part of Medicare. According to [Medicare.gov](https://www.medicare.gov/coverage/physical-therapy-services), it helps pay for outpatient physical therapy that is medically necessary. Outpatient means you come in for a visit and go home afterward. Medically necessary means you need the therapy for your condition.",
    },
    {
      type: 'p',
      text: "Medicare adds a condition that matters in practice. Your doctor or other health care provider must certify that you need the therapy ([Medicare.gov](https://www.medicare.gov/coverage/physical-therapy-services)). Put simply, a provider on your care team has to say, formally, that you need physical therapy. So the first step is a call to your own doctor's office.",
    },
    { type: 'placeholder', label: 'PHOTO: Dr. Ed with an older patient at the clinic, to be shot' },
    { type: 'h2', text: 'What you pay' },
    {
      type: 'p',
      text: 'Part B has a deductible. That is the amount you pay yourself before Medicare starts to pay. After you meet it, you pay 20% of the Medicare-approved amount for these services when they are medically necessary ([Medicare.gov](https://www.medicare.gov/coverage/physical-therapy-services)). For your own numbers, call the clinic and we will walk you through the cost before your first visit.',
    },
    {
      type: 'p',
      text: 'Medicare.gov also says there is no yearly limit on how much Medicare pays for medically necessary outpatient therapy ([Medicare.gov](https://www.medicare.gov/coverage/physical-therapy-services)). So Medicare does not stop paying at a set yearly amount, as long as the therapy stays medically necessary. The number of visits is a separate matter. Dr. Ed settles it after he has examined you, based on your condition and how your body responds, and he never quotes a number up front.',
    },
    { type: 'h2', text: 'Your referral and what to bring' },
    {
      type: 'p',
      text: "Dr. Ed's rule for Medicare patients is a referral from the start. Ask your own doctor for one, and bring these three things to your first visit:",
    },
    {
      type: 'leads',
      items: [
        { lead: 'Your referral.', text: 'From your own doctor, asking for physical therapy.' },
        { lead: 'Your Medicare card.', text: 'Keep it with the referral so you do not forget either.' },
        { lead: 'Imaging reports.', text: 'The written report from any X-ray or MRI you have had for this problem.' },
      ],
    },
    { type: 'p', text: 'A family member is welcome to come with you.' },
    { type: 'h2', text: 'Check it on Medicare.gov' },
    {
      type: 'p',
      text: 'The Medicare rules in this post come from one page: [Physical therapy services](https://www.medicare.gov/coverage/physical-therapy-services) on Medicare.gov. It says four things that matter here:',
    },
    {
      type: 'ul',
      items: [
        'Part B helps pay for medically necessary outpatient physical therapy.',
        'Your doctor or other health care provider must certify that you need it.',
        'After the Part B deductible, you pay 20% of the Medicare-approved amount.',
        'There is no yearly limit on what Medicare pays for medically necessary outpatient therapy.',
      ],
    },
    {
      type: 'p',
      text: 'The referral rule and the visit details come from the clinic, not from Medicare. If the Medicare page and this post ever differ, go with the page.',
    },
    { type: 'h2', text: 'What to do next' },
    {
      type: 'ol',
      items: [
        'Ask your own doctor for a referral for physical therapy.',
        'Book your first visit below and tell us what hurts.',
        'Bring the referral, your Medicare card and any imaging reports.',
        'Meet Dr. Ed for an evaluation of about 60 minutes, depending on what you need. It is one-on-one.',
      ],
    },
    {
      type: 'p',
      text: 'At the evaluation, Dr. Ed watches how you move, looks for the source of the problem and tells you what he finds in plain terms. Treatment is hands-on, in the clinic, with a short home program that he adjusts at each visit as you progress.',
    },
    {
      type: 'p',
      text: 'If you are looking for physical therapy that accepts Medicare near you, Dr. Ed serves Chatsworth, Porter Ranch, Northridge, West Hills, Canoga Park, Granada Hills and Simi Valley. He treats patients in English and Russian. Parking is free in the lot in front, there is no gate code, and the entrance is wheelchair accessible.',
    },
    {
      type: 'p',
      text: 'For how the clinic handles insurance in general, see the [insurance and cost page](/insurance-and-cost/). Other patients tell their own stories on the [reviews page](/reviews/).',
    },
  ],
  sources: [
    {
      title: 'Physical therapy services',
      url: 'https://www.medicare.gov/coverage/physical-therapy-services',
      publisher: 'Medicare.gov',
      accessed: '21 Oct 2026',
      note: 'Used for Part B coverage, the certification by your doctor or other health care provider, the 20% share after the Part B deductible, and the absence of a yearly limit.',
    },
  ],
  booking: {
    h2: 'Book your first visit',
    lead: 'Tell Dr. Ed what is bothering you and which days work. He will confirm your time by phone or email, usually the same day.',
    service: 'Not sure yet',
  },
  related: [
    { text: 'All posts', href: '/blog/' },
    { text: 'Insurance and cost', href: '/insurance-and-cost/' },
    { text: 'About Dr. Ed', href: '/about-us/' },
  ],
  notes: [
    'Medicare Advantage: FACTS.md says only "Medicare", so the post does not say whether Medicare Advantage plans are accepted. Dr. Ed to confirm if a line is wanted.',
    'The entry asks the writer to check "the yearly threshold" on the live Medicare.gov page. The page says there is no yearly limit and shows no threshold figure, so none is stated.',
    'The parent link is anchored "insurance and cost page" in the copy and "Insurance and cost" in related. The reviews link in the last paragraph can be removed if the plan keeps posts to the three links out in the entry.',
  ],
};

export default post;
