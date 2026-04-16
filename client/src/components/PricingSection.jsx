const plans = [
  {
    name: 'Agent',
    price: '',
    period: '',
    desc: 'For independent agents working their own calls. Set your states, fund your wallet, and start receiving inbound calls and marketplace leads.',
    features: [],
    cta: 'Get Started',
    ctaType: 'stroke',
    featured: false,
  },
  {
    name: 'Agency',
    price: '',
    period: '',
    desc: 'For owners managing a team. Onboard agents, configure routing rules, set pricing, and distribute live calls across your operation.',
    features: [],
    cta: 'Apply for Beta',
    ctaType: 'fill',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: '',
    period: '',
    desc: 'For larger networks with custom routing needs, multiple products, and dedicated support requirements.',
    features: [],
    cta: 'Contact Us',
    ctaType: 'stroke',
    featured: false,
  },
];

function PricingSection({ onOpenWaitlist }) {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing__header animate-up">
          <p className="section__label">PRICING</p>
          <h2 className="section__heading">Pay for what you use. Nothing else.</h2>
          <p className="section__sub">
            Platform fees are waived during beta. Agents pay for subscription access and wallet-funded call usage. Agencies set their own margins and pricing rules.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`pricing-card animate-up delay-${i + 1}${plan.featured ? ' pricing-card--featured' : ''}`}
            >
              {plan.badge && (
                <div className="pricing-card__badge">{plan.badge}</div>
              )}

              <p className="pricing-card__tier">{plan.name}</p>

              <div className="pricing-card__price">
                {plan.price}<span>{plan.period}</span>
              </div>

              <p className="pricing-card__desc">{plan.desc}</p>

              <hr className="pricing-card__divider" />

              <ul className="pricing-card__features">
                {plan.features.map((feat) => (
                  <li key={feat} className="pricing-card__feature">
                    <span className="pricing-card__check">
                      <svg viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                className={`btn btn--${plan.ctaType}`}
                onClick={plan.ctaType === 'fill' ? onOpenWaitlist : undefined}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
