<script lang="ts">
	import type { LoadData } from "./+page.server";

	let { data }: { data: LoadData } = $props();
    
</script>
<h1>{data.t.ui.about.title}</h1>
<h2>{data.t.ui.about.question.introduction}</h2>
{@html data.t.ui.about.introduction}
