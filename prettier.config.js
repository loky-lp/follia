import { fileURLToPath } from 'node:url'

/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {import('prettier-plugin-svelte').PluginConfig} SvelteConfig */
/** @typedef {import('prettier-plugin-tailwindcss').PluginOptions} TailwindConfig */
/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig | SvelteConfig | TailwindConfig } */
const config = {
	tabWidth: 2,
	useTabs: true,
	endOfLine: 'lf',
	semi: false,
	singleQuote: true,
	printWidth: 100,
	trailingComma: 'all',
	bracketSpacing: true,

	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-svelte',
		'prettier-plugin-tailwindcss',
	],
	// tailwindConfig: fileURLToPath(new URL('./tailwind.config.ts', import.meta.url)),
	tailwindFunctions: ['cn', 'cva'],
	importOrder: [
		'<TYPES>',
		'^(svelte(.*)$)|^(svelte)',
		'<THIRD_PARTY_MODULES>',
		'',
		'<TYPES>^[.|..|~]',
		'^~/',
		'^[../]',
		'^[./]',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '4.4.0',
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
}

export default config
