# CI/CD + Hosting Guide

How this portfolio goes from your laptop to the internet, automatically.

```
 git push ──► GitHub ──► GitHub Actions ──────────────────────────────► Vercel ──► 🌍 live site
                          │ CI: npm ci → build → verify       │ CD: deploy
                          │ (fails? deploy never runs)        │ main → production
                                                              │ PR   → preview link
```

- **CI (Continuous Integration):** every change is installed and built on a clean machine, so broken code is caught before it ships.
- **CD (Continuous Deployment):** once CI passes, the site is deployed automatically. No manual uploads.

## Files involved

| File | Why it's needed |
|---|---|
| `.github/workflows/ci-cd.yml` | The pipeline itself. GitHub automatically runs any YAML file in this folder on push/PR. |
| `vercel.json` | Turns off Vercel's built-in auto-deploy so GitHub Actions is the **only** deployer (no double deploys). |
| `package-lock.json` | Locks exact dependency versions. `npm ci` in CI needs it to install the same versions as your machine. |
| `.gitignore` | Keeps `node_modules/` and `dist/` out of GitHub. CI rebuilds them fresh. |

---

## Step 1: Put the code on GitHub

1. Create an empty repo on GitHub (e.g. `portfolio`). Don't add a README.
2. In this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

The first push triggers the workflow. **Build** passes. **Deploy** fails until Vercel is connected. That's expected.

## Step 2: Create the Vercel project

1. Sign up at **vercel.com** with your GitHub account (free Hobby plan).
2. **Add New → Project →** import your `portfolio` repo → **Deploy**. Vercel auto-detects Vite.

## Step 3: Give GitHub Actions access to Vercel (secrets)

| Secret name | Where to find it |
|---|---|
| `VERCEL_TOKEN` | Vercel → **Account Settings → Tokens → Create** |
| `VERCEL_ORG_ID` | Vercel → **Account Settings → General → Vercel ID** (Team ID if using a team) |
| `VERCEL_PROJECT_ID` | Project → **Settings → General → Project ID** |

Add each in GitHub: repo → **Settings → Secrets and variables → Actions → New repository secret**.

> Secrets are encrypted and never appear in logs. Never commit tokens to the repo.

## Step 4: Watch the pipeline run

Repo → **Actions** tab → open the failed run → **Re-run all jobs**.
You'll see **Build & verify** ✅ → **Deploy to Vercel** ✅, and the live URL in the run summary.

## Step 5: The real team workflow (PR + preview)

```bash
git checkout -b update-interests
# edit src/data.js
git commit -am "Update interests"
git push -u origin update-interests
```

Open a **Pull Request** → the pipeline builds it and comments a **preview URL** → review → **Merge** → production updates.

**Protect main (optional):** Settings → Branches → rule for `main` → "Require status checks to pass" → select **Build & verify**.

## Step 6: Custom domain (optional, ≈ ₹800–1,200/year)

1. Buy one (Cloudflare Registrar, Namecheap, Hostinger…), e.g. `vijaypatil.dev`.
2. Vercel → project → **Settings → Domains → Add**.
3. At the registrar's DNS settings:

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

HTTPS is issued automatically. The pipeline doesn't change.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `npm ci` fails | Commit `package-lock.json`. It must match `package.json` (run `npm install` and commit). |
| Deploy: `Project not found` / credentials error | A secret is missing or misnamed (names are case-sensitive). |
| Site shows old version | Hard refresh (Ctrl+Shift+R). Check the change was merged to `main`. |
| Builds locally, fails in CI | CI is Linux + Node 20. File names are case-sensitive there. |

**Recommended:** upgrade local Node from 16 (end-of-life) to **Node 20 LTS** so your machine matches CI.
