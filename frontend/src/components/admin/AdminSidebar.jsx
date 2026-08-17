import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaChartPie, FaEnvelope, FaImages, FaQuoteRight, FaUsers, FaConciergeBell, FaBoxOpen, FaSignOutAlt } from 'react-icons/fa';

export default function AdminSidebar({ activeSection, setActiveSection }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/admin/login');
  };

  return (
    <aside className="admin-sidebar" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '24px 24px 12px' }}>
        <Link to="/" className="navbar-logo admin-logo-link" style={{ textDecoration: 'none', marginBottom: '8px', justifyContent: 'flex-start' }}>
          <div className="logo-circle-wrapper" style={{ width: '65px', height: '65px', flexShrink: 0 }}>
            <img src="/images/logo-final.png" alt="Storyline Logo" className="navbar-logo-img" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div className="navbar-logo-text" style={{ color: 'var(--text-dark)' }}>STORYLINE</div>
            <div className="navbar-logo-sub" style={{ color: 'var(--rose-deeper)' }}>Design & Events</div>
          </div>
        </Link>
      </div>
      <Link to="/" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white-muted)' }}>
        <FaHome /> Back to Site
      </Link>
      <div style={{ padding: '0 24px', margin: '16px 0 8px' }}>
        <span className="label" style={{ fontSize: 'var(--fs-xs)' }}>Management</span>
      </div>
      <a href="#" className={activeSection === 'overview' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('overview'); }}>
        <FaChartPie /> Overview
      </a>
      <a href="#" className={activeSection === 'inquiries' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('inquiries'); }}>
        <FaEnvelope /> Inquiries
      </a>
      <a href="#" className={activeSection === 'portfolio' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('portfolio'); }}>
        <FaImages /> Portfolio
      </a>
      <a href="#" className={activeSection === 'testimonials' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('testimonials'); }}>
        <FaQuoteRight /> Testimonials
      </a>
      <a href="#" className={activeSection === 'team' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('team'); }}>
        <FaUsers /> Team
      </a>
      <a href="#" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('services'); }}>
        <FaConciergeBell /> Services
      </a>
      <a href="#" className={activeSection === 'packages' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('packages'); }}>
        <FaBoxOpen /> Packages
      </a>

      <div style={{ marginTop: 'auto', padding: '24px' }}>
        <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', color: 'var(--white-muted)', cursor: 'pointer', fontSize: 'var(--fs-small)' }}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
}
