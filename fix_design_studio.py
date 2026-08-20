import os

filepath = r'C:\storyline website\frontend\src\pages\DesignStudio.jsx'

code = """import React, { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import DesignStudioForm from '../components/DesignStudioForm';
import { FaPaintBrush, FaMapSigns, FaUtensils, FaIdBadge, FaGift, FaBullhorn, FaCubes, FaFilm } from 'react-icons/fa';

export default function DesignStudio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const catalogData = [
    {
      id: 0,
      icon: <FaPaintBrush />,
      title: 'Digital & Print Stationery',
      subtitle: 'The First Impression',
      desc: 'Setting the exact tone of the event months before the guests arrive.',
      items: [
        'Save the Date & Custom Invitations',
        'Digital & Motion Invites',
        'Social Media Invite Assets',
        'RSVP & Welcome Cards',
        'Event Programs & Thank You Cards'
      ]
    },
    {
      id: 1,
      icon: <FaMapSigns />,
      title: 'Spatial Graphics & Wayfinding',
      subtitle: 'The Navigation',
      desc: 'Transforming the venue with structural elegance and clear, branded direction.',
      items: [
        'Massive Welcome Boards',
        'Directional & Event Signage',
        'Free-Standing Standees',
        'Structural & Welcome Backdrops',
        'Custom Photo Booth Frames'
      ]
    },
    {
      id: 2,
      icon: <FaUtensils />,
      title: 'Premium Tablescapes & Dining',
      subtitle: 'The Guest Experience',
      desc: 'The micro-details that command attention when guests sit down.',
      items: [
        'Calligraphy Name & Place Cards',
        'Seating Charts & Table Numbers',
        'Menu Cards & Acrylic Stands',
        'Table Toppers & Tent Cards'
      ]
    },
    {
      id: 3,
      icon: <FaIdBadge />,
      title: 'VIP Access & Corporate Credentials',
      subtitle: 'The Security & Protocol',
      desc: 'Flawless branding for high-scale conferences and institutional setups.',
      items: [
        'VIP & General Entry Passes',
        'Corporate ID Cards & Badges',
        'Custom Lanyards',
        'Premium Certificates'
      ]
    },
    {
      id: 4,
      icon: <FaGift />,
      title: 'Gifting, Packaging & Touchpoints',
      subtitle: 'The Takeaway',
      desc: 'The final physical memory your guests and delegates take home.',
      items: [
        'Box & Bag Packaging Design',
        'Hamper & Envelope Design',
        'Gift & Return Tags',
        'Premium Stickers & Custom Labels',
        'Water Bottle Branding'
      ]
    },
    {
      id: 5,
      icon: <FaBullhorn />,
      title: 'Marketing & Event Collateral',
      subtitle: 'The Campaign',
      desc: 'High-conversion marketing materials for expos, tech summits, and brand launches.',
      items: [
        'Multi-page Brochures',
        'Promotional Flyers & Posters',
        'Flex & Vinyl Banners',
        'Event Schedules & Pocket Agendas'
      ]
    }
  ];

  return (
    <div className="design-studio-page">
      {/* ===== SECTION 1: THE HERO ===== */}
      <section className="hero-section" style={{ 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.8)), url("/images/portfolio/512314d3077a801ae45d506c9de6f114.jpg") center/cover no-repeat',
        color: 'var(--white)',
        textAlign: 'center',
        padding: 'var(--space-3xl) var(--space-md)'
      }}>
        <div className="container-narrow">
          <ScrollReveal animation="reveal-scale">
            <h1 className="mega-heading" style={{ fontSize: '4.5rem', marginBottom: 'var(--space-md)', color: 'var(--white)' }}>
              The Design Studio.
            </h1>
            <div className="gold-line-center" style={{ marginBottom: '25px', width: '80px', height: '4px', background: 'var(--rose-deeper)' }}></div>
            <p className="hero-body-text" style={{ fontSize: '1.3rem', lineHeight: '1.8', opacity: 0.9, marginBottom: 'var(--space-2xl)' }}>
              From bespoke weddings to high-stakes corporate summits and B2B white-label agency support. 
              We are the creative engine that renders, brands, and documents the entire aesthetic ecosystem of your event.
            </p>
            <a href="#creative-catalog" className="btn btn-primary btn-lg hover-lift" style={{ letterSpacing: '0.05em' }}>
              Explore Our Capabilities
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 2: 3D RENDERING ===== */}
      <section className="section" style={{ background: 'var(--cream)', overflow: 'hidden' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3xl)' }}>
            <div style={{ flex: '1 1 500px' }}>
              <ScrollReveal animation="reveal-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                  <FaCubes style={{ fontSize: '2rem', color: 'var(--rose-deeper)' }} />
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--rose-deeper)' }}>The Blueprint</span>
                </div>
                <h2 className="mega-heading" style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-md)' }}>See It Before We Build It.</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: 'var(--space-lg)' }}>
                  We eliminate all guesswork and financial risk. For luxury weddings, corporate builds, and B2B partners, our design studio renders your exact venue in 3D space. 
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.7', paddingLeft: '1rem', borderLeft: '3px solid var(--rose-deeper)' }}>
                  Walk through the digital blueprint, approve the structural layout, and sign off on the exact aesthetic before a single piece of iron is loaded onto our trucks.
                </p>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 500px' }}>
              <ScrollReveal animation="reveal-right">
                <div style={{ 
                  background: 'var(--white)', 
                  padding: '10px', 
                  borderRadius: '16px', 
                  boxShadow: 'var(--shadow-elevated)',
                  position: 'relative'
                }}>
                  <img src="/images/portfolio/7275c62519f387d8b04aa08cd435b1c8.jpg" alt="3D Render vs Reality" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '20px', 
                    left: '20px', 
                    background: 'rgba(0,0,0,0.7)', 
                    color: 'white', 
                    padding: '8px 16px', 
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em'
                  }}>
                    PHYSICAL BUILD
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: THE REEL ENGINE ===== */}
      <section className="section" style={{ background: 'var(--footer-bg)', color: 'var(--white)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: 'var(--space-3xl)' }}>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
              <ScrollReveal animation="reveal-scale">
                <div style={{ 
                  width: '300px', 
                  height: '600px', 
                  background: '#000', 
                  borderRadius: '40px', 
                  border: '10px solid #333',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}>
                  <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                    <source src="/videos/studio-reel.mp4" type="video/mp4" />
                  </video>
                </div>
              </ScrollReveal>
            </div>
            
            <div style={{ flex: '1 1 500px' }}>
              <ScrollReveal animation="reveal-right">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                  <FaFilm style={{ fontSize: '2rem', color: 'var(--rose-deeper)' }} />
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--rose-deeper)' }}>The Reel Engine</span>
                </div>
                <h2 className="mega-heading" style={{ color: 'var(--white)', marginBottom: 'var(--space-md)' }}>Event Content Architecture.</h2>
                <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.7', marginBottom: 'var(--space-xl)' }}>
                  A premium event only lasts 24 hours, but the digital footprint lasts forever. We script, shoot, and engineer high-retention cinematic content designed to dominate social media.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ color: 'var(--rose-deeper)', marginBottom: '0.5rem' }}>Pre-Event Hype</h4>
                    <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Teaser Reels & motion-graphic invitations to build anticipation.</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--rose-deeper)', marginBottom: '0.5rem' }}>Live Coverage</h4>
                    <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Rapid-turnaround production highlighting critical brand moments.</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--rose-deeper)', marginBottom: '0.5rem' }}>B2B & Corporate</h4>
                    <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Keynote highlights & cinematic wrap-ups for LinkedIn.</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--rose-deeper)', marginBottom: '0.5rem' }}>Social Assets</h4>
                    <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Custom Instagram Stories and digital agenda cards.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: THE MASTER CREATIVE CATALOG (GRID) ===== */}
      <section className="section" id="creative-catalog" style={{ background: 'var(--white)' }}>
        <SectionHeading
          label="The Deep Dive"
          title="The Comprehensive Design Arsenal"
          description="Every physical and digital touchpoint, meticulously designed and fabricated by our in-house studio."
        />

        <div className="container-wide mt-5">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-2xl)' }}>
            {catalogData.map((catalog, index) => (
              <ScrollReveal key={catalog.id} animation="reveal-scale">
                <div style={{ 
                  background: 'var(--cream)', 
                  padding: 'var(--space-xl)', 
                  borderRadius: '24px',
                  height: '100%',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '2.5rem', color: 'var(--rose-deeper)' }}>{catalog.icon}</div>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', margin: 0 }}>{catalog.title}</h3>
                      <span style={{ fontSize: '0.9rem', color: 'var(--rose-deeper)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>{catalog.subtitle}</span>
                    </div>
                  </div>
                  
                  <p style={{ color: 'var(--text-dark)', fontSize: '1.05rem', marginBottom: '1.5rem', flexGrow: 0 }}>
                    {catalog.desc}
                  </p>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
                    {catalog.items.map((item, idx) => (
                      <li key={idx} style={{ 
                        paddingLeft: '1.5rem', 
                        position: 'relative', 
                        marginBottom: '0.75rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.95rem'
                      }}>
                        <span style={{ 
                          position: 'absolute', 
                          left: 0, 
                          top: '8px', 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          background: 'var(--rose-deeper)' 
                        }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: THE STUDIO INTAKE ===== */}
      <section className="section" id="studio-intake" style={{ background: 'var(--blush-soft)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <ScrollReveal>
              <h2 className="mega-heading" style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: 'var(--space-md)' }}>Commission the Studio.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Whether you are planning a luxury wedding, a corporate gala, or you are an event agency needing structural design support—submit your brief below.
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
"""

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(code)

print("DesignStudio.jsx rebuilt.")
