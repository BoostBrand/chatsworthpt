// Static build for chatsworthpt.com. Output: dist/ (Cloudflare Pages, build command npm run build).
import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
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
  // Preserve the approved inline spacing across the Astro 7 compiler upgrade.
  compressHTML: true,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.has(new URL(page).pathname),
    }),
  ],
  // Keep the existing Tailwind 3 CSS pipeline without the Astro 5-only integration.
  // global.css already provides the directives; tailwind.config.mjs disables preflight.
  vite: {
    // Keep minification from replacing existing media queries with newer range syntax.
    build: { cssTarget: ['edge88', 'firefox78', 'chrome87', 'safari14'] },
    css: {
      postcss: { plugins: [tailwindcss(), autoprefixer()] },
    },
  },
});
