import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/crypto-payments/sending',
];

export const GET = hrtServerGet(FRAGMENTS);
