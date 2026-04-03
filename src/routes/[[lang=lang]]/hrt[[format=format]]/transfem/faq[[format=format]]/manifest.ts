import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transfem-faq',
  primaryCategory: 'hrt',
  secondaryCategory: 'transfem',
  titleRef: 'ui.hrt.pages.transfem-faq',
  contentSections: ['ui/hrt/transfem/faq/content'],
  nav: { order: 4 },
});
