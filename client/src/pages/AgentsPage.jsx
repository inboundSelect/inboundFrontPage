import Lede from '../components/Lede';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import {
  IconArrowRight, IconCheck, IconPhoneIn, IconTag, IconCard, IconPlay,
  IconChart, IconSliders, IconClock, IconList, IconUser, IconDownload,
} from '../lib/icons';

const GETS = [
  {
    Icon: IconPhoneIn,
    title: 'Live calls, as they happen',
    text: 'When a call matches what you sell and where you are licensed, it appears on your screen. Accept it and you are talking to someone who rang in themselves.',
  },
  {
    Icon: IconSliders,
    title: 'Your own on and off switch',
    text: 'Available when you are ready, unavailable when you are not. Calls only reach you while you are switched on.',
  },
  {
    Icon: IconTag,
    title: 'Extra leads on quiet days',
    text: 'Browse the calls agencies could not get to. Filter by state, product and how recent they are, then buy the ones that suit your book.',
  },
  {
    Icon: IconPlay,
    title: 'Your calls, recorded',
    text: 'Every conversation is saved and you can listen back to your own whenever you want.',
  },
  {
    Icon: IconCard,
    title: 'Clear, itemised billing',
    text: 'Every charge and every top-up is listed with a date and an amount. You always know what you have paid and what for.',
  },
  {
    Icon: IconChart,
    title: 'How you are doing',
    text: 'Calls taken, time on the phone, and where you stand against the rest of the team.',
  },
];

const START = [
  {
    title: 'Join an agency',
    text: 'Agents come in through an agency already on the platform. If you do not have one yet, tell us and we will point you in the right direction.',
  },
  {
    title: 'Add your licence details',
    text: 'Tell us which states you are licensed in and which products you sell. This is what decides which calls can reach you.',
  },
  {
    title: 'Set up your payments',
    text: 'Your agency sets what taking calls costs. Add your card and top up your balance so nothing stops mid-conversation.',
  },
  {
    title: 'Switch yourself on',
    text: 'From then on, matching calls appear on your screen. Accept, talk, and everything else is written down for you.',
  },
];

const FAQS = [
  {
    q: 'Do I need to run my own advertising?',
    a: 'No. The callers come from the agency you join — their adverts, their campaigns, their referrals. Your side of it is being ready to talk when one comes through.',
  },
  {
    q: 'What does it cost me?',
    a: 'That is set by your agency, not by us. It is usually a monthly amount, an amount for each call you take, or both. Whatever it is, you can see it before you agree to it, and every charge afterwards is itemised.',
  },
  {
    q: 'Will I get calls I am not licensed for?',
    a: 'No. Your states and your products are checked before a call is ever offered to you, so what reaches you is always something you can legally sell.',
  },
  {
    q: 'What if I step away for an hour?',
    a: 'Switch yourself to unavailable. Nothing reaches you while you are off, and nothing is held against you for it. Switch back on when you are ready.',
  },
  {
    q: 'Can I buy leads instead of waiting for a call?',
    a: 'Yes. The marketplace is always open. You can see the state, the product, how old the lead is and whether a message was left, all before you buy. Contact details appear as soon as the purchase goes through.',
  },
  {
    q: 'What happens if I want to leave?',
    a: 'You ask to stop, and you keep working through to the end of the period you have already paid for. You are not charged again after that, and nothing you have paid for is taken away early.',
  },
];

