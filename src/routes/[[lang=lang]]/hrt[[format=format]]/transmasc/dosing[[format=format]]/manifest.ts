import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transmasc-dosing',
  primaryCategory: 'hrt',
  secondaryCategory: 'transmasc',
  titleRef: 'ui.hrt.pages.transmasc-dosing',
  contentSections: [
    'ui/hrt/transmasc/dosing/dosing-gels',
    'ui/hrt/transmasc/dosing/dosing-injections',
    'ui/hrt/transmasc/dosing/blood-testing',
  ],
  tables: true,
  nav: { order: 1 },
});
