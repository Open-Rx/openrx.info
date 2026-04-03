import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { manifestPlugin } from './src/lib/manifest-plugin';

export default defineConfig({
	plugins: [
		manifestPlugin({ supportedLanguages: ['en', 'es'] }),
		tailwindcss(),
		sveltekit(),
	]
});
