import { defineConfig } from 'astro/config'

import compressor from 'astro-compressor'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://Ivanricee.github.io',
  base: '/ivanrice',
  integrations: [compressor(), react()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
})
