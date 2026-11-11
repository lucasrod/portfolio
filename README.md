# Portfolio — Lucas Rodriguez

Static portfolio site built with Astro, Tailwind CSS and MDX, deployed on Vercel.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build into dist/
npm run preview   # serve dist/ locally
```

## How it is organised

```text
src/
├── content.config.ts      # schema for project case studies
├── content/projects/      # one .mdx file per project
├── components/            # Header, ProjectRow, ProjectPreview, AmesMap, StatusBadge…
├── layouts/               # BaseLayout (SEO, theme), CaseStudyLayout (case template)
├── pages/                 # /, /projects/, /projects/[slug]/, /es/projects/[slug]/, /about/, /cv/, /contact/
├── i18n/ui.ts             # interface strings in English and Spanish
├── data/site.ts           # name, links, education, tools (empty fields are hidden)
├── data/ames-summary.json # small summary for previews (with provenance)
└── styles/global.css      # colour tokens, type scale, case-study prose
public/
├── data/ames-sales.json   # data for the interactive figure (with provenance)
├── og.png, favicon.svg
tools/export_ames.py       # run by hand; never part of the build
```

## Adding a project

Create `src/content/projects/<slug>.mdx`. The frontmatter is validated by `src/content.config.ts`; the build fails if a field is missing or wrong. The page `/projects/<slug>/` is generated automatically, and the project appears in the catalogue, on the CV and, if `tier: featured`, on the home page.

Body sections follow the case template: Problem, Data, Approach, Results, Limitations, My contribution. They are numbered automatically.

Rules for content:

- Every number goes in `facts` with a `source`, or comes from a data file with provenance.
- `status: in-progress` requires a `pending` list saying what is missing.
- Private code: `repo.visibility: private` and no `url`. The site never links to private repos.

## Languages

English is the default (no prefix). A case study written only in Spanish uses `lang: es` and is published at `/es/projects/<slug>/` with a note. A translation of an existing case uses `translationOf: <slug>`; the two pages link to each other. Interface strings live in `src/i18n/ui.ts`.

## Quarto reports and analysis outputs

Analyses run in their own repositories, never in this build. To bring results in:

1. Render the Quarto report in the analysis repo and publish it there (for example on GitHub Pages), then set `reportUrl` in the project's frontmatter. Or copy the rendered HTML folder into `public/reports/<slug>/` and set `reportUrl: /reports/<slug>/`.
2. For figures or interactive data, export a small JSON file with a `provenance` block (repo, commit, file, date), like `tools/export_ames.py` does, and commit it here.

Vercel only runs `npm run build`. It needs no R or Python.

## Deploying on Vercel

1. Create an empty GitHub repo (for example `lucasrod/portfolio`) and push this folder.
2. In Vercel: Add New, Project, import the repo. The Astro preset is detected; `vercel.json` sets the build command and output directory.
3. Optional: set `SITE_URL` in the project's environment variables. Without it, the site uses Vercel's production domain for canonical URLs and the sitemap.
4. Every push to `main` deploys to production; every pull request gets a preview URL.

After the first deploy, fill in `linkedin`, `email` (only if you want it public), `cvPdf` and `sourceRepo` in `src/data/site.ts`.
