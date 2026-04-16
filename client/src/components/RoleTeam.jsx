const personImg = 'https://www.figma.com/api/mcp/asset/711a18de-282e-4daf-a842-afec6a876c23';

function RoleTeam({ onOpenWaitlist }) {
  return (
    <section className="role-team">
      {/* Header row */}
      <div className="role-team__header">
        <div className="section__label-tag">Why InboundSelect</div>
        <div className="role-team__header-right">
          <p className="role-team__header-desc">
            Inbound calls convert better. Here is why that matters for you.
          </p>
          <h2 className="role-team__heading">Inbound calls convert better. Here's why that matters for you.</h2>
        </div>
      </div>

      {/* Content row */}
      <div className="role-team__content">
        {/* Left: person info */}
        <div className="role-team__info">
          <div className="section__label-tag">The difference that matters</div>
          <div className="role-team__name-wrap">
            <p className="role-team__name">Built for inbound</p>
            <p className="role-team__role-gradient">InboundSelect</p>
          </div>
          <p className="role-team__bio">
            A prospect who filled out a form and then called in is already further along than one you cold-dialed. They raised their hand twice. Most agents never get access to that kind of lead because the follow-up system isn't fast enough to catch them while they're still interested. InboundSelect routes those calls to you in seconds, not hours. That's the difference between a conversation and a voicemail.
          </p>
          <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Get Agent Access</button>
        </div>

        {/* Right: photos */}
        <div className="role-team__photos">
          <div className="role-team__photo role-team__photo--main">
            <img src={personImg} alt="Jonathan Reyes" />
          </div>
          <div className="role-team__photo role-team__photo--side">
            <img src={personImg} alt="" aria-hidden="true" />
            <div className="role-team__photo-overlay" />
          </div>
          <div className="role-team__photo role-team__photo--side">
            <img src={personImg} alt="" aria-hidden="true" />
            <div className="role-team__photo-overlay" />
          </div>
          <div className="role-team__photo role-team__photo--side">
            <img src={personImg} alt="" aria-hidden="true" />
            <div className="role-team__photo-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleTeam;
