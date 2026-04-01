import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/safe-disposal',
];

export const GET = hrtServerGet(FRAGMENTS);
