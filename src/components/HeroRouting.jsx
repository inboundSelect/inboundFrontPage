import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// Product-true "live call routing" visual — replaces the old fake revenue/
// pipeline dashboard. Shows an inbound call being matched to an available,
// licensed agent, with live-metering figures. GSAP drives the cycle; the
// ripple + spark travel are CSS. Reduced-motion renders a static end-state.

const SOURCES = [
  { label: 'Google Ads', state: 'FL', product: 'Final Expense' },
  { label: 'Lead vendor', state: 'TX', product: 'Medicare' },
  { label: 'Referral', state: 'OH', product: 'Life' },
  { label: 'Google Ads', state: 'GA', product: 'Final Expense' },
];
const AGENTS = ['JM', 'AR', 'DK', 'SP', 'TL', 'RN'];

function HeroRouting() {
  const rootRef = useRef(null);
  const srcRef = useRef(null);
  const stateRef = useRef(null);
  const productRef = useRef(null);
  const statusRef = useRef(null);
  const routedRef = useRef(null);
  const agentEls = useRef([]);

  useEffect(() => {
    const setText = (el, v) => { if (el) el.textContent = v; };
    const clearAgents = () => agentEls.current.forEach((a) => a && a.classList.remove('is-selected'));

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const routed = { v: 1180 };
        gsap.to(routed, {
          v: 1284, duration: 2.2, ease: 'power1.out', snap: { v: 1 },
          onUpdate: () => setText(routedRef.current, Math.round(routed.v).toLocaleString()),
        });

        const tl = gsap.timeline({ repeat: -1 });
        SOURCES.forEach((src, idx) => {
          tl.call(() => {
            clearAgents();
            setText(srcRef.current, src.label);
            setText(stateRef.current, src.state);
            setText(productRef.current, src.product);
            setText(statusRef.current, 'Matching licensed agent…');
            if (statusRef.current) statusRef.current.classList.remove('is-connected');
          })
          .to({}, { duration: 1.4 })
          .call(() => {
            setText(statusRef.current, 'Connected · bridging call');
            if (statusRef.current) statusRef.current.classList.add('is-connected');
            const el = agentEls.current[idx % AGENTS.length];
            if (el) el.classList.add('is-selected');
          })
          .to({}, { duration: 2.2 });
        });
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        setText(srcRef.current, SOURCES[0].label);
        setText(stateRef.current, SOURCES[0].state);
        setText(productRef.current, SOURCES[0].product);
        setText(statusRef.current, 'Connected · bridging call');
        statusRef.current?.classList.add('is-connected');
        agentEls.current[0]?.classList.add('is-selected');
        setText(routedRef.current, '1,284');
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-routing" ref={rootRef} aria-hidden="true">
      <div className="hero-routing__panel">
        <div className="hero-routing__lane">
          <div className="hero-routing__node hero-routing__node--call">
            <span className="ripple" />
            <div className="hero-routing__node-text">
              <span className="hero-routing__node-label">Inbound call</span>
              <span className="hero-routing__source">
                <strong ref={srcRef}>Google Ads</strong> · <span ref={stateRef}>FL</span>
              </span>
              <span className="chip chip--tag" ref={productRef}>Final Expense</span>
            </div>
          </div>

          <div className="hero-routing__wire">
            <span className="hero-routing__spark" />
          </div>

          <div className="hero-routing__node hero-routing__node--engine">
            <span className="ripple ripple--routing" />
            <div className="hero-routing__node-text">
              <span className="hero-routing__node-label">Routing engine</span>
              <span className="hero-routing__status" ref={statusRef}>Matching licensed agent…</span>
            </div>
          </div>
        </div>

        <div className="hero-routing__agents">
          <span className="hero-routing__agents-label">Available agents</span>
          <div className="hero-routing__grid">
            {AGENTS.map((a, i) => (
              <span
                key={a}
                className="hero-routing__agent"
                ref={(el) => { agentEls.current[i] = el; }}
              >
                {a}
                <span className="hero-routing__presence" />
              </span>
            ))}
          </div>
        </div>

        <div className="hero-routing__meters">
          <div className="hero-routing__meter">
            <span className="hero-routing__meter-val mono">00:07</span>
            <span className="hero-routing__meter-label">Connect time</span>
          </div>
          <div className="hero-routing__meter">
            <span className="hero-routing__meter-val mono">$0.62</span>
            <span className="hero-routing__meter-label">Cost / call</span>
          </div>
          <div className="hero-routing__meter">
            <span className="hero-routing__meter-val mono" ref={routedRef}>1,284</span>
            <span className="hero-routing__meter-label">Routed today</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroRouting;
