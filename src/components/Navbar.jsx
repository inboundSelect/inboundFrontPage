import { useState, useEffect } from 'react';

function Navbar({ onOpenWaitlist, currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAnchor = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAnchorLink = (hash) => {
    setMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      // Wait for home page to render, then scroll
      setTimeout(() => scrollToAnchor(hash), 120);
    } else {
      scrollToAnchor(hash);
    }
  };

  const navLinks = [
    { label: 'How It Works', action: () => onNavigate('home') },
    { label: 'For Agencies', action: () => onNavigate('features') },
    { label: 'For Agents', action: () => onNavigate('role') },
    { label: 'Marketplace', action: () => onNavigate('marketplace') },
    { label: 'Pricing', action: () => onNavigate('pricing') },
    { label: 'Contact Us', action: () => onNavigate('contact') },
  ];

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.action) {
      link.action();
    }
  };

  return (
    <header className={`navbar-wrap${scrolled ? ' scrolled' : ''}`}>
      <nav className="navbar">
        <button className="navbar__logo" onClick={() => onNavigate('home')} aria-label="InboundSelect home">
          <img className="navbar__logo-img" src="/assets/Inbound_Logo.svg" alt="" aria-hidden="true" />
          <span className="navbar__logo-lockup">
            <span className="navbar__logo-wordmark">
              <span className="navbar__logo-wordmark--inbound">nbound</span><span className="navbar__logo-wordmark--select">Select</span>
            </span>
            <span className="navbar__logo-slogan">Connect With Qualified Leads</span>
          </span>
        </button>

        <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.action ? (
                <button
                  className={currentPage === (link.label === 'How It Works' ? 'home' : link.label === 'For Agencies' ? 'features' : link.label === 'For Agents' ? 'role' : link.label === 'Marketplace' ? 'marketplace' : link.label === 'Pricing' ? 'pricing' : link.label === 'Contact Us' ? 'contact' : '') ? 'active' : ''}
                  onClick={() => handleNavClick(link)}
                >
                  {link.label}
                </button>
              ) : (
                <button
                  onClick={() => handleAnchorLink(link.anchor)}
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
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
