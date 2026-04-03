import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transmasc-faq',
  primaryCategory: 'hrt',
  secondaryCategory: 'transmasc',
  titleRef: 'ui.hrt.pages.transmasc-faq',
  contentSections: ['ui/hrt/transmasc/faq/content'],
  nav: { order: 4 },
});
