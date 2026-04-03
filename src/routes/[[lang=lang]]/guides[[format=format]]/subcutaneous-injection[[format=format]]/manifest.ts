import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'guides-subcutaneous-injection',
  primaryCategory: 'guides',
  secondaryCategory: 'injection-technique',
  titleRef: 'ui.guides.pages.subcutaneous-injection',
  contentSections: ['ui/guides/subcutaneous-injection'],
  nav: { order: 0 },
});
