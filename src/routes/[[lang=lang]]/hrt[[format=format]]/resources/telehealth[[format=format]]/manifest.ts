import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-resources-telehealth',
  primaryCategory: 'hrt',
  secondaryCategory: 'resources',
  titleRef: 'ui.hrt.pages.resources-telehealth',
  contentSections: [
    'ui/hrt/resources/telehealth/what-is-informed-consent',
    'ui/hrt/resources/telehealth/what-are-telehealth-services',
    'ui/hrt/resources/telehealth/telehealth-providers',
    'ui/hrt/resources/telehealth/affordable-prescriptions-for-usa-residents',
  ],
  nav: { order: 0 },
});
