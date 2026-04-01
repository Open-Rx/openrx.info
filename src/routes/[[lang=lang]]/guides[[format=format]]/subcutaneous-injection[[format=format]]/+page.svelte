<script lang="ts">
	import GuidePage from '$lib/guides/GuidePage.svelte';
	import type {LoadData} from './+page.server';

	let {data}: {data: LoadData} = $props();
</script>

<GuidePage title={data.title} sections={data.sections} nav={data.nav} />
