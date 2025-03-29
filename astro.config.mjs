// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },
  site: 'https://dylangonfer.github.io',
  base: '/DylanGonzaloFerreyra.github.io/', // Asegúrate de que coincida con el nombre del repositorio

  integrations: [react()]
});