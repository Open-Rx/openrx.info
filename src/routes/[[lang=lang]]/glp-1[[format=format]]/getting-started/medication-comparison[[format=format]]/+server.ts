import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/getting-started/medication-comparison',
];

export const GET = hrtServerGet(FRAGMENTS);
