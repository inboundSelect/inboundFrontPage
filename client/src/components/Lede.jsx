/* The heading block that opens almost every section: a small eyebrow, the
 * heading, and one supporting line. Centred by default. */

function Lede({ eyebrow, title, text, align = 'center', className = '' }) {
  return (
    <div className={`lede${align === 'center' ? ' lede--center' : ''} reveal ${className}`.trim()}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="lede__title">{title}</h2>
      {text && <p className="lede__text">{text}</p>}
    </div>
  );
}

export default Lede;
