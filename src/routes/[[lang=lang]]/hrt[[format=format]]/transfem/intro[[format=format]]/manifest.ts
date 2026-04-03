import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transfem-intro',
  primaryCategory: 'hrt',
  secondaryCategory: 'transfem',
  titleRef: 'ui.hrt.pages.transfem-intro',
  contentSections: ['ui/hrt/transfem/intro/what-is-hrt', 'ui/hrt/transfem/intro/what-does-it-do'],
  tables: true,
  nav: { order: 0 },
});
