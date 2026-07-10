function ContactHero({ onOpenWaitlist }) {
  return (
    <section className="contact-hero">
      <div className="contact-hero__center">
        <div className="contact-hero__badge">
          <span className="contact-hero__badge-icon">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 8a6 6 0 1 1-2.3-4.7" />
              <path d="M6 8l1.8 1.8L14 4" />
            </svg>
          </span>
          <span className="contact-hero__badge-text">Talk to us</span>
        </div>

        <h1 className="contact-hero__heading">
          See if InboundSelect fits your operation before you{' '}
          <span className="contact-hero__heading-gradient">commit to anything.</span>
        </h1>

        <p className="contact-hero__sub">
          We do a 30-minute demo with every agency before onboarding. We want to confirm it&apos;s the
          right fit for how you run things. If it isn&apos;t, we&apos;ll say so.
        </p>

        <div className="contact-hero__btns">
          <button className="btn btn--stroke btn--sm" onClick={onOpenWaitlist}>Book a Demo</button>
          <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Apply for Beta</button>
        </div>
      </div>

      <div className="hero-showcase">
        <div className="hs-card reveal d1">
          <div className="hs-card__top">
            <div className="hs-card__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="10" r="7.5" /><path d="M10 6v4l3 2" />
              </svg>
            </div>
            <span className="hs-card__pill hs-card__pill--blue">Beta</span>
          </div>
          <div className="hs-card__value">&lt; 24h</div>
          <div className="hs-card__label">Applicants hear back</div>
        </div>

        <div className="hs-card reveal d2">
          <div className="hs-card__top">
            <div className="hs-card__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="14" height="13" rx="2" /><path d="M3 8h14M7 2v4M13 2v4" />
              </svg>
            </div>
            <span className="hs-card__pill hs-card__pill--blue">Demo</span>
          </div>
          <div className="hs-card__value">Same day</div>
          <div className="hs-card__label">Calendar link sent</div>
        </div>

        <div className="hs-card reveal d3">
          <div className="hs-card__top">
            <div className="hs-card__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8l-4 3V5Z" />
              </svg>
            </div>
            <span className="hs-card__pill">No pitch</span>
          </div>
          <div className="hs-card__value">30 min</div>
          <div className="hs-card__label">Straight fit call</div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
