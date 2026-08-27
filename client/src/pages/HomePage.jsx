import Lede from '../components/Lede';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import CallStage from '../components/CallStage';
import { MARKETPLACE_SPLIT } from '../lib/site';
import {
  IconArrowRight, IconCheck, IconPhone, IconPhoneIn, IconUser, IconTag,
  IconUsers, IconPlus, IconInfo, IconBuilding, IconShield, IconLock, IconEye,
  IconList, IconMegaphone, IconHeadset, IconLayers,
} from '../lib/icons';

/* ── What a bought lead costs, against a call that comes in ─────────────────
 * Not one amount anywhere, on purpose. Every stage is a thing that happens and
 * a thing that gets paid for, and the argument is the count of them — what any
 * one costs is the reader's own number, not ours to invent. */

const BOUGHT_LEAD = [
  { label: 'You buy the lead', note: 'A name and a number, and nothing said yet' },
  { label: 'It goes into your software', note: 'Something has to hold it, and that is a monthly bill' },
  { label: 'Texts and emails go out', note: 'Charged by the message' },
  { label: 'Somebody starts dialling', note: 'Another tool to pay for before a word is said' },
  { label: 'You try again. And again.', note: "Paid for in your agents' hours" },
  { label: 'You get hold of them', note: 'If they pick up at all' },
  { label: 'A conversation', note: 'The only step that was ever going to earn', win: true },
];

const INBOUND = [
  { label: 'The phone rings', note: 'They called you' },
  { label: 'They already want to talk', note: 'Wanting to talk is already in the price' },
  { label: 'Everyone who can take it is asked', note: 'Licensed for it and free right now — the first to accept is put straight through' },
  { label: 'A conversation', note: 'The thing you were paying for all along', win: true },
];

/* ── The sources side of an agency's account ────────────────────────────────
 * An illustration of the shape of that screen, and the caption below it says
 * so. Meta is the one advertising account the product actually connects to, so
 * it is the only one named. The people an agency buys calls from are in the
 * list because they are where calls come from — not because we integrate with
 * them, which is what the caption is there to keep straight. */

const SOURCES = [
  {
    Icon: IconPhone,
    name: 'Your own phone numbers',
    sub: 'The numbers your adverts already carry, on your own Twilio account',
    tag: 'Connected',
    tone: 'positive',
  },
  {
    Icon: IconMegaphone,
    name: 'Meta Ads',
    sub: 'Facebook and Instagram — your account, your spend',
    tag: 'Your spend',
    tone: 'ink',
  },
  {
    Icon: IconUsers,
    name: 'The people you buy calls from',
    sub: 'You agree the price and pay them directly',
    tag: 'We take no cut',
    tone: 'blue',
  },
  {
    Icon: IconPlus,
    name: 'Add another source',
    sub: 'Whatever else brings people to your phone',
    tag: 'Add',
    tone: 'ink',
  },
];

