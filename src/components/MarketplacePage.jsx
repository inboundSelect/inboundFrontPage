import MarketplaceHero from './MarketplaceHero';
import MarketplaceHowItWorks from './MarketplaceHowItWorks';
import MarketplaceListings from './MarketplaceListings';
import MarketplaceFAQ from './MarketplaceFAQ';
import MarketplaceCTA from './MarketplaceCTA';

function MarketplacePage({ onOpenWaitlist, onNavigate }) {
  return (
    <main id="main">
      <MarketplaceHero onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <MarketplaceHowItWorks />
      <MarketplaceListings onOpenWaitlist={onOpenWaitlist} />
      <MarketplaceFAQ />
      <MarketplaceCTA onOpenWaitlist={onOpenWaitlist} />
    </main>
  );
}

export default MarketplacePage;
