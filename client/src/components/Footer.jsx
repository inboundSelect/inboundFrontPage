// Button arrow + footer assets
const arrowIcon  = '/assets/eba5c929f578d92d34859393cf6a9661730fd1b3.svg';
const searchIcon = '/assets/b7fafca0f4ac72b36868b02593d67d23813b3ef9.svg';

const revBars = [40, 62, 48, 78, 58, 88, 72, 100];

const footerCols = [
  {
    head: 'Platform',
    links: [
      { label: 'How It Works', page: 'home' },
      { label: 'For Agencies', page: 'features' },
      { label: 'For Agents', page: 'role' },
      { label: 'Marketplace', page: 'marketplace' },
      { label: 'Pricing', page: 'pricing' },
    ],
  },
  {
    head: 'Company',
    links: [
      { label: 'About Us' },
      { label: 'Blog' },
      { label: 'Contact Us', page: 'contact' },
    ],
  },
  {
    head: 'Legal',
    links: [
      { label: 'Terms of Service', page: 'terms' },
      { label: 'Privacy Policy', page: 'privacy' },
      { label: 'Data Deletion', page: 'data-deletion' },
    ],
  },
];

function Footer({ onOpenWaitlist, onNavigate }) {
  return (
    <footer className="home-footer" id="contact">

      {/* ── CTA PANEL ── */}
      <div className="hfcta">
        {/* Left: text */}
        <div className="hfcta__content">
          <h2 className="hfcta__heading">
            5 beta spots. No platform fee.<br />
            <span className="hfcta__gradient">You keep everything you earn.</span>
          </h2>
          <div className="hfcta__sub-box">
            <p className="hfcta__sub">
              We're onboarding five agencies before public launch. Platform fees waived during beta, usage-only billing, and a 30-minute demo upfront to confirm it fits your operation. If it doesn't, we'll say so.
            </p>
          </div>
          <div className="hfcta__btns">
            <button className="hfcta__btn-stroke" onClick={onOpenWaitlist}>Apply for Beta Access</button>
            <button className="hfcta__btn-fill" onClick={onOpenWaitlist}>
              Book a Demo
              <img src={arrowIcon} alt="" className="hfcta__arrow" />
            </button>
          </div>
        </div>

        {/* Right: floating product cards */}
        <div className="hfcta__cards" aria-hidden="true">

          {/* Routed revenue */}
          <div className="bnr-card bnr-card--revenue">
            <div className="bnr-card__head">
              <span className="bnr-card__title">Routed Revenue</span>
              <span className="bnr-pill bnr-pill--green">+12.4%</span>
            </div>
            <div className="bnr-bars">
              {revBars.map((h, i) => (
                <span key={i} className={i === revBars.length - 1 ? 'on' : ''} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="bnr-card__value">$248K</div>
            <span className="bnr-card__cap">Live calls + Select Marketplace</span>
          </div>

          {/* SelectRoute queue */}
          <div className="bnr-card bnr-card--queue">
            <div className="bnr-card__head">
              <span className="bnr-card__title">SelectRoute</span>
              <span className="bnr-pill bnr-pill--blue">Live</span>
            </div>
            <div className="bnr-row"><strong>Final Expense · FL</strong><span className="bnr-pill bnr-pill--green">Connected</span></div>
            <div className="bnr-row"><strong>Medicare · TX</strong><span className="bnr-pill bnr-pill--blue">Routing</span></div>
            <div className="bnr-row"><strong>Life · CA</strong><span>In queue</span></div>
          </div>

          {/* Marketplace recovery */}
          <div className="bnr-card bnr-card--mkt">
            <div className="bnr-card__head">
              <span className="bnr-card__title">Select Marketplace</span>
            </div>
            <div className="bnr-card__value">$4.2K</div>
            <span className="bnr-card__cap">Unworked calls recovered this week</span>
          </div>
        </div>
      </div>

      {/* ── FOOTER LINKS ── */}
      <div className="home-footer__links-wrap">
        <div className="home-footer__top">
          <div className="home-footer__brand">
            <div className="home-footer__logo">
              <span>InboundSelect</span>
            </div>
            <p className="home-footer__tagline">
              Inbound call routing for insurance agencies and agents who already generate their own demand.
            </p>
            <div className="home-footer__search">
              <span className="home-footer__search-placeholder">Search ...</span>
              <img src={searchIcon} alt="Search" className="home-footer__search-icon" />
            </div>
          </div>

          <nav className="home-footer__cols">
            {footerCols.map(col => (
              <div key={col.head} className="home-footer__col">
                <p className="home-footer__col-heading">{col.head}</p>
                <ul>
                  {col.links.map(l => (
                    <li key={l.label}>
                      {l.page && onNavigate ? (
                        <button onClick={() => onNavigate(l.page)}>{l.label}</button>
                      ) : (
                        <a href="#">{l.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="home-footer__bottom">
          <p>© 2026 InboundSelect. All rights reserved.</p>
          <div className="home-footer__bottom-links">
            <button onClick={() => onNavigate?.('terms')}>Terms of Service</button>
            <button onClick={() => onNavigate?.('privacy')}>Privacy Policy</button>
            <button onClick={() => onNavigate?.('data-deletion')}>Data Deletion</button>
          </div>
        </div>
      </div>

      <div className="home-footer__wordmark" aria-hidden="true">INBOUND</div>
    </footer>
  );
}

export default Footer;
