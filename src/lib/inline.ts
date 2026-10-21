// Renders the four inline marks used in content files (see src/lib/types.ts) to safe HTML.
import { PREVIEW, CITY_PAGES_LIVE } from '../data/site';

// The two city pages stay unlinked until CITY_PAGES_LIVE is true: a link to one renders as plain text.
const CITY_PATHS = ['/physical-therapy-northridge/', '/physical-therapy-porter-ranch/'];

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const MARKER = /\[(CONFIRM|verify|SOURCE NEEDED)([^\]]*)\]/g;
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const BOLD = /\*\*([^*]+)\*\*/g;
const PHONE = /\(818\) 749-3205/g;

export function renderInline(text: string): string {
  let out = esc(text);
  // Markers first, so a marker is never read as link text.
  out = out.replace(MARKER, (_m, tag: string, rest: string) => {
    const cls = PREVIEW ? 'confirm' : 'confirm plain';
    return `<mark class="${cls}">[${tag}${rest}]</mark>`;
  });
  out = out.replace(LINK, (_m, label: string, href: string) => {
    if (!CITY_PAGES_LIVE && CITY_PATHS.includes(href.split('#')[0])) return label;
    const external = /^https?:\/\//.test(href);
    const attrs = external ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${href}"${attrs}>${label}</a>`;
  });
  out = out.replace(BOLD, '<strong>$1</strong>');
  // Every phone number is a tap-to-call link (QA gate: no bare numbers), never inside another link.
  out = out
    .split(/(<a\b[^>]*>[\s\S]*?<\/a>)/)
    .map((part, i) => (i % 2 ? part : part.replace(PHONE, '<a href="tel:+18187493205">$&</a>')))
    .join('');
  return out;
}

// Plain text for JSON-LD and meta: marks removed, link text kept. Markers ([CONFIRM ...] and the rest) are
// dropped so a pending fact never reaches structured data; the page itself still shows them while PREVIEW is on.
export function plainInline(text: string): string {
  return text
    .replace(MARKER, '')
    .replace(LINK, '$1')
    .replace(BOLD, '$1')
    .replace(/\s+([.,;:])/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim();
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
