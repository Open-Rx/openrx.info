import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-b-troubleshooting',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-b',
  titleRef: 'ui.glp1.pages.path-b-troubleshooting',
  contentSections: ['ui/glp1/path-guides/path-b/troubleshooting'],
  nav: { order: 6 },
});
