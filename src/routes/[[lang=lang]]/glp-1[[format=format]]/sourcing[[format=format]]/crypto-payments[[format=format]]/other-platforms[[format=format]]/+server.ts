import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/crypto-payments/other-platforms',
];

export const GET = hrtServerGet(FRAGMENTS);
