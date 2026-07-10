const securityLogos = [
  'https://www.figma.com/api/mcp/asset/330f897e-095c-4365-a2f3-f32915c106ce',
  'https://www.figma.com/api/mcp/asset/264b77de-5733-4b0a-8b8b-0acb00468512',
  'https://www.figma.com/api/mcp/asset/342a1bb8-5d28-4e2a-a748-3e36038d7e2d',
  'https://www.figma.com/api/mcp/asset/84bd9aff-077a-46fd-ae10-7b7e6fbc10ef',
  'https://www.figma.com/api/mcp/asset/a04c79d8-7483-44d6-93f6-aa01a3e9f192',
  'https://www.figma.com/api/mcp/asset/616fe146-6aad-4bb0-a2bb-20fe430fc27d',
  'https://www.figma.com/api/mcp/asset/ba07001f-3182-4a5c-95be-cfc3ea9a2b6d',
];

const certifications = [
  { label: 'Live routing revenue', desc: 'Agents pay for subscription access and per-call billing to stay in your routing queue. You set those prices. The platform collects automatically. Every call your team works generates revenue on your terms.' },
  { label: 'Marketplace revenue', desc: 'Every call your agents don\'t work is inventory, not waste. List it in your Select Marketplace at a price you set. Other agents buy it. Unworked calls become a second revenue line instead of a write-off.' },
  { label: 'Your margin, your rules', desc: 'What agents pay, what marketplace leads cost, what products they access. All yours to define. InboundSelect enforces the rules you create.' },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10l4 4 8-8" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FeaturesEnterpriseSecurity({ onOpenWaitlist }) {
  return (
    <section className="security section">
      <div className="container">
        <div className="security__header animate-up">
          <div className="section__label-tag">YOUR REVENUE MODEL</div>
          <h2 className="section__heading">You earn twice on every inbound call.</h2>
        </div>

        <div className="security__panel animate-up delay-1">
          <div className="security__logo-card">
            <div className="security__logo-grid">
              <div className="security__logo-row">
                {securityLogos.map((src, i) => (
                  <div key={i} className="security__logo-tile">
                    <img src={src} alt="" />
                  </div>
                ))}
              </div>
              <div className="security__logo-row">
                {[...securityLogos].reverse().map((src, i) => (
                  <div key={i} className="security__logo-tile">
                    <img src={src} alt="" />
                  </div>
                ))}
              </div>
              <div className="security__logo-row">
                {securityLogos.slice(0, 5).concat(securityLogos.slice(0, 2)).map((src, i) => (
                  <div key={i} className="security__logo-tile">
                    <img src={src} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="security__logo-fade security__logo-fade--left" />
            <div className="security__logo-fade security__logo-fade--right" />
          </div>

          <div className="security__content">
            <div className="security__content-top">
              <p className="security__subheading">You earn twice on every inbound call.</p>
              <p className="security__sub">
                Most agency owners leave money on the table twice. First, when a lead comes in and
                no agent picks up fast enough. Second, when that unworked call gets deleted from a
                CRM queue and never touched again. Both of those are revenue leaks. InboundSelect
                closes both.
              </p>
            </div>

            <div className="security__cert-card">
              <ul className="security__certs">
                {certifications.map((cert) => (
                  <li key={cert.label} className="security__cert">
                    <span className="security__check"><CheckIcon /></span>
                    <span>
                      <strong>{cert.label}</strong>{' – '}{cert.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn btn--fill" onClick={onOpenWaitlist}>Apply for Beta Access</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesEnterpriseSecurity;
