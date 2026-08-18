import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollReveal';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navClass = `navbar ${scrollY > 50 || !isHome ? 'scrolled' : 'transparent'}`;

    const [servicesOpen, setServicesOpen] = useState(false);

  const regularLinks = [
    { to: '/', label: 'Home' },
  ];

  const serviceLinks = [
    { to: '/weddings', label: 'Weddings' },
    { to: '/corporate', label: 'Corporate' },
    { to: '/design-studio', label: 'Studio' },
    { to: '/hampers', label: 'Hampers' },
  ];

  const afterLinks = [
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/team', label: 'Team' },
  ];

  const allMobileLinks = [
    { to: '/', label: 'Home' },
    { to: '/weddings', label: 'Weddings' },
    { to: '/corporate', label: 'Corporate' },
    { to: '/design-studio', label: 'Studio' },
    { to: '/hampers', label: 'Hampers' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/team', label: 'Team' },
  ];

  return (
    <>
      <nav className={navClass} id="main-nav">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="logo-circle-wrapper" style={{ width: '65px', height: '65px' }}>
              <img src="/images/logo-final.png" alt="Storyline Logo" className="navbar-logo-img" />
            </div>
            <div>
              <div className="navbar-logo-text">STORYLINE</div>
              <div className="navbar-logo-sub">Design & Events</div>
            </div>
          </Link>

          <div className="navbar-links">
            {regularLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            ))}

            <div 
              className="nav-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="nav-dropdown-trigger">
                Services <span className={`dropdown-arrow ${servicesOpen ? 'open' : ''}`}>&#9662;</span>
              </span>
              <div className={`nav-dropdown-menu ${servicesOpen ? 'visible' : ''}`}>
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {afterLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="btn btn-primary btn-sm navbar-cta" id="nav-inquiry-btn">
            Inquire Now
          </Link>

          <button
            className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {allMobileLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setMobileOpen(false)}
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          className="btn btn-primary"
          onClick={() => setMobileOpen(false)}
        >
          Inquire Now
        </Link>
      </div>
    </>
  );
}


