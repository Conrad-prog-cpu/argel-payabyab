# Argel Payabyab — Cut to Silence

React + Vite feature website, prepared for Vercel deployment.

## Local run

```bash
npm install
npm run dev
```

## Vercel settings

Use these settings in Vercel:

- Framework Preset: Vite
- Install Command: npm install --registry=https://registry.npmjs.org/ --production=false
- Build Command: npm run build
- Output Directory: dist
- Node.js Version: 20.x

## Important cleanup

This Vercel-ready version intentionally does not include:

- node_modules/
- dist/
- package-lock.json generated from a private/internal registry
- GitHub Pages workflows
- CNAME

If you regenerate `package-lock.json`, make sure it uses `https://registry.npmjs.org/`, not a private/internal registry.
