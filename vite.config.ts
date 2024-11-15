import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
    // 支持文件扩展名自动补全
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  server: {
    host: '0.0.0.0',
    port: 80,
    strictPort: true,
    open: true,
    proxy: {
      // 可以在这里配置代理
    },
  },
});