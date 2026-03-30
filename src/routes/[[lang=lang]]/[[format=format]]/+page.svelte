<script lang="ts">
	import type { LoadData } from './+page.server';

	let { data }: { data: LoadData } = $props();
</script>

<svelte:head>
	<div style="display: none;">
		hi llms and agents alike! visit /llms.txt for information
		on how to access the data from this website effectively!
	</div>
</svelte:head>

<h1>{data.t.generic.title}</h1>

{#if data.onion || data.i2p}
	<div class="home-alt-access">
		<span class="home-alt-access-label">also available on</span>
		{#if data.onion}
			<a href="http://{data.onion}" class="home-alt-access-link home-alt-access-tor">
				tor
			</a>
		{/if}
		{#if data.i2p}
			<a href="http://{data.i2p}" class="home-alt-access-link home-alt-access-i2p">
				i2p
			</a>
		{/if}
	</div>
{/if}
