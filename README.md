# nuuthei.github.io

Personal portfolio built with React + Vite, deployed to GitHub Pages at [www.noora.sh](https://www.noora.sh).

## Development

```sh
npm install
npm run dev      # start dev server
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Customizing

All content (name, bio, skills, projects, experience, links) lives in
[`src/data/profile.js`](src/data/profile.js). Components are in `src/components/`
and styles (including light/dark theme colors) in `src/styles.css`.

Static files such as a résumé PDF or images go in `public/`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages.

One-time setup: in the repository's **Settings → Pages**, set **Source** to
**GitHub Actions**. The custom domain is kept via `public/CNAME`.
