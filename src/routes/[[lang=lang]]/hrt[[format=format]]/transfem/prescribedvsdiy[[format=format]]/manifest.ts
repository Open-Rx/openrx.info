import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-transfem-prescribedvsdiy',
  primaryCategory: 'hrt',
  secondaryCategory: 'transfem',
  titleRef: 'ui.hrt.pages.transfem-prescribedvsdiy',
  contentSections: [
    'ui/hrt/transfem/prescribedvsdiy/accessing-prescribed-hrt-vs-diy',
    'ui/hrt/transfem/prescribedvsdiy/homebrewed-vs-pharmaceutical-grade',
  ],
  nav: { order: 5 },
});
