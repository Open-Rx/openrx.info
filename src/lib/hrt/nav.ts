import type { HrtNavGroup } from './HrtPage.svelte';

export function hrtNav(lang: string): HrtNavGroup[] {
	const base = lang && lang !== 'en' ? `/${lang}` : '';
	const p = (path: string) => `${base}/hrt/${path}`;
	return [
		{
			label: 'Transfem Guide',
			items: [
				{ label: 'Introduction', href: p('transfem/intro') },
				{ label: 'Forms of Estrogen', href: p('transfem/forms') },
				{ label: 'Dosing', href: p('transfem/dosing') },
				{ label: 'Risks', href: p('transfem/risks') },
				{ label: 'Sources', href: p('transfem/sources') },
				{ label: 'FAQ', href: p('transfem/faq') },
				{ label: 'Prescribed vs DIY', href: p('transfem/prescribedvsdiy') }
			]
		},
		{
			label: 'Transmasc Guide',
			items: [
				{ label: 'Introduction', href: p('transmasc/intro') },
				{ label: 'Forms of Testosterone', href: p('transmasc/methods') },
				{ label: 'Dosing', href: p('transmasc/dosing') },
				{ label: 'Risks', href: p('transmasc/risks') },
				{ label: 'Sources', href: p('transmasc/sources') },
				{ label: 'FAQ', href: p('transmasc/faq') },
				{ label: 'Prescribed vs DIY', href: p('transmasc/prescribedvsdiy') }
			]
		},
		{
			label: 'Resources',
			items: [
				{ label: 'Informed Consent & Telehealth', href: p('resources/telehealth') },
				{ label: 'Blood Testing', href: p('resources/bloodtests') },
				{ label: 'Safe Injection Supplies', href: p('resources/injections') }
			]
		},
	];
}
