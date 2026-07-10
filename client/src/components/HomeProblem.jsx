const iconPhone = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3h3l1.5 5-2.2 1.6a12 12 0 0 0 6.6 6.6L15.5 15l5 1.5V20a1.6 1.6 0 0 1-1.7 1.6A17 17 0 0 1 3.4 6.7 1.6 1.6 0 0 1 5 5V3Z" />
  </svg>
);
const iconClock = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2M9 2h6" />
  </svg>
);
const iconUserX = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="8" r="4" /><path d="M3 21a7 7 0 0 1 12-4.9M17 15l4 4M21 15l-4 4" />
  </svg>
);
const iconDrain = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M6 6l1.5 10.5A2 2 0 0 0 9.5 18h5a2 2 0 0 0 2-1.5L18 6M9 3h6" /><path d="M12 10v4" />
  </svg>
);
const iconRoute = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.5 6H15a3 3 0 0 1 3 3v6" />
  </svg>
);
const iconUserCheck = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="8" r="4" /><path d="M3 21a7 7 0 0 1 11-5.7M16 17l2 2 4-4" />
  </svg>
);
const iconEarn = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18V9M10 18V5M16 18v-6M22 18H2" />
  </svg>
);

const before = [
  { icon: iconPhone, label: 'Lead comes in', sub: 'New inbound call' },
  { icon: iconClock, label: 'Slow follow-up', sub: 'Callback in hours' },
  { icon: iconUserX, label: 'Prospect moves on', sub: 'Cold in under 5 min' },
  { icon: iconDrain, label: 'Revenue lost', sub: 'Ad dollar wasted' },
];
const after = [
  { icon: iconPhone, label: 'Lead comes in', sub: 'Hits your tracked number' },
  { icon: iconRoute, label: 'Routed in seconds', sub: 'First qualified agent' },
  { icon: iconUserCheck, label: 'Right agent connected', sub: 'Matched to your rules' },
  { icon: iconEarn, label: 'Earned either way', sub: 'Live or Select Marketplace', win: true },
];

const chips = [
  { label: 'Real-time routing', icon: iconRoute },
  { label: 'Right agent matched', icon: iconUserCheck },
  {
    label: 'One dashboard, not five',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  { label: 'Every call tracked', icon: iconPhone },
  {
    label: 'Every dollar accounted for',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9a2.5 2.5 0 0 1 5 0c0 3-5 1.5-5 4.5a2.5 2.5 0 0 0 5 0" />
      </svg>
    ),
  },
];

function Step({ item, variant }) {
  return (
    <div className={`cmp-step${item.win ? ' cmp-step--win' : ''}`}>
      <div className="cmp-step__icon">{item.icon}</div>
      <span className="cmp-step__label">{item.label}</span>
      <span className="cmp-step__sub">{item.sub}</span>
    </div>
  );
}

function Track({ items, variant }) {
  return (
    <div className={`cmp-track cmp-track--${variant}`}>
      {items.map((it, i) => (
        <div key={it.label} className="cmp-track__cell">
          <Step item={it} variant={variant} />
          {i < items.length - 1 && (
            <svg className="cmp-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10h11M11 6l4 4-4 4" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function HomeProblem() {
  return (
    <section className="section hp" id="problem">
      <div className="container">
        <div className="block-head reveal">
          <p className="section__label">THE REAL PROBLEM</p>
          <h2 className="section__heading">
            You&apos;re paying for leads your agents{' '}
            <span className="hp__accent">never</span> talk to.
          </h2>
          <p className="block-head__sub">
            Most agencies running their own marketing bleed money in two places — slow follow-up,
            and a stack of tools that never talk.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="cmp reveal">
          <div className="cmp__col">
            <p className="cmp__head cmp__head--before">Without routing</p>
            <Track items={before} variant="before" />
          </div>
          <div className="cmp__vs"><span>vs</span></div>
          <div className="cmp__col">
            <p className="cmp__head cmp__head--after">With SelectRoute&trade;</p>
            <Track items={after} variant="after" />
          </div>
        </div>

        {/* Two leaks */}
        <div className="hp__leaks">
          <article className="hp__leak reveal d1">
            <div className="hp__leak-viz hp__leak-viz--speed" aria-hidden="true">
              <svg viewBox="0 0 120 120" width="118" height="118" fill="none">
                <circle cx="60" cy="66" r="34" stroke="var(--brand)" strokeWidth="3" opacity="0.28" />
                <circle cx="60" cy="66" r="34" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" strokeDasharray="150 214" transform="rotate(-90 60 66)" />
                <path d="M52 26h16M60 26v-6" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
                <path d="M60 66V48M60 66l14 8" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
                <path d="M18 58l-8-3M22 70l-8 1" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
            <div className="hp__leak-body">
              <div className="hp__leak-meta"><span className="hp__leak-num">01</span><span className="hp__leak-tag">The first leak — speed</span></div>
              <h3 className="hp__leak-title">The follow-up is too slow</h3>
              <p className="hp__leak-text">
                A lead comes in. Follow-up is slow. The prospect moves on. The average inbound lead goes
                cold in under 5 minutes, and most agencies follow up in hours. That gap is where inbound
                revenue dies.
              </p>
              <p className="hp__leak-note">It&apos;s not a lead quality problem.<br />It&apos;s a timing and routing problem.</p>
            </div>
          </article>

          <article className="hp__leak reveal d2">
            <div className="hp__leak-viz hp__leak-viz--stack" aria-hidden="true">
              {['Tracking number', 'Dialer', 'CRM', 'Billing sheet'].map((t) => (
                <div key={t} className="hp__tool">
                  {t}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="var(--text-secondary)" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M4 4l8 8M12 4l-8 8" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="hp__leak-body">
              <div className="hp__leak-meta"><span className="hp__leak-num">02</span><span className="hp__leak-tag">The second leak — the stack</span></div>
              <h3 className="hp__leak-title">Five tools that never talk</h3>
              <p className="hp__leak-text">
                A tracking number in one tool. A dialer in another. A CRM that logs what happened after the
                prospect was already gone. Billing in a spreadsheet. Five tools, none of them talking to
                each other.
              </p>
              <p className="hp__leak-note">By the time you piece it together,<br />the ad dollar is already spent.</p>
            </div>
          </article>
        </div>

        {/* Resolution band */}
        <div className="hp__close dark-band reveal">
          <div className="hp__close-viz" aria-hidden="true">
            <span className="hp__orbit hp__orbit--1" />
            <span className="hp__orbit hp__orbit--2" />
            <span className="hp__close-badge">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l5 5 11-11" /></svg>
            </span>
          </div>
          <div className="hp__close-main">
            <h3 className="hp__close-heading">InboundSelect <span>closes both leaks.</span></h3>
            <p className="hp__close-text">
              The moment a call hits your tracked number, SelectRoute connects it to the right agent. Not in
              an hour. In seconds. And every call, dollar, and outcome lands in one dashboard instead of five.
            </p>
            <div className="hp__chips">
              {chips.map((c) => (
                <span key={c.label} className="hp__chip"><span className="hp__chip-ic">{c.icon}</span>{c.label}</span>
              ))}
            </div>
          </div>
          <div className="hp__close-cta">
            <a href="#features" className="btn btn--fill">See How It Works</a>
            <span className="hp__close-tagline">Stop losing leads in the gap.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProblem;
