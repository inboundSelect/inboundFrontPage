// Icons
const cogIcon        = '/assets/516c17210f6ab93618e165454d002c69819a0d84.svg';
const chartPieIcon   = '/assets/d8a79fe0c2f6d296a868181b3a309d77517d3311.svg';
const cubeIcon       = '/assets/59240e11460c8e4f6b4b17f800795a93a7a9d467.svg';
const buildingIcon   = '/assets/0b298a2abb1b268c14e8d1830598fbfaf971607a.svg';
const userGroupIcon  = '/assets/bce273058baa314bfa69c719b1871f0e5ed687ec.svg';
const clipboardIcon  = '/assets/8aa18104af3e35a78ebecaf257bcab2ef305c733.svg';

// CRM donut chart pieces
const donutA = '/assets/f3baad4208b03663931bff3ea5677de27e7d11a9.svg';
const donutB = '/assets/81bfafb5c6b013483cfee9834b2d40891f4822d9.svg';
const donutC = '/assets/f0e04fa0af2e3cd94a6dfd146bb6c5e554315cd8.svg';
const dot1   = '/assets/051c36d4ebc1c42024c026405950823c87146003.svg';
const dot2   = '/assets/fdca924a60fa06fe1cf1296f4ca98ab733d8d4f4.svg';
const dot3   = '/assets/338d17b1ec1a62a2c21ed0f24574a4d8fa60c52e.svg';

// BI line chart
const lineChart = '/assets/543419cdfe291d6e85c198068a16f416f3841796.svg';

function RoleWhatWeDo() {
  return (
    <section className="role-what">
      {/* Header */}
      <div className="role-what__header">
        <div className="role-what__title-wrap">
          <img src={cogIcon} alt="" className="role-what__cog" />
          <h2 className="role-what__heading">Everything you need to work calls and grow your book.</h2>
        </div>
        <p className="role-what__desc">
          The agent dashboard is your workspace for live call operations, lead management, and performance tracking. Built for agents who want to spend their time on conversations, not admin.
        </p>
      </div>

      {/* Row 1: 3 equal cards */}
      <div className="role-what__row role-what__row--three">
        {[
          { icon: chartPieIcon,  title: 'Live Calls',               desc: 'Get real-time alerts the moment an inbound call is routed to you. Accept from your dashboard and connect instantly. Every session is logged automatically.' },
          { icon: cubeIcon,      title: 'Marketplace',              desc: 'Browse leads listed by agencies. Filter by state, product, and age. Buy individual leads or in bulk. Contact details unlock after purchase.' },
          { icon: buildingIcon,  title: 'Wallet and Transactions',  desc: 'Top up your wallet, track every debit and credit, and manage your subscription from one place. Your full billing history is always visible.' },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="role-what__card">
            <div className="role-what__icon-box">
              <img src={icon} alt="" />
            </div>
            <div>
              <p className="role-what__card-title">{title}</p>
              <p className="role-what__card-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: CRM + BI */}
      <div className="role-what__row role-what__row--two">
        {/* CRM card */}
        <div className="role-what__card role-what__card--wide">
          <div className="role-what__icon-box">
            <img src={userGroupIcon} alt="" />
          </div>
          <div>
            <p className="role-what__card-title">States and Products</p>
            <p className="role-what__card-desc">Update your licensed states and the products you work at any time. Your routing eligibility updates immediately when you save changes. Appointments and client tracking are built in.</p>
          </div>
          {/* Donut chart */}
          <div className="role-what__donut" aria-hidden="true">
            <img className="role-what__donut-a" src={donutA} alt="" />
            <img className="role-what__donut-b" src={donutB} alt="" />
            <img className="role-what__donut-c" src={donutC} alt="" />
            <div className="role-what__dot-badge" style={{ top: '12%', right: '8%' }}>
              <img src={dot1} alt="" className="role-what__dot" />35%
            </div>
            <div className="role-what__dot-badge" style={{ bottom: '12%', left: '8%' }}>
              <img src={dot2} alt="" className="role-what__dot" />47%
            </div>
            <div className="role-what__dot-badge" style={{ bottom: '12%', right: '20%' }}>
              <img src={dot3} alt="" className="role-what__dot" />17%
            </div>
          </div>
          <div className="role-what__fade-left" aria-hidden="true" />
        </div>

        {/* BI card */}
        <div className="role-what__card role-what__card--wide">
          <div className="role-what__icon-box">
            <img src={clipboardIcon} alt="" />
          </div>
          <div>
            <p className="role-what__card-title">Reports and Leaderboard</p>
            <p className="role-what__card-desc">Track your call volume, talk time, marketplace purchases, and conversion activity. See where you rank on the agency leaderboard.</p>
          </div>
          <img className="role-what__line-chart" src={lineChart} alt="" aria-hidden="true" />
          <div className="role-what__green-labels" aria-hidden="true">
            <span style={{ right: '6%', top: '8%' }}>↑ 4.5%</span>
            <span style={{ right: '18%', top: '28%' }}>↑ 2.5%</span>
            <span style={{ right: '32%', top: '14%' }}>↑ 1.5%</span>
            <span style={{ right: '38%', top: '50%' }}>↑ 0.9%</span>
          </div>
          <div className="role-what__fade-right" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default RoleWhatWeDo;
