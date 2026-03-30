<script lang="ts">
	import HrtPage from '$lib/hrt/HrtPage.svelte';
	import type {LoadData} from './+page.server';

	let {data}: {data: LoadData} = $props();
</script>

<HrtPage title={data.title} sections={data.sections} nav={data.nav} />
