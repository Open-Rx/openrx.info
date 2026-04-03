import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'guides-intramuscular-injection',
  primaryCategory: 'guides',
  secondaryCategory: 'injection-technique',
  titleRef: 'ui.guides.pages.intramuscular-injection',
  contentSections: ['ui/guides/intramuscular-injection'],
  nav: { order: 1 },
});
