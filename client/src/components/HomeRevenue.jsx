const phoneIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3h3l1.5 5-2.2 1.6a12 12 0 0 0 6.6 6.6L15.5 15l5 1.5V20a1.6 1.6 0 0 1-1.7 1.6A17 17 0 0 1 3.4 6.7 1.6 1.6 0 0 1 5 5V3Z" />
  </svg>
);
const barsIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20V11M12 20V5M19 20v-6" />
  </svg>
);
const personGlyph = (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
    <circle cx="10" cy="6.5" r="3.4" /><path d="M3.5 17a6.5 6.5 0 0 1 13 0Z" />
  </svg>
);

function HomeRevenue() {
  return (
    <section className="section hr" id="revenue">
      <div className="container">
        <div className="block-head reveal">
          <p className="section__label">HOW AGENCIES EARN</p>
          <h2 className="section__heading">
            Two revenue streams. One <span className="hr__accent">inbound</span> call.
          </h2>
          <p className="block-head__sub">
            Most agencies earn on a call once. An agent works it, it either closes or it doesn&apos;t, and the
            value stops there. InboundSelect gives your agency two ways to earn from every call that comes
            through your operation.
          </p>
        </div>

        <div className="hr__grid">
          {/* ── Live Call Revenue ── */}
          <article className="hr__card hr__card--live reveal d1">
            <div className="hr__card-body">
              <div className="hr__card-icon">{phoneIcon}</div>
              <span className="hr__card-num">01</span>
              <h3 className="hr__card-title">Live Call Revenue</h3>
              <span className="hr__card-rule" />
              <p className="hr__card-text">
                Agents pay to participate in your routing queue. You set what that costs, whether that&apos;s a
                subscription fee, per-call billing, or both. The platform collects it automatically. Every
                call your team works generates revenue on your terms.
              </p>
            </div>
            <div className="hr__card-viz" aria-hidden="true">
              <div className="rvz">
                <span className="rvz__ring rvz__ring--1" />
                <span className="rvz__ring rvz__ring--2" />
                <span className="rvz__hub">{phoneIcon}</span>
                <span className="rvz__node rvz__node--1">{personGlyph}</span>
                <span className="rvz__node rvz__node--2">{personGlyph}</span>
                <span className="rvz__node rvz__node--3">{personGlyph}</span>
                <div className="rvz__closed">
                  <div className="rvz__closed-row">
                    <span className="rvz__closed-val">$250</span>
                    <svg width="26" height="16" viewBox="0 0 28 18" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 15l7-7 5 4 8-9" /><path d="M18 3h4v4" />
                    </svg>
                  </div>
                  <span className="rvz__closed-cap">Closed</span>
                </div>
              </div>
            </div>
          </article>

          {/* ── Marketplace Revenue ── */}
          <article className="hr__card hr__card--mkt reveal d2">
            <div className="hr__card-body">
              <div className="hr__card-icon">{barsIcon}</div>
              <span className="hr__card-num">02</span>
              <h3 className="hr__card-title">Marketplace Revenue</h3>
              <span className="hr__card-rule" />
              <p className="hr__card-text">
                Calls your agents don&apos;t work go into your Select Marketplace as inventory. You list them
                at a price you choose. Other agents buy them. What was a missed call becomes a sale.
              </p>
            </div>
            <div className="hr__card-viz" aria-hidden="true">
              <div className="acv">
                <span className="acv__title">Available Calls</span>
                {[{ p: '$45' }, { p: '$60' }, { p: '$35' }].map((r, i) => (
                  <div key={i} className="acv__row">
                    <span className="acv__row-ic">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 3h3l1.5 5-2.2 1.6a12 12 0 0 0 6.6 6.6L15.5 15l5 1.5V20a1.6 1.6 0 0 1-1.7 1.6A17 17 0 0 1 3.4 6.7 1.6 1.6 0 0 1 5 5V3Z" />
                      </svg>
                    </span>
                    <span className="acv__row-bar" />
                    <span className="acv__row-price">{r.p}</span>
                    <span className="acv__row-buy">Buy</span>
                  </div>
                ))}
                <span className="acv__badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 6v12M9 8.5a2.5 2.5 0 0 1 5 0c0 3-5 1.5-5 4.5a2.5 2.5 0 0 0 5 0" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </div>

        <div className="hr__note-bar reveal">
          <span className="hr__note-ic">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <p className="hr__note-text">
            Your marketing generates the demand. <span>InboundSelect</span> makes sure you earn on all of it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeRevenue;
