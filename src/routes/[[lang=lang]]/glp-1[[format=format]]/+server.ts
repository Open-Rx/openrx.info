import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/index/intro',
	'ui/glp1/index/how-to-navigate',
];

export const GET = hrtServerGet(FRAGMENTS);
