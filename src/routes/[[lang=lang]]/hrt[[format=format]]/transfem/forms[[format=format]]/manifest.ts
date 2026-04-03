import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transfem-forms',
  primaryCategory: 'hrt',
  secondaryCategory: 'transfem',
  titleRef: 'ui.hrt.pages.transfem-forms',
  contentSections: [
    'ui/hrt/transfem/forms/what-forms-of-estradiol-are-there',
    'ui/hrt/transfem/forms/what-are-the-different-types-of-antiandrogens',
    'ui/hrt/transfem/forms/footnotes',
  ],
  nav: { order: 2 },
});
