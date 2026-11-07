import { fileURLToPath } from 'node:url';
import seminar from '@seminar/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, defaultClientConditions } from 'vite';

export default defineConfig({
  root: 'decks',
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    conditions: ['@seminar/source', ...defaultClientConditions],
    dedupe: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      '@mui/material',
    ],
  },
  plugins: [
    seminar({
      selfContained: true,
      defaultTheme: '@/index.ts',
      plugins: [
        '@seminar/elements',
        '@seminar/plugin-mathjax',
        '@seminar/plugin-pele',
        '@seminar/plugin-shiki',
      ],
    }),
    react(),
  ],
  build: { outDir: '../dist', emptyOutDir: true },
});
