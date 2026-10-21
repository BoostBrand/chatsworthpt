// Renders the four inline marks used in content files (see src/lib/types.ts) to safe HTML.
import { PREVIEW } from '../data/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const MARKER = /\[(CONFIRM|verify|SOURCE NEEDED)([^\]]*)\]/g;
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const BOLD = /\*\*([^*]+)\*\*/g;

export function renderInline(text: string): string {
  let out = esc(text);
  // Markers first, so a marker is never read as link text.
  out = out.replace(MARKER, (_m, tag: string, rest: string) => {
    const cls = PREVIEW ? 'confirm' : 'confirm plain';
    return `<mark class="${cls}">[${tag}${rest}]</mark>`;
  });
  out = out.replace(LINK, (_m, label: string, href: string) => {
    const external = /^https?:\/\//.test(href);
    const attrs = external ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${href}"${attrs}>${label}</a>`;
  });
  out = out.replace(BOLD, '<strong>$1</strong>');
  return out;
}

// Plain text for JSON-LD and meta: marks removed, link text kept, markers kept as written.
export function plainInline(text: string): string {
  return text.replace(LINK, '$1').replace(BOLD, '$1');
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}
