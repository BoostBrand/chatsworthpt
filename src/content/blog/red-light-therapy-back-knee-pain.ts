import type { PostContent } from '../../lib/types';

const post: PostContent = {
  id: 'P-047',
  path: '/blog/red-light-therapy-back-knee-pain/',
  title: 'Red Light Therapy for Back and Knee Pain | Dr. Edward, DPT',
  description: 'See what red light therapy can do for back and knee pain inside a physical therapy plan, what the evidence says and what it cannot replace. By Dr. Edward.',
  h1: 'Red light therapy for back and knee pain: what it does, and what it does not do',
  datePublished: '2026-10-21',
  parent: { text: 'Red light therapy', href: '/red-light-therapy/' },
  summary: `What the research says about red light for back and knee pain, and where it fits.`,
  answer: `Red light therapy may ease back or knee pain for some people in the short term, but the research is mixed, and a 2018 Washington State review rated the overall quality of the evidence as low or very low. It is not a cure: at Dr. Edward's clinic it is an add-on inside a plan of hands-on work and exercise, never the plan itself.`,
  body: [
    { type: 'h2', text: `Does red light therapy work?` },
    {
      type: 'p',
      text: `The studies below test low-level laser therapy (LLLT), a treatment that applies low-intensity laser light at a specific wavelength. A Washington State Department of Labor and Industries report ([read the report](https://www.lni.wa.gov/patient-care/_docs/HTAupdateLLLT_011818.pdf)) notes that "Laser wavelength, energy density, treatment duration, numbers of sessions and site of application are highly variable." So read the findings as a guide to the field, not a promise about one machine.`,
    },
    {
      type: 'p',
      text: `A 2017 meta-analysis, which pools many trials, covered 18 studies and 1,462 adults with musculoskeletal disorders ([abstract on PubMed](https://pubmed.ncbi.nlm.nih.gov/28145397/)). The pooled difference in pain between laser and control groups was -0.85 (95% CI: -1.22 to -0.48), meaning less pain with laser. Its authors say it presents evidence that LLLT is an effective treatment modality to reduce pain, and that following dose recommendations "seems to enhance treatment effectiveness." They also report high heterogeneity (I2 of 85.6%): the trials disagreed with each other a lot.`,
    },
    {
      type: 'p',
      text: `The Washington report was more guarded. Four of its conclusions, word for word:`,
    },
    {
      type: 'ul',
      items: [
        `"Overall, the quality of the evidence for LLLT was low or very low."`,
        `"The results on efficacy are highly inconsistent."`,
        `"There seems to be a small statistically significant difference between LLLT and placebo for some indications in short term, but the clinical meaningfulness is uncertain."`,
        `"Long term data are lacking."`,
      ],
    },
    { type: 'h2', text: `Red light therapy for back pain` },
    {
      type: 'p',
      text: `A 2015 meta-analysis of nonspecific chronic low back pain included seven trials with 394 patients ([abstract in Arthritis Research & Therapy](https://link.springer.com/article/10.1186/s13075-015-0882-0)). Pooling five of them, pain after treatment was lower with laser than with placebo. The authors write that LLLT "is an effective method for relieving pain" but that "there is still a lack of evidence supporting its effect on function." Disability and spinal range of motion showed no significant effect.`,
    },
    {
      type: 'p',
      text: `An older Cochrane review, summarized in the Washington report, found "statistically significant but clinically unimportant pain relief" in three small studies. It concluded that "there are insufficient data to draw firm conclusions on the clinical effect of LLLT for low-back pain."`,
    },
    { type: 'h2', text: `Red light therapy for knee pain` },
    {
      type: 'p',
      text: `The knee studies here cover osteoarthritis. A 2019 meta-analysis in BMJ Open ([read the paper](https://bmjopen.bmj.com/content/9/10/e031142)) pooled 22 placebo-controlled trials with 1,063 participants. At the end of therapy, laser lowered pain by 14.23 mm more than placebo on a 100 mm pain scale, and disability was also reduced. Its authors note that major knee osteoarthritis guidelines do not recommend LLLT.`,
    },
    {
      type: 'p',
      text: `The drop was larger, 18.71 mm, at the doses the authors classed as recommended. The 2019 review covers knee osteoarthritis only, not other causes of knee pain. A Hayes review summarized in the Washington report suggested that laser above a certain dose can bring immediate relief of pain and disability in knee osteoarthritis, but that the effect is temporary. It called the evidence low-quality and inconsistent.`,
    },
    { type: 'h2', text: `What red light therapy does not do` },
    {
      type: 'leads',
      items: [
        {
          lead: `It is not a cure.`,
          text: `Less pain after treatment is not the same as fixing the cause, and the Washington report finds long term data lacking.`,
        },
        {
          lead: `It does not replace hands-on work and exercise.`,
          text: `Dr. Edward's back and knee plans rest on hands-on treatment, strengthening and a short home program. Red light is added to them.`,
        },
        {
          lead: `It is not a sure thing.`,
          text: `The trials disagree, and the Washington report calls the short-term gain over placebo small.`,
        },
      ],
    },
    { type: 'h2', text: `How Dr. Edward uses red light` },
    {
      type: 'p',
      text: `Dr. Edward starts by examining how you move and working out what is causing the pain. If red light fits, he adds it where he judges it may help a tissue recover or settle a muscle spasm, alongside hands-on treatment, strengthening and a home program.`,
    },
    { type: 'image', image: { src: '/img/red-light-therapy-chatsworth.webp', width: 900, height: 900, alt: 'Red light therapy session at Chatsworth Physical Therapy' } },
    {
      type: 'p',
      text: `Dr. Edward's red light protocol: about 10 minutes on the treated area, inside a visit, never on its own and not at every visit. His device is a KOZE LED unit (KOZE lists 660 and 850 nanometers, red and near-infrared, for its panels), not a laser. At any clinic, ask what the light is meant to do, how many minutes and how often, and how you will tell whether it is helping.`,
    },
    { type: 'h2', text: `What to do next` },
    {
      type: 'p',
      text: `Start with the cause, not the light. Book an evaluation and Dr. Edward will explain what is behind your pain and whether [red light therapy](/red-light-therapy/) has a place in your plan.`,
    },
  ],
  sources: [
    {
      title: `Effects of low-level laser therapy on pain in patients with musculoskeletal disorders: a systematic review and meta-analysis`,
      url: 'https://pubmed.ncbi.nlm.nih.gov/28145397/',
      publisher: 'Eur J Phys Rehabil Med, 2017',
      accessed: '21 Oct 2026',
    },
    {
      title: `Technology Assessment Update: Low Level Laser Therapy for Musculoskeletal Disorders`,
      url: 'https://www.lni.wa.gov/patient-care/_docs/HTAupdateLLLT_011818.pdf',
      publisher: 'Washington State Department of Labor and Industries, 2018',
      accessed: '21 Oct 2026',
    },
    {
      title: `The effectiveness of low-level laser therapy for nonspecific chronic low back pain: a systematic review and meta-analysis`,
      url: 'https://link.springer.com/article/10.1186/s13075-015-0882-0',
      publisher: 'Arthritis Research & Therapy, 2015',
      accessed: '21 Oct 2026',
    },
    {
      title: `Efficacy of low-level laser therapy on pain and disability in knee osteoarthritis: systematic review and meta-analysis of randomised placebo-controlled trials`,
      url: 'https://bmjopen.bmj.com/content/9/10/e031142',
      publisher: 'BMJ Open, 2019',
      accessed: '21 Oct 2026',
    },
  ],
  booking: {
    h2: 'Book your evaluation with Dr. Edward',
    lead: 'Tell us where it hurts and Dr. Edward will look for the cause first. He will confirm your time by phone or email, usually the same day.',
    service: 'Pain management',
  },
  related: [
    { text: 'All posts', href: '/blog/' },
    { text: 'Red light therapy', href: '/red-light-therapy/' },
    { text: 'About Dr. Edward', href: '/about-us/' },
  ],
  notes: [
    'Fill the one CONFIRM marker (section How Dr. Edward uses red light) with Dr. Edward\'s minutes per application and frequency, same item as the red light page.',
    'All cited research is on low-level laser therapy (LLLT), which the Washington report defines as low-intensity laser light at a specific wavelength. The clinic device and wavelength are not in the facts file, so the post says the findings describe the field and not one machine. Ask Dr. Edward which device he uses before drawing a closer link.',
    'The knee study opens by noting major knee osteoarthritis guidelines do not recommend LLLT (BMJ Open 2019, Objectives). The post reports it. Build lead to confirm this stays.',
    'The Cochrane (2008) and Hayes (2008, updated 2012) reviews are cited only as summarized in the Washington report, never as separate sources.',
    'Links to /back-pain-therapy/ and /conditions/knee-pain/ were left out because the entry lists no links down.',
  ],
};

export default post;
