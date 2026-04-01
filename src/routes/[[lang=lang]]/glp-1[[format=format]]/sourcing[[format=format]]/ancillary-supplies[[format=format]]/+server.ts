import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/sourcing/ancillary-supplies',
];

export const GET = hrtServerGet(FRAGMENTS);
