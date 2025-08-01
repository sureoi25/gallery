import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: './postcss.config.cjs',
  },
  base: "/gallery/",
  build: {
    assetsDir: '.',
    outDir: 'dist',
  }
});