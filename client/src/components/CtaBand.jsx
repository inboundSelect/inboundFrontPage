import { IconArrowRight } from '../lib/icons';

/* The closing invitation on every page. One dark band, two buttons, no
 * countdown and no spot count. */

function CtaBand({
  title = 'See it working on your own calls',
  text = 'Half an hour, screen shared. We look at how your calls come in today, show you what changes, and give you a straight answer on whether it fits.',
  primary = 'Book a Demo',
  secondary = 'Contact Us',
  fine = 'No obligation. No sales sequence afterwards.',
  intent = 'demo',
  onOpenModal,
  onNavigate,
}) {
  return (
    <section className="section">
      <div className="shell">
        <div className="cta reveal">
          <h2 className="cta__title">{title}</h2>
          <p className="cta__text">{text}</p>
          <div className="btn-row cta__actions">
            <button className="btn btn--onink btn--lg" onClick={() => onOpenModal?.(intent)}>
              {primary}
              <IconArrowRight size={17} />
            </button>
            {secondary && (
              <button className="btn btn--onink-ghost btn--lg" onClick={() => onNavigate?.('contact')}>
                {secondary}
              </button>
            )}
          </div>
          {fine && <p className="cta__fine">{fine}</p>}
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
