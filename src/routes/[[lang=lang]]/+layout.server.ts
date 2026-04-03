import { fetchLocaleString } from '$lib/i18n/index.js';

export const csr = false;
export const prerender = true;

export async function load({ params }) {
  const lang = params.lang ?? 'en';
  return {
    lang,
    t: {
      nav: {
        about: await fetchLocaleString('ui.nav.about', lang),
        hrt: await fetchLocaleString('ui.nav.hrt', lang),
        glp1: await fetchLocaleString('ui.nav.glp1', lang),
        guides: await fetchLocaleString('ui.nav.guides', lang),
        other: await fetchLocaleString('ui.nav.other', lang),
      }
    }
  };
}
