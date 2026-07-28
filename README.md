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

### 1. Push the repo to GitHub

This project is git-initialized locally with commits already made. To publish it under **github.com/terekh373** (the account referenced throughout the site's content):

```sh
gh auth status                 # confirm you're logged in as terekh373, or:
gh auth login                  # switch accounts if the CLI is on a different one

gh repo create terekh373/anton-portfolio --public --source=. --remote=origin --push
```

No `gh` CLI? Do it via the GitHub UI instead: create a new empty repository at github.com/new under the `terekh373` account (don't initialize it with a README), then:

```sh
git remote add origin https://github.com/terekh373/anton-portfolio.git
git push -u origin main
```

### 2. Import the project in Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in (GitHub OAuth is the easiest — this is the one step that needs your own login, not something scriptable from here).
2. **Add New → Project → Import Git Repository**, authorize Vercel's GitHub App for the `terekh373/anton-portfolio` repo if prompted, then select it.
3. Vercel auto-detects the **Astro** framework preset: build command `npm run build`, output directory `dist`, install command `npm install`. Leave these as-is.
4. No environment variables are needed.
5. Click **Deploy**. First build takes ~1–2 minutes.

Every subsequent `git push` to `main` auto-deploys to production; pushes to other branches or PRs get their own preview URL.

### 3. Custom domain (once purchased)

1. Project → **Settings → Domains → Add**, enter the domain.
2. Follow Vercel's DNS instructions at your registrar (typically an `A` record to Vercel's IP or a `CNAME` for a subdomain).
3. Update the three places listed under **Domain** above, commit, and push — Vercel redeploys automatically with the real URLs baked in.

### 4. Post-deploy checklist

- [ ] `public/cv/Tereshchenko_Anton_Resume_EN.pdf` and `_UA.pdf` exist and download correctly from the live Contact section (not yet added as of this commit)
- [ ] `/` and `/ua/` both load, language switcher round-trips correctly
- [ ] `https://<domain>/sitemap-index.xml` and `/robots.txt` resolve
- [ ] Share the production URL in a chat app or paste it into a social-preview debugger to confirm the OG image renders (can't be checked from `localhost`, since crawlers need a public URL)
- [ ] Re-run Lighthouse against the **production URL**, not localhost — CDN caching and real TLS typically make this a bit faster, not slower, but confirm the 100s still hold
