import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import ScrollReveal from '../components/ScrollReveal'; // Replaced by framer-motion
import SectionHeading from '../components/SectionHeading';
import TestimonialCarousel from '../components/TestimonialCarousel';
import InquiryForm from '../components/InquiryForm';
import ParallaxImage from '../components/ParallaxImage';
import MaskedText from '../components/MaskedText';
import DistortedImage from '../components/DistortedImage';
import { getFeaturedPortfolio, getTestimonials } from '../services/api';

// Custom Hook for Animated Number Counter
function useCountUp(end, duration = 2500) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutQuart
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, countRef };
}

export default function Home() {
  const [portfolio, setPortfolio] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  // Animated counters
  const { count: weddingsCount, countRef: weddingsRef } = useCountUp(10000);
  const { count: corporateCount, countRef: corporateRef } = useCountUp(7000);
  const { count: venueCount, countRef: venueRef } = useCountUp(30);
  const { count: yearsCount, countRef: yearsRef } = useCountUp(18);

  useEffect(() => {
    document.title = 'Storyline Design & Events — Premium Event Styling & Production in Pune';
    getFeaturedPortfolio().then(res => setPortfolio(res.data || [])).catch(() => setPortfolio(fallbackPortfolio));
    getTestimonials().then(res => setTestimonials(res.data || [])).catch(() => setTestimonials([]));
  }, []);

  const fallbackPortfolio = [
    { id: 1, title: 'The Grand Ceiling', category: 'WEDDING', description: 'A breathtaking floral ceiling installation.', imageUrl: '/images/portfolio/grand-ceiling.png', isFeatured: true },
    { id: 2, title: 'The Corporate Stage', category: 'CORPORATE', description: 'Precision staging for 500+ attendees.', imageUrl: '/images/portfolio/corporate-stage.png', isFeatured: true },
    { id: 3, title: 'The Royal Mandap', category: 'WEDDING', description: 'A bespoke multi-tiered mandap combining traditional design.', imageUrl: '/images/portfolio/royal-mandap.png', isFeatured: true },
    { id: 4, title: 'Leadership Summit', category: 'CORPORATE', description: 'Three-day corporate leadership summit.', imageUrl: '/images/portfolio/leadership-summit.png', isFeatured: true },
    { id: 5, title: 'Enchanted Forest', category: 'WEDDING', description: 'An outdoor woodland theme with suspended greenery.', imageUrl: '/images/portfolio/grand-ceiling.png', isFeatured: true },
  ];

  const displayPortfolio = portfolio.length ? portfolio : fallbackPortfolio;

  return (
    <div className="grain-overlay">
      
      {/* ===== HERO: CENTRAL TEXT WITH FADED BACKGROUND COLLAGE ===== */}
      <section className="hero" id="hero" style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        
        {/* Faded Background Video */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {/* Aesthetic dark/light mix background glow */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 0%, var(--cream) 80%), radial-gradient(circle at 80% 20%, rgba(164, 105, 127, 0.4) 0%, transparent 70%), radial-gradient(circle at 20% 80%, rgba(117, 141, 113, 0.4) 0%, transparent 70%)' }}></div>
          
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
          >
            <source src="/videos/hero-video.webm" type="video/webm" />
          </video>
        </div>
        
        <div className="container" style={{ zIndex: 10, position: 'relative', width: '100%', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <h1 className="mega-heading" style={{ textAlign: 'center', marginBottom: '20px', lineHeight: 1 }}>
              <MaskedText text="Transform Your" delay={0.4} /><br />
              <MaskedText text="Dream Event" delay={0.6} /><br />
              <MaskedText text="Into Reality" delay={0.8} className="accent" />
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '40px', color: 'var(--rose-deeper)' }}>
              Unforgettable Memories Since 2008
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <Link to="/portfolio" className="btn btn-primary btn-lg hover-lift">
                View Our Gallery →
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg hover-lift">
                Plan My Event
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-mouse"></div>
          <span className="scroll-indicator-text">Scroll</span>
        </div>
      </section>

      {/* ===== MARQUEE SECTION ===== */}
      <section className="marquee-section" style={{ background: 'var(--cream)' }}>
        <SectionHeading label="Trusted Across Pune" title="The Venues We Call Home" />
        <div style={{ overflow: 'hidden', padding: '20px 0' }}>
          <div className="marquee-track">
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>TAJ</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>JW MARRIOTT</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>THE RITZ-CARLTON</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>CONRAD</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>HYATT</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>SHERATON</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>TAJ</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>JW MARRIOTT</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>THE RITZ-CARLTON</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>CONRAD</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>HYATT</h2>
            <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>SHERATON</h2>
          </div>
        </div>
      </section>

      {/* ===== STAT CARDS (Animated Tilted Layout) ===== */}
      <section className="section" style={{ background: 'var(--blush-soft)', overflow: 'hidden' }}>
        <div className="container">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mega-heading" style={{ textAlign: 'center', fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '60px', lineHeight: 1.1 }}>
              <MaskedText text="Where Every " delay={0.2} /><span className="accent"><MaskedText text="Celebration" delay={0.3} /></span><br />
              <MaskedText text="Becomes Part Of Our " delay={0.4} /><span className="accent"><MaskedText text="Story" delay={0.5} /></span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <div className="stat-cards-wrapper">
              <div className="stat-card" ref={weddingsRef}>
                <div className="stat-number">{weddingsCount.toLocaleString()}+</div>
                <div className="stat-label">Weddings Decorated</div>
              </div>
              <div className="stat-card" ref={corporateRef}>
                <div className="stat-number">{corporateCount.toLocaleString()}+</div>
                <div className="stat-label">Corporate Events Styled</div>
              </div>
              <div className="stat-card" ref={venueRef}>
                <div className="stat-number">{venueCount}+</div>
                <div className="stat-label">Venue Partners</div>
              </div>
              <div className="stat-card" ref={yearsRef}>
                <div className="stat-number">{yearsCount}+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT / CRAFTING SECTION ===== */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <div className="img-zoom hover-tilt" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-dramatic)', overflow: 'hidden', height: '600px' }}>
                <DistortedImage src="/images/portfolio/royal-mandap.png" alt="Crafting Moments" />
              </div>
            </motion.div>
            <div style={{ padding: '40px' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <span className="label">About Us</span>
                <h2 className="mega-heading" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', textAlign: 'left', marginBottom: '24px', lineHeight: 1 }}>
                  <MaskedText text="Crafting" delay={0.1} /><br />
                  <MaskedText text="Unforgettable" delay={0.2} className="accent" /><br />
                  <MaskedText text="Moments" delay={0.3} />
                </h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-dark)' }}>
                  At Storyline, we believe in creating unforgettable moments through exceptional decor and meticulous planning. Since our inception in 2008, we have crafted bespoke wedding and event experiences that resonate with emotion, elegance, and impact.
                </p>
                <p style={{ marginBottom: '32px' }}>
                  With over a decade of expertise, we have built lasting relationships with clients across the nation, transforming their dreams into stunning realities.
                </p>
                <Link to="/about" className="btn btn-primary hover-lift">
                  Learn More →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISMATCHED FEATURED PROJECTS GRID ===== */}
      <section className="section" id="featured-projects" style={{ background: 'var(--blush-soft)' }}>
        <SectionHeading label="Portfolio" title="Featured Projects" />
        <div className="container-wide">
          <div className="mismatched-grid">
            {displayPortfolio.map((project, index) => (
              <motion.div 
                key={project.id || index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className={`card-size-${index % 5}`} 
                style={{ height: '100%' }}
              >
                <div className="portfolio-card hover-tilt" style={{ height: '100%' }}>
                  <ParallaxImage 
                    src={project.imageUrl?.replace('.jpg', '.png') || `/images/portfolio/grand-ceiling.png`}
                    alt={project.title}
                  />
                  <div className="portfolio-card-overlay" style={{ zIndex: 1 }}>
                    <span className="portfolio-card-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/portfolio" className="btn btn-outline hover-lift">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonials" style={{ background: 'var(--cream)' }}>
        <SectionHeading label="Client Words" title="Built on Trust" />
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TestimonialCarousel testimonials={testimonials} />
          </motion.div>
        </div>
      </section>
      
      {/* ===== INQUIRY CTA ===== */}
      <section className="section" id="inquiry-section" style={{ background: 'var(--blush-soft)' }}>
        <SectionHeading label="Start Your Story" title="Inquire for 2026/2027" />
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <InquiryForm />
          </motion.div>
        </div>
      </section>
      
      {/* Floating Action Button */}
      <Link to="/contact" className="fab">
        <span style={{ fontSize: '24px' }}>✉</span>
      </Link>
    </div>
  );
}




