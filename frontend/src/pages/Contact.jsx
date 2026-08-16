import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaFacebook, FaMap } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    eventType: '',
    eventDate: '',
    venue: '',
    guestCount: '',
    scope: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact | Storyline Design & Events';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="contact-page" style={{ background: 'var(--cream)', minHeight: '100vh', position: 'relative' }}>
      
      {/* Floating WhatsApp Widget */}
      <a href="https://wa.me/919307195947" target="_blank" rel="noreferrer" className="floating-whatsapp-widget" title="Chat with Production">
        <FaWhatsapp size={28} />
      </a>

      {/* ===== SECTION 1: THE INVITATION (Hero) ===== */}
      <section className="contact-hero-boutique text-center">
        <div className="container-narrow">
          <ScrollReveal>
            <h1 className="manifesto-title" style={{ fontSize: 'clamp(3.5rem, 6vw, 6.5rem)', marginBottom: 'var(--space-md)' }}>
              Initiate Your Project.
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="hero-body-text" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
              Whether you are planning a multi-day luxury wedding or a flagship corporate summit in Pune, the first step is a conversation. Reach out through our direct channels below, or submit a formal inquiry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 2 & 4: THE CONCIERGE SPLIT ===== */}
      <section className="section pb-5" style={{ background: 'var(--cream)' }}>
        <div className="container-wide">
          <div className="concierge-split-layout">
            
            {/* Left Column: Direct Access & Digital Presence */}
            <div className="direct-access-column">
              <ScrollReveal>
                <h3 className="column-heading">Direct Channels</h3>
              </ScrollReveal>

              <div className="access-cards-stack">
                <ScrollReveal animation="reveal-scale">
                  <div className="access-card">
                    <div className="card-icon-wrap"><FaEnvelope /></div>
                    <div className="card-content-wrap">
                      <h4>General Inquiries & Bookings</h4>
                      <span className="card-role">Primary Intake</span>
                      <a href="mailto:storylinedesignsandevents@gmail.com" className="card-link">storylinedesignsandevents@gmail.com</a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="reveal-scale">
                  <div className="access-card leadership-card">
                    <div className="card-icon-wrap"><FaEnvelope /></div>
                    <div className="card-content-wrap">
                      <h4>Leadership & Operations</h4>
                      <div className="founder-contact">
                        <strong>Avadhut Krishna Gurav</strong> <span>Founder & B2B Contracts</span><br/>
                        <a href="mailto:avadhutgurav1065@gmail.com" className="card-link">avadhutgurav1065@gmail.com</a>
                      </div>
                      <div className="founder-contact mt-2">
                        <strong>Jayesh Mahajan</strong> <span>Co-Architect & Systems</span><br/>
                        <a href="mailto:jayeshmahajan340@gmail.com" className="card-link">jayeshmahajan340@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="reveal-scale">
                  <div className="access-card">
                    <div className="card-icon-wrap"><FaWhatsapp /></div>
                    <div className="card-content-wrap">
                      <h4>Production Desk</h4>
                      <span className="card-role">WhatsApp & Calling</span>
                      <p className="card-link mb-0">Primary: +91 93071 95947</p>
                      <p className="card-link">Secondary: +91 95187 80272</p>
                      <p className="card-note">Active for rapid response and immediate vendor coordination.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="reveal-scale">
                  <div className="access-card">
                    <div className="card-icon-wrap"><FaMapMarkerAlt /></div>
                    <div className="card-content-wrap">
                      <h4>Headquarters</h4>
                      <span className="card-role">Location</span>
                      <p className="card-link">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Digital Presence Bar */}
              <ScrollReveal>
                <div className="digital-presence-bar mt-5">
                  <h4 className="column-heading mb-4" style={{ fontSize: '1.2rem' }}>Explore Our Live Builds</h4>
                  <div className="social-links-row">
                    <a href="https://www.instagram.com/storyline_design_and_events/?hl=en" target="_blank" rel="noreferrer" className="social-pill">
                      <FaInstagram /> <span>Instagram</span>
                    </a>
                    <a href="#" className="social-pill">
                      <FaFacebook /> <span>Facebook</span>
                    </a>
                    <a href="#" className="social-pill">
                      <FaMap /> <span>Google Maps</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: The Intake Portal Form */}
            <div className="intake-portal-column">
              <ScrollReveal>
                <div className="intake-form-container">
                  {submitted ? (
                    <div className="form-success-state text-center">
                      <div className="success-icon mb-4" style={{ fontSize: '4rem', color: 'var(--rose-deeper)' }}>✓</div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '2.5rem' }}>Brief Received</h3>
                      <p className="text-muted mt-3">Our production lead will review your scope and return a preliminary consultation within 24 hours.</p>
                      <button className="btn btn-outline-delicate mt-4" onClick={() => setSubmitted(false)}>Submit Another Project</button>
                    </div>
                  ) : (
                    <>
                      <div className="form-header-wrap mb-4">
                        <h3 className="form-portal-title">Submit a Project Brief</h3>
                        <p className="text-muted">Provide us with the initial details of your event. Our production lead will review your scope and return a preliminary consultation within 24 hours.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="concierge-form">
                        <div className="c-form-row">
                          <div className="c-input-group">
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Name / Corporate Entity" className="c-input" />
                          </div>
                          <div className="c-input-group">
                            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required placeholder="Contact Number" className="c-input" />
                          </div>
                        </div>

                        <div className="c-input-group">
                          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="c-input" />
                        </div>

                        <div className="c-form-row">
                          <div className="c-input-group">
                            <select name="eventType" value={formData.eventType} onChange={handleChange} required className="c-input c-select">
                              <option value="" disabled>Select Event Type</option>
                              <option value="Luxury Wedding & Social">Luxury Wedding & Social</option>
                              <option value="Corporate Summit & Expo">Corporate Summit & Expo</option>
                              <option value="Product Launch & PR">Product Launch & PR</option>
                              <option value="Design Studio & 3D Render">Design Studio & 3D Render</option>
                            </select>
                          </div>
                          <div className="c-input-group">
                            <input type="text" name="eventDate" value={formData.eventDate} onChange={handleChange} placeholder="Event Date(s)" className="c-input" />
                          </div>
                        </div>

                        <div className="c-form-row">
                          <div className="c-input-group">
                            <input type="text" name="venue" value={formData.venue} onChange={handleChange} placeholder="Target Venue / Location in Pune" className="c-input" />
                          </div>
                          <div className="c-input-group">
                            <input type="text" name="guestCount" value={formData.guestCount} onChange={handleChange} placeholder="Estimated Guest Count (Pax)" className="c-input" />
                          </div>
                        </div>

                        <div className="c-input-group">
                          <textarea name="scope" value={formData.scope} onChange={handleChange} required placeholder="Project Scope & Vision..." className="c-input c-textarea" rows="4"></textarea>
                        </div>

                        <button type="submit" className="btn btn-solid-slate mt-3" disabled={loading}>
                          {loading ? 'Processing...' : 'Request Production Consultation'}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
