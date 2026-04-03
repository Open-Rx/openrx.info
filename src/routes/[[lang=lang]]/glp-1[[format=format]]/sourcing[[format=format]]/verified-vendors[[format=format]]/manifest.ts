import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-sourcing-verified-vendors',
  primaryCategory: 'glp1',
  secondaryCategory: 'sourcing',
  titleRef: 'ui.glp1.pages.sourcing-verified-vendors',
  contentSections: ['ui/glp1/sourcing/verified-vendors'],
  nav: { order: 1 },
});
