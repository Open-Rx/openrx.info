import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/index',
];

export const GET = hrtServerGet(FRAGMENTS);
