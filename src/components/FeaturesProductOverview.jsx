const modules = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 20V6l7-3 7 3v14" />
        <path d="M2 20h20" />
        <path d="M9 20v-5h6v5" />
        <path d="M8 9h.01M12 9h.01M16 9h.01" />
      </svg>
    ),
    title: 'Set Up Your Agency',
    desc: 'Complete your launchpad setup. Configure your agency name, branding, and workspace. Define the products you support, the states your agents can work, and your call pricing rules.',
    accent: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
    title: 'Invite Your Agent Team',
    desc: 'Send invites to your agents. They complete onboarding through their own launchpad. You review profiles, confirm state licensing, and approve routing access before calls go live.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 12l-8.5 8.5a2 2 0 0 1-2.8 0L3 15V4h11z" />
        <circle cx="8.5" cy="8.5" r="1.4" />
        <path d="M11 12v5M9 14h2.6a1.2 1.2 0 0 1 0 2.4H9" />
      </svg>
    ),
    title: 'Configure Pricing and Plans',
    desc: 'Define subscription tiers, wallet minimums, and per-call pricing for your agency. Agents activate billing through the platform. You control access. The system enforces it.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <path d="M6 8.5v3a4 4 0 0 0 4 4h5.5" />
        <path d="M15.5 6H8.5" />
      </svg>
    ),
    title: 'Go Live with Routing',
    desc: 'Connect your tracked phone numbers. Set agents to available. Inbound calls are distributed in real time to eligible agents based on your routing rules. No manual dispatch.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 15l3.5-4 3 2.5L21 7" />
        <path d="M21 11V7h-4" />
      </svg>
    ),
    title: 'Monitor and Manage',
    desc: 'Watch live call activity, track agent performance, manage wallet funding, and handle refund requests, all from your agency dashboard. Full operational visibility in one place.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2 3h3l2.4 12.2a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.2L21.5 7H6" />
        <path d="M13 9v4M11 11h4" />
      </svg>
    ),
    title: 'Monetize Every Call',
    desc: 'Missed and unworked calls go into your marketplace inventory. Set listing prices, apply filters by state and product, and let agents purchase leads that match their book.',
  },
];

function FeaturesProductOverview() {
  return (
    <section className="erp-overview section">
      <div className="container">
        <div className="erp-overview__header animate-up">
          <div className="section__label-tag">How It Works For Agencies</div>
          <h2 className="section__heading">Set up once. Route calls automatically.</h2>
          <p className="section__sub">
            Most agency owners spend more time managing lead distribution than running their business.
            Inbound Select automates the routing so you can focus on growing the team.
          </p>
        </div>

        <div className="erp-overview__grid">
          {modules.map((mod, i) => (
            <div
              key={mod.title}
              className={`erp-card animate-up delay-${(i % 3) + 1}${mod.accent ? ' erp-card--accent' : ''}`}
            >
              <div className="erp-card__icon">
                {mod.icon}
              </div>
              <div className="erp-card__body">
                <p className="erp-card__title">{mod.title}</p>
                <p className="erp-card__desc">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesProductOverview;
