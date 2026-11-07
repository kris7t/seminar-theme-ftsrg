# seminar-theme-ftsrg

Seminar theme of the Critical Systems Research Group (FTSRG).

## Using the theme

Install the theme in a Seminar project from its git repository:

```sh
npm install git+https://github.com/kris7t/seminar-theme-ftsrg.git
```

Then select it for every deck in `vite.config.ts`:

```ts
seminar({ defaultTheme: 'seminar-theme-ftsrg' });
```

Or for a single deck in its frontmatter:

```yaml
theme: seminar-theme-ftsrg
```

## Developing the theme

Requires Node.js 22.22.2 or newer.

The development dependencies link to the Seminar packages in an adjacent
checkout of [Seminar](https://github.com/kris7t/seminar), so clone and build it
next to this repository first:

```sh
git clone https://github.com/kris7t/seminar.git ../seminar
(cd ../seminar && npm install && npm run build)
npm install
```

The theme is in `src/`, starting from `src/index.ts`. The demo presentation in
`decks/index.deck.mdx` uses the sources directly, so you can test changes with:

- `npm run preview` to preview the demo, which updates as you save,
- `npm run dev` to preview it in a browser instead,
- `npm run build` to build it into `dist/index.html`.

The package itself is the built `lib/`, which is committed so that the theme
can be installed from git. After changing the theme, run `npm run build:lib`
and commit `lib/` with the changes.

[Seminar documentation](https://seminar.run)
