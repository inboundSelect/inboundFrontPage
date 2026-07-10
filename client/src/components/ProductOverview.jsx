const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="8" height="8" rx="2"/>
        <rect x="12" y="2" width="8" height="8" rx="2"/>
        <rect x="2" y="12" width="8" height="8" rx="2"/>
        <rect x="12" y="12" width="8" height="8" rx="2" opacity="0.4"/>
      </svg>
    ),
    title: 'Any Lead Source',
    desc: 'Meta forms, Google ads, referrals, bought leads. It doesn\'t matter where the call comes from. If it hits your tracked number, the platform picks it up and routes it. Your marketing keeps running exactly as it is.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M11 7v4l3 2"/>
      </svg>
    ),
    title: 'SelectRoute™ Real-Time Routing',
    desc: 'SelectRoute checks agent availability, state licensing, product eligibility, and billing status in real time. First qualified agent gets the alert. They accept. Call connects. The whole thing takes seconds.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2L13.5 8H20L14.5 12L16.5 18L11 14L5.5 18L7.5 12L2 8H8.5L11 2Z"/>
      </svg>
    ),
    title: 'Automatic Billing',
    desc: 'Every accepted call is billed against your pricing rules. Agents hold an active subscription and funded wallet to stay in the queue. No manual invoicing. No chasing payments.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3"/>
        <circle cx="14" cy="14" r="3"/>
        <path d="M11 8h3a3 3 0 0 1 0 6" opacity="0.5"/>
      </svg>
    ),
    title: 'Select Marketplace™ Recovery',
    desc: 'Calls that didn\'t get worked aren\'t write-offs. List them in your Select Marketplace. Other agents buy them at a price you set. Unworked inventory becomes a second revenue line.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17L8 11L12 14L16 8L20 5"/>
        <circle cx="20" cy="5" r="2" fill="var(--brand)" stroke="none"/>
      </svg>
    ),
    title: 'Full Reporting',
    desc: 'Call volume, revenue per lead source, agent performance, marketplace earnings. Every number feeds into reporting you can act on.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="16" height="12" rx="2"/>
        <path d="M7 6V5a4 4 0 0 1 8 0v1"/>
        <circle cx="11" cy="12" r="1.5" fill="var(--brand)" stroke="none"/>
      </svg>
    ),
    title: 'Your Rules',
    desc: 'Pricing, routing logic, agent access, product configuration. Every decision is yours to make. InboundSelect enforces what you set up.',
  },
];

function ProductOverview() {
  return (
    <section className="product-overview section" id="features">
      <div className="container">
        <div className="product-overview__header animate-up">
          <p className="section__label">HOW IT WORKS</p>
          <h2 className="section__heading">Inbound lead to billed conversation.<br />No manual steps.</h2>
          <p className="section__sub">
            Whatever lead source you're running, the moment a prospect calls your tracked number the platform takes over. Routing, billing, recording, and reporting happen automatically.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className={`feature-card animate-up delay-${i + 1}`}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductOverview;
