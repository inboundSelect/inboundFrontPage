function Icon({ d }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {d}
    </svg>
  );
}

const liveCalls = <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></>;
const cart = <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></>;
const wallet = <><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><circle cx="17" cy="14" r="1.2" fill="currentColor" stroke="none"/></>;
const states = <><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></>;
const chart = <><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></>;

function RoleWhatWeDo() {
  return (
    <section className="role-what">
      <div className="role-what__header">
        <div className="role-what__title-wrap">
          <span className="role-what__cog"><Icon d={<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>} /></span>
          <h2 className="role-what__heading">Everything you need to work calls and grow your book.</h2>
        </div>
        <p className="role-what__desc">
          The agent dashboard is your workspace for live call operations, lead management, and performance tracking. Built for agents who want to spend their time on conversations, not admin.
        </p>
      </div>

      {/* Row 1: 3 equal cards */}
      <div className="role-what__row role-what__row--three">
        {[
          { icon: liveCalls, title: 'Live Calls', desc: 'Get real-time alerts the moment an inbound call is routed to you. Accept from your dashboard and connect instantly. Every session is logged automatically.' },
          { icon: cart, title: 'Marketplace', desc: 'Browse leads listed by agencies. Filter by state, product, and age. Buy individual leads or in bulk. Contact details unlock after purchase.' },
          { icon: wallet, title: 'Wallet and Transactions', desc: 'Top up your wallet, track every debit and credit, and manage your subscription from one place. Your full billing history is always visible.' },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="role-what__card">
            <div className="role-what__icon-box"><Icon d={icon} /></div>
            <div>
              <p className="role-what__card-title">{title}</p>
              <p className="role-what__card-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: two wide cards with honest chip rows */}
      <div className="role-what__row role-what__row--two">
        <div className="role-what__card role-what__card--wide">
          <div className="role-what__icon-box"><Icon d={states} /></div>
          <div>
            <p className="role-what__card-title">States and Products</p>
            <p className="role-what__card-desc">Update your licensed states and the products you work at any time. Your routing eligibility updates immediately when you save changes. Appointments and client tracking are built in.</p>
            <div className="role-what__chips">
              {['By state', 'By product', 'Availability', 'Client tracking'].map((c) => <span className="chip" key={c}>{c}</span>)}
            </div>
          </div>
        </div>

        <div className="role-what__card role-what__card--wide">
          <div className="role-what__icon-box"><Icon d={chart} /></div>
          <div>
            <p className="role-what__card-title">Reports and Leaderboard</p>
            <p className="role-what__card-desc">Track your call volume, talk time, marketplace purchases, and conversion activity. See where you rank on the agency leaderboard.</p>
            <div className="role-what__chips">
              {['Call volume', 'Talk time', 'Close rate', 'Leaderboard rank'].map((c) => <span className="chip" key={c}>{c}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleWhatWeDo;
