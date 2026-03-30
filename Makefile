deps:
	cd svelte-kit && pnpm install
	cd svelte-kit/packages/kit && bun link
	bun install
	bun link @sveltejs/kit