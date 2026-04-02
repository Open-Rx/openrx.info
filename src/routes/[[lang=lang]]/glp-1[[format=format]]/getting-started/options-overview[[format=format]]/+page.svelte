<script lang="ts">
	import GlpPage from '$lib/glp1/GlpPage.svelte';
	import type {LoadData} from './+page.server';

	let {data}: {data: LoadData} = $props();
</script>

<GlpPage title={data.title} sections={data.sections} nav={data.nav} />
