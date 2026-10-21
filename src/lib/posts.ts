// Every blog post content file (src/content/blog/*.ts), newest first, for the blog hub's list and its
// ItemList. Posts built later appear here by themselves.
import type { PostContent } from './types';

const mods = import.meta.glob<{ default: PostContent }>('../content/blog/*.ts', { eager: true });

export const POSTS: PostContent[] = Object.values(mods)
  .map((m) => m.default)
  .sort((a, b) => (a.datePublished === b.datePublished ? a.id.localeCompare(b.id) : b.datePublished.localeCompare(a.datePublished)));

export const fmtDate = (d: string) =>
  new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
