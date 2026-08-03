import { useState } from 'react';
import Lede from '../components/Lede';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import { PLANS, ADD_ONS, ANNUAL_SAVING, BILLABLE_SECONDS, MARKETPLACE_SPLIT } from '../lib/site';
import {
  IconArrowRight, IconCheck, IconPhone, IconTag, IconPlay, IconChart,
  IconShield, IconDownload, IconMegaphone, IconList, IconInfo, IconCard,
} from '../lib/icons';

/* Prices live in ../lib/site.js, which takes them from BILLING_QA.md — the
 * billing system's own reference. No amount is written into this file. */

const EVERY_PLAN = [
  { Icon: IconPhone, label: 'Live calls to the right agent' },
  { Icon: IconTag, label: 'The Lead Marketplace' },
  { Icon: IconMegaphone, label: 'Advertising results in one view' },
  { Icon: IconPlay, label: 'Call recordings' },
  { Icon: IconChart, label: 'Team and call reporting' },
  { Icon: IconDownload, label: 'Exports of everything' },
  { Icon: IconShield, label: 'Licence checks on every call' },
  { Icon: IconList, label: 'Itemised billing on both sides' },
];

const FAQS = [
  {
    q: 'Do we pay anything while we are setting up?',
    a: 'No. Building your agency, adding numbers, setting prices and inviting agents are all free. You start paying when you are ready to take calls, and nothing goes live before then.',
  },
  {
    q: 'What counts as a connected call?',
    a: `Only a call that stays connected for at least ${BILLABLE_SECONDS} seconds. Anything shorter is never counted and never charged, so wrong numbers and instant hang-ups cost you nothing.`,
  },
  {
    q: 'What happens if we go over the calls included in our plan?',
    a: 'Each connected call above your monthly amount is 50 cents. It is billed separately from your plan so you can always see exactly what it was for, and you can see every individual call behind the amount.',
  },
  {
    q: 'Does our monthly allowance roll over?',
    a: 'No. It resets each month, on the same day of the month you started, and unused calls do not carry forward. That is true whether you pay monthly or yearly.',
  },
  {
    q: 'What do our agents pay, and does any of it come to you?',
    a: 'You decide what your agents pay, and all of it goes to your own Stripe account. We take no share of it. Our fee is the plan you are on, and that is the whole arrangement.',
  },
  {
    q: 'Is paying for a year actually cheaper?',
    a: 'Yes — a year costs the same as ten months, on the plan itself and on any extra agents you add at the same time. It is not a requirement and monthly works perfectly well.',
  },
  {
    q: 'Are payments refunded if we change our minds?',
    a: 'No, and we would rather say so plainly than surprise anyone. Nothing here is refunded — not a removed agent, not a change of plan, not a cancelled year. In exchange, nothing you have already paid for is ever taken away early: you keep it to the end of the period you bought.',
  },
  {
    q: 'How are card details handled?',
    a: 'Through Stripe. Card details go straight to them and are never stored on our systems. The money your agents pay you goes into your own Stripe account, not ours.',
  },
];

