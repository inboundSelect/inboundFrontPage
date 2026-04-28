const bgImage    = 'https://www.figma.com/api/mcp/asset/61717887-4d5d-466f-8114-594920c89aea';
const chartPieIcon = 'https://www.figma.com/api/mcp/asset/a9ebe3bf-4742-4e6f-9842-d551b61a2e76';
const donutA     = 'https://www.figma.com/api/mcp/asset/cd0c7b28-12b3-4666-96cf-537a38c62189';
const donutB     = 'https://www.figma.com/api/mcp/asset/80df37e8-d680-4c13-8568-af22d45e977d';
const donutC     = 'https://www.figma.com/api/mcp/asset/4da8225a-03dd-4d1d-890a-439900560136';
const ellipse1   = 'https://www.figma.com/api/mcp/asset/579b0dd5-7fa2-47a8-bd83-9a110a5aca2d';
const ellipse2   = 'https://www.figma.com/api/mcp/asset/afe34f99-0a84-46ea-aada-14ffe986f632';
const ellipse3   = 'https://www.figma.com/api/mcp/asset/cae59d5a-595d-466e-890c-76b9ac1c0e0b';
const ellipse6   = 'https://www.figma.com/api/mcp/asset/5792e69f-a42e-4564-85da-b250ef0ad0b6';
const ellipse7   = 'https://www.figma.com/api/mcp/asset/8f616ed6-10b7-4ace-92a7-aeb2fb49ad70';

function RoleHero({ onOpenWaitlist }) {
  return (
    <section className="role-hero">
      {/* Background image */}
      <img className="role-hero__bg" src={bgImage} alt="" aria-hidden="true" />

      {/* Decorative blobs */}
      <img className="role-hero__blob role-hero__blob--left"  src={ellipse6} alt="" aria-hidden="true" />
      <img className="role-hero__blob role-hero__blob--right" src={ellipse7} alt="" aria-hidden="true" />

      {/* Donut chart floating on left */}
      <div className="role-hero__donut" aria-hidden="true">
        <img className="role-hero__donut-a" src={donutA} alt="" />
        <img className="role-hero__donut-b" src={donutB} alt="" />
        <img className="role-hero__donut-c" src={donutC} alt="" />
        <div className="role-hero__badge" style={{ top: '18%', right: '-10%' }}>
          <img src={ellipse1} alt="" className="role-hero__dot" />35%
        </div>
        <div className="role-hero__badge" style={{ bottom: '10%', left: '-10%' }}>
          <img src={ellipse2} alt="" className="role-hero__dot" />47%
        </div>
        <div className="role-hero__badge" style={{ bottom: '10%', right: '10%' }}>
          <img src={ellipse3} alt="" className="role-hero__dot" />17%
        </div>
      </div>

      {/* Scattered green labels */}
      <span className="role-hero__up" style={{ left: '8%',  top: '42%'  }}>↑ 2.5%</span>
      <span className="role-hero__up" style={{ left: '14%', top: '70%'  }}>↑ 2.5%</span>
      <span className="role-hero__up" style={{ left: '62%', top: '60%'  }}>↑ 2.5%</span>
      <span className="role-hero__up" style={{ left: '80%', top: '73%'  }}>↑ 2.5%</span>
      <span className="role-hero__up" style={{ right: '4%', top: '39%'  }}>↑ 2.5%</span>

      {/* Center content */}
      <div className="role-hero__center">
        <div className="role-hero__badge-pill">
          <span className="role-hero__badge-icon">
            <img src={chartPieIcon} alt="" />
          </span>
          For Insurance Agents
        </div>

        <h1 className="role-hero__heading">
          Stop Chasing Leads.{' '}
          <span className="role-hero__heading-gradient">Start Taking Calls.</span>
        </h1>

        <p className="role-hero__sub">
          InboundSelect puts you in a live call queue for inbound leads from insurance agencies
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
