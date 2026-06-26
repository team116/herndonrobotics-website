# The Website
This the code for the official website for Herndon Robotics. If you wish to visit the website, head to to [this website](https://herndonrobotics.org). It is a static website that is built with Astro + Tailwind, using HTMX and Alpine.js for interactivity (the "AHA stack").

## How to Run?
To run a local version of this website you will need:
- A PC
- The terminal
- npm
- git

Steps to run:
1. `git clone` the repo (or download it as a zip)
2. `cd` into the project
3. run `npm install` in order to download all of the dependencies
4. run `npm run dev` to spin up a local instance of the website
5. open the url specified in the output in the previous command(it should look like `http://localhost:4321/`) in a web browser of your choice
6. make a change to the code, save it, and the website will update automatically (this is called hot reloading btw)

## How to Develop
There is no specific style guide for the code, make sure to comment your code thoroughly, avoid duplicated code, and reuse existing components in `src/components` to ease the burden on yourself and keep the styling consistent.

A few stack-specific notes:
- Every page lives in `src/pages` as a `.astro` file — the file path *is* the URL, no router to configure (e.g. `src/pages/calendar.astro` → `/calendar`).
- Shared chrome (nav, fonts, theme script) lives in `src/layouts/Layout.astro`. Wrap new pages in it rather than copy-pasting the `<head>`.
- Reach for **Alpine.js** (`x-data`, `x-show`, etc.) for anything that only needs to react in the browser — toggles, dropdowns, form state. Each component registers its own `Alpine.data(...)` in its own `<script>` tag; you don't need to touch `Layout.astro` to add one.
- Reach for **HTMX** (`hx-get`, `hx-post`, etc.) for anything that needs to talk to a server and swap in real HTML — that pattern doesn't exist on the site yet, but it's the tool to use when it comes up (e.g. pulling a live meeting list onto the calendar page) instead of reaching for a client-side fetch + React-style re-render.
- Run `npm run build` before opening a PR if you touched routing or layouts — it'll catch broken pages that `npm run dev` won't always surface.

Here is some documentation for the tools we use:
- [Astro](https://docs.astro.build/en/getting-started/)
- [Tailwind](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Alpine.js](https://alpinejs.dev/start-here)
- [HTMX](https://htmx.org/docs/)

One important thing to note is to **NEVER PUSH TO MAIN**. We have a github workflow set up to automatically build the latest push to main. If you push to main with unfinished and broken code, it will break the website for everybody. Develop on a separate branch, then create a pull request when you think your code is ready to pushed to the official website.
