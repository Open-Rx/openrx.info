import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-index',
  primaryCategory: 'glp1',
  secondaryCategory: 'resources',
  titleRef: 'ui.glp1.pages.index',
  contentSections: ['ui/glp1/index/intro', 'ui/glp1/index/how-to-navigate'],
});
