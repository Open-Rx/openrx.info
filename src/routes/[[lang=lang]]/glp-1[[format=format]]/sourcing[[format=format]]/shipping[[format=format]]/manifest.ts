import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-sourcing-shipping',
  primaryCategory: 'glp1',
  secondaryCategory: 'sourcing',
  titleRef: 'ui.glp1.pages.sourcing-shipping',
  contentSections: ['ui/glp1/sourcing/shipping'],
  nav: { order: 3 },
});
