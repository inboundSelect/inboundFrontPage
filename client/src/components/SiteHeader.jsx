import { useState, useEffect } from 'react';
import { NAV_LINKS, APP_LINKS } from '../lib/site';

function SiteHeader({ currentPage, onNavigate, onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close the mobile menu on Escape and whenever the page changes. */
  useEffect(() => setMenuOpen(false), [currentPage]);
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const go = (page) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__bar">
        {/* The official lockup artwork — the mark's tallest bar is the "I" of
            "Inbound", so mark and wordmark must not be assembled in CSS. */}
        <button className="brand" onClick={() => go('home')} aria-label="InboundSelect — home">
          <img src="/assets/inboundselect-lockup.svg" alt="InboundSelect" className="brand__logo" />
        </button>

        <nav className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Main">
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              className={`site-nav__link${currentPage === link.page ? ' site-nav__link--active' : ''}`}
              aria-current={currentPage === link.page ? 'page' : undefined}
              onClick={() => go(link.page)}
            >
              {link.label}
            </button>
          ))}

          {/* Sign up sits in the menu too — the header button that carries it is
              hidden on narrow screens, and it must never become unreachable. */}
          <a className="btn btn--primary btn--block site-nav__signup" href={APP_LINKS.register}>
            Sign Up
          </a>
        </nav>

        <div className="site-header__actions">
          <a className="btn btn--ghost btn--sm site-header__signup" href={APP_LINKS.register}>
            Sign Up
          </a>
          <button className="btn btn--primary btn--sm" onClick={() => onOpenModal('demo')}>
            Book a Demo
          </button>
          <button
            className={`site-header__burger${menuOpen ? ' site-header__burger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
