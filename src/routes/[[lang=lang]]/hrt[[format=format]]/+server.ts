import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/index/intro',
	'ui/hrt/index/find-information',
];

export const GET = hrtServerGet(FRAGMENTS);
