import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-safety-dosing',
  primaryCategory: 'glp1',
  secondaryCategory: 'safety',
  titleRef: 'ui.glp1.pages.safety-dosing',
  contentSections: ['ui/glp1/safety/dosing'],
  nav: { order: 2 },
});
