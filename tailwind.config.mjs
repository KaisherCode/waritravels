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
        'castilloDesktop': "url('../img/20211230_123343.jpg')",
			  'eljaguar': "url('../img/20211230_124350.jpg')",
			  'llamas': "url('../img/20211230_131522.jpg')",
			  'conoc': "url('../img/conoc.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'guellaycancha': "url('../img/20211230_120404.jpg')",
			  'tauripampa': "url('../img/20211230_082132.jpg')",
			  'portadaDelSol': "url('../img/20220101_205208.jpg')",
			  'fiestaDelSol': "url('../img/fiestaDelSol.jpg')",
			  'LU': "url('../img/20211229_164228.jpg')",
			  'bañosDelInka': "url('../img/20211230_131358.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      }
    },
	},
	plugins: [],
}
