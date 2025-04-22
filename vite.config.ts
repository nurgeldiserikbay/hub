import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import pwaConfig from './pwa.config'

export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     external: [
  //       "sharp"
  //     ]
  //   }
  // },
	plugins: [VitePWA(pwaConfig)],
})
