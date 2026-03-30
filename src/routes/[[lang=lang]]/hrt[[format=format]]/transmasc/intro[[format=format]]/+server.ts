import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transmasc/intro/introduction-to-diy-hrt',
	'ui/hrt/transmasc/intro/what-is-hrt',
	'ui/hrt/transmasc/intro/what-does-it-do',
];

export const GET = hrtServerGet(FRAGMENTS);
