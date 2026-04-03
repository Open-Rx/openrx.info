import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-sourcing-crypto-coinbase',
  primaryCategory: 'glp1',
  secondaryCategory: 'sourcing',
  titleRef: 'ui.glp1.pages.sourcing-crypto-coinbase',
  contentSections: ['ui/guides/crypto-payments/coinbase'],
});
