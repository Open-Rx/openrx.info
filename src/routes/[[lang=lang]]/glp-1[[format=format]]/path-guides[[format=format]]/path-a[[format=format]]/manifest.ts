import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-a',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-guides',
  titleRef: 'ui.glp1.pages.path-a',
  contentSections: ['ui/glp1/path-guides/path-a/overview'],
  nav: { order: 1 },
});
