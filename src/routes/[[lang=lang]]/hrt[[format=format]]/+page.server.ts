import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml } from '$lib/i18n/render-md.js';
import { hrtNav } from '$lib/hrt/nav.js';
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
		title: await fetchLocaleString('ui.hrt.pages.index', lang),
		nav: hrtNav(lang),
		sections: await Promise.all([
  		fetchLocaleFragment('ui/hrt/index/intro', lang).then(renderFragmentToHtml),
  		fetchLocaleFragment('ui/hrt/index/find-information', lang).then(renderFragmentToHtml)
		])
	};
}

export type LoadData = Awaited<ReturnType<typeof load>>;
