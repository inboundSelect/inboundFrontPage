import { useEffect, useState } from 'react';

const audiences = ['final expense', 'Medicare', 'life insurance'];

function Hero({ onOpenWaitlist }) {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIdx((i) => (i + 1) % audiences.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const prevIdx = (wordIdx + audiences.length - 1) % audiences.length;

  return (
    <section className="hero" id="home">
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
            <span className="hero__badge-text">We don't sell calls. We power them.</span>
          </div>

          <h1 className="hero__heading">
            <span className="hero__heading-lead">The Infrastructure Behind Every Call Your Agency</span>{' '}
            <span className="hero__heading-gradient">Makes Money On</span>
          </h1>

          <p className="hero__subtext">
            InboundSelect gives insurance agencies the platform to receive inbound calls, route them to the right agent in seconds, set their own pricing, and earn on every lead they generate. You own the economics. We run the pipes.
          </p>

          <div className="hero__ctas">
            <button className="btn btn--fill btn--lg" onClick={onOpenWaitlist}>Apply for Beta Access</button>
            <a href="#features" className="btn btn--stroke btn--lg">See How It Works</a>
          </div>

          <p
            className="hero__trust"
            aria-label="Built for final expense, Medicare, and life insurance agencies already generating their own demand"
          >
            Built for{' '}
            <span className="rotate-words" aria-hidden="true">
              {audiences.map((w, i) => (
                <span
                  key={w}
                  className={`rotate-words__item${
                    i === wordIdx ? ' is-on' : i === prevIdx ? ' is-out' : ''
                  }`}
                >
                  {w}
                </span>
              ))}
            </span>{' '}
            agencies already generating their own demand
          </p>
        </div>

        <div className="hero__dashboard animate-up delay-3">
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-title">Routed Revenue</span>
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
              <span className="hero__stat-value">$248K</span>
              <span className="hero__stat-delta">Live + marketplace · Q4</span>
            </div>
          </div>

          <div className="hero__cards-row">
            <div className="hero__card">
              <p className="hero__card-title">Calls Live</p>
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
              <span className="hero__user-name" style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Connected this week</span>
            </div>

            <div className="hero__card">
              <div className="hero__card-header">
                <span className="hero__card-title">Routing Queue</span>
                <span className="hero__card-badge hero__card-badge--warning">3 in queue</span>
              </div>
              <div className="hero__pipeline">
                {[
                  { label: 'Final Expense · FL', value: '42 calls', pct: 90 },
                  { label: 'Medicare · TX', value: '28 calls', pct: 60 },
                  { label: 'Life · CA', value: '17 calls', pct: 40 },
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
