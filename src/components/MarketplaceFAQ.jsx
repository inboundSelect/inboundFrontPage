import { useState } from 'react';

const faqs = [
  {
    q: 'Who can buy from the marketplace?',
    a: 'Any agent approved by an agency on InboundSelect. You need an active account with a funded wallet. Once you\'re approved and set up, marketplace access is included.',
  },
  {
    q: 'What information is shown before I buy?',
    a: 'You can see the state, product type, lead age, number of calls in the listing, and the asking price. Full contact details — name, phone number, and any form data — release only after purchase.',
  },
  {
    q: 'How are listing prices set?',
    a: 'Agencies set their own prices per listing. There is no platform markup. You pay the price the listing agency set, and the transaction clears directly through your wallet.',
  },
  {
    q: 'Can I buy multiple listings at once?',
    a: 'Yes. You can select individual listings or use the bulk purchase option to buy several at once. All purchases pull from the same wallet balance and appear in your transaction history.',
  },
  {
    q: 'What if I can\'t reach the contact after buying?',
    a: 'Marketplace purchases are final. The platform does not guarantee contact rate on resold leads. Review the lead age and listing details carefully before buying — that information is visible upfront.',
  },
  {
    q: 'Can agencies track what they\'ve sold?',
    a: 'Yes. Agencies have a sold listings view in their dashboard that shows every listing sold, the price it sold for, and the transaction timestamp.',
  },
];

function MarketplaceFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="mkt-faq">
      <div className="mkt-faq__header">
        <div className="section__label-tag">FAQ</div>
        <h2 className="mkt-faq__heading">Common questions about the marketplace.</h2>
        <p className="mkt-faq__sub">
          Everything you need to know before your first purchase or listing.
        </p>
      </div>

      <div className="mkt-faq__list">
        {faqs.map((faq, i) => (
          <div
            key={faq.q}
            className={`mkt-faq__item${openIdx === i ? ' mkt-faq__item--open' : ''}`}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          >
            <div className="mkt-faq__item-header">
              <span className="mkt-faq__q">{faq.q}</span>
              <span className="mkt-faq__icon">
                {openIdx === i ? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M4 9h10" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M9 4v10M4 9h10" />
                  </svg>
                )}
              </span>
            </div>
            {openIdx === i && <p className="mkt-faq__a">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketplaceFAQ;
