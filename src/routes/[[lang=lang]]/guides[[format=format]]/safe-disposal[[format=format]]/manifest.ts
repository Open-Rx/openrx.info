import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'guides-safe-disposal',
  primaryCategory: 'guides',
  secondaryCategory: 'safety',
  titleRef: 'ui.guides.pages.safe-disposal',
  contentSections: ['ui/guides/safe-disposal'],
  nav: { order: 0 },
});
