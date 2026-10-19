# Contributing

1. Create a branch for the change; do not push unfinished work directly to `main`.
2. Keep the change focused. Avoid unrelated redesigns and dependency upgrades.
3. For new or changed content, check the relevant collection schema in `src/content.config.ts`.
4. For new pages, use `src/layouts/Layout.astro` and reuse existing components where appropriate.
5. Run `npm run build` before opening a pull request.
6. In the pull request, summarize the change and list the checks you ran. Mention anything that still needs review.

## Review checklist

- [ ] Existing routes and links still work.
- [ ] Layout checked at mobile and desktop widths.
- [ ] Interactive controls tested (keyboard and pointer where applicable).
- [ ] New assets and content are in the appropriate source folder.
- [ ] Comments explain intent or non-obvious logic rather than restating the code.
