import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',  // ✅ Add this for GitHub Pages
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs'
  },
  server: {
    port: 5173,
    open: true,
  }
});
