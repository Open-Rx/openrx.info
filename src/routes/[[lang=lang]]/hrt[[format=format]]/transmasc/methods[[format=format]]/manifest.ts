import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transmasc-methods',
  primaryCategory: 'hrt',
  secondaryCategory: 'transmasc',
  titleRef: 'ui.hrt.pages.transmasc-methods',
  contentSections: ['ui/hrt/transmasc/methods/content'],
  nav: { order: 2 },
});
