function RoleKeyFeatures() {
  return (
    <section className="rkf">
      {/* Header */}
      <div className="rkf__header">
        <div className="rkf__header-left">
          <div className="section__label-tag">Key Features</div>
          <h2 className="rkf__heading">Built for agents who work inbound calls.</h2>
        </div>
        <p className="rkf__desc">
          Every feature in the agent dashboard is designed around one job: helping you spend more time on live conversations with people who are already interested.
        </p>
      </div>

      {/* Row 1 */}
      <div className="rkf__row">
        {/* Wide: Real-Time Call Alerts */}
        <div className="rkf__card rkf__card--wide rkf__card--accent-border">
          <div className="rkf__card-chart-area" style={{ flexWrap: 'wrap', alignContent: 'flex-start' }}>
            <span className="chip chip--state">Instant alert</span>
            <span className="chip">Accept</span>
            <span className="chip chip--live">Connected</span>
            <span className="chip">Session billed</span>
          </div>
          <div className="rkf__card-foot">
            <p className="rkf__benefit">The faster you accept, the better the conversation starts.</p>
            <p className="rkf__card-title">Real-Time Call Alerts</p>
            <p className="rkf__card-desc">When a call routes to you, the alert hits your dashboard immediately. Accept it and you're connected. Every session is tracked and billed automatically.</p>
          </div>
        </div>

        {/* Narrow: Availability Controls */}
        <div className="rkf__card rkf__card--narrow">
          <div className="rkf__icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2.5" y="7.5" width="19" height="9" rx="4.5" />
              <circle cx="16" cy="12" r="2.5" />
            </svg>
          </div>
          <div className="rkf__card-chart-area" style={{ flexWrap: 'wrap', alignContent: 'flex-start', paddingTop: '92px' }}>
            <span className="chip chip--live">Available</span>
            <span className="chip">Unavailable</span>
            <span className="chip">One-tap toggle</span>
          </div>
          <div className="rkf__card-foot">
            <p className="rkf__card-title">Availability Controls</p>
            <p className="rkf__card-desc">Set yourself available or unavailable with one tap. Calls only route to you when you're ready. Step away without missing calls that weren't going to your queue anyway.</p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="rkf__row">
        {/* Narrow: Call Recordings */}
        <div className="rkf__card rkf__card--narrow">
          <div className="rkf__card-chart-area" style={{ flexWrap: 'wrap', alignContent: 'flex-start' }}>
            <span className="chip">Auto-recorded</span>
            <span className="chip">Playback</span>
            <span className="chip">Keep records</span>
          </div>
          <div className="rkf__card-foot">
            <p className="rkf__card-title">Call Recordings</p>
            <p className="rkf__card-desc">Every inbound call is recorded automatically. Access recordings directly from your dashboard after the call ends. Review conversations, improve your approach, keep records.</p>
          </div>
        </div>

        {/* Wide: Marketplace Buying */}
        <div className="rkf__card rkf__card--wide">
          <div className="rkf__card-chart-area" style={{ flexWrap: 'wrap', alignContent: 'flex-start' }}>
            <span className="chip chip--state">By state</span>
            <span className="chip">By product</span>
            <span className="chip">By lead age</span>
            <span className="chip">Export reports</span>
          </div>
          <div className="rkf__card-foot">
            <p className="rkf__benefit">Buy what fits your current focus and work it on your schedule.</p>
            <p className="rkf__card-title">Marketplace Buying</p>
            <p className="rkf__card-desc">Leads that agencies didn't work live are listed for purchase. Filter by state, product, and lead age. Downloadable reports let you export your full activity history anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleKeyFeatures;
