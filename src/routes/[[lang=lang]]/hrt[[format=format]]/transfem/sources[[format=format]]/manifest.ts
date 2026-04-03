import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transfem-sources',
  primaryCategory: 'hrt',
  secondaryCategory: 'transfem',
  titleRef: 'ui.hrt.pages.transfem-sources',
  contentSections: ['ui/hrt/transfem/sources/diy-sources', 'ui/hrt/transfem/sources/footnotes'],
  tables: true,
  nav: { order: 6 },
});
