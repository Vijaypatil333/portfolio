# Vijay Patil — Portfolio

React 18 + Vite 4 single-page portfolio (works on Node 16+).

```bash
npm install
npm run dev      # local dev server → http://localhost:5173
npm run build    # production build → dist/
```

## Editing content
All text lives in [`src/data.js`](src/data.js): profile, stats, experience, projects, skills, interests, education, achievements.

The downloadable resume is `public/Vijay_Patil_Resume.pdf`.

## Deploying
`dist/` is a static site. Deploy it on Vercel, Netlify or GitHub Pages (import the repo; build command `npm run build`, output `dist`).
