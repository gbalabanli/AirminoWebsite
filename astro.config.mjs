// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output for GitHub Pages + custom domain (https://airmino.com).
// `base: '/'` is correct for both the apex domain and the
// gbalabanli.github.io/AirminoWebsite fallback ONLY if served from root;
// project-page fallback would need base '/AirminoWebsite/' — see Phase 01 notes.
export default defineConfig({
  site: 'https://airmino.com',
  output: 'static',
  integrations: [sitemap()],
});
