const cards = [
  {
    num: '01',
    title: 'Create your agency profile',
    desc: "Complete your Launchpad setup. Add your agency name, branding, and contact details. Your agents see your workspace when they join — first impressions matter.",
    accent: true,
  },
  {
    num: '02',
    title: 'Configure products and pricing',
    desc: "Define the insurance products your agents sell, the states they're licensed in, and your pricing for subscriptions, wallet access, and call acceptance plans.",
  },
  {
    num: '03',
    title: 'Invite and approve your agents',
    desc: "Send invites, referral links, or promo codes to your team. Review onboarding, confirm state licensing and product alignment, and approve routing access before any call goes live.",
  },
  {
    num: '04',
    title: 'Start routing inbound calls',
    desc: "Connect your tracked numbers via Twilio. Set agents to available. The platform handles distribution, billing, session tracking, and reporting automatically from the first call.",
  },
];

// Real Launchpad steps (from the agency onboarding wizard) rendered as an
// on-brand checklist card — replaces the old external Figma dashboard image.
const launchpadSteps = [
  { label: 'Account', done: true },
  { label: 'Twilio connected', done: true },
  { label: 'Subscription active', done: true },
  { label: 'States & coverage', done: true },
  { label: 'Stripe Connect', done: true },
  { label: 'Products & plans', done: false },
];

function LaunchpadVisual() {
  const done = launchpadSteps.filter((s) => s.done).length;
  const pct = Math.round((done / launchpadSteps.length) * 100);
  return (
    <div className="launchpad-card" aria-hidden="true">
      <div className="launchpad-card__head">
        <span className="ripple ripple--routing" />
        <span className="launchpad-card__title">Launchpad setup</span>
        <span className="launchpad-card__pct">{pct}%</span>
      </div>
      <div className="launchpad-card__track"><div className="launchpad-card__fill" style={{ width: `${pct}%` }} /></div>
      <ul className="launchpad-card__list">
        {launchpadSteps.map((s) => (
          <li key={s.label} className={`launchpad-card__step${s.done ? ' is-done' : ''}`}>
            <span className="launchpad-card__check">
              {s.done ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              ) : null}
            </span>
            {s.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AgencyLaunchpad() {
  return (
    <section className="agency-setup section">
      <div className="container">
        <div className="agency-setup__header animate-up">
          <p className="section__label">AGENCY SETUP</p>
          <h2 className="section__heading">From signup to routing live calls in under a day.</h2>
        </div>

        <div className="agency-setup__rows">
          {/* Row 1 */}
          <div className="agency-setup__row animate-up delay-1">
            <div className={`agency-setup__card agency-setup__card--wide${cards[0].accent ? ' agency-setup__card--accent' : ''}`}>
              <p className="agency-setup__number agency-setup__number--accent">{cards[0].num}</p>
              <div className="agency-setup__card-body">
                <p className="agency-setup__card-title">{cards[0].title}</p>
                <p className="agency-setup__card-desc">{cards[0].desc}</p>
              </div>
            </div>
            <div className="agency-setup__card">
              <p className="agency-setup__number">{cards[1].num}</p>
              <div className="agency-setup__card-body">
                <p className="agency-setup__card-title">{cards[1].title}</p>
                <p className="agency-setup__card-desc">{cards[1].desc}</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="agency-setup__row animate-up delay-2">
            <div className="agency-setup__card">
              <p className="agency-setup__number">{cards[2].num}</p>
              <div className="agency-setup__card-body">
                <p className="agency-setup__card-title">{cards[2].title}</p>
                <p className="agency-setup__card-desc">{cards[2].desc}</p>
              </div>
            </div>
            <div className="agency-setup__image-slot">
              <LaunchpadVisual />
            </div>
            <div className="agency-setup__card">
              <p className="agency-setup__number">{cards[3].num}</p>
              <div className="agency-setup__card-body">
                <p className="agency-setup__card-title">{cards[3].title}</p>
                <p className="agency-setup__card-desc">{cards[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgencyLaunchpad;
