import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'guides-crypto-payments-paypal',
  primaryCategory: 'guides',
  secondaryCategory: 'payments',
  titleRef: 'ui.guides.pages.crypto-payments-paypal',
  contentSections: ['ui/guides/crypto-payments/paypal'],
});
