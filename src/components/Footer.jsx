// CTA panel
const ctaBg        = '/assets/45e778eca2960d083672574e43d69f4e7dd3f2c1.png';

// Floating icon pills
const iconBriefcase = '/assets/819bcc7636a23fa4869db093da423b1ca2f74b67.svg';
const iconChartBar  = '/assets/e362f2331f5c877bfa80dfffc0a7b2e9eacdc85d.svg';
const iconChartPie  = '/assets/d8a79fe0c2f6d296a868181b3a309d77517d3311.svg';

// Revenue card
const revenueLineChart = '/assets/c2252e0af3ed0e9dfcf46d7dc498e35c91c9ee2f.svg';
const menuDots         = '/assets/a8c51bc868eb269995d51ffc781166e360e91074.svg';

// Flag assets
const flagUK        = '/assets/ab53383e630f02c0b052910d7fbd431c3e5d573b.svg';
const flagUKGroup   = '/assets/0a2af6feec5dc5c8d49c658f071fd2e3d075b9ec.svg';
const flagUKOverlay = '/assets/3de25fcd618c20a44d55e4b1dd35da93cccc7629.svg';
const flagID        = '/assets/fc664e87e18e8ac7933d16e1776565af02b629f5.svg';
const flagIDStripe  = '/assets/e90d04807c8a0a66580c92e74cafa29274a2cc63.svg';

// Donut chart
const donutA    = '/assets/120a71816c736fa012185f176205edf1b9074985.svg';
const donutB    = '/assets/775f4d1220fee4eeacf5f15cb3a491b8890860cc.svg';
const donutC    = '/assets/25d93e1e9872ca2a7be9c8f7bda0973342ce1102.svg';
const dotBlue   = '/assets/051c36d4ebc1c42024c026405950823c87146003.svg';
const dotOrange = '/assets/fdca924a60fa06fe1cf1296f4ca98ab733d8d4f4.svg';
const dotPink   = '/assets/338d17b1ec1a62a2c21ed0f24574a4d8fa60c52e.svg';

// Button arrow + footer assets
const arrowIcon  = '/assets/eba5c929f578d92d34859393cf6a9661730fd1b3.svg';
const logoIcon   = '/assets/cb99ee5508abe52ab70727f729e7d28975688344.svg';
const searchIcon = '/assets/b7fafca0f4ac72b36868b02593d67d23813b3ef9.svg';

const revBars = [43, 60, 38, 104, 132];

const footerCols = [
  {
    head: 'Product',
    links: ['Features', 'Integrations', 'Pricing', 'Documentation'],
  },
  {
    head: 'Company',
    links: ['About Us', 'Blog', 'Customers'],
  },
  {
    head: 'Resources',
    links: ['Community', 'Contact', 'System Status', 'Terms of Service'],
  },
];

