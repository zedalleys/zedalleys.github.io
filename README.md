# zedalleys.com

Personal portfolio site for Ziad Fteha (Product Designer). Eleventy builds
the HTML from `src/`; the output is committed at the repo root and served
by GitHub Pages at [zedalleys.com](https://zedalleys.com) (custom domain in
`CNAME`, `.nojekyll` so Pages serves the build as-is).

The **Learning Hub** — a separate React/Vite app under `_hub/`, built into
`learning-hub/` — is documented in [`_hub/README.md`](./_hub/README.md).

## Stack

- **[Eleventy](https://www.11ty.dev/) 3** — Nunjucks + Markdown templates,
  config in `eleventy.config.mjs`. Input `src/`, output the repo root.
- **[sharp](https://sharp.pixelplumbing.com/)** — `scripts/build-assets.mjs`
  generates responsive image variants, 1200×630 social cards, and app
  icons. Idempotent: a no-op once the files exist (`--force` to regenerate
  cards/icons).
- Vanilla CSS in `styles/`, vanilla JS in `scripts/` (no client framework).
- Deployed by GitHub Pages straight from `main`; CI (`.github/workflows/ci.yml`)
  gates every PR.

## Local development

```bash
npm install
npm run watch     # Eleventy dev server with live reload -> http://localhost:8080
npm run build     # scripts/build-assets.mjs + eleventy, writes HTML to the repo root
```

`npm run build` regenerates the committed HTML. **Commit the result** — CI
fails a PR whose generated `*.html` / `*.xml` / `journal/` output is stale
(`git diff` against the build). Generated images are not diff-gated (sharp
can encode PNGs a few bytes differently per platform).

### Checks (all run in CI)

```bash
npm run lint          # eslint on scripts/*.js
npm run format:check  # prettier on **/*.{css,js,mjs}   (npm run format to fix)
npm run validate      # html-validate on the generated HTML
```

CI also runs a [lychee](https://github.com/lycheeverse/lychee) internal
link check and a [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
pass (perf/a11y/best-practices/SEO; thresholds in `lighthouserc.json` are
`warn` until a baseline is confirmed, then flip to `error`).

## Adding content

- **Journal post** — a Markdown file in `src/journal/<slug>.md`. Frontmatter
  drives everything (`title`, `heading`, `lede`, `description`,
  `socialDescription`, `category`, `date`, and a `jsonld` BlogPosting
  block); see the existing post. It's picked up by the `post` collection,
  the `/blog.html` index, and `feed.xml` automatically.
- **Case study** — a Nunjucks file in `src/case-studies/<slug>.njk`. Shared
  settings (layout, `caseStudy` tag, `permalink: case-study-<slug>.html`)
  come from `src/case-studies/case-studies.json`; per-study frontmatter
  sets `order` (portfolio sort), copy, `ogImage`, and `jsonld`. Use the
  `{% figure %}` shortcode for images — drop the full-size `.jpg` in
  `assets/images/<slug>/` and `npm run assets` makes the responsive
  variants.
- **Nav / footer links** live in `src/_includes/partials/nav.njk` and
  `footer.njk`; site-wide data (name, URL, social profiles feeding
  `schema.org` `sameAs`) is in `src/_data/site.js`.

## Layout

```
src/                 Eleventy input
  _data/site.js      site-wide constants
  _includes/         base.njk layout, partials, post.njk
  case-studies/      one .njk per study + case-studies.json
  journal/           one .md per post + journal.json
  *.njk              top-level pages (index, about, portfolio, blog, contact…)
scripts/             build-assets.mjs + the site's client-side JS
styles/              hand-written CSS, one file per page + system.css
assets/              images, fonts, og cards, icons (variants are generated)
_hub/                Learning Hub app source (see _hub/README.md)
learning-hub/        committed Learning Hub build output
*.html feed.xml      committed Eleventy output — do not edit by hand
```
