// Reusable section header: eyebrow label + heading + optional sub.
// Reuses the existing .section__label / .section__heading / .section__sub
// classes so every section shares one rhythm. Pass `align="center"` to center.

function SectionHeader({ label, heading, sub, align = 'left', className = '' }) {
  return (
    <div className={`section-head section-head--${align} ${className}`.trim()}>
      {label && <p className="section__label" data-reveal>{label}</p>}
      {heading && <h2 className="section__heading" data-reveal>{heading}</h2>}
      {sub && <p className="section__sub" data-reveal>{sub}</p>}
    </div>
  );
}

export default SectionHeader;
