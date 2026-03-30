import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml } from '$lib/i18n/render-md.js';
import { hrtNav } from '$lib/hrt/nav.js';

export const prerender = true;

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		lite: false,
		title: await fetchLocaleString('ui.hrt.pages.transfem-dosing', lang),
		nav: hrtNav(lang),
		sections: await Promise.all([
		fetchLocaleFragment('ui/hrt/transfem/dosing/dosing', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transfem/dosing/antiandrogen-estradiol-dosing', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transfem/dosing/injection-monotherapy', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transfem/dosing/injections-with-antiandrogens', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transfem/dosing/blood-testing', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transfem/dosing/footnotes', lang).then(renderFragmentToHtml)
		])
	};
}

export type LoadData = Awaited<ReturnType<typeof load>>;
