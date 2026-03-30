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
      }
    }
  };
}
