import Lede from '../components/Lede';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import CallStage from '../components/CallStage';
import { MARKETPLACE_SPLIT } from '../lib/site';
import {
  IconArrowRight, IconCheck, IconPhone, IconClock, IconUser, IconUserCheck,
  IconTag, IconChart, IconUsers, IconBuilding, IconShield, IconLock, IconEye,
  IconList, IconMegaphone, IconHeadset, IconLayers,
} from '../lib/icons';

/* ── The two paths a call can take ──────────────────────────────────────── */

const USUAL = [
  { Icon: IconPhone, label: 'The call comes in', sub: 'Someone you paid to reach' },
  { Icon: IconClock, label: 'It rings out', sub: 'Voicemail, or one busy agent' },
  { Icon: IconUser, label: 'You call back later', sub: 'They have already spoken to someone else' },
  { Icon: IconTag, label: 'The money is spent', sub: 'You paid for that caller either way' },
];

const HERE = [
  { Icon: IconPhone, label: 'The call comes in', sub: 'On the number from your advert' },
  { Icon: IconUsers, label: 'Everyone who can take it is asked', sub: 'Licensed, free right now, and in good standing' },
  { Icon: IconUserCheck, label: 'The first to answer gets it', sub: 'Put through while the caller is still there' },
  { Icon: IconChart, label: 'It is recorded and settled', sub: 'Nothing left to work out at month end', win: true },
];

/* ── What the platform is, and what it is not ───────────────────────────── */

const CLARITY = [
  {
    Icon: IconMegaphone,
    title: 'We do not sell you callers',
    text: 'Your adverts, your referrals, your own campaigns — you keep all of it exactly as it is. We never resell you a caller you already paid to reach.',
  },
  {
    Icon: IconHeadset,
    title: 'We do not employ your agents',
    text: 'Your team stays your team. InboundSelect is the screen they work from, not a call centre standing between you and them.',
  },
  {
    Icon: IconLayers,
    title: 'We do not take a slice of your calls',
    text: 'You decide what an agent pays you and you keep it. We charge a flat monthly fee for the platform, and that is the whole arrangement.',
  },
];

/* ── Trust ──────────────────────────────────────────────────────────────── */

const TRUST = [
  { Icon: IconShield, title: 'Only licensed agents connect', text: 'Before a call is offered to anyone, we check the states they are licensed in and the products they are cleared to sell.' },
  { Icon: IconLock, title: 'Payments handled by Stripe', text: 'Card details go straight to Stripe and are never stored on our systems. Money your agents pay lands in your own Stripe account, not ours.' },
  { Icon: IconEye, title: 'Every call recorded', text: 'Recordings are saved automatically and are there whenever you or your agent need to listen back.' },
  { Icon: IconList, title: 'Every charge itemised', text: 'You can see the exact call behind every amount — how long it ran, who took it, and which payment covered it.' },
];

/* ── Questions people actually ask ──────────────────────────────────────── */

const FAQS = [
  {
    q: 'Do we have to change our adverts or our phone numbers?',
    a: 'No. Point the number on your advert at us and everything else stays where it is. Your campaigns keep running, and callers see the same number they always did.',
  },
  {
    q: 'How quickly does a caller get through to someone?',
    a: 'Everyone who can take the call is offered it at the same moment, and the first to accept is connected straight away. In practice that is seconds, not a callback later in the day.',
  },
  {
    q: 'What happens if none of our agents are free?',
    a: 'The caller can leave a message, and the call is kept. You can then list it in the Lead Marketplace so another agent can pick it up and pay you for it, instead of it going to waste.',
  },
  {
    q: 'Who decides what our agents pay us?',
    a: 'You do. You set the monthly amount, the amount per call, or both. We collect it and it goes into your own Stripe account. There is no fixed agent price and we take no share of it.',
  },
  {
    q: 'Do we need to bring our own phone service?',
    a: 'Only if you want to. Use your own provider and there is no fee for it. If you would rather not deal with any of that, we will set up and look after the numbers for a flat monthly amount, and pass on call minutes at exactly what they cost us.',
  },
  {
    q: 'How long are we tied in for?',
    a: 'Month to month if you pay monthly. Paying for a year up front costs ten months instead of twelve, but that is your choice, not a requirement.',
  },
];

