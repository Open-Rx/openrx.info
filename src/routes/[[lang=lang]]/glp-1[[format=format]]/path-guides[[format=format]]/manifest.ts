import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-guides',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-guides',
  titleRef: 'ui.glp1.pages.path-guides',
  contentSections: ['ui/glp1/path-guides/overview'],
  tables: true,
  nav: { order: 0 },
});
