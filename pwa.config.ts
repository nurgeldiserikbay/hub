import type { DisplayOverride } from "vite-plugin-pwa"

const START_PATH = '.'
const SCOPE = ''
const START_URL = './index.html?fullscreen=true'

export default {
	injectRegister: 'auto' as const,
	registerType: 'autoUpdate' as const,
	workbox: {
		globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
		maximumFileSizeToCacheInBytes: 4000000,
	},
	manifest: {
		id: 'com.thelightcome.nurgeldiserikbaygithubio',
		name: 'nurgeldiserikbay.github.io',
		short_name: 'nurgeldiserikbay.github.io',
		description:
			'nurgeldiserikbay.github.io - Explore the portfolio of Serikbay Nurgeldi, a skilled Vue.js developer specializing in building dynamic, user-friendly web applications. Discover projects showcasing expertise in front-end development, innovative design, and seamless user experiences.',
		scope: SCOPE,
		start_url: START_URL,
		display: 'fullscreen' as const,
		orientation: 'portrait' as const,
		background_color: '#fff',
		lang: 'en',
		theme_color: '#fff',
		protocol_handlers: [],
		icons: [
			{
				src: START_PATH + '/icons/16.png',
				type: 'image/png',
				sizes: '16x16',
			},
			{
				src: START_PATH + '/icons/20.png',
				type: 'image/png',
				sizes: '20x20',
			},
			{
				src: START_PATH + '/icons/29.png',
				type: 'image/png',
				sizes: '29x29',
			},
			{
				src: START_PATH + '/icons/32.png',
				type: 'image/png',
				sizes: '32x32',
			},
			{
				src: START_PATH + '/icons/40.png',
				type: 'image/png',
				sizes: '40x40',
			},
			{
				src: START_PATH + '/icons/50.png',
				type: 'image/png',
				sizes: '50x50',
			},
			{
				src: START_PATH + '/icons/57.png',
				type: 'image/png',
				sizes: '57x57',
			},
			{
				src: START_PATH + '/icons/58.png',
				type: 'image/png',
				sizes: '58x58',
			},
			{
				src: START_PATH + '/icons/60.png',
				type: 'image/png',
				sizes: '60x60',
			},
			{
				src: START_PATH + '/icons/64.png',
				type: 'image/png',
				sizes: '64x64',
			},
			{
				src: START_PATH + '/icons/72.png',
				type: 'image/png',
				sizes: '72x72',
			},
			{
				src: START_PATH + '/icons/76.png',
				type: 'image/png',
				sizes: '76x76',
			},
			{
				src: START_PATH + '/icons/80.png',
				type: 'image/png',
				sizes: '80x80',
			},
			{
				src: START_PATH + '/icons/87.png',
				type: 'image/png',
				sizes: '87x87',
			},
			{
				src: START_PATH + '/icons/100.png',
				type: 'image/png',
				sizes: '100x100',
			},
			{
				src: START_PATH + '/icons/114.png',
				type: 'image/png',
				sizes: '114x114',
			},
			{
				src: START_PATH + '/icons/120.png',
				type: 'image/png',
				sizes: '120x120',
			},
			{
				src: START_PATH + '/icons/128.png',
				type: 'image/png',
				sizes: '128x128',
			},
			{
				src: START_PATH + '/icons/144.png',
				type: 'image/png',
				sizes: '144x144',
			},
			{
				src: START_PATH + '/icons/152.png',
				type: 'image/png',
				sizes: '152x152',
			},
			{
				src: START_PATH + '/icons/167.png',
				type: 'image/png',
				sizes: '167x167',
			},
			{
				src: START_PATH + '/icons/180.png',
				type: 'image/png',
				sizes: '180x180',
			},
			{
				src: START_PATH + '/icons/192.png',
				type: 'image/png',
				sizes: '192x192',
			},
			{
				src: START_PATH + '/icons/256.png',
				type: 'image/png',
				sizes: '256x256',
			},
			{
				src: START_PATH + '/icons/512.png',
				type: 'image/png',
				sizes: '512x512',
			},
			{
				src: START_PATH + '/icons/1024.png',
				type: 'image/png',
				sizes: '1024x1024',
			},
			{
				src: START_PATH + '/icons/android-launchericon-48-48.png',
				type: 'image/png',
				sizes: '48x48',
			},
			{
				src: START_PATH + '/icons/android-launchericon-72-72.png',
				type: 'image/png',
				sizes: '72x72',
			},
			{
				src: START_PATH + '/icons/android-launchericon-96-96.png',
				type: 'image/png',
				sizes: '96x96',
			},
			{
				src: START_PATH + '/icons/android-launchericon-144-144.png',
				type: 'image/png',
				sizes: '144x144',
			},
			{
				src: START_PATH + '/icons/android-launchericon-192-192.png',
				type: 'image/png',
				sizes: '192x192',
			},
			{
				src: START_PATH + '/icons/android-launchericon-512-512.png',
				type: 'image/png',
				sizes: '512x512',
			},
			{
				src: START_PATH + '/icons/LargeTile.scale-100.png',
				type: 'image/png',
				sizes: '310x310',
			},
			{
				src: START_PATH + '/icons/LargeTile.scale-125.png',
				type: 'image/png',
				sizes: '388x388',
			},
			{
				src: START_PATH + '/icons/LargeTile.scale-150.png',
				type: 'image/png',
				sizes: '465x465',
			},
			{
				src: START_PATH + '/icons/LargeTile.scale-200.png',
				type: 'image/png',
				sizes: '620x620',
			},
			{
				src: START_PATH + '/icons/LargeTile.scale-400.png',
				type: 'image/png',
				sizes: '1240x1240',
			},
			{
				src: START_PATH + '/icons/SmallTile.scale-100.png',
				type: 'image/png',
				sizes: '71x71',
			},
			{
				src: START_PATH + '/icons/SmallTile.scale-125.png',
				type: 'image/png',
				sizes: '89x89',
			},
			{
				src: START_PATH + '/icons/SmallTile.scale-150.png',
				type: 'image/png',
				sizes: '107x107',
			},
			{
				src: START_PATH + '/icons/SmallTile.scale-200.png',
				type: 'image/png',
				sizes: '142x142',
			},
			{
				src: START_PATH + '/icons/SmallTile.scale-400.png',
				type: 'image/png',
				sizes: '284x284',
			},
			{
				src: START_PATH + '/icons/SplashScreen.scale-100.png',
				type: 'image/png',
				sizes: '620x300',
			},
			{
				src: START_PATH + '/icons/SplashScreen.scale-125.png',
				type: 'image/png',
				sizes: '775x375',
			},
			{
				src: START_PATH + '/icons/SplashScreen.scale-150.png',
				type: 'image/png',
				sizes: '930x450',
			},
			{
				src: START_PATH + '/icons/SplashScreen.scale-200.png',
				type: 'image/png',
				sizes: '1240x600',
			},
			{
				src: START_PATH + '/icons/SplashScreen.scale-400.png',
				type: 'image/png',
				sizes: '2480x1200',
			},
			{
				src: START_PATH + '/icons/Square44x44Logo.scale-100.png',
				type: 'image/png',
				sizes: '44x44',
			},
			{
				src: START_PATH + '/icons/Square44x44Logo.scale-125.png',
				type: 'image/png',
				sizes: '55x55',
			},
			{
				src: START_PATH + '/icons/Square44x44Logo.scale-150.png',
				type: 'image/png',
				sizes: '66x66',
			},
			{
				src: START_PATH + '/icons/Square44x44Logo.scale-200.png',
				type: 'image/png',
				sizes: '88x88',
			},
			{
				src: START_PATH + '/icons/Square44x44Logo.scale-400.png',
				type: 'image/png',
				sizes: '176x176',
			},
			{
				src: START_PATH + '/icons/Square150x150Logo.scale-100.png',
				type: 'image/png',
				sizes: '150x150',
			},
			{
				src: START_PATH + '/icons/Square150x150Logo.scale-125.png',
				type: 'image/png',
				sizes: '188x188',
			},
			{
				src: START_PATH + '/icons/Square150x150Logo.scale-150.png',
				type: 'image/png',
				sizes: '225x225',
			},
			{
				src: START_PATH + '/icons/Square150x150Logo.scale-200.png',
				type: 'image/png',
				sizes: '300x300',
			},
			{
				src: START_PATH + '/icons/Square150x150Logo.scale-400.png',
				type: 'image/png',
				sizes: '600x600',
			},
			{
				src: START_PATH + '/icons/StoreLogo.scale-100.png',
				type: 'image/png',
				sizes: '50x50',
			},
			{
				src: START_PATH + '/icons/StoreLogo.scale-125.png',
				type: 'image/png',
				sizes: '63x63',
			},
			{
				src: START_PATH + '/icons/StoreLogo.scale-150.png',
				type: 'image/png',
				sizes: '75x75',
			},
			{
				src: START_PATH + '/icons/StoreLogo.scale-200.png',
				type: 'image/png',
				sizes: '100x100',
			},
			{
				src: START_PATH + '/icons/StoreLogo.scale-400.png',
				type: 'image/png',
				sizes: '200x200',
			},
			{
				src: START_PATH + '/icons/Wide310x150Logo.scale-100.png',
				type: 'image/png',
				sizes: '310x150',
			},
			{
				src: START_PATH + '/icons/Wide310x150Logo.scale-125.png',
				type: 'image/png',
				sizes: '388x188',
			},
			{
				src: START_PATH + '/icons/Wide310x150Logo.scale-150.png',
				type: 'image/png',
				sizes: '465x225',
			},
			{
				src: START_PATH + '/icons/Wide310x150Logo.scale-200.png',
				type: 'image/png',
				sizes: '620x300',
			},
			{
				src: START_PATH + '/icons/Wide310x150Logo.scale-400.png',
				type: 'image/png',
				sizes: '1240x600',
			},
		],
		display_override: ['window-controls-overlay'] as DisplayOverride[],
		screenshots: [
			{
				src: START_PATH + '/screenshots/narrow-1.png',
				type: 'image/png',
				sizes: '427x759',
				form_factor: 'narrow' as const,
			},
			{
				src: START_PATH + '/screenshots/narrow-2.png',
				type: 'image/png',
				sizes: '427x759',
				form_factor: 'narrow' as const,
			},
			{
				src: START_PATH + '/screenshots/narrow-3.png',
				type: 'image/png',
				sizes: '427x759',
				form_factor: 'narrow' as const,
			},
			{
				src: START_PATH + '/screenshots/narrow-4.png',
				type: 'image/png',
				sizes: '427x759',
				form_factor: 'narrow' as const,
			},
			{
				src: START_PATH + '/screenshots/narrow-5.png',
				type: 'image/png',
				sizes: '427x759',
				form_factor: 'narrow' as const,
			},
			{
				src: START_PATH + '/screenshots/narrow-6.png',
				type: 'image/png',
				sizes: '427x759',
				form_factor: 'narrow' as const,
			},
			{
				src: START_PATH + '/screenshots/wide-1.png',
				type: 'image/png',
				sizes: '960x600',
				form_factor: 'wide' as const,
			},
			{
				src: START_PATH + '/screenshots/wide-2.png',
				type: 'image/png',
				sizes: '960x600',
				form_factor: 'wide' as const,
			},
			{
				src: START_PATH + '/screenshots/wide-3.png',
				type: 'image/png',
				sizes: '960x600',
				form_factor: 'wide' as const,
			},
			{
				src: START_PATH + '/screenshots/wide-4.png',
				type: 'image/png',
				sizes: '960x600',
				form_factor: 'wide' as const,
			},
			{
				src: START_PATH + '/screenshots/wide-5.png',
				type: 'image/png',
				sizes: '960x600',
				form_factor: 'wide' as const,
			},
			{
				src: START_PATH + '/screenshots/wide-6.png',
				type: 'image/png',
				sizes: '960x600',
				form_factor: 'wide' as const,
			},
		],
	},
}
