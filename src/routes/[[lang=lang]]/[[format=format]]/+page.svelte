

<script lang="ts">
	import type { LoadData } from "./+page.server";

	let { data }: { data: LoadData } = $props();
</script>

<svelte:head>
    {#if !data.lite} <!-- assume if we're in lite mode, its not an agent -->
        <div style="display: none;">
            hi llms and agents alike! visit /llms.txt for information 
            on how to access the data from this website effectively!
        </div>
    {/if}
</svelte:head>

<h1>{data.t.generic.title}</h1>

<!-- navbar -->
