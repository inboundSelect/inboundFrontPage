function KeyFeaturesBenefits() {
  return (
    <section className="kf-section section">
      <div className="container">
        <div className="product-overview__header animate-up">
          <p className="section__label">AGENCY CONTROLS</p>
          <h2 className="section__heading">Run your entire call operation from one dashboard.</h2>
          <p className="section__sub">
            Set up your team, define your pricing, control who gets what calls, and track every
            outcome. You own the rules. The platform enforces them.
          </p>
        </div>

        <div className="kf-section__rows">
          {/* Row 1 */}
          <div className="kf-row animate-up delay-1">
            {/* Card 1: Agency Analytics */}
            <div className="kf-card kf-card--wide kf-card--accent-border">
              <div className="kf-card__chart-area">
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '26px 34px',
                  }}
                >
                  <div className="stat-tile" style={{ flex: 1 }}>
                    <div className="stat-tile__value">Live</div>
                    <div className="stat-tile__label">Calls Routed</div>
                  </div>
                  <div className="stat-tile" style={{ flex: 1 }}>
                    <div className="stat-tile__value">Tracked</div>
                    <div className="stat-tile__label">Acceptance Rate</div>
                  </div>
                </div>
              </div>
              <div className="kf-card__panel">
                <p className="kf-card__benefit">
                  Call volume, wallet activity, agent revenue, and marketplace performance in one view.
                </p>
                <div>
                  <p className="kf-card__title">Agency Analytics</p>
                  <p className="kf-card__desc">
                    Daily reporting, leaderboard rankings, and marketing attribution all feed into your agency dashboard. Export reports on demand. Every call tracked from first ring to final outcome.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: CRM & Appointments */}
            <div className="kf-card">
              <div className="kf-card__chart-area">
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    alignContent: 'center',
                    justifyContent: 'center',
                    padding: '26px 30px',
                  }}
                >
                  <span className="chip">Client history</span>
                  <span className="chip">Calendar sync</span>
                  <span className="chip">Call recordings</span>
                  <span className="chip">Follow-ups</span>
                </div>
              </div>
              <div className="kf-card__panel">
                <div>
                  <p className="kf-card__title">CRM & Appointments</p>
                  <p className="kf-card__desc">
                    Agents log clients, track conversation history, and book follow-up appointments with Google Calendar sync. Call recordings are stored and accessible for review. Every call has a lifecycle beyond the first ring.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="kf-row kf-row--reverse animate-up delay-2">
            {/* Card 3: Lead Marketplace */}
            <div className="kf-card">
              <div className="kf-card__chart-area">
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    alignContent: 'center',
                    justifyContent: 'center',
                    padding: '26px 30px',
                  }}
                >
                  <span className="chip">By state</span>
                  <span className="chip">By product</span>
                  <span className="chip">By lead age</span>
                  <span className="chip">Single or bulk</span>
                </div>
              </div>
              <div className="kf-card__panel">
                <div>
                  <p className="kf-card__title">Lead Marketplace</p>
                  <p className="kf-card__desc">
                    Missed and unworked calls become sellable inventory. List them by state, product, and lead age. Agents buy what fits their book. Nothing goes to waste.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Team Performance */}
            <div className="kf-card kf-card--wide">
              <div className="kf-card__chart-area">
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '26px 34px',
                  }}
                >
                  <div className="stat-tile" style={{ flex: 1 }}>
                    <div className="stat-tile__value">Tracked</div>
                    <div className="stat-tile__label">Acceptance Rate</div>
                  </div>
                  <div className="stat-tile" style={{ flex: 1 }}>
                    <div className="stat-tile__value">Per agent</div>
                    <div className="stat-tile__label">Close Rate</div>
                  </div>
                  <div className="stat-tile" style={{ flex: 1 }}>
                    <div className="stat-tile__value">Real-time</div>
                    <div className="stat-tile__label">Talk Time</div>
                  </div>
                </div>
              </div>
              <div className="kf-card__panel">
                <p className="kf-card__benefit">
                  Per-agent, per-product, per-period visibility without manual reporting.
                </p>
                <div>
                  <p className="kf-card__title">Team Performance</p>
                  <p className="kf-card__desc">
                    Monitor call volume, talk time, acceptance rates, and revenue by agent. Leaderboard views show who's converting. Adjust routing and access based on real data.
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
