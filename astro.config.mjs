import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sihviarn.github.io',
  base: '/techromancy/', // <-- This is the critical line
  vite: {
    plugins: [tailwindcss()],
  },
});