function Footer({ onOpenWaitlist }) {
  return (
    <footer className="home-footer" id="contact">

      {/* ── CTA PANEL ── */}
      <div className="hfcta">
        <img className="hfcta__bg" src={ctaBg} alt="" aria-hidden="true" />

        {/* Left: text */}
        <div className="hfcta__content">
          <h2 className="hfcta__heading">
            2 beta spots. No platform fee.{' '}
            <span className="hfcta__gradient">Direct access to our team.</span>
          </h2>
          <div className="hfcta__sub-box">
            <p className="hfcta__sub">
              We're onboarding two agencies before public launch. Waived platform fees, usage-only billing, and a 30-minute demo to confirm it's the right fit.
            </p>
          </div>
          <div className="hfcta__btns">
            <button className="hfcta__btn-stroke" onClick={onOpenWaitlist}>Apply for Beta Access</button>
            <button className="hfcta__btn-fill" onClick={onOpenWaitlist}>
              Book a Demo
              <img src={arrowIcon} alt="" className="hfcta__arrow" />
            </button>
          </div>
        </div>

        {/* Right: floating cards */}
        <div className="hfcta__cards">

          {/* Floating icon pills */}
          <div className="hfcta__icon-pill" style={{ top: 84, left: 38 }}>
            <img src={iconBriefcase} alt="" style={{ width: 40, height: 40 }} />
          </div>
          <div className="hfcta__icon-pill" style={{ top: 425, left: 120 }}>
            <img src={iconChartBar} alt="" style={{ width: 40, height: 40 }} />
          </div>
          <div className="hfcta__icon-pill" style={{ top: 195, right: 16 }}>
            <img src={iconChartPie} alt="" style={{ width: 24, height: 24 }} />
          </div>

          {/* Total Revenue card */}
          <div className="hfcta__card hfcta__card--revenue">
            <p className="hfcta__card-title">Total Revenue</p>
            <div className="hfcta__rev-area">
              <div className="hfcta__rev-yaxis">
                {['$700k', '$600k', '$500k', '$400k', '$300k', '$200k', '$10k'].map(l => (
                  <span key={l}>{l}</span>
                ))}
              </div>
              <div className="hfcta__rev-chart">
                <div className="hfcta__rev-bars">
                  {revBars.map((h, i) => (
                    <div key={i} className="hfcta__rev-bar" style={{ height: h }} />
                  ))}
                </div>
                <img className="hfcta__rev-line" src={revenueLineChart} alt="" />
              </div>
            </div>
            <div className="hfcta__rev-xlabels">
              {['jan', 'feb', 'mar', 'apr', 'may'].map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Active Users card */}
          <div className="hfcta__card hfcta__card--users">
            <div className="hfcta__card-header">
              <span className="hfcta__card-title">Active Users</span>
              <img src={menuDots} alt="" className="hfcta__menu-dots" />
            </div>
            <div className="hfcta__users-stat">
              <span className="hfcta__users-num">1,240</span>
              <span className="hfcta__users-up">↑ 4.5%</span>
            </div>
            <div className="hfcta__countries">
              <div className="hfcta__country">
                <div className="hfcta__country-pill" style={{ width: '88%' }}>
                  <div className="hfcta__flag hfcta__flag--uk">
                    <img src={flagUK} alt="" />
                    <img src={flagUKGroup} alt="" />
                    <img src={flagUKOverlay} alt="" />
                  </div>
                  <span>United Kingdom</span>
                </div>
                <span className="hfcta__country-count">2,890</span>
              </div>
              <div className="hfcta__country">
                <div className="hfcta__country-pill" style={{ width: '68%' }}>
                  <div className="hfcta__flag hfcta__flag--id">
                    <img src={flagID} alt="" />
                    <img src={flagIDStripe} alt="" />
                  </div>
                  <span>Indonesia</span>
                </div>
                <span className="hfcta__country-count">1,970</span>
              </div>
              <div className="hfcta__country">
                <div className="hfcta__country-pill" style={{ width: '48%' }}>
                  <div className="hfcta__flag hfcta__flag--de" />
                  <span>Germany</span>
                </div>
                <span className="hfcta__country-count">780</span>
              </div>
            </div>
          </div>

          {/* Sales Performance card */}
          <div className="hfcta__card hfcta__card--perf">
            <div className="hfcta__card-header">
              <span className="hfcta__card-title">Sales Performance</span>
              <img src={menuDots} alt="" className="hfcta__menu-dots" />
            </div>
            <div className="hfcta__donut-wrap">
              <img className="hfcta__donut-img hfcta__donut-img--a" src={donutA} alt="" />
              <img className="hfcta__donut-img hfcta__donut-img--b" src={donutB} alt="" />
              <img className="hfcta__donut-img hfcta__donut-img--c" src={donutC} alt="" />
              <div className="hfcta__donut-badge" style={{ top: '18%', right: '4%' }}>
                <img src={dotBlue} alt="" className="hfcta__dot" />35%
              </div>
              <div className="hfcta__donut-badge" style={{ bottom: '18%', left: '4%' }}>
                <img src={dotOrange} alt="" className="hfcta__dot" />47%
              </div>
              <div className="hfcta__donut-badge" style={{ bottom: '18%', right: '20%' }}>
                <img src={dotPink} alt="" className="hfcta__dot" />17%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER LINKS ── */}
      <div className="home-footer__links-wrap">
        <div className="home-footer__top">
          <div className="home-footer__brand">
            <div className="home-footer__logo">
              <span>InboundSelect</span>
            </div>
            <p className="home-footer__tagline">
              Inbound call routing for insurance agencies and agents who already generate their own demand.
            </p>
            <div className="home-footer__search">
              <span className="home-footer__search-placeholder">Search ...</span>
              <img src={searchIcon} alt="Search" className="home-footer__search-icon" />
            </div>
          </div>

          <nav className="home-footer__cols">
            {footerCols.map(col => (
              <div key={col.head} className="home-footer__col">
                <p className="home-footer__col-heading">{col.head}</p>
                <ul>
                  {col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="home-footer__bottom">
          <p>© 2026 InboundSelect. All rights reserved.</p>
          <div className="home-footer__bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">API</a>
            <a href="#">Data Processing Agreement</a>
          </div>
        </div>
      </div>

      <div className="home-footer__wordmark" aria-hidden="true">INBOUND</div>
    </footer>
  );
}

export default Footer;
