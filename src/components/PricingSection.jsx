import { pricingTiers, priceDisplay } from '../lib/pricingConfig';

function PricingSection({ onOpenWaitlist, onNavigate }) {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing__header animate-up">
          <p className="section__label">PRICING</p>
          <h2 className="section__heading">Pay for what you use. Nothing else.</h2>
          <p className="section__sub">
            Platform fees are waived during beta. Pick the plan that fits your agency — billed monthly, plus
            per-seat and per-minute usage. You set your own margins and pricing rules.
          </p>
        </div>

        <div className="pricing__grid">
          {pricingTiers.map((plan, i) => {
            const price = priceDisplay(plan);
            return (
              <div
                key={plan.name}
                className={`pricing-card animate-up delay-${i + 1}${plan.featured ? ' pricing-card--featured' : ''}`}
              >
                {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}

                <p className="pricing-card__tier">{plan.name}</p>

                <div className="pricing-card__price">
                  {price.amount}<span>{price.period}</span>
                </div>
                {plan.note && <p className="pricing-card__price-note">{plan.note}</p>}

                <p className="pricing-card__desc">{plan.desc}</p>

                <hr className="pricing-card__divider" />

                <ul className="pricing-card__features">
                  {plan.features.slice(0, 5).map((feat) => (
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
                  className={`btn btn--${plan.featured ? 'fill' : 'stroke'}`}
                  onClick={plan.featured ? onOpenWaitlist : () => (onNavigate ? onNavigate('/pricing') : onOpenWaitlist())}
                >
                  {plan.featured ? plan.cta : 'See Full Pricing'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
