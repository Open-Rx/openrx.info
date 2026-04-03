import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transfem-dosing',
  primaryCategory: 'hrt',
  secondaryCategory: 'transfem',
  titleRef: 'ui.hrt.pages.transfem-dosing',
  contentSections: [
    'ui/hrt/transfem/dosing/dosing',
    'ui/hrt/transfem/dosing/antiandrogen-estradiol-dosing',
    'ui/hrt/transfem/dosing/injection-monotherapy',
    'ui/hrt/transfem/dosing/injections-with-antiandrogens',
    'ui/hrt/transfem/dosing/blood-testing',
    'ui/hrt/transfem/dosing/footnotes',
  ],
  tables: true,
  nav: { order: 0 },
});
