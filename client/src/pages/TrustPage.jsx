import Lede from '../components/Lede';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import { COMPANY } from '../lib/site';
import {
  IconArrowRight, IconCheck, IconLock, IconShield, IconEye, IconList,
  IconCard, IconPhone, IconBuilding, IconInfo, IconRefresh, IconDownload,
} from '../lib/icons';

/* Everything on this page is something we actually do. Where we have not
 * earned a certification, the page says so rather than showing a badge for it. */

const PROTECTIONS = [
  {
    Icon: IconLock,
    title: 'Your data is encrypted on the way to us',
    text: 'Everything sent between your browser and our servers travels over an encrypted connection. Passwords and the keys that connect your other accounts are stored encrypted, never in plain text.',
  },
  {
    Icon: IconBuilding,
    title: 'One agency can never see another',
    text: 'Agencies are kept apart by the database itself, not just by what the screens choose to show. There is no view anywhere that mixes two agencies together.',
  },
  {
    Icon: IconEye,
    title: 'People only see what their job needs',
    text: 'An agent sees their own calls and their own billing. An agency owner sees their team. Nobody is handed access to more than their role calls for, and administrative access is logged.',
  },
  {
    Icon: IconCard,
    title: 'We never hold card numbers',
    text: 'Payments run through Stripe. Card details go straight to them and never touch our systems. Money your agents pay you goes into your own Stripe account, not into ours.',
  },
  {
    Icon: IconPhone,
    title: 'Calls are carried by Twilio',
    text: 'The calls themselves run on Twilio, one of the largest and most established telephone platforms in the world. We do not run our own telephone network.',
  },
  {
    Icon: IconShield,
    title: 'Licences are checked, every time',
    text: 'Before a call is offered to anyone, we check the states they are licensed in and the products they are cleared to sell. It is not a setting someone can quietly work around.',
  },
];

const RECORDS = [
  {
    Icon: IconList,
    title: 'Every amount can be traced',
    text: 'Each charge points at the exact call, purchase or subscription behind it. Nothing appears on a bill without something you can open and inspect.',
  },
  {
    Icon: IconDownload,
    title: 'You can take your records with you',
    text: 'Call history, billing history and team activity can all be exported as a spreadsheet whenever you want them.',
  },
  {
    Icon: IconRefresh,
    title: 'Nothing is quietly written off',
    text: 'If a payment cannot be taken today, it stays on the books and stays visible until it is settled. Amounts are not dropped and they are not hidden.',
  },
];

const FAQS = [
  {
    q: 'Are calls recorded, and who can hear them?',
    a: 'Calls handled through the platform are recorded. The agent who took the call and their agency can listen back to it. Telling callers that the conversation is recorded, in the way the law where you operate requires, is the agency\'s responsibility — that is not something we can do on your behalf.',
  },
  {
    q: 'How long do you keep our information?',
    a: 'Account and financial records are kept for as long as the account is open, and afterwards for as long as tax and financial law requires. Call records and recordings are kept according to your own settings and any legal requirements that apply to you.',
  },
  {
    q: 'If we disconnect an advertising account, what happens to that data?',
    a: 'The moment you disconnect it, the stored connection is deleted and everything scheduled to run against it stops. The advertising figures already pulled in are removed from our systems within thirty days.',
  },
  {
    q: 'Can we ask you to delete everything?',
    a: 'Yes. There is a page explaining exactly how to ask and what happens next, including which records we are legally required to keep afterwards and for how long.',
  },
  {
    q: 'Who else can see our information?',
    a: 'Only the companies that make the platform work — Twilio for calls, Stripe for payments, and our database host — and each of them is contractually limited to using it to provide that service. We do not sell information about you or your callers to anyone, ever.',
  },
  {
    q: 'What happens if something goes wrong?',
    a: 'Email us and a person will reply. We would rather tell you plainly what has happened and what we are doing about it than leave you working it out from a status page.',
  },
];

