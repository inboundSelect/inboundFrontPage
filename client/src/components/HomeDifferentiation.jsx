const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2v18" />
        <path d="M15 6H9a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5H7" />
      </svg>
    ),
    title: 'You set the price',
    desc: 'What agents pay per call, per subscription, and per marketplace listing is your call. Set it once. The platform collects it automatically.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="6" r="2.5" />
        <path d="M5 8.5V15a2 2 0 0 0 2 2h6" />
        <circle cx="15" cy="17" r="2.5" />
        <path d="M17 6l2.5 2.5L17 11" />
        <path d="M8 8.5h8.5a3 3 0 0 1 3 0" opacity="0.4" />
      </svg>
    ),
    title: 'You control the routing',
    desc: 'SelectRoute sends calls to agents based on state, product, availability, and billing status. The right call reaches the right agent before the lead goes cold.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5l7-3Z" />
        <path d="M8 11l2 2 4-4" />
      </svg>
    ),
    title: 'You keep the margin',
    desc: 'Your leads. Your agents. Your revenue. InboundSelect is the layer underneath your operation, not a partner taking a cut of it.',
  },
];

function HomeDifferentiation() {
  return (
    <section className="section" id="differentiation">
      <div className="container">
        <div className="block-head reveal">
          <p className="section__label">WHAT MAKES US DIFFERENT</p>
          <h2 className="section__heading">Every other platform sells you calls.<br />We give you the infrastructure to own them.</h2>
          <p className="block-head__sub">
            Lead vendors control your supply and charge you per lead whether it closes or not.<br />
            Call platforms keep the economics, because their revenue is the per-call fee you pay them. CRMs
            log what happened after you already lost the prospect.
          </p>
        </div>

        <div className="hd__quote reveal">
          <div className="hd__quote-text">
            <p>
              Some of those platforms now call themselves infrastructure. Here is the test:{' '}
              <strong>if you can&apos;t set what your agents pay, it isn&apos;t your infrastructure. It&apos;s theirs.</strong>
            </p>
          </div>
          <div className="hd__metric">
            <span className="hd__metric-num">$45&ndash;85</span>
            <span className="hd__metric-cap">per call on platforms that sell calls &mdash; the per-call fee is their revenue</span>
          </div>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className={`feature-card reveal d${i + 1}`}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="hr__note reveal" style={{ marginTop: 'clamp(32px, 4vw, 44px)' }}>
          InboundSelect passes that test. <span>Your agency earns. Your agents earn.</span><br />Every number in between is yours to set.
        </p>
      </div>
    </section>
  );
}

export default HomeDifferentiation;
