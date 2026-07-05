// Canonical site footer (rendered once by App for every page).
// NOTE: a physical postal address is expected for AWS SES production access —
// add the registered business mailing address here before launch if required.
const LEGAL_ENTITY = 'inboundSelect';
const CONTACT_EMAIL = 'tech@inboundselect.com';

function Footer({ onOpenWaitlist, onNavigate }) {
  const columns = [
    {
      head: 'Product',
      links: [
        { label: 'How It Works', path: '/how-it-works' },
        { label: 'For Agencies', path: '/for-agencies' },
        { label: 'For Agents', path: '/for-agents' },
        { label: 'Marketplace', path: '/marketplace' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'Integrations', path: '/integrations' },
      ],
    },
    {
      head: 'Company',
      links: [
        { label: 'Contact', path: '/contact' },
        { label: 'Security & Compliance', path: '/security' },
      ],
    },
  ];

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <div className="navbar__logo site-footer__logo">
              <img className="navbar__logo-img" src="/assets/Inbound_Logo.svg" alt="" aria-hidden="true" />
              <span className="navbar__logo-lockup">
                <span className="navbar__logo-wordmark">
                  <span className="navbar__logo-wordmark--inbound">nbound</span><span className="navbar__logo-wordmark--select">Select</span>
                </span>
                <span className="navbar__logo-slogan">Connect With Qualified Leads</span>
              </span>
            </div>
            <p className="site-footer__tagline">
              Inbound call routing and appointments for insurance agencies and the agents who work their calls.
            </p>
            <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Apply for Beta</button>
          </div>

          <nav className="site-footer__cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.head} className="site-footer__col">
                <p className="site-footer__col-head">{col.head}</p>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.path}>
                      <button onClick={() => onNavigate(l.path)}>{l.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="site-footer__col">
              <p className="site-footer__col-head">Legal</p>
              <ul>
                <li><a href="/privacy.html">Privacy Policy</a></li>
                <li><a href="/terms.html">Terms of Service</a></li>
                <li><a href={`mailto:${CONTACT_EMAIL}?subject=Email%20preferences`}>Email preferences</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="site-footer__legal">
          <p className="site-footer__address">
            {LEGAL_ENTITY} &middot;{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <div className="site-footer__bottom">
            <p>© 2026 {LEGAL_ENTITY}. All rights reserved.</p>
            <p className="site-footer__disclaimer">
              Inbound Select is a call-routing and marketing-attribution platform and is not affiliated with or endorsed by Google.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
