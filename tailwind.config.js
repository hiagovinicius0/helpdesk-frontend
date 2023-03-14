/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'primary-color': '#201850',
				'white-color': '#F5F5F5',
				'gray-color': '#F9F9F9',
				'icon-color': '#9C9A9A',
				'department-color': '#D9D9D9',
				'link-color': '#0D40F5',
				'background-gray-color': '#EFECEC',
				'background-yellow-color': '#EEE6A0',
				'border-input-color': '#DCD4D4',
				'white': '#ffffff',
				'white-background-color': '#FDF8F8',
				'gray-background-color': '#F1EFEF',
				'card-color': '#F7F3F3',
				'border-color': '#BFBBBB'
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
