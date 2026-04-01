import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/glp1/sourcing/verified-vendors',
];

export const GET = hrtServerGet(FRAGMENTS);
