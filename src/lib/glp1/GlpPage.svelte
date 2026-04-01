<script lang="ts">
	import { page } from '$app/state';
	import type { HrtNavGroup } from '$lib/hrt/HrtPage.svelte';

	let {
		title,
		sections,
		nav
	}: {
		title: string;
		sections: string[];
		nav: HrtNavGroup[];
	} = $props();

	const sectionLabel = $derived((page.data.glp1Strings?.sectionLabel as string) ?? 'GLP-1 Guide');
	const attribution = $derived((page.data.glp1Strings?.attribution as string) ?? '');
</script>

<div class="hrt-layout">
	<nav class="hrt-nav">
		<div class="hrt-nav-section-label">
			<a href="/glp-1" class="hrt-nav-section-link">{sectionLabel}</a>
		</div>
		{#each nav as group (group.label)}
			<details class="hrt-nav-group" open>
				<summary class="hrt-nav-group-label">{group.label}</summary>
				<ul class="hrt-nav-list">
					{#each group.items as item (item.label)}
						<li class="hrt-nav-item">
							<a href={item.href} class="hrt-nav-link">{item.label}</a>
						</li>
					{/each}
				</ul>
			</details>
		{/each}
		{#if attribution}
			<p class="hrt-nav-attribution">
				{@html attribution}
			</p>
		{/if}
	</nav>

	<main class="hrt-main">
		<h1 class="hrt-page-title">{title}</h1>
		{#each sections as section}
			<div class="hrt-content">
				{@html section}
			</div>
		{/each}
	</main>
</div>
