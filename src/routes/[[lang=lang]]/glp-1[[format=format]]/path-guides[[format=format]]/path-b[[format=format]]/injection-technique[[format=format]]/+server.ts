import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/subcutaneous-injection',
];

export const GET = hrtServerGet(FRAGMENTS);
