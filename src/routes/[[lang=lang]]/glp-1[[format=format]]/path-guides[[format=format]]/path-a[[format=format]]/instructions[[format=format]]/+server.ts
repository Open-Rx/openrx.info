import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/path-guides/path-a/instructions',
];

export const GET = hrtServerGet(FRAGMENTS);
