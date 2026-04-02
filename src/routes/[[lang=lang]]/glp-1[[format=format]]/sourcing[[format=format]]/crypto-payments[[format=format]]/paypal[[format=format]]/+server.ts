import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/crypto-payments/paypal',
];

export const GET = hrtServerGet(FRAGMENTS);
