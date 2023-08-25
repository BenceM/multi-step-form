/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"nav-mobile-img": "url('./assets/images/bg-sidebar-mobile.svg')",
				"nav-desk-img": "url('./assets/images/bg-sidebar-desktop.svg')",
			},
		},
	},
	plugins: [],
};
