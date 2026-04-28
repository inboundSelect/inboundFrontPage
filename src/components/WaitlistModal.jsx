import { useState, useEffect } from 'react';

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  'https://app.inboundselect.com'
).trim().replace(/\/$/, '');
const WAITLIST_ENDPOINT = `${API_BASE_URL}/api/inbound-select/leads`;

function WaitlistModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState("Thanks for your interest in Inbound Select. We'll be in touch with early access details soon.");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setForm({ name: '', email: '', company: '', message: '' });
      setStatus('idle');
      setErrorMsg('');
      setSuccessMsg("Thanks for your interest in Inbound Select. We'll be in touch with early access details soon.");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email) {
      setErrorMsg('Please enter your email address.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source_page: 'waitlist_modal',
          source_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.message || 'Unable to submit right now. Please try again in a moment.');
        return;
      }
      if (data.success) {
        setSuccessMsg(
          data.message || "Thanks for your interest in Inbound Select. We'll be in touch with early access details soon."
        );
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-box__close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="modal-box__success">
            <div className="modal-box__success-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="21" stroke="var(--success)" strokeWidth="2"/>
                <path d="M13 22l6 6 12-12" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="modal-box__heading">You're on the list!</h3>
            <p className="modal-box__sub">
              {successMsg}
            </p>
            <button className="btn btn--fill" style={{ width: '100%' }} onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <h3 className="modal-box__heading">Get Early Access</h3>
            <p className="modal-box__sub">
              Join the waitlist and be the first to experience the future of business operations.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="modal-box__form-row">
                <div className="form-group">
                  <label htmlFor="modal-name">Full Name</label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-email">Work Email <span className="modal-box__required">*</span></label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-company">Company</label>
                <input
                  id="modal-company"
                  name="company"
                  type="text"
                  placeholder="Acme Corp"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-message">What are you hoping to solve?</label>
                <textarea
                  id="modal-message"
                  name="message"
                  placeholder="Tell us about your current challenges..."
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              {errorMsg && (
                <p className="form-message form-message--error">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="btn btn--fill"
                style={{ width: '100%' }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Submitting…' : 'Join the Waitlist'}
              </button>

              <p className="modal-box__fine-print">
                No spam. We'll only contact you with relevant updates about early access.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default WaitlistModal;
