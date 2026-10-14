// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output for GitHub Pages + custom domain (https://airmino.com).
// DNS cutover complete (2026-10-14): apex A + www CNAME point at Pages,
// so base is '/' and u() links render root-absolute.
export default defineConfig({
  site: 'https://airmino.com',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
});
