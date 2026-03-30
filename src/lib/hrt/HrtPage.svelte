<script lang="ts">
	import { page } from '$app/state';

	export type HrtNavItem = { label: string; href: string };
	export type HrtNavGroup = { label: string; items: HrtNavItem[] };

	let {
		title,
		sections,
		nav
	}: {
		title: string;
		sections: string[];
		nav: HrtNavGroup[];
	} = $props();

	const sectionLabel = $derived((page.data.hrtStrings?.sectionLabel as string) ?? 'HRT Directory');
	const attribution = $derived((page.data.hrtStrings?.attribution as string) ?? '');
</script>

<div class="hrt-layout">
	<nav class="hrt-nav">
		<div class="hrt-nav-section-label">
			<a href="/hrt" class="hrt-nav-section-link">{sectionLabel}</a>
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
