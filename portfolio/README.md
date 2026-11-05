# Yuchen Wu — Personal Portfolio & Digital Lab

Bilingual editorial portfolio. Finance × Data × AI; sustainability as a personal value, not a narrow professional label. AI Lab contains only the proposed Accounting Quality Analyzer.

## Preview
Requires Node.js 22 or newer. No dependencies or installation needed.

```sh
node build.mjs
node verify.mjs
node serve.mjs
```

Open http://127.0.0.1:4173/ or /zh/. Use an HTTP server rather than opening HTML files directly: paths are root-relative for the existing GitHub Pages domain.

## Maintain
- src/data/content.json: bilingual experience and case-study data.
- src/render.mjs: shared layout and page copy.
- public/style.css: responsive design system.
- public/site.js: accessible menu and project filters.
- build.mjs: creates dist with 20 bilingual pages, a 404 and a legacy Chinese redirect.
- verify.mjs: verifies local assets, page links and experience anchors.

## Release
The live website is published from master / repository root using the existing GitHub Pages branch deployment. Generated files from portfolio/dist are checked in at the repository root, with .nojekyll to bypass the legacy Jekyll build. Legacy template source remains in Git history and in its original directories for rollback.

To update: edit portfolio source, run node build.mjs and node verify.mjs, then copy the contents of portfolio/dist to the repository root and commit both source and generated changes. Keep .nojekyll. The optional manual Actions deployment workflow remains available if the Pages source is later switched to GitHub Actions.

This implementation uses a dependency-free static generator with custom CSS, rather than the proposed Astro/Tailwind stack. It supports the current content and browser-local interactions with a minimal build. A future Astro migration can reuse the content data and visual assets. Future tools requiring private keys or a backend should be hosted separately and linked from Lab.

## Content notes
Content is based on the supplied My-Experience-zh.md; the original document and private phone number are not included. Client details and internal model artifacts are not published. Case illustrations are conceptual rather than measured charts. Project code was not supplied; no fabricated source-code or demo links are shown. Writing is omitted until articles are available. The Lab is a concept, not a working analyzer.

Portrait reused from the existing repository and optimized for the web. Google Fonts are optional enhancements; system font fallbacks are provided.
