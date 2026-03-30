import { hrtServerGet } from '$lib/hrt/server.js';

const FRAGMENTS = [
	'ui/hrt/transfem/forms/what-forms-of-estradiol-are-there',
	'ui/hrt/transfem/forms/what-are-the-different-types-of-antiandrogens',
	'ui/hrt/transfem/forms/footnotes',
];

export const GET = hrtServerGet(FRAGMENTS);
