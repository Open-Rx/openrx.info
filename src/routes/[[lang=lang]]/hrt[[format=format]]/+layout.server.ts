import { fetchLocaleString } from '$lib/i18n/index.js';

export const prerender = true;

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		hrtStrings: {
			sectionLabel: await fetchLocaleString('ui.hrt.nav-section', lang),
			attribution: await fetchLocaleString('ui.hrt.attribution', lang),
		}
	};
}
