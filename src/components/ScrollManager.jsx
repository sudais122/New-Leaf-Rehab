import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Scroll position per history entry, so Back/Forward behaves like the original multi-page site.
const positions = new Map();

// The target page may still be laying out (images loading), so retry for a few frames.
function restoreScroll(top) {
  let tries = 0;
  const step = () => {
    window.scrollTo({ top, left: 0, behavior: 'instant' });
    if (Math.abs(window.scrollY - top) > 1 && tries++ < 30) requestAnimationFrame(step);
  };
  step();
}

/**
 * Replaces what the browser did for free on the old multi-page site:
 * - new page            -> jump to top
 * - /page#anchor        -> scroll to the anchor (smooth when already on that page, as before)
 * - Back / Forward      -> restore the previous scroll position
 */
export default function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType();
  const lastKey = useRef(null);
  const lastPath = useRef(null);
  const currentKey = useRef(location.key);

  // Remember the scroll position of the history entry that is currently showing
  useEffect(() => {
    const save = () => positions.set(currentKey.current, window.scrollY);
    window.addEventListener('scroll', save, { passive: true });
    return () => window.removeEventListener('scroll', save);
  }, []);

  useLayoutEffect(() => {
    if (lastKey.current === location.key) return;
    const isFirstRender = lastKey.current === null;
    const samePage = lastPath.current === location.pathname;
    lastKey.current = location.key;
    lastPath.current = location.pathname;
    currentKey.current = location.key;

    if (navType === 'POP' && positions.has(location.key)) {
      restoreScroll(positions.get(location.key));
      return;
    }
    if (location.hash) {
      const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (el) {
        // html has scroll-behavior:smooth + scroll-padding-top, so 'auto' = smooth with the same offset
        el.scrollIntoView({ behavior: samePage ? 'auto' : 'instant' });
        return;
      }
    }
    // first load: leave the browser's own scroll position alone (e.g. on reload)
    if (!isFirstRender) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location, navType]);

  return null;
}
