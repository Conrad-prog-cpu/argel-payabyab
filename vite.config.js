import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repository at:
// https://conrad-prog-cpu.github.io/argel-payabyab/
// Vite must use only the repository folder as the base path, not the full URL.
export default defineConfig({
  plugins: [react()],
  base: '/argel-payabyab/'
});
