const iconFinance    = 'https://www.figma.com/api/mcp/asset/aaf87789-7458-43ba-ada3-ae08314e2b91';
const iconInventory  = 'https://www.figma.com/api/mcp/asset/a70e776b-a47c-40e0-8518-39183a187f86';
const iconHR         = 'https://www.figma.com/api/mcp/asset/5c034959-328a-459a-857a-48f523f2eedd';
const iconSales      = 'https://www.figma.com/api/mcp/asset/5b207e9e-3c93-45b5-b407-2876970b84ae';
const iconProcure    = 'https://www.figma.com/api/mcp/asset/f180c5a0-d601-4f93-9591-e65c50d10d8b';
const iconBI         = 'https://www.figma.com/api/mcp/asset/ce56cdfa-bff7-43b3-a6b9-28e7d66ed8aa';

const modules = [
  { icon: iconFinance,   title: 'Live Call Routing',               desc: 'Inbound calls from any lead source route to eligible agents automatically. No manual dispatch.', featured: true },
  { icon: iconInventory, title: 'Lead Marketplace',                desc: 'Agencies list unworked calls. Agents buy what fits. Every lead gets a second chance at conversion.' },
  { icon: iconHR,        title: 'Wallet Billing',                  desc: 'Agents fund a wallet for call access. Every transaction is logged. Billing is always transparent.' },
  { icon: iconSales,     title: 'Call Recordings',                 desc: 'Every call session is recorded automatically and accessible from the agent dashboard after the call ends.' },
  { icon: iconProcure,   title: 'Downloadable Reports',            desc: 'Export call history, talk time, marketplace activity, and performance stats anytime.' },
  { icon: iconBI,        title: 'Client and Appointment Tracking', desc: 'Log clients and appointments directly in the platform. Keep your pipeline organized without a separate tool.' },
];

function PricingProductOverview() {
  return (
    <section className="ppov">
      <div className="ppov__header">
        <div className="section__label-tag">WHAT'S INCLUDED</div>
        <h2 className="ppov__heading">Every plan includes the full platform.</h2>
        <p className="ppov__sub">
          There are no stripped-down tiers. Agents get the full agent dashboard. Agencies get the full agency dashboard. The difference is in how you use it, not what you can access.
        </p>
      </div>
      <div className="ppov__grid">
        {modules.map((m) => (
          <div key={m.title} className={`ppov__card${m.featured ? ' ppov__card--featured' : ''}`}>
            <div className="ppov__icon-wrap">
              <img src={m.icon} alt="" className="ppov__icon" />
            </div>
            <div className="ppov__card-body">
              <p className="ppov__card-title">{m.title}</p>
              <p className="ppov__card-desc">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingProductOverview;
