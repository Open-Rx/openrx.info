import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/resources/bloodtests/intro',
	'ui/hrt/resources/bloodtests/footnotes',
];

export const GET = hrtServerGet(FRAGMENTS);
