import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import PortfolioInquiryForm from '../components/PortfolioInquiryForm';
import { FaDownload } from 'react-icons/fa';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Works');
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    document.title = 'Portfolio & Archive | Storyline Design & Events';
  }, []);

  const filters = [
    'All Works',
    'Luxury Weddings & Mandaps',
    'Corporate & Institutional',
    'Product Launches & Expos',
    'Social & Private Celebrations',
    '3D Renderings & Print'
  ];

  const handleSliderMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    
    if (x === undefined) return;
    
    // Calculate percentage
    let position = ((x - rect.left) / rect.width) * 100;
    position = Math.max(0, Math.min(position, 100)); // clamp
    setSliderPosition(position);
  };

  return (
    <div className="portfolio-page" style={{ background: 'var(--cream)' }}>
      {/* ===== SECTION 1: THE EDITORIAL HERO ===== */}
      <section className="section portfolio-hero">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h1 className="editorial-title">Structural Elegance.<br/>Seamless Execution.</h1>
            <p className="editorial-subtitle">The Storyline Design Archive | Pune</p>
          </ScrollReveal>
          
          <ScrollReveal>
            <p className="hero-body-text">
              We do not rely on stock imagery or promises. Every project in this archive represents real venues, precision 3D mapping, and flawless on-ground fabrication. Browse our documented builds across luxury weddings, corporate summits, and private celebrations.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="hero-actions">
              <a href="#intake" className="btn btn-solid-sage">Request Portfolio Deck</a>
              <a href="#matrix" className="btn btn-outline-delicate">Filter Projects</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 2: THE PROJECT MATRIX (Asymmetric) ===== */}
      <section className="section" id="matrix" style={{ background: 'var(--white)', padding: 'var(--space-3xl) 0' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div className="filter-pill-group">
              {filters.map((filter) => (
                <button 
                  key={filter}
                  className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Asymmetric Image Grid */}
          <div className="asymmetric-grid mt-5">
            <ScrollReveal>
              <div className="grid-item landscape span-2">
                <div className="placeholder-image luxury-bg">
                  <span className="project-label">The Royal Botanical Mandap</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid-item portrait">
                <div className="placeholder-image corporate-bg">
                  <span className="project-label">Tech Summit Mainstage</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid-item square">
                <div className="placeholder-image print-bg">
                  <span className="project-label">Foil Stationery Detail</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid-item landscape span-2">
                <div className="placeholder-image social-bg">
                  <span className="project-label">Sangeet Night Architecture</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: RENDER TO REALITY (Slider) ===== */}
      <section className="section" style={{ background: 'var(--card-sage)' }}>
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="mega-heading" style={{ fontSize: '3rem', textTransform: 'none', color: 'var(--text-dark)' }}>Precision Engineering</h2>
            <p className="editorial-subtitle" style={{ fontSize: '1.2rem', marginBottom: 'var(--space-2xl)' }}>We eliminate the gap between expectations and execution.</p>
          </ScrollReveal>

          <ScrollReveal>
            <div 
              className="render-slider-container" 
              ref={sliderRef}
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* After image (Physical Build) - Background */}
              <div className="slider-image physical-build">
                <span className="slider-label label-right">Physical Execution</span>
              </div>
              
              {/* Before image (Digital Render) - Overlay */}
              <div 
                className="slider-image digital-render" 
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <span className="slider-label label-left">Digital Render</span>
              </div>

              {/* Slider Handle */}
              <div 
                className="slider-handle" 
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="slider-handle-icon">◂ ▸</div>
              </div>
            </div>
            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-dark)' }}>Drag to compare: The Botanical Mandap</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 4: FEATURED CASE STUDIES (Parallax Editorial) ===== */}
      <section className="section" style={{ background: 'var(--cream)', paddingBottom: 0 }}>
        {/* Case Study 1 */}
        <div className="editorial-case-study">
          <div className="case-image-wrap parallax-wrap">
            <div className="case-image bg-mandap"></div>
          </div>
          <div className="case-content-wrap">
            <div className="case-content-box">
              <span className="case-category">Luxury Wedding Fabrication</span>
              <h3>The Royal Botanical Mandap</h3>
              <p className="case-location">Pune, Maharashtra</p>
              <div className="case-logistics">
                <p><strong>Scope & Logistics:</strong></p>
                <ul>
                  <li>Custom 8-pillar structural mandap with integrated daytime canopy.</li>
                  <li>Over 5,000 natural floral stems (Orchids, Roses, Carnations).</li>
                  <li>14-hour overnight venue transformation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="editorial-case-study reverse">
          <div className="case-image-wrap parallax-wrap">
            <div className="case-image bg-tech"></div>
          </div>
          <div className="case-content-wrap">
            <div className="case-content-box">
              <span className="case-category">Corporate Conference</span>
              <h3>Annual B2B Tech Summit</h3>
              <p className="case-location">Hinjewadi Tech Park, Pune</p>
              <div className="case-logistics">
                <p><strong>Scope & Logistics:</strong></p>
                <ul>
                  <li>80ft seamless high-definition LED video wall.</li>
                  <li>500-seat precision classroom seating grid.</li>
                  <li>Rapid 6-hour teardown logistics.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="editorial-case-study">
          <div className="case-image-wrap parallax-wrap">
            <div className="case-image bg-reveal"></div>
          </div>
          <div className="case-content-wrap">
            <div className="case-content-box">
              <span className="case-category">High-Impact Brand Activation</span>
              <h3>The Custom Reveal</h3>
              <p className="case-location">Pune</p>
              <div className="case-logistics">
                <p><strong>Scope & Logistics:</strong></p>
                <ul>
                  <li>Custom stage with integrated hydraulic reveal mechanism.</li>
                  <li>Elevated press riser platform with direct audio distribution.</li>
                  <li>Dedicated step-and-repeat media wall.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: REEL & MOTION ARCHIVE ===== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-wide">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <ScrollReveal>
              <h2 className="mega-heading" style={{ fontSize: '2.5rem', textTransform: 'none', color: 'var(--text-dark)' }}>Live Production Footage</h2>
              <p className="editorial-subtitle" style={{ fontSize: '1.1rem' }}>Watch how our crews transform empty grounds into high-end environments.</p>
            </ScrollReveal>
          </div>

          <div className="reels-grid">
            <ScrollReveal animation="reveal-scale">
              <div className="reel-card">
                <div className="reel-video placeholder-dark">▶</div>
                <p>12-Hour Overnight Mandap Build (Time-Lapse)</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-scale">
              <div className="reel-card">
                <div className="reel-video placeholder-dark">▶</div>
                <p>The Floral Ceiling Rigging</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-scale">
              <div className="reel-card">
                <div className="reel-video placeholder-dark">▶</div>
                <p>Cinematic Bridal Entry</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-scale">
              <div className="reel-card">
                <div className="reel-video placeholder-dark">▶</div>
                <p>Expo Registration & VIP Lounge Flow</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: CAPABILITY METRICS ===== */}
      <section className="section metrics-strip" style={{ background: 'var(--card-pink)', padding: 'var(--space-3xl) 0' }}>
        <div className="container-wide">
          <div className="metrics-grid">
            <ScrollReveal>
              <div className="metric-box">
                <div className="metric-number">100%</div>
                <div className="metric-label">On-Time Venue Delivery</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="metric-box">
                <div className="metric-number">50k+</div>
                <div className="metric-label">Sq. Ft. Transformed</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="metric-box">
                <div className="metric-number">15+</div>
                <div className="metric-label">In-House Departments</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="metric-box">
                <div className="metric-number">0</div>
                <div className="metric-label">Outsource Dependencies</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: THE PORTFOLIO DECK & RFP INTAKE ===== */}
      <section className="section" id="intake" style={{ background: 'var(--cream)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <ScrollReveal>
              <h2 className="mega-heading" style={{ fontSize: '3rem', textTransform: 'none', color: 'var(--text-dark)' }}>Ready to Architect Your Event?</h2>
              <p className="editorial-subtitle" style={{ fontSize: '1.2rem' }}>Whether you are seeking design inspiration or a formal technical proposal, initiate your project below.</p>
            </ScrollReveal>
          </div>

          <div className="intake-split">
            <div className="intake-option text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
              <ScrollReveal>
                <a href="#" className="download-deck-link">
                  <FaDownload className="mr-2" /> Download Full 2026/2027 Production Portfolio
                </a>
              </ScrollReveal>
            </div>

            <div className="intake-form-wrapper">
              <ScrollReveal>
                <PortfolioInquiryForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
