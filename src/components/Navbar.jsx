import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'For Agencies', path: '/for-agencies' },
  { label: 'For Agents', path: '/for-agents' },
  { label: 'Marketplace', path: '/marketplace' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

function Navbar({ onOpenWaitlist, currentPath, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = (path) => {
    setMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className={`navbar-wrap${scrolled ? ' scrolled' : ''}`}>
      <nav className="navbar" aria-label="Primary">
        <button className="navbar__logo" onClick={() => go('/')} aria-label="Inbound Select home">
          <img className="navbar__logo-img" src="/assets/Inbound_Logo.svg" alt="" aria-hidden="true" />
          <span className="navbar__logo-lockup">
            <span className="navbar__logo-wordmark">
              <span className="navbar__logo-wordmark--inbound">nbound</span><span className="navbar__logo-wordmark--select">Select</span>
            </span>
            <span className="navbar__logo-slogan">Connect With Qualified Leads</span>
          </span>
        </button>

        <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <button
                className={currentPath === link.path ? 'active' : ''}
                onClick={() => go(link.path)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="navbar__links-cta">
            <button className="btn btn--fill btn--sm" onClick={() => { setMenuOpen(false); onOpenWaitlist(); }}>Get Started</button>
          </li>
        </ul>

        <div className="navbar__actions">
          <button
            className="btn btn--stroke btn--sm"
            onClick={() => window.location.href = 'https://app.inboundselect.com/login'}
          >
            Sign In
          </button>
          <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Get Started</button>
        </div>

        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
