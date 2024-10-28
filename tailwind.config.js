const defaultTheme = require('tailwindcss/defaultTheme')
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'DynaPuff': ['"Dynapuff"', ...defaultTheme.fontFamily.sans],
				'Titan': ['"Titan"', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				'one': '#C5CADB',
				'two': '#D6D6D6',
				'three': '#4E70F5',
				'four': '#4F66C4',
				'five': "#2B44A6",
			}
		}
	},

	plugins: [
		addDynamicIconSelectors(),
	],
};
