// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for pricing tiers (used by PricingHero + the home
// PricingSection teaser).
//
// We sell plans to AGENCIES only — there is no agent plan on this site. The
// plan an agency selects IS its monthly subscription (charged agency →
// platform each month); per-seat and per-minute usage are billed on top.
// Figures below mirror the app's plan catalog (frontend PlanPickerStep):
//   Agency     $499/mo     + $30/seat · $0.065/min
//   Enterprise $2,000/mo   50 seats included · $0.06/min · White Label included
//
// A tier renders "$<amount>/<period>" when `amount` is set, otherwise it falls
// back to `priceLabel`. `note` (optional) prints under the price.
// ─────────────────────────────────────────────────────────────────────────

export const pricingNote = 'Final pricing is confirmed during beta onboarding.';

export const pricingTiers = [
  {
    name: 'Agency',
    priceLabel: '',
    amount: 499,
    period: 'mo',
    note: '+ $30/seat · $0.065/min',
    desc: 'For agency owners managing a team. Onboard agents, configure routing rules, set your pricing, and distribute live calls across your operation.',
    features: [
      'Live inbound call routing',
      'Agent onboarding & approval',
      'Custom routing rules',
      'Agency pricing & margin controls',
      'Marketing Hub + lead marketplace',
      'Team performance dashboard',
      'Agency-level reporting & exports',
    ],
    cta: 'Apply for Beta',
    variant: 'agency',
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    priceLabel: '',
    amount: 2000,
    period: 'mo',
    note: '50 seats included · $0.06/min',
    desc: 'For high-volume networks that need scale, better economics, and a branded platform — with white-label included.',
    features: [
      'Everything in Agency',
      '50 agent seats included',
      'White-label branding & domain',
      'Multiple product configurations',
      'Custom state & routing logic',
      'Priority onboarding',
      'Direct access to our team',
    ],
    cta: 'Contact Us',
    variant: 'enterprise',
    featured: false,
  },
];

/** Returns the display price for a tier: "$2,000/mo" if amount set, else the label. */
export function priceDisplay(tier) {
  if (tier.amount != null && tier.amount !== '') {
    const amount = typeof tier.amount === 'number' ? tier.amount.toLocaleString('en-US') : tier.amount;
    return { amount: `$${amount}`, period: tier.period ? `/${tier.period}` : '' };
  }
  return { amount: tier.priceLabel, period: '' };
}
