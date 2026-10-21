// The 28 Google reviews, verbatim from REVIEWS-chatsworthpt-28.csv (generated into reviews.json by
// scripts/build-data.mjs). A quote may be cut to whole sentences; it is never extended, reworded or completed.
import reviews from '../data/reviews.json';
import type { ReviewRef } from './types';

export interface Review {
  key: string;
  label: string;
  displayName: string;
  date: string;
  month: string;
  theme: string;
  quote: string;
  usable: boolean;
  note?: string;
}

const all = reviews as Review[];

export function getReview(key: string): Review {
  const r = all.find((x) => x.key === key);
  if (!r) throw new Error(`Unknown review key "${key}"`);
  if (!r.usable) throw new Error(`Review "${key}" is left off the site: ${r.note ?? 'no text'}`);
  return r;
}

export function usableReviews(): Review[] {
  return all.filter((r) => r.usable);
}

const ABBREV = /(?:^|\s)(?:Dr|Mr|Mrs|Ms|St|vs|etc)\.$/;

// Splits a quote into whole sentences without breaking on "Dr." and similar.
export function sentences(text: string): string[] {
  const out: string[] = [];
  let start = 0;
  const re = /[.!?]+["')\]]?(\s+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const end = m.index + m[0].length - m[1].length;
    const head = text.slice(start, end);
    const next = text.slice(re.lastIndex, re.lastIndex + 1);
    if (ABBREV.test(head) || !/[A-Z0-9"'(]/.test(next)) continue;
    out.push(head.trim());
    start = re.lastIndex;
  }
  const tail = text.slice(start).trim();
  if (tail) out.push(tail);
  return out;
}

// The text shown for a review reference: the whole CSV quote, or a run of whole sentences from it.
export function quoteFor(ref: ReviewRef): string {
  const r = getReview(ref.key);
  if (!ref.sentences) return r.quote.trim();
  const parts = sentences(r.quote);
  const [a, b] = ref.sentences;
  if (a < 0 || b >= parts.length || a > b) throw new Error(`Review "${ref.key}": sentence range ${a}-${b} outside 0-${parts.length - 1}`);
  const text = parts.slice(a, b + 1).join(' ');
  if (!r.quote.includes(text)) throw new Error(`Review "${ref.key}": the cut is not a verbatim run of the CSV text`);
  return text;
}
