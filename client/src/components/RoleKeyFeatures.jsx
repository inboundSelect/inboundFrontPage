// Line chart (Real-Time Reporting card)
const lineChart     = '/assets/6574b75e1815cfb4dae56f92272d312fc8dd588b.svg';
// Clipboard icon (Process Automation card)
const clipboardIcon = '/assets/8aa18104af3e35a78ebecaf257bcab2ef305c733.svg';
// Donut chart (Process Automation card)
const donutA = '/assets/cc00dc3265420b3e82c89bfa7aaaff9cecaaeb50.svg';
const donutB = '/assets/58f09e791faf015db4e9261ab2cee56fe9973a6c.svg';
const donutC = '/assets/e350d3f13f88e91eea0e4d80ba14568e6604df4c.svg';
const dot1   = '/assets/051c36d4ebc1c42024c026405950823c87146003.svg';
const dot2   = '/assets/fdca924a60fa06fe1cf1296f4ca98ab733d8d4f4.svg';
const dot3   = '/assets/338d17b1ec1a62a2c21ed0f24574a4d8fa60c52e.svg';
// Flag assets
const flagUK    = '/assets/ab53383e630f02c0b052910d7fbd431c3e5d573b.svg';
const flagUKGrp = '/assets/0a2af6feec5dc5c8d49c658f071fd2e3d075b9ec.svg';
const flagUKOvl = '/assets/3de25fcd618c20a44d55e4b1dd35da93cccc7629.svg';
const flagID    = '/assets/fc664e87e18e8ac7933d16e1776565af02b629f5.svg';
const flagIDStr = '/assets/e90d04807c8a0a66580c92e74cafa29274a2cc63.svg';
const flagDE1   = '/assets/2c6f1c350bb6511be4b745edb57d00a7dec20e08.svg';
const flagDE2   = '/assets/125687e1e733f3f7cedf35d1dc4cca6e795925b7.svg';
const flagDE3   = '/assets/b5fc0a3a07f0783530334a7c1b79cf2c1fd0c354.svg';
// Role-Based Access line
const rbacLine  = '/assets/05e8fa492bb029bf89a9f2b6a6069db6226dbe71.svg';

const revBarsGroup1 = [43, 60, 38, 93, 77];
const revBarsGroup2 = [43, 60, 38, 104, 116];
const revBarsGroup3 = [43, 60, 132, 132];

const countries = [
  { flag: 'uk',  label: 'United Kingdom', count: '2,890', width: '88%' },
  { flag: 'id',  label: 'Indonesia',      count: '1,970', width: '68%' },
  { flag: 'de',  label: 'Germany',        count: '780',   width: '48%' },
  { flag: 'mc',  label: 'Monaco',         count: '550',   width: '22%' },
];

function FlagUK() {
  return (
    <div className="rkf__flag-wrap">
      <img src={flagUK} alt="" />
      <img src={flagUKGrp} alt="" />
      <img src={flagUKOvl} alt="" />
    </div>
  );
}
function FlagID() {
  return (
    <div className="rkf__flag-wrap">
      <img src={flagID} alt="" />
      <img src={flagIDStr} alt="" />
    </div>
  );
}
function FlagDE() {
  return (
    <div className="rkf__flag-wrap">
      <img src={flagDE1} alt="" />
      <img src={flagDE2} alt="" />
      <img src={flagDE3} alt="" />
    </div>
  );
}
function FlagMC() {
  return <div className="rkf__flag-wrap rkf__flag-mc" />;
}

function getFlag(code) {
  if (code === 'uk') return <FlagUK />;
  if (code === 'id') return <FlagID />;
  if (code === 'de') return <FlagDE />;
  return <FlagMC />;
}

