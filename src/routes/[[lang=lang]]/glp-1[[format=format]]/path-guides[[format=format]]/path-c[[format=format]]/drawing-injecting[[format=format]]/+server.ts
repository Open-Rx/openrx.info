import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/path-guides/path-c/drawing-injecting',
];

export const GET = hrtServerGet(FRAGMENTS);
