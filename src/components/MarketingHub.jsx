function MarketingHub({ onOpenWaitlist, onNavigate }) {
  // Illustrative sample shaped like a Google Ads reporting response, joined to
  // internal call data on the UTM campaign. Live data requires the agency to
  // connect its own Google Ads account (read-only).
  const campaigns = [
    { name: 'Final Expense · FL', spend: '$4,820', calls: 38, cpc: '$127', roas: '3.1x', color: 'var(--azure-600)' },
    { name: 'Medicare · TX', spend: '$3,140', calls: 24, cpc: '$131', roas: '2.7x', color: 'var(--violet-500)' },
    { name: 'Life · National', spend: '$1,900', calls: 19, cpc: '$100', roas: '3.6x', color: 'var(--green-500)' },
  ];

  const benefits = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 1v4M9 13v4M1 9h4M13 9h4"/>
          <circle cx="9" cy="9" r="3"/>
        </svg>
      ),
      title: 'Connect Google Ads — read-only',
      desc: 'Link your own Google Ads account. We read campaign metrics only and never touch your budgets, bids, keywords, or ads.',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="2,14 6,9 10,11 14,5 17,2"/>
          <circle cx="17" cy="2" r="1.5" fill="var(--color-primary)" stroke="none"/>
        </svg>
      ),
      title: 'See cost per connected call',
      desc: 'Stop measuring cost per lead. See which campaigns actually generate live conversations — and at what cost per call and ROAS.',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l4 4 8-8"/>
        </svg>
      ),
      title: 'Attribution by UTM campaign',
      desc: 'Every inbound call is matched back to the campaign that produced it, so your Google Ads spend and real call revenue finally sit side by side.',
    },
  ];

  return (
    <section className="mhub section">
      <div className="container">
        <div className="mhub__header animate-up">
          <p className="section__label">MARKETING HUB</p>
          <h2 className="section__heading">
            See which campaigns drive live conversations, not just clicks.
          </h2>
          <p className="section__sub">
            Connect your Google Ads account, read-only, and every call that routes through the platform is
            matched back to the campaign&nbsp;that&nbsp;drove&nbsp;it — for true cost-per-call and ROAS.
          </p>
        </div>

        <div className="mhub__inner">
          <div className="mhub__left animate-up delay-1">
            <ul className="mhub__benefits">
              {benefits.map((b) => (
                <li key={b.title} className="mhub__benefit">
                  <span className="mhub__benefit-icon">{b.icon}</span>
                  <div>
                    <strong className="mhub__benefit-title">{b.title}</strong>
                    <p className="mhub__benefit-desc">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="btn btn--fill btn--sm" onClick={() => (onNavigate ? onNavigate('/integrations') : onOpenWaitlist())}>
              Explore the Marketing Hub
            </button>
          </div>

          <div className="mhub__right animate-up delay-2">
            <div className="mhub__card">
              <div className="mhub__card-header">
                <span className="mhub__card-title">Campaign performance</span>
                <span className="mhub__card-period">Google Ads · sample</span>
              </div>

              <div className="mhub__table">
                <div className="mhub__table-head">
                  <span>Campaign</span>
                  <span>Spend</span>
                  <span>Calls</span>
                  <span>Cost / Call</span>
                  <span>ROAS</span>
                </div>
                {campaigns.map((row) => (
                  <div key={row.name} className="mhub__table-row">
                    <span className="mhub__source-name">
                      <span className="mhub__source-dot" style={{ background: row.color }} />
                      {row.name}
                    </span>
                    <span>{row.spend}</span>
                    <span>{row.calls}</span>
                    <span>{row.cpc}</span>
                    <span className="mhub__trend">{row.roas}</span>
                  </div>
                ))}
              </div>

              <div className="mhub__chart">
                <p className="mhub__chart-label">Connected calls by campaign</p>
                <div className="mhub__bars">
                  {campaigns.map((row, i) => {
                    const max = Math.max(...campaigns.map(r => r.calls));
                    const pct = Math.round((row.calls / max) * 100);
                    return (
                      <div key={i} className="mhub__bar-row">
                        <span className="mhub__bar-name">{row.name}</span>
                        <div className="mhub__bar-track">
                          <div className="mhub__bar-fill" style={{ width: `${pct}%`, background: row.color }} />
                        </div>
                        <span className="mhub__bar-val">{row.calls}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mhub__card-footer">
                <span className="mhub__insight">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--color-success)" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="7" cy="7" r="6"/>
                    <path d="M7 4v3l2 1.5"/>
                  </svg>
                  Life · National has the highest ROAS this month.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketingHub;
