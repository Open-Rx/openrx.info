import { defineManifest } from '$lib/manifest-plugin';

export default defineManifest({
  id: 'glp1-path-c-reconstitution',
  primaryCategory: 'glp1',
  secondaryCategory: 'path-c',
  titleRef: 'ui.glp1.pages.path-c-reconstitution',
  contentSections: ['ui/guides/reconstitution'],
  tables: true,
  nav: { order: 2 },
});
