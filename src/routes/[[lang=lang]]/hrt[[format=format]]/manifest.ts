import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-index',
  primaryCategory: 'hrt',
  secondaryCategory: 'transfem',
  titleRef: 'ui.hrt.pages.index',
  contentSections: ['ui/hrt/index/intro', 'ui/hrt/index/find-information'],
});