function RoleKeyFeatures() {
  return (
    <section className="rkf">
      {/* Header */}
      <div className="rkf__header">
        <div className="rkf__header-left">
          <div className="section__label-tag">Key Features</div>
          <h2 className="rkf__heading">Built for agents who work inbound calls.</h2>
        </div>
        <p className="rkf__desc">
          Every feature in the agent dashboard is designed around one job: helping you spend more time on live conversations with people who are already interested.
        </p>
      </div>

      {/* Row 1 */}
      <div className="rkf__row">
        {/* Wide: Real-Time Reporting */}
        <div className="rkf__card rkf__card--wide rkf__card--accent-border">
          <div className="rkf__card-chart-area" aria-hidden="true">
            <div className="rkf__rev-yaxis">
              {['$700k','$600k','$500k','$400k','$300k','$200k','$10k'].map(l => <span key={l}>{l}</span>)}
            </div>
            <img className="rkf__line" src={lineChart} alt="" />
          </div>
          <div className="rkf__card-foot">
            <p className="rkf__benefit">The faster you accept, the better the conversation starts.</p>
            <p className="rkf__card-title">Real-Time Call Alerts</p>
            <p className="rkf__card-desc">When a call routes to you, the alert hits your dashboard immediately. Accept it and you're connected. Every session is tracked and billed automatically.</p>
          </div>
        </div>

        {/* Narrow: Process Automation */}
        <div className="rkf__card rkf__card--narrow">
          <div className="rkf__icon-box">
            <img src={clipboardIcon} alt="" />
          </div>
          <div className="rkf__donut" aria-hidden="true">
            <img className="rkf__donut-a" src={donutA} alt="" />
            <img className="rkf__donut-b" src={donutB} alt="" />
            <img className="rkf__donut-c" src={donutC} alt="" />
            <div className="rkf__dot-badge" style={{ top: '14%', right: '6%' }}>
              <img src={dot1} alt="" className="rkf__dot" />35%
            </div>
            <div className="rkf__dot-badge" style={{ bottom: '18%', left: '6%' }}>
              <img src={dot2} alt="" className="rkf__dot" />47%
            </div>
            <div className="rkf__dot-badge" style={{ bottom: '18%', right: '20%' }}>
              <img src={dot3} alt="" className="rkf__dot" />17%
            </div>
            <div className="rkf__fade-bottom" />
          </div>
          <div className="rkf__card-foot">
            <p className="rkf__card-title">Availability Controls</p>
            <p className="rkf__card-desc">Set yourself available or unavailable with one tap. Calls only route to you when you're ready. Step away without missing calls that weren't going to your queue anyway.</p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="rkf__row">
        {/* Narrow: Multi-Location */}
        <div className="rkf__card rkf__card--narrow">
          <div className="rkf__countries">
            {countries.map(c => (
              <div key={c.label} className="rkf__country">
                <div className="rkf__country-pill" style={{ width: c.width }}>
                  {getFlag(c.flag)}
                  <span>{c.label}</span>
                </div>
                <span className="rkf__country-count">{c.count}</span>
              </div>
            ))}
          </div>
          <div className="rkf__fade-bottom" />
          <div className="rkf__card-foot">
            <p className="rkf__card-title">Call Recordings</p>
            <p className="rkf__card-desc">Every inbound call is recorded automatically. Access recordings directly from your dashboard after the call ends. Review conversations, improve your approach, keep records.</p>
          </div>
        </div>

        {/* Wide: Role-Based Access */}
        <div className="rkf__card rkf__card--wide">
          <div className="rkf__rbac-chart" aria-hidden="true">
            {[revBarsGroup1, revBarsGroup2, revBarsGroup3].map((group, gi) => (
              <div key={gi} className="rkf__bar-group">
                <div className="rkf__bars">
                  {group.map((h, bi) => <div key={bi} className="rkf__bar" style={{ height: h }} />)}
                </div>
                <div className="rkf__xlabels">
                  {['jan','feb','mar','apr','may'].slice(0, group.length).map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            ))}
            <img className="rkf__rbac-line" src={rbacLine} alt="" />
          </div>
          <div className="rkf__card-foot">
            <p className="rkf__benefit">Buy what fits your current focus and work it on your schedule.</p>
            <p className="rkf__card-title">Select Marketplace</p>
            <p className="rkf__card-desc">Leads that agencies didn't work live are listed for purchase. Filter by state, product, and lead age. Downloadable reports let you export your full activity history anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleKeyFeatures;
