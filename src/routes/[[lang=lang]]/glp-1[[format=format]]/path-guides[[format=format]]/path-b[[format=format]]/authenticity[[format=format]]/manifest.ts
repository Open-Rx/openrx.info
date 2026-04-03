import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-b-authenticity',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-b',
  titleRef: 'ui.glp1.pages.path-b-authenticity',
  contentSections: ['ui/glp1/path-guides/path-b/authenticity'],
  nav: { order: 2 },
});
