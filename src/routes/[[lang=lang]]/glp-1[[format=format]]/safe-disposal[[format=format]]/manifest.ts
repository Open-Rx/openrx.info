import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-safe-disposal',
  primaryCategory: 'glp1',
  secondaryCategory: 'safety',
  titleRef: 'ui.glp1.pages.safe-disposal',
  contentSections: ['ui/guides/safe-disposal'],
});
