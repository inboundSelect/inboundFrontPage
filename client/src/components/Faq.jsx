import { useState, useId } from 'react';
import { IconPlus } from '../lib/icons';

/* Accordion. The answer stays in the DOM and is collapsed with a
 * grid-template-rows transition, so it animates open and closed and remains
 * readable to search engines and screen readers. */

function Faq({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;

        return (
          <div key={item.q} className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
            <h3>
              <button
                className="faq__q"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <span className="faq__icon"><IconPlus size={16} /></span>
              </button>
            </h3>
            <div className="faq__a" id={panelId} role="region" aria-labelledby={btnId}>
              <div><p>{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
