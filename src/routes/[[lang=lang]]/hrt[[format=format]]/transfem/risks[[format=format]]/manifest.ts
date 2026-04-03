import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transfem-risks',
  primaryCategory: 'hrt',
  secondaryCategory: 'transfem',
  titleRef: 'ui.hrt.pages.transfem-risks',
  contentSections: ['ui/hrt/transfem/risks/content'],
  nav: { order: 3 },
});
