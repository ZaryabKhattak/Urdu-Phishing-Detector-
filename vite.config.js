import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/predict': {
        target: 'http://localhost:8000', // adjust to your backend port
        changeOrigin: true,
      },
    },
  },
})
