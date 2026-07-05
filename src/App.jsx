import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import HomePage from './components/HomePage';
import HowItWorksPage from './components/HowItWorksPage';
import FeaturesPage from './components/FeaturesPage';      // For Agencies
import RolePage from './components/RolePage';               // For Agents
import MarketplacePage from './components/MarketplacePage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import SecurityPage from './components/SecurityPage';
import IntegrationsPage from './components/IntegrationsPage';

// Route table — real URLs via the History API (no router dependency).
// Legal pages (/privacy, /terms) are intentionally NOT here: they are served
// as static HTML by Vercel rewrites so no-JS reviewers/crawlers can read them.
const ROUTES = {
  '/': HomePage,
  '/how-it-works': HowItWorksPage,
  '/for-agencies': FeaturesPage,
  '/for-agents': RolePage,
  '/marketplace': MarketplacePage,
  '/pricing': PricingPage,
  '/contact': ContactPage,
  '/security': SecurityPage,
  '/integrations': IntegrationsPage,
};

const META = {
  '/':              ['Inbound Select | Inbound Call Routing & Appointments for Insurance Agencies', 'Inbound Select connects inbound phone leads to the right licensed, available agent in real time, then helps agents log outcomes, book appointments, and sync them to Google Calendar.'],
  '/how-it-works':  ['How It Works | Inbound Select', 'From a tracked number to a booked appointment — see the full call lifecycle: ring, match, alert, accept & bridge, complete & bill, attribute.'],
  '/for-agencies':  ['For Agencies & IMOs | Inbound Select', 'Give your agents inbound calls to work. Configure routing, set your own pricing, collect payments, monetize missed calls, and see true cost-per-call.'],
  '/for-agents':    ['For Agents | Inbound Select', 'Stop chasing leads. Start taking calls. Get live inbound calls routed to your phone, pay only when you talk, and buy extra leads from the marketplace.'],
  '/marketplace':   ['Marketplace | Inbound Select', 'Buy unworked calls. Sell what you can’t cover. A members-only marketplace for inbound call inventory.'],
  '/pricing':       ['Pricing | Inbound Select', 'Pay for what you use. Platform fees waived during beta. Agencies set their own margins and pricing rules.'],
  '/contact':       ['Contact | Inbound Select', 'Talk to us before you commit to anything. Apply for beta access or book a demo.'],
  '/security':      ['Security & Compliance | Inbound Select', 'How Inbound Select handles your data, your calls, and your integrations — encryption, tenant isolation, read-only Google Ads, Limited Use, and Stripe-handled payments.'],
  '/integrations':  ['Integrations | Inbound Select', 'The tools Inbound Select connects to — Twilio, Stripe, Google Ads, Google Calendar, and AWS — and exactly what each one does.'],
};

function normalizePath(p) {
  const clean = (p || '/').replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [path, setPath] = useState(() =>
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/'
  );

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const navigate = useCallback((to) => {
    const next = normalizePath(to);
    if (next !== normalizePath(window.location.pathname)) {
      window.history.pushState({}, '', next);
    }
    setPath(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const [title, desc] = META[path] || META['/'];
    document.title = title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', desc);
  }, [path]);

  const Page = ROUTES[path] || HomePage;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar onOpenWaitlist={openModal} currentPath={path} onNavigate={navigate} />
      <Page onOpenWaitlist={openModal} onNavigate={navigate} />
      <Footer onOpenWaitlist={openModal} onNavigate={navigate} />
      <WaitlistModal isOpen={modalOpen} onClose={closeModal} />
      <div className="grain" aria-hidden="true" />
    </>
  );
}

export default App;
