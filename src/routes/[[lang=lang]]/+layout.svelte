<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { resolve } from '$app/paths'
	import './main.css';

	let { children, data }: { children: Snippet<[]>; data: LayoutData } = $props();
	
	function p(path: string) {
		return resolve(`/${data.lang == 'en' ? '' : data.lang}${path}`)
	}
</script>

<svelte:head>
    
</svelte:head>

<header class="site-header">
	<a href={`/${data.lang}`} class="site-wordmark">OpenRx</a>
	<nav class="site-nav">
		<a href={p('/about')} class="site-nav-link">{data.t.nav.about}</a>
		<a href={p('/hrt')} class="site-nav-link">{data.t.nav.hrt}</a>
		<a href={p('/glp-1')} class="site-nav-link">{data.t.nav.glp1}</a>
		<a href={p('/guides')} class="site-nav-link">{data.t.nav.guides}</a>
		<!-- <a href={p('/other')} class="site-nav-link">{data.t.nav.other}</a> -->
	</nav>
</header>

<div class="site-body">
	{@render children()}
</div>
