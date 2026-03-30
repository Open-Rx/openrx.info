import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml } from '$lib/i18n/render-md.js';
import { hrtNav } from '$lib/hrt/nav.js';

export const prerender = true;

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		lite: false,
		title: await fetchLocaleString('ui.hrt.pages.transfem-prescribedvsdiy', lang),
		nav: hrtNav(lang),
		sections: await Promise.all([
		fetchLocaleFragment('ui/hrt/transfem/prescribedvsdiy/accessing-prescribed-hrt-vs-diy', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transfem/prescribedvsdiy/homebrewed-vs-pharmaceutical-grade', lang).then(renderFragmentToHtml)
		])
	};
}

export type LoadData = Awaited<ReturnType<typeof load>>;
