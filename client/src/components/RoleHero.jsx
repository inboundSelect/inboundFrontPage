function RoleHero({ onOpenWaitlist }) {
  return (
    <section className="role-hero">
      {/* Center content */}
      <div className="role-hero__center">
        <div className="role-hero__badge-pill">
          <span className="role-hero__badge-icon">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8a5 5 0 0 1 10 0" />
              <rect x="2" y="8" width="2.5" height="4" rx="1.25" />
              <rect x="11.5" y="8" width="2.5" height="4" rx="1.25" />
              <path d="M13 12v1a2 2 0 0 1-2 2H9" />
            </svg>
          </span>
          For Insurance Agents
        </div>

        <h1 className="role-hero__heading">
          Stop Chasing Leads.{' '}
          <span className="role-hero__heading-gradient">Start Taking Calls.</span>
        </h1>

        <p className="role-hero__sub">
          InboundSelect puts you in a live call queue for inbound leads from insurance agencies
          already running their own marketing. Set your states, fund your wallet, and start
          receiving calls from prospects who already picked up the phone.
        </p>

        <div className="role-hero__btns">
          <button className="btn btn--stroke btn--sm" onClick={onOpenWaitlist}>Get Agent Access</button>
          <button className="btn btn--fill btn--sm"   onClick={onOpenWaitlist}>See How It Works</button>
        </div>
      </div>

      {/* Product showcase */}
      <div className="hero-showcase">
        <div className="hs-card reveal d1">
          <div className="hs-card__top">
            <div className="hs-card__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 3h3l1.5 4-2 1.5a9 9 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A14 14 0 0 1 2.5 4.6 1.5 1.5 0 0 1 4 3Z" />
              </svg>
            </div>
            <span className="hs-card__pill">Live</span>
          </div>
          <div className="hs-card__title">Incoming call</div>
          <div className="hs-card__value">Final Expense</div>
          <div className="hs-card__label">FL · matched to you</div>
        </div>

        <div className="hs-card reveal d2">
          <div className="hs-card__top">
            <div className="hs-card__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h12M4 10h12M4 15h7" />
              </svg>
            </div>
            <span className="hs-card__pill hs-card__pill--blue">In queue</span>
          </div>
          <div className="hs-card__value">You&apos;re #2</div>
          <div className="hs-card__label">State + product matched</div>
          <div className="hs-card__bars">
            {[40, 70, 55, 90, 65, 80].map((h, i) => (
              <div key={i} className={`hs-card__bar${i === 3 ? ' hs-card__bar--on' : ''}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="hs-card reveal d3">
          <div className="hs-card__top">
            <div className="hs-card__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h2l1.5 9h8l1.5-6H6" />
                <circle cx="8" cy="16.5" r="1" />
                <circle cx="14" cy="16.5" r="1" />
              </svg>
            </div>
            <span className="hs-card__pill hs-card__pill--blue">Marketplace</span>
          </div>
          <div className="hs-card__value">38 leads</div>
          <div className="hs-card__label">Available between calls</div>
        </div>
      </div>
    </section>
  );
}

export default RoleHero;
