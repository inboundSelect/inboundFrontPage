const iconMega = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" /><path d="M14 8a5 5 0 0 1 0 8M17 5a9 9 0 0 1 0 14" />
  </svg>
);
const iconHeadset = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 13a8 8 0 0 1 16 0" /><rect x="3" y="13" width="4" height="7" rx="1.5" /><rect x="17" y="13" width="4" height="7" rx="1.5" /><path d="M20 20v1a2 2 0 0 1-2 2h-4" />
  </svg>
);
const iconDb = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);
const iconX = (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>
);
const iconShield = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" /><path d="M9 11.5l2 2 4-4" />
  </svg>
);

const cards = [
  {
    icon: iconMega,
    not: 'a lead vendor',
    title: 'Your lead sources stay yours.',
    desc: 'Keep running your Meta campaigns, your Google ads, your referral network. We connect to your tracked numbers and route what comes in. That\'s it.',
  },
  {
    icon: iconHeadset,
    not: 'a call center',
    title: 'Your agents stay yours.',
    desc: 'Your agent relationships don\'t change. InboundSelect is the system they log into to receive calls, not a replacement for how you manage your team.',
  },
  {
    icon: iconDb,
    not: 'a CRM',
    title: 'Your margin stays yours.',
    desc: 'You set what agents pay. You set what marketplace leads cost. We charge for platform access. We don\'t take a cut of your calls. Any platform that won\'t say that sentence is selling you their infrastructure, not yours.',
  },
];

const feats = [
  { label: <>You control<br />the pricing</>, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg> },
  { label: <>You control<br />the routing</>, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.5 6H15a3 3 0 0 1 3 3v6" /></svg> },
  { label: <>You keep<br />the margin</>, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v9l7 4" /><circle cx="12" cy="12" r="9" /></svg> },
  { label: <>You own<br />the relationships</>, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg> },
];

function EnterpriseSecurity() {
  return (
    <section className="security section dark-band">
      <div className="container">
        <div className="sec__head reveal">
          <p className="section__label-tag">LET&apos;S BE DIRECT</p>
          <h2 className="sec__heading">
            We are <span>not</span> a lead vendor.<br />
            We are <span>not</span> a call center.<br />
            We are <span>not</span> a CRM.
          </h2>
          <div className="sec__divider">
            <span className="sec__divider-badge">{iconShield}</span>
          </div>
        </div>

        <div className="sec__panel reveal d1">
          <div className="sec__intro">
            <h3 className="sec__intro-title">
              Three things we&apos;re not.<br /><span>One thing we are.</span>
            </h3>
            <div className="sec__intro-body">
              <p>Lead vendors control your supply. Call centers control your agents. CRMs manage what already happened.</p>
              <p><span>InboundSelect controls</span> the routing infrastructure and nothing else. You bring the leads, the agents, and the economics.</p>
            </div>
          </div>

          <div className="sec__cards">
            {cards.map((c) => (
              <div key={c.not} className="sec__card">
                <div className="sec__card-top">
                  <span className="sec__card-icon">{c.icon}</span>
                  <span className="sec__card-not"><span className="sec__xbadge">{iconX}</span>We are <span className="sec__not-word">not</span> {c.not}</span>
                </div>
                <p className="sec__card-title">{c.title}</p>
                <p className="sec__card-desc">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="sec__bottom">
            <span className="sec__bottom-shield">{iconShield}</span>
            <div className="sec__bottom-main">
              <h3 className="sec__bottom-heading">We are the infrastructure layer <span>you</span> control.</h3>
              <div className="sec__feats">
                {feats.map((f, i) => (
                  <span key={i} className="sec__feat"><span className="sec__feat-ic">{f.icon}</span>{f.label}</span>
                ))}
              </div>
            </div>
            <a href="#features" className="btn btn--fill sec__bottom-cta">
              See How It Works
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterpriseSecurity;
