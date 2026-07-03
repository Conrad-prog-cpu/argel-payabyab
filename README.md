# Cut to Silence — Argel Payabyab Story Website

A React + Vite multimedia feature website focused on Argel Payabyab’s story: public visibility, private silence, family expectations, masculinity, identity, and the hope of being fully seen at home.

## What was fixed

The previous GitHub Pages deployment was blank because the repository was deploying the raw Vite project instead of the built `dist` folder, and the Vite `base` path was incorrect.

Fixed items:

- Corrected `vite.config.js` to use `base: '/argel-payabyab/'`.
- Replaced the static GitHub Pages workflow with a real React/Vite build workflow.
- Removed the incorrect `.github/workflow` folder.
- Removed the old static workflow that uploaded the whole repository.
- Removed the unnecessary `CNAME` custom-domain file.
- Added `.gitignore` so `node_modules/` and `dist/` are not committed.

## Run locally

```bash
npm install
npm run dev
```

Vite will open the correct local path:

```text
http://127.0.0.1:5173/argel-payabyab/
```

## Test the production build locally

```bash
npm run build
npm run preview
```

Open:

```text
http://127.0.0.1:4173/argel-payabyab/
```

## Deploy to GitHub Pages

1. Push this project to your repository:

```text
https://github.com/Conrad-prog-cpu/argel-payabyab
```

2. In GitHub, open:

```text
Repository → Settings → Pages → Build and deployment → Source
```

3. Select:

```text
GitHub Actions
```

4. Go to:

```text
Repository → Actions
```

Wait until the deploy workflow has a green check.

Your website should load at:

```text
https://conrad-prog-cpu.github.io/argel-payabyab/
```

## Important Git cleanup command

If your repository already committed `node_modules`, `dist`, the old workflow, or `CNAME`, run this once before pushing:

```bash
git rm -r --cached --ignore-unmatch node_modules dist .github/workflow .github/workflows/static.yml CNAME
git add .
git commit -m "Fix GitHub Pages deployment"
git push
```

If the GitHub Pages settings still show a custom domain such as `argelpayabyab.io`, remove it unless you already configured the domain DNS.
