# seminar-theme-ftsrg

Requires Node.js 22 or newer.

Run `npm install` first if you skipped dependency installation during setup
or are setting up a fresh checkout.

```sh
npm run preview
```

Edit `decks/index.deck.mdx` while the preview is open, and it updates as you
save. Run `npm run dev` to preview it in a browser instead.
Imports such as `@/MyComponent` resolve to `src/MyComponent`.

Edit `src/theme.ts` to customize the theme and fonts.

Run `npm run build` to create `dist/index.html`, a self-contained presentation
that you can open in a browser or share.
Toggle `selfContained` in `vite.config.ts` to change the build format.

Run `npm run present` to build the presentation and present it.

Run `npm run pdf` to build the presentation and save it as `dist/index.pdf`.


[Seminar documentation](https://seminar.run)
