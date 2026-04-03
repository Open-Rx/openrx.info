import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'guides-crypto-payments',
  primaryCategory: 'guides',
  secondaryCategory: 'payments',
  titleRef: 'ui.guides.pages.crypto-payments',
  contentSections: ['ui/guides/crypto-payments/overview'],
  nav: { order: 0 },
});
