import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transmasc-intro',
  primaryCategory: 'hrt',
  secondaryCategory: 'transmasc',
  titleRef: 'ui.hrt.pages.transmasc-intro',
  contentSections: [
    'ui/hrt/transmasc/intro/introduction-to-diy-hrt',
    'ui/hrt/transmasc/intro/what-is-hrt',
    'ui/hrt/transmasc/intro/what-does-it-do',
  ],
  nav: { order: 0 },
});
