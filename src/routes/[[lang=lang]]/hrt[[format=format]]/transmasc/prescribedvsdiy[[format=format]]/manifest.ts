import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transmasc-prescribedvsdiy',
  primaryCategory: 'hrt',
  secondaryCategory: 'transmasc',
  titleRef: 'ui.hrt.pages.transmasc-prescribedvsdiy',
  contentSections: ['ui/hrt/transmasc/prescribedvsdiy/content'],
  nav: { order: 5 },
});
