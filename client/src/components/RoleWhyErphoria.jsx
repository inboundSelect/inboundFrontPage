const centerImage = 'https://www.figma.com/api/mcp/asset/16e69ac3-782c-457c-843e-1c1c6825cb3b';

const cards = [
  {
    num: '01',
    numColor: 'pink',
    border: 'accent',
    title: 'Set up your profile',
    desc: "Complete onboarding, add your license details, and configure which states you're licensed to sell in. This determines which calls you're eligible to receive.",
    wide: true,
  },
  {
    num: '02',
    numColor: 'black',
    border: 'default',
    title: 'Choose your products',
    desc: "Select the insurance products you work. Final expense, Medicare, life insurance, or others your agency supports. Calls only route to you when there's a match.",
    wide: false,
  },
  {
    num: '03',
    numColor: 'black',
    border: 'default',
    title: 'Fund your wallet and activate',
    desc: "Add funds to your wallet and activate your subscription. This is what keeps you in the routing queue. No active billing, no incoming calls.",
    wide: false,
  },
  {
    num: '04',
    numColor: 'black',
    border: 'default',
    title: 'Accept live calls',
    desc: "When a matching inbound call comes in, you get a live alert on your dashboard. Accept it and you're connected. The call is tracked and billed automatically.",
    wide: false,
  },
];

function RoleWhyErphoria() {
  return (
    <section className="role-why">
      <div className="role-why__header">
        <p className="section__label">HOW IT WORKS FOR AGENTS</p>
        <h2 className="role-why__heading">From signup to your first live call.</h2>
      </div>

      <div className="role-why__grid">
        {/* Row 1: wide + narrow */}
        <div className="role-why__row">
          <div className={`role-why__card role-why__card--wide${cards[0].border === 'accent' ? ' role-why__card--accent-border' : ''}`}>
            <span className="role-why__num role-why__num--pink">01</span>
            <div className="role-why__card-body">
              <p className="role-why__card-title">{cards[0].title}</p>
              <p className="role-why__card-desc">{cards[0].desc}</p>
            </div>
          </div>
          <div className="role-why__card role-why__card--narrow">
            <span className="role-why__num role-why__num--black">02</span>
            <div className="role-why__card-body">
              <p className="role-why__card-title">{cards[1].title}</p>
              <p className="role-why__card-desc">{cards[1].desc}</p>
            </div>
          </div>
        </div>

        {/* Row 2: narrow + image + narrow */}
        <div className="role-why__row">
          <div className="role-why__card role-why__card--narrow">
            <span className="role-why__num role-why__num--black">03</span>
            <div className="role-why__card-body">
              <p className="role-why__card-title">{cards[2].title}</p>
              <p className="role-why__card-desc">{cards[2].desc}</p>
            </div>
          </div>
          <div className="role-why__img-wrap">
            <img src={centerImage} alt="" className="role-why__img" />
          </div>
          <div className="role-why__card role-why__card--narrow">
            <span className="role-why__num role-why__num--black">04</span>
            <div className="role-why__card-body">
              <p className="role-why__card-title">{cards[3].title}</p>
              <p className="role-why__card-desc">{cards[3].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleWhyErphoria;
