import { useEffect, useState } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminOverview from '../components/admin/AdminOverview';
import AdminInquiries from '../components/admin/AdminInquiries';
import AdminPortfolio from '../components/admin/AdminPortfolio';
import AdminTestimonials from '../components/admin/AdminTestimonials';
import AdminTeam from '../components/admin/AdminTeam';
import AdminServices from '../components/admin/AdminServices';
import AdminPackages from '../components/admin/AdminPackages';

export default function Admin() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    document.title = 'Admin Dashboard — Storyline Design & Events';
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return <AdminOverview />;
      case 'inquiries': return <AdminInquiries />;
      case 'portfolio': return <AdminPortfolio />;
      case 'testimonials': return <AdminTestimonials />;
      case 'team': return <AdminTeam />;
      case 'services': return <AdminServices />;
      case 'packages': return <AdminPackages />;
      default: return <AdminOverview />;
    }
  };

  return (
    <div className="admin-layout" id="admin-page">
      <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="admin-content">
        <div className="admin-header">
          <div>
            <h1 style={{ textTransform: 'capitalize' }}>{activeSection}</h1>
            <p className="text-muted">Manage your Storyline website content</p>
          </div>
        </div>
        {renderContent()}
      </main>
    </div>
  );
}
