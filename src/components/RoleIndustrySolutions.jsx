const avatarImg  = 'https://www.figma.com/api/mcp/asset/40f4a0c0-b91a-4ef3-a6e2-41156d50d72e';

const testimonials = [
  {
    name: 'Live Routing',
    modules: 'Final Expense, Medicare, Life Insurance',
    solution: 'Calls from agency-tracked numbers route to you automatically when you match the eligibility criteria. Available status, licensed state, product alignment, and active billing all factor in.',
    quote: '"You get on the phone with people who already decided to call. That\'s a different conversation entirely."',
  },
  {
    name: 'Marketplace Access',
    modules: 'Browse by state, product, and lead age',
    solution: 'Agencies list calls that went unworked. You browse, filter, and buy what fits your book. Pricing is set by the agency. Contact details unlock after purchase.',
    quote: '"Slow days don\'t have to mean zero activity. The marketplace is always there."',
  },
];

function RoleIndustrySolutions({ onOpenWaitlist }) {
  return (
    <section className="role-ind">
      {/* Left */}
      <div className="role-ind__left">
        <div className="role-ind__left-top">
          <div className="section__label-tag">What Agents Get Access To</div>
          <h2 className="role-ind__heading">Live calls, marketplace leads, and full performance visibility.</h2>
        </div>
        <div className="role-ind__left-bottom">
          <p className="role-ind__desc">
            You don't need to run your own marketing to use InboundSelect. Join an agency on the platform, get approved, and start receiving inbound calls from their existing lead sources. Between live calls, browse the marketplace for additional opportunities.
          </p>
          <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Get Agent Access</button>
        </div>
      </div>

      {/* Right: scrollable cards */}
      <div className="role-ind__right">
        <div className="role-ind__cards-wrap">
          <div className="role-ind__fade role-ind__fade--left" />
          <div className="role-ind__cards">
            {testimonials.map((t, i) => (
              <div key={i} className="role-ind__card">
                <div className="role-ind__card-profile">
                  <img src={avatarImg} alt="" className="role-ind__avatar" />
                  <span className="role-ind__name">{t.name}</span>
                </div>
                <div className="role-ind__card-body">
                  <div>
                    <p className="role-ind__modules">{t.modules}</p>
                    <p className="role-ind__solution">{t.solution}</p>
                  </div>
                  <p className="role-ind__quote">{t.quote}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="role-ind__fade role-ind__fade--right" />
        </div>
        <div className="role-ind__progress">
          <div className="role-ind__progress-fill" />
        </div>
      </div>
    </section>
  );
}

export default RoleIndustrySolutions;
