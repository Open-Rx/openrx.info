import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transmasc-risks',
  primaryCategory: 'hrt',
  secondaryCategory: 'transmasc',
  titleRef: 'ui.hrt.pages.transmasc-risks',
  contentSections: ['ui/hrt/transmasc/risks/content'],
  nav: { order: 3 },
});
