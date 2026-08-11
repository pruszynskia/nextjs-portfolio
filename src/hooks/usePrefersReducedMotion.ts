import { useSyncExternalStore } from "react";

/*
  SSR-safe replacement for framer-motion's own `useReducedMotion` — that hook
  reads `window.matchMedia` directly on the client's first render (before any
  effect), which differs from the server's render and triggers exactly the
  hydration mismatch React's own warning calls out. `useSyncExternalStore`
  guarantees the client's first render uses `getServerSnapshot` too, so it
  can never disagree with the server — then syncs to the real value on mount.
*/
function subscribe(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
