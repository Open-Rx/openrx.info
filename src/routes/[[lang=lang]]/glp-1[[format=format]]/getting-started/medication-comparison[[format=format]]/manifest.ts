import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-medication-comparison',
  primaryCategory: 'glp1',
  secondaryCategory: 'getting-started',
  titleRef: 'ui.glp1.pages.getting-started-medication-comparison',
  contentSections: ['ui/glp1/getting-started/medication-comparison'],
  tables: true,
  nav: { order: 1 },
});
