const mapImg = '/assets/9684ff518cfbc0490d814a30dc73fad0a6f8c158.png';

function ContactMap({ onOpenWaitlist }) {
  return (
    <section className="cmap">
      {/* Header */}
      <div className="cmap__header">
        <div className="cmap__header-left">
          <div className="section__label-tag">WHAT HAPPENS NEXT</div>
          <h2 className="cmap__heading">No sales pitch. Just a straight conversation about fit.</h2>
        </div>
        <p className="cmap__desc">
          Beta applicants hear back within 24 hours. Demo requests get a calendar link the same day.
          We do a 30-minute call, walk through your operation, show you the platform, and tell you
          honestly whether it makes sense for what you're building. If it doesn't fit, we'll say so
          and tell you why. No pressure. No follow-up sequence.
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
