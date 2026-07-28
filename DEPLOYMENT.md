# Deployment guide

Step-by-step walkthrough for publishing this repo to GitHub and deploying it on Vercel. Every command block is copy-paste ready — run them from PowerShell, Git Bash, or CMD, all work the same for `git`/`gh`/`npm`/`curl`.

Everything below assumes you're in the project folder:

```sh
cd "C:\Users\User\Работа\portfolio"
```

---

## Part 1 — Push the repo to GitHub

### 1.1 Check you're logged into the right GitHub account

The portfolio's content links to `github.com/terekh373` everywhere (project repos, footer links), so the repo needs to live there too.

```sh
gh auth status
```

Look at the output. If it says `Logged in to github.com account terekh373`, skip to **1.2**.

If it shows a different account, log out and back in as the right one:

```sh
gh auth logout
gh auth login
```

This launches an interactive wizard — answer it like this:

```
? What account do you want to log into?                 GitHub.com
? What is your preferred protocol for Git operations?    HTTPS
? Authenticate Git with your GitHub credentials?         Yes
? How would you like to authenticate GitHub CLI?         Login with a web browser
```

It will print a one-time code and open your browser:

```
! First copy your one-time code: XXXX-XXXX
- Press Enter to open github.com in your browser...
```

Press Enter, paste the code on the GitHub page, sign in as `terekh373`, click **Authorize GitHub CLI**. The terminal will confirm:

```
✓ Authentication complete.
✓ Logged in as terekh373
```

### 1.2 Create the repo and push in one step

```sh
gh repo create terekh373/anton-portfolio --public --source=. --remote=origin --push
```

Expected output ends with:

```
✓ Created repository terekh373/anton-portfolio on GitHub
  https://github.com/terekh373/anton-portfolio
✓ Added remote https://github.com/terekh373/anton-portfolio.git
...
✓ Pushed commits to https://github.com/terekh373/anton-portfolio.git
```

Verify:

```sh
git remote -v
```

Should show `origin` pointing at `https://github.com/terekh373/anton-portfolio.git` for both fetch and push.

**No `gh` CLI available?** Do it manually instead:

1. Go to **[github.com/new](https://github.com/new)** while logged in as `terekh373`.
2. Repository name: `anton-portfolio`. Visibility: **Public**. Leave every "Initialize this repository with..." checkbox **unchecked** (no README, no .gitignore, no license — this repo already has them).
3. Click **Create repository**.
4. On the next page, copy the commands under **"…or push an existing repository from the command line"** — they'll look like this (already-correct example, but use whatever GitHub shows you):

```sh
git remote add origin https://github.com/terekh373/anton-portfolio.git
git branch -M main
git push -u origin main
```

---

## Part 2 — Deploy on Vercel

Vercel needs a one-time login through your browser — that part can't be scripted, but everything else can. Two ways to do this: the **dashboard** (recommended — sets up auto-deploy-on-push for free) or the **CLI**. Pick one.

### Option A — Dashboard (recommended: auto-deploys on every push)

1. Open **[vercel.com/new](https://vercel.com/new)** and sign in — click **Continue with GitHub**, authorize as `terekh373` if asked.
2. You'll land on **"Import Git Repository"**. If `anton-portfolio` isn't in the list, click **Adjust GitHub App Permissions** and grant Vercel access to it (or to all repos), then come back.
3. Find **`terekh373/anton-portfolio`** in the list and click **Import** next to it.
4. On the configure screen:
   - **Framework Preset**: should auto-detect as **Astro**. If it doesn't, select it from the dropdown.
   - **Build Command**: leave as the default (`npm run build` / `astro build`).
   - **Output Directory**: leave as the default (`dist`).
   - **Install Command**: leave as the default (`npm install`).
   - **Environment Variables**: none needed — leave empty.
5. Click **Deploy**.
6. Wait ~1–2 minutes. When it finishes you'll see a congratulations screen with a **Visit** button and a URL like `anton-portfolio-<random>.vercel.app` (or `anton-portfolio.vercel.app` if that name was free).

From now on, every `git push` to `main` redeploys production automatically, and every other branch/PR gets its own preview URL — no further action needed on your side.

### Option B — CLI (no auto-deploy setup; you deploy manually each time)

```sh
npm install -g vercel
vercel login
```

`vercel login` will ask for your email, then wait for you to click the confirmation link it emails you.

```sh
vercel link
```

Interactive prompts — answer like this:

```
? Set up "C:\Users\User\Работа\portfolio"?          Yes
? Which scope should contain your project?           <your account>
? Link to existing project?                           No
? What's your project's name?                         anton-portfolio
? In which directory is your code located?            ./
```

Then deploy:

```sh
vercel --prod
```

This builds and deploys straight to production and prints the live URL when done. Re-run `vercel --prod` after every change you want published — nothing auto-deploys with this option.

---

## Part 3 — Custom domain (once you've bought one)

1. In the Vercel dashboard: your project → **Settings → Domains → Add**, type the domain, click **Add**.
2. Vercel shows the exact DNS record to create (usually an `A` record pointing at `76.76.21.21`, or a `CNAME` for a subdomain pointing at `cname.vercel-dns.com`). Add that record at your domain registrar (Namecheap, Cloudflare, whoever you bought it from).
3. Wait for DNS to propagate (a few minutes to a few hours) — Vercel's dashboard shows a green checkmark once it's verified and HTTPS is issued automatically.
4. Update the placeholder domain in the code — it's hardcoded in exactly three places:

   ```sh
   grep -rn "anton-tereshchenko.dev" astro.config.mjs public/robots.txt src/pages/og
   ```

   Edit each match to the real domain:
   - `astro.config.mjs` → the `SITE_URL` constant on line 10
   - `public/robots.txt` → the `Sitemap:` line
   - `src/pages/og/[locale].png.ts` → the `domain:` field

5. Commit and push:

   ```sh
   git add astro.config.mjs public/robots.txt "src/pages/og/[locale].png.ts"
   git commit -m "Set production domain"
   git push
   ```

   (Option A auto-redeploys; Option B needs `vercel --prod` again.)

---

## Part 4 — Post-deploy checklist

Replace `<domain>` below with your actual Vercel URL (`anton-portfolio.vercel.app`) or custom domain once it's live.

```sh
curl -I https://<domain>/
curl -I https://<domain>/ua/
curl -s https://<domain>/robots.txt
curl -s https://<domain>/sitemap-index.xml
```

All four should return `200`/valid content, not `404`.

Then, by hand:

- [ ] Add `public/cv/Tereshchenko_Anton_Resume_EN.pdf` and `_UA.pdf` if you haven't yet — the Hero and Contact links point there but the files aren't in this repo. Commit + push after adding them.
- [ ] Open the live site, click through the language switcher both directions.
- [ ] Paste the production URL into a social-preview checker (e.g. paste it into a Slack/Discord message-not-sent, or use a dedicated OG-preview debugger site) to confirm the generated share image shows up — this can't be verified from `localhost`, crawlers need a public URL.
- [ ] Run Lighthouse against the **live URL**, not localhost:

  ```sh
  npx lighthouse https://<domain>/ --view
  ```

  (`--view` opens the HTML report in your browser automatically.)
