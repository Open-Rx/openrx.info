import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/dosing-guide',
];

export const GET = hrtServerGet(FRAGMENTS);
