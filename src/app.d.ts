// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module 'virtual:manifest-nav' {
	import type { NavData } from '$lib/manifest-plugin/generate';
	export const nav: NavData;
}

export {};
