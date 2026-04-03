import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-b-injection-technique',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-b',
  titleRef: 'ui.glp1.pages.path-b-injection-technique',
  contentSections: ['ui/guides/subcutaneous-injection'],
  nav: { order: 5 },
});
