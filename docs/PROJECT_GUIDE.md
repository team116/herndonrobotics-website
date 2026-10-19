# Project guide

This guide describes how the existing site is put together and where common changes belong. It is intended as a map of the codebase, not a requirement to restructure every file.

## Rendering model

Astro renders `.astro` pages and components. The frontmatter section between the opening `---` markers runs at build/server time; the markup below it creates the page output. A page can import data, content collections, images, and shared components in frontmatter.

Small browser interactions use Alpine.js directives such as `x-data`, `x-show`, and `@click`. If adding a new interactive widget, keep its state close to the component that owns it. HTMX is included in the project stack, but don't assume it is already used for every dynamic feature.

## Shared UI

- `src/layouts/Layout.astro` is the common page wrapper. Use it for normal pages so metadata, navigation, global styles, and footer behavior stay consistent.
- `src/components/` contains reusable visual building blocks, including navigation, footer, image slider, portfolio cards, and team cards.
- `src/utils/` contains shared data/helpers. `url.ts` provides base-aware URL helpers; use it when a link or asset path must respect Astro's configured base URL.

## Content and assets

- `src/content.config.ts` defines the site's content collections and their schemas. When adding or renaming collection fields, update the schema and the content entries that use it together.
- Portfolio, mentor, student, and training pages obtain entries through Astro's content APIs. Keep the existing entry shape consistent; collection schemas are the contract between source content and page templates.
- Use `src/assets/` for assets imported or discovered by Astro. Files under `public/` are served directly at their public paths and are appropriate for PDFs and files referenced by stable URLs.
- Example files are templates, not necessarily live content. Check how a collection is configured before deleting or renaming them.

## Styling

Tailwind utility classes are used heavily in component markup. `src/styles/global.css` defines theme tokens, font imports, and base styles; `src/styles/md.css` styles rendered Markdown content. Prefer existing theme tokens such as `bg-background`, `text-foreground`, `border-accent`, and `text-primary` over hard-coded colors when practical.

## Adding a page

1. Create a `.astro` file under `src/pages/` at the path matching the desired URL.
2. Import `Layout` from `src/layouts/Layout.astro` and wrap the page in it.
3. Reuse existing components where they fit.
4. Use `withBase()` from `src/utils/url.ts` for manually constructed internal links that must work when the site is deployed under a base path.
5. Run `npm run build` and check the page in the local preview.

## Commenting standard

Comments should explain **why** a decision exists, what assumption is being made, or how a non-obvious section works. Avoid comments that simply restate a variable name or describe an obvious HTML element. Keep comments near the code they explain, and update/remove them when the behavior changes.
