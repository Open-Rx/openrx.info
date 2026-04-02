import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/safety/dosing',
];

export const GET = hrtServerGet(FRAGMENTS);
