import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/path-guides/path-b/authenticity',
];

export const GET = hrtServerGet(FRAGMENTS);
