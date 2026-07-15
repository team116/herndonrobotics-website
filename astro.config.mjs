// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  site: 'https://www.herndonrobotics.org/',
  base: '',
  redirects: {
    "/blog": {
      status: 302,
      destination: "https://team116.org/"
    },
  }
});
