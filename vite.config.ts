
import * as path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@api": path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@pages': path.resolve(__dirname, './src/pages'),
      "@store": path.resolve(__dirname, './src/store'),
      "@sharedTypes": path.resolve(__dirname, './src/sharedTypes'),
      "@utils": path.resolve(__dirname, './src/utils'),
    },
},
  plugins: [react()],
})
