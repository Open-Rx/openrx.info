import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transfem/faq/content',
];

export const GET = hrtServerGet(FRAGMENTS);
