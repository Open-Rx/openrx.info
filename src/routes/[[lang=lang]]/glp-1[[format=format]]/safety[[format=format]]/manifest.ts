import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-safety',
  primaryCategory: 'glp1',
  secondaryCategory: 'safety',
  titleRef: 'ui.glp1.pages.safety',
  contentSections: ['ui/glp1/safety/overview'],
  nav: { order: 0 },
});
