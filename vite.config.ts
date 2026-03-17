import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/'],
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: 'DOMContentLoaded',
      }),
    }),
  ],
})
