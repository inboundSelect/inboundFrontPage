const heroBg = 'https://www.figma.com/api/mcp/asset/dfb178cf-a412-49e9-9c94-fc42cdc9d3b3';

const logos = [
  'https://www.figma.com/api/mcp/asset/8b7d5f86-f34f-4061-a6f7-b0c0899aa3f8',
  'https://www.figma.com/api/mcp/asset/0e027096-e1a7-43b4-a7bf-4bf30426eab1',
  'https://www.figma.com/api/mcp/asset/289d8efc-f904-4c8a-a1eb-7aeacd118c59',
  'https://www.figma.com/api/mcp/asset/61eff555-bad0-42a5-aa50-e64c037f663a',
  'https://www.figma.com/api/mcp/asset/45d87519-7b6a-46cd-9346-4adf29e47e4e',
  'https://www.figma.com/api/mcp/asset/dbd16e79-31b6-4c52-b1be-f32c84e939c0',
  'https://www.figma.com/api/mcp/asset/ff519444-881d-4992-90d3-07b34e64545d',
  'https://www.figma.com/api/mcp/asset/6f0bae5c-4800-4273-8891-f90595ffab28',
  'https://www.figma.com/api/mcp/asset/0e027096-e1a7-43b4-a7bf-4bf30426eab1',
];

const logos2 = [
  'https://www.figma.com/api/mcp/asset/ff519444-881d-4992-90d3-07b34e64545d',
  'https://www.figma.com/api/mcp/asset/dbd16e79-31b6-4c52-b1be-f32c84e939c0',
  'https://www.figma.com/api/mcp/asset/45d87519-7b6a-46cd-9346-4adf29e47e4e',
  'https://www.figma.com/api/mcp/asset/8b7d5f86-f34f-4061-a6f7-b0c0899aa3f8',
  'https://www.figma.com/api/mcp/asset/0e027096-e1a7-43b4-a7bf-4bf30426eab1',
  'https://www.figma.com/api/mcp/asset/61eff555-bad0-42a5-aa50-e64c037f663a',
  'https://www.figma.com/api/mcp/asset/289d8efc-f904-4c8a-a1eb-7aeacd118c59',
  'https://www.figma.com/api/mcp/asset/6f0bae5c-4800-4273-8891-f90595ffab28',
  'https://www.figma.com/api/mcp/asset/61eff555-bad0-42a5-aa50-e64c037f663a',
  'https://www.figma.com/api/mcp/asset/dbd16e79-31b6-4c52-b1be-f32c84e939c0',
];

function FeaturesHero({ onOpenWaitlist }) {
  return (
    <section className="features-hero">
      <img className="features-hero__bg" src={heroBg} alt="" aria-hidden="true" />

      <div className="features-hero__inner">
        <div className="features-hero__badge">
          <div className="features-hero__badge-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.5 14.25v2.25m3-4.5v4.5m3-9v9m3-12v12M3.375 19.5h17.25c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125H3.375C2.754 2.25 2.25 2.754 2.25 3.375v15c0 .621.504 1.125 1.125 1.125z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>For Agency Owners and IMOs</span>
        </div>

        <h1 className="features-hero__heading">
          Give Your Agents Inbound{' '}
          <span className="features-hero__heading-gradient">Calls to Work</span>
        </h1>

        <p className="features-hero__sub">
          You bring the team and the marketing. InboundSelect handles live call routing, agent
          billing, marketplace resale, and reporting, from the moment a prospect calls to the
          final outcome on your agency dashboard.
        </p>

        <div className="features-hero__btns">
          <button className="btn btn--stroke" onClick={onOpenWaitlist}>Apply for Beta Access</button>
          <button className="btn btn--fill" onClick={onOpenWaitlist}>See How It Works</button>
        </div>
      </div>

      <div className="features-hero__logos">
        <div className="features-hero__logos-row">
          {logos.map((src, i) => (
            <div key={i} className="features-hero__logo-tile">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
        <div className="features-hero__logos-row">
          {logos2.map((src, i) => (
            <div key={i} className="features-hero__logo-tile">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesHero;
