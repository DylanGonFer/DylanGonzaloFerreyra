// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },
  site: 'https://dylangonfer.github.io/DylanGonzaloFerreyra/',
  base: '/DylanGonzaloFerreyra.github.io/', // Asegúrate de que coincida con el nombre del repositorio
  output: 'static',
  trailingSlash: 'always',
  // https://astro.build/config
  // https://astro.build/config#markdown
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  integrations: [react()]
});
