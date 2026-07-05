const cards = [
  {
    title: 'Set up your profile',
    desc: "Complete onboarding, add your license details, and configure which states you're licensed to sell in. This determines which calls you're eligible to receive.",
  },
  {
    title: 'Choose your products',
    desc: "Select the insurance products you work — final expense, Medicare, life insurance, or others your agency supports. Calls only route to you when there's a match.",
  },
  {
    title: 'Fund your wallet and activate',
    desc: "Add funds to your wallet and activate your subscription. This is what keeps you in the routing queue. No active billing, no incoming calls.",
  },
  {
    title: 'Accept live calls',
    desc: "When a matching inbound call comes in, you get a live alert on your dashboard. Accept it and you're connected — the call is tracked and billed automatically.",
  },
];

// On-brand "live alert" card replacing the old external Figma image.
function AlertVisual() {
  return (
    <div className="agent-start-card" aria-hidden="true">
      <div className="agent-start-card__head">
        <span className="ripple" />
        <span className="agent-start-card__title">Incoming call</span>
        <span className="mono agent-start-card__timer">00:04</span>
      </div>
      <div className="agent-start-card__meta">
        <span className="chip chip--state">FL</span>
        <span className="chip">Final Expense</span>
        <span className="chip chip--live">Live</span>
      </div>
      <div className="agent-start-card__plans">
        <button className="agent-start-card__plan is-active" type="button" tabIndex={-1}>30s</button>
        <button className="agent-start-card__plan" type="button" tabIndex={-1}>60s</button>
        <button className="agent-start-card__plan" type="button" tabIndex={-1}>90s</button>
      </div>
      <div className="agent-start-card__accept">Accept &amp; connect</div>
    </div>
  );
}

function AgentGettingStarted() {
  return (
    <section className="agent-steps">
      <div className="agent-steps__header">
        <p className="section__label">HOW IT WORKS FOR AGENTS</p>
        <h2 className="agent-steps__heading">From signup to your first live call.</h2>
      </div>

      <div className="agent-steps__grid">
        {/* Row 1: wide + narrow */}
        <div className="agent-steps__row">
          <div className="agent-steps__card agent-steps__card--wide agent-steps__card--accent-border">
            <span className="agent-steps__num agent-steps__num--pink">01</span>
            <div className="agent-steps__card-body">
              <p className="agent-steps__card-title">{cards[0].title}</p>
              <p className="agent-steps__card-desc">{cards[0].desc}</p>
            </div>
          </div>
          <div className="agent-steps__card agent-steps__card--narrow">
            <span className="agent-steps__num agent-steps__num--black">02</span>
            <div className="agent-steps__card-body">
              <p className="agent-steps__card-title">{cards[1].title}</p>
              <p className="agent-steps__card-desc">{cards[1].desc}</p>
            </div>
          </div>
        </div>

        {/* Row 2: narrow + visual + narrow */}
        <div className="agent-steps__row">
          <div className="agent-steps__card agent-steps__card--narrow">
            <span className="agent-steps__num agent-steps__num--black">03</span>
            <div className="agent-steps__card-body">
              <p className="agent-steps__card-title">{cards[2].title}</p>
              <p className="agent-steps__card-desc">{cards[2].desc}</p>
            </div>
          </div>
          <div className="agent-steps__img-wrap">
            <AlertVisual />
          </div>
          <div className="agent-steps__card agent-steps__card--narrow">
            <span className="agent-steps__num agent-steps__num--black">04</span>
            <div className="agent-steps__card-body">
              <p className="agent-steps__card-title">{cards[3].title}</p>
              <p className="agent-steps__card-desc">{cards[3].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgentGettingStarted;
