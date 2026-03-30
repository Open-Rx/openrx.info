import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/resources/injections/for-intramuscular-injections',
	'ui/hrt/resources/injections/for-subcutaneous-injections',
	'ui/hrt/resources/injections/fixed-needle-syringes-for-subcutaneous-injection',
	'ui/hrt/resources/injections/fixed-needle-syringes-for-intramuscular-injection',
];

export const GET = hrtServerGet(FRAGMENTS);
