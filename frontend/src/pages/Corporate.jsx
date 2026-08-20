import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import CorporateInquiryForm from '../components/CorporateInquiryForm';
import { FaMicrophoneAlt, FaStore, FaRocket, FaChalkboardTeacher, FaMapMarkedAlt, FaTruckLoading, FaUserShield } from 'react-icons/fa';

export default function Corporate() {
  useEffect(() => {
    document.title = 'Storyline Corporate — Premium B2B Event Production | Pune';
  }, []);

  // State for Dynamic Tab Buttons in Infrastructure section
  const [activeInfra, setActiveInfra] = useState(0);

  const corporateServices = [
    {
      icon: <FaMicrophoneAlt />,
      title: 'Conferences & Summits',
      desc: 'Architecting authoritative environments for thought leadership. We go beyond basic staging to build immersive academic and corporate spaces.',
      details: [
        'A/V & Stage Architecture: High-res seamless LED video walls, custom podiums, and line-array audio calibrated for vocal clarity.',
        'Crowd Logistics: Precision seating grids, VIP barricading, and seamless digital registration infrastructure for 100 to 5,000+ delegates.',
        'Stage Flow Control: Dedicated show-callers managing speaker transitions, green-room cues, and countdown clocks to ensure zero dead-air.'
      ]
    },
    {
      icon: <FaStore />,
      title: 'Trade Shows & Expos',
      desc: 'Maximizing B2B engagement through intelligent spatial mapping. We build high-gloss, standardized environments that amplify exhibitor ROI.',
      details: [
        'Exhibitor Infrastructure: Standardized Octanorm/Maxima shell schemes built for rapid deployment and massive scale.',
        'Custom VIP Pavilions: Bespoke structural booth fabrication, multi-level rigging, and integrated LED branding for anchor brands.',
        'Spatial Flow & Wayfinding: Digital signage and engineered aisle mapping to prevent bottlenecks and direct foot traffic optimally.'
      ]
    },
    {
      icon: <FaRocket />,
      title: 'Product Launches',
      desc: 'Creating viral, high-impact media moments. We engineer the spectacle required to make your new product the center of the industry.',
      details: [
        'The Reveal Mechanics: Hydraulic lifts, Kabuki drops, and synchronized lighting/laser shows to build intense anticipation.',
        'Media & PR Architecture: Strategically placed VIP step-and-repeats and press risers with direct, clean audio feeds for broadcast.',
        'Immersive Demo Zones: Custom-fabricated experiential booths allowing delegates hands-on interaction with the product.'
      ]
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Seminars & Workshops',
      desc: 'Facilitating high-value knowledge transfer. We build intimate, modular environments designed to optimize focus and B2B deal-making.',
      details: [
        'Modular Environments: Custom seating pods, white-boarding stations, and frictionless tech/power integrations for hands-on bootcamps.',
        'Networking Optimization: High-top cocktail layouts, strategic grazing tables, and ambient acoustic control.',
        'Interactive Tech: Seamless integration of live-polling systems, Q&A mics, and dual-screen projection mapping.'
      ]
    }
  ];

  // Dynamic Infrastructure Data
  const infraData = [
    {
      id: 0,
      title: 'Digital Mapping & Rendering',
      icon: <FaMapMarkedAlt />,
      description: 'We eliminate surprises before load-in begins. Our design department builds millimeter-accurate 3D spatial maps of your chosen venue.',
      details: [
        { label: 'Spatial Physics & Sightlines', text: 'We calculate precise viewing angles for every seat in the house, ensuring no VIP is stuck behind a pillar or staring at a dead screen.' },
        { label: 'Photorealistic Pre-Vis', text: 'You see the exact lighting, structural trussing, and branding placement in 4K renders before a single piece of iron is loaded onto a truck.' }
      ]
    },
    {
      id: 1,
      title: 'Heavy Logistics & Supply Chain',
      icon: <FaTruckLoading />,
      description: 'Corporate venues operate on strict 24-hour turnaround windows. Our in-house fabrication and logistics crews master the master timeline.',
      details: [
        { label: 'Overnight Load-Ins', text: 'Managing fleets of transport vehicles, heavy iron scaffolding, and high-voltage power grids to transform a bare hall into a corporate arena overnight.' },
        { label: 'Structural Safety Protocols', text: 'Every truss, LED wall, and sound array is rigged by certified technicians adhering to international load-bearing and safety standards.' }
      ]
    },
    {
      id: 2,
      title: 'VIP & Delegate Protocol',
      icon: <FaUserShield />,
      description: 'The highest levels of corporate hospitality. We ensure that your investors, keynote speakers, and media personnel experience absolute luxury.',
      details: [
        { label: 'Green Room Management', text: 'Fully catered, secure, and technologically equipped holding areas for speakers to prep and relax before hitting the stage.' },
        { label: 'White-Glove Transfers', text: 'Seamless airport-to-venue transit networks, ensuring high-net-worth delegates are shadowed and assisted from the moment they land.' }
      ]
    }
  ];

  const caseStudies = [
      {
        src: '/images/corporate/0d43104de7bcd575d7c468c563ec6253.jpg',
        tags: 'Brand Installation, Grand Entrance, Custom Arches',
        title: 'Avadh Utopia Celebration'
      },
      {
        src: '/images/corporate/1d6bc30b89db004a40e889de31d045b9.jpg',
        tags: 'Gala Setup, A/V Projection, Banquet Layout',
        title: 'World of Children Gala'
      },
      {
        src: '/images/corporate/5c4de1cf0d30d1174a9d1f8d0630ef58.jpg',
        tags: 'LED Wall Production, Lighting Design, Stage Fabrication',
        title: 'Stellar Tech Gala'
      }
    ];

  return (
    <div className="corporate-page">
      {/* ===== SECTION 1: THE HERO (THE HOOK) ===== */}
      <section className="cinematic-hero pastel-hero" id="corporate-hero" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {/* Aesthetic dark/light mix background glow */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 0%, var(--cream) 80%), radial-gradient(circle at 80% 20%, rgba(164, 105, 127, 0.4) 0%, transparent 70%), radial-gradient(circle at 20% 80%, rgba(117, 141, 113, 0.4) 0%, transparent 70%)' }}></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1, position: 'absolute', top: 0, left: 0, zIndex: 0 }}
          >
            <source src="/videos/corporate hero.webm" type="video/webm" />
          </video>
        </div>

        <div className="content container">
          <ScrollReveal>
            <h1 className="mega-heading" style={{ marginBottom: '20px', lineHeight: 1.1, color: 'var(--text-dark)' }}>
              Structural Precision.<br />
              B2B Scale.<br />
              <span className="accent">Zero-Error Execution.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="reveal-scale">
            <p style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '25px', color: 'var(--rose-deeper)' }}>
              Premium Corporate Event Production | Pune & Beyond
            </p>
          </ScrollReveal>

          <ScrollReveal animation="reveal-scale">
            <div className="gold-line-center" style={{ marginBottom: '25px', width: '80px', height: '4px', background: 'var(--rose-deeper)' }}></div>
            <p className="hero-body-text" style={{ maxWidth: '800px', margin: '0 auto var(--space-2xl)', fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--text-dark)', opacity: 0.9 }}>
              Corporate events are not parties; they are high-stakes brand investments. We provide the architectural backbone, A/V engineering, and logistical precision to ensure your summits, expos, and product launches are executed flawlessly.
            </p>
            <a href="#b2b-intake" className="btn btn-primary btn-lg hover-lift" style={{ letterSpacing: '0.05em' }}>
              Submit Your RFP
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 2: THE CORPORATE ARSENAL (SERVICE MATRIX - DEEP DIVE) ===== */}
      <section className="section" id="corporate-services" style={{ background: 'var(--cream)' }}>
        <SectionHeading
          label="Engineered for Scale"
          title="The Corporate Arsenal"
          description="Dedicated B2B production services designed to amplify your brand authority. Hover for technical execution details."
        />
        <div className="container-wide mt-5">
          <div className="corporate-arsenal-grid">
            {corporateServices.map((service, idx) => (
              <ScrollReveal key={idx} className="arsenal-card-wrapper">
                <div className="arsenal-card deep-dive-card">
                  <div className="arsenal-header-row">
                    <div className="arsenal-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                  </div>
                  <p className="arsenal-intro-desc">{service.desc}</p>
                  <div className="arsenal-divider"></div>
                  <ul className="deep-dive-list">
                    {service.details.map((item, i) => {
                      const [strongText, restText] = item.split(': ');
                      return (
                        <li key={i}>
                          {restText ? (
                            <><span className="bullet-point"></span><strong>{strongText}: </strong>{restText}</>
                          ) : (
                            item
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: THE OPERATIONAL MATRIX (DYNAMIC TABS) ===== */}
      <section className="section" id="corporate-operations" style={{ background: 'var(--blush-soft)', color: 'var(--text-dark)' }}>
        <SectionHeading
          label="Why B2B Leaders Choose Us"
          title="The Infrastructure Behind the Event"
          description="We do not outsource your brand's reputation. Our dedicated in-house departments control every logistical variable from blueprint to load-out."
        />
        
        <div className="container-wide" style={{ marginTop: 'var(--space-2xl)' }}>
          
          {/* All Services Displayed Sequentially */}
          <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
            {infraData.map((service, index) => (
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
                      <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{service.title}</h2>
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

      {/* ===== SECTION 4: THE PORTFOLIO & CASE STUDIES (THE PROOF) ===== */}
      <section className="section" id="corporate-portfolio" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ marginBottom: 'var(--space-3xl)' }}>
          <SectionHeading
            label="The Execution Ground"
            title="Corporate Case Studies"
            description="Delivering structural integrity for Pune's fastest-growing brands and institutions."
          />
        </div>

        <div className="container-wide">
          <div className="case-study-grid">
            {caseStudies.map((study, idx) => (
              <ScrollReveal key={idx} className="case-study-card">
                <img src={study.src} alt={study.title} />
                <div className="case-study-overlay">
                  <div className="overlay-content">
                    <h3>{study.title}</h3>
                    <div className="tech-tags">
                      {study.tags.split(', ').map((tag, tIdx) => (
                        <span key={tIdx} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          </div>
      </section>

      {/* ===== SECTION 5: THE B2B INTAKE (THE ENQUIRY) ===== */}
      <section className="section" id="b2b-intake" style={{ background: 'var(--rose-muted)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <ScrollReveal>
              <h2 className="mega-heading" style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: 'var(--space-md)' }}>Initiate Your Project Build.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Whether you have a finalized RFP or need our team to architect the event from scratch, submit your scope below. Our production leads will review your logistical requirements and schedule a technical consultation.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <CorporateInquiryForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
