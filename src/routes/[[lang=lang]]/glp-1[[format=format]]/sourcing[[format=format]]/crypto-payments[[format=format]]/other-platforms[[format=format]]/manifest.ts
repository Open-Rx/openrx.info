import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-sourcing-crypto-other',
  primaryCategory: 'glp1',
  secondaryCategory: 'sourcing',
  titleRef: 'ui.glp1.pages.sourcing-crypto-other',
  contentSections: ['ui/guides/crypto-payments/other-platforms'],
});
