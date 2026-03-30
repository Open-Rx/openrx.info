import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transfem/sources/diy-sources',
	'ui/hrt/transfem/sources/footnotes',
];

export const GET = hrtServerGet(FRAGMENTS);
