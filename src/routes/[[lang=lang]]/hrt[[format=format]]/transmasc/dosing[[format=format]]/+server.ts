import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transmasc/dosing/dosing-gels',
	'ui/hrt/transmasc/dosing/dosing-injections',
	'ui/hrt/transmasc/dosing/blood-testing',
];

export const GET = hrtServerGet(FRAGMENTS);
