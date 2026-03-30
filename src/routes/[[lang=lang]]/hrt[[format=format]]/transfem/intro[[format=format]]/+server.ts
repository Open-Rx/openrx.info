import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transfem/intro/what-is-hrt',
	'ui/hrt/transfem/intro/what-does-it-do',
];

export const GET = hrtServerGet(FRAGMENTS);
