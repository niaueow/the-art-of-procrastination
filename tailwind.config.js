/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				blue: "#BFD7ED",
				purple: "#5E4B89",
			},
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
		},
	},
	plugins: [],
};
