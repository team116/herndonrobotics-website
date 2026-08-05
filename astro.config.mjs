// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: "Training Resources",
      disable404Route: true,
      favicon: '/logo.png',
      logo: {
        src: "./public/logo.png",
      },
    }),
    mdx(),
  ],
  site: "https://www.herndonrobotics.org/",
  base: "",
  redirects: {
    "/blog": {
      status: 302,
      destination: "https://team116.org/",
    },
  },
});
