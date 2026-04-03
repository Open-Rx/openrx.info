import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-getting-started-options-overview',
  primaryCategory: 'glp1',
  secondaryCategory: 'getting-started',
  titleRef: 'ui.glp1.pages.getting-started-options-overview',
  contentSections: ['ui/glp1/getting-started/options-overview'],
  tables: true,
  nav: { order: 0 },
});
