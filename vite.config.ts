
import * as path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      "@store": path.resolve(__dirname, './src/store'),
      "@api": path.resolve(__dirname, './src/api'),
      "@utils": path.resolve(__dirname, './src/utils'),
    },
},
  plugins: [react()],
})
