import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transfem/risks/content',
];

export const GET = hrtServerGet(FRAGMENTS);
