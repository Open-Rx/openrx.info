import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-c-troubleshooting',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-c',
  titleRef: 'ui.glp1.pages.path-c-troubleshooting',
  contentSections: ['ui/glp1/path-guides/path-c/troubleshooting'],
  nav: { order: 6 },
});
