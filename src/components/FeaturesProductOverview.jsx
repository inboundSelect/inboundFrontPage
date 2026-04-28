const iconFinance = 'https://www.figma.com/api/mcp/asset/494d93db-6c7d-44e2-b99b-72a2cbea8b23';
const iconInventory = 'https://www.figma.com/api/mcp/asset/d8c85116-6405-48f9-becc-aec586bec6d5';
const iconHR = 'https://www.figma.com/api/mcp/asset/27cf4914-9abd-4b19-949c-45d9b87ee751';
const iconSales = 'https://www.figma.com/api/mcp/asset/89601e85-822a-497a-9708-87a96ce34a8b';
const iconPurchasing = 'https://www.figma.com/api/mcp/asset/ee49d82e-1286-46ae-8587-d13fdde5353d';
const iconBI = 'https://www.figma.com/api/mcp/asset/0ed7f2a0-0ec4-4be2-a41a-8a71111d954c';

const modules = [
  {
    icon: iconFinance,
    title: 'Set Up Your Agency',
    desc: 'Complete your launchpad setup. Configure your agency name, branding, and workspace. Define the products you support, the states your agents can work, and your call pricing rules.',
    accent: true,
  },
  {
    icon: iconInventory,
    title: 'Invite Your Agent Team',
    desc: 'Send invites to your agents. They complete onboarding through their own launchpad. You review profiles, confirm state licensing, and approve routing access before calls go live.',
  },
  {
    icon: iconHR,
    title: 'Configure Pricing and Plans',
    desc: 'Define subscription tiers, wallet minimums, and per-call pricing for your agency. Agents activate billing through the platform. You control access. The system enforces it.',
  },
  {
    icon: iconSales,
    title: 'Go Live with Routing',
    desc: 'Connect your tracked phone numbers. Set agents to available. Inbound calls are distributed in real time to eligible agents based on your routing rules. No manual dispatch.',
  },
  {
    icon: iconPurchasing,
    title: 'Monitor and Manage',
    desc: 'Watch live call activity, track agent performance, manage wallet funding, and handle refund requests, all from your agency dashboard. Full operational visibility in one place.',
  },
  {
    icon: iconBI,
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
            InboundSelect automates the routing so you can focus on growing the team.
          </p>
        </div>

        <div className="erp-overview__grid">
          {modules.map((mod, i) => (
            <div
              key={mod.title}
              className={`erp-card animate-up delay-${(i % 3) + 1}${mod.accent ? ' erp-card--accent' : ''}`}
            >
              <div className="erp-card__icon">
                <img src={mod.icon} alt="" />
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
