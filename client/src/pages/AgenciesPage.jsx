import Lede from '../components/Lede';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import {
  IconArrowRight, IconCheck, IconSliders, IconUsers, IconTag, IconChart,
  IconShield, IconList, IconMegaphone, IconPlay, IconDownload, IconCard,
  IconBuilding, IconTarget,
} from '../lib/icons';

const CONTROLS = [
  {
    Icon: IconUsers,
    title: 'Who is on your team',
    text: 'Invite agents, approve them, and switch anyone on or off. Nobody takes a call for you until you say so.',
  },
  {
    Icon: IconSliders,
    title: 'Who gets which calls',
    text: 'Match agents to the states they are licensed in and the products they sell. We check both before a call is ever offered to them.',
  },
  {
    Icon: IconCard,
    title: 'What your agents pay',
    text: 'Set a monthly amount, an amount for each call, or both. We collect it and it goes to your own Stripe account.',
  },
  {
    Icon: IconTag,
    title: 'What your leads sell for',
    text: 'Put a price on the calls nobody worked and let other agents buy them. Newer leads and ones with a message can be priced higher.',
  },
  {
    Icon: IconChart,
    title: 'What everything is doing',
    text: 'Calls taken, calls missed, time on the phone, and what each agent brought in — all without building a single report.',
  },
  {
    Icon: IconShield,
    title: 'What gets recorded and kept',
    text: 'Every call is recorded and kept with the rest of its details, so you can listen back whenever a question comes up.',
  },
];

const SETUP = [
  {
    title: 'Set up your agency',
    text: 'Your name, your details, and the products you sell. This is what your agents see when they join you.',
  },
  {
    title: 'Add your numbers',
    text: 'Bring your own phone provider, or let us set the numbers up and look after them for you. Either way your adverts stay as they are.',
  },
  {
    title: 'Bring your agents in',
    text: 'Send invitations, check their licences, and switch them on. You are never charged for someone who never gets started.',
  },
  {
    title: 'Turn the calls on',
    text: 'From the first call onward, everything is offered, connected, recorded and settled without anyone touching it.',
  },
];

const SOURCES = [
  { label: 'Facebook', width: '88%' },
  { label: 'Google', width: '64%' },
  { label: 'Referrals', width: '45%' },
  { label: 'Bought leads', width: '30%' },
];

const FAQS = [
  {
    q: 'Do we have to move away from the phone provider we use now?',
    a: 'No. Keep your own provider and there is no extra fee for it. If you would rather not manage numbers at all, we will set them up and look after them for a flat monthly amount, and pass on call minutes at exactly what they cost us.',
  },
  {
    q: 'How do we get paid by our agents?',
    a: 'Through your own Stripe account. Their monthly amount and whatever they pay for each call go straight to you. We never hold that money and never take a share of it.',
  },
  {
    q: 'When does an agent start costing us anything?',
    a: 'Only once they actually get started — logged in, payment set up, and their first payment through. Invitations and approvals cost nothing, however many of them there are.',
  },
  {
    q: 'What if an agent stops working out?',
    a: 'Switch them off. Calls stop reaching them straight away, and they stop counting toward what you pay from that point on.',
  },
  {
    q: 'Can we use our own name and branding?',
    a: 'Yes. Your name, your colours and your own web address, so your agents only ever see your brand. It is an add-on on the Agency plan and already included on Enterprise.',
  },
  {
    q: 'Can we see which adverts are actually producing conversations?',
    a: 'Yes. Connect your advertising accounts and each call is matched back to the campaign that caused it, so you are looking at what it cost to get a real conversation rather than a form fill.',
  },
];

