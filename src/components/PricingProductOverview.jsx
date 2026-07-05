const modules = [
  { icon: 'routing',      title: 'Live Call Routing',               desc: 'Inbound calls from any lead source route to eligible agents automatically. No manual dispatch.', featured: true },
  { icon: 'marketplace',  title: 'Lead Marketplace',                desc: 'Agencies list unworked calls. Agents buy what fits. Every lead gets a second chance at conversion.' },
  { icon: 'wallet',       title: 'Wallet Billing',                  desc: 'Agents fund a wallet for call access. Every transaction is logged. Billing is always transparent.' },
  { icon: 'recording',    title: 'Call Recordings',                 desc: 'Every call session is recorded automatically and accessible from the agent dashboard after the call ends.' },
  { icon: 'reports',      title: 'Downloadable Reports',            desc: 'Export call history, talk time, marketplace activity, and performance stats anytime.' },
  { icon: 'tracking',     title: 'Client and Appointment Tracking', desc: 'Log clients and appointments directly in the platform. Keep your pipeline organized without a separate tool.' },
];

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'var(--color-primary)',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function ModuleIcon({ name }) {
  switch (name) {
    case 'routing':
      return (
        <svg {...svgProps} className="ppov__icon" aria-hidden="true">
          <path d="M4 5.5c0 7.5 7 14.5 14.5 14.5a1.6 1.6 0 0 0 1.5-1.5v-2.7a1.4 1.4 0 0 0-1.1-1.4l-2.6-.5a1.4 1.4 0 0 0-1.4.6l-.7 1a11 11 0 0 1-4.7-4.7l1-.7a1.4 1.4 0 0 0 .6-1.4l-.5-2.6A1.4 1.4 0 0 0 8.7 4H6A1.6 1.6 0 0 0 4.5 5.5Z" />
          <path d="M14 4h6m0 0v6m0-6-6 6" />
        </svg>
      );
    case 'marketplace':
      return (
        <svg {...svgProps} className="ppov__icon" aria-hidden="true">
          <path d="M4 4h1.5l1.2 10.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6L20 7H6" />
          <circle cx="9.5" cy="19" r="1.3" />
          <circle cx="17" cy="19" r="1.3" />
        </svg>
      );
    case 'wallet':
      return (
        <svg {...svgProps} className="ppov__icon" aria-hidden="true">
          <path d="M4 8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1H6a2 2 0 0 0-2 2Z" />
          <path d="M4 8v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
          <circle cx="16.5" cy="13" r="1" />
        </svg>
      );
    case 'recording':
      return (
        <svg {...svgProps} className="ppov__icon" aria-hidden="true">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M6 11a6 6 0 0 0 12 0" />
          <path d="M12 17v4m-3 0h6" />
        </svg>
      );
    case 'reports':
      return (
        <svg {...svgProps} className="ppov__icon" aria-hidden="true">
          <path d="M7 3h7l4 4v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M13 3v4h4" />
          <path d="M12 11v5m0 0-2-2m2 2 2-2" />
        </svg>
      );
    case 'tracking':
      return (
        <svg {...svgProps} className="ppov__icon" aria-hidden="true">
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M4 9h16M8 3v4M16 3v4" />
          <path d="M9 15.5a1.6 1.6 0 1 1 3.2 0M10.6 12.4a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" />
        </svg>
      );
    default:
      return null;
  }
}

function PricingProductOverview() {
  return (
    <section className="ppov">
      <div className="ppov__header">
        <div className="section__label-tag">WHAT'S INCLUDED</div>
        <h2 className="ppov__heading">Every plan includes the full platform.</h2>
        <p className="ppov__sub">
          There are no stripped-down tiers. Agents get the full agent dashboard. Agencies get the full agency dashboard. The difference is in how you use it, not what you can access.
        </p>
      </div>
      <div className="ppov__grid">
        {modules.map((m) => (
          <div key={m.title} className={`ppov__card${m.featured ? ' ppov__card--featured' : ''}`}>
            <div className="ppov__icon-wrap">
              <ModuleIcon name={m.icon} />
            </div>
            <div className="ppov__card-body">
              <p className="ppov__card-title">{m.title}</p>
              <p className="ppov__card-desc">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingProductOverview;
