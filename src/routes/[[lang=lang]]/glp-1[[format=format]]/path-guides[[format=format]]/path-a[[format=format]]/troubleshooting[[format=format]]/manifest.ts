import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-a-troubleshooting',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-a',
  titleRef: 'ui.glp1.pages.path-a-troubleshooting',
  contentSections: ['ui/glp1/path-guides/path-a/troubleshooting'],
  nav: { order: 4 },
});
