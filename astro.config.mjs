import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server', // Usa 'static' si no usas funciones server-side
  adapter: netlify(),
  integrations: [tailwind()],
});