function Track({ items }) {
  return (
    <div className="flowline">
      {items.map((item, i) => (
        <div key={item.label}>
          <div className={`flowline__item${item.win ? ' flowline__item--win' : ''}`}>
            <span className="flowline__ic"><item.Icon size={16} /></span>
            <span>
              <span className="flowline__label">{item.label}</span>
              <span className="flowline__sub">{item.sub}</span>
            </span>
          </div>
          {i < items.length - 1 && <div className="flowline__rail" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

function HomePage({ onNavigate, onOpenModal }) {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="shell hero__grid">
          <div className="reveal">
            <p className="hero__badge">
              <b>For insurance agencies</b>
              Final expense · Medicare · Life
            </p>

            <h1 className="hero__title">
              The call you paid for, <em>answered while they are still on the line.</em>
            </h1>

            <p className="hero__text">
              InboundSelect puts every incoming call in front of the agents who are
              licensed for it and free right now. You decide who gets which calls and
              what they pay you for them.
            </p>

            <div className="btn-row hero__actions">
              <button className="btn btn--primary btn--lg" onClick={() => onOpenModal('demo')}>
                Book a Demo
                <IconArrowRight size={17} />
              </button>
              <button className="btn btn--ghost btn--lg" onClick={() => onNavigate('agencies')}>
                See how it works
              </button>
            </div>

            <p className="hero__assurance">
              <span><IconCheck size={15} />Your callers stay yours</span>
              <span><IconCheck size={15} />Your agents stay yours</span>
              <span><IconCheck size={15} />You set the prices</span>
            </p>
          </div>

          <CallStage />
        </div>
      </section>

      {/* ── The problem ────────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <Lede
            eyebrow="The problem"
            title="You paid for the call. Then nobody picked up."
            text="Someone fills in your form and rings the number on your advert. If they do not reach a person in the next minute or two, they ring the next agency instead. That gap is the most expensive thing in an agency."
          />

          <div className="compare mt-xl reveal">
            <div className="compare__col">
              <p className="compare__head compare__head--bad">
                <i><IconClock size={14} /></i>
                How it usually goes
              </p>
              <Track items={USUAL} tone="Without InboundSelect" />
            </div>

            <div className="compare__vs" aria-hidden="true">vs</div>

            <div className="compare__col compare__col--good">
              <p className="compare__head compare__head--good">
                <i><IconCheck size={14} /></i>
                How it goes with us
              </p>
              <Track items={HERE} tone="With InboundSelect" />
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <Lede
            eyebrow="How it works"
            title="Four things to set up. Then it runs on its own."
            text="Setup is a morning's work. After that, calls arrive, reach the right person, and settle themselves."
          />

          <div className="steps steps--row mt-xl">
            {[
              {
                title: 'Point your number at us',
                text: 'Keep the campaigns, the number and the phone company you already use. Nothing about your advertising has to change.',
              },
              {
                title: 'Say who can take what',
                text: 'Choose which agents handle which products, in which states, and when they are free. We check all of it every time a call arrives.',
              },
              {
                title: 'The call connects itself',
                text: 'Everyone who matches is offered the call at once. The first to accept is put straight through — no dialling, no transferring, no waiting.',
              },
              {
                title: 'Everything is written down',
                text: 'The recording, how long it ran, who took it and what it cost all land in one place, ready to look at whenever you want.',
              },
            ].map((s, i) => (
              <article key={s.title} className={`step reveal d${i + 1}`}>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two ways to earn ───────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <Lede
            eyebrow="How agencies earn"
            title="Two ways to earn from the same call"
            text="Most agencies earn from a call once, if at all. Here, a call that gets worked earns, and a call that does not still can."
          />

          <div className="earn mt-xl">
            <article className="earn__card reveal d1">
              <span className="card__icon"><IconPhone size={20} /></span>
              <p className="earn__num">01</p>
              <h3 className="earn__title">Calls your team works</h3>
              <p className="earn__text">
                You decide what it costs an agent to be part of your call flow — a monthly
                amount, an amount for each call they take, or both. We collect it and it
                goes into your own Stripe account. No invoices to raise and nobody to chase.
              </p>
              <p className="earn__foot">You set the price. We never take a share of it.</p>
            </article>

            <article className="earn__card reveal d2">
              <span className="card__icon"><IconTag size={20} /></span>
              <p className="earn__num">02</p>
              <h3 className="earn__title">Calls your team cannot get to</h3>
              <p className="earn__text">
                Not every call gets worked, and the ones that do not are usually written off.
                Instead, list them in the Lead Marketplace at a price you choose. Other agents
                on the platform buy them, and what would have been nothing becomes something.
              </p>
              <p className="earn__foot">
                Your agency keeps {MARKETPLACE_SPLIT.agency} of each sale. We keep {MARKETPLACE_SPLIT.platform}.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── What we are not ────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <Lede
            eyebrow="Let's be clear"
            title="We are not in the business of selling you leads"
            text="A lot of platforms in this market make their money from the calls themselves, which means their interests and yours are not the same. Ours is a simpler arrangement."
          />

          <div className="grid grid--3 mt-xl">
            {CLARITY.map((c, i) => (
              <article key={c.title} className={`card card--hover reveal d${i + 1}`}>
                <span className="card__icon"><c.Icon size={20} /></span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
              </article>
            ))}
          </div>

          <div className="statement mt-xl reveal">
            <p className="statement__text">
              If you cannot set what your agents pay you, it is not really your operation.
              <b> Here, every one of those numbers is yours.</b>
            </p>
            <p className="statement__sub">
              We charge a flat monthly fee for the platform. What happens between your agency
              and your agents is between you and them.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who it is for ──────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <Lede
            eyebrow="Who it is for"
            title="Twenty agents or one. It works the same either way."
            text="If callers are reaching you and some of them are slipping through, this closes that gap."
          />

          <div className="audience mt-xl">
            <article className="aud aud--dark reveal d1">
              <span className="aud__ic"><IconBuilding size={22} /></span>
              <p className="aud__tag">Agency owners</p>
              <h3 className="aud__title">Run your whole call operation from one screen.</h3>
              <div className="checks">
                {[
                  'Decide what your agents pay and keep all of it',
                  'Send calls only to agents licensed for that state and product',
                  'Sell the calls nobody could get to, at your price',
                  'See what every call cost and what it earned',
                ].map((t) => (
                  <p key={t} className="checks__item">
                    <span className="checks__mark"><IconCheck size={13} /></span>
                    <span>{t}</span>
                  </p>
                ))}
              </div>
              <div className="aud__foot">
                <button className="btn btn--onink" onClick={() => onNavigate('agencies')}>
                  For Agencies
                  <IconArrowRight size={16} />
                </button>
              </div>
            </article>

            <article className="aud reveal d2">
              <span className="aud__ic"><IconUser size={22} /></span>
              <p className="aud__tag">Agents</p>
              <h3 className="aud__title">Spend your day talking, not dialling.</h3>
              <div className="checks">
                {[
                  'Join an agency already on the platform',
                  'Choose your states and the products you sell',
                  'Take live calls from people who rang in themselves',
                  'Buy extra leads from the marketplace on quiet days',
                ].map((t) => (
                  <p key={t} className="checks__item">
                    <span className="checks__mark"><IconCheck size={13} /></span>
                    <span>{t}</span>
                  </p>
                ))}
              </div>
              <div className="aud__foot">
                <button className="btn btn--ghost" onClick={() => onNavigate('agents')}>
                  For Agents
                  <IconArrowRight size={16} />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Trust ──────────────────────────────────────────────────────── */}
      <section className="section section--ink">
        <div className="shell">
          <Lede
            eyebrow="Built to be trusted"
            title="Handled carefully, because it is people's money and people's calls"
            text="Money moving between an agency and its agents, phone conversations with the public, and licence rules that carry real consequences. All three deserve care."
          />

          <div className="trust mt-xl">
            {TRUST.map((t, i) => (
              <div key={t.title} className={`trust__item reveal d${(i % 4) + 1}`}>
                <span className="trust__ic"><t.Icon size={19} /></span>
                <div>
                  <p className="trust__title">{t.title}</p>
                  <p className="trust__text">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="btn-row btn-row--center mt-xl">
            <button className="btn btn--onink-ghost" onClick={() => onNavigate('trust')}>
              Read how we handle your data
              <IconArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Questions ──────────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell shell--narrow">
          <Lede eyebrow="Common questions" title="The things people ask first" />
          <div className="mt-xl reveal">
            <Faq items={FAQS} />
          </div>
          <p className="text-center mt-lg form-note">
            Something not covered here?{' '}
            <button className="btn btn--quiet" onClick={() => onNavigate('contact')}>Ask us directly</button>
          </p>
        </div>
      </section>

      <CtaBand onOpenModal={onOpenModal} onNavigate={onNavigate} />
    </>
  );
}

export default HomePage;
