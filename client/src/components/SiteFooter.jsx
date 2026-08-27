import { COMPANY } from '../lib/site';
import Brand from './Brand';

const COLUMNS = [
  {
    head: 'Platform',
    links: [
      { label: 'For Agencies', page: 'agencies' },
      { label: 'For Agents', page: 'agents' },
      { label: 'Lead Marketplace', page: 'marketplace' },
      { label: 'Pricing', page: 'pricing' },
    ],
  },
  {
    head: 'Company',
    links: [
      { label: 'Trust & Safety', page: 'trust' },
      { label: 'Contact Us', page: 'contact' },
      { label: 'Book a Demo', modal: 'demo' },
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

function SiteFooter({ onNavigate, onOpenModal }) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div>
            <button className="brand" onClick={() => onNavigate('home')} aria-label="InboundSelect — home">
              <Brand />
            </button>
            <p className="site-footer__tag">
              The system insurance agencies run their inbound calls on. You bring the
              callers and the agents. We make sure the two meet while the caller is
              still on the line.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.head} className="site-footer__col" aria-label={col.head}>
              <p className="site-footer__col-head">{col.head}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <button onClick={() => (l.modal ? onOpenModal(l.modal) : onNavigate(l.page))}>
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="site-footer__legal">
          <p>© {COMPANY.founded} {COMPANY.legalEntity}. All rights reserved.</p>
          <address className="site-footer__addr">{COMPANY.address}</address>
          <div className="site-footer__legal-links">
            <button onClick={() => onNavigate('terms')}>Terms</button>
            <button onClick={() => onNavigate('privacy')}>Privacy</button>
            <button onClick={() => onNavigate('data-deletion')}>Data Deletion</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
