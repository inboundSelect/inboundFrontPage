import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Gracefully hide any decorative image that fails to load so broken-image
// placeholders never show. Runs in the capture phase since <img> error
// events do not bubble.
document.addEventListener(
  'error',
  (e) => {
    const el = e.target;
    if (el && el.tagName === 'IMG') {
      el.style.display = 'none';
    }
  },
  true,
);

// Scroll-reveal: fade `.reveal` elements in as they reach the viewport.
// Scroll-position based (not IntersectionObserver) so elements that are
// scrolled past quickly, or already above the fold, are always revealed —
// content can never get stuck invisible.
if (typeof window !== 'undefined') {
  // Signals CSS that JS reveal is active (keeps content visible without JS).
  document.documentElement.classList.add('js-reveal');
  let scheduled = false;
  const revealInView = () => {
    scheduled = false;
    const trigger = window.innerHeight * 0.88;
    document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => {
      // Reveal once the top edge reaches ~88% down the viewport, and also
      // any element already scrolled past (top above the viewport).
      if (el.getBoundingClientRect().top < trigger) el.classList.add('is-in');
    });
  };
  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(revealInView);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('load', revealInView);
  // Re-run on SPA page switches so newly mounted sections are handled.
  const mo = new MutationObserver(onScroll);
  mo.observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(revealInView, 0);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
