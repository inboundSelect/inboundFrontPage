function RoleHero({ onOpenWaitlist }) {
  return (
    <section className="role-hero">
      <div className="aurora" aria-hidden="true" />
      <div className="dot-grid" aria-hidden="true" />

      {/* Center content */}
      <div className="role-hero__center">
        <div className="role-hero__badge-pill">
          <span className="role-hero__badge-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6.5 3.5h-2A1.5 1.5 0 0 0 3 5c0 8.28 6.72 15 15 15a1.5 1.5 0 0 0 1.5-1.5v-2a1 1 0 0 0-.76-.97l-3.3-.83a1 1 0 0 0-1 .35l-.9 1.1a11.5 11.5 0 0 1-5.19-5.19l1.1-.9a1 1 0 0 0 .35-1l-.83-3.3a1 1 0 0 0-.97-.76Z" />
            </svg>
          </span>
          For Insurance Agents
        </div>

        <h1 className="role-hero__heading">
          Stop Chasing Leads.{' '}
          <span className="role-hero__heading-gradient">Start Taking Calls.</span>
        </h1>

        <p className="role-hero__sub">
          Inbound Select puts you in a live call queue for inbound leads from insurance agencies
          already running their own marketing. Set your states, fund your wallet, and start
          receiving calls from prospects who already picked up the phone.
        </p>

        <div className="role-hero__btns">
          <button className="btn btn--stroke btn--sm" onClick={onOpenWaitlist}>Get Agent Access</button>
          <button className="btn btn--fill btn--sm"   onClick={onOpenWaitlist}>See How It Works</button>
        </div>
      </div>
    </section>
  );
}

export default RoleHero;
