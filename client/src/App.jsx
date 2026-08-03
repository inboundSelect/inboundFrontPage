import { useState, useEffect, useCallback } from 'react';
import { ROUTES, ROUTE_ALIASES } from './lib/site';

import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import DemoModal from './components/DemoModal';

import HomePage from './pages/HomePage';
import AgenciesPage from './pages/AgenciesPage';
import AgentsPage from './pages/AgentsPage';
import MarketplacePage from './pages/MarketplacePage';
import PricingPage from './pages/PricingPage';
import TrustPage from './pages/TrustPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

/* Every page has a real, shareable URL — the legal documents because Google's
 * consent screen and Meta's app review link straight to them, the rest because
 * a marketing page nobody can link to is not much of a marketing page. */

const PATH_TO_PAGE = {
  ...Object.fromEntries(Object.entries(ROUTES).map(([page, path]) => [path, page])),
  ...ROUTE_ALIASES,
};

const normalise = (pathname) => pathname.replace(/\/+$/, '') || '/';

const pageFromPath = (pathname) => PATH_TO_PAGE[normalise(pathname)] || 'home';

const PAGES = {
  home: HomePage,
  agencies: AgenciesPage,
  agents: AgentsPage,
  marketplace: MarketplacePage,
  pricing: PricingPage,
  trust: TrustPage,
  contact: ContactPage,
};

const LEGAL_PAGES = ['privacy', 'terms', 'data-deletion'];

const TITLES = {
  home: 'InboundSelect — Every call your agency pays for, answered by the right agent',
  agencies: 'For Agencies — InboundSelect',
  agents: 'For Agents — InboundSelect',
  marketplace: 'Lead Marketplace — InboundSelect',
  pricing: 'Pricing — InboundSelect',
  trust: 'Trust & Safety — InboundSelect',
  contact: 'Contact Us — InboundSelect',
  privacy: 'Privacy Policy — InboundSelect',
  terms: 'Terms of Service — InboundSelect',
  'data-deletion': 'Data Deletion Instructions — InboundSelect',
};

function App() {
  const [page, setPage] = useState(() => pageFromPath(window.location.pathname));
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIntent, setModalIntent] = useState('demo');

  const openModal = useCallback((intent = 'demo') => {
    setModalIntent(typeof intent === 'string' ? intent : 'demo');
    setModalOpen(true);
  }, []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    const onPop = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.title = TITLES[page] || TITLES.home;
  }, [page]);

  const navigate = useCallback((dest) => {
    const path = ROUTES[dest] || ROUTES.home;
    if (normalise(window.location.pathname) !== normalise(path)) {
      window.history.pushState({}, '', path);
    }
    setPage(dest);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const isLegal = LEGAL_PAGES.includes(page);
  const PageBody = PAGES[page] || HomePage;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <SiteHeader currentPage={page} onNavigate={navigate} onOpenModal={openModal} />

      <main id="main">
        {isLegal ? (
          <LegalPage doc={page} onNavigate={navigate} />
        ) : (
          <PageBody onNavigate={navigate} onOpenModal={openModal} />
        )}
      </main>

      <SiteFooter onNavigate={navigate} onOpenModal={openModal} />

      <DemoModal isOpen={modalOpen} intent={modalIntent} onClose={closeModal} />
    </>
  );
}

export default App;
