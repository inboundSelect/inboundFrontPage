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
  { label: 'Your routing rules, your call controls', desc: 'You define which agents receive which calls, by state, product, availability, and billing status. The platform enforces your rules automatically.' },
  { label: 'Your pricing, your margins', desc: 'Set subscription tiers, wallet requirements, and per-call pricing. Agents pay what you decide. The platform handles collection, invoicing, and billing portal access.' },
  { label: 'Your marketplace, your inventory', desc: 'Missed and unworked calls belong to your agency. List them, price them, and sell them to agents on your terms. You control what\'s available and at what cost.' },
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
          <div className="section__label-tag">LET'S BE CLEAR</div>
          <h2 className="section__heading">You own the leads. You set the price.<br />You run the team.</h2>
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
              <p className="security__subheading">InboundSelect is the infrastructure layer.</p>
              <p className="security__sub">
                We don't generate your leads, recruit your agents, or set your pricing. You bring
                the operation. We give you the routing engine, billing layer, marketplace, and
                reporting tools to run it without the overhead.
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
