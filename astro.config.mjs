// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'http://cloud-frontend-jac.s3-website-us-east-1.amazonaws.com', // URL correcta del hosting estático
  output: 'static', // Obligatorio para S3
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api': {
          target: 'https://s8y1zdsx25.execute-api.us-east-1.amazonaws.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  },
});
