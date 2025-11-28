# EMS Website — Source Code

This repository contains the source code for the EMS website, a small multi-page marketing/information site built with React, TypeScript and Vite.

The site includes the following pages: `Home`, `About`, `Services`, `Business`, `Sustainability`, and `Contact`. It also contains a `SustainabilityChart` component used to display sustainability-related data.

## Tech stack

- **Framework:** React
- **Language:** TypeScript
- **Bundler / Dev Server:** Vite
- **UI / libs:** Framer Motion, Lucide icons, Recharts

## Quick start (local development)

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

3. Open the URL shown by Vite (usually `http://localhost:5173`) in your browser.

## Build & Preview

Build the production bundle:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Project structure (key files)

- `index.html` — app entry HTML
- `index.tsx`, `App.tsx` — React entry and app shell
- `vite.config.ts`, `tsconfig.json` — build and TypeScript config
- `components/` — shared UI components (e.g. `Layout.tsx`, `SustainabilityChart.tsx`)
- `pages/` — page components (`Home.tsx`, `About.tsx`, `Services.tsx`, `Sustainability.tsx`, `Business.tsx`, `Contact.tsx`)
- `public/image/` — static images

## Notes

- The project uses the scripts defined in `package.json`: `dev`, `build`, `preview`.
- If you see errors when running `npm run dev`, make sure you have a recent LTS version of Node.js installed and that dependencies installed successfully.

## Deployment

This is a static SPA that can be deployed to any static host (Netlify, Vercel, GitHub Pages, Azure Static Web Apps, etc.). Build with `npm run build` and follow your host's static site deployment instructions.

## Contributing / Contact

If you want to suggest changes or add content, open an issue or create a pull request. For quick local edits, edit the files under `pages/` and `components/` and test with the dev server.

---

_README updated to provide a clear explanation of the site, tech stack and how to run it locally._
