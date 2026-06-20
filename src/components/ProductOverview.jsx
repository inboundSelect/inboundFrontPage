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
    desc: 'Running Meta forms, Google ads, a referral network, or buying leads from a vendor? It doesn\'t matter. If a prospect calls your tracked number, the platform picks it up and routes it.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M11 7v4l3 2"/>
      </svg>
    ),
    title: 'Real-Time Routing',
    desc: 'The system checks which agents are available, licensed in that state, and billing-ready the moment a call comes in. The right agent gets the alert. They accept. The call connects.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2L13.5 8H20L14.5 12L16.5 18L11 14L5.5 18L7.5 12L2 8H8.5L11 2Z"/>
      </svg>
    ),
    title: 'Wallet and Subscription Billing',
    desc: 'Agents fund a wallet and hold an active subscription to stay in the routing queue. Pricing is enforced by the platform automatically. No spreadsheets, no manual tracking.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3"/>
        <circle cx="14" cy="14" r="3"/>
        <path d="M11 8h3a3 3 0 0 1 0 6" opacity="0.5"/>
      </svg>
    ),
    title: 'Agency Controls',
    desc: 'Set your products, pricing rules, state coverage, and agent access from one dashboard. You decide who gets what calls and at what price.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="16" height="12" rx="2"/>
        <path d="M7 6V5a4 4 0 0 1 8 0v1"/>
        <circle cx="11" cy="12" r="1.5" fill="var(--brand)" stroke="none"/>
      </svg>
    ),
    title: 'Lead Marketplace',
    desc: 'Calls that didn\'t connect or went unworked don\'t have to die. List them in the marketplace. Other agents buy what fits their book. Nothing gets wasted.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17L8 11L12 14L16 8L20 5"/>
        <circle cx="20" cy="5" r="2" fill="var(--brand)" stroke="none"/>
      </svg>
    ),
    title: 'Full Reporting',
    desc: 'Track call volume, agent performance, wallet activity, and lead source outcomes. Know exactly which part of your operation is working and which isn\'t.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="16" height="15" rx="2"/>
        <path d="M3 8h16M8 2v4M14 2v4"/>
        <path d="M8.5 13.5l2 2 3.5-4" />
      </svg>
    ),
    title: 'Appointments & Calendar Sync',
    desc: 'Right after a call, agents book a follow-up appointment and it syncs to their Google Calendar automatically. Connecting Google Calendar is optional and used only to add and manage these appointment events.',
  },
];

function ProductOverview() {
  return (
    <section className="product-overview section" id="features">
      <div className="container">
        <div className="product-overview__header animate-up">
          <p className="section__label">HOW IT WORKS</p>
          <h2 className="section__heading">From inbound lead to live conversation. Automatically.</h2>
          <p className="section__sub">
            Most agencies lose leads in the gap between form fill and first call. InboundSelect closes that gap. Your lead comes in, your agent gets a live call routed to them before the prospect moves on.
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
