import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-b',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-guides',
  titleRef: 'ui.glp1.pages.path-b',
  contentSections: ['ui/glp1/path-guides/path-b/overview'],
  nav: { order: 2 },
});
