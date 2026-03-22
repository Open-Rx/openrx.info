<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import liteCss from '$lib/assets/main.lite.css?url';
	import fullCss from '$lib/assets/main.full.css?url';
	import type { Snippet } from 'svelte';

	let { children, data }: { children: Snippet<[]>; data: { lite: boolean } } = $props();
	
</script>

<svelte:head>
	{#if data.lite}
	    <!-- no favicon, small css -->
		<link rel="stylesheet" href={liteCss} />
	{:else}
	    <!-- yes favicon, full css -->
	    <link rel="icon" href={favicon} />
		<link rel="stylesheet" href={fullCss} />
	{/if} 
</svelte:head>


{@render children()}
