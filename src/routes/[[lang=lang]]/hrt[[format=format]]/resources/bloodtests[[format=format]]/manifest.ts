import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'hrt-resources-bloodtests',
  primaryCategory: 'hrt',
  secondaryCategory: 'resources',
  titleRef: 'ui.hrt.pages.resources-bloodtests',
  contentSections: ['ui/hrt/resources/bloodtests/intro', 'ui/hrt/resources/bloodtests/footnotes'],
  nav: { order: 1 },
});
