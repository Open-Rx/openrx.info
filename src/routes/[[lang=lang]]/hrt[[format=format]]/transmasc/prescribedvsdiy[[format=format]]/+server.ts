import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transmasc/prescribedvsdiy/content',
];

export const GET = hrtServerGet(FRAGMENTS);
