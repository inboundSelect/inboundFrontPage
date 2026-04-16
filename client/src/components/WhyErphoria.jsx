const centerImage = 'https://www.figma.com/api/mcp/asset/48f9f773-5363-49e3-9602-90164d9a1b73';

const cards = [
  {
    num: '01',
    title: 'Create your agency profile',
    desc: "Complete your launchpad setup. Add your agency name, branding, and contact details. Your agents see your workspace when they join, first impressions matter.",
    accent: true,
  },
  {
    num: '02',
    title: 'Configure products and pricing',
    desc: "Define the insurance products your agents sell, the states they're licensed in, and the pricing structure for subscriptions, wallet access, and call participation.",
  },
  {
    num: '03',
    title: 'Invite and approve your agents',
    desc: "Send invites to your team. Review onboarding progress, confirm state licensing and product alignment, and approve routing access before any call goes live.",
  },
  {
    num: '04',
    title: 'Start routing inbound calls',
    desc: "Connect your tracked numbers. Set agents to available. The platform handles distribution, billing, session tracking, and reporting automatically from the first call.",
  },
];

function WhyErphoria() {
  return (
    <section className="why-erphoria section">
      <div className="container">
        <div className="why-erphoria__header animate-up">
          <p className="section__label">AGENCY SETUP</p>
          <h2 className="section__heading">From signup to routing live calls in under a day.</h2>
        </div>

        <div className="why-erphoria__rows">
          {/* Row 1 */}
          <div className="why-erphoria__row animate-up delay-1">
            <div className={`why-erphoria__card why-erphoria__card--wide${cards[0].accent ? ' why-erphoria__card--accent' : ''}`}>
              <p className="why-erphoria__number why-erphoria__number--accent">{cards[0].num}</p>
              <div className="why-erphoria__card-body">
                <p className="why-erphoria__card-title">{cards[0].title}</p>
                <p className="why-erphoria__card-desc">{cards[0].desc}</p>
              </div>
            </div>
            <div className="why-erphoria__card">
              <p className="why-erphoria__number">{cards[1].num}</p>
              <div className="why-erphoria__card-body">
                <p className="why-erphoria__card-title">{cards[1].title}</p>
                <p className="why-erphoria__card-desc">{cards[1].desc}</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="why-erphoria__row animate-up delay-2">
            <div className="why-erphoria__card">
              <p className="why-erphoria__number">{cards[2].num}</p>
              <div className="why-erphoria__card-body">
                <p className="why-erphoria__card-title">{cards[2].title}</p>
                <p className="why-erphoria__card-desc">{cards[2].desc}</p>
              </div>
            </div>
            <div className="why-erphoria__image-slot">
              <img src={centerImage} alt="Erphoria platform dashboard" />
            </div>
            <div className="why-erphoria__card">
              <p className="why-erphoria__number">{cards[3].num}</p>
              <div className="why-erphoria__card-body">
                <p className="why-erphoria__card-title">{cards[3].title}</p>
                <p className="why-erphoria__card-desc">{cards[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyErphoria;
