const mockListings = [
  {
    state: 'TX',
    product: 'Final Expense',
    age: '0–7 days',
    price: '$XX',
    hot: false,
  },
  {
    state: 'FL',
    product: 'Medicare Advantage',
    age: '0–7 days',
    price: '$XX',
    hot: true,
    featured: true,
  },
  {
    state: 'CA',
    product: 'Life Insurance',
    age: '8–30 days',
    price: '$YY',
    hot: false,
  },
];

function MarketplaceHero({ onOpenWaitlist }) {
  return (
    <section className="mkt-hero">
      {/* Center copy */}
      <div className="mkt-hero__center">
        <div className="mkt-hero__badge">
          <span className="mkt-hero__badge-dot" />
          Members Only
        </div>
        <h1 className="mkt-hero__heading">
          Buy Unworked Calls.{' '}
          <span className="mkt-hero__heading-grad">Sell What You Can't Cover.</span>
        </h1>
        <p className="mkt-hero__sub">
          The marketplace is only available to approved agencies and active agents on Inbound Select. Agencies list calls that went unworked. Agents browse, filter, and buy what fits their book.
        </p>
        <div className="mkt-hero__btns">
          <button className="btn btn--stroke btn--sm" onClick={onOpenWaitlist}>Apply as an Agency</button>
          <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Get Agent Access</button>
        </div>
      </div>

      {/* Mock listing cards */}
      <div className="mkt-hero__cards">
        {mockListings.map((l, i) => (
          <div key={i} className={`mkt-hero__card${l.featured ? ' mkt-hero__card--featured' : ''}`}>
            <div className="mkt-hero__card-top">
              <div className="mkt-hero__card-tags">
                <span className="mkt-hero__state-badge">{l.state}</span>
                {l.hot && <span className="mkt-hero__hot-badge">Hot</span>}
              </div>
              <p className="mkt-hero__card-product">{l.product}</p>
              <p className="mkt-hero__card-age">{l.age}</p>
            </div>
            <div className="mkt-hero__card-bottom">
              <p className="mkt-hero__card-price">{l.price}</p>
              <button className={`mkt-hero__buy-btn${l.featured ? ' mkt-hero__buy-btn--light' : ''}`} onClick={onOpenWaitlist}>
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketplaceHero;
