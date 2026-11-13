import { useSyncExternalStore } from 'react';

// true when the visitor asked the OS/browser to reduce motion —
// automatic slide changes are then switched off (accessibility).
const QUERY = '(prefers-reduced-motion: reduce)';

const subscribe = (onChange) => {
  const mediaQueryList = window.matchMedia(QUERY);
  mediaQueryList.addEventListener('change', onChange);

  return () => mediaQueryList.removeEventListener('change', onChange);
};

export default function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
