/* Base-aware URL helper.
   Interim strategy: the site deploys to the project subpath
   (gbalabanli.github.io/AirminoWebsite/) until DNS cutover moves it to the
   apex domain. `base` in astro.config.mjs is therefore '/AirminoWebsite/' and
   every handwritten absolute link must go through u().
   At DNS cutover: set base back to '/' and redeploy — all links follow
   automatically. Fragment-only hrefs (#start, #) never need u(). */
const ROOT = import.meta.env.BASE_URL.replace(/\/$/, '');

export function u(path: string): string {
  return ROOT + path;
}
