// Validates content files before a build. Usage: node scripts/check-content.mjs src/content/<file>.ts [...]
// With no arguments it checks every content file. Errors fail (exit 1); warnings are for the build lead's review.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const pages = JSON.parse(readFileSync(join(ROOT, 'src/data/pages.json'), 'utf8'));
const reviews = JSON.parse(readFileSync(join(ROOT, 'src/data/reviews.json'), 'utf8'));
const seo = JSON.parse(readFileSync(join(ROOT, 'reference/blueprint-seo.json'), 'utf8'));
const byPath = new Map(pages.map((p) => [p.path, p]));
const byId = new Map(pages.map((p) => [p.id, p]));
const BANNED = ['whether you want', "in today's digital landscape", 'look no further', 'unlock', 'elevate', 'game-changer', 'seamless', "we've got you covered", 'we have got you covered'];
// Numbers that are confirmed facts (handoff "Facts confirmed" and the approved pages). Anything else is flagged.
const OK_NUMBERS = new Set(['12', '45', '60', '15', '15+', '301809', '818', '749', '3205', '749-3205', '19851', '105', '91311', '28', '5.0', '10am', '8pm', '2620.1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const contentFiles = () => walk(join(ROOT, 'src/content')).filter((f) => f.endsWith('.ts') && !f.endsWith('home.ts'));

function sentences(text) {
  const out = []; let start = 0; const re = /[.!?]+["')\]]?(\s+)/g; let m;
  while ((m = re.exec(text))) {
    const end = m.index + m[0].length - m[1].length; const head = text.slice(start, end); const next = text.slice(re.lastIndex, re.lastIndex + 1);
    if (/(?:^|\s)(?:Dr|Mr|Mrs|Ms|St|vs|etc)\.$/.test(head) || !/[A-Z0-9"'(]/.test(next)) continue;
    out.push(head.trim()); start = re.lastIndex;
  }
  const tail = text.slice(start).trim(); if (tail) out.push(tail); return out;
}

// Every string in the object, with a label for where it sits.
function strings(obj, path = '') {
  if (typeof obj === 'string') return [[path, obj]];
  if (Array.isArray(obj)) return obj.flatMap((v, i) => strings(v, `${path}[${i}]`));
  if (obj && typeof obj === 'object') return Object.entries(obj).flatMap(([k, v]) => (k === 'notes' ? [] : strings(v, path ? `${path}.${k}` : k)));
  return [];
}

async function load(file) {
  const mod = await import(pathToFileURL(resolve(file)).href + `?t=${Date.now()}`);
  return mod.default;
}

async function reviewUse() {
  const use = new Map();
  for (const f of contentFiles()) {
    try {
      const c = await load(f);
      const meta = byPath.get(c.path);
      if (!meta || !['service', 'condition'].includes(meta.type)) continue;
      for (const s of c.sections ?? []) if (s.kind === 'review') use.set(s.review.key, [...(use.get(s.review.key) ?? []), c.path]);
    } catch { /* reported when that file is checked */ }
  }
  return use;
}

async function check(file, use) {
  const errors = []; const warns = [];
  let c;
  try { c = await load(file); } catch (e) { return { file, errors: [`cannot import: ${e.message}`], warns }; }
  const meta = byPath.get(c.path);
  if (!meta) errors.push(`path ${c.path} is not in the page registry`);
  if (meta && meta.id !== c.id) errors.push(`id ${c.id} does not match the registry (${meta.id})`);
  const want = seo[c.id] ?? {};
  const isPost = meta?.type === 'post';
  const h1 = isPost ? c.h1 : c.hero?.h1;
  if (want.h1 && h1 !== want.h1) errors.push(`H1 differs from the entry:\n      got  ${h1}\n      want ${want.h1}`);
  if (want.title && c.title !== want.title) errors.push(`title differs from the entry: ${c.title}`);
  if (want.description && c.description !== want.description) errors.push(`description differs from the entry: ${c.description}`);
  if (c.title.length > 60) errors.push(`title is ${c.title.length} characters`);
  if (c.description.length > 155) errors.push(`description is ${c.description.length} characters`);
  const all = strings(c);
  let words = 0;
  for (const [where, s] of all) {
    if (['title', 'description', 'path', 'id'].includes(where) || /\.(src|href|key|alt|service)$/.test(where) || where.startsWith('schema')) continue;
    if (/[\u2014\u2013]/.test(s)) errors.push(`em or en dash in ${where}`);
    for (const b of BANNED) if (s.toLowerCase().includes(b)) errors.push(`banned phrase "${b}" in ${where}`);
    if (/\$\d/.test(s)) errors.push(`dollar figure in ${where}: ${s.match(/\$\d[\d,.]*/)[0]}`);
    if (/dry needling/i.test(s) && c.id !== 'P-019') errors.push(`"dry needling" in ${where} (allowed on /faqs/ only)`);
    if (/19860|Suite 201/i.test(s)) errors.push(`old address in ${where}`);
    if (/<[a-z]/i.test(s)) errors.push(`HTML in ${where}; use the inline marks`);
    if (!c.approved && /(?<!about )(?:\b60[- ]minutes?\b|\bsixty minutes\b|\b60-minute\b)/i.test(s)) errors.push(`flat visit length in ${where}: write "about 60 minutes, depending on what you need"`);
    for (const m of s.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
      const href = m[2];
      if (/^https?:/.test(href)) continue;
      if (href.startsWith('#')) continue;
      const p = href.split('#')[0];
      if (!byPath.has(p)) errors.push(`link to ${href} in ${where} is not a page in the registry`);
      if (p === c.path) warns.push(`link to itself in ${where}`);
    }
    for (const m of s.matchAll(/\[(CONFIRM|verify|SOURCE NEEDED)[^\]]*\]/g)) warns.push(`marker in ${where}: ${m[0].slice(0, 90)}`);
    if (/\[(?!CONFIRM|verify|SOURCE NEEDED)[^\]]+\](?!\()/.test(s)) errors.push(`stray bracket in ${where}: use a [CONFIRM ...] marker or a [link](/path/)`);
    if (!c.approved) {
      for (const m of s.replace(/\[[^\]]*\]\([^)]*\)/g, '').replace(/\(818\) 749-3205/g, '').matchAll(/\b\d[\d,.:+]*(?:am|pm)?\b%?/g)) {
        if (!OK_NUMBERS.has(m[0])) warns.push(`number "${m[0]}" in ${where}: is it a confirmed fact?`);
      }
    }
    if (!['hero.image', 'hero.placeholder'].some((k) => where.startsWith(k))) words += s.split(/\s+/).filter(Boolean).length;
  }
  const imgs = all.filter(([w]) => /\.src(Mobile)?$/.test(w)).map(([, v]) => v);
  for (const src of imgs) if (!existsSync(join(ROOT, 'public', src))) errors.push(`image ${src} is not in public/img`);
  for (const [w, v] of all) if (/placeholder$|\.label$/.test(w) && w.includes('placeholder') && !v.startsWith('PHOTO:')) errors.push(`placeholder ${w} must start with "PHOTO:"`);
  if (!isPost) {
    const secs = c.sections ?? [];
    const revs = secs.filter((s) => s.kind === 'review');
    if (revs.length > 1) errors.push(`${revs.length} review sections; one per page`);
    for (const s of revs) {
      const r = reviews.find((x) => x.key === s.review.key);
      if (!r) errors.push(`review key "${s.review.key}" is not in reviews.json`);
      else if (!r.usable) errors.push(`review "${s.review.key}" is left off the site`);
      else if (s.review.sentences) {
        const parts = sentences(r.quote); const [a, b] = s.review.sentences;
        if (a < 0 || b >= parts.length || a > b) errors.push(`review "${s.review.key}" sentence range ${a}-${b} outside 0-${parts.length - 1}`);
      }
      const users = use.get(s.review.key) ?? [];
      if (['service', 'condition'].includes(meta?.type) && users.filter((p) => p !== c.path).length) errors.push(`review "${s.review.key}" is already on ${users.filter((p) => p !== c.path).join(', ')}`);
    }
    if (['service', 'condition', 'city'].includes(meta?.type) && !c.approved) {
      const ins = secs.find((s) => s.kind === 'insurance');
      if (!ins) errors.push('no insurance section: service and conditions pages carry the site-wide lines');
      else if (ins.siteLines === false) errors.push('insurance section has siteLines false: the site-wide lines are required');
    }
    if (['service', 'condition', 'city'].includes(meta?.type) && !c.booking) errors.push('no booking block');
    for (const s of secs) if (s.kind === 'faq') for (const f of s.items) if (!f.q.trim().endsWith('?')) warns.push(`FAQ question without a question mark: ${f.q}`);
  }
  return { file: relative(ROOT, file), errors, warns, words };
}

const files = process.argv.slice(2).length ? process.argv.slice(2) : contentFiles();
const use = await reviewUse();
let failed = 0;
for (const f of files) {
  const r = await check(f, use);
  const status = r.errors.length ? 'FAIL' : 'ok';
  console.log(`${status.padEnd(4)} ${r.file}  (${r.words ?? 0} words)`);
  for (const e of r.errors) console.log(`  error: ${e}`);
  for (const w of r.warns) console.log(`  warn:  ${w}`);
  if (r.errors.length) failed++;
}
process.exit(failed ? 1 : 0);
