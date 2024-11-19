import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


function resolve(dir: string) {
  return path.join(__dirname, '.', dir);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('src'), // 将 @ 映射到 src 目录
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
})
