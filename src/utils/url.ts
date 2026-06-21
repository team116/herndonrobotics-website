/**
 * Builds a URL relative to the site's base path.
 * Handles leading/trailing slashes so you never get double slashes.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/reponame/"
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

/**
 * Builds an absolute URL (base + path), for things like og:image
 * that need a full URL rather than a relative path.
 */
export function withSite(path: string): string {
  const site = import.meta.env.SITE ?? ''; // set via `site:` in astro.config
  return new URL(withBase(path), site).toString();
}