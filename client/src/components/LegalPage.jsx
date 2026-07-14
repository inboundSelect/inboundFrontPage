import Footer from './Footer';
import PrivacyPolicyDoc from './legal/PrivacyPolicyDoc';
import TermsOfServiceDoc from './legal/TermsOfServiceDoc';
import DataDeletionDoc from './legal/DataDeletionDoc';
import { EFFECTIVE_DATE, LAST_UPDATED } from './legal/legalMeta';

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

function LegalPage({ doc, onOpenWaitlist, onNavigate }) {
  const { title, Body } = DOCS[doc] || DOCS.privacy;

  return (
    <>
      <main className="legal">
        <div className="legal__inner">
          <header className="legal__head">
            <p className="legal__eyebrow">Legal</p>
            <h1 className="legal__title">{title}</h1>
            <p className="legal__dates">
              Effective date: {EFFECTIVE_DATE} &nbsp;&middot;&nbsp; Last updated: {LAST_UPDATED}
            </p>
          </header>

          <nav className="legal__tabs" aria-label="Legal documents">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`legal__tab${t.key === doc ? ' active' : ''}`}
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
      </main>
      <Footer onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
    </>
  );
}

export default LegalPage;
