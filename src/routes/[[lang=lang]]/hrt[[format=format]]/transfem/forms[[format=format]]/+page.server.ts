import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml } from '$lib/i18n/render-md.js';
import { hrtNav } from '$lib/hrt/nav.js';

export const prerender = true;

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		lite: false,
		title: await fetchLocaleString('ui.hrt.pages.transfem-forms', lang),
		nav: hrtNav(lang),
		sections: await Promise.all([
		fetchLocaleFragment('ui/hrt/transfem/forms/what-forms-of-estradiol-are-there', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transfem/forms/what-are-the-different-types-of-antiandrogens', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transfem/forms/footnotes', lang).then(renderFragmentToHtml)
		])
	};
}

export type LoadData = Awaited<ReturnType<typeof load>>;
