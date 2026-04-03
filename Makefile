deps:
	cd svelte-kit && pnpm install
	cd svelte-kit/packages/kit && bun link
	bun install
	bun link @sveltejs/kit

clean:
	find src/routes -name 'manifest.ts' | while read f; do \
		dir=$$(dirname $$f); \
		rm -f "$$dir/+page.svelte" "$$dir/+page.server.ts" "$$dir/+server.ts"; \
	done