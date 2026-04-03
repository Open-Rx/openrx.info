import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-safety-risks',
  primaryCategory: 'glp1',
  secondaryCategory: 'safety',
  titleRef: 'ui.glp1.pages.safety-risks',
  contentSections: ['ui/glp1/safety/risks'],
  nav: { order: 1 },
});
