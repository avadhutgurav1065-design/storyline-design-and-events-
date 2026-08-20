import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import InquiryForm from '../components/InquiryForm';
import MagneticButton from '../components/MagneticButton';
import { FaConciergeBell, FaPaintBrush, FaHardHat } from 'react-icons/fa';

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

export default function Weddings() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const bgY = useTransform(scrollY, [0, 500], [0, 50]);

  const { count: trust01, countRef: ref01 } = useCountUp(1, 1500);
  const { count: trust02, countRef: ref02 } = useCountUp(24, 2000);
  const { count: trust03, countRef: ref03 } = useCountUp(100, 2500);

  // State for Dynamic Tab Buttons
  const [activeEngine, setActiveEngine] = useState(0);

  useEffect(() => {
    document.title = 'Storyline Weddings — Premium Wedding Styling & Production | Pune';
  }, []);

  const galleryImages = [
    { src: '/images/weddings/0578776d7acbf027e19a6892aca759e3.jpg', name: 'Haldi Welcome Signage', category: 'Signage' },
    { src: '/images/weddings/0f51575b0db9a3efb67c33817a31212e.jpg', name: 'Courtyard Seating Setup', category: 'Seating' },
    { src: '/images/weddings/1b9aab1a6de5fe16d3c11daea7bc7e3e.jpg', name: 'Grand Marigold Canopy', category: 'Mandap' },
    { src: '/images/weddings/24b5efff1c8e03140bb67798dba5bceb.jpg', name: 'The Botanical Walkway', category: 'Entrance' },
    { src: '/images/weddings/2744a951066cc81bccb451113b6f27da.jpg', name: 'Sunflower Welcome Mirror', category: 'Decor' },
  ];

  // Dynamic Engine Data
  const engineData = [
    {
      id: 0,
      title: 'Concierge & Hospitality',
      domain: 'Aishwarya’s Domain',
      icon: <FaConciergeBell />,
      description: 'The foundation of true luxury is seamless hospitality. We transform logistics into an invisible art form. Your guests are not just managed; they are elevated at every touchpoint.',
      details: [
        { label: 'RSVP & Guest Management', text: 'End-to-end digital tracking, personalized multi-channel communication, and highly curated physical invitations designed to build anticipation from day one.' },
        { label: 'VIP Shadowing & Protocol', text: 'Dedicated personal concierges act as "shadows" for the immediate family and VVIPs, offering highly discreet, 24/7 localized assistance so you never have to ask twice.' },
        { label: 'Logistics & Luggage Mapping', text: 'Precision airport transits, advanced room allocation, and custom luggage tagging ensure guests never carry a bag. They arrive, and their wardrobe is already waiting.' },
        { label: 'F&B Flow Curation', text: 'We coordinate directly with executive chefs to engineer a culinary experience where the food complements the event aesthetic without causing operational bottlenecks.' }
      ]
    },
    {
      id: 1,
      title: 'Design & Cultural Aesthetics',
      domain: 'Jayesh & Rutuja’s Domain',
      icon: <FaPaintBrush />,
      description: 'Aesthetics is not just decor; it is spatial psychology. We build environments that evoke emotion, using architectural rigor and botanical mastery to tell your story in a physical space.',
      details: [
        { label: 'Bespoke Floral Architecture', text: 'From 30-foot cascading botanical suspensions to exotic rare stems sourced globally, we engineer floral arrangements that act as living art rather than mere table centerpieces.' },
        { label: 'Rituals Management', text: 'Deep respect for tradition combined with uncompromising punctuality. We ensure all ritual requirements (Samagri, Mandap setup, Pandit coordination) are executed flawlessly.' },
        { label: 'Trousseau & Hamper Styling', text: 'Highly premium, custom-designed room hampers, welcome kits, and return favors that act as a tangible, luxurious extension of your wedding’s core identity.' },
        { label: 'Artist & Talent Curation', text: 'Sourcing, booking, and managing A-list celebrity performers, niche traditional musicians, and internationally renowned DJs to curate the perfect sonic atmosphere.' }
      ]
    },
    {
      id: 2,
      title: 'Heavy Production & Operations',
      domain: 'Avadhut & Devesh’s Domain',
      icon: <FaHardHat />,
      description: 'The backbone of every grand aesthetic is uncompromising structural engineering. We do not outsource our core responsibilities; we build the heavy iron that supports your vision.',
      details: [
        { label: 'Master Blueprint Production', text: 'We take ownership of the master timeline, running rigorous site visits and translating creative renders into highly technical, milimeter-perfect structural blueprints.' },
        { label: 'Structural Logistics', text: 'Managing the heavy iron. From complex scaffolding to heavy overnight load-ins and rapid 24-hour venue turnarounds, we handle the extreme physics of event creation.' },
        { label: 'Stage & Technical Rigging', text: 'Precision oversight of high-end intelligent lighting arrays, line-array audio systems, and special effects rigging, ensuring safety meets breathtaking spectacle.' },
        { label: 'The Command Center', text: 'An on-site, highly disciplined operational hub running the backend of your wedding in real-time. If a problem arises, we neutralize it before you even know it existed.' }
      ]
    }
  ];

  return (
    <div>
      {/* ===== SECTION 1: THE HERO (THE HOOK) ===== */}
      <section className="cinematic-hero pastel-hero" id="weddings-hero">
        <motion.div className="video-background-wrapper" style={{ y: bgY }}>
          <div className="video-overlay" style={{ background: 'transparent' }}></div>
          <div className="background-video-placeholder" style={{ background: 'radial-gradient(circle at top right, var(--rose-muted) 0%, transparent 50%), radial-gradient(circle at bottom left, var(--lilac-muted) 0%, transparent 50%)', opacity: 0.8 }}></div>
        </motion.div>

        <motion.div className="content container" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.h1 
            className="mega-heading" 
            style={{ marginBottom: '10px', color: 'var(--text-dark)', fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.span style={{ display: 'inline-block' }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>Emotion.</motion.span><br />
            <motion.span style={{ display: 'inline-block' }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>Ceremony.</motion.span><br />
            <motion.span className="accent" style={{ display: 'inline-block' }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>Flawless Execution.</motion.span>
          </motion.h1>
          
          <ScrollReveal animation="reveal-scale">
            <p style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '15px', color: 'var(--rose-deeper)' }}>
              Premium Wedding Styling & Production | Pune
            </p>
          </ScrollReveal>

          <ScrollReveal animation="reveal-scale">
            <div className="gold-line-center" style={{ marginBottom: '15px', background: 'var(--rose-deeper)' }}></div>
            <p className="hero-body-text" style={{ maxWidth: '700px', margin: '0 auto var(--space-lg)', fontSize: '1.1rem', lineHeight: '1.5', color: 'var(--text-dark)' }}>
              We do not just decorate venues. We architect experiences. From heavy structural rigging to the most intimate traditional rituals, we control the chaos so you can live the story.
            </p>
            <MagneticButton as="link" to="/contact" className="btn btn-primary btn-lg">
              Request a Consultation
            </MagneticButton>
          </ScrollReveal>
        </motion.div>
        
        <motion.div className="scroll-indicator" style={{ color: 'var(--text-dark)', opacity: heroOpacity }}>
          <div className="scroll-indicator-mouse" style={{ borderColor: 'var(--text-dark)' }}></div>
        </motion.div>
      </section>

      {/* ===== SECTION 2: THE SERVICE MATRIX (DYNAMIC ENGINE) ===== */}
      <section className="section" id="wedding-services" style={{ background: 'var(--cream)' }}>
        <SectionHeading
          label="The Storyline Infrastructure"
          title="The Operational Engine"
          description="Operating across 15+ dedicated departments to ensure absolute zero-error execution."
        />
        
        <div className="container-wide" style={{ marginTop: 'var(--space-2xl)' }}>
          
          {/* All Services Displayed Sequentially */}
          <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
            {engineData.map((service, index) => (
              <ScrollReveal key={index} animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}>
                <div className="service-row" style={{ 
                  background: 'var(--white)', 
                  padding: 'var(--space-2xl)', 
                  borderRadius: '24px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-xl)'
                }}>
                  <div className="service-row-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <div style={{ fontSize: '3rem', color: 'var(--rose-deeper)' }}>{service.icon}</div>
                    <div>
                      <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontWeight: '800', letterSpacing: '-0.02em' }}>{service.title}</h2>
                      <span className="label" style={{ opacity: 0.8 }}>{service.domain}</span>
                    </div>
                  </div>
                  <p className="panel-desc" style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text-dark)' }}>{service.description}</p>
                  <div className="panel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="panel-detail-item">
                        <h4 style={{ color: 'var(--rose-deeper)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{detail.label}</h4>
                        <p style={{ color: 'var(--text-muted)' }}>{detail.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ===== SECTION 3: THE PORTFOLIO & VISION (THE PROOF) ===== */}
      <section className="section" style={{ background: 'var(--blush-soft)' }} id="wedding-gallery">
        
        {/* Creative Editorial Intro */}
        <div className="container" style={{ marginBottom: 'var(--space-3xl)' }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <ScrollReveal animation="reveal-left">
              <h2 className="mega-heading" style={{ textAlign: 'left', lineHeight: 1 }}>
                Artistry Meets<br />
                <span className="accent">Engineering</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="reveal-right">
              <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '4px solid var(--rose-deeper)' }}>
                <p style={{ 
                  fontSize: '1.4rem', 
                  color: 'var(--text-dark)', 
                  lineHeight: '1.8',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  letterSpacing: '0.02em'
                }}>
                  "A luxury wedding is not a collection of beautiful photos; it is a live, breathing event."
                </p>
                <p style={{ 
                  marginTop: '1.5rem',
                  fontSize: '1.1rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7'
                }}>
                  Our portfolio represents thousands of hours of 3D spatial mapping, structural fabrication, and uncompromising floral selection. We build stages that support hundreds of guests and craft aesthetics that get published.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Asymmetric Mismatched Grid (Like Home Page) */}
        <div className="container-wide">
          <div className="mismatched-grid">
            {galleryImages.map((img, index) => (
              <ScrollReveal 
                key={index} 
                animation="reveal-scale" 
                className={`card-size-${index % 5}`} 
                style={{ height: '100%' }}
              >
                <div className="portfolio-card hover-tilt" style={{ height: '100%' }}>
                  <img src={img.src} alt={img.name} />
                  <div className="portfolio-card-overlay">
                    <span className="portfolio-card-category">{img.category}</span>
                    <h3>{img.name}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          
        </div>
      </section>

      {/* ===== SECTION 4: THE STORYLINE EDGE (AUTHORITY) ===== */}
      <section className="section authority-section" id="wedding-authority" style={{ background: 'var(--footer-bg)', color: 'var(--white)' }}>
        <div className="container">
          <div className="light-heading">
            <SectionHeading label="The Edge" title="Why Trust Storyline?" />
          </div>
          <style>{`.light-heading h2, .light-heading .label, .light-heading p { color: var(--white) !important; }`}</style>
          
          <div className="authority-grid">
            
            <ScrollReveal>
              <div className="authority-card" ref={ref01}>
                <div className="authority-number">0{trust01}</div>
                <div className="authority-content">
                  <h3>Absolute Control</h3>
                  <p>We do not outsource our core responsibilities. Our in-house production team fabricates the structures.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="authority-card" ref={ref02}>
                <div className="authority-number">{trust02}</div>
                <div className="authority-content">
                  <h3>The 24-Hour Rule</h3>
                  <p>If a venue gives us a bare hall at midnight, we hand you a fully realized luxury aesthetic by 9:00 AM.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="authority-card" ref={ref03}>
                <div className="authority-number">{trust03}%</div>
                <div className="authority-content">
                  <h3>Discretion & Exclusivity</h3>
                  <p>We take on a strictly limited number of weddings per season to ensure the founders are on-site for your event.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ===== SECTION 5: THE FINAL INTAKE (ENQUIRY) ===== */}
      <section className="section" id="wedding-inquiry" style={{ background: 'var(--blush-soft)' }}>
        <SectionHeading
          label="Your Story Starts Here."
          title="Request Private Consultation"
          description="A wedding of this scale requires absolute alignment. We invite you to share the vision for your big day. Let us sit down, review your venue, and map out the logistics required to bring it to life."
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
