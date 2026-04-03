import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-b-storage',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-b',
  titleRef: 'ui.glp1.pages.path-b-storage',
  contentSections: ['ui/glp1/path-guides/path-b/storage'],
  nav: { order: 4 },
});
