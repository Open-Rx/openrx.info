import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-c',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-c',
  titleRef: 'ui.glp1.pages.path-c',
  contentSections: ['ui/glp1/path-guides/path-c/overview'],
  nav: { order: 0 },
});
