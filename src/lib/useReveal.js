import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Standardized scroll-reveal. Attach the returned ref to a container; every
 * element inside it carrying `data-reveal` fades/slides up when scrolled into
 * view (per-element triggers, grouped stagger).
 *
 * Robustness: reduced-motion users get the final state instantly, and a hard
 * safety timer reveals anything still hidden so content is NEVER permanently
 * hidden (short pages, no scroll, non-scrolling/headless renders, GSAP hiccups).
 */
export function useReveal(opts = {}) {
  const ref = useRef(null);
  const { y = 24, stagger = 0.08, start = 'top 90%', duration = 0.7 } = opts;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    let safety;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(targets, { opacity: 0, y });
        targets.forEach((el, i) => {
          gsap.to(el, {
            opacity: 1, y: 0, duration, ease: 'power3.out', delay: (i % 6) * stagger,
            scrollTrigger: { trigger: el, start, once: true },
          });
        });
        // Hard safety net: whatever is still hidden after 1.8s gets revealed.
        safety = setTimeout(() => {
          const hidden = Array.from(targets).filter((t) => Number(gsap.getProperty(t, 'opacity')) < 1);
          if (hidden.length) gsap.to(hidden, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.04 });
        }, 1800);
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(targets, { opacity: 1, y: 0 });
      });
    }, root);

    return () => { clearTimeout(safety); ctx.revert(); };
  }, [y, stagger, start, duration]);

  return ref;
}
