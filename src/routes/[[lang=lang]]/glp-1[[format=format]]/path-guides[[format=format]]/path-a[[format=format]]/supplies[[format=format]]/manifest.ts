import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-a-supplies',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-a',
  titleRef: 'ui.glp1.pages.path-a-supplies',
  contentSections: ['ui/glp1/path-guides/path-a/supplies'],
  nav: { order: 1 },
});
