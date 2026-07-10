const iconEnvelope = '/assets/ac39f70d9eb8cd1a2ee9faf99e62d67ebeef0890.svg';
const iconPhone    = '/assets/2ca67b625d8574172c1fd25efe538de83d081934.svg';
const iconMapPin   = '/assets/dd8b4caaf5ca758795c8292d99df5d9046b0589b.svg';

function ContactForm({ onOpenWaitlist }) {
  return (
    <section className="cform" id="contact">
      {/* Left: info */}
      <div className="cform__left">
        <div className="cform__info">
          <div className="section__label-tag">REACH OUT</div>
          <h2 className="cform__heading">We'll get back to you within one business day.</h2>
          <p className="cform__desc">
            Whether you're an agency owner evaluating the platform, an agent looking for access, or
            you have questions about how routing works, fill out the form and we'll follow up fast.
          </p>
        </div>

        {/* Contact meta */}
        <div className="cform__meta">
          <div className="cform__meta-item">
            <img src={iconEnvelope} alt="" className="cform__meta-icon" />
            <span className="cform__meta-text">anandkshitij3@gmail.com</span>
          </div>
          <div className="cform__meta-item">
            <img src={iconPhone} alt="" className="cform__meta-icon" />
            <span className="cform__meta-text">Available via email</span>
          </div>
          <div className="cform__meta-item">
            <img src={iconMapPin} alt="" className="cform__meta-icon" />
            <span className="cform__meta-text">Remote-first. Serving agents and agencies across the US.</span>
          </div>
        </div>
      </div>

      {/* Right: form card */}
      <div className="cform__card">
        <div className="cform__fields">
          {/* Row 1: two columns */}
          <div className="cform__row">
            <div className="cform__field">
              <label className="cform__label">First Name</label>
              <input className="cform__input" type="text" placeholder="Your first name" />
            </div>
            <div className="cform__field">
              <label className="cform__label">Last Name</label>
              <input className="cform__input" type="text" placeholder="Your last name" />
            </div>
          </div>
          {/* Email */}
          <div className="cform__field">
            <label className="cform__label">Email</label>
            <input className="cform__input" type="email" placeholder="your@email.com" />
          </div>
          {/* Company */}
          <div className="cform__field">
            <label className="cform__label">Company</label>
            <input className="cform__input" type="text" placeholder="Your company name" />
          </div>
          {/* Enquiry type */}
          <div className="cform__field">
            <label className="cform__label">Enquiry Type</label>
            <select className="cform__select">
              <option value="" disabled selected>Select enquiry type</option>
              <option>Agency Beta Application</option>
              <option>Agent Access Inquiry</option>
              <option>Demo Request</option>
              <option>Pricing Question</option>
              <option>General Question</option>
            </select>
          </div>
        </div>

        <button className="btn btn--fill btn--sm cform__submit" onClick={onOpenWaitlist}>
          Send Message
        </button>
      </div>
    </section>
  );
}

export default ContactForm;
