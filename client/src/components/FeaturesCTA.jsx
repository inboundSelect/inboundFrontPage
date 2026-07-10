// CTA background
const ctaBg = '/assets/45e778eca2960d083672574e43d69f4e7dd3f2c1.png';

// Dashboard card assets
const revenueLineChart = '/assets/c2252e0af3ed0e9dfcf46d7dc498e35c91c9ee2f.svg';
const donutPieceA = '/assets/120a71816c736fa012185f176205edf1b9074985.svg';
const donutPieceB = '/assets/775f4d1220fee4eeacf5f15cb3a491b8890860cc.svg';
const donutPieceC = '/assets/25d93e1e9872ca2a7be9c8f7bda0973342ce1102.svg';
const flagUK = '/assets/ab53383e630f02c0b052910d7fbd431c3e5d573b.svg';
const flagID = '/assets/fc664e87e18e8ac7933d16e1776565af02b629f5.svg';

// CTA section revenue bar chart bars
const revenueBars = [43, 60, 38, 104, 132];

function FeaturesCTA({ onOpenWaitlist }) {
  return (
    <section className="features-cta">
      {/* Main CTA panel */}
      <div className="fcta-panel">
        <img className="fcta-panel__bg" src={ctaBg} alt="" aria-hidden="true" />

        <div className="fcta-panel__text">
          <h2 className="fcta-panel__heading">
            5 beta spots.{' '}
            <span className="fcta-panel__gradient">No platform fee.</span>{' '}
            You set the price and keep the margin.
          </h2>
          <p className="fcta-panel__sub">
            Platform fees waived during beta. Usage-only billing. 30-minute demo to confirm it fits
            your operation. If it isn't the right fit, we'll say so.
          </p>
          <div className="fcta-panel__btns">
            <button className="btn btn--stroke" onClick={onOpenWaitlist}>Apply for Beta Access</button>
            <button className="btn btn--fill" onClick={onOpenWaitlist}>
              Book a Demo
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginLeft: '6px' }}>
                <path d="M3.5 11.5l8-8M11.5 11.5V3.5H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="fcta-panel__cards">
          {/* Total Revenue card */}
          <div className="fcta-card fcta-card--revenue">
            <p className="fcta-card__label">Total Revenue</p>
            <div className="fcta-card__chart">
              <div className="fcta-mini-bars">
                {revenueBars.map((h, i) => (
                  <div key={i} className="fcta-mini-bar" style={{ height: `${h}px` }} />
                ))}
              </div>
              <img className="fcta-card__line" src={revenueLineChart} alt="" />
            </div>
            <div className="fcta-card__yaxis">
              {['$700k', '$600k', '$500k', '$400k', '$300k'].map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>

          {/* Active Users card */}
          <div className="fcta-card fcta-card--users">
            <div className="fcta-card__users-header">
              <p className="fcta-card__label">Active Users</p>
              <div className="fcta-card__users-stat">
                <span className="fcta-card__users-num">1,240</span>
                <span className="fcta-card__users-change">↑ 4.5%</span>
              </div>
            </div>
            <div className="fcta-country-list">
              <div className="fcta-country-item">
                <div className="fcta-country-bar" style={{ width: '88%' }}>
                  <img src={flagUK} className="fcta-flag" alt="UK" />
                  <span>United Kingdom</span>
                </div>
                <span>2,890</span>
              </div>
              <div className="fcta-country-item">
                <div className="fcta-country-bar" style={{ width: '68%' }}>
                  <img src={flagID} className="fcta-flag" alt="Indonesia" />
                  <span>Indonesia</span>
                </div>
                <span>1,970</span>
              </div>
              <div className="fcta-country-item">
                <div className="fcta-country-bar" style={{ width: '42%' }}>
                  <span className="fcta-flag-de" />
                  <span>Germany</span>
                </div>
                <span>780</span>
              </div>
            </div>
          </div>

          {/* Performance / Donut chart card */}
          <div className="fcta-card fcta-card--perf">
            <p className="fcta-card__label">Sales Performance</p>
            <div className="fcta-donut-wrap">
              <img className="fcta-donut fcta-donut--a" src={donutPieceA} alt="" />
              <img className="fcta-donut fcta-donut--b" src={donutPieceB} alt="" />
              <img className="fcta-donut fcta-donut--c" src={donutPieceC} alt="" />
              <div className="fcta-donut-badge" style={{ top: '22%', left: '74%' }}>
                <span className="fcta-badge-dot fcta-badge-dot--blue" />35%
              </div>
              <div className="fcta-donut-badge" style={{ top: '60%', left: '20%' }}>
                <span className="fcta-badge-dot fcta-badge-dot--orange" />47%
              </div>
              <div className="fcta-donut-badge" style={{ top: '62%', left: '75%' }}>
                <span className="fcta-badge-dot fcta-badge-dot--pink" />17%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features page footer */}
      <div className="features-footer">
        <div className="container">
          <div className="features-footer__top">
            <div className="features-footer__brand">
              <div className="features-footer__logo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="8" fill="var(--brand)" />
                  <path d="M7 14L12 9L17 14L22 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 19L12 14L17 19L22 14" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                </svg>
                <span>InboundSelect</span>
              </div>
              <p className="features-footer__tagline">
                Inbound call routing for insurance agencies and agents who already generate their own demand.
              </p>
            </div>

            <div className="features-footer__links">
              <div className="features-footer__col">
                <p className="features-footer__col-heading">Product</p>
                <ul>
                  {['Features', 'Integrations', 'Pricing', 'Documentation'].map((l) => (
                    <li key={l}><a href="#">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div className="features-footer__col">
                <p className="features-footer__col-heading">Company</p>
                <ul>
                  {['About Us', 'Blog', 'Customers'].map((l) => (
                    <li key={l}><a href="#">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div className="features-footer__col">
                <p className="features-footer__col-heading">Resources</p>
                <ul>
                  {['Community', 'Contact', 'System Status', 'Terms of Service'].map((l) => (
                    <li key={l}><a href="#">{l}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="features-footer__bottom">
            <p>© 2026 InboundSelect. All rights reserved.</p>
            <div className="features-footer__bottom-links">
              <a href="#">Terms of Service</a>
              <a href="#">API</a>
              <a href="#">Data Processing Agreement</a>
            </div>
          </div>
        </div>

        <div className="features-footer__wordmark" aria-hidden="true">INBOUND</div>
      </div>
    </section>
  );
}

export default FeaturesCTA;
