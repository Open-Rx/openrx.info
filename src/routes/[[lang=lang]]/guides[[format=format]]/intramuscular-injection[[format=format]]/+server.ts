import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/guides/intramuscular-injection',
];

export const GET = hrtServerGet(FRAGMENTS);
