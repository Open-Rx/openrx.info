import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml } from '$lib/i18n/render-md.js';
import { glp1Nav } from '$lib/glp1/nav.js';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
  return [
    { lang: 'en', format: '' },
    { lang: '', format: '' }
  ];
};

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		lite: false,
		title: await fetchLocaleString('ui.glp1.pages.sourcing-crypto-other', lang),
		nav: glp1Nav(lang),
		sections: await Promise.all([
			fetchLocaleFragment('ui/guides/crypto-payments/other-platforms', lang).then(renderFragmentToHtml),
		])
	};
}

export type LoadData = Awaited<ReturnType<typeof load>>;
