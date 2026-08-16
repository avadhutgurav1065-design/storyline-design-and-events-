import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  const [counts, setCounts] = useState({ hours: 0, builds: 0 });
  const metricsRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    document.title = 'About Us | Storyline Design & Events';
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          animateValue('hours', 0, 15000, 2000);
          animateValue('builds', 0, 300, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [hasCounted]);

  const animateValue = (key, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCounts(prev => ({
        ...prev,
        [key]: Math.floor(easeProgress * (end - start) + start)
      }));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const coreTeam = [
    {
      name: 'Aishwarya Thite',
      role: 'Hospitality & Rituals Head',
      bio: 'Ensures the emotional narrative remains uninterrupted. From VIP check-ins to orchestrating traditional rituals on a strict timeline.',
      img: '/images/team/aishwarya.jpg'
    },
    {
      name: 'Rutuja Thite',
      role: 'Marketing Head & Celebrity Manager',
      bio: 'The direct liaison for HNI and celebrity talent, ensuring absolute discretion, white-glove service, and seamless communication.',
      img: '/images/team/rutuja.jpg'
    },
    {
      name: 'Devesh Agrawal',
      role: 'Production & Execution Head',
      bio: 'The commander on the ground. Bridging the gap between digital blueprints and physical reality, directing fabrication crews for rapid venue transformations.',
      img: '/images/team/devesh.jpg'
    },
    {
      name: 'Adesh Ghanwat',
      role: 'Logistics Head',
      bio: 'The backbone of the supply chain. Orchestrating the movement of structural iron, florals, and lighting rigs with military-level precision.',
      img: '/images/team/adesh.jpg'
    }
  ];

  return (
    <div className="about-page" style={{ background: 'var(--cream)' }}>
      
      {/* ===== SECTION 1: THE EDITORIAL MANIFESTO ===== */}
      <section className="manifesto-hero">
        <div className="container-wide text-center" style={{ paddingTop: '15vh' }}>
          <ScrollReveal>
            <h1 className="manifesto-title">We Build the Structure.<br/>You Live the Story.</h1>
          </ScrollReveal>
          
          <ScrollReveal>
            <p className="manifesto-body">
              Storyline Design & Events is Pune’s premier event styling and production house. Rebuilt from the ground up as a house of craftsmanship, we bridge the gap between heavy structural engineering and bespoke aesthetic design.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="manifesto-image-wrap mt-5">
          <div className="manifesto-bg"></div>
        </div>
      </section>

      {/* ===== NEW SECTION: THE GENESIS (COMPANY PROFILE) ===== */}
      <section className="section" style={{ background: 'var(--cream)', paddingBottom: 0 }}>
        <div className="container-wide">
          <div className="genesis-grid">
            <div className="genesis-heading-col">
              <ScrollReveal>
                <h2 className="editorial-section-header">The Genesis.</h2>
                <p className="signature-font mt-3" style={{ opacity: 0.8 }}>Since 2020</p>
              </ScrollReveal>
            </div>
            <div className="genesis-text-col">
              <ScrollReveal>
                <p className="editorial-dropcap">
                  Founded in 2020, Storyline Design & Events emerged from a fundamental realization: the Indian luxury event space was fractured. Clients were forced to navigate a labyrinth of planners, third-party fabricators, and disconnected design agencies. We recognized that true architectural scale and aesthetic precision could only be achieved if we owned the entire ecosystem. 
                </p>
                <p className="mt-4">
                  We evolved rapidly from standard event coordination into a heavy-duty production house. By investing heavily in our own structural inventory, in-house digital 3D rendering studios, and elite fabrication talent, we eliminated the middleman. Today, Storyline operates as an architectural force, designing and building environments for India's most exclusive luxury weddings, high-net-worth individuals, and massive corporate summits.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THE CORE PHILOSOPHY ===== */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="editorial-section-header text-center mb-5">The Storyline Standard</h2>
            <p className="text-center text-muted mb-5" style={{ fontSize: '1.2rem', fontStyle: 'italic', fontFamily: 'var(--font-accent)' }}>
              We operate on a strict, zero-error methodology.
            </p>
          </ScrollReveal>

          <div className="philosophy-grid">
            <ScrollReveal animation="reveal-scale">
              <div className="philosophy-card">
                <div className="philosophy-num">01</div>
                <h4 className="philosophy-title">Structural Precision</h4>
                <p>Engineering-grade execution. Trussing, rigging, and staging are handled with military-level logistics. We do not gamble with safety or timelines.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-scale">
              <div className="philosophy-card">
                <div className="philosophy-num">02</div>
                <h4 className="philosophy-title">Uncompromising Aesthetic</h4>
                <p>Floral design, luxury drapery, and spatial rendering are treated as fine craft. If it is in the 3D render, it is on the stage.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-scale">
              <div className="philosophy-card">
                <div className="philosophy-num">03</div>
                <h4 className="philosophy-title">Absolute Discretion</h4>
                <p>High-net-worth families, celebrities, and corporate VIPs require privacy. Our command center operates silently behind the scenes.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== NEW SECTION: VISION & MISSION (THE NORTH STAR) ===== */}
      <section className="section" style={{ background: 'var(--card-pink)' }}>
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h3 className="mission-label">Our Vision</h3>
            <h2 className="mission-statement mb-5">
              To architect the most structurally ambitious and aesthetically profound event environments in India.
            </h2>
          </ScrollReveal>
          
          <div className="mission-divider"></div>
          
          <ScrollReveal>
            <h3 className="mission-label mt-5">Our Mission</h3>
            <h2 className="mission-statement">
              To eliminate the gap between digital expectation and physical execution through relentless in-house engineering, absolute discretion, and bespoke design.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== NEW SECTION: THE EVOLUTION TIMELINE ===== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="editorial-section-header text-center mb-5">The Evolution</h2>
          </ScrollReveal>

          <div className="vertical-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <ScrollReveal animation="reveal-scale">
                <div className="timeline-content">
                  <span className="timeline-year">2020</span>
                  <h4 className="timeline-title">The Inception</h4>
                  <p>Storyline is founded in Pune, focusing on highly personalized social events and establishing a reputation for meticulous timeline management.</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <ScrollReveal animation="reveal-scale">
                <div className="timeline-content">
                  <span className="timeline-year">2022</span>
                  <h4 className="timeline-title">The Corporate Expansion</h4>
                  <p>Taking on massive tech summits and brand activations, introducing engineering-grade rigging and heavy logistical command into our core services.</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <ScrollReveal animation="reveal-scale">
                <div className="timeline-content">
                  <span className="timeline-year">2024</span>
                  <h4 className="timeline-title">The In-House Mandate</h4>
                  <p>A pivotal shift. We stopped outsourcing and built our own fabrication units, owning the entire supply chain to guarantee zero-error execution.</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <ScrollReveal animation="reveal-scale">
                <div className="timeline-content">
                  <span className="timeline-year">2026</span>
                  <h4 className="timeline-title">The Design Studio</h4>
                  <p>Launch of our premier 3D spatial rendering department, perfectly bridging the gap between digital architectural blueprints and physical reality.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: THE ARCHITECTS (Leadership Split-Screen) ===== */}
      <section className="section p-0" style={{ background: 'var(--card-sage)' }}>
        <div className="leadership-split">
          <div className="leadership-image-half editorial-photo-comp">
            <div className="founder-photo-wrap avadhut-photo">
              <img src="/images/team/avadhut.jpg" alt="Avadhut" className="founder-img" />
            </div>
            <div className="founder-photo-wrap jayesh-photo">
              <img src="/images/team/jayesh.jpg" alt="Jayesh" className="founder-img" />
            </div>
          </div>
          
          <div className="leadership-content-half">
            <ScrollReveal>
              <h2 className="editorial-section-header mb-5">The Leadership</h2>
            </ScrollReveal>

            <ScrollReveal>
              <div className="founder-profile mb-5">
                <div className="founder-header">
                  <h3>Avadhut Krishna Gurav</h3>
                  <span className="signature-font">Avadhut</span>
                </div>
                <p className="founder-role">Founder, Production & Technical Expert</p>
                <p className="founder-bio">
                  The architectural force behind Storyline. Merging a deep background in high-level operational management and technology systems, Avadhut architects the complex logistics required for massive corporate product launches and luxury weddings. He operates on a strict zero-error philosophy, ensuring that heavy structural rigging and 24-hour venue transformations are executed with absolute precision.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="founder-profile">
                <div className="founder-header">
                  <h3>Jayesh Mahajan</h3>
                  <span className="signature-font">Jayesh</span>
                </div>
                <p className="founder-role">Design & Animation Head, Co-Architect</p>
                <p className="founder-bio">
                  The visual visionary behind the aesthetic. Leveraging advanced digital architecture, Jayesh transforms raw concepts into precise 3D venue mappings. Before a single piece of iron is rigged, he ensures the client can walk through their event digitally, guaranteeing the final physical build perfectly matches the creative vision.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: THE OPERATIONAL COMMAND (Core Team Grid) ===== */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-wide">
          <div className="text-center mb-5">
            <ScrollReveal>
              <h2 className="editorial-section-header">The Production Engine</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', marginTop: '1rem' }}>A lean, elite core team commanding a highly vetted vendor and fabrication bench.</p>
            </ScrollReveal>
          </div>

          <div className="core-team-grid">
            {coreTeam.map((member, idx) => (
              <ScrollReveal key={idx} animation="reveal-scale">
                <div className="core-member-card">
                  <div className="member-image-wrapper">
                    <img src={member.img} alt={member.name} className="member-image bw-to-color" />
                    <div className="member-info-overlay glassmorphism">
                      <h4>{member.name}</h4>
                      <span className="member-role">{member.role}</span>
                      <p className="member-bio">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: THE INFRASTRUCTURE (Overlay & Counters) ===== */}
      <section className="section p-0">
        <div className="infrastructure-wrap" ref={metricsRef}>
          <div className="infra-bg parallax-bg"></div>
          <div className="infra-overlay-pastel"></div>
          
          <div className="infra-content">
            <ScrollReveal>
              <h2 className="infra-title">We Own the Execution.</h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="infra-body">
                We are not middlemen passing your budget to third-party vendors. Storyline Design & Events operates its own logistical supply chain, fabrication units, and digital design studio. By controlling the inventory and the talent, we control the final outcome.
              </p>
            </ScrollReveal>

            <div className="infra-counters mt-5">
              <div className="counter-item">
                <span className="counter-num">{counts.hours.toLocaleString()}+</span>
                <span className="counter-label">Hrs on Site</span>
              </div>
              <div className="counter-item">
                <span className="counter-num">{counts.builds.toLocaleString()}+</span>
                <span className="counter-label">Documented Builds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEW SECTION: BRAND TRUST MARQUEE ===== */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>LUXURY WEDDINGS & MANDAPS</span>
          <span className="marquee-dot">•</span>
          <span>CORPORATE TECH SUMMITS</span>
          <span className="marquee-dot">•</span>
          <span>HIGH-NET-WORTH PRIVATE CELEBRATIONS</span>
          <span className="marquee-dot">•</span>
          <span>BRAND ACTIVATIONS & EXPOS</span>
          <span className="marquee-dot">•</span>
          <span>LUXURY WEDDINGS & MANDAPS</span>
          <span className="marquee-dot">•</span>
          <span>CORPORATE TECH SUMMITS</span>
          <span className="marquee-dot">•</span>
          <span>HIGH-NET-WORTH PRIVATE CELEBRATIONS</span>
          <span className="marquee-dot">•</span>
          <span>BRAND ACTIVATIONS & EXPOS</span>
        </div>
      </div>

      {/* ===== SECTION 6: THE FINAL CALL TO ACTION ===== */}
      <section className="section text-center" style={{ background: 'var(--cream)', padding: 'var(--space-3xl) 0' }}>
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="editorial-section-header" style={{ textTransform: 'none', fontSize: '2.5rem', marginBottom: 'var(--space-xl)' }}>
              Let us architect your next milestone.
            </h2>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1rem', letterSpacing: '0.1em' }}>
              Book a Private Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
      
    </div>
  );
}
