import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transfem/prescribedvsdiy/accessing-prescribed-hrt-vs-diy',
	'ui/hrt/transfem/prescribedvsdiy/homebrewed-vs-pharmaceutical-grade',
];

export const GET = hrtServerGet(FRAGMENTS);
