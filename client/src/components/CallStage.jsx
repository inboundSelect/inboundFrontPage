import { IconPhoneIn, IconCheck } from '../lib/icons';

/* An honest picture of the product: a call arriving, and the people who could
 * take it. Deliberately no revenue figures, call counts or percentages —
 * nothing here is a claim about results anyone has had.
 *
 * There is only an Answer action. An agent is never offered a "pass" on an
 * incoming call, so showing one would misrepresent how the product works.
 *
 * Names are initials only, so no real person is implied. */

const TEAM = [
  { initials: 'AM', line: 'Licensed in Florida · Final expense', on: true, state: 'Available' },
  { initials: 'RK', line: 'Licensed in Florida · Medicare', on: false, state: 'On a call' },
  { initials: 'JT', line: 'Licensed in Texas · Life', on: false, state: 'Away' },
];

function CallStage() {
  return (
    <div className="hero__visual reveal d2">
      <div className="stage">
        {/* A floating fact, not a floating figure — recording is simply true
            of every call, and the trust section says the same words. */}
        <span className="stage__chip" role="presentation">
          <span className="stage__chip-ic"><IconCheck size={11} /></span>
          Every call recorded
        </span>
        <div className="stage__window">
          <div className="stage__bar">
            <span className="stage__bar-title">Your agency</span>
            <span className="pill pill--positive pill--live">
              <i className="pill__dot" />
              Taking calls
            </span>
          </div>

          <div className="stage__body">
            <div className="callcard">
              <div className="callcard__top">
                <span className="callcard__ring"><IconPhoneIn size={19} /></span>
                <span className="callcard__who">
                  <span className="callcard__label">Caller on the line</span>
                  <span className="callcard__name">Final expense</span>
                  <span className="callcard__meta">Florida · from your Facebook campaign</span>
                </span>
              </div>
              <div className="callcard__actions">
                <span className="btn btn--primary btn--sm" role="presentation">Answer</span>
              </div>
            </div>

            <div className="teamlist">
              <p className="teamlist__head">Who can take it</p>
              {TEAM.map((m) => (
                <div key={m.initials} className={`teamrow${m.on ? ' teamrow--on' : ''}`}>
                  <span className="teamrow__avatar">{m.initials}</span>
                  <span className="teamrow__body">
                    <span className="teamrow__name">Agent {m.initials}</span>
                    <span className="teamrow__sub">{m.line}</span>
                  </span>
                  <span className={`teamrow__state${m.on ? '' : ' teamrow__state--off'}`}>
                    <i />{m.state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallStage;
