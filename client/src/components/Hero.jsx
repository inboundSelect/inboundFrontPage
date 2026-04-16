function Hero({ onOpenWaitlist }) {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" />
      <div className="hero__inner">
        <div className="hero__content animate-down">
          <div className="hero__badge">
            <span className="hero__badge-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="5" width="16" height="12" rx="2" stroke="var(--brand)" strokeWidth="1.5"/>
                <path d="M6 5V4a4 4 0 0 1 8 0v1" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 10h16" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="hero__badge-text">Now Accepting Beta Agencies</span>
          </div>

          <h1 className="hero__heading">
            Every Inbound Lead<br />
            Deserves a <span className="hero__heading-gradient">Live Conversation</span>
          </h1>

          <p className="hero__subtext">
            InboundSelect routes calls from your existing lead sources to the right agent in seconds. Whatever platform you're generating leads on, we handle what happens the moment a prospect picks up the phone.
          </p>

          <div className="hero__social-proof">
            <div className="hero__avatars">
              {['A', 'B', 'C'].map((letter) => (
                <div key={letter} className="hero__avatar">{letter}</div>
              ))}
            </div>
            <span className="hero__social-text">
              Built for <strong>final expense, Medicare, and life insurance</strong> operations
            </span>
          </div>

          <div className="hero__ctas">
            <a href="#contact" className="btn btn--stroke btn--lg">See How It Works</a>
            <button className="btn btn--fill btn--lg" onClick={onOpenWaitlist}>Apply for Beta Access</button>
          </div>
        </div>

        <div className="hero__dashboard animate-up delay-3">
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-title">Revenue Overview</span>
              <span className="hero__card-badge hero__card-badge--success">+12.4%</span>
            </div>
            <div className="hero__chart-bars">
              {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 88, 100].map((h, i) => (
                <div
                  key={i}
                  className={`hero__chart-bar${i === 11 ? ' active' : ''}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">$2.4M</span>
              <span className="hero__stat-delta">Total Revenue Q4</span>
            </div>
          </div>

          <div className="hero__cards-row">
            <div className="hero__card">
              <p className="hero__card-title">Active Users</p>
              <div className="hero__sparkline">
                <svg viewBox="0 0 80 32" fill="none" preserveAspectRatio="none" width="100%" height="40">
                  <defs>
                    <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand)" />
                      <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,28 13,20 26,22 40,10 53,14 66,6 80,4 80,32 0,32"
                    fill="url(#sparkGrad)"
                    opacity="0.15"
                  />
                  <polyline
                    points="0,28 13,20 26,22 40,10 53,14 66,6 80,4"
                    stroke="var(--brand)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="hero__stat-value" style={{ fontSize: '20px' }}>1,284</span>
              <span className="hero__user-name" style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Online now</span>
            </div>

            <div className="hero__card">
              <div className="hero__card-header">
                <span className="hero__card-title">Pipeline</span>
                <span className="hero__card-badge hero__card-badge--warning">3 urgent</span>
              </div>
              <div className="hero__pipeline">
                {[
                  { label: 'Enterprise deal', value: '$84K', pct: 75 },
                  { label: 'SMB renewal', value: '$12K', pct: 40 },
                  { label: 'Partnership', value: '$220K', pct: 90 },
                ].map((item) => (
                  <div key={item.label} className="hero__pipeline-item">
                    <div className="hero__pipeline-row">
                      <span className="hero__user-name">{item.label}</span>
                      <span className="hero__user-count">{item.value}</span>
                    </div>
                    <div className="hero__pipeline-track">
                      <div className="hero__pipeline-fill" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
