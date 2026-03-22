import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/First-diploying',
  base:process.env.VITE_BASE_PATH || '/First-diploying',
})
