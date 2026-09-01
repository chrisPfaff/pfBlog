import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react()],
  site: 'https://www.christopherpfaff.com',
  adapter: vercel(),
});
