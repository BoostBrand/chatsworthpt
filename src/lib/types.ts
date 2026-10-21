// Content model for every inner page. Content files in src/content export one object of these types and
// contain data only: no runtime imports (only `import type`), so scripts can read them with Node too.
//
// Inline text (type Inline) is a plain string with four marks, nothing else:
//   **bold**                      bold text
//   [anchor text](/path/)         a link; internal paths end with a slash, anchors may add #id
//   [CONFIRM ...]                 a fact waiting on Dr. Ed or Vlad, kept exactly as the blueprint words it
//   [verify: ...] / [SOURCE NEEDED: ...]  likewise; all three render highlighted while PREVIEW is true
// Never use an em dash or an en dash. Straight quotes only.

export type Inline = string;

export interface ImageRef {
  src: string; // '/img/<file>.webp', must exist in public/img
  alt: string;
  width: number;
  height: number;
  srcMobile?: string; // optional phone crop for heroes
}

export type Block =
  | { type: 'p'; text: Inline }
  | { type: 'ul'; items: Inline[] }
  | { type: 'ol'; items: Inline[] }
  | { type: 'h3'; text: Inline }
  | { type: 'callout'; text: Inline } // a highlighted one-liner, e.g. the "Not sure which one you need?" phone line
  | { type: 'leads'; items: { lead: Inline; text: Inline }[] } // bold lead plus a sentence, shown as quiet cards
  | { type: 'image'; image: ImageRef; caption?: Inline }
  | { type: 'placeholder'; label: string; ratio?: string } // label starts with "PHOTO:" exactly as the blueprint words it
  | { type: 'links'; label?: string; items: { text: string; href: string }[] };

export interface ConditionItem {
  text: Inline; // the condition as written in the copy
  href?: string; // its page, when one exists
  note?: Inline; // optional one line under it
}

export interface FaqItem {
  q: string; // the question, plain text
  a: Inline | Inline[]; // one or more paragraphs
}

export interface ReviewRef {
  key: string; // review key from src/data/reviews.json (e.g. 'george', 'maggie-and-mark')
  context?: string; // short label shown after the first name, e.g. 'severe lower back pain'
  sentences?: [number, number]; // optional cut: first and last sentence index to show (0-based, inclusive). Whole sentences only.
}

export interface ReviewGroup {
  title: string; // what brought the patients in, e.g. 'Back pain'
  intro?: Inline;
  items: (ReviewRef & { href?: string; linkText?: string })[]; // href: the service or conditions page it belongs to
}

export interface Card {
  title: string;
  href: string;
  text: Inline;
  meta?: Inline; // e.g. the conditions a service covers most
  image?: ImageRef;
  placeholder?: string;
}

export type Section =
  | { kind: 'prose'; id?: string; h2: Inline; intro?: Inline; blocks: Block[]; tone?: 'white' | 'sky'; layout?: 'stack' | 'split' }
  | { kind: 'who'; id?: string; h2: Inline; intro?: Inline; items: { lead: Inline; text: Inline }[]; outro?: Inline; tone?: 'white' | 'sky' }
  | { kind: 'conditions'; id?: string; h2: Inline; intro?: Inline; items: ConditionItem[]; outro?: Inline; columns?: 1 | 2 }
  | { kind: 'review'; id?: string; review: ReviewRef; more?: Inline }
  | { kind: 'insurance'; id?: string; h2?: Inline; blocks?: Block[]; siteLines?: boolean; more?: boolean }
  | { kind: 'faq'; id?: string; h2: Inline; items: FaqItem[] }
  | { kind: 'cards'; id?: string; h2: Inline; intro?: Inline; cards: Card[]; groups?: { title: string; cards: Card[] }[]; outro?: Inline; columns?: 2 | 3; tone?: 'white' | 'sky' }
  | { kind: 'steps'; id?: string; h2: Inline; intro?: Inline; steps: { title: Inline; text: Inline }[]; outro?: Inline }
  | { kind: 'credentials'; id?: string; h2: Inline; intro?: Inline; items?: Inline[]; blocks?: Block[]; tone?: 'white' | 'sky' } // About: lines plus the framed diploma and license
  | { kind: 'social'; id?: string; h2: Inline; text?: Inline; label?: string } // About: the four social profiles
  | { kind: 'reviews'; id?: string; h2: Inline; intro?: Inline; groups: ReviewGroup[] } // Reviews page: every review, grouped
  | { kind: 'video'; id?: string; h2: Inline; intro?: Inline; review: ReviewRef; note?: Inline } // Reviews page: Matt's clip with his review
  | { kind: 'visit'; id?: string; h2: Inline; intro?: Inline; blocks?: Block[] } // Contact: facts table, page lines, the map
  | { kind: 'posts'; id?: string; h2: Inline; intro?: Inline } // Blog hub: every post, newest first, from src/content/blog
  | { kind: 'custom'; id: string; h2?: Inline }; // rendered by the page file itself

export interface Hero {
  h1: string;
  lede: Inline; // the promise line under the H1
  image?: ImageRef;
  placeholder?: string; // "PHOTO: ..." label when no real photo exists yet
  book?: string | false; // primary button label (first person), false for none; links to #book
  call?: boolean; // show the desktop "Or call (818) 749-3205" button (default true)
  stars?: boolean; // the "5.0 on Google, 28 reviews" line (default true)
  callFirst?: boolean; // cost and contact pages lead with the call button
  actions?: { text: string; href: string; style?: 'light' | 'ghost' }[]; // replaces the Book and call buttons (Reviews page)
}

export interface Booking {
  h2: Inline;
  lead: Inline; // ends with the confirmation line from the deck
  service: string; // option preselected in "What do you need help with?"
  messagePrompt?: string; // placeholder text in the optional message field
  button?: string; // submit label, default "Request my appointment"
}

export interface SchemaHints {
  serviceType?: string; // Service pages: the service name
  serviceDescription?: string; // one plain sentence for the Service node
  areaServed?: string[]; // city pages override the seven cities
  condition?: {
    name: string;
    alternateName?: string[];
    associatedAnatomy?: string; // e.g. 'Lumbar spine', plain text
    possibleTreatment?: string; // e.g. 'Physical therapy'
    parentServicePath?: string; // e.g. '/back-pain-therapy/'
  };
}

export interface PageContent {
  id: string; // 'P-004'
  path: string; // '/back-pain-therapy/'
  approved?: boolean; // true for the six deck pages: copy is never rewritten
  title: string; // meta title, exactly as the blueprint entry, 60 or fewer characters
  description: string; // meta description, exactly as the entry, 155 or fewer
  ogImage?: string; // '/img/<file>.webp'
  hero: Hero;
  sections: Section[];
  booking?: Booking | false;
  related?: { text: string; href: string }[];
  schema?: SchemaHints;
  notes?: string[]; // build notes for the report: open questions, gaps, rulings applied (never rendered)
}

export interface PostContent extends Omit<PageContent, 'hero' | 'sections'> {
  h1: string;
  datePublished: string; // YYYY-MM-DD
  dateModified?: string;
  parent: { text: string; href: string }; // parent service or page, shown as the tag
  summary: string; // one line for the blog list
  image?: ImageRef;
  answer: Inline; // the answer, first two sentences
  body: ({ type: 'h2'; text: Inline } | Block)[];
  faqs?: FaqItem[];
  sources?: { title: string; url: string; publisher: string; accessed: string; note?: string }[];
}
