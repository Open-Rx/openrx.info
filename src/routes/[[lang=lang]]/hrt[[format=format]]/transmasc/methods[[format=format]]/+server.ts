import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transmasc/methods/content',
];

export const GET = hrtServerGet(FRAGMENTS);
