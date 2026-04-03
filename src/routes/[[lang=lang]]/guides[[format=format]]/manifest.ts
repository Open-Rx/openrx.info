import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'guides-index',
  primaryCategory: 'guides',
  secondaryCategory: 'injection-technique',
  titleRef: 'ui.guides.pages.index',
  contentSections: ['ui/guides/index'],
});
