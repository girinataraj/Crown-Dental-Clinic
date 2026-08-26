import { useState, useEffect, useCallback } from 'react';

/* ================================================================
   Minimal hash router
   ----------------------------------------------------------------
   Hash-based on purpose: deep links such as
     https://…/#/treatments/dental-implants
   resolve on any static host (GitHub Pages, Netlify, Vercel, S3)
   with zero rewrite configuration.

   In-page anchors (#home, #contact …) never start with "#/" so they
   continue to behave as scroll targets, not routes.
   ================================================================ */

export type Route =
  | { name: 'home'; anchor?: string }
  | { name: 'treatment'; id: string };

export function parseHash(hash: string): Route {
  const h = hash.replace(/^#/, '');
  if (h.startsWith('/treatments/')) {
    const id = h.slice('/treatments/'.length).replace(/\/+$/, '');
    if (id) return { name: 'treatment', id };
  }
  return { name: 'home', anchor: h && !h.startsWith('/') ? h : undefined };
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(() =>
    parseHash(typeof window === 'undefined' ? '' : window.location.hash)
  );

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  /** Programmatic navigation — always lands the reader at the top. */
  const navigate = useCallback((to: string) => {
    if (window.location.hash === to) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      setRoute(parseHash(to));
      return;
    }
    window.location.hash = to;
  }, []);

  return { route, navigate };
}

export const treatmentHref = (id: string) => `#/treatments/${id}`;
