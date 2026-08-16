import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import DesignStudioForm from '../components/DesignStudioForm';

export default function DesignStudio() {
  useEffect(() => {
    document.title = 'Design Studio — Creative, Print & 3D Rendering | Storyline';
  }, []);

  // State for the Master Creative Catalog accordions
  const [activeCatalog, setActiveCatalog] = useState(0);

  const catalogData = [
    {
      id: 0,
      title: 'Digital & Print Stationery',
      subtitle: 'The First Impression',
      desc: 'Setting the exact tone of the event months before the guests arrive.',
      items: [
        'Save the Date Design',
        'Custom Invitation Card Design',
        'Digital & Motion Invitation Design',
        'Social Media Invite Assets',
        'RSVP Card Design',
        'Welcome Card Design',
        'Wedding / Event Program Card',
        'Thank You Card Design'
      ]
    },
    {
      id: 1,
      title: 'Spatial Graphics & Wayfinding',
      subtitle: 'The Navigation',
      desc: 'Transforming the venue with structural elegance and clear, branded direction.',
      items: [
        'Massive Welcome Board Design',
        'Directional Board Design',
        'Event Signage Design',
        'Free-Standing Standee Design',
        'Structural Backdrop Design',
        'Dedicated Welcome Backdrop Design',
        'Custom Photo Booth Frame Design'
      ]
    },
    {
      id: 2,
      title: 'Premium Tablescapes & Dining',
      subtitle: 'The Guest Experience',
      desc: 'The micro-details that command attention when guests sit down.',
      items: [
        'Calligraphy Name Card / Place Card',
        'Seating Card Design',
        'Custom Table Number Design',
        'Menu Card Design',
        'Acrylic / Wooden Menu Stand Design',
        'Table Topper Design',
        'Structured Tent Card Design'
      ]
    },
    {
      id: 3,
      title: 'VIP Access & Corporate Credentials',
      subtitle: 'The Security & Protocol',
      desc: 'Flawless branding for high-scale conferences and institutional setups.',
      items: [
        'VIP Pass Design',
        'General Entry Pass Design',
        'Corporate ID Card / Badge Design',
        'Custom Lanyard Design',
        'Premium Certificate Design'
      ]
    },
    {
      id: 4,
      title: 'Gifting, Packaging & Touchpoints',
      subtitle: 'The Takeaway',
      desc: 'The final physical memory your guests and delegates take home.',
      items: [
        'Box Packaging Design',
        'Bag / Gift Bag Design',
        'Hamper Card Design',
        'Custom Envelope Design',
        'Gift Tag Design',
        'Return Gift Tag Design',
        'Premium Sticker Design',
        'Custom Label Design',
        'Bottle Label Design',
        'Water Bottle Sticker'
      ]
    },
    {
      id: 5,
      title: 'Marketing & B2B Collateral',
      subtitle: 'The Campaign',
      desc: 'High-conversion marketing materials for expos, tech summits, and brand launches.',
      items: [
        'Multi-page Brochure Design',
        'Promotional Flyer Design',
        'Large-Format Poster Design',
        'Flex & Vinyl Banner Design',
        'Event Schedule Card',
        'Pocket Agenda Card Design'
      ]
    }
  ];

  return (
    <div className="design-studio-page">
      {/* ===== SECTION 1: THE HERO (SPLIT SCREEN) ===== */}
      <section className="split-hero">
        <div className="split-half left-side">
          <div className="tech-grid-overlay"></div>
          {/* Placeholder for 3D stage rendering video/image */}
          <div className="split-bg bg-3d"></div>
          <div className="split-content left">
            <h1 className="split-title">The Visual & Digital Architecture</h1>
            <p className="split-sub">3D Spatial Rendering</p>
          </div>
        </div>
        
        <div className="split-half right-side">
          {/* Placeholder for Print/Reels montage */}
          <div className="split-bg cinematic-bg"></div>
          <div className="split-content right">
            <h1 className="split-title">of Your Event.</h1>
            <p className="split-sub">Premium Print & Cinematic Content</p>
          </div>
        </div>

        <div className="hero-center-box keyframe-fade-in">
          <p className="center-box-text">
            Storyline Design & Events controls your entire aesthetic ecosystem. From the first digital invitation and the physical gold-foiled menu on the table, to the viral cinematic Reels that document the final production. Absolute brand consistency, engineered entirely in-house.
          </p>
          <a href="#studio-intake" className="btn btn-primary mt-4">Commission the Studio</a>
        </div>
      </section>

      {/* ===== SECTION 2: THE REEL ENGINE (PASTEL & MODERN) ===== */}
      <section className="section reel-engine-section" style={{ background: 'var(--card-pink)', color: 'var(--text-dark)' }}>
        <div className="container-wide">
          <div className="reel-grid">
            <div className="reel-content">
              <ScrollReveal>
                <h2 className="mega-heading" style={{ color: 'var(--text-dark)' }}>Event Content Architecture.</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: 'var(--space-2xl)', fontWeight: '500' }}>
                  A premium event only lasts 24 hours, but the digital footprint lasts forever. We do not just film; we script, shoot, and engineer high-retention cinematic content designed to dominate social media.
                </p>
              </ScrollReveal>

              <div className="reel-features">
                <ScrollReveal animation="reveal-left">
                  <div className="reel-feature">
                    <h4 style={{ color: 'var(--rose-deeper)' }}>Pre-Event Hype</h4>
                    <p>Teaser Reels, digital motion-graphic invitations, and countdown campaigns to build anticipation.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="reveal-left">
                  <div className="reel-feature">
                    <h4 style={{ color: 'var(--rose-deeper)' }}>Live Event Coverage</h4>
                    <p>Rapid-turnaround Reel production highlighting the venue architecture, VIP entrances, and critical brand/ritual moments.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="reveal-left">
                  <div className="reel-feature">
                    <h4 style={{ color: 'var(--rose-deeper)' }}>Corporate & B2B Content</h4>
                    <p>Professional keynote highlight videos, exhibitor showcase Reels, and cinematic wrap-up videos for your company's LinkedIn and Instagram.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="reveal-left">
                  <div className="reel-feature">
                    <h4 style={{ color: 'var(--rose-deeper)' }}>Social Asset Design</h4>
                    <p>Custom-branded Instagram Stories, grid posts, and digital agenda cards perfectly formatted for mobile viewing.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            
            <div className="reel-mockup-wrapper">
              <ScrollReveal animation="reveal-scale">
                <div className="mobile-reel-mockup">
                  <div className="mobile-screen">
                    <div className="video-placeholder">
                      {/* Video element will go here, currently a stylized placeholder */}
                      <span className="play-icon">▶</span>
                      <p>LIVE REEL FOOTAGE</p>
                    </div>
                  </div>
                  <div className="neon-glow"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: THE MASTER CREATIVE CATALOG ===== */}
      <section className="section" id="creative-catalog" style={{ background: 'var(--cream)' }}>
        <SectionHeading
          label="The Deep Dive"
          title="The Comprehensive Design Arsenal"
          description="Every physical and digital touchpoint, meticulously designed and fabricated by our in-house studio."
        />

        <div className="container-wide mt-5">
          <div className="creative-accordion-container">
            {catalogData.map((catalog) => (
              <div 
                key={catalog.id} 
                className={`creative-accordion-item ${activeCatalog === catalog.id ? 'active' : ''}`}
              >
                <button 
                  className="accordion-header"
                  onClick={() => setActiveCatalog(activeCatalog === catalog.id ? null : catalog.id)}
                >
                  <div className="header-content">
                    <h3>{catalog.title}</h3>
                    <span className="subtitle">({catalog.subtitle})</span>
                  </div>
                  <div className="accordion-icon">
                    {activeCatalog === catalog.id ? '−' : '+'}
                  </div>
                </button>
                
                <div className="accordion-body">
                  <div className="accordion-inner">
                    <p className="catalog-desc">{catalog.desc}</p>
                    <div className="catalog-items-grid">
                      {catalog.items.map((item, idx) => (
                        <div key={idx} className="catalog-item">
                          <span className="bullet"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: THE 3D RENDERING DEPARTMENT ===== */}
      <section className="section" style={{ background: 'var(--white)', padding: 0 }}>
        <div className="blueprint-split">
          <div className="blueprint-image left-render">
            <div className="label">DIGITAL 3D RENDER</div>
          </div>
          
          <div className="blueprint-content">
            <ScrollReveal>
              <h2 className="mega-heading">See It Before We Build It.</h2>
              <p>
                We eliminate all guesswork and financial risk. For high-ticket corporate builds and luxury weddings, our design studio renders your exact venue in 3D space. You will walk through the digital blueprint, approve the structural layout, and sign off on the exact aesthetic before a single piece of iron is loaded onto our trucks.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="blueprint-image right-reality">
            <div className="label">PHYSICAL BUILD</div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: THE STUDIO INTAKE ===== */}
      <section className="section" id="studio-intake" style={{ background: 'var(--blush-soft)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <ScrollReveal>
              <h2 className="mega-heading" style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: 'var(--space-md)' }}>Build Your Aesthetic Identity.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Select the scope of your design requirements below. Our studio lead will review your brief and initiate a technical consultation.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <DesignStudioForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
