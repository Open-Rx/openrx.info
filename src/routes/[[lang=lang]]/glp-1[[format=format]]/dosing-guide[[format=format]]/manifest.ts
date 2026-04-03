import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-dosing-guide',
  primaryCategory: 'glp1',
  secondaryCategory: 'resources',
  titleRef: 'ui.glp1.pages.dosing-guide',
  contentSections: ['ui/glp1/dosing-guide'],
  tables: false,
  nav: { order: 0 },
});
