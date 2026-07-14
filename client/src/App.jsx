import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeProblem from './components/HomeProblem';
import HomeDifferentiation from './components/HomeDifferentiation';
import ProductOverview from './components/ProductOverview';
import HomeJourney from './components/HomeJourney';
import HomeRevenue from './components/HomeRevenue';
import IndustrySolutions from './components/IndustrySolutions';
import EnterpriseSecurity from './components/EnterpriseSecurity';
import MarketingHub from './components/MarketingHub';
import PricingSection from './components/PricingSection';
import WaitlistModal from './components/WaitlistModal';
import Footer from './components/Footer';
import FeaturesPage from './components/FeaturesPage';
import RolePage from './components/RolePage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import MarketplacePage from './components/MarketplacePage';
import LegalPage from './components/LegalPage';

/* The legal pages need real, shareable URLs — Google's OAuth consent screen and
 * Meta's app review point at them directly. Every other page stays state-driven. */
const LEGAL_PATHS = {
  '/privacy': 'privacy',
  '/privacy-policy': 'privacy',
  '/terms': 'terms',
  '/terms-of-service': 'terms',
  '/data-deletion': 'data-deletion',
  '/data-deletion-instructions': 'data-deletion',
};

const CANONICAL_PATH = {
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  'data-deletion': '/data-deletion',
};

const pageFromPath = (pathname) =>
  LEGAL_PATHS[pathname.replace(/\/+$/, '') || '/'] || 'home';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(() => pageFromPath(window.location.pathname));

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const onPop = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleNavigate = (dest) => {
    setPage(dest);

    const nextPath = CANONICAL_PATH[dest] || '/';
    if (nextPath !== window.location.pathname) {
      window.history.pushState({}, '', nextPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        onOpenWaitlist={openModal}
        currentPage={page}
        onNavigate={handleNavigate}
      />

      {page === 'home' ? (
        <>
          <main>
            <Hero onOpenWaitlist={openModal} />
            <HomeProblem />
            <ProductOverview />
            <HomeJourney onOpenWaitlist={openModal} />
            <HomeRevenue />
            <MarketingHub onOpenWaitlist={openModal} />
            <HomeDifferentiation />
            <IndustrySolutions onOpenWaitlist={openModal} onNavigate={handleNavigate} />
            <EnterpriseSecurity />
            <PricingSection onOpenWaitlist={openModal} onNavigate={handleNavigate} />
          </main>
          <Footer onOpenWaitlist={openModal} onNavigate={handleNavigate} />
        </>
      ) : page === 'features' ? (
        <FeaturesPage onOpenWaitlist={openModal} />
      ) : page === 'pricing' ? (
        <PricingPage onOpenWaitlist={openModal} onNavigate={handleNavigate} />
      ) : page === 'contact' ? (
        <ContactPage onOpenWaitlist={openModal} onNavigate={handleNavigate} />
      ) : page === 'marketplace' ? (
        <MarketplacePage onOpenWaitlist={openModal} onNavigate={handleNavigate} />
      ) : page === 'privacy' || page === 'terms' || page === 'data-deletion' ? (
        <LegalPage doc={page} onOpenWaitlist={openModal} onNavigate={handleNavigate} />
      ) : (
        <RolePage onOpenWaitlist={openModal} onNavigate={handleNavigate} />
      )}

      <WaitlistModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
