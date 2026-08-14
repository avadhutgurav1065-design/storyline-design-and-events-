import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import TestimonialCarousel from '../components/TestimonialCarousel';
import InquiryForm from '../components/InquiryForm';
import { FaCogs, FaBolt, FaDesktop, FaBuilding, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export default function Corporate() {
  useEffect(() => {
    document.title = 'Storyline Corporate — Stage Production & Structural Rigging | Pune';
  }, []);

  const corporateServices = [
    { icon: <FaCogs />, title: 'Stage Fabrication', desc: 'Custom-designed staging built to specification — from intimate podiums to multi-tiered performance stages for 500+ attendees.' },
    { icon: <FaBolt />, title: 'Trussing & Rigging', desc: 'Certified structural rigging with load-tested truss systems, engineered for safety and signed off by our Production Head.' },
    { icon: <FaDesktop />, title: 'LED & AV Production', desc: 'Custom LED backdrop integration, projection mapping, and full AV production — sound, lighting, and technical support.' },
    { icon: <FaBuilding />, title: 'Branded Environments', desc: 'Complete venue branding — sponsor deliverables, activation zones, wayfinding, and immersive brand experiences.' },
    { icon: <FaChartLine />, title: 'Event Management', desc: 'Full command centre operations, timeline management, vendor coordination, and on-ground execution crew.' },
    { icon: <FaShieldAlt />, title: 'Security & Compliance', desc: 'Crowd management, access control, fire safety compliance, and emergency response planning for large gatherings.' },
  ];

  const corporatePackages = [
    {
      name: 'Essential', priceRange: '₹3 – 7 Lakh',
      scope: 'Single-day activation or panel stage, up to 150 pax',
      features: ['Single-day event setup', 'Stage and podium design', 'Basic sound and lighting', 'Branded backdrop', 'Registration setup', 'Day-of coordination'],
      isPopular: false,
    },
    {
      name: 'Premium', priceRange: '₹7 – 20 Lakh',
      scope: 'Conference/launch with custom staging, LED, branded environment',
      features: ['Custom stage fabrication', 'LED screen integration', 'Full AV production', 'Branded environments', 'Sponsor deliverables', 'Registration & accreditation', 'Photography coverage', 'Crew management'],
      isPopular: true,
    },
    {
      name: 'Flagship', priceRange: '₹20 Lakh +',
      scope: 'Multi-day summit or 500+ pax build, full rigging & production',
      features: ['All Premium features', 'Multi-day stage builds', 'Full trussing and rigging', 'Power & generator management', 'Multiple breakout rooms', 'Live streaming capability', 'Dedicated command centre', 'Security & safety management'],
      isPopular: false,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" id="corporate-hero">
        <div className="content">
          <span className="label">Storyline Corporate</span>
          <h1>Logistics. Structure. <span className="text-gold">Execution.</span></h1>
          <div className="gold-line-center"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--fs-body-lg)' }} className="text-muted">
            Engineering-grade production for product launches, conferences, 
            brand activations, and award nights.
          </p>
          <div style={{ marginTop: 'var(--space-lg)' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Request a Proposal</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="corporate-services">
        <SectionHeading
          label="Capabilities"
          title="Corporate Services"
          description="Structural precision meets flawless execution."
        />
        <div className="container">
          <div className="grid-3">
            {corporateServices.map((service, i) => (
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

      {/* Portfolio */}
      <section className="section" style={{ background: 'var(--charcoal-deep)' }} id="corporate-portfolio">
        <SectionHeading label="Case Studies" title="Corporate Portfolio" />
        <div className="container">
          <div className="grid-2">
            <ScrollReveal>
              <div className="portfolio-card">
                <img src="/images/portfolio/corporate-stage.png" alt="The Corporate Stage" />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Product Launch</span>
                  <h3>The Corporate Stage</h3>
                  <p>Custom LED backdrop. 500+ attendee staging. 24-hour build turnaround.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="portfolio-card">
                <img src="/images/portfolio/leadership-summit.png" alt="Leadership Summit" />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Leadership Summit</span>
                  <h3>Leadership Summit 2026</h3>
                  <p>3-day multi-stage build. 4 breakout rooms. 800+ attendees.</p>
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
      <section className="section" id="corporate-packages">
        <SectionHeading
          label="Investment"
          title="Corporate Packages"
          description="Structured by scope — every quote is finalised against real requirements."
        />
        <div className="container">
          <div className="grid-3">
            {corporatePackages.map((pkg, i) => (
              <ScrollReveal key={i}>
                <div className={`package-card ${pkg.isPopular ? 'popular' : ''}`}>
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.priceRange}</div>
                  <div className="package-scope">{pkg.scope}</div>
                  <ul className="package-features">
                    {pkg.features.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                  <Link to="/contact" className={`btn ${pkg.isPopular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                    Request Proposal
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--charcoal-deep)' }} id="corporate-testimonials">
        <SectionHeading label="Client Confidence" title="What Our Corporate Clients Say" />
        <div className="container-narrow">
          <ScrollReveal>
            <TestimonialCarousel testimonials={[]} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="corporate-inquiry">
        <SectionHeading label="Get Started" title="Request a Corporate Proposal" />
        <div className="container-narrow">
          <ScrollReveal>
            <InquiryForm defaultTab="CORPORATE" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
