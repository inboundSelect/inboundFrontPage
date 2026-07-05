function FeaturesHero({ onOpenWaitlist }) {
  return (
    <section className="features-hero">
      <div className="aurora" aria-hidden="true" />
      <div className="dot-grid" aria-hidden="true" />

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
          Give Your Agents Inbound{' '}
          <span className="features-hero__heading-gradient">Calls to Work</span>
        </h1>

        <p className="features-hero__sub">
          You bring the team and the marketing. Inbound Select handles live call routing, agent
          billing, marketplace resale, and reporting, from the moment a prospect calls to the
          final outcome on your agency dashboard.
        </p>

        <div className="features-hero__btns">
          <button className="btn btn--stroke" onClick={onOpenWaitlist}>Apply for Beta Access</button>
          <button className="btn btn--fill" onClick={onOpenWaitlist}>See How It Works</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturesHero;
