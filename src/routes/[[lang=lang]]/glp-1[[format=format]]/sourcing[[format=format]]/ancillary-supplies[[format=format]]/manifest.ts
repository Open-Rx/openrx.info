import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-sourcing-ancillary-supplies',
  primaryCategory: 'glp1',
  secondaryCategory: 'sourcing',
  titleRef: 'ui.glp1.pages.sourcing-ancillary-supplies',
  contentSections: ['ui/glp1/sourcing/ancillary-supplies'],
  nav: { order: 2 },
});
