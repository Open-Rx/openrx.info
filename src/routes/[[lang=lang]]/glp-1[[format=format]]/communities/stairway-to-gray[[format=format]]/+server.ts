import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/communities/stairway-to-gray',
];

export const GET = hrtServerGet(FRAGMENTS);
