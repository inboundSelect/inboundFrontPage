const heroBg    = 'https://www.figma.com/api/mcp/asset/b95ff6e0-1865-47ab-8582-4ff27c174f21';
const chartIcon = 'https://www.figma.com/api/mcp/asset/a33efa56-9453-465d-a359-cd9383b62f2c';
const ellipse6  = 'https://www.figma.com/api/mcp/asset/cd6fb3d3-cf06-44de-9920-615537f66152';
const ellipse7  = 'https://www.figma.com/api/mcp/asset/6baae1e6-e5c5-4fa7-af6e-49a56093ecdb';
const ellipse8  = 'https://www.figma.com/api/mcp/asset/52be1104-c1a7-4b99-b035-eff923a04314';
const ellipse9  = 'https://www.figma.com/api/mcp/asset/63c12b36-a8ed-47de-9c81-f82a0a142d9c';
const checkDark  = 'https://www.figma.com/api/mcp/asset/e6970a40-67e8-4e27-995e-8fe875cb4a67';
const checkLight = 'https://www.figma.com/api/mcp/asset/f6d64576-ee03-4bdd-bb90-2733b1be84fb';

const tiers = [
  {
    name: 'Agency',
    price: '$499/month + $30/seat + $1/call connection',
    period: '',
    desc: 'For agencies that want centralized inbound routing, agent management, campaign visibility, and full control over call economics.',
    features: [
      'Marketing Hub and Select Marketplace included',
      'Admin dashboard and team management',
      'Set agent subscriptions, custom billing thresholds, and custom call pricing tiers',
    ],
    variant: 'plus',
    check: checkLight,
    badge: 'Best Fit for Growing Teams',
    cta: 'Apply for Beta',
  },
  {
    name: 'Enterprise',
    price: '$2,000/month',
    period: '',
    desc: 'Built for high-volume agencies that need scale, better economics, and a branded platform experience.',
    features: [
      '50 seats included',
      'White Label included',
      '$0.06/minute usage',
      'Need more than 50 seats? Contact us for custom enterprise pricing.',
    ],
    variant: 'enterprise',
    check: checkDark,
    cta: 'Contact Us',
  },
  {
    name: 'White Label Add-On',
    price: '+$599/month',
    period: '',
    desc: 'For agencies and IMOs that want to present InboundSelect as their own platform.',
    features: [
      'Custom branding',
      'Custom domain',
      'Branded agent-facing experience',
    ],
    variant: 'free',
    check: checkDark,
    cta: 'Contact Us',
  },
];

function PricingHero({ onOpenWaitlist }) {
  return (
    <section className="pricing-hero">
      <img className="pricing-hero__bg" src={heroBg} alt="" aria-hidden="true" />
      <img className="pricing-hero__blob pricing-hero__blob--tl" src={ellipse6} alt="" aria-hidden="true" />
      <img className="pricing-hero__blob pricing-hero__blob--tr" src={ellipse7} alt="" aria-hidden="true" />
      <img className="pricing-hero__blob pricing-hero__blob--bl" src={ellipse8} alt="" aria-hidden="true" />
      <img className="pricing-hero__blob pricing-hero__blob--br" src={ellipse9} alt="" aria-hidden="true" />

      {/* Center content */}
      <div className="pricing-hero__center">
        <div className="pricing-hero__badge-pill">
          <span className="pricing-hero__badge-icon">
            <img src={chartIcon} alt="" />
          </span>
          Pricing
        </div>
        <h1 className="pricing-hero__heading">
          The platform pays for itself the first time an agent{' '}
          <span className="pricing-hero__heading-gradient">closes a call.</span>
        </h1>
        <p className="pricing-hero__sub">
          One closed final expense policy covers months of platform cost. The question isn't what InboundSelect costs. It's what a missed inbound call costs your operation.
        </p>
        <div className="pricing-hero__btns">
          <button className="btn btn--stroke btn--sm" onClick={onOpenWaitlist}>Book a Demo</button>
          <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Apply for Beta Access</button>
        </div>
      </div>

      {/* Pricing tier cards */}
      <div className="pricing-hero__cards">
        {tiers.map((tier) => (
          <div key={tier.name} className={`pricing-hero__card pricing-hero__card--${tier.variant}`}>
            <div className="pricing-hero__card-top">
              {tier.badge && (
                <span className="pricing-hero__badge-pill pricing-hero__card-badge">{tier.badge}</span>
              )}
              <p className="pricing-hero__tier-name">{tier.name}</p>
              <p className="pricing-hero__tier-desc">{tier.desc}</p>
            </div>
            <p className="pricing-hero__price">
              <span className="pricing-hero__price-amount">{tier.price}</span>
              {tier.period && <span className="pricing-hero__price-period">{tier.period}</span>}
            </p>
            <ul className="pricing-hero__features">
              {tier.features.map((f) => (
                <li key={f}>
                  <img src={tier.check} alt="" className="pricing-hero__check" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={tier.variant === 'plus' ? 'btn btn--fill btn--sm pricing-hero__cta' : 'btn btn--stroke-light btn--sm pricing-hero__cta'}
              onClick={onOpenWaitlist}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingHero;
