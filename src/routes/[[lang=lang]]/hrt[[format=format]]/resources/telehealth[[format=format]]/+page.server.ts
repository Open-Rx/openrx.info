import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml } from '$lib/i18n/render-md.js';
import { hrtNav } from '$lib/hrt/nav.js';

export const prerender = true;

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		lite: false,
		title: await fetchLocaleString('ui.hrt.pages.resources-telehealth', lang),
		nav: hrtNav(lang),
		sections: await Promise.all([
		fetchLocaleFragment('ui/hrt/resources/telehealth/what-is-informed-consent', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/resources/telehealth/what-are-telehealth-services', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/resources/telehealth/telehealth-providers', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/resources/telehealth/affordable-prescriptions-for-usa-residents', lang).then(renderFragmentToHtml)
		])
	};
}

export type LoadData = Awaited<ReturnType<typeof load>>;
