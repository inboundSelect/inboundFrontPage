function FeaturesHero({ onOpenWaitlist }) {
  return (
    <section className="features-hero">
      <div className="features-hero__inner">
        <div className="features-hero__badge">
          <div className="features-hero__badge-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.5 14.25v2.25m3-4.5v4.5m3-9v9m3-12v12M3.375 19.5h17.25c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125H3.375C2.754 2.25 2.25 2.754 2.25 3.375v15c0 .621.504 1.125 1.125 1.125z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>For Agency Owners and IMOs</span>
        </div>

        <h1 className="features-hero__heading">
          Your Agents Earn. Your Agency Earns.{' '}
          <span className="features-hero__heading-gradient">You Control Both.</span>
        </h1>

        <p className="features-hero__sub">
          InboundSelect gives you the infrastructure to route inbound calls to your team in seconds,
          set your own pricing, and earn on every lead your marketing generates. You run the
          economics. We run the platform.
        </p>

        <div className="features-hero__btns">
          <button className="btn btn--stroke" onClick={onOpenWaitlist}>Apply for Beta Access</button>
          <button className="btn btn--fill" onClick={onOpenWaitlist}>See How It Works</button>
        </div>
      </div>

      <div className="hero-showcase">
        <div className="hs-card reveal d1">
          <div className="hs-card__top">
            <div className="hs-card__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5" cy="5" r="2" /><circle cx="15" cy="15" r="2" />
                <path d="M7 5h6a2 2 0 0 1 2 2v6" />
              </svg>
            </div>
            <span className="hs-card__pill">+12%</span>
          </div>
          <div className="hs-card__value">1,284</div>
          <div className="hs-card__label">Calls routed today</div>
        </div>

        <div className="hs-card reveal d2">
          <div className="hs-card__top">
            <div className="hs-card__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="7" cy="7" r="3" /><path d="M2 17a5 5 0 0 1 10 0" />
                <path d="M14 5a3 3 0 0 1 0 6M14 17a5 5 0 0 0-2-4" opacity="0.5" />
              </svg>
            </div>
            <span className="hs-card__pill hs-card__pill--blue">18 live</span>
          </div>
          <div className="hs-card__value">Team</div>
          <div className="hs-card__label">Agents available now</div>
          <div className="hs-card__bars">
            {[50, 80, 60, 95, 70, 85].map((h, i) => (
              <div key={i} className={`hs-card__bar${i === 3 ? ' hs-card__bar--on' : ''}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="hs-card reveal d3">
          <div className="hs-card__top">
            <div className="hs-card__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h2l1.5 9h8l1.5-6H6" />
                <circle cx="8" cy="16.5" r="1" /><circle cx="14" cy="16.5" r="1" />
              </svg>
            </div>
            <span className="hs-card__pill">recovered</span>
          </div>
          <div className="hs-card__value">$4.2K</div>
          <div className="hs-card__label">Marketplace this week</div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesHero;