function AgenciesPage({ onNavigate, onOpenModal }) {
  return (
    <>
      <section className="pagehero">
        <div className="shell">
          <p className="eyebrow eyebrow--center">For agency owners</p>
          <h1 className="pagehero__title">
            Your callers. Your agents. <em>Your numbers.</em>
          </h1>
          <p className="pagehero__text">
            You already spend money bringing people in. InboundSelect makes sure those
            people reach an agent while they are still interested — and lets you decide
            what that is worth.
          </p>
          <div className="btn-row pagehero__actions">
            <button className="btn btn--primary btn--lg" onClick={() => onOpenModal('agency')}>
              Talk to Our Team
              <IconArrowRight size={17} />
            </button>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate('pricing')}>
              See pricing
            </button>
          </div>
        </div>
      </section>

      {/* ── What you control ───────────────────────────────────────────── */}
      <section className="section section--tight">
        <div className="shell">
          <Lede
            eyebrow="What you decide"
            title="Six decisions, and the platform follows all of them"
            text="Nothing here is set by us. You make the call on each of these, and the system simply does what you said."
          />
          <div className="grid grid--3 mt-xl">
            {CONTROLS.map((c, i) => (
              <article key={c.title} className={`card card--hover reveal d${(i % 3) + 1}`}>
                <span className="card__icon"><c.Icon size={20} /></span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Setup ──────────────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <Lede
            eyebrow="Getting started"
            title="Set it up once, in about a morning"
            text="You can build the whole thing before you pay us anything. Calls start moving once you are ready."
          />
          <div className="steps steps--row mt-xl">
            {SETUP.map((s, i) => (
              <article key={s.title} className={`step reveal d${i + 1}`}>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marketing view ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell split">
          <div className="reveal">
            <p className="eyebrow">Your advertising</p>
            <h2 className="lede__title">
              Find out which adverts produce conversations, not just form fills
            </h2>
            <p className="lede__text">
              A cheap lead that never speaks to anybody is not cheap. Connect your
              advertising accounts and every call is matched back to the campaign
              behind it, so you can see what a real conversation actually costs you.
            </p>

            <div className="checks mt-lg">
              {[
                ['Connect your ad accounts', 'Facebook and Google spend sits next to your call results, in one place.'],
                ['Cost per conversation', 'Not cost per lead — what it took to get someone actually talking to an agent.'],
                ['Spot the waste early', 'The weak campaigns stand out before the month is over, not after.'],
              ].map(([k, v]) => (
                <p key={k} className="checks__item">
                  <span className="checks__mark"><IconCheck size={13} /></span>
                  <span><strong>{k}</strong> — {v}</span>
                </p>
              ))}
            </div>

            <div className="btn-row mt-lg">
              <button className="btn btn--ghost" onClick={() => onOpenModal('agency')}>
                See it on your own campaigns
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="split__media reveal d2">
            <div className="panel">
              <div className="panel__head">
                <span className="panel__title"><IconMegaphone size={16} />Where your calls came from</span>
                <span className="pill pill--blue">Last 30 days</span>
              </div>
              <div className="panel__rows">
                {SOURCES.map((s) => (
                  <div key={s.label} className="panel__row">
                    <span className="panel__row-label">{s.label}</span>
                    <span className="panel__track">
                      <span className="panel__bar" style={{ width: s.width }} />
                    </span>
                  </div>
                ))}
              </div>
              <p className="panel__note">
                <IconTarget size={14} />
                An illustration of the layout. Your own figures appear here once your
                accounts are connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reporting ──────────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <Lede
            eyebrow="Keeping records"
            title="Everything is written down as it happens"
            text="No spreadsheets to keep up to date, and nothing to piece together at the end of the month."
          />
          <div className="grid grid--4 mt-xl">
            {[
              { Icon: IconPlay, title: 'Recordings', text: 'Every call is saved and can be played back from the same place you found it.' },
              { Icon: IconList, title: 'Call history', text: 'Who called, who took it, how long it ran, and how it ended.' },
              { Icon: IconChart, title: 'Team activity', text: 'How each agent is doing, without asking anyone to fill anything in.' },
              { Icon: IconDownload, title: 'Exports', text: 'Take any of it out as a spreadsheet whenever you need it elsewhere.' },
            ].map((c, i) => (
              <article key={c.title} className={`card card--tint reveal d${(i % 4) + 1}`}>
                <span className="card__icon"><c.Icon size={19} /></span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing pointer ────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <div className="statement reveal">
            <span className="card__icon" style={{ marginInline: 'auto' }}><IconBuilding size={20} /></span>
            <p className="statement__text">
              A plan for a team of five, a plan for sixty, and one for working on your own.
              <b> All of them include the whole platform.</b>
            </p>
            <p className="statement__sub">
              No cut-down versions and nothing held back for a higher tier. What changes
              between plans is how many agents you can carry and how many calls are
              included each month.
            </p>
            <div className="btn-row btn-row--center mt-lg">
              <button className="btn btn--primary" onClick={() => onNavigate('pricing')}>
                See what it costs
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell shell--narrow">
          <Lede eyebrow="Questions" title="What agency owners ask us" />
          <div className="mt-xl reveal"><Faq items={FAQS} /></div>
        </div>
      </section>

      <CtaBand
        title="Bring us one week of your calls"
        text="We will look at how they arrive today, where they are being lost, and what would change. If nothing much would, we will say so."
        intent="agency"
        onOpenModal={onOpenModal}
        onNavigate={onNavigate}
      />
    </>
  );
}

export default AgenciesPage;
