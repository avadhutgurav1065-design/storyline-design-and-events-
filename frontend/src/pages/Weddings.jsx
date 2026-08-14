import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import TestimonialCarousel from '../components/TestimonialCarousel';
import InquiryForm from '../components/InquiryForm';
import { FaHeart, FaPalette, FaGem, FaStar, FaUsers, FaGlassCheers } from 'react-icons/fa';

export default function Weddings() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    document.title = 'Storyline Weddings — Bespoke Wedding Design & Styling | Pune';
  }, []);

  const weddingServices = [
    { icon: <FaPalette />, title: 'Bespoke Floral Design', desc: 'Custom floral installations — from cascading ceilings to architectural pillars. Every stem is selected, every arrangement is engineered.' },
    { icon: <FaGem />, title: 'Custom Mandap Fabrication', desc: 'Hand-crafted mandap structures combining traditional design with contemporary architectural elements and integrated lighting.' },
    { icon: <FaStar />, title: 'Luxury Drapery & Styling', desc: 'Premium fabrics, custom drapes, and venue styling that transforms any space into an immersive experience.' },
    { icon: <FaHeart />, title: 'Lighting Aesthetics', desc: 'Atmospheric lighting design that sets the mood for every ceremony — from warm intimate settings to grand reveal moments.' },
    { icon: <FaUsers />, title: 'Full Planning & Coordination', desc: 'End-to-end event management across all 20 departments — vendor coordination, guest management, timeline execution.' },
    { icon: <FaGlassCheers />, title: 'Guest & VIP Management', desc: 'RSVP, registration, accommodation, transportation, hospitality, and protocol management for every guest.' },
  ];

  const weddingPackages = [
    {
      name: 'Signature', tier: 'SIGNATURE', priceRange: '₹8 – 15 Lakh',
      scope: 'Single-function décor + coordination (mandap or reception only)',
      features: ['Single venue styling', 'Floral design for one function', 'Basic lighting design', 'Day-of coordination', 'Vendor liaison for décor', 'Setup and teardown'],
      isPopular: false,
    },
    {
      name: 'Bespoke', tier: 'BESPOKE', priceRange: '₹15 – 40 Lakh',
      scope: 'Full 2–3 function wedding — décor, floral, planning, guest management',
      features: ['Multi-function design', 'Custom floral installations', 'Luxury drapery and styling', 'Full planning & coordination', 'Guest and VIP management', 'RSVP and registration', 'Vendor management', 'Design Studio collateral'],
      isPopular: true,
    },
    {
      name: 'Full-Scale Production', tier: 'FULL_SCALE', priceRange: '₹40 Lakh +',
      scope: 'Multi-day / destination-style wedding, custom structures, full logistics',
      features: ['All Bespoke features', 'Custom structural fabrication', 'Engineered installations', 'Full logistics & transport', 'Accommodation management', 'Artist & entertainment', 'Photography coordination', 'Dedicated command centre'],
      isPopular: false,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" id="weddings-hero">
        <div className="content">
          <span className="label">Storyline Weddings</span>
          <h1>Emotion. Ceremony. <span className="text-gold">Aesthetic.</span></h1>
          <div className="gold-line-center"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--fs-body-lg)' }} className="text-muted">
            Every wedding is framed as a story with a beginning, a build, and a climax — 
            not a checklist of vendors.
          </p>
          <div style={{ marginTop: 'var(--space-lg)' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="wedding-services">
        <SectionHeading
          label="What We Offer"
          title="Wedding Services"
          description="Artistry and engineering in equal measure."
        />
        <div className="container">
          <div className="grid-3">
            {weddingServices.map((service, i) => (
              <ScrollReveal key={i}>
                <div className="service-card">
                  <div className="service-card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" style={{ background: 'var(--charcoal-deep)' }} id="wedding-gallery">
        <SectionHeading
          label="Our Work"
          title="Wedding Portfolio"
          description="Signature builds that set the standard."
        />
        <div className="container">
          <div className="grid-2">
            <ScrollReveal>
              <div className="portfolio-card">
                <img src="/images/portfolio/grand-ceiling.png" alt="The Grand Ceiling" />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Floral Installation</span>
                  <h3>The Grand Ceiling</h3>
                  <p>2,000+ custom floral stems. Engineered suspension rigging. 12-hour overnight setup.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="portfolio-card">
                <img src="/images/portfolio/royal-mandap.png" alt="The Royal Mandap" />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Custom Mandap</span>
                  <h3>The Royal Mandap</h3>
                  <p>Multi-tiered structure. Hand-carved woodwork. 8 cascading floral pillars.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
            <Link to="/portfolio" className="btn btn-outline">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section" id="wedding-packages">
        <SectionHeading
          label="Investment"
          title="Wedding Packages"
          description="Structured by scope — every quote is finalised against real requirements."
        />
        <div className="container">
          <div className="grid-3">
            {weddingPackages.map((pkg, i) => (
              <ScrollReveal key={i}>
                <div className={`package-card ${pkg.isPopular ? 'popular' : ''}`}>
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.priceRange}</div>
                  <div className="package-scope">{pkg.scope}</div>
                  <ul className="package-features">
                    {pkg.features.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                  <Link to="/contact" className={`btn ${pkg.isPopular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                    Get a Quote
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--charcoal-deep)' }} id="wedding-testimonials">
        <SectionHeading label="Client Words" title="What Our Couples Say" />
        <div className="container-narrow">
          <ScrollReveal>
            <TestimonialCarousel testimonials={[]} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="wedding-inquiry">
        <SectionHeading
          label="Your Story Starts Here"
          title="Book a Wedding Consultation"
        />
        <div className="container-narrow">
          <ScrollReveal>
            <InquiryForm defaultTab="WEDDING" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
