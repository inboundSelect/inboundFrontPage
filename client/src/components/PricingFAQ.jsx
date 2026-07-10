import { useState } from 'react';

const faqImg     = 'https://www.figma.com/api/mcp/asset/c016c2ad-fe2c-4fba-b17d-58920f91c840';
const caretDown  = 'https://www.figma.com/api/mcp/asset/610d06b6-53f8-4925-9d29-035887873528';
const caretUp    = 'https://www.figma.com/api/mcp/asset/bc4a4723-99a8-464a-86e5-e0db205527b1';

const faqs = [
  {
    q: 'Do I need to run my own marketing to use InboundSelect?',
    a: 'As an agent, no. You join an agency already on the platform and receive calls from their existing marketing. As an agency owner, yes. We route the demand you generate. We don\'t generate it for you.',
  },
  {
    q: 'What does it cost to receive a call as an agent?',
    a: 'Pricing is set by the agency you\'re under. You need an active subscription and funded wallet to stay in the routing queue. Exact call costs depend on your agency\'s pricing rules.',
    open: true,
  },
  {
    q: 'How does the agency earn on the platform?',
    a: 'Two ways. Agents pay for subscription access and per-call billing, which you price and the platform collects. And unworked calls listed in your Select Marketplace earn you on resale. You set the price on both.',
  },
  {
    q: 'Can I buy leads if there are no live calls coming in?',
    a: 'Yes. The Select Marketplace is always open. Agencies list unworked calls there. Filter by state, product, and lead age, then buy what fits your current focus.',
  },
  {
    q: 'Is there a contract or long-term commitment?',
    a: 'No. Month to month. You control your wallet balance and subscription status. Adjust your participation whenever you want.',
  },
  {
    q: 'How is this different from platforms that sell inbound calls?',
    a: 'Those platforms generate the demand and charge you $45 to $85 per call, because the per-call fee is their revenue. InboundSelect routes the demand you already generate and charges for platform access. You set what agents pay, and every dollar of call economics stays inside your agency.',
  },
];

function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState(1);

  return (
    <section className="pfaq">
      <div className="pfaq__header">
        <div className="section__label-tag">COMMON QUESTIONS</div>
        <h2 className="pfaq__heading">Straightforward answers.</h2>
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
