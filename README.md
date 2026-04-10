# faiz-udd.github.io
Portfolio

## GitHub Pages

This project is configured for static export to GitHub Pages.

1. Push your changes to the `main` branch.
2. GitHub Actions will build the app and publish the `out` folder.
3. The workflow is defined in `.github/workflows/deploy.yml`.

If you later deploy this repository under a subpath instead of a user site, you will need to add a `basePath` and `assetPrefix` in `next.config.ts`.
