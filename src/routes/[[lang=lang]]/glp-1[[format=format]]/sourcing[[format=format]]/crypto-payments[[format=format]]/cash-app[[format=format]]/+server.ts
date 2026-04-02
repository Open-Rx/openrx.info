import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/crypto-payments/cash-app',
];

export const GET = hrtServerGet(FRAGMENTS);
