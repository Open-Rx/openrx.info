import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/getting-started/options-overview',
];

export const GET = hrtServerGet(FRAGMENTS);
