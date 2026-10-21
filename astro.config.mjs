// Astro 5 static build for chatsworthpt.com. Output: dist/ (Cloudflare Pages, build command npm run build).
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { SITE_URL, CITY_PAGES_LIVE, LEGAL_TEXT_READY } from './src/data/site.ts';

// Pages that carry noindex stay out of the sitemap (the same rules the layout applies).
const NOINDEX = new Set([
  '/404/',
  ...(CITY_PAGES_LIVE ? [] : ['/physical-therapy-northridge/', '/physical-therapy-porter-ranch/']),
  ...(LEGAL_TEXT_READY ? [] : ['/privacy-policy/', '/terms-of-service/']),
]);

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !NOINDEX.has(new URL(page).pathname),
    }),
  ],
});
