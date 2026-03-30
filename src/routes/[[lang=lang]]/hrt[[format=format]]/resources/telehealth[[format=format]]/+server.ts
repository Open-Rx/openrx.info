import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/resources/telehealth/what-is-informed-consent',
	'ui/hrt/resources/telehealth/what-are-telehealth-services',
	'ui/hrt/resources/telehealth/telehealth-providers',
	'ui/hrt/resources/telehealth/affordable-prescriptions-for-usa-residents',
];

export const GET = hrtServerGet(FRAGMENTS);
