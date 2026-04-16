import { useState } from 'react';

const faqImg     = 'https://www.figma.com/api/mcp/asset/c016c2ad-fe2c-4fba-b17d-58920f91c840';
const caretDown  = 'https://www.figma.com/api/mcp/asset/610d06b6-53f8-4925-9d29-035887873528';
const caretUp    = 'https://www.figma.com/api/mcp/asset/bc4a4723-99a8-464a-86e5-e0db205527b1';

const faqs = [
  {
    q: 'Do I need to run my own marketing to use InboundSelect?',
    a: 'No. As an agent, you join an agency already on the platform. They handle the marketing. You receive the calls. If you\'re an agency owner, you connect your existing lead sources to your tracked numbers.',
  },
  {
    q: 'What does it cost to receive a call?',
    a: 'Pricing is set by the agency you\'re under. Agents need an active subscription and a funded wallet to stay in the routing queue. Exact call costs depend on your agency\'s pricing rules.',
    open: true,
  },
  {
    q: 'Can I buy leads if there are no live calls coming in?',
    a: 'Yes. The marketplace is always available. Agencies list unworked calls there. You browse by state, product, and lead age, then purchase what fits your book.',
  },
  {
    q: 'What happens to a call I don\'t accept?',
    a: 'If you don\'t accept an inbound call, it either routes to the next eligible agent or, if unworked, becomes available for the agency to list in the marketplace.',
  },
  {
    q: 'Is there a contract or long-term commitment?',
    a: 'No. Subscription access is month to month. You control your wallet balance and can adjust your participation at any time.',
  },
];

function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState(1);

  return (
    <section className="pfaq">
      <div className="pfaq__header">
        <div className="section__label-tag">COMMON QUESTIONS</div>
        <h2 className="pfaq__heading">Frequently asked questions</h2>
        <p className="pfaq__sub">
          Straightforward answers about how the platform and billing work.
        </p>
      </div>
      <div className="pfaq__body">
        <div className="pfaq__image-wrap">
          <img src={faqImg} alt="FAQ illustration" className="pfaq__image" />
        </div>
        <div className="pfaq__list">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`pfaq__item${openIdx === i ? ' pfaq__item--open' : ''}`}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className="pfaq__item-header">
                <span className="pfaq__item-q">{faq.q}</span>
                <img
                  src={openIdx === i ? caretUp : caretDown}
                  alt=""
                  className="pfaq__caret"
                />
              </div>
              {openIdx === i && (
                <p className="pfaq__item-a">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingFAQ;
