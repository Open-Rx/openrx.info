import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml } from '$lib/i18n/render-md.js';
import { hrtNav } from '$lib/hrt/nav.js';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
  return [
    { format: '' },
  ];
};

export async function load({ parent }) {
	const { lang } = await parent();
	return {
		lite: false,
		title: await fetchLocaleString('ui.hrt.pages.transmasc-intro', lang),
		nav: hrtNav(lang),
		sections: await Promise.all([
		fetchLocaleFragment('ui/hrt/transmasc/intro/introduction-to-diy-hrt', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transmasc/intro/what-is-hrt', lang).then(renderFragmentToHtml),
		fetchLocaleFragment('ui/hrt/transmasc/intro/what-does-it-do', lang).then(renderFragmentToHtml)
		])
	};
}

export type LoadData = Awaited<ReturnType<typeof load>>;
