// Chart asset URLs
const lineChartRevenue = '/assets/6574b75e1815cfb4dae56f92272d312fc8dd588b.svg';
const donutOuter = '/assets/cc00dc3265420b3e82c89bfa7aaaff9cecaaeb50.svg';
const donutMid = '/assets/58f09e791faf015db4e9261ab2cee56fe9973a6c.svg';
const donutInner = '/assets/e350d3f13f88e91eea0e4d80ba14568e6604df4c.svg';
const lineChartPerms = '/assets/05e8fa492bb029bf89a9f2b6a6069db6226dbe71.svg';

// Flag images
const flagUK = '/assets/ab53383e630f02c0b052910d7fbd431c3e5d573b.svg';
const flagID = '/assets/fc664e87e18e8ac7933d16e1776565af02b629f5.svg';

const yAxisLabels = ['$700k', '$600k', '$500k', '$400k', '$300k', '$200k', '$10k'];

const barGroups = [
  [43, 60, 38, 93, 77],
  [43, 60, 38, 104, 116],
  [43, 60, 132, 132],
];

const barMonths = ['jan', 'feb', 'mar', 'apr', 'may'];

function FlagDE() {
  return (
    <span className="flag-de" aria-label="Germany">
      <span className="flag-de__black" />
      <span className="flag-de__red" />
      <span className="flag-de__gold" />
    </span>
  );
}

function KeyFeaturesBenefits() {
  return (
    <section className="kf-section section">
      <div className="container">
        <div className="product-overview__header animate-up">
          <p className="section__label">AGENCY CONTROLS</p>
          <h2 className="section__heading">Run your entire call operation from one dashboard.</h2>
          <p className="section__sub">
            Set up your team, define pricing, control who gets what calls, and track every dollar
            your operation generates. One system replaces the five tools your operation runs on today.
          </p>
        </div>

        <div className="kf-section__rows">
          {/* Row 1 */}
          <div className="kf-row animate-up delay-1">
            {/* Card 1: Agency Reporting */}
            <div className="kf-card kf-card--wide kf-card--accent-border">
              <div className="kf-card__chart-area">
                <p className="kf-card__chart-label">Total Revenue</p>
                <div className="kf-yaxis">
                  {yAxisLabels.map((l) => (
                    <div key={l} className="kf-yaxis__row">
                      <span>{l}</span>
                    </div>
                  ))}
                </div>
                <img
                  className="kf-card__line-chart"
                  src={lineChartRevenue}
                  alt="Total Revenue line chart"
                />
              </div>
              <div className="kf-card__panel">
                <p className="kf-card__benefit">
                  Call volume, wallet activity, agent revenue, and marketplace performance in one view.
                </p>
                <div>
                  <p className="kf-card__title">Agency Reporting</p>
                  <p className="kf-card__desc">
                    Call activity, wallet transactions, marketplace sales, and team performance. Every number your operation needs to make decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Routing Rules */}
            <div className="kf-card">
              <div className="kf-card__chart-area kf-card__chart-area--donut">
                <img className="kf-donut kf-donut--outer" src={donutOuter} alt="" />
                <img className="kf-donut kf-donut--mid" src={donutMid} alt="" />
                <img className="kf-donut kf-donut--inner" src={donutInner} alt="" />
                <div className="kf-donut-badge" style={{ top: '24%', left: '76%' }}>
                  <span className="kf-donut-badge__dot kf-donut-badge__dot--blue" />
                  <span>35%</span>
                </div>
                <div className="kf-donut-badge" style={{ top: '60%', left: '30%' }}>
                  <span className="kf-donut-badge__dot kf-donut-badge__dot--orange" />
                  <span>47%</span>
                </div>
                <div className="kf-donut-badge" style={{ top: '62%', left: '80%' }}>
                  <span className="kf-donut-badge__dot kf-donut-badge__dot--pink" />
                  <span>17%</span>
                </div>
              </div>
              <div className="kf-card__panel">
                <div>
                  <p className="kf-card__title">SelectRoute™ Routing Rules</p>
                  <p className="kf-card__desc">
                    Define which agents receive which calls based on state, product, availability, and billing status. SelectRoute sends the right call to the right agent automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="kf-row kf-row--reverse animate-up delay-2">
            {/* Card 3: Agent Onboarding */}
            <div className="kf-card">
              <div className="kf-card__chart-area kf-card__chart-area--table">
                <p className="kf-card__chart-caption">
                  Filter by state, product, and lead age. Agents buy individually or in bulk. You earn on every listing.
                </p>
                <div className="kf-country-list">
                  <div className="kf-country-item">
                    <div className="kf-country-bar" style={{ width: '88%' }}>
                      <img src={flagUK} className="kf-country-flag" alt="UK" />
                      <span>United Kingdom</span>
                    </div>
                    <span className="kf-country-num">2,890</span>
                  </div>
                  <div className="kf-country-item">
                    <div className="kf-country-bar" style={{ width: '72%' }}>
                      <img src={flagID} className="kf-country-flag" alt="Indonesia" />
                      <span>Indonesia</span>
                    </div>
                    <span className="kf-country-num">1,970</span>
                  </div>
                  <div className="kf-country-item">
                    <div className="kf-country-bar" style={{ width: '52%' }}>
                      <FlagDE />
                      <span>Germany</span>
                    </div>
                    <span className="kf-country-num">780</span>
                  </div>
                  <div className="kf-country-item kf-country-item--faded">
                    <div className="kf-country-bar" style={{ width: '32%' }}>
                      <span className="kf-flag-dot kf-flag-dot--red" />
                      <span>Monaco</span>
                    </div>
                    <span className="kf-country-num">550</span>
                  </div>
                </div>
              </div>
              <div className="kf-card__panel">
                <div>
                  <p className="kf-card__title">Marketplace Management</p>
                  <p className="kf-card__desc">
                    Control what goes into your Select Marketplace, at what price, and for how long. Every unworked call is a revenue opportunity, not a write-off.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Team Performance */}
            <div className="kf-card kf-card--wide">
              <div className="kf-card__chart-area kf-card__chart-area--bars">
                <img
                  className="kf-card__line-overlay"
                  src={lineChartPerms}
                  alt="Activity line chart"
                />
                <div className="kf-bar-groups">
                  {barGroups.map((group, gi) => (
                    <div key={gi} className="kf-bar-group">
                      <div className="kf-bar-group__bars">
                        {group.map((h, bi) => (
                          <div
                            key={bi}
                            className="kf-bar"
                            style={{ height: `${h}px` }}
                          />
                        ))}
                      </div>
                      <div className="kf-bar-group__labels">
                        {barMonths.slice(0, group.length).map((m) => (
                          <span key={m}>{m}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="kf-card__panel">
                <p className="kf-card__benefit">
                  Per-agent, per-product, per-period visibility without manual reporting.
                </p>
                <div>
                  <p className="kf-card__title">Team Performance</p>
                  <p className="kf-card__desc">
                    Call volume, talk time, acceptance rates, and revenue by agent. Know who's performing without pulling a single manual report.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeaturesBenefits;
