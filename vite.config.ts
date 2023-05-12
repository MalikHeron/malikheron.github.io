import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: { watch: { awaitWriteFinish: true } },
  base: `https://github.com/MalikHeron/Website-Portfolio-React/`,
  plugins: [react()],
});
