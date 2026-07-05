import HeroRouting from './HeroRouting';

function Hero({ onOpenWaitlist, onNavigate }) {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" />
      <div className="aurora" aria-hidden="true" />
      <div className="dot-grid" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__content animate-down">
          <div className="hero__badge">
            <span className="hero__badge-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="5" width="16" height="12" rx="2" stroke="var(--color-primary)" strokeWidth="1.5"/>
                <path d="M6 5V4a4 4 0 0 1 8 0v1" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 10h16" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="hero__badge-text">Now Accepting Beta Agencies</span>
          </div>

          <h1 className="hero__heading">
            Inbound Call Routing &amp; Appointments<br />
            for <span className="hero__heading-gradient">Insurance Agencies</span>
          </h1>

          <p className="hero__subtext">
            Inbound Select connects inbound phone leads to the right licensed, available agent in seconds &mdash;
            then helps agents log call outcomes, book appointments, and sync them to their Google Calendar, so no
            lead goes unworked.
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
            <button className="btn btn--stroke btn--lg" onClick={() => onNavigate('/how-it-works')}>See How It Works</button>
            <button className="btn btn--fill btn--lg" onClick={onOpenWaitlist}>Apply for Beta Access</button>
          </div>
        </div>

        <div className="hero__dashboard animate-up delay-3">
          <HeroRouting />
        </div>
      </div>
    </section>
  );
}

export default Hero;
