import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.daire.my.id',
  integrations: [
    icon(),
    tailwind(),
    mdx(),
    sitemap(),
  ],
});
