<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import './main.css';

	let { children, data }: { children: Snippet<[]>; data: LayoutData } = $props();
</script>

<svelte:head>
    
</svelte:head>

<header class="site-header">
	<a href="/" class="site-wordmark">OpenRx</a>
	<nav class="site-nav">
		<a href="/about" class="site-nav-link">{data.t.nav.about}</a>
		<a href="/hrt" class="site-nav-link">{data.t.nav.hrt}</a>
	</nav>
</header>

<div class="site-body">
	{@render children()}
</div>
