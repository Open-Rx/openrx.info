import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-b-preparation',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-b',
  titleRef: 'ui.glp1.pages.path-b-preparation',
  contentSections: ['ui/glp1/path-guides/path-b/preparation'],
  nav: { order: 3 },
});
