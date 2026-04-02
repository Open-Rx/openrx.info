import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/safety/overview',
];

export const GET = hrtServerGet(FRAGMENTS);
