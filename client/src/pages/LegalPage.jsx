import PrivacyPolicyDoc from '../components/legal/PrivacyPolicyDoc';
import TermsOfServiceDoc from '../components/legal/TermsOfServiceDoc';
import DataDeletionDoc from '../components/legal/DataDeletionDoc';
import { EFFECTIVE_DATE, LAST_UPDATED } from '../components/legal/legalMeta';

/* The document bodies are compliance-reviewed and are not edited here — this
 * file only frames them. Google's consent screen and Meta's app review link
 * straight to these URLs, so the paths must keep working. */

const DOCS = {
  privacy: { title: 'Privacy Policy', Body: PrivacyPolicyDoc },
  terms: { title: 'Terms of Service', Body: TermsOfServiceDoc },
  'data-deletion': { title: 'Data Deletion Instructions', Body: DataDeletionDoc },
};

const TABS = [
  { key: 'privacy', label: 'Privacy Policy' },
  { key: 'terms', label: 'Terms of Service' },
  { key: 'data-deletion', label: 'Data Deletion' },
];

function LegalPage({ doc, onNavigate }) {
  const { title, Body } = DOCS[doc] || DOCS.privacy;

  return (
    <div className="legal">
      <div className="shell shell--narrow">
        <header className="legal__head">
          <p className="eyebrow">Legal</p>
          <h1 className="legal__title">{title}</h1>
          <p className="legal__dates">
            Effective {EFFECTIVE_DATE} · Last updated {LAST_UPDATED}
          </p>
        </header>

        <nav className="legal__tabs" aria-label="Legal documents">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`legal__tab${t.key === doc ? ' legal__tab--active' : ''}`}
              aria-current={t.key === doc ? 'page' : undefined}
              onClick={() => onNavigate(t.key)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <article className="legal__body">
          <Body onNavigate={onNavigate} />
        </article>
      </div>
    </div>
  );
}

export default LegalPage;
