import { fetchLocaleString } from '$lib/i18n/index.js';

export const prerender = true;

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		glp1Strings: {
			sectionLabel: await fetchLocaleString('ui.glp1.nav-section', lang),
			attribution: await fetchLocaleString('ui.glp1.attribution', lang),
		}
	};
}
