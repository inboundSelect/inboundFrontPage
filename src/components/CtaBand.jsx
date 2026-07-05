// Slim, reusable call-to-action band used at the foot of pages (replaces the
// old per-page fake-dashboard CTA panels). Aurora mesh behind, two buttons.

function CtaBand({
  title,
  titleAccent,
  sub,
  primaryLabel = 'Apply for Beta Access',
  onPrimary,
  secondaryLabel = 'Book a Demo',
  onSecondary,
}) {
  return (
    <section className="cta-band">
      <div className="aurora" aria-hidden="true" />
      <div className="cta-band__inner">
        <h2 className="cta-band__title">
          {title} {titleAccent && <span className="grad">{titleAccent}</span>}
        </h2>
        {sub && <p className="cta-band__sub">{sub}</p>}
        <div className="cta-band__btns">
          <button className="btn btn--fill btn--lg" onClick={onPrimary}>{primaryLabel}</button>
          {secondaryLabel && (
            <button className="btn btn--stroke btn--lg" onClick={onSecondary || onPrimary}>
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
