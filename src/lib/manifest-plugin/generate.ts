import type { Manifest, PrimaryCategory } from "./manifest-type";
import { writeFileSync } from "node:fs";
const gitIgnore = `+page.svelte
+page.server.ts
+server.ts`

function pageSvelte(manifest: Manifest) {
  return `
<script lang="ts">
  import type { PageData } from './+page.server';
  import Navigator from '$lib/components/Navigator.svelte';
  let { data }: { data: PageData } = $props();
</script>

<div class="content-layout">
  <Navigator current={"${manifest.id}"} nav={data.nav} />
  <main class="content-main">
    <h1 class="page-title">{data.locale["${manifest.titleRef}"]}</h1>
    
    {#each data.rendered as section (section.id)}
      <div class="page-content">
        {@html section.content}
      </div>
      
    {/each}
  </main>
</div>
`
}

function pageServer(manifest: Manifest, supportedLanugages: string[]) {
  return `
import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n'
import { renderFragmentToHtml } from '$lib/i18n/render-md'
import { nav as navData } from 'virtual:manifest-nav'
import type { NavData } from '$lib/manifest-plugin/generate'
import type { EntryGenerator } from './$types';

export const prerender = true;

export async function load({ parent }) {
  const { lang } = await parent();
  const categoryNav = (navData as NavData)["${manifest.primaryCategory}"] ?? []
  return {
    locale: {
      "${manifest.titleRef}": await fetchLocaleString("${manifest.titleRef}", lang),
    },
    nav: await Promise.all(
      categoryNav.map(async group => ({
        label: await fetchLocaleString(group.labelRef, lang),
        items: await Promise.all(
          group.items.map(async item => ({
            id: item.id,
            href: item.href,
            label: await fetchLocaleString(item.titleRef, lang),
          }))
        ),
      }))
    ),
    rendered: await [
      ${manifest.contentSections.map((section) => `
        {
          id: "${section}",
          content: await fetchLocaleFragment("${section}", lang).then(renderFragmentToHtml),
        }
      `).join(',\n')}
    ],
  }
}

export type LoadData = Awaited<ReturnType<typeof load>>;

export const entries: EntryGenerator = () => {
  return [
    ${JSON.stringify(
      supportedLanugages.flatMap((lang) => {
        return [{ lang }]
      }),
      null,
      2
    )}
  ];
}`
}

function server(manifest: Manifest, supportedLanugages: string[], generateTables: boolean) {
  return `
import { loadPage } from '$lib/api';
import { json } from '@sveltejs/kit';

export async function GET({ params }: { params: { lang?: string, format?: string } }) {
  let { lang, format } = params;
  lang = lang ?? 'en';
  format = format ?? '.md';
  const page = await loadPage(${JSON.stringify(manifest.contentSections)}, lang);
  
  if (format === ".md") {
    return new Response(page.markdown(), { headers: { 'Content-Type': 'text/markdown' } });
  }
  ${generateTables ? `
  if (format === ".json") {
    return json(page.json());
  }
  if (format === ".csv") {
    return new Response(page.csv(), { headers: { 'Content-Type': 'text/csv' } });
  }` : ``}
  return new Response('Not Found', { status: 404 });
}
  
export const entries: EntryGenerator = () => {
  return [
    ${JSON.stringify(
      supportedLanugages.flatMap((lang) => {
        const formats = generateTables ? ['.md', '.json', '.csv'] : ['.md'];
        return formats.map((format) => { return { lang, format } })
      }),
      null,
      2
    )}
  ];
}`
}


export function generateFromManifest(manifest: Manifest, route: string, options: { supportedLanugages: string[], root: string }) {
  const p = (point: string) => `${options.root}/src/routes/${route}/${point}`
  
  writeFileSync(p('+page.svelte'), pageSvelte(manifest));
  writeFileSync(p('+server.ts'), server(manifest, options.supportedLanugages, !!manifest.tables));
  writeFileSync(p('+page.server.ts'), pageServer(manifest, options.supportedLanugages));
  writeFileSync(p('.gitignore'), gitIgnore);
}

export type NavItem = { id: string; titleRef: string; href: string }
export type NavGroup = { secondary: string; labelRef: string; items: NavItem[] }
export type NavData = Partial<Record<PrimaryCategory, NavGroup[]>>

function routeToHref(route: string): string {
  return '/' + route
    .replace(/\[\[.*?\]\]/g, '')  // strip [[optional=params]]
    .replace(/\[.*?\]/g, '')      // strip [required=params]
    .replace(/\/+/g, '/')         // collapse double slashes
    .replace(/^\//, '')           // remove leading slash
    .replace(/\/$/, '')           // remove trailing slash
}

export function generateNavigation(pages: Record<string, Manifest>): NavData {
  const grouped: Partial<Record<PrimaryCategory, Record<string, Array<NavItem & { order: number }>>>> = {}

  for (const [route, manifest] of Object.entries(pages)) {
    const { primaryCategory: primary, secondaryCategory: secondary, id, titleRef, nav } = manifest

    grouped[primary] ??= {}
    grouped[primary]![secondary] ??= []
    grouped[primary]![secondary].push({
      id,
      titleRef,
      href: routeToHref(route),
      order: nav?.order ?? 999,
    })
  }

  return Object.fromEntries(
    Object.entries(grouped).map(([primary, secondaries]) => [
      primary,
      Object.entries(secondaries!).map(([secondary, items]) => ({
        secondary,
        labelRef: `ui.${primary}.nav.${secondary}`,
        items: items.sort((a, b) => a.order - b.order).map(({ order: _, ...item }) => item),
      }))
    ])
  ) as NavData
}