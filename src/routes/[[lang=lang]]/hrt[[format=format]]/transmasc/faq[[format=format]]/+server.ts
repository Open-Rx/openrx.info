import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transmasc/faq/content',
];

export const GET = hrtServerGet(FRAGMENTS);
