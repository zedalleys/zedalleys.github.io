import { useEffect } from 'react';

const SITE_TITLE = 'Learning Hub — Zed Alleys';

/**
 * Sets a per-route <title> and meta description. index.html ships one
 * generic pair for the whole SPA — every route sharing that title/summary
 * in a browser tab, a bookmark, or a share preview is the actual bug this
 * fixes. It does not solve search-engine indexing of individual routes
 * (this app is a HashRouter SPA with no server-rendered per-route HTML,
 * so crawlers still only ever see the one shell page) — that would need
 * path-based routing plus a prerendered sitemap, a bigger, separate change.
 */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} — Zed Alleys` : SITE_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content') ?? '';
    meta?.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      meta?.setAttribute('content', previousDescription);
    };
  }, [title, description]);
}
