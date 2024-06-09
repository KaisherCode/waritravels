/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			Montserrat:['Montserrat','sans-serif'],
		  },
		  textColor:{
			'primary': '#CC2D4A',
			'secondary': '#8FA206',
			'terciary': '#61AEC9',
			'black': '#0B0A0B',
			'white': '#FFF',
		  },
		  backgroundColor: theme => ({
			...theme('colors'),
			'primary': '#CC2D4A',
			'secondary': '#8FA206',
			'terciary': '#61AEC9',
			'black': '#0B0A0B',
			'white': '#FFFFFF',
			'background-dark': '#191D1D',
			'background-light': '#F3FFFF',
		  }),
		extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg)",
        'sanFranciscoDesktop': "url('../img/20211230_123343.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      }
    },
	},
	plugins: [],
}
