import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/reconstitution',
];

export const GET = hrtServerGet(FRAGMENTS);