function PricingPage({ onNavigate, onOpenModal }) {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className="pagehero">
        <div className="shell">
          <p className="eyebrow eyebrow--center">Pricing</p>
          <h1 className="pagehero__title">
            One flat fee for the platform. <em>The rest is yours.</em>
          </h1>
          <p className="pagehero__text">
            We charge for the platform and nothing else. We never take a share of what
            your agents pay you, and we never sell you a caller you already paid to reach.
          </p>

          <div className="btn-row btn-row--center mt-lg">
            <div className="billing-toggle" role="group" aria-label="Billing period">
              <button
                className={`billing-toggle__btn${!yearly ? ' billing-toggle__btn--on' : ''}`}
                aria-pressed={!yearly}
                onClick={() => setYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`billing-toggle__btn${yearly ? ' billing-toggle__btn--on' : ''}`}
                aria-pressed={yearly}
                onClick={() => setYearly(true)}
              >
                Yearly
                <span className="billing-toggle__save">{ANNUAL_SAVING}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Plans ──────────────────────────────────────────────────────── */}
      <section className="section section--tight">
        <div className="shell">
          <div className="plans">
            {PLANS.map((plan, i) => (
              <article
                key={plan.key}
                className={`plan reveal d${i + 1}${plan.featured ? ' plan--featured' : ''}`}
              >
                {plan.badge && <span className="plan__badge">{plan.badge}</span>}

                <div>
                  <h2 className="plan__name">{plan.name}</h2>
                  <p className="plan__pitch">{plan.pitch}</p>
                </div>

                <div>
                  <p className="plan__price">
                    <span className="plan__amount">{yearly ? plan.annual : plan.monthly}</span>
                    <span className="plan__per">{yearly ? 'per year' : 'per month'}</span>
                  </p>
                  <p className="plan__annual-note">
                    {yearly
                      ? 'Twelve months for the price of ten'
                      : `Or ${plan.annual} a year — two months free`}
                  </p>
                </div>

                <span className="plan__rule" />

                <ul className="plan__list">
                  {plan.includes.map((f) => (
                    <li key={f.strong} className="plan__item">
                      <IconCheck size={15} />
                      <span><strong>{f.strong}</strong> {f.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="plan__cta">
                  <button
                    className={`btn btn--block ${plan.featured ? 'btn--primary' : 'btn--ghost'}`}
                    onClick={() => onOpenModal('agency')}
                  >
                    {plan.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="form-note text-center mt-lg">
            Prices are in US dollars. Larger operations that need more than sixty agents —{' '}
            <button className="btn btn--quiet" onClick={() => onNavigate('contact')}>talk to us</button>{' '}
            and we will work something out.
          </p>
        </div>
      </section>

      {/* ── In every plan ──────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <Lede
            eyebrow="Included everywhere"
            title="No cut-down version of the platform"
            text="Every plan gets everything below. What changes between them is how many agents you can carry and how many calls are included each month."
          />
          <div className="grid grid--4 mt-xl">
            {EVERY_PLAN.map((f, i) => (
              <div key={f.label} className={`card card--tint reveal d${(i % 4) + 1}`} style={{ padding: '22px' }}>
                <span className="card__icon" style={{ marginBottom: 14 }}><f.Icon size={19} /></span>
                <p className="card__title" style={{ marginBottom: 0, fontSize: 'var(--t-sm)' }}>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-ons and usage ──────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <Lede
            eyebrow="Everything else"
            title="The only other things you can be charged for"
            text="This is the complete list. There is nothing charged that is not on this page."
          />

          <div className="ratecard mt-xl reveal">
            <div className="raterow raterow--head">
              <span>What it is</span>
              <span>What it costs</span>
              <span>How it works</span>
            </div>
            {ADD_ONS.map((a) => (
              <div key={a.name} className="raterow">
                <span className="raterow__name">{a.name}</span>
                <span className="raterow__price">{a.price}</span>
                <span className="raterow__note">{a.note}</span>
              </div>
            ))}
          </div>

          <div className="card card--tint mt-lg reveal" style={{ display: 'grid', gridTemplateColumns: '40px minmax(0,1fr)', gap: 16, alignItems: 'start' }}>
            <span className="card__icon" style={{ marginBottom: 0, width: 40, height: 40 }}><IconInfo size={18} /></span>
            <p className="card__text">
              <strong style={{ color: 'var(--text)' }}>Each of these is billed on its own,</strong>{' '}
              with its own invoice, so you can always tell what an amount was for.
              Nothing is bundled into a single figure you cannot break down.
            </p>
          </div>
        </div>
      </section>

      {/* ── What agents pay ────────────────────────────────────────────── */}
      <section className="section section--ink">
        <div className="shell split">
          <div className="reveal">
            <p className="eyebrow">What your agents pay</p>
            <h2 className="lede__title">That part is entirely up to you</h2>
            <p className="lede__text">
              There is no agent price set by us, because it is not our money. You decide
              what an agent pays to be part of your call flow, we collect it on the days
              you said, and it lands in your own account.
            </p>
            <div className="checks mt-lg">
              {[
                ['A monthly amount, an amount per call, or both', 'Whatever suits how you run things.'],
                ['Paid into your own Stripe account', 'Never held by us and never taken from.'],
                ['We take no share of it', 'Not a percentage, not a fee, not a cut.'],
              ].map(([k, v]) => (
                <p key={k} className="checks__item">
                  <span className="checks__mark"><IconCheck size={13} /></span>
                  <span><strong>{k}</strong> — {v}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="split__media reveal d2">
            <div className="panel">
              <div className="panel__head">
                <span className="panel__title"><IconCard size={16} />Where the money goes</span>
              </div>
              <div className="panel__items">
                {[
                  { k: 'Your agents pay you', s: 'Into your Stripe account · you set the amount' },
                  { k: 'You pay us for the platform', s: 'Your plan, and only what is listed above' },
                  {
                    k: 'Lead sales are split',
                    s: `Your agency keeps ${MARKETPLACE_SPLIT.agency} · we keep ${MARKETPLACE_SPLIT.platform}`,
                  },
                ].map((r) => (
                  <div key={r.k} className="panel__item">
                    <span className="panel__item-ic"><IconArrowRight size={14} /></span>
                    <span>
                      <span className="panel__item-k">{r.k}</span>
                      <span className="panel__item-s">{r.s}</span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="panel__note">
                <IconShield size={14} />
                Card details are handled by Stripe and never stored on our systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell shell--narrow">
          <Lede eyebrow="Questions" title="Straight answers about the money" />
          <div className="mt-xl reveal"><Faq items={FAQS} /></div>
        </div>
      </section>

      <CtaBand
        title="Not sure which plan fits?"
        text="Tell us how many agents you have and roughly how many calls come in. We will tell you which plan makes sense — including if that is the smallest one."
        intent="agency"
        onOpenModal={onOpenModal}
        onNavigate={onNavigate}
      />
    </>
  );
}

export default PricingPage;
