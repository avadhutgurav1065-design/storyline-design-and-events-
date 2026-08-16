import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <Link to="/" className="navbar-logo" style={{ marginBottom: '8px' }}>
              <div className="logo-circle-wrapper" style={{ width: '65px', height: '65px' }}>
                <img src="/images/logo.jpg" alt="Storyline Logo" className="navbar-logo-img" />
              </div>
              <div>
                <div className="navbar-logo-text">STORYLINE</div>
                <div className="navbar-logo-sub">Design & Events</div>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Premium Event Styling & Production in Pune. 
              We build the structure. You live the story.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/storyline_design_and_events/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" id="footer-instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/919307195947" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" id="footer-whatsapp">
                <FaWhatsapp />
              </a>
              <a href="mailto:storylinedesignsandevents@gmail.com" aria-label="Email" id="footer-email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Navigate</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/weddings">Storyline Weddings</Link>
              <Link to="/corporate">Storyline Corporate</Link>
              <Link to="/design-studio">Design Studio</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/team">Meet The Team</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              <Link to="/weddings">Bespoke Wedding Design</Link>
              <Link to="/weddings">Custom Mandap Fabrication</Link>
              <Link to="/weddings">Floral Installations</Link>
              <Link to="/corporate">Corporate Stage Production</Link>
              <Link to="/corporate">Structural Rigging</Link>
              <Link to="/design-studio">Print & Digital Design</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-links">
              <a href="mailto:storylinedesignsandevents@gmail.com">
                <FaEnvelope style={{ marginRight: '8px', color: 'var(--rose)' }} />
                storylinedesignsandevents@gmail.com
              </a>
              <a href="https://wa.me/919307195947" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp style={{ marginRight: '8px', color: 'var(--rose)' }} />
                +91 93071 95947
              </a>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <FaMapMarkerAlt style={{ color: 'var(--rose)', marginTop: '3px', flexShrink: 0 }} />
                <span>Pune, Maharashtra, India</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Storyline Design & Events. All rights reserved.</span>
          <span>Curating spaces. Crafting narratives.</span>
        </div>
      </div>
    </footer>
  );
}


