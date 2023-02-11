/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			colors: {
				'primary-color': '#201850',
				'white-color': '#F5F5F5',
				'gray-color': '#F9F9F9',
				'icon-color': '#9C9A9A'
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
