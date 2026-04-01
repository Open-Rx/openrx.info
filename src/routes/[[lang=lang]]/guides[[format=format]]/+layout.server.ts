import { fetchLocaleString } from '$lib/i18n/index.js';

export const prerender = true;

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		guidesStrings: {
			sectionLabel: await fetchLocaleString('ui.guides.nav-section', lang),
		}
	};
}