function AgentsPage({ onNavigate, onOpenModal }) {
  return (
    <>
      <section className="pagehero">
        <div className="shell">
          <p className="eyebrow eyebrow--center">For licensed agents</p>
          <h1 className="pagehero__title">
            Stop dialling. <em>Start answering.</em>
          </h1>
          <p className="pagehero__text">
            Every call that reaches you is someone who picked up the phone themselves.
            No lists, no cold calls, no leaving messages — just conversations with people
            who already want to talk.
          </p>
          <div className="btn-row pagehero__actions">
            <button className="btn btn--primary btn--lg" onClick={() => onOpenModal('agent')}>
              Get Agent Access
              <IconArrowRight size={17} />
            </button>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate('marketplace')}>
              See the Lead Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* ── Why inbound is different ───────────────────────────────────── */}
      <section className="section section--tight">
        <div className="shell split">
          <div className="reveal">
            <p className="eyebrow">Why it is different</p>
            <h2 className="lede__title">They rang you. That changes the whole conversation.</h2>
            <p className="lede__text">
              Someone who filled in a form and then picked up the phone has put their hand
              up twice. Most agents never get near that person, because by the time anyone
              rings back they have moved on. Here the call reaches you while they are still
              waiting.
            </p>
            <div className="checks mt-lg">
              {[
                ['No dialling lists', 'The call arrives on your screen. You accept it and you are connected.'],
                ['No cold openings', 'They asked to speak to someone about the exact product you sell.'],
                ['No wasted days', 'When calls are slow, buy a few leads and work those instead.'],
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
                <span className="panel__title"><IconUser size={16} />Your day</span>
                <span className="pill pill--positive pill--live"><i className="pill__dot" />Available</span>
              </div>
              <div className="panel__items">
                {[
                  { Icon: IconPhoneIn, k: 'A call arrives', s: 'Matched to your states and products' },
                  { Icon: IconClock, k: 'You accept it', s: 'Connected while they are still on the line' },
                  { Icon: IconPlay, k: 'It is recorded', s: 'Yours to listen back to afterwards' },
                  { Icon: IconList, k: 'It is logged', s: 'Time, outcome and cost, written down for you' },
                ].map((r) => (
                  <div key={r.k} className="panel__item">
                    <span className="panel__item-ic"><r.Icon size={15} /></span>
                    <span>
                      <span className="panel__item-k">{r.k}</span>
                      <span className="panel__item-s">{r.s}</span>
                    </span>
                    <IconCheck size={15} style={{ color: 'var(--positive)' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ───────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <Lede
            eyebrow="What you get"
            title="Everything in one place, so the admin stays out of your way"
            text="One screen for live calls, extra leads, your recordings and your billing."
          />
          <div className="grid grid--3 mt-xl">
            {GETS.map((c, i) => (
              <article key={c.title} className={`card card--hover reveal d${(i % 3) + 1}`}>
                <span className="card__icon"><c.Icon size={20} /></span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting started ────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <Lede
            eyebrow="Getting started"
            title="From signing up to your first call"
            text="Four steps, and none of them take long."
          />
          <div className="steps steps--row mt-xl">
            {START.map((s, i) => (
              <article key={s.title} className={`step reveal d${i + 1}`}>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fairness ───────────────────────────────────────────────────── */}
      <section className="section section--ink">
        <div className="shell">
          <Lede
            eyebrow="Straight dealing"
            title="You should always know what you are paying for"
            text="You are spending your own money to be here. The least we can do is make every part of it visible."
          />
          <div className="trust mt-xl">
            {[
              { Icon: IconList, title: 'Every charge is itemised', text: 'Each amount is tied to the call behind it — when it was, how long it ran, and what it was for.' },
              { Icon: IconDownload, title: 'Your records are yours', text: 'Take your call history and your activity out as a spreadsheet whenever you like.' },
              { Icon: IconPlay, title: 'Nothing disappears', text: 'Recordings, purchases and payments all stay where you can find them.' },
              { Icon: IconCard, title: 'No surprise charges', text: 'You are only charged for what you agreed to with your agency, and only when it happens.' },
            ].map((t, i) => (
              <div key={t.title} className={`trust__item reveal d${(i % 4) + 1}`}>
                <span className="trust__ic"><t.Icon size={19} /></span>
                <div>
                  <p className="trust__title">{t.title}</p>
                  <p className="trust__text">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell shell--narrow">
          <Lede eyebrow="Questions" title="What agents ask us" />
          <div className="mt-xl reveal"><Faq items={FAQS} /></div>
        </div>
      </section>

      <CtaBand
        title="Ready to take calls?"
        text="Tell us a little about yourself and the states you are licensed in. We will connect you with an agency on the platform that is taking on agents."
        primary="Get Agent Access"
        intent="agent"
        onOpenModal={onOpenModal}
        onNavigate={onNavigate}
        fine="No cost to ask. Your agency sets what taking calls costs, and you see it before you agree."
      />
    </>
  );
}

export default AgentsPage;
