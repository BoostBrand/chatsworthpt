# Conditions pages (P-022 to P-033): the shared shape

Read this after COMMON-RULES.md, COMPONENTS.md and FACTS.md. It applies to every page under /conditions/.

## Files
- `src/content/conditions/<slug>.ts` (PageContent) and `src/pages/conditions/<slug>.astro`:
  ```astro
  ---
  import ConditionPage from '../../components/templates/ConditionPage.astro';
  import content from '../../content/conditions/<slug>';
  ---
  <ConditionPage content={content} />
  ```
  The content file imports its type with `import type { PageContent } from '../../lib/types';`.

## Sections, in this order (the entry's "Sections in order", mapped to kinds)
1. `hero`: the exact H1, a `lede` of one line in the patient's words, `book: 'Book my evaluation'`, stars on,
   and the entry's photo (an `image` from the list below) or a `placeholder` ("PHOTO: ..., to be shot").
2. "Is this you" (or the entry's wording): kind `who`, three to five items, each a short bold `lead` sentence
   and one or two plain sentences.
3. "What Dr. Ed does about it": kind `prose`. The entry's "what Dr. Ed does about it" lines are the facts.
4. "What to expect": kind `prose`. Evaluation first, one-on-one, the home program, how long it usually takes
   said plainly with no fixed numbers of visits or weeks unless the entry gives them, evening and Saturday
   appointments.
5. The review: kind `review` only when the entry assigns a reviewer. When the entry assigns none, there is no
   review section. When the entry says the page links to a review on another page, write one sentence with
   that link (the entry's anchor text) in "What to expect" or in the related section; never reprint it.
6. Related: kind `prose`, h2 "Related pages", one `leads` block: the parent service, the two sibling
   conditions and the blog post the entry names, each `lead` a link with the entry's anchor text and each
   `text` one plain line on why to read it. (A blog post is a planned page; link it anyway.)
7. Insurance: kind `insurance` (the site-wide lines are required on every conditions page; the entries do not
   list this section, the brief does). No blocks unless the entry asks for one.
8. FAQs: kind `faq`, the entry's questions, answered from the entry's answers. A referral question is answered
   with the site-wide referral facts.
9. `booking`: `service` is the parent service's form option (Back pain, Sports injury, Before or after surgery,
   Orthopedic injury, Balance or fall prevention, Pain management, Pediatric physical therapy, Neurological
   rehabilitation). Lead ends "He will confirm your time by phone or email, usually the same day."
10. `related`: the parent service, "All conditions" (/conditions/) and the entry's other links out that are
    not already in the copy.
11. `schema`: `{ condition: { name, alternateName?, associatedAnatomy, possibleTreatment: 'Physical therapy',
    parentServicePath } }` (plain words; the template builds the MedicalCondition block).

Word target: the entry's (most are 450 to 600 words for the content file). Do not pad.

## Photos available (use the entry's choice; "the hero frame" means the homepage hero)
- `/img/hero-dr-ed-treating-patient-chatsworth.webp` 1800x1125, srcMobile `/img/hero-dr-ed-treating-patient-chatsworth-mobile.webp`, alt "Dr. Ed Shut guiding a patient through a back exercise on the treatment table at Chatsworth Physical Therapy"
- `/img/back-pain-therapy-chatsworth.webp` 900x900, alt "Dr. Ed guiding a patient through a core stability exercise for back pain at Chatsworth Physical Therapy"
- `/img/sports-injury-rehab-chatsworth.webp` 900x900, alt "Ankle treatment during a sports injury rehab session in Chatsworth"
- `/img/post-op-physical-therapy-chatsworth.webp` 900x900, alt "Knee taping during a physical therapy session in Chatsworth"
- `/img/matt-and-dr-ed-chatsworth-pt.webp` 720x1280 (portrait; the frozen shoulder page only), alt "Matt and Dr. Ed at Chatsworth Physical Therapy, from the video of Matt's frozen shoulder story"

## Approved lines from the deck pages (word for word only where your entry points to them)
Never copy a sentence that says a flat "60 minutes"; the visit length is "about 60 minutes, depending on what
you need".
- Back pain evaluation language: "He does not start with the sore spot. He watches how you stand, bend, twist,
  sit and walk, tests the hips, the mid-back and the muscles that are supposed to be holding the spine steady,
  and checks whether a nerve is involved. Back pain usually has a cause somewhere other than where it hurts, and
  the evaluation is where he finds it. Then he explains it in plain terms and tells you what the plan is."
- Sports evaluation language: "He looks at the injured area and at everything above and below it: how you
  land, cut, squat, throw or reach, where the strength is missing and which movement keeps reloading the
  injury. He explains what he found and what the plan is, including a realistic line on when you can train and
  when you can compete."
- Post-op language: "Bring your surgeon's post-op protocol and your discharge paperwork to the first visit.
  Dr. Ed works from your surgeon's instructions, not a generic plan."
- Balance evaluation language: "He tests your balance in the ways falls actually happen: standing with eyes
  closed, turning, reaching, stepping over something, getting up from a chair without hands, walking while
  talking."
- Approved FAQ answers:
  "Can physical therapy help sciatica? In most cases, yes. Treatment aims at what is irritating the nerve,
  usually a disc or a tight muscle in the hip, and at the movements that keep irritating it."
  "Do I need an MRI or X-ray first? No. Most back pain is diagnosed by how you move and what reproduces the
  pain, which is what the evaluation does. If imaging is needed, Dr. Ed will say so. If you already have it,
  bring the report."
  "Will the treatment hurt? Some hands-on work is uncomfortable for a moment, and you will be told before it
  happens. Nothing is forced, and you can stop anything at any time."
  "How soon after an injury should I come in? As soon as you can bear weight and move without severe pain,
  usually within the first few days. Early evaluation shortens the whole recovery. If you suspect a fracture or
  the joint is grossly unstable, get it imaged first."
  "How do I know I am ready to play again? You are tested against what the sport demands, not just asked
  whether it hurts. Dr. Ed will tell you plainly when you pass and what is still missing."
  "How soon after surgery should physical therapy start? When your surgeon says so, which for most joint
  replacements and repairs is within the first one to two weeks. Book the evaluation before the surgery date if
  you can, so there is no gap."
  "Will you follow my surgeon's protocol? Yes. Bring it to the first visit. Dr. Ed works from it, not from a
  generic plan."
  "Can physical therapy really help vertigo? Yes. For the most common kind, BPPV, repositioning maneuvers done
  in the clinic often settle it within a few visits. Other dizziness improves with a graded exercise program."
  "Is the clinic easy to get into? Yes. Free parking is right in front of the building, there is no gate code,
  and the entrance and parking are wheelchair accessible."
- More approved lines:
  "Can I come in while my back is still in spasm? Yes, and it is a good time to come. Dr. Ed adjusts the first visit
  to what you can tolerate, and the goal of that visit is to get you moving more comfortably, not to put you through
  a workout."
  ACL (post-op page): "A nine-to-twelve-month road for an athlete, done in stages and tested before each one."
  Return to sport (sports page): "Pain going away is not the same as being ready to play. The injury that comes back is
  usually the one that was rested, felt fine and was never retested. Dr. Ed runs rehab in stages: calm the injury,
  restore range, rebuild strength, then retest you against what the sport demands (single-leg hop, cutting, overhead
  load, backbends) before you go full speed. You know where you are at every visit and what the next gate is."
  "For athletes who have had an ACL injury or repeated ankle sprains, the same testing becomes a prevention program
  for the other side."
