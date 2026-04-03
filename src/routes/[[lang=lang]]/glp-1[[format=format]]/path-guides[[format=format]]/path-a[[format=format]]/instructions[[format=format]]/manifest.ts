import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-a-instructions',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-a',
  titleRef: 'ui.glp1.pages.path-a-instructions',
  contentSections: ['ui/glp1/path-guides/path-a/instructions'],
  nav: { order: 2 },
});
