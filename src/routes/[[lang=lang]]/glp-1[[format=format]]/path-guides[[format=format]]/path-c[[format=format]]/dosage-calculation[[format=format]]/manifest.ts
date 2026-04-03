import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-c-dosage-calculation',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-c',
  titleRef: 'ui.glp1.pages.path-c-dosage-calculation',
  contentSections: ['ui/glp1/path-guides/path-c/dosage-calculation'],
  tables: true,
  nav: { order: 3 },
});
