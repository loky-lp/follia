import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						h1: {
							marginTop: '1.125rem',
							marginBottom: '1.125rem',
						},
						p: {
							marginTop: '1.125rem',
							marginBottom: '1.125rem',
						},
					},
				},
				lg: {
					css: {
						h1: {
							marginTop: '1.25rem',
							marginBottom: '1.25rem',
						},
						p: {
							marginTop: '1.25rem',
							marginBottom: '1.25rem',
						},
					},
				},
			},
		},
	},

	plugins: [typography],
} satisfies Config
