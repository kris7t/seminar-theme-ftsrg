// Builds the theme as a package in `lib/`, which decks can select with
// `theme: seminar-theme-ftsrg`. The demo deck in `decks/` uses the sources
// directly instead (see `vite.config.ts`).
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

const OUT_DIR = path.resolve('lib');
const ASSET = /\.(avif|png|jpe?g|webp|svg|css)$/;

/**
 * Keeps imports of images and style sheets, pointing to the files in
 * `assets/`, so that the Vite build of the deck processes them like its own
 * (e.g., inlines them and the fonts of the style sheets into self-contained
 * presentations).
 */
const externalAssets: Plugin = {
  name: 'external-assets',
  enforce: 'pre',
  resolveId(source, importer) {
    if (!ASSET.test(source) || importer === undefined) {
      return undefined;
    }
    // The output is a single module in `lib/`, so we make the import relative
    // to it.
    const file = path.resolve(path.dirname(importer), source);
    return { id: path.relative(OUT_DIR, file), external: true };
  },
};

export default defineConfig({
  plugins: [react(), externalAssets],
  build: {
    outDir: OUT_DIR,
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rolldownOptions: {
      // Leave packages, including style sheets like the fonts, to the Vite
      // build of the deck, which also deduplicates React, MUI, and Seminar.
      external: (id) =>
        !id.startsWith('.') && !path.isAbsolute(id) && !id.startsWith('\0'),
    },
  },
});
