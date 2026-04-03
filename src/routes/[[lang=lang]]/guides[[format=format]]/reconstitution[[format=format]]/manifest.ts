import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'guides-reconstitution',
  primaryCategory: 'guides',
  secondaryCategory: 'reconstitution',
  titleRef: 'ui.guides.pages.reconstitution',
  contentSections: ['ui/guides/reconstitution'],
  tables: true,
  nav: { order: 0 },
});
