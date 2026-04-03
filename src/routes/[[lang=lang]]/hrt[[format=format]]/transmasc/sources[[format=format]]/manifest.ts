import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transmasc-sources',
  primaryCategory: 'hrt',
  secondaryCategory: 'transmasc',
  titleRef: 'ui.hrt.pages.transmasc-sources',
  contentSections: ['ui/hrt/transmasc/sources/diy-sources'],
  tables: true,
  nav: { order: 6 },
});
