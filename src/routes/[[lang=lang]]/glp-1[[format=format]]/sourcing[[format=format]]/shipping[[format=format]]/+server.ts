import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/sourcing/shipping',
];

export const GET = hrtServerGet(FRAGMENTS);
