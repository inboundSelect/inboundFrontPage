const steps = [
  {
    num: '01',
    tag: 'LEAD COMES IN',
    title: 'A prospect calls from any source',
    desc: "Meta, Google, a referral, a bought lead — it doesn't matter. The moment the call hits your tracked number, the platform takes over. Your marketing keeps running exactly as it is.",
    visual: (
      <div className="jcard">
        <div className="jcard__head">
          <span className="jcard__title">Inbound call</span>
          <span className="bnr-pill bnr-pill--blue">Tracked number</span>
        </div>
        <div className="jcard__chips">
          {['Meta', 'Google', 'Referral', 'Bought lead'].map((s) => (
            <span key={s} className="jchip">{s}</span>
          ))}
        </div>
        <div className="jcard__flow">
          <span>Final Expense &middot; FL</span>
          <span className="jcard__now">just now</span>
        </div>
      </div>
    ),
  },
  {
    num: '02',
    tag: 'MATCHED',
    title: 'SelectRoute finds the right agent',
    desc: 'State licensing, product eligibility, real-time availability, and billing status are all checked in an instant. The first qualified agent gets the alert.',
    visual: (
      <div className="jcard">
        <div className="jcard__head">
          <span className="jcard__title">SelectRoute&trade; check</span>
          <span className="bnr-pill bnr-pill--blue">Real time</span>
        </div>
        {['FL licensed', 'Product eligible', 'Available now', 'Wallet funded'].map((r) => (
          <div key={r} className="jcard__row">
            {r}
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8.5l3.5 3.5L13 5" />
            </svg>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '03',
    tag: 'CONNECTED',
    title: 'Bridged live in seconds',
    desc: 'The agent accepts and the two are connected while the prospect is still on the line — not an hour later on a cold callback. That gap is where inbound revenue is usually lost.',
    visual: (
      <div className="jcard">
        <div className="jcard__head">
          <span className="jcard__title">Live call</span>
          <span className="bnr-pill bnr-pill--green">Connected</span>
        </div>
        <div className="jcard__big">0:04</div>
        <span className="jcard__cap">Agent accepted &middot; connect time</span>
        <div className="jcard__wave">
          {[10, 22, 14, 30, 18, 26, 12, 24, 16, 28, 14, 20].map((h, i) => (
            <span key={i} style={{ height: `${h}px` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '04',
    tag: 'BILLED & LOGGED',
    title: 'Billed, recorded, and reported',
    desc: 'Every accepted call is billed against your pricing rules, recorded, and logged to your dashboard automatically. No manual invoicing. No spreadsheet. No chasing.',
    visual: (
      <div className="jcard">
        <div className="jcard__head">
          <span className="jcard__title">Call settled</span>
          <span className="bnr-pill bnr-pill--green">Automatic</span>
        </div>
        <div className="jcard__row jcard__row--pay"><strong>Call billed</strong><span>to your rules</span></div>
        <div className="jcard__row">Recording saved
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3.5 3.5L13 5" /></svg>
        </div>
        <div className="jcard__row">Logged to dashboard
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3.5 3.5L13 5" /></svg>
        </div>
      </div>
    ),
  },
];

function HomeJourney({ onOpenWaitlist }) {
  return (
    <section className="section journey" id="live-demo">
      <div className="container">
        <div className="block-head reveal">
          <p className="section__label">SEE IT IN ACTION</p>
          <h2 className="section__heading">Watch a lead become a live conversation</h2>
          <p className="block-head__sub">
            A prospect calls in from any source. The platform finds the right agent, sends a live alert,
            bridges the call, and logs the session — in seconds, with no manual steps.
          </p>
        </div>

        <div className="journey__stack">
          {steps.map((s, i) => (
            <article
              key={s.num}
              className="journey__card"
              style={{ top: `${96 + i * 16}px`, zIndex: i + 1 }}
            >
              <div className="journey__text">
                <div className="journey__meta">
                  <span className="journey__num">{s.num}</span>
                  <span className="journey__tag">{s.tag}</span>
                </div>
                <h3 className="journey__title">{s.title}</h3>
                <p className="journey__desc">{s.desc}</p>
                {i === steps.length - 1 && (
                  <button className="btn btn--fill btn--sm journey__cta" onClick={onOpenWaitlist}>
                    Apply for Beta Access
                  </button>
                )}
              </div>
              <div className="journey__visual" aria-hidden="true">{s.visual}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeJourney;