function TrustPage({ onNavigate, onOpenModal }) {
  return (
    <>
      <section className="pagehero">
        <div className="shell">
          <p className="eyebrow eyebrow--center">Trust &amp; safety</p>
          <h1 className="pagehero__title">
            People's money and people's phone calls. <em>Handled carefully.</em>
          </h1>
          <p className="pagehero__text">
            You are being asked to run part of your business on someone else's system.
            This page sets out exactly what we do to deserve that, and where we are not
            there yet.
          </p>
        </div>
      </section>

      {/* ── Protections ────────────────────────────────────────────────── */}
      <section className="section section--tight">
        <div className="shell">
          <Lede
            eyebrow="How we protect it"
            title="Six things that are true of every account"
            text="Not policies we intend to write. These are how the platform is built today."
          />
          <div className="grid grid--3 mt-xl">
            {PROTECTIONS.map((c, i) => (
              <article key={c.title} className={`card card--hover reveal d${(i % 3) + 1}`}>
                <span className="card__icon"><c.Icon size={20} /></span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Honesty about certification ────────────────────────────────── */}
      <section className="section section--ink">
        <div className="shell shell--narrow">
          <Lede
            eyebrow="Being straight with you"
            title="What we have not done yet"
            text="Plenty of companies put certification badges on a page without holding the certificate. We would rather tell you where we actually stand."
          />

          <div className="honest mt-xl reveal">
            <span className="honest__ic"><IconInfo size={19} /></span>
            <div>
              <p>
                <strong>We are not currently certified under SOC 2, ISO 27001, HIPAA or PCI DSS.</strong>{' '}
                We follow the practices described above, and our payment handling sits behind Stripe,
                who are themselves certified for card data. But we have not been through those
                independent audits ourselves, so you will not find those badges anywhere on this site.
              </p>
              <p style={{ marginTop: 14 }}>
                If your business needs a certified supplier today, we would rather you knew that now
                than found out during your own review. Ask us where we are up to and we will give you
                a straight answer.
              </p>
            </div>
          </div>

          <div className="btn-row btn-row--center mt-xl">
            <button className="btn btn--onink" onClick={() => onNavigate('contact')}>
              Ask us about your review
              <IconArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Money records ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <Lede
            eyebrow="Money you can check"
            title="If you cannot check it, you cannot trust it"
            text="Billing is the part people worry about most, so it is the part we made easiest to inspect."
          />
          <div className="grid grid--3 mt-xl">
            {RECORDS.map((c, i) => (
              <article key={c.title} className={`card card--hover reveal d${i + 1}`}>
                <span className="card__icon"><c.Icon size={20} /></span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
              </article>
            ))}
          </div>

          <div className="statement mt-xl reveal">
            <p className="statement__text">
              Amounts are worked out to the exact cent, and
              <b> the screen, the export and the card charge always show the same number.</b>
            </p>
            <p className="statement__sub">
              Nothing is rounded up anywhere. If those three ever disagreed, that would be a bug —
              and we treat it as one.
            </p>
          </div>
        </div>
      </section>

      {/* ── Your control ───────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell split">
          <div className="reveal">
            <p className="eyebrow">Your information</p>
            <h2 className="lede__title">It stays yours, and you can take it back</h2>
            <p className="lede__text">
              Nothing about your callers, your agents or your business is ours to sell or
              share. If you want it out, there is a documented way to ask, and it is
              handled.
            </p>
            <div className="checks mt-lg">
              {[
                ['Export whenever you like', 'Calls, billing and activity, as a spreadsheet.'],
                ['Disconnect and it stops', 'Cut an advertising account loose and everything against it stops immediately.'],
                ['Ask us to delete it', 'A written process, with a plain explanation of what has to be kept and why.'],
                ['We never sell it', 'Not your data, not your callers, not to anyone.'],
              ].map(([k, v]) => (
                <p key={k} className="checks__item">
                  <span className="checks__mark"><IconCheck size={13} /></span>
                  <span><strong>{k}</strong> — {v}</span>
                </p>
              ))}
            </div>
            <div className="btn-row mt-lg">
              <button className="btn btn--ghost" onClick={() => onNavigate('data-deletion')}>
                How to request deletion
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="split__media reveal d2">
            <div className="panel">
              <div className="panel__head">
                <span className="panel__title"><IconShield size={16} />The documents</span>
              </div>
              <div className="panel__items">
                {[
                  { k: 'Privacy Policy', s: 'What we collect and why', page: 'privacy' },
                  { k: 'Terms of Service', s: 'The agreement in full', page: 'terms' },
                  { k: 'Data Deletion', s: 'How to ask, and what happens', page: 'data-deletion' },
                ].map((r) => (
                  <button key={r.k} className="panel__item" style={{ width: '100%', textAlign: 'left' }} onClick={() => onNavigate(r.page)}>
                    <span className="panel__item-ic"><IconList size={14} /></span>
                    <span>
                      <span className="panel__item-k">{r.k}</span>
                      <span className="panel__item-s">{r.s}</span>
                    </span>
                    <IconArrowRight size={15} style={{ color: 'var(--slate-400)' }} />
                  </button>
                ))}
              </div>
              <p className="panel__note">
                <IconInfo size={14} />
                {COMPANY.legalEntity} · {COMPANY.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell shell--narrow">
          <Lede eyebrow="Questions" title="What buyers ask before signing" />
          <div className="mt-xl reveal"><Faq items={FAQS} /></div>
        </div>
      </section>

      <CtaBand
        title="Send us your security questions"
        text="If your organisation has a supplier review, send it over. We will fill it in honestly, including the parts where the answer is no."
        primary="Book a Demo"
        onOpenModal={onOpenModal}
        onNavigate={onNavigate}
        fine="A person reads and answers these. It is not a form that disappears."
      />
    </>
  );
}

export default TrustPage;
