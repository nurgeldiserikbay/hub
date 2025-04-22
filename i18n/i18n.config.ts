import kk from './kk-KZ'
import en from './en-US'
import ru from './ru-RU'

export default defineI18nConfig(() => ({
	optimizeTranslationDirective: false,
	strictMessage: false,
	precompile: {
		strictMessage: false,
	},
	legacy: false,
	locale: 'en',
	lazy: true,
	strategy: 'prefix_except_default',
	messages: {
		kk,
		en,
		ru,
	},
	locales: [
		{
			code: 'en',
			iso: 'en-US',
			name: 'English',
			files: ['en-US'],
		},
		{
			code: 'ru',
			iso: 'ru-RU',
			name: 'Русский',
			files: ['ru-RU'],
		},
		{
			code: 'kk',
			iso: 'kk-KZ',
			name: 'Қазақша',
			files: ['kk-KZ'],
		},
	],
	detectBrowserLanguage: {
		useCookie: true,
		cookieKey: 'i18n_redirected',
		redirectOn: 'root',
	},
}))
