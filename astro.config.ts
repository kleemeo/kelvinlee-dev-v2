import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kelvinlee.dev/',
  vite: { ssr: { external: ['svgo'] } },
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
