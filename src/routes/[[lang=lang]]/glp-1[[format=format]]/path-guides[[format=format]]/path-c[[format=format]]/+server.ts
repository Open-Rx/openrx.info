import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/path-guides/path-c/overview',
];

export const GET = hrtServerGet(FRAGMENTS);
