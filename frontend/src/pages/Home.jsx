import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import TestimonialCarousel from '../components/TestimonialCarousel';
import InquiryForm from '../components/InquiryForm';
import { getFeaturedPortfolio, getTestimonials } from '../services/api';

export default function Home() {
  const [portfolio, setPortfolio] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    document.title = 'Storyline Design & Events — Premium Event Styling & Production in Pune';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = 'We build the structure. You live the story. Premium wedding styling, corporate production, and design services in Pune.';

    // Try to fetch from API, use fallback if unavailable
    getFeaturedPortfolio()
      .then((res) => setPortfolio(res.data || []))
      .catch(() => setPortfolio(fallbackPortfolio));

    getTestimonials()
      .then((res) => setTestimonials(res.data || []))
      .catch(() => setTestimonials([]));
  }, []);

  const fallbackPortfolio = [
    {
      id: 1, title: 'The Grand Ceiling', category: 'WEDDING',
      description: 'A breathtaking floral ceiling installation — 2,000+ custom floral stems suspended from engineered rigging.',
      imageUrl: '/images/portfolio/grand-ceiling.png',
      stats: '2000+ Custom Floral Stems | Engineered Suspension Rigging | 12-Hour Overnight Setup',
      isFeatured: true,
    },
    {
      id: 2, title: 'The Corporate Stage', category: 'CORPORATE',
      description: 'Precision staging for 500+ attendees — custom LED backdrop, architectural stage design, and full AV production.',
      imageUrl: '/images/portfolio/corporate-stage.png',
      stats: 'Custom LED Backdrop | 500+ Attendee Staging | 24-Hour Build Turnaround',
      isFeatured: true,
    },
    {
      id: 3, title: 'The Royal Mandap', category: 'WEDDING',
      description: 'A bespoke multi-tiered mandap combining traditional design with contemporary architectural elements.',
      imageUrl: '/images/portfolio/royal-mandap.png',
      stats: 'Custom Woodwork | 8 Floral Pillars | Integrated Lighting | 3-Day Installation',
      isFeatured: true,
    },
    {
      id: 4, title: 'Leadership Summit 2026', category: 'CORPORATE',
      description: 'Three-day corporate leadership summit with full stage rigging and branded environments.',
      imageUrl: '/images/portfolio/leadership-summit.png',
      stats: '3-Day Multi-Stage Build | 4 Breakout Rooms | 800+ Attendees',
      isFeatured: true,
    },
  ];

  const displayPortfolio = portfolio.length ? portfolio : fallbackPortfolio;

  return (
    <div className="grain-overlay">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src="/images/hero-bg.png" alt="Luxury event styling by Storyline" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-label">Premium Event Styling & Production • Pune</div>
          <h1 className="hero-title">
            We Build the <span className="gold">Structure.</span><br />
            You Live the <span className="gold">Story.</span>
          </h1>
          <p className="hero-subtitle">
            Bespoke wedding design and structural corporate production — 
            two disciplines, one standard of craftsmanship.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary btn-lg" id="hero-inquire-btn">
              Inquire for 2026/2027
            </Link>
            <Link to="/portfolio" className="btn btn-outline btn-lg" id="hero-portfolio-btn">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CORE DISCIPLINES ===== */}
      <section className="section" id="disciplines">
        <SectionHeading
          label="Two Disciplines, One Standard"
          title="What We Build"
          description="Every event draws on structural engineering and artistic craft in equal measure."
        />
        <div className="container">
          <div className="disciplines" style={{ position: 'relative' }}>
            <div className="discipline-divider"></div>

            <ScrollReveal animation="reveal-left">
              <div className="discipline-panel weddings">
                <div className="content">
                  <span className="label">Storyline Weddings</span>
                  <h3>Emotion. Ceremony. Aesthetic.</h3>
                  <p className="subtitle">Where every detail tells your story</p>
                  <p className="text-muted">
                    Bespoke floral design, luxury drapery, custom mandap fabrication, 
                    and lighting aesthetics — treated as fine craft, not decoration.
                  </p>
                  <div className="discipline-tags">
                    <span className="discipline-tag">Floral Design</span>
                    <span className="discipline-tag">Custom Mandaps</span>
                    <span className="discipline-tag">Luxury Drapes</span>
                    <span className="discipline-tag">Lighting Aesthetics</span>
                    <span className="discipline-tag">Guest Management</span>
                  </div>
                  <Link to="/weddings" className="btn btn-outline" style={{ marginTop: '24px' }}>
                    Explore Weddings
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right">
              <div className="discipline-panel corporate">
                <div className="content">
                  <span className="label">Storyline Corporate</span>
                  <h3>Logistics. Structure. Execution.</h3>
                  <p className="subtitle">Flawless builds, zero margin for error</p>
                  <p className="text-muted">
                    Structural rigging, iron trusses, stage fabrication, LED integration, 
                    and 24-hour execution — engineering-grade production.
                  </p>
                  <div className="discipline-tags">
                    <span className="discipline-tag">Stage Fabrication</span>
                    <span className="discipline-tag">Trussing & Rigging</span>
                    <span className="discipline-tag">LED Integration</span>
                    <span className="discipline-tag">AV Production</span>
                    <span className="discipline-tag">Brand Activations</span>
                  </div>
                  <Link to="/corporate" className="btn btn-outline" style={{ marginTop: '24px' }}>
                    Explore Corporate
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section" id="featured-projects" style={{ background: 'var(--charcoal-deep)' }}>
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="Every project is a case study in scale and craft — not a photo grid."
        />
        <div className="container">
          <div className="featured-projects">
            {displayPortfolio.map((project, index) => (
              <ScrollReveal key={project.id || index}>
                <div className="portfolio-card">
                  <img
                    src={project.imageUrl?.replace('.jpg', '.png') || `/images/portfolio/grand-ceiling.png`}
                    alt={project.title}
                  />
                  <div className="portfolio-card-overlay">
                    <span className="portfolio-card-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-card-stats">
                      {(project.stats || '').split('|').map((stat, i) => (
                        <span key={i} className="portfolio-stat">{stat.trim()}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/portfolio" className="btn btn-outline">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section" id="process">
        <SectionHeading
          label="How We Work"
          title="Three Steps to Flawless"
          description="A simple client journey backed by a 20-department operation."
        />
        <div className="container">
          <ScrollReveal animation="stagger-children">
            <div className="process-timeline">
              <div className="process-step">
                <div className="process-step-number">1</div>
                <h3>Consultation & Blueprint</h3>
                <p className="text-muted">
                  Venue mapping, aesthetic direction, and logistics scoping — 
                  the foundation of every build.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step-number">2</div>
                <h3>Design & Fabrication</h3>
                <p className="text-muted">
                  Custom sourcing of florals, fabrics, and structural ironwork. 
                  Design sign-off before execution begins.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step-number">3</div>
                <h3>On-Site Execution</h3>
                <p className="text-muted">
                  Dedicated crew takes over the venue for a flawless, 
                  fully managed build. You experience the day.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonials" style={{ background: 'var(--charcoal-deep)' }}>
        <SectionHeading
          label="Client Words"
          title="Built on Trust"
          description="What matters is the standard we set — and the clients who hold us to it."
        />
        <div className="container-narrow">
          <ScrollReveal>
            <TestimonialCarousel testimonials={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== INQUIRY CTA ===== */}
      <section className="section" id="inquiry-section">
        <SectionHeading
          label="Start Your Story"
          title="Inquire for 2026/2027 Season"
          description="Tell us about your event. We will get back to you within 24 hours."
        />
        <div className="container-narrow">
          <ScrollReveal>
            <InquiryForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
