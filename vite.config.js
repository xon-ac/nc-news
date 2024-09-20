import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to your backend
      '/api': {
        target: 'https://nc-news-lenc.onrender.com/api', // URL of your backend server
        changeOrigin: true,
        secure: false,  // set to true if you're using HTTPS on the backend
      }
    }
  }
})

