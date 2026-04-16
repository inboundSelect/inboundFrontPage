function MarketingHub({ onOpenWaitlist }) {
  const adSources = [
    { platform: 'Meta Ads', spend: '$4,820', calls: 38, cpl: '$127', trend: '+12%', color: 'var(--brand)' },
    { platform: 'Google Ads', spend: '$3,140', calls: 24, cpl: '$131', trend: '+6%', color: 'var(--blue)' },
    { platform: 'Lead Vendor', spend: '$1,900', calls: 19, cpl: '$100', trend: '+21%', color: 'var(--success)' },
  ];

  const benefits = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--brand)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 1v4M9 13v4M1 9h4M13 9h4"/>
          <circle cx="9" cy="9" r="3"/>
        </svg>
      ),
      title: 'Sync your ad accounts',
      desc: 'Connect Meta, Google, and your lead vendors directly. All spend data flows into one view alongside your call results.',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--brand)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="2,14 6,9 10,11 14,5 17,2"/>
          <circle cx="17" cy="2" r="1.5" fill="var(--brand)" stroke="none"/>
        </svg>
      ),
      title: 'See cost per connected call',
      desc: 'Stop measuring cost per lead. See which campaigns are actually generating live conversations — and at what cost.',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--brand)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l4 4 8-8"/>
        </svg>
      ),
      title: 'Guided budget decisions',
      desc: 'The platform surfaces which sources are performing and flags where budget is being wasted — so you know exactly where to shift spend.',
    },
  ];

  return (
    <section className="mhub section">
      <div className="container">

        {/* ── Centered section header ── */}
        <div className="mhub__header animate-up">
          <p className="section__label">MARKETING HUB</p>
          <h2 className="section__heading">
            See which campaigns drive live conversations, not just clicks.
          </h2>
          <p className="section__sub">
            Connect your ad accounts and lead sources to InboundSelect. Every call that routes through the platform is matched back to the campaign&nbsp;that&nbsp;drove&nbsp;it.
          </p>
        </div>

        {/* ── Two-column content ── */}
        <div className="mhub__inner">

          {/* LEFT: benefit list */}
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

            <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>
              Explore the Marketing Hub
            </button>
          </div>

          {/* RIGHT: mock dashboard card */}
          <div className="mhub__right animate-up delay-2">
            <div className="mhub__card">
              <div className="mhub__card-header">
                <span className="mhub__card-title">Ad Source Performance</span>
                <span className="mhub__card-period">Last 30 days</span>
              </div>

              <div className="mhub__table">
                <div className="mhub__table-head">
                  <span>Source</span>
                  <span>Spend</span>
                  <span>Calls</span>
                  <span>Cost / Call</span>
                  <span>Trend</span>
                </div>
                {adSources.map((row) => (
                  <div key={row.platform} className="mhub__table-row">
                    <span className="mhub__source-name">
                      <span className="mhub__source-dot" style={{ background: row.color }} />
                      {row.platform}
                    </span>
                    <span>{row.spend}</span>
                    <span>{row.calls}</span>
                    <span>{row.cpl}</span>
                    <span className="mhub__trend">{row.trend}</span>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="mhub__chart">
                <p className="mhub__chart-label">Connected calls by source</p>
                <div className="mhub__bars">
                  {adSources.map((row, i) => {
                    const max = Math.max(...adSources.map(r => r.calls));
                    const pct = Math.round((row.calls / max) * 100);
                    return (
                      <div key={i} className="mhub__bar-row">
                        <span className="mhub__bar-name">{row.platform}</span>
                        <div className="mhub__bar-track">
                          <div
                            className="mhub__bar-fill"
                            style={{ width: `${pct}%`, background: row.color }}
                          />
                        </div>
                        <span className="mhub__bar-val">{row.calls}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mhub__card-footer">
                <span className="mhub__insight">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--success)" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="7" cy="7" r="6"/>
                    <path d="M7 4v3l2 1.5"/>
                  </svg>
                  Lead Vendor has the lowest cost per connected call this month.
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
