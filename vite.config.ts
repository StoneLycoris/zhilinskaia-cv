import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  base: '/zhilinskaia-cv/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
