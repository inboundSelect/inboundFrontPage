import { pricingTiers, priceDisplay, pricingNote } from '../lib/pricingConfig';

function CheckIcon() {
  return (
    <svg className="pricing-hero__check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Map the config variant to the existing CSS variant classes.
const cssVariant = (v) => (v === 'agent' ? 'free' : v === 'agency' ? 'plus' : 'enterprise');

function PricingHero({ onOpenWaitlist }) {
  return (
    <section className="pricing-hero">
      <div className="aurora" aria-hidden="true" />
      <div className="dot-grid" aria-hidden="true" />

      <div className="pricing-hero__center">
        <div className="pricing-hero__badge-pill">
          <span className="pricing-hero__badge-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          </span>
          Simple, usage-based pricing
        </div>
        <h1 className="pricing-hero__heading">
          Pay for what you use.{' '}
          <span className="pricing-hero__heading-gradient">Nothing else.</span>
        </h1>
        <p className="pricing-hero__sub">
          Platform fees are waived during beta. Pick the plan that fits your agency — billed monthly, plus
          per-seat and per-minute usage. You set your own margins and pricing rules for your team.
        </p>
        <div className="pricing-hero__btns">
          <button className="btn btn--stroke btn--sm" onClick={onOpenWaitlist}>Book a Demo</button>
          <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Apply for Beta Access</button>
        </div>
      </div>

      <div className="pricing-hero__cards">
        {pricingTiers.map((tier) => {
          const price = priceDisplay(tier);
          return (
            <div key={tier.name} className={`pricing-hero__card pricing-hero__card--${cssVariant(tier.variant)}`}>
              {tier.badge && <span className="pricing-card__badge">{tier.badge}</span>}
              <div className="pricing-hero__card-top">
                <p className="pricing-hero__tier-name">{tier.name}</p>
                <p className="pricing-hero__tier-desc">{tier.desc}</p>
              </div>
              <p className="pricing-hero__price">
                <span className="pricing-hero__price-amount">{price.amount}</span>
                {price.period && <span className="pricing-hero__price-period">{price.period}</span>}
              </p>
              {tier.note && <p className="pricing-hero__price-note">{tier.note}</p>}
              <ul className="pricing-hero__features">
                {tier.features.map((f) => (
                  <li key={f}><CheckIcon />{f}</li>
                ))}
              </ul>
              <button
                className={tier.featured ? 'btn btn--fill btn--sm pricing-hero__cta' : 'btn btn--stroke btn--sm pricing-hero__cta'}
                onClick={onOpenWaitlist}
              >
                {tier.cta}
              </button>
            </div>
          );
        })}
      </div>

      <p className="pricing-hero__note">{pricingNote}</p>
    </section>
  );
}

export default PricingHero;
