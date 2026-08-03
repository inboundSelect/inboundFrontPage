import { useState, useEffect, useRef } from 'react';
import { submitLead } from '../lib/leads';
import { IconClose, IconCheck } from '../lib/icons';

const COPY = {
  demo: {
    title: 'Book a demo',
    text: 'Half an hour, screen shared, no slides. We walk through how your calls come in today and show you exactly what changes. If it is not a fit, we will tell you.',
    submit: 'Request My Demo',
  },
  agency: {
    title: 'Talk to our team',
    text: 'Tell us how your agency runs today and we will come back with a straight answer on whether we can help — and what it would cost.',
    submit: 'Send My Details',
  },
  agent: {
    title: 'Get agent access',
    text: 'Agents join through an agency already on InboundSelect. Send us your details and we will point you to the right one, or connect you with your agency owner.',
    submit: 'Send My Details',
  },
};

function DemoModal({ isOpen, intent = 'demo', onClose }) {
  const copy = COPY[intent] || COPY.demo;

  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done
  const [error, setError] = useState('');
  const boxRef = useRef(null);
  const firstFieldRef = useRef(null);

  /* Lock the page behind the modal, and hand focus to the first field. */
  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.activeElement;
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [isOpen]);

  /* Reset once the modal has closed so it never reopens mid-conversation. */
  useEffect(() => {
    if (isOpen) return;
    setForm({ name: '', email: '', company: '', role: '', message: '' });
    setStatus('idle');
    setError('');
  }, [isOpen]);

  /* Escape closes; Tab stays inside the dialog. */
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;
      const focusable = boxRef.current?.querySelectorAll(
        'button, input, select, textarea, a[href]',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    const result = await submitLead({ ...form, enquiry: copy.title });
    if (result.ok) {
      setStatus('done');
    } else {
      setStatus('idle');
      setError(result.message);
    }
  };

  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="modal__box"
        ref={boxRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <IconClose size={16} />
        </button>

        {status === 'done' ? (
          <div className="success">
            <span className="success__ic"><IconCheck size={26} /></span>
            <h2 className="modal__title" id="modal-title" style={{ paddingRight: 0 }}>
              Thank you — we have it.
            </h2>
            <p className="modal__text" style={{ marginBottom: 0 }}>
              Someone from our team will reply within one business day. If it is urgent,
              email us and we will move it up.
            </p>
            <button className="btn btn--primary btn--block" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2 className="modal__title" id="modal-title">{copy.title}</h2>
            <p className="modal__text">{copy.text}</p>

            <form className="modal__form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label className="field__label" htmlFor="m-name">Your name</label>
                  <input
                    ref={firstFieldRef}
                    className="input" id="m-name" name="name" type="text"
                    autoComplete="name" value={form.name} onChange={set}
                  />
                </div>
                <div className="field">
                  <label className="field__label" htmlFor="m-email">
                    Work email <span className="field__req">*</span>
                  </label>
                  <input
                    className="input" id="m-email" name="email" type="email" required
                    autoComplete="email" value={form.email} onChange={set}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label className="field__label" htmlFor="m-company">Agency name</label>
                  <input
                    className="input" id="m-company" name="company" type="text"
                    autoComplete="organization" value={form.company} onChange={set}
                  />
                </div>
                <div className="field">
                  <label className="field__label" htmlFor="m-role">You are</label>
                  <select className="select" id="m-role" name="role" value={form.role} onChange={set}>
                    <option value="">Choose one</option>
                    <option>An agency owner</option>
                    <option>Part of an agency team</option>
                    <option>An agent working on my own</option>
                    <option>Something else</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label className="field__label" htmlFor="m-message">
                  How do calls reach your agents today?
                </label>
                <textarea
                  className="textarea" id="m-message" name="message" rows={3}
                  placeholder="Roughly how many agents, what you sell, and where your callers come from."
                  value={form.message} onChange={set}
                />
              </div>

              {error && <p className="form-alert form-alert--error">{error}</p>}

              <button className="btn btn--primary btn--block" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : copy.submit}
              </button>

              <p className="form-note">
                We use your details to reply to this message and nothing else. No mailing
                list, no sequence, no sharing with anyone.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default DemoModal;
