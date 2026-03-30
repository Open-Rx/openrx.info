import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transmasc/sources/diy-sources',
];

export const GET = hrtServerGet(FRAGMENTS);
