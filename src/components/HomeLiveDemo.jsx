import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const steps = [
  {
    step: '01',
    tag: 'LEAD COMES IN',
    title: 'Prospect calls from any source',
    desc: "Whether it's Meta Ads, Google, or a lead vendor — InboundSelect picks up the call the moment it comes in.",
  },
  {
    step: '02',
    tag: 'AGENT ALERTED',
    title: 'The right agent gets a live alert',
    desc: 'Matched by licensed state, product, and real-time availability. The agent sees the alert and accepts in one tap.',
  },
  {
    step: '03',
    tag: 'CALL CONNECTED',
    title: 'Both sides bridged in seconds',
    desc: 'The prospect and agent are connected live. The session is logged, recorded, and attributed back to its source.',
  },
];

function HomeLiveDemo({ onOpenWaitlist }) {
  const sectionRef    = useRef(null);
  const scrollAreaRef = useRef(null);
  const headerRef     = useRef(null);
  const cardRefs      = useRef([]);
  const stepRefs      = useRef([]);
  const currentStep   = useRef(-1);

  useEffect(() => {
    const cards = cardRefs.current;
    const stepEls = stepRefs.current;
    let hasAnimatedHeader = false;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    // ── Set initial state immediately ──────────────────────────
    cards.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30, scale: i === 0 ? 1 : 0.97 });
    });
    stepEls.forEach((step, i) => {
      if (!step) return;
      gsap.set(step, { opacity: i === 0 ? 1 : 0.3 });
      const desc = step.querySelector('.live-demo__step-desc');
      if (desc) gsap.set(desc, { maxHeight: i === 0 ? 120 : 0, opacity: i === 0 ? 1 : 0 });
    });
    currentStep.current = 0;

    // ── Transition function ─────────────────────────────────────
    const goTo = (next) => {
      if (currentStep.current === next) return;
      const prev = currentStep.current;
      currentStep.current = next;

      // Cards
      if (cards[prev]) {
        gsap.to(cards[prev], { opacity: 0, y: -30, scale: 0.97, duration: 0.4, ease: 'power2.in', overwrite: 'auto' });
      }
      if (cards[next]) {
        gsap.to(cards[next], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
      }

      // Steps
      stepEls.forEach((step, i) => {
        if (!step) return;
        gsap.to(step, { opacity: i === next ? 1 : 0.3, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
        const desc = step.querySelector('.live-demo__step-desc');
        if (desc) {
          gsap.to(desc, {
            maxHeight: i === next ? 120 : 0,
            opacity:   i === next ? 1 : 0,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      });
    };

    // ── Header entrance + scroll-driven switcher ───────────────
    const handleScroll = () => {
      const headerEl = headerRef.current;
      const scrollAreaEl = scrollAreaRef.current;
      if (!scrollAreaEl) return;

      // Animate header once when it enters viewport.
      if (headerEl && !hasAnimatedHeader) {
        const rect = headerEl.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          hasAnimatedHeader = true;
          gsap.fromTo(
            headerEl,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
          );
        }
      }

      // Derive progress from sticky section geometry (0 -> 1).
      const rect = scrollAreaEl.getBoundingClientRect();
      const totalScrollable = Math.max(rect.height - window.innerHeight, 1);
      const rawProgress = -rect.top / totalScrollable;
      const p = clamp(rawProgress, 0, 1);
      const next = p < 0.333 ? 0 : p < 0.667 ? 1 : 2;
      goTo(next);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    // Initial paint sync.
    requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      gsap.killTweensOf([...cards, ...stepEls, headerRef.current]);
    };
  }, []);

  return (
    <section className="live-demo" ref={sectionRef}>

      {/* ── Non-sticky header ──────────────────────────────── */}
      <div className="live-demo__header" ref={headerRef}>
        <div className="section__label-tag">SEE IT IN ACTION</div>
        <h2 className="live-demo__heading">Watch a lead become<br />a live conversation</h2>
        <p className="live-demo__sub">
          A prospect calls in from any source. The platform finds the right agent, sends a live alert, bridges the call, and logs the session.
        </p>
        <button className="btn btn--fill btn--sm" onClick={onOpenWaitlist}>
          Book a Live Demo
        </button>
      </div>

      {/* ── Scroll area (400vh) ─────────────────────────────── */}
      <div className="live-demo__scroll-area" ref={scrollAreaRef}>
        <div className="live-demo__sticky">

          {/* Left — stacked video cards */}
          <div className="live-demo__cards-col">
            {steps.map((s, i) => (
              <div
                key={s.step}
                ref={el => cardRefs.current[i] = el}
                className="live-demo__card"
              >
                <div className="live-demo__video-ph">
                  <span className="live-demo__card-step">{s.step}</span>
                  <div className="live-demo__play">
                    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
                      <polygon points="9,6 21,13 9,20" fill="white" />
                    </svg>
                  </div>
                  <span className="live-demo__ph-label">{s.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right — step indicators */}
          <div className="live-demo__steps-col">
            {steps.map((s, i) => (
              <div
                key={s.step}
                ref={el => stepRefs.current[i] = el}
                className="live-demo__step"
              >
                <div className="live-demo__step-num">{s.step}</div>
                <div className="live-demo__step-body">
                  <span className="live-demo__step-tag">{s.tag}</span>
                  <p className="live-demo__step-title">{s.title}</p>
                  <p className="live-demo__step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}

export default HomeLiveDemo;
