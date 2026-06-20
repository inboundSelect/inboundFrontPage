import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import HomeLiveDemo from './components/HomeLiveDemo';
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
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState('home');

  // Public legal page served at /privacy (same domain as the home page).
  // vercel.json rewrites every path to index.html, so we route on pathname.
  const path = typeof window !== 'undefined'
    ? window.location.pathname.replace(/\/+$/, '')
    : '';
  if (path === '/privacy' || path === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleNavigate = (dest) => {
    setPage(dest);
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
            <ProductOverview />
            <HomeLiveDemo onOpenWaitlist={openModal} />
            <MarketingHub onOpenWaitlist={openModal} />
            <IndustrySolutions onOpenWaitlist={openModal} onNavigate={handleNavigate} />
            <EnterpriseSecurity />
            <PricingSection onOpenWaitlist={openModal} />
          </main>
          <Footer onOpenWaitlist={openModal} />
        </>
      ) : page === 'features' ? (
        <FeaturesPage onOpenWaitlist={openModal} />
      ) : page === 'pricing' ? (
        <PricingPage onOpenWaitlist={openModal} />
      ) : page === 'contact' ? (
        <ContactPage onOpenWaitlist={openModal} />
      ) : page === 'marketplace' ? (
        <MarketplacePage onOpenWaitlist={openModal} />
      ) : (
        <RolePage onOpenWaitlist={openModal} />
      )}

      <WaitlistModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
