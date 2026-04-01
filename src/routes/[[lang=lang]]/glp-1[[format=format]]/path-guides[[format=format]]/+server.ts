import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/path-guides/overview',
];

export const GET = hrtServerGet(FRAGMENTS);
