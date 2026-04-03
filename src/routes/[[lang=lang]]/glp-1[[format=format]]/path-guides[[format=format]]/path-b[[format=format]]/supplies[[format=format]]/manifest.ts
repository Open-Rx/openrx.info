import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-b-supplies',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-b',
  titleRef: 'ui.glp1.pages.path-b-supplies',
  contentSections: ['ui/glp1/path-guides/path-b/supplies'],
  nav: { order: 1 },
});
