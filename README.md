# Anton Tereshchenko — Portfolio

Personal portfolio site. Astro 5 (static output) + Tailwind CSS v4, English (default) and Ukrainian (`/ua/`) via Astro's native i18n routing. Zero client-side JavaScript.

## Stack

- **Astro 5** — static site generation (`output: 'static'`)
- **Tailwind CSS v4** — via `@tailwindcss/vite`, tokens defined in `src/styles/global.css`
- **React** (`@astrojs/react`) — installed for future `client:visible` islands; none are used yet, so no framework JS ships today
- **Fonts** — IBM Plex Sans / IBM Plex Mono, self-hosted via `@fontsource` (no Google Fonts requests)
- **satori + @resvg/resvg-js** — generate the OG share image at build time (`src/pages/og/[locale].png.ts`)

## Project structure

```
src/
├── components/       Header, Hero, SelectedWork, Contact, CaseStudyBody, etc.
├── i18n/             en.ts / ua.ts dictionaries + dictionary.ts (shared type) + utils.ts (routing helpers)
├── layouts/          BaseLayout.astro (meta, OpenGraph, hreflang)
├── lib/              contact.ts (shared contact info), og-image.ts (OG image renderer)
├── pages/            index.astro (EN home), ua/index.astro (UA home), work/[slug].astro + ua/work/[slug].astro
│                     (case studies), og/[locale].png.ts, 404.astro
└── styles/           global.css (Tailwind theme tokens, @font-face rules)
public/
├── cv/               drop Tereshchenko_Anton_Resume_{EN,UA}.pdf here — linked from the Contact section
├── robots.txt
└── favicon.svg / favicon-32.png / apple-touch-icon.png
```

All page copy lives in `src/i18n/en.ts` and `src/i18n/ua.ts`, typed against `src/i18n/dictionary.ts`. Edit content there rather than in the `.astro` components.

## Commands

Run from the project root:

| Command             | Action                                                          |
| :------------------- | :--------------------------------------------------------------- |
| `npm install`         | Install dependencies                                              |
| `npm run dev`          | Start the dev server at `localhost:4321`                          |
| `npm run build`        | Type-check (`astro check`) and build the production site to `./dist/` |
| `npm run preview`      | Serve the production build locally, before deploying              |
| `npx astro check`      | Type-check only                                                   |

## Adding content

- **CV files**: place `Tereshchenko_Anton_Resume_EN.pdf` and `Tereshchenko_Anton_Resume_UA.pdf` in `public/cv/` — the links in the Hero and Contact sections already point there.
- **Case study screenshots**: each case study page (`/work/<slug>/`) has captioned placeholder slots in its Screenshots section (`src/components/CaseStudyBody.astro`). Drop images in `public/` and swap the placeholder `<div>` for an `<img>` with the same caption.
- **Domain**: the placeholder `anton-tereshchenko.dev` is hardcoded in three places — update all three before the real production deploy:
  - `astro.config.mjs` — the `SITE_URL` constant (drives canonical URLs, hreflang tags, the sitemap, and the OG image URLs)
  - `public/robots.txt` — the `Sitemap:` line
  - `src/pages/og/[locale].png.ts` — the `domain` field shown in the corner of the generated OG image

## Deployment (Vercel)

Static output, no adapter needed — `@astrojs/vercel` isn't installed and isn't required.

Full copy-paste walkthrough (GitHub push → Vercel import → custom domain → post-deploy checklist) is in **[DEPLOYMENT.md](./DEPLOYMENT.md)**. Quick version:

```sh
gh repo create terekh373/anton-portfolio --public --source=. --remote=origin --push
```

...then import the repo at [vercel.com/new](https://vercel.com/new) (Astro preset auto-detected, no env vars needed) and click **Deploy**. Every push to `main` redeploys automatically after that.
