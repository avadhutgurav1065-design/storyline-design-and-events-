import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import InquiryForm from '../components/InquiryForm';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaClock } from 'react-icons/fa';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Storyline Design & Events | Inquire Now';
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      detail: 'storylinedesignevents@gmail.com',
      link: 'mailto:storylinedesignevents@gmail.com',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      detail: '+91 9XXX XXX XXX',
      link: 'https://wa.me/919XXXXXXXXX',
    },
    {
      icon: <FaInstagram />,
      title: 'Instagram',
      detail: '@storylinedesignevents',
      link: 'https://instagram.com/storylinedesignevents',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      detail: 'Pune, Maharashtra, India',
      link: null,
    },
    {
      icon: <FaClock />,
      title: 'Response Time',
      detail: 'Within 24 hours',
      link: null,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" id="contact-hero">
        <div className="content">
          <span className="label">Get in Touch</span>
          <h1>Start Your <span className="text-gold">Story</span></h1>
          <div className="gold-line-center"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--fs-body-lg)' }} className="text-muted">
            Tell us about your event. Wedding, corporate, or design — 
            we will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section" id="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left — Contact Info */}
            <div>
              <ScrollReveal>
                <h2 style={{ marginBottom: 'var(--space-sm)' }}>Let's build something extraordinary</h2>
                <div className="gold-line"></div>
                <p style={{ marginBottom: 'var(--space-xl)', fontSize: 'var(--fs-body-lg)' }}>
                  Whether you are planning a multi-day wedding or a flagship corporate event, 
                  the first step is a conversation. Reach out through any channel below, 
                  or fill in the inquiry form.
                </p>
              </ScrollReveal>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {contactInfo.map((info, i) => (
                  <ScrollReveal key={i}>
                    <div className="contact-info-card">
                      <div className="contact-info-icon">{info.icon}</div>
                      <div>
                        <h4>{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white-muted)' }}>
                            {info.detail}
                          </a>
                        ) : (
                          <p>{info.detail}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right — Inquiry Form */}
            <div>
              <ScrollReveal animation="reveal-right">
                <InquiryForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
