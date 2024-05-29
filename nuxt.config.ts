// https://nuxt.com/docs/api/configuration/nuxt-config
// import path from 'path'

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
	css: ['~/assets/styles/style.scss'],
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
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i',
				},
				{
					rel: 'stylesheet',
					href: '/assets/vendor/bootstrap/css/bootstrap.min.css',
				},
				{
					rel: 'stylesheet',
					href: '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
				},
				{
					rel: 'stylesheet',
					href: '/assets/vendor/boxicons/css/boxicons.min.css',
				},
				{
					rel: 'stylesheet',
					href: '/assets/vendor/glightbox/css/glightbox.min.css',
				},
				{
					rel: 'stylesheet',
					href: '/assets/vendor/remixicon/remixicon.css',
				},
				{
					rel: 'stylesheet',
					href: '/assets/vendor/swiper/swiper-bundle.min.css',
				},
			],
			script: [
				{
					src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1678560686932681',
					crossorigin: 'anonymous',
					async: true,
				},
				{ src: '/assets/vendor/purecounter/purecounter_vanilla.js' },
				{ src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js' },
				{ src: '/assets/vendor/glightbox/js/glightbox.min.js' },
				{ src: '/assets/vendor/isotope-layout/isotope.pkgd.min.js' },
				{ src: '/assets/vendor/swiper/swiper-bundle.min.js' },
				{ src: '/assets/vendor/waypoints/noframework.waypoints.js' },
				{ src: '/assets/vendor/php-email-form/validate.js' },
			],
		},
	},
})
