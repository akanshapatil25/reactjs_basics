import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
   test: {
    environment: 'jsdom',
    globals: true, // allows you to use `describe`, `test`, etc. without imports
    setupFiles: './src/test/setup.js' // optional setup file
  },
})
