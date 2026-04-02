import type { HrtNavGroup } from '$lib/hrt/HrtPage.svelte';

export function glp1Nav(lang: string): HrtNavGroup[] {
	const base = lang && lang !== 'en' ? `/${lang}` : '';
	const p = (path: string) => `${base}/glp-1/${path}`;
	return [
		{
			label: 'Getting Started',
			items: [
				{ label: 'Options Overview', href: p('getting-started/options-overview') },
				{ label: 'Medication Comparison', href: p('getting-started/medication-comparison') },
				{ label: 'Choosing Retatrutide', href: p('getting-started/choosing-retatrutide') },
			]
		},
		{
			label: 'Safety',
			items: [
				{ label: 'Overview', href: p('safety') },
				{ label: 'Risks & Side Effects', href: p('safety/risks') },
				{ label: 'Dosing Principles', href: p('safety/dosing') },
			]
		},
		{
			label: 'Path Guides',
			items: [
				{ label: 'Overview & Supplies', href: p('path-guides') },
				{ label: 'Path A: Ready-to-Use', href: p('path-guides/path-a') },
				{ label: 'Path B: Authentic Vial', href: p('path-guides/path-b') },
				{ label: 'Path C: DIY Powder', href: p('path-guides/path-c') },
			]
		},
		{
			label: 'Sourcing',
			items: [
				{ label: 'Overview', href: p('sourcing') },
				{ label: 'Verified Vendors', href: p('sourcing/verified-vendors') },
				{ label: 'Ancillary Supplies', href: p('sourcing/ancillary-supplies') },
				{ label: 'Shipping from China', href: p('sourcing/shipping') },
				{ label: 'Crypto Payments', href: p('sourcing/crypto-payments') },
			]
		},
		{
			label: 'Resources',
			items: [
				{ label: 'Dosing Guide', href: p('dosing-guide') },
			]
		},
		{
			label: 'Guides',
			items: [
				{ label: 'Subcutaneous Injection', href: `${base}/guides/subcutaneous-injection` },
				{ label: 'Reconstitution', href: `${base}/guides/reconstitution` },
				{ label: 'Safe Disposal', href: `${base}/guides/safe-disposal` },
				{ label: 'Crypto Payments', href: `${base}/guides/crypto-payments` },
			]
		},
	];
}
