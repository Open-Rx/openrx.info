import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transmasc/risks/content',
];

export const GET = hrtServerGet(FRAGMENTS);
