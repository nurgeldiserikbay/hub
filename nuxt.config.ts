// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

import pwaConfig from './pwa.config'

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@vite-pwa/nuxt'],
	css: ['~/assets/styles/style.scss'],
	pwa: pwaConfig,

	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],

	i18n: {
		vueI18n: '~/i18n/i18n.config.ts',
	},

	// nitro: {
	// 	output: {
	// 		publicDir: path.join(__dirname, './docs'),
	// 	},
	// },

	app: {
		pageTransition: { name: 'route-transition' },
		head: {
			title: 'nurgeldiserikbay.github.io - Personal Portfolio',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			base: {
				href: '/',
			},
			meta: [
				{
					name: 'description',
					content:
						'Explore the portfolio of Serikbay Nurgeldi, a skilled Vue.js developer specializing in building dynamic, user-friendly web applications. Discover projects showcasing expertise in front-end development, innovative design, and seamless user experiences.',
				},
				{
					name: 'keywords',
					content:
						'Vue developer, Vue.js, front-end developer, web developer, JavaScript, Vue.js portfolio, web applications, UI/UX design, front-end development, responsive design, HTML, CSS, JavaScript frameworks, single-page applications, Vue projects, Serikbay Nurgeldi',
				},
				{
					name: 'apple-mobile-web-app-capable',
					content: 'yes',
				},
				{
					name: 'mobile-web-app-capable',
					content: 'yes',
				},
			],
			link: [
				{
					rel: 'stylesheet',
					type: 'text/css',
					href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i',
				},
				{
					rel: 'stylesheet',
					type: 'text/css',
					href: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/bootstrap/css/bootstrap.min.css',
				},
				{
					rel: 'stylesheet',
					type: 'text/css',
					href: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/bootstrap-icons/bootstrap-icons.css',
				},
				{
					rel: 'stylesheet',
					type: 'text/css',
					href: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/boxicons/css/boxicons.min.css',
				},
				{
					rel: 'stylesheet',
					type: 'text/css',
					href: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/glightbox/css/glightbox.min.css',
				},
				{
					rel: 'stylesheet',
					type: 'text/css',
					href: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/remixicon/remixicon.css',
				},
				{
					rel: 'stylesheet',
					type: 'text/css',
					href: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/swiper/swiper-bundle.min.css',
				},
			],
			script: [
				{
					src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1678560686932681',
					crossorigin: 'anonymous',
					type: 'text/javascript',
					async: true,
				},
				{ type: 'text/javascript', src: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/purecounter/purecounter_vanilla.js' },
				{ type: 'text/javascript', src: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/bootstrap/js/bootstrap.bundle.min.js' },
				{ type: 'text/javascript', src: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/glightbox/js/glightbox.min.js' },
				{ type: 'text/javascript', src: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/isotope-layout/isotope.pkgd.min.js' },
				{ type: 'text/javascript', src: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/swiper/swiper-bundle.min.js' },
				{ type: 'text/javascript', src: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/waypoints/noframework.waypoints.js' },
				{ type: 'text/javascript', src: 'https://github.com/nurgeldiserikbay/hub/blob/main/public/assets/additionals/php-email-form/validate.js' },
			],
		},
	},
	compatibilityDate: '2025-04-22',
})
