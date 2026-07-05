const listings = [
  { state: 'TX', product: 'Final Expense', age: '0–7 days',  price: '$XX', calls: 1,  hot: false },
  { state: 'FL', product: 'Medicare Advantage', age: '0–7 days', price: '$XX', calls: 1,  hot: true  },
  { state: 'OH', product: 'Final Expense', age: '8–30 days', price: '$YY', calls: 3,  hot: false },
  { state: 'GA', product: 'Life Insurance', age: '30+ days', price: '$YY', calls: 5,  hot: false },
  { state: 'NC', product: 'Medicare Advantage', age: '0–7 days', price: '$XX', calls: 2,  hot: true  },
  { state: 'AZ', product: 'Final Expense', age: '8–30 days',   price: '$YY', calls: 1,  hot: false },
];

const filterTags = ['All', 'Final Expense', 'Medicare', 'Life Insurance'];

function MarketplaceListings({ onOpenWaitlist }) {
  return (
    <section className="mkt-list">
      <div className="mkt-list__header">
        <div className="section__label-tag">MARKETPLACE PREVIEW</div>
        <h2 className="mkt-list__heading">What agents actually see.</h2>
        <p className="mkt-list__sub">
          Filter by product type, licensed state, and lead age. Buy individual listings or select multiple and purchase in bulk. Prices are set by the listing agency.
        </p>
      </div>

      {/* Mock filter bar */}
      <div className="mkt-list__filters">
        {filterTags.map((tag, i) => (
          <button key={tag} className={`mkt-list__filter${i === 0 ? ' mkt-list__filter--active' : ''}`}>
            {tag}
          </button>
        ))}
        <div className="mkt-list__filter-spacer" />
        <div className="mkt-list__sort">
          Sort: <strong>Newest first</strong>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 5l4 4 4-4" />
          </svg>
        </div>
      </div>

      {/* Listing cards */}
      <div className="mkt-list__grid">
        {listings.map((l, i) => (
          <div key={i} className="mkt-list__card">
            <div className="mkt-list__card-header">
              <div className="mkt-list__card-badges">
                <span className="mkt-list__state">{l.state}</span>
                {l.hot && <span className="mkt-list__hot">Hot</span>}
              </div>
              <p className="mkt-list__product">{l.product}</p>
            </div>
            <div className="mkt-list__card-meta">
              <div className="mkt-list__meta-item">
                <span className="mkt-list__meta-label">Lead age</span>
                <span className="mkt-list__meta-value">{l.age}</span>
              </div>
              <div className="mkt-list__meta-item">
                <span className="mkt-list__meta-label">Calls</span>
                <span className="mkt-list__meta-value">{l.calls}</span>
              </div>
            </div>
            <div className="mkt-list__card-footer">
              <p className="mkt-list__price">{l.price}</p>
              <button className="btn btn--fill btn--sm mkt-list__buy-btn" onClick={onOpenWaitlist}>
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blur overlay — locked */}
      <div className="mkt-list__lock-overlay">
        <div className="mkt-list__lock-card">
          <div className="mkt-list__lock-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="13" width="18" height="12" rx="3" />
              <path d="M9 13V9a5 5 0 0 1 10 0v4" />
              <circle cx="14" cy="19" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <p className="mkt-list__lock-title">Access is exclusive to members</p>
          <p className="mkt-list__lock-desc">The marketplace is only open to approved agencies and active agents on Inbound Select. Not available to the general public.</p>
          <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Get Access</button>
        </div>
      </div>
    </section>
  );
}

export default MarketplaceListings;
