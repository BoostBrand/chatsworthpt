// The one site script. It carries the draft 9 behaviour over as written (sticky bar, header compress,
// open-today line, nav underline, services photo swap, one-off reveals, FAQ height, video, form) and adds
// the inner-page pieces (the underline resting on the current page, the phone menu, tracking events).
// Every animation is off under prefers-reduced-motion. The homepage hero line moment is inline in
// src/pages/index.astro so it runs before first paint, as in the draft.
import { WEB3FORMS_KEY, FORMS_ENABLED } from '../data/site';
import { setupBookingForms } from './booking-form';

const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
type G = (...args: unknown[]) => void;
const track = (name: string, params: Record<string, unknown> = {}) => {
  const w = window as unknown as { gtag?: G; dataLayer?: unknown[]; cptGtm?: boolean };
  // GA4 directly (only after the visitor's yes to Google Analytics)
  if (typeof w.gtag === 'function') w.gtag('event', name, { page_path: location.pathname, ...params });
  // Tag Manager's data layer too, once Tag Manager is loaded (only after the visitor's yes to it), so a future
  // tag there (an ads conversion, say) can fire on the same events
  if (w.cptGtm && Array.isArray(w.dataLayer)) w.dataLayer.push({ event: name, page_path: location.pathname, ...params });
};

// Sticky Call and Book bar: shows once the hero buttons are gone, hides over the footer.
(function () {
  const bar = document.getElementById('sticky');
  const hero = document.querySelector('.hero-cta') || document.querySelector('h1');
  const foot = document.querySelector('.footer');
  if (!bar || !hero || !foot || !('IntersectionObserver' in window)) return;
  let heroGone = false;
  let footSeen = false;
  const update = () => {
    const show = heroGone && !footSeen;
    bar.classList.toggle('show', show);
    bar.setAttribute('aria-hidden', show ? 'false' : 'true');
    (bar as HTMLElement & { inert: boolean }).inert = !show;
  };
  new IntersectionObserver((e) => { heroGone = !e[0].isIntersecting && e[0].boundingClientRect.top < 0; update(); }, { threshold: 0 }).observe(hero);
  new IntersectionObserver((e) => { footSeen = e[0].isIntersecting; update(); }, { threshold: 0.1 }).observe(foot);
  update();
})();

// Patient video: custom play button, sound on when tapped, poster back when it ends.
(function () {
  const v = document.getElementById('story-video') as HTMLVideoElement | null;
  const pb = document.getElementById('story-play') as HTMLButtonElement | null;
  if (!v || !pb) return;
  const ph = pb.parentNode as HTMLElement;
  pb.addEventListener('click', () => {
    ph.classList.add('playing'); pb.setAttribute('aria-hidden', 'true'); pb.tabIndex = -1; v.controls = true; v.muted = false;
    const pr = v.play();
    if (pr && pr.catch) pr.catch(() => { ph.classList.remove('playing'); pb.removeAttribute('aria-hidden'); pb.tabIndex = 0; v.controls = true; });
  });
  v.addEventListener('ended', () => { v.controls = false; ph.classList.remove('playing'); pb.removeAttribute('aria-hidden'); pb.tabIndex = 0; v.load(); });
})();

// Header: compresses after 16px of scroll; the open-today line under the phone number.
(function () {
  const top = document.querySelector('.topbar');
  if (top) window.addEventListener('scroll', () => { top.classList.toggle('scrolled', window.scrollY > 16); }, { passive: true });
  const openLine = document.getElementById('open-line');
  if (openLine) { const d = new Date().getDay(); openLine.textContent = d === 0 ? 'Closed today, opens Monday 10am' : 'Open today until 8pm'; }
})();

