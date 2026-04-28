const steps = [
  {
    num: '01',
    title: 'Agencies List Unworked Calls',
    desc: 'Calls that never got answered or went cold go into the marketplace. Agencies set the price, pick the category, and publish. Listings are live within minutes.',
  },
  {
    num: '02',
    title: 'Agents Browse and Filter',
    desc: 'Filter by licensed state, product type, and lead age. Review call metadata before committing. Buy a single listing or purchase in bulk when you find a good match.',
  },
  {
    num: '03',
    title: 'Contact Details Unlock at Purchase',
    desc: 'Once you buy, the prospect\'s contact information releases immediately. Call right away or log it for follow-up. Every purchase is timestamped in your transaction history.',
  },
];

function MarketplaceHowItWorks() {
  return (
    <section className="mkt-how">
      <div className="mkt-how__header">
        <div className="section__label-tag">HOW IT WORKS</div>
        <h2 className="mkt-how__heading">From listing to live conversation.</h2>
        <p className="mkt-how__sub">
          The marketplace connects agencies with surplus leads to agents actively looking for more calls. No middleman. No mystery pricing.
        </p>
      </div>
      <div className="mkt-how__steps">
        {steps.map((s) => (
          <div key={s.num} className="mkt-how__step">
            <span className="mkt-how__step-num">{s.num}</span>
            <h3 className="mkt-how__step-title">{s.title}</h3>
            <p className="mkt-how__step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketplaceHowItWorks;
