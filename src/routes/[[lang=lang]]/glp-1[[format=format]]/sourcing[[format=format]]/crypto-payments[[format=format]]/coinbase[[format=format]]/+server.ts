import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/crypto-payments/coinbase',
];

export const GET = hrtServerGet(FRAGMENTS);