// Header nav: one underline that slides to the hovered item. On the homepage it rests on the section in
// view (scroll-spy over the five in-page anchors); on inner pages it rests on the current page's item.
(function () {
  const nav = document.querySelector('.nav') as HTMLElement | null;
  const ink = document.querySelector('.nav-ink') as HTMLElement | null;
  if (!nav || !ink) return;
  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>(':scope > a, :scope > .nav-item > a'));
  let active: HTMLAnchorElement | null = null;
  const moveTo = (a: HTMLAnchorElement | null) => {
    if (!a) { ink.classList.remove('on'); return; }
    const nr = nav.getBoundingClientRect();
    const ar = a.getBoundingClientRect();
    ink.style.width = ar.width + 'px';
    ink.style.transform = 'translateX(' + (ar.left - nr.left) + 'px)';
    ink.classList.add('on');
  };
  links.forEach((a) => { a.addEventListener('mouseenter', () => moveTo(a)); a.addEventListener('focus', () => moveTo(a)); });
  nav.addEventListener('mouseleave', () => moveTo(active));
  nav.addEventListener('focusout', () => { setTimeout(() => { if (!nav.contains(document.activeElement)) moveTo(active); }, 0); });
  window.addEventListener('resize', () => { if (active) moveTo(active); });

  const inPage = links.every((a) => (a.getAttribute('href') || '').startsWith('#'));
  if (!inPage) {
    active = links.find((a) => a.getAttribute('aria-current') === 'page' || a.classList.contains('is-section')) || null;
    if (active) requestAnimationFrame(() => moveTo(active));
    return;
  }
  const targets = links.map((a) => document.querySelector<HTMLElement>(a.getAttribute('href') as string));
  let ticking = false;
  const pick = () => {
    ticking = false;
    const line = window.innerHeight * 0.38;
    let cur: HTMLAnchorElement | null = null;
    targets.forEach((t, i) => { if (t && t.getBoundingClientRect().top <= (t.id === 'faq' ? window.innerHeight * 0.12 : line)) cur = links[i]; });
    const book = document.getElementById('book');
    if (book && book.getBoundingClientRect().top <= line) cur = null;
    if (cur !== active) {
      active = cur;
      links.forEach((a) => { if (a === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
      if (!nav.matches(':hover')) moveTo(active);
    }
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(pick); } }, { passive: true });
  pick();
})();

// Phone menu (every page, below 1180px): closes on Escape, on a tap outside, and after a link is chosen;
// its groups open one at a time.
(function () {
  const m = document.querySelector('details.mnav') as HTMLDetailsElement | null;
  if (!m) return;
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && m.open) { m.open = false; (m.querySelector('summary') as HTMLElement).focus(); } });
  document.addEventListener('click', (e) => { if (m.open && !m.contains(e.target as Node)) m.open = false; });
  m.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { m.open = false; }));
  const subs = Array.from(m.querySelectorAll<HTMLDetailsElement>('details.mnav-sub'));
  subs.forEach((d) => d.addEventListener('toggle', () => { if (d.open) subs.forEach((o) => { if (o !== d) o.open = false; }); }));
})();

// One-off reveals when a band comes into view: trust strokes, steps connector, play button breath, map rings.
(function () {
  const reveals: [string, string][] = [['.trust', 'seen'], ['.steps', 'drawn'], ['.phone', 'seen'], ['.map', 'seen']];
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(e.target.getAttribute('data-reveal') as string); io.unobserve(e.target); } });
    }, { threshold: 0.35 });
    reveals.forEach(([sel, cls]) => document.querySelectorAll(sel).forEach((el) => { el.setAttribute('data-reveal', cls); io.observe(el); }));
  } else {
    reveals.forEach(([sel, cls]) => document.querySelectorAll(sel).forEach((el) => el.classList.add(cls)));
  }
})();

// FAQ: open and close animate their height; the chevron and title colour come from CSS.
document.querySelectorAll<HTMLDetailsElement>('.faq details').forEach((d) => {
  const sum = d.querySelector('summary') as HTMLElement;
  let busy: Animation | null = null;
  sum.addEventListener('click', (ev) => {
    if (reduce || !d.animate) return;
    ev.preventDefault();
    if (busy) busy.cancel();
    const from = d.offsetHeight + 'px';
    let to: string;
    if (d.open) {
      to = sum.offsetHeight + 'px';
      busy = d.animate({ height: [from, to] }, { duration: 260, easing: 'cubic-bezier(.2,.7,.2,1)' });
      busy.onfinish = () => { d.open = false; d.style.height = ''; busy = null; };
    } else {
      d.open = true;
      to = d.offsetHeight + 'px';
      busy = d.animate({ height: [from, to] }, { duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)' });
      busy.onfinish = () => { d.style.height = ''; busy = null; };
    }
    busy.oncancel = () => { d.style.height = ''; busy = null; };
  });
});

// Web3Forms requires hCaptcha separately in its dashboard; client checks provide accessible feedback.
setupBookingForms({
  enabled: FORMS_ENABLED,
  accessKey: WEB3FORMS_KEY,
  onSuccess: (service) => track('generate_lead', { service }),
});

// Tracking events (sent only when the GA4 tag is present, so only after the visitor's yes in the cookie banner):
// generate_lead when a booking request is sent (above), call_click and book_click here, each with the page path.
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest('a');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if (href.startsWith('tel:')) track('call_click', { link_text: a.textContent?.trim() });
  else if (href === '#book' || href.endsWith('#book')) track('book_click', { link_text: a.textContent?.trim() });
});
