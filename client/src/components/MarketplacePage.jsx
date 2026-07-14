import MarketplaceHero from './MarketplaceHero';
import MarketplaceHowItWorks from './MarketplaceHowItWorks';
import MarketplaceListings from './MarketplaceListings';
import MarketplaceFAQ from './MarketplaceFAQ';
import MarketplaceCTA from './MarketplaceCTA';
import Footer from './Footer';

function MarketplacePage({ onOpenWaitlist, onNavigate }) {
  return (
    <>
      <main>
        <MarketplaceHero onOpenWaitlist={onOpenWaitlist} />
        <MarketplaceHowItWorks />
        <MarketplaceListings onOpenWaitlist={onOpenWaitlist} />
        <MarketplaceFAQ />
        <MarketplaceCTA onOpenWaitlist={onOpenWaitlist} />
      </main>
      <Footer onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
    </>
  );
}

export default MarketplacePage;
