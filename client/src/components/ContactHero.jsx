const heroBg    = '/assets/dbfcfb3653064cd44806b06239e52b3958faa358.png';
const ellipse6  = '/assets/20d0f5fb97376957d73e070609d2cfef5798495c.svg';
const ellipse7  = '/assets/9c4cf1ba667b89c1b3e62eaee17663ea98cbccd7.svg';
const ellipse8  = '/assets/222945d711e539bdfa5bb2a2813bf9193b4075e5.svg';
const ellipse9  = '/assets/a365933a4e745dd6515561d25d68298a7f0886e2.svg';
const chartLine = '/assets/8951591031c083f4d21ec8dff10127f43c5a136d.svg';
const pieIcon   = '/assets/d8a79fe0c2f6d296a868181b3a309d77517d3311.svg';
const profilePh = '/assets/9684ff518cfbc0490d814a30dc73fad0a6f8c158.png';

function ContactHero({ onOpenWaitlist }) {
  return (
    <section className="contact-hero">
      {/* Background */}
      <img className="contact-hero__bg" src={heroBg} alt="" aria-hidden="true" />

      {/* Ellipse blobs */}
      <img className="contact-hero__blob contact-hero__blob--tl" src={ellipse6} alt="" aria-hidden="true" />
      <img className="contact-hero__blob contact-hero__blob--tr" src={ellipse7} alt="" aria-hidden="true" />
      <img className="contact-hero__blob contact-hero__blob--bl" src={ellipse8} alt="" aria-hidden="true" />
      <img className="contact-hero__blob contact-hero__blob--br" src={ellipse9} alt="" aria-hidden="true" />

      {/* Chart decoration */}
      <div className="contact-hero__chart" aria-hidden="true">
        <div className="contact-hero__chart-labels">
          {['$700k','$600k','$500k','$400k','$300k','$200k','$10k'].map(v => (
            <div key={v} className="contact-hero__chart-label">{v}</div>
          ))}
        </div>
        <img className="contact-hero__chart-line" src={chartLine} alt="" />
      </div>

      {/* Main content row */}
      <div className="contact-hero__content">
        {/* Left profiles */}
        <div className="contact-hero__profiles contact-hero__profiles--left">
          <div className="contact-hero__profile contact-hero__profile--lg">
            <img src={profilePh} alt="" aria-hidden="true" />
          </div>
          <div className="contact-hero__profile contact-hero__profile--sm">
            <img src={profilePh} alt="" aria-hidden="true" />
          </div>
        </div>

        {/* Center */}
        <div className="contact-hero__center">
          {/* Badge */}
          <div className="contact-hero__badge">
            <span className="contact-hero__badge-icon">
              <img src={pieIcon} alt="" />
            </span>
            <span className="contact-hero__badge-text">
              Get in touch
            </span>
          </div>

          {/* Heading */}
          <h1 className="contact-hero__heading">
            Talk to us before you{' '}
            <span className="contact-hero__heading-gradient">commit to anything.</span>
          </h1>

          {/* Sub */}
          <p className="contact-hero__sub">
            Whether you want to see the platform in action, ask how it fits your operation, or apply
            for a beta spot, this is the right place to start.
          </p>

          {/* CTAs */}
          <div className="contact-hero__btns">
            <button className="btn btn--stroke btn--sm" onClick={onOpenWaitlist}>Contact Our Team</button>
            <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>Request a Demo</button>
          </div>
        </div>

        {/* Right profiles */}
        <div className="contact-hero__profiles contact-hero__profiles--right">
          <div className="contact-hero__profile contact-hero__profile--lg">
            <img src={profilePh} alt="" aria-hidden="true" />
          </div>
          <div className="contact-hero__profile contact-hero__profile--sm">
            <img src={profilePh} alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
