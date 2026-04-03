import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-sourcing-crypto-paypal',
  primaryCategory: 'glp1',
  secondaryCategory: 'sourcing',
  titleRef: 'ui.glp1.pages.sourcing-crypto-paypal',
  contentSections: ['ui/guides/crypto-payments/paypal'],
});
