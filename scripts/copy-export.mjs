// Writes the copy export for review: every page's words from H1 to FAQs, generated from the content files
// (never typed by hand). Usage: node scripts/copy-export.mjs > COPY-EXPORT.md
// The homepage is approved as written; its entry gives the SEO fields and points to the Project master.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const pages = JSON.parse(readFileSync(join(ROOT, 'src/data/pages.json'), 'utf8'));
const reviews = JSON.parse(readFileSync(join(ROOT, 'src/data/reviews.json'), 'utf8'));
const byKey = new Map(reviews.map((r) => [r.key, r]));
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(join(ROOT, 'src/content')).filter((f) => f.endsWith('.ts'));

const SITE_LINES = [
  'No referral needed to start: California law lets you see a physical therapist without a referral for up to 12 visits or 45 days, whichever comes first. After that, we need a referral from your doctor to continue. Medicare patients need a referral from the start.',
  'Insurance: We accept Medicare and personal injury liens. If you have PPO insurance, we provide a superbill, an itemized receipt you send to your insurer for reimbursement. Direct-pay patients are welcome.',
  'Visits: Visits run about 60 minutes, depending on what you need, and every one is one-on-one with Dr. Ed.',
];

// Same sentence splitter as src/lib/reviews.ts, so a cut review exports exactly as it renders.
function sentences(text) {
  const out = []; let start = 0; const re = /[.!?]+["')\]]?(\s+)/g; let m;
  while ((m = re.exec(text))) {
    const end = m.index + m[0].length - m[1].length; const head = text.slice(start, end); const next = text.slice(re.lastIndex, re.lastIndex + 1);
    if (/(?:^|\s)(?:Dr|Mr|Mrs|Ms|St|vs|etc)\.$/.test(head) || !/[A-Z0-9"'(]/.test(next)) continue;
    out.push(head.trim()); start = re.lastIndex;
  }
  const tail = text.slice(start).trim(); if (tail) out.push(tail); return out;
}
const quote = (ref) => {
  const r = byKey.get(ref.key);
  if (!r) return `[unknown review ${ref.key}]`;
  const text = ref.sentences ? sentences(r.quote).slice(ref.sentences[0], ref.sentences[1] + 1).join(' ') : r.quote;
  return `"${text}" (${r.displayName}${ref.context ? `, ${ref.context}` : ''}, Google review, ${r.month})`;
};

const lines = [];
const out = (s = '') => lines.push(s);
function blocks(bs) {
  for (const b of bs ?? []) {
    if (b.type === 'p' || b.type === 'callout') out(b.text), out();
    else if (b.type === 'h2') out(`### ${b.text}`), out();
    else if (b.type === 'h3') out(`#### ${b.text}`), out();
    else if (b.type === 'ul' || b.type === 'ol') { b.items.forEach((it, i) => out(`${b.type === 'ol' ? `${i + 1}.` : '-'} ${it}`)); out(); }
    else if (b.type === 'leads') { b.items.forEach((it) => out(`- **${it.lead.replace(/\*\*/g, '')}** ${it.text}`)); out(); }
    else if (b.type === 'links') { out(`${b.label ? b.label + ' ' : ''}${b.items.map((l) => `[${l.text}](${l.href})`).join(' | ')}`); out(); }
    else if (b.type === 'placeholder') out(`[${b.label}]`), out();
    else if (b.type === 'image') out(`[Image: ${b.image.alt}]`), out();
  }
}
function section(s) {
  const h2 = s.h2 ? `### ${s.h2}` : null;
  switch (s.kind) {
    case 'who':
      out(h2); out(); if (s.intro) out(s.intro), out();
      s.items.forEach((it) => out(`- **${it.lead}** ${it.text}`)); out(); if (s.outro) out(s.outro), out(); break;
    case 'prose':
      out(h2); out(); if (s.intro) out(s.intro), out(); blocks(s.blocks); break;
    case 'conditions':
      out(h2); out(); if (s.intro) out(s.intro), out();
      s.items.forEach((it) => out(`- ${it.href ? `[${it.text}](${it.href})` : it.text}${it.note ? `: ${it.note}` : ''}`)); out();
      if (s.outro) out(s.outro), out(); break;
    case 'review':
      out('### Review'); out(); out(quote(s.review)); out(); if (s.more) out(s.more), out(); break;
    case 'video':
      out(h2); out(); if (s.intro) out(s.intro), out(); out("[Video: Matt's frozen shoulder story, 42 seconds]"); out(quote(s.review)); out(); if (s.note) out(s.note), out(); break;
    case 'reviews':
      out(h2); out(); if (s.intro) out(s.intro), out();
      for (const g of s.groups) { out(`#### ${g.title}`); out(); if (g.intro) out(g.intro), out(); g.items.forEach((it) => out(`- ${quote(it)}${it.href ? ` [${it.linkText ?? 'Read more'}](${it.href})` : ''}`)); out(); }
      break;
    case 'insurance':
      out(`### ${s.h2 ?? 'Insurance and referrals'}`); out(); blocks(s.blocks);
      if (s.siteLines !== false) { SITE_LINES.forEach((l) => out(`- ${l}`)); out(); }
      if (s.more !== false) out('Details and what to bring are on the [insurance and cost](/insurance-and-cost/) page.'), out();
      break;
    case 'faq':
      out(h2); out(); for (const f of s.items) { out(`**${f.q}**`); out(Array.isArray(f.a) ? f.a.join('\n\n') : f.a); out(); } break;
    case 'cards': {
      out(h2); out(); if (s.intro) out(s.intro), out();
      const sets = s.groups?.length ? s.groups : [{ title: '', cards: s.cards }];
      for (const g of sets) { if (g.title) out(`#### ${g.title}`), out(); g.cards.forEach((c) => out(`- [${c.title}](${c.href}): ${c.text}${c.meta ? ` (${c.meta})` : ''}`)); out(); }
      if (s.outro) out(s.outro), out(); break;
    }
    case 'steps':
      out(h2); out(); if (s.intro) out(s.intro), out(); s.steps.forEach((st, i) => out(`${i + 1}. **${st.title}** ${st.text}`)); out(); if (s.outro) out(s.outro), out(); break;
    case 'credentials':
      out(h2); out(); if (s.intro) out(s.intro), out();
      (s.items ?? ["Doctor of Physical Therapy, Mount Saint Mary's University", 'B.S. in Exercise Science, Cal State Northridge', 'Licensed by the Physical Therapy Board of California, license 301809', '15+ years of experience treating patients']).forEach((it) => out(`- ${it}`));
      out(); blocks(s.blocks); out('[Images: the framed diploma and the California license]'); out(); break;
    case 'social':
      out(h2); out(); if (s.text) out(s.text), out(); out('[The four social profile icons]'); out(); break;
    case 'visit':
      out(h2); out(); out('[Facts table: address, hours, phone, email, access; the map with Get directions and Call]'); out(); blocks(s.blocks); break;
    case 'posts':
      out(h2); out(); out('[The list of blog posts, newest first]'); out(); break;
    default:
      out(`[${s.kind} section]`); out();
  }
}

const loaded = new Map();
for (const f of files) {
  if (f.endsWith('home.ts')) continue;
  const c = (await import(pathToFileURL(f).href)).default;
  loaded.set(c.id, c);
}

out('# Chatsworth PT site: copy export');
out();
out(`Generated from the content files in the repo by scripts/copy-export.mjs on ${new Date().toISOString().slice(0, 10)}. One section per page, in the`);
out('blueprint order. Highlighted markers ([CONFIRM ...], [verify: ...], [SOURCE NEEDED: ...]) are waiting on an answer. The booking');
out('band on every page also prints: "Prefer to talk? Call (818) 749-3205. Dr. Ed answers his own phone.", the address and hours,');
out('and "No payment is required to book."');
out();
for (const p of pages) {
  out(`## ${p.id} ${p.full} (${p.path === '/404' ? '/404, served for any missing URL' : p.path})`);
  out();
  if (p.id === 'P-001') {
    const home = (await import(pathToFileURL(join(ROOT, 'src/content/home.ts')).href)).default;
    out(`Meta title: ${home.title}`); out(`Meta description: ${home.description}`); out();
    out('Approved homepage (draft 9), ported word for word. The full copy is the Project master claude/HOMEPAGE-DRAFT4-chatsworthpt.html.');
    out(); continue;
  }
  if (p.id === 'P-052') {
    out('Meta title: Page Not Found | Chatsworth Physical Therapy'); out();
    out('# That page is not here'); out(); out('The page you asked for is not on this site. It may have moved when the site was rebuilt.'); out();
    out('Buttons: Call (818) 749-3205 | All services | Conditions | Contact'); out(); continue;
  }
  const c = loaded.get(p.id);
  if (!c) { out('Not built yet.'); out(); continue; }
  out(`Meta title: ${c.title}`); out(`Meta description: ${c.description}`); out();
  if (p.type === 'post') {
    out(`# ${c.h1}`); out(); out(`By Dr. Edward Shut, DPT. ${c.datePublished}. Filed under [${c.parent.text}](${c.parent.href}).`); out();
    out(c.answer); out(); blocks(c.body);
    if (c.faqs?.length) { out('### Questions about this'); out(); for (const f of c.faqs) { out(`**${f.q}**`); out(Array.isArray(f.a) ? f.a.join('\n\n') : f.a); out(); } }
    if (c.sources?.length) { out('### Sources'); out(); c.sources.forEach((s, i) => out(`${i + 1}. [${s.title}](${s.url}), ${s.publisher}, read ${s.accessed}${s.note ? `. ${s.note}` : ''}`)); out(); }
  } else {
    out(`# ${c.hero.h1}`); out(); if (c.hero.lede) out(c.hero.lede), out();
    if (c.hero.placeholder) out(`[${c.hero.placeholder}]`), out();
    if (p.type === 'legal') out('[CONFIRM: live policy text to be pasted]'), out();
    for (const s of c.sections) section(s);
  }
  if (c.booking) { out(`### ${c.booking.h2}`); out(); out(c.booking.lead); out(); }
  if (c.related?.length) { out(`Related pages: ${c.related.map((l) => `[${l.text}](${l.href})`).join(' | ')}`); out(); }
}
process.stdout.write(lines.filter((l) => l !== null).join('\n') + '\n');
