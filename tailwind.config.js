/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	important: "#root",
	theme: {
		extend: {
			backgroundImage: {
				wave: "url('/src/assets/stacked-waves-haikei.svg')",
				"wave-dark": "url('/src/assets/stacked-waves-dark-haikei.svg')",
			},
		},
	},
	plugins: [],
};
