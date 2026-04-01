import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/crypto-payments/monero',
];

export const GET = hrtServerGet(FRAGMENTS);
