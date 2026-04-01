import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml } from '$lib/i18n/render-md.js';
import { guidesNav } from '$lib/guides/nav.js';
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
		title: await fetchLocaleString('ui.guides.pages.crypto-payments-monero', lang),
		nav: guidesNav(lang),
		sections: await Promise.all([
			fetchLocaleFragment('ui/guides/crypto-payments/monero', lang).then(renderFragmentToHtml),
		])
	};
}

export type LoadData = Awaited<ReturnType<typeof load>>;
