import RoleHero from './RoleHero';
import AgentGettingStarted from './AgentGettingStarted';
import RoleWhatWeDo from './RoleWhatWeDo';
import RoleKeyFeatures from './RoleKeyFeatures';
import RoleEnterpriseSecurity from './RoleEnterpriseSecurity';
import CtaBand from './CtaBand';

function RolePage({ onOpenWaitlist, onNavigate }) {
  return (
    <main id="main">
      <RoleHero onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <AgentGettingStarted />
      <RoleWhatWeDo />
      <RoleKeyFeatures />
      <RoleEnterpriseSecurity onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <CtaBand
        title="Stop chasing leads."
        titleAccent="Start taking calls."
        sub="Get live inbound calls routed to your phone, pay only when you actually talk, and buy extra leads from the marketplace when you want more volume."
        primaryLabel="Get Agent Access"
        onPrimary={onOpenWaitlist}
        secondaryLabel="Book a Demo"
        onSecondary={() => onNavigate('/contact')}
      />
    </main>
  );
}

export default RolePage;
