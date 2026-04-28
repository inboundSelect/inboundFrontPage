const mapImg = '/assets/9684ff518cfbc0490d814a30dc73fad0a6f8c158.png';

function ContactMap({ onOpenWaitlist }) {
  return (
    <section className="cmap">
      {/* Header */}
      <div className="cmap__header">
        <div className="cmap__header-left">
          <div className="section__label-tag">RESPONSE TIMES</div>
          <h2 className="cmap__heading">What to expect after you reach out.</h2>
        </div>
        <p className="cmap__desc">
          Beta applicants get a response within 24 hours. General inquiries are answered within
          one business day. Demo requests get a calendar link the same day.
        </p>
      </div>

      {/* Map */}
      <div className="cmap__map-wrap">
        <img src={mapImg} alt="US coverage map" className="cmap__map-img" />
        <button className="btn btn--fill btn--sm cmap__map-btn" onClick={onOpenWaitlist}>
          View on Map
        </button>
      </div>
    </section>
  );
}

export default ContactMap;
