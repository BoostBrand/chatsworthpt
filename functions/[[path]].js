// Cloudflare Pages Function: answers the old WordPress, theme and spam URLs that the 301 map marks 410
// (reference/Chatsworth_Physical_Therapy_301_Map.csv) with "410 Gone" and the site's own 404 page as the body.
// public/_routes.json limits this function to those paths, so every other request is served as a static file.
const GONE = [
  /^\/test-page\/?$/,
  /^\/coming-soon\/?$/,
  /^\/global-styles\/?$/,
  /^\/fitness-trainer-[^/]+\/?$/, // shop, cart, checkout and any other theme sample page
  /^\/skuteczne-metody-wyplat-w-vavada-dla-graczy\/?$/,
  /^\/(?:.+\/)?feed\/?$/, // /feed/, /*/feed/ and /comments/feed/
  /^\/wp-content\//,
  /^\/wp-includes\//,
  /^\/wp-json(?:\/|$)/,
  /^\/xmlrpc\.php$/,
  /^\/wp-login\.php$/,
  /^\/wp-admin(?:\/|$)/,
  /^\/windows-10-activator-software\/?$/, // spam post, address read from the WordPress admin 24 Oct 2026 (T-009)
];
// The one old upload URL with Search Console impressions keeps its 301 (also excluded in _routes.json).
const MOVED = { '/wp-content/uploads/2025/03/neurological-rehabilitation-chatsworth-physical-therapy.png': '/neurological-rehabilitation/' };

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (MOVED[url.pathname]) return Response.redirect(new URL(MOVED[url.pathname], url).toString(), 301);
  if (!GONE.some((re) => re.test(url.pathname))) return context.next();
  let body = '<!doctype html><title>Gone</title><p>This page has been removed. <a href="/">Chatsworth Physical Therapy</a></p>';
  try {
    const page = await context.env.ASSETS.fetch(new URL('/404.html', url));
    if (page.ok) body = await page.text();
  } catch (e) {
    // keep the short body
  }
  return new Response(body, { status: 410, headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' } });
}
