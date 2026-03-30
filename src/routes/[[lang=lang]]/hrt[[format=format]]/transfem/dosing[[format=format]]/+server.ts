import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transfem/dosing/dosing',
	'ui/hrt/transfem/dosing/antiandrogen-estradiol-dosing',
	'ui/hrt/transfem/dosing/injection-monotherapy',
	'ui/hrt/transfem/dosing/injections-with-antiandrogens',
	'ui/hrt/transfem/dosing/blood-testing',
	'ui/hrt/transfem/dosing/footnotes',
];

export const GET = hrtServerGet(FRAGMENTS);
