const colors = require('tailwindcss/colors');

// @ts-check

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 **/
const tailwindConfig = {
	// darkMode: false, // or 'media' or 'class'

	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			inherit: 'inherit',
			amber: colors.amber,
			black: colors.black,
			blue: colors.blue,
			red: colors.red,
			sky: colors.sky,
			slate: colors.slate, // ex. blueGray since v3.0
			cyan: colors.cyan,
			emerald: colors.emerald,
			fuchsia: colors.fuchsia,
			gray: colors.gray,
			green: colors.green,
			indigo: colors.indigo,
			lime: colors.lime,
			orange: colors.orange,
			pink: colors.pink,
			purple: colors.purple,
			rose: colors.rose,
			teal: colors.teal,
			neutral: colors.neutral, // ex. trueGray since v3.0
			violet: colors.violet,
			stone: colors.stone, // ex. warmGray since v3.0
			white: colors.white,
			yellow: colors.yellow,

			'muted': '#888',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

module.exports = tailwindConfig;
