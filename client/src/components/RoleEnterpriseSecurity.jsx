// Certification logo tiles (rows of icons)
const certISO   = 'https://www.figma.com/api/mcp/asset/03fbd43c-e8f9-476d-82cb-7d1e2ce2ac8e';
const certSOC2  = 'https://www.figma.com/api/mcp/asset/06315e44-3535-4927-9a80-65d7b9dc90f5';
const certGDPR  = 'https://www.figma.com/api/mcp/asset/72860069-09f3-415e-abd2-5703bcaa2ff3';
const certHIPAA = 'https://www.figma.com/api/mcp/asset/07bc8cd9-419b-48ec-88f5-4ddbc2eca782';
const certData  = 'https://www.figma.com/api/mcp/asset/86ba4852-ca3d-4ab2-9ca1-fed6abfdb020';
const certPCI   = 'https://www.figma.com/api/mcp/asset/85e1dc14-1c6c-4da0-b0ff-6af56e191d13';
const certAWS   = 'https://www.figma.com/api/mcp/asset/b8910a06-c3ae-4cf2-be60-27f799093a31';
const certOther = 'https://www.figma.com/api/mcp/asset/324bd306-e520-423c-b982-c96ba751dfa5';
// Check icon
const checkIcon = 'https://www.figma.com/api/mcp/asset/e1be464e-c21c-4197-803d-fdbe7466a232';

const logoRows = [
  [certISO, certSOC2, certGDPR, certHIPAA, certData, certPCI, certAWS],
  [certGDPR, certPCI, certHIPAA, certData, certAWS, certISO, certOther, certSOC2],
  [certGDPR, certSOC2, certAWS, certData, certISO, certPCI, certHIPAA],
];

const certs = [
  { label: 'Call recordings saved automatically.', detail: 'Every inbound call session is recorded and accessible from your dashboard after the call ends.' },
  { label: 'Download your reports anytime.', detail: 'Export call history, talk time, Marketplace purchases, and performance stats whenever you need them.' },
  { label: 'Live dashboard updates.', detail: 'Your call alerts, wallet balance, and routing status refresh in real time without reloading the page.' },
  { label: 'Full transaction history.', detail: 'Every wallet top-up, call charge, and Marketplace purchase is logged with timestamps so your billing is always clear.' },
];

function RoleEnterpriseSecurity({ onOpenWaitlist }) {
  return (
    <section className="role-sec">
      {/* Header */}
      <div className="role-sec__header">
        <div className="section__label-tag">Platform Reliability</div>
        <h2 className="role-sec__heading">Everything is tracked. Everything is accessible.</h2>
      </div>

      {/* Content panel */}
      <div className="role-sec__panel">
        {/* Left: logo grid */}
        <div className="role-sec__logos">
          {logoRows.map((row, ri) => (
            <div key={ri} className="role-sec__logo-row">
              {row.map((src, li) => (
                <div key={li} className="role-sec__logo-tile">
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          ))}
          <div className="role-sec__fade-left" aria-hidden="true" />
          <div className="role-sec__fade-right" aria-hidden="true" />
        </div>

        {/* Right: text + cert list + button */}
        <div className="role-sec__right">
          <div className="role-sec__right-head">
            <h3 className="role-sec__subheading">Built for how agents actually work.</h3>
            <p className="role-sec__subdesc">Every call, transaction, and session is logged automatically. Your records are always there when you need them.</p>
          </div>

          <div className="role-sec__cert-list">
            {certs.map(c => (
              <div key={c.label} className="role-sec__cert-item">
                <img src={checkIcon} alt="" className="role-sec__check" />
                <p>
                  <strong>{c.label}&nbsp;</strong>
                  <span>{c.detail}</span>
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default RoleEnterpriseSecurity;
