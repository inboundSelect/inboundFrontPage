const highlights = [
  'Filter by state, product type, and lead age',
  'Individual and bulk purchase options',
  'Contact details unlock immediately after purchase',
  'Every transaction logged with timestamps',
  'Pricing set directly by the listing agency',
];

function MarketplaceCTA({ onOpenWaitlist }) {
  return (
    <section className="mkt-cta">
      <div className="mkt-cta__inner">
        <div className="mkt-cta__left">
          <div className="section__label-tag">GET STARTED</div>
          <h2 className="mkt-cta__heading">
            Ready to browse the marketplace?
          </h2>
          <p className="mkt-cta__sub">
            The marketplace is exclusive to approved agencies and active agents. It is not open to the general public. Get access by joining InboundSelect as an agency or agent.
          </p>
          <div className="mkt-cta__btns">
            <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Get Agent Access</button>
            <button className="btn btn--stroke btn--sm" onClick={onOpenWaitlist}>Apply as an Agency</button>
          </div>
        </div>

        <div className="mkt-cta__right">
          <ul className="mkt-cta__list">
            {highlights.map((h) => (
              <li key={h} className="mkt-cta__item">
                <span className="mkt-cta__check">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MarketplaceCTA;
