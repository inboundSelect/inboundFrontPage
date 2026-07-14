import RoleHero from './RoleHero';
import RoleWhyErphoria from './RoleWhyErphoria';
import RoleWhatWeDo from './RoleWhatWeDo';
import RoleKeyFeatures from './RoleKeyFeatures';
import RoleEnterpriseSecurity from './RoleEnterpriseSecurity';
import Footer from './Footer';

function RolePage({ onOpenWaitlist, onNavigate }) {
  return (
    <>
      <main>
        <RoleHero onOpenWaitlist={onOpenWaitlist} />
        <RoleWhyErphoria />
        <RoleWhatWeDo />
        <RoleKeyFeatures />
        <RoleEnterpriseSecurity onOpenWaitlist={onOpenWaitlist} />
      </main>
      <Footer onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
    </>
  );
}

export default RolePage;
