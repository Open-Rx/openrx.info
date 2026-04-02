import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/crypto-payments/overview',
];

export const GET = hrtServerGet(FRAGMENTS);
