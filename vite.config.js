import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000/'
    },
  },
})


