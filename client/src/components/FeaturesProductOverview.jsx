const iconFinance = 'https://www.figma.com/api/mcp/asset/494d93db-6c7d-44e2-b99b-72a2cbea8b23';
const iconInventory = 'https://www.figma.com/api/mcp/asset/d8c85116-6405-48f9-becc-aec586bec6d5';
const iconHR = 'https://www.figma.com/api/mcp/asset/27cf4914-9abd-4b19-949c-45d9b87ee751';
const iconSales = 'https://www.figma.com/api/mcp/asset/89601e85-822a-497a-9708-87a96ce34a8b';
const iconPurchasing = 'https://www.figma.com/api/mcp/asset/ee49d82e-1286-46ae-8587-d13fdde5353d';
const iconBI = 'https://www.figma.com/api/mcp/asset/0ed7f2a0-0ec4-4be2-a41a-8a71111d954c';

const modules = [
  {
    icon: iconFinance,
    title: 'Connect your lead sources',
    desc: 'Point your tracked numbers at InboundSelect. Calls from any source route through the platform. Your marketing keeps running exactly as it is.',
    accent: true,
  },
  {
    icon: iconInventory,
    title: 'Build your agent roster',
    desc: 'Invite agents, set state coverage, assign products, approve routing access. You decide who\'s eligible before the first call comes in.',
  },
  {
    icon: iconHR,
    title: 'Set your pricing',
    desc: 'Define subscription tiers, wallet requirements, and per-call costs. Agents know what participation costs upfront. The platform collects on your behalf.',
  },
  {
    icon: iconSales,
    title: 'Go live',
    desc: 'Flip agents to available. Inbound calls start routing through SelectRoute. Every session is tracked, billed, and logged to your dashboard automatically.',
  },
  {
    icon: iconPurchasing,
    title: 'Monetize unworked calls',
    desc: 'List missed or declined calls in your Select Marketplace. Set the price. Other agents buy them. Wasted inventory becomes revenue.',
  },
  {
    icon: iconBI,
    title: 'Track everything',
    desc: 'Call volume, revenue per agent, marketplace earnings, routing performance. All of it feeds into your agency dashboard in real time.',
  },
];

function FeaturesProductOverview() {
  return (
    <section className="erp-overview section">
      <div className="container">
        <div className="erp-overview__header animate-up">
          <div className="section__label-tag">HOW IT WORKS FOR AGENCIES</div>
          <h2 className="section__heading">Set up once. Earn automatically.</h2>
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
