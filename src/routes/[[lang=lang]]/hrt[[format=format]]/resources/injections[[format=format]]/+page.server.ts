import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml } from '$lib/i18n/render-md.js';
import { hrtNav } from '$lib/hrt/nav.js';

export const prerender = true;

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		lite: false,
		title: await fetchLocaleString('ui.hrt.pages.resources-injections', lang),
		nav: hrtNav(lang),
		sections: await Promise.all([
		fetchLocaleFragment('ui/hrt/resources/injections/for-intramuscular-injections', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/resources/injections/for-subcutaneous-injections', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/resources/injections/fixed-needle-syringes-for-subcutaneous-injection', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/resources/injections/fixed-needle-syringes-for-intramuscular-injection', lang).then(renderFragmentToHtml)
		])
	};
}

export type LoadData = Awaited<ReturnType<typeof load>>;
