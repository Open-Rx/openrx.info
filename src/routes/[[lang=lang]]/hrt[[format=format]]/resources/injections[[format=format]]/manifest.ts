import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-resources-injections',
  primaryCategory: 'hrt',
  secondaryCategory: 'resources',
  titleRef: 'ui.hrt.pages.resources-injections',
  contentSections: [
    'ui/hrt/resources/injections/for-intramuscular-injections',
    'ui/hrt/resources/injections/for-subcutaneous-injections',
    'ui/hrt/resources/injections/fixed-needle-syringes-for-subcutaneous-injection',
    'ui/hrt/resources/injections/fixed-needle-syringes-for-intramuscular-injection',
  ],
  tables: true,
  nav: { order: 2 },
});