const NO_STRINGS = [
  'Nobody tells you where your calls have to come from.',
  'Nobody tells you what a call has to cost.',
  'Nothing you have already built has to be pulled apart and started again.',
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
    a: 'You do. You set the monthly amount, the amount per call, or both. It goes into your account. There is no fixed agent price and we take no share of it.',
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

/* The scale every path is measured on — seven units, because that is what the
 * long path takes. Both tracks in the sheet use the same seven columns, so the
 * unit width never changes between them and the length difference is exact. */
const LADDER_UNITS = 7;

/* One track of the comparison sheet. A path shorter than the scale leaves the
 * remaining units on the sheet as hatched, measured space — the steps that
 * never have to happen. */
function Path({ tone, tag, caption, pays, steps, delay }) {
  const good = tone === 'good';
  const unused = LADDER_UNITS - steps.length;
  return (
    <div className={`ladder__path${good ? ' ladder__path--good' : ''} reveal d${delay}`}>
      <div className="ladder__head">
        <span className={`pill ${good ? 'pill--positive' : 'pill--caution'}`}>{tag}</span>
        <p className="ladder__caption">{caption}</p>
        <span className="ladder__sum">
          <span className="ladder__kicker">What you actually pay for</span>
          <span className="ladder__sum-v">{pays}</span>
        </span>
      </div>

      <div className="ladder__track">
        {steps.map((s, i) => (
          <div key={s.label} className={`ladder__stage${s.win ? ' ladder__stage--win' : ''}`}>
            <span className="ladder__n">
              {String(i + 1).padStart(2, '0')}
              {s.win && <IconCheck size={11} />}
            </span>
            <span className="ladder__stage-label">{s.label}</span>
            <span className="ladder__stage-note">{s.note}</span>
          </div>
        ))}
        {unused > 0 && (
          <div className="ladder__void" aria-hidden="true" style={{ gridColumn: `span ${unused}` }}>
            {Array.from({ length: unused }, (_, i) => <span key={i} />)}
          </div>
        )}
      </div>
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
              You know what a lead costs. <em>Now find out what a conversation costs.</em>
            </h1>

            <p className="hero__text">
              Bring the marketing that already works for your agency, and whoever
              already sends you calls — or let us introduce you to someone who does.
              Every call goes in front of the agents who are licensed for it and free
              right now, and every charge is itemised against the call it came from.
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
              <span><IconCheck size={15} />Your own numbers</span>
              <span><IconCheck size={15} />Your own prices</span>
              <span><IconCheck size={15} />Your rules on who takes what</span>
              <span><IconCheck size={15} />Your figures, in one place</span>
            </p>
          </div>

          <CallStage />
        </div>
      </section>

      {/* ── A lead is not a conversation ───────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <Lede
            eyebrow="The hidden cost of a cheap lead"
            title="A lead is not a conversation. It is a long way from one."
            text="Have you ever worked out what a lead costs you by the time somebody actually speaks to it? The price on the invoice is only the start. The software you keep it in, the texts and the emails, the dialling, the chasing, and the hours your agents spend doing all of it are the rest of the bill."
          />

          <div className="ladder mt-xl">
            <span className="ladder__reg ladder__reg--tl" aria-hidden="true" />
            <span className="ladder__reg ladder__reg--tr" aria-hidden="true" />
            <span className="ladder__reg ladder__reg--bl" aria-hidden="true" />
            <span className="ladder__reg ladder__reg--br" aria-hidden="true" />
            <Path
              tone="bad"
              delay={1}
              tag="Form lead"
              caption="Every step adds cost. Only the last one can earn."
              pays="The lead, the tools around it, and your agents' hours"
              steps={BOUGHT_LEAD}
            />
            {/* The shared scale, between the tracks: seven graduations, and a
                solid segment stopping where the inbound path stops. */}
            <div className="ladder__ruler reveal d2" aria-hidden="true">
              {Array.from({ length: LADDER_UNITS }, (_, i) => (
                <span key={i} className="ladder__unit" />
              ))}
              <span className="ladder__mark" />
            </div>
            <Path
              tone="good"
              delay={3}
              tag="Inbound call"
              caption="The caller has already decided to talk. That is the part you are paying for."
              pays="The conversation"
              steps={INBOUND}
            />
          </div>

          <p className="ladder__foot reveal">
            Form leads can work, and plenty of good agencies run on them. The point is
            narrower: the price on the lead is not the price of getting someone talking.
          </p>
        </div>
      </section>

      {/* ── Bring your own marketing ───────────────────────────────────── */}
      <section className="section section--ink">
        <div className="shell split">
          <div className="reveal">
            <p className="eyebrow">Bring your own marketing</p>
            <h2 className="lede__title">Your marketing. Your numbers. Your prices.</h2>
            <p className="lede__text">
              Bring the marketing that already works for your agency. Keep your own
              Twilio account and the numbers your adverts already carry, connect your
              Meta ad account, and what you spend on advertising sits in the same place
              as the calls you are working.
            </p>

            <div className="callout mt-lg">
              <span className="callout__ic"><IconPhoneIn size={18} /></span>
              <div>
                <p className="callout__k">Need calls now?</p>
                <p className="callout__text">
                  We will introduce you to a company that sells inbound calls to agencies
                  like yours. <strong>You agree the rate with them and you pay them
                  directly.</strong> We charge for the platform, never a cut of what you
                  spend on calls.
                </p>
              </div>
            </div>

            <div className="checks mt-lg">
              {NO_STRINGS.map((t) => (
                <p key={t} className="checks__item">
                  <span className="checks__mark"><IconCheck size={13} /></span>
                  <span>{t}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="split__media reveal d2">
            <div className="panel panel--onink">
              <div className="panel__head">
                <span className="panel__title"><IconLayers size={16} />What you bring</span>
              </div>

              <div className="panel__items">
                {SOURCES.map((s) => (
                  <div key={s.name} className="panel__item">
                    <span className="panel__item-ic"><s.Icon size={15} /></span>
                    <span>
                      <span className="panel__item-k">{s.name}</span>
                      <span className="panel__item-s">{s.sub}</span>
                    </span>
                    <span className={`pill pill--${s.tone}`}>{s.tag}</span>
                  </div>
                ))}
              </div>

              <p className="panel__note">
                <IconInfo size={14} />
                An illustration, not a screenshot. Meta is the one advertising account
                that connects; whatever you pay the people who send you calls stays
                between you and them.
              </p>
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
                text: <>Everyone who matches is offered the call at once. The <strong>first to accept</strong> is put straight through — no dialling, no transferring, no waiting.</>,
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
                amount, an amount for each call they take, or both. It
                goes into your account. <strong>No invoices to raise and nobody to chase.</strong>
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
                on the platform buy them, and <strong>what would have been nothing becomes something</strong>.
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
            text="You pay us for the platform. Your callers stay yours, your agents stay yours, and what passes between you and them is set by you, not by us."
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
              The prices inside your agency are yours to set — what an agent pays to join,
              and what they pay for a call.
              <b> Ours is a flat monthly fee, and it never moves with yours.</b>
            </p>
            <p className="statement__sub">
              Anything else we charge is listed on the pricing page, in full.
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

          <div className="whoc mt-xl">
            <span className="whoc__reg whoc__reg--tl" aria-hidden="true" />
            <span className="whoc__reg whoc__reg--tr" aria-hidden="true" />
            <span className="whoc__reg whoc__reg--bl" aria-hidden="true" />
            <span className="whoc__reg whoc__reg--br" aria-hidden="true" />

            <article className="whoc__half whoc__half--agency reveal d1">
              <div className="whoc__rule" aria-hidden="true" />
              <header className="whoc__head">
                <span className="whoc__ic"><IconBuilding size={18} /></span>
                <p className="whoc__tag">Agency owners</p>
              </header>
              <h3 className="whoc__title">Run your whole call operation from one screen.</h3>
              <div className="whoc__checks">
                {[
                  'Decide what your agents pay and keep all of it',
                  'Send calls only to agents licensed for that state and product',
                  'Sell the calls nobody could get to, at your price',
                  'See what every call cost and what it earned',
                ].map((t) => (
                  <p key={t} className="whoc__row">
                    <span className="whoc__mark"><IconCheck size={13} /></span>
                    <span>{t}</span>
                  </p>
                ))}
              </div>
              <div className="whoc__foot">
                <button className="btn btn--primary" onClick={() => onNavigate('agencies')}>
                  For Agencies
                  <IconArrowRight size={16} />
                </button>
              </div>
            </article>

            <article className="whoc__half reveal d2">
              <div className="whoc__rule" aria-hidden="true" />
              <header className="whoc__head">
                <span className="whoc__ic"><IconUser size={18} /></span>
                <p className="whoc__tag">Agents</p>
              </header>
              <h3 className="whoc__title">Spend your day talking,<br aria-hidden="true" /> not dialling.</h3>
              <div className="whoc__checks">
                {[
                  'Join an agency already on the platform',
                  'Choose your states and the products you sell',
                  'Take live calls from people who rang in themselves',
                  'Buy extra leads from the marketplace on quiet days',
                ].map((t) => (
                  <p key={t} className="whoc__row">
                    <span className="whoc__mark"><IconCheck size={13} /></span>
                    <span>{t}</span>
                  </p>
                ))}
              </div>
              <div className="whoc__foot">
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
