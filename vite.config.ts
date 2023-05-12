import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: { watch: { awaitWriteFinish: true } },
  base: 'malikheron.github.io',
  plugins: [react()],
});
