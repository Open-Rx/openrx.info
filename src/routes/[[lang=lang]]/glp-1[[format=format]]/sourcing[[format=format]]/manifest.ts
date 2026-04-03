import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-sourcing',
  primaryCategory: 'glp1',
  secondaryCategory: 'sourcing',
  titleRef: 'ui.glp1.pages.sourcing',
  contentSections: ['ui/glp1/sourcing/overview'],
  nav: { order: 0 },
});
