# Blog posts (P-038 to P-049): the shared shape

Read this after COMMON-RULES.md, COMPONENTS.md and FACTS.md. It applies to every post under /blog/.

## Files
- `src/content/blog/<slug>.ts` exporting one `PostContent` (see src/lib/types.ts) and `src/pages/blog/<slug>.astro`:
  ```astro
  ---
  import BlogPostPage from '../../components/templates/BlogPostPage.astro';
  import post from '../../content/blog/<slug>';
  ---
  <BlogPostPage post={post} />
  ```
  The content file starts `import type { PostContent } from '../../lib/types';`. The slug is the last part of the path.

## Fields
- `id`, `path`, `title` and `description` exactly as the entry; `h1` exactly the entry's H1.
- `datePublished: '2026-10-21'` (the build date; Vlad sets the real date at launch).
- `parent`: `{ text: <the parent page's exact name>, href: <its path> }` (the entry's "parent page" link).
- `summary`: one plain line for the blog list (not a copy of the description).
- `answer`: the answer to the H1's question in the first two sentences, plain and complete on its own.
- `body`: an array of `{ type: 'h2', text }` headings and blocks (p, ul, ol, callout, leads, placeholder). Four to six
  H2 sections. Include one `{ type: 'placeholder', label: 'PHOTO: <the frame the post needs>, to be shot' }` block where
  a photo would sit (the entry asks for one real frame from the shoot; none exists yet).
- `sources`: every outside source you cite, `{ title, url, publisher, accessed: '21 Oct 2026', note? }`.
- `booking`: `{ h2, lead (ends "He will confirm your time by phone or email, usually the same day."), service }` with
  the parent page's form option.
- `related`: `[{ text: 'All posts', href: '/blog/' }, { text: <parent page name>, href: <parent path> }, { text: 'About Dr. Ed', href: '/about-us/' }]`.
- No `faqs` (the entries carry none).

## Writing rules for posts
- 700 to 1,000 words (the checker prints the count). Answer first, then the explanation, then what to do next with a
  link to the parent page.
- Dr. Ed's practice facts come only from FACTS.md, your entry, your decision sheet and the approved material below.
  Approved sentences may be quoted or closely followed where your sheet points to them; never copy a sentence that
  states a flat "60 minutes".
- Outside facts (a statute, a Medicare rule, a CDC page, a study): "cited only after you fetched the page in this
  session and it says what you claim; name the source beside the claim. If a source cannot be fetched, write
  [SOURCE NEEDED: what it must show] instead of citing it." Use WebSearch and WebFetch. Prefer the primary source
  (the statute on leginfo.legislature.ca.gov, the rule on medicare.gov or cms.gov, the CDC page, a PubMed or PMC
  article, a professional association). Name it beside the claim as a link, for example "California Business and
  Professions Code section 2620.1 ([read it on leginfo](https://...))". List it in `sources`.
- In your report, for each source: the URL, the date fetched and the exact sentence on the page that supports your
  sentence. The build lead re-checks every one before accepting the post.
- Fetching notes from earlier builders: leginfo.legislature.ca.gov does not load here (Justia hosts the same California
  code text); PMC article pages usually return a captcha, PubMed abstracts usually load; medicare.gov loads at
  /coverage/physical-therapy-services. Your decision sheet may already list sources the build lead verified; cite those
  with the quoted statements and you need not fetch them again.
- No dollar figures anywhere (the site shows none). No statistics, percentages or timelines unless your fetched source
  states them, and then name the source beside them.
- No reviews quoted or paraphrased. Where a post mentions a patient story, link the Reviews page (/reviews/) instead.
- Nothing medical beyond the entry, the approved material and your fetched sources. No diagnosis by reader, no
  promises, no "cure".

## Approved material from the deck pages (sentences with a flat "60 minutes" removed)
### Back pain therapy (P-004) (/back-pain-therapy/)
From the section "What treatment looks like with Dr. Ed":
Ed. He does not start with the sore spot. He watches how you stand, bend, twist, sit and walk, tests the hips, the mid-back and the muscles that are supposed to be holding the spine steady, and checks whether a nerve is involved. Back pain usually has a cause somewhere other than where it hurts, and the evaluation is where he finds it. Then he explains it in plain terms and tells you what the plan is.
Ed, nobody else, and usually mixes:
- Hands-on manual therapy: joint mobilization and soft-tissue work to loosen what is stiff and calm what is irritated. Patients describe it as limited but very effective.
- Targeted strengthening for the deep core, the hips and the glutes, so the spine stops doing all the work.
- Posture and movement correction: how you sit at the desk, lift, get out of the car, sleep.
- Therapeutic ultrasound, electrical stimulation and red light therapy where they speed tissue recovery or settle a muscle spasm.
- A short written home program, a few exercises you will actually do, adjusted every visit. Patients say the home tips are what keep the pain manageable between visits.
Dr. Ed does not just treat symptoms; the aim is to solve the underlying issue causing your back pain so it stops coming back. How many visits that takes depends on what the evaluation finds, so it is set after the first visit, not quoted up front. Evening and Saturday appointments are open until 8pm.

### Balance and fall prevention (P-009) (/balance-and-fall-prevention/)
From the section "Who balance and fall prevention is for":

From the section "What treatment looks like with Dr. Ed":
Ed. He tests your balance in the ways falls actually happen: standing with eyes closed, turning, reaching, stepping over something, getting up from a chair without hands, walking while talking. He checks leg strength, ankle and hip mobility, the inner ear and the nervous system, and asks about your home, your footwear, your medications and the falls you have had. Then he tells you plainly where the risk is and what the plan is.
Ed, nobody else, and usually mixes:
- Balance retraining, starting from where you are safe and made harder each week.
- Strength work for the legs and hips, the muscles that catch you.
- Gait training: stride, turning, stairs, curbs and uneven ground, with or without a cane or walker, and whether you need one at all.
- Vestibular rehabilitation for dizziness and vertigo (next section).
- Practical fall-proofing: how to get up from the floor, which shoes, which rugs, where a grab bar belongs.
- A short written home program a family member can supervise, adjusted every visit.
Family members are welcome at every session. The number of visits depends on what the evaluation finds and is set after it, never quoted up front. Evening and Saturday appointments mean an adult child who works can bring you.

From the section "Vertigo and dizziness treatment in Chatsworth":
Dizziness is one of the most common causes of falls, and the most treatable. Dr. Ed treats vertigo and dizziness with vestibular rehabilitation: exercises and positioning techniques that retrain the inner ear and the brain to work together again. The most common form, BPPV, where loose crystals in the inner ear set off spinning when you roll over or look up, often improves within a few visits with repositioning maneuvers done in the clinic.
Other dizziness, after an inner ear infection, a concussion or simply with age, responds to a graded program of head and eye movements and balance work. Bring any ENT or neurology notes you have; if Dr. Ed thinks the dizziness needs a doctor's look first, he will say so.

From the section "Common questions about balance and falls":
Q: Does Medicare cover balance and fall prevention physical therapy? A: Medicare covers medically necessary physical therapy with a referral from your doctor, and fall risk and dizziness are common reasons for one. Dr. Ed accepts Medicare; ask your doctor for the referral and bring it to the first visit.
Q: I am afraid I will fall during the exercises. A: You will not be left to wobble. Every exercise is done with Dr. Ed right there, at a level you can manage, and made harder only when you are ready.
Q: Can physical therapy really help vertigo? A: Yes. For the most common kind, BPPV, repositioning maneuvers done in the clinic often settle it within a few visits. Other dizziness improves with a graded exercise program.
Q: Can my son or daughter come with me? A: Yes, and it helps. They can learn the home program and the safety habits so they can support you between visits.
Q: Is the clinic easy to get into? A: Yes. Free parking is right in front of the building, there is no gate code, and the entrance and parking are wheelchair accessible.
Q: Do I need a cane or a walker? A: Maybe, maybe not. Dr. Ed assesses that honestly at the evaluation, fits it correctly if you do, and works toward needing it less if that is realistic.

### Neurological rehabilitation (P-011) (/neurological-rehabilitation/)
From the section "What treatment looks like with Dr. Ed":
Ed. He watches how you stand, walk, turn, sit down and get up, and how you use your arm and hand. He measures strength, range of motion and balance, asks what you could do before and what you need to do now, and explains in plain terms where the problem is and what can change.
Ed, never handed off. Treatment is built from what the evaluation found and usually mixes:
- Balance and coordination training, starting from where you are safe and moving the goal each week.
- Gait retraining: the mechanics of walking, turning, stairs, curbs and uneven ground, with or without a walker or cane.
- Strength work for the weak side and the muscles that have been doing double duty.
- Functional training on the moves that matter: standing from a chair, getting in and out of a car, reaching into a cupboard, carrying a cup.
- Hands-on manual therapy to loosen stiff joints and tight muscles, including neuro-developmental treatment (NDT) and proprioceptive neuromuscular facilitation (PNF).
- Electrical stimulation, therapeutic ultrasound and red light therapy where they help a muscle fire or a tissue recover.
You leave each visit with a short written home program, three or four things you can actually do, which Dr. Ed adjusts as you improve. A family member or caregiver is welcome to sit in and learn the exercises with you. How many visits you will need depends on your condition and how you respond, so it is set after the evaluation, not quoted up front. Visits run until 8pm on weekdays and on Saturdays, so a working family member can bring you.

From the section "Stroke recovery in Chatsworth":
Stroke recovery is a separate service line at Chatsworth Physical Therapy, and the one Dr. Ed most wants people to know about. Once your doctor clears you for outpatient physical therapy, start. The weeks and months after a stroke are when the nervous system is most ready to relearn, and the sooner the work begins, the more of it sticks. Bring your discharge paperwork and any exercises you were given, and Dr. Ed builds on them rather than starting over.
Sessions follow the order your body needs: sitting and standing balance first, then walking, then stairs, outdoor surfaces and getting around the house without thinking about it, then the arm and hand. Each step is practiced in the clinic and then handed to you and your family to repeat at home, because the repetitions between visits are where most of the recovery happens.
Progress does not have to stop after the first few months. People who keep working often keep improving long after that, and the goal is the same at every stage: more of your day back, done your way.

### Pediatric physical therapy (P-010) (/pediatric-physical-therapy/)
From the section "Gymnasts, dancers and young athletes":
Growing bodies get hurt differently. Growth plates are softer than the tendons that pull on them, so a teenager's heel, knee or lower back can hurt in ways an adult's would not, and a flexible young gymnast or dancer can be strong in one direction and unprotected in another. Dr. Ed has treated rhythmic gymnasts, dancers and team-sport kids from the local clubs, and parents say the same thing in their reviews: he is patient, he explains everything, and the results show early.
The aim is never just pain relief. It is the sport, back, done well: the cause fixed, the weak link strengthened, and a clear line on when it is safe to go full speed again.

From the section "Common questions from parents":
Q: What ages do you treat? A: School-age children and teenagers, roughly elementary age through high school. Dr. Ed does not treat infants or toddlers. Most of his young patients are athletes and dancers.
Q: Can I stay with my child during the visit? A: Yes, and a parent or guardian stays for the whole visit; Dr. Ed does not treat minors without one present. You will see what he does and learn the home exercises so you can run them between visits.
Q: How do I know if it is a growing pain or an injury? A: Pain that lasts more than two weeks, a limp, swelling, pain that wakes your child at night, or pain that shows up every time at the same point in practice is worth an evaluation. Dr. Ed will tell you straight if it is nothing to worry about.
Q: Do we need a referral? A: No. Direct-pay patients, including children, can book straight away. If you have one from your pediatrician, bring it.
Q: Will my child have to stop their sport? A: Usually not completely. Dr. Ed works out what is safe this week and what to hold back on, and adjusts it as your child improves, so they keep training as much as the injury allows.
Q: Do you have after-school appointments? A: Yes. The clinic is open until 8pm Monday to Friday and on Saturdays.

### Pre and post-op physical therapy (P-006) (/pre-post-surgical-rehabilitation/)
From the section "What treatment looks like with Dr. Ed":
Bring your surgeon's post-op protocol and your discharge paperwork to the first visit. Dr.
Ed, nobody else, in the stages your surgery needs:
- Early: controlling swelling and pain, protecting the repair, gentle range of motion, and getting you safe on stairs and in the car. Therapeutic ultrasound, electrical stimulation and red light therapy are used here where they help, and patients say they made a real difference to recovery after ACL and shoulder surgery.
- Middle: restoring full range of motion with hands-on work, waking the muscles back up, rebuilding walking or reaching so it looks normal again.
- Late: strength, balance and the specific things you want back, whether that is gardening, hiking, lifting a grandchild or returning to sport (see [sports injury recovery](/sports-injury-recovery/)).
You leave every visit with a written home program, adjusted as the repair heals. A family member is welcome to sit in. The number of visits depends on the surgery and your surgeon's timeline; Dr. Ed sets it after the evaluation. Evening and Saturday appointments mean a working family member can drive you.

From the section "Surgeries we rehabilitate":

From the section "Common questions after surgery":
Q: How soon after surgery should physical therapy start? A: When your surgeon says so, which for most joint replacements and repairs is within the first one to two weeks. Book the evaluation before the surgery date if you can, so there is no gap.
Q: Will you follow my surgeon's protocol? A: Yes. Bring it to the first visit. Dr. Ed works from it, not from a generic plan.
Q: Can someone come with me? A: Yes. A family member is welcome at every session and can learn the home exercises so they can help.
Q: Is the clinic accessible if I am on crutches or a walker? A: Yes. The entrance and the parking are wheelchair accessible, the free lot is right in front, and there is no gate code.
Q: How long until I can drive, work or play again? A: It depends on the surgery and your surgeon's timeline. Dr. Ed will give you a realistic answer at the evaluation and update it as you progress.
Q: Does physical therapy before surgery help? A: Usually, yes. A stronger, more mobile joint going into surgery recovers faster. Ask your surgeon, and book a prehab evaluation if they agree.

### Sports injury recovery (P-005) (/sports-injury-recovery/)
From the section "Return to sport, step by step":
Pain going away is not the same as being ready to play. The injury that comes back is usually the one that was rested, felt fine and was never retested. Dr. Ed runs rehab in stages: calm the injury, restore range, rebuild strength, then retest you against what the sport demands (single-leg hop, cutting, overhead load, backbends) before you go full speed. You know where you are at every visit and what the next gate is.
For athletes who have had an ACL injury or repeated ankle sprains, the same testing becomes a prevention program for the other side.
