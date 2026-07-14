import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // repo name — the site is served from https://<user>.github.io/ls-detailing/
  base: '/ls-detailing/',
  plugins: [react(), tailwindcss()],
})
