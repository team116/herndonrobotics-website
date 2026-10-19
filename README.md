# Herndon Robotics Website

The official website for Herndon Robotics (Epsilon Delta, FRC Team 116 and FTC Team 519): <https://herndonrobotics.org>.

The site is a static website built with **Astro**, **Tailwind CSS**, **Alpine.js**, and **HTMX**. Astro handles pages and content at build time; Alpine.js provides small browser-side interactions. Keep changes focused and reuse existing components before introducing new dependencies.

## Requirements

- Node.js `>=22.12.0` (see `package.json`)
- npm
- Git (optional, if cloning the repository)

## Run locally

```bash
git clone https://github.com/team116/herndonrobotics-website.git
cd herndonrobotics-website
npm install
npm run dev
```

Open the local URL printed by Astro, usually <http://localhost:4321/>. The dev server refreshes the browser when files change.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Show Astro CLI options |

Run `npm run build` before submitting a change, especially after editing routes, content collections, layouts, or asset imports.

## Project map

```text
.
├── public/                 # Files copied to the site as-is (forms, logo, social icons)
├── src/
│   ├── assets/             # Images and source content used by Astro
│   │   ├── portfolio/      # Portfolio entries and related images
│   │   ├── sponsors/       # Sponsor logos
│   │   ├── team-members/   # Mentor and student source data/images
│   │   ├── slider/         # Homepage carousel images
│   │   └── training/       # Training source documents
│   ├── components/         # Reusable page sections and UI components
│   ├── content/            # Astro content collections and documentation content
│   ├── layouts/             # Shared page shell (head, navigation, footer, theme)
│   ├── pages/               # Route files; paths map to URLs
│   ├── styles/              # Global styles and Markdown content styles
│   ├── types/               # Shared TypeScript declarations
│   └── utils/               # Small shared helpers and data such as social links
├── docs/                    # Contributor and architecture notes
├── astro.config.mjs
├── package.json
└── README.md
```

Astro uses file-based routing: for example, `src/pages/about-us.astro` serves `/about-us`. Dynamic routes and nested directories follow Astro's routing conventions. See the [Astro routing guide](https://docs.astro.build/en/guides/routing/).

## Where to make changes

- **Page content/layout:** edit the relevant file under `src/pages/`.
- **Reusable UI:** check `src/components/` first. Shared site-wide structure belongs in `src/layouts/Layout.astro`.
- **Images and other imported assets:** use `src/assets/` when Astro should process the asset; use `public/` for files that need a stable URL and should be copied unchanged.
- **Team, portfolio, and training content:** inspect `src/content.config.ts` and the associated collection files before changing the data shape. Follow the schema and conventions already used by the collection.
- **Global design:** use `src/styles/global.css` and the relevant component classes. Tailwind utility classes are the main styling approach.
- **Shared helpers:** put genuinely reusable logic in `src/utils/`; avoid creating a helper for a one-off expression.

More detail is in [`docs/PROJECT_GUIDE.md`](docs/PROJECT_GUIDE.md).

## Development conventions

1. Prefer clear names and straightforward code over clever abstractions.
2. Add comments when they explain intent, constraints, or non-obvious behavior. Do not narrate every line.
3. Reuse existing components and styles when that keeps the site consistent.
4. Keep content/data separate from rendering when it makes updates easier for non-developers.
5. Avoid unrelated visual redesigns or dependency changes in maintenance pull requests.
6. Check responsive layouts and interactive states when changing navigation or page components.
7. Do not commit generated output (`dist/`) or installed dependencies (`node_modules/`).

## Branches and pull requests

**Do not push unfinished changes directly to `main`.** Work on a separate branch, test the change, and open a pull request for review. The GitHub Actions workflow builds the site from repository changes, so a broken build can affect deployment.

```bash
git switch -c docs/describe-your-change
# make and test your changes
npm run build
git add .
git commit -m "Describe the change"
git push -u origin HEAD
```

Open a pull request on GitHub and describe what changed, how it was tested, and any remaining limitations.

## Stack documentation

- [Astro](https://docs.astro.build/)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Alpine.js](https://alpinejs.dev/start-here)
- [HTMX](https://htmx.org/docs/)
