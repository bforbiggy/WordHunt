const defaultTheme = require('tailwindcss/defaultTheme')
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'DynaPuff': ['"Dynapuff"', ...defaultTheme.fontFamily.sans],
				'GamjaFlower': ['"GamjaFlower"', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				'powderblue': '#BAE0E8',
				'silver': '#C3D2D5',
				'crystalblue': '#6EA9B5',
				'navy': "#4C6085",
			}
		}
	},

	plugins: [
		addDynamicIconSelectors(),
	],
};
