import type { HrtNavGroup } from '$lib/hrt/HrtPage.svelte';

export function guidesNav(lang: string): HrtNavGroup[] {
	const base = lang && lang !== 'en' ? `/${lang}` : '';
	const p = (path: string) => `${base}/guides/${path}`;
	return [
		{
			label: 'Injection Technique',
			items: [
				{ label: 'Subcutaneous', href: p('subcutaneous-injection') },
				{ label: 'Intramuscular', href: p('intramuscular-injection') },
			]
		},
		{
			label: 'Reconstitution',
			items: [
				{ label: 'Mixing Guide', href: p('reconstitution') },
			]
		},
		{
			label: 'Safety',
			items: [
				{ label: 'Safe Disposal', href: p('safe-disposal') },
			]
		},
		{
			label: 'Payments',
			items: [
				{ label: 'Why Crypto?', href: p('crypto-payments') },
				{ label: '⭐ Monero (Recommended)', href: p('crypto-payments/monero') },
				{ label: 'Cash App', href: p('crypto-payments/cash-app') },
				{ label: 'PayPal', href: p('crypto-payments/paypal') },
				{ label: 'Coinbase', href: p('crypto-payments/coinbase') },
				{ label: 'Other Platforms', href: p('crypto-payments/other-platforms') },
				{ label: 'Sending Safely', href: p('crypto-payments/sending') },
			]
		},
	];
}
