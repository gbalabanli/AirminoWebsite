// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output for GitHub Pages.
// INTERIM: project-subpath hosting (gbalabanli.github.io/AirminoWebsite/)
// until DNS cutover → base '/AirminoWebsite/' + u() links (see src/lib/site.ts).
// AT DNS CUTOVER: set base back to '/' and redeploy. Nothing else changes.
export default defineConfig({
  site: 'https://airmino.com',
  base: '/AirminoWebsite/',
  output: 'static',
  integrations: [sitemap()],
});
