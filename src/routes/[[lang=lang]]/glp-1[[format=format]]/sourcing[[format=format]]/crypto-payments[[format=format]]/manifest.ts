import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-sourcing-crypto-payments',
  primaryCategory: 'glp1',
  secondaryCategory: 'sourcing',
  titleRef: 'ui.glp1.pages.sourcing-crypto-payments',
  contentSections: ['ui/guides/crypto-payments/overview'],
  nav: { order: 4 },
});
