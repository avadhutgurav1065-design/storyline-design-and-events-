import os

filepath = r'C:\storyline website\frontend\src\pages\Portfolio.jsx'

new_content = """import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import PortfolioInquiryForm from '../components/PortfolioInquiryForm';
import { FaDownload } from 'react-icons/fa';

export default function Portfolio() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    document.title = 'Portfolio & Archive | Storyline Design & Events';
  }, []);

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
    <div className="portfolio-page" style={{ background: 'var(--cream)', paddingBottom: '100px' }}>
      
      {/* ===== SECTION 1: THE EDITORIAL HERO ===== */}
      <section className="section" style={{ padding: '20px' }}>
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '85vh', 
          borderRadius: '30px', 
          overflow: 'hidden', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-elevated)'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/images/weddings/bf3f2fd306de8de31850e0b095052a9d.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}></div>
          
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.85))',
            zIndex: 2
          }}></div>

          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: 'var(--space-2xl)', maxWidth: '1000px' }}>
            <ScrollReveal>
              <h1 className="mega-heading" style={{ color: 'var(--white)', textShadow: '0 4px 20px rgba(0,0,0,0.8)', marginBottom: 'var(--space-md)' }}>
                Structural Elegance.<br/><span className="accent" style={{ color: 'var(--rose-deeper)' }}>Seamless Execution.</span>
              </h1>
              <p style={{ color: 'var(--rose)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', marginBottom: 'var(--space-lg)', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                The Storyline Design Archive | Pune
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <p style={{ fontSize: '1.25rem', color: '#f0f0f0', lineHeight: '1.8', textShadow: '0 2px 10px rgba(0,0,0,0.8)', marginBottom: 'var(--space-xl)' }}>
                We do not rely on stock imagery or promises. Every project in this archive represents real venues, precision 3D mapping, and flawless on-ground fabrication. Browse our documented builds across luxury weddings, corporate summits, and private celebrations.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#editorial-showcase" className="btn" style={{ background: 'var(--rose-deeper)', color: 'var(--white)', padding: '16px 32px' }}>Explore The Archive</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: ULTRA-PREMIUM EDITORIAL SHOWCASE ===== */}
      <div id="editorial-showcase" style={{ paddingTop: '100px' }}>
      
        {/* Project 1: Image Left, Text Right */}
        <section className="section" style={{ padding: '0 20px 150px 20px' }}>
          <div className="container-wide">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
              <div style={{ flex: '1 1 500px', position: 'relative' }}>
                <ScrollReveal animation="reveal-scale">
                  <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', height: '70vh' }}>
                    <img src="/images/weddings/0578776d7acbf027e19a6892aca759e3.jpg" alt="Botanical Mandap" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </ScrollReveal>
              </div>
              <div style={{ flex: '1 1 400px', padding: 'var(--space-xl)' }}>
                <ScrollReveal>
                  <span style={{ color: 'var(--rose-deeper)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', fontSize: '0.9rem' }}>01 / Luxury Wedding</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: 'var(--text-dark)', marginTop: '15px', marginBottom: '20px', lineHeight: '1.1' }}>The Royal<br/>Botanical Mandap</h2>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '30px' }}>
                    An architectural marvel built entirely from scratch over a 14-hour overnight shift. We engineered an 8-pillar structural core capable of supporting over 5,000 natural floral stems, creating a seamless canopy that bridged traditional aesthetics with heavy engineering.
                  </p>
                  <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '20px' }}>
                    <div>
                      <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-dark)' }}>5,000+</div>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Floral Stems</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-dark)' }}>14 Hrs</div>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Rigging Time</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Project 2: Text Left, Image Right */}
        <section className="section" style={{ padding: '0 20px 150px 20px' }}>
          <div className="container-wide">
            <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '50px' }}>
              <div style={{ flex: '1 1 400px', padding: 'var(--space-xl)' }}>
                <ScrollReveal>
                  <span style={{ color: 'var(--rose-deeper)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', fontSize: '0.9rem' }}>02 / Brand Activation</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: 'var(--text-dark)', marginTop: '15px', marginBottom: '20px', lineHeight: '1.1' }}>The FujiFilm<br/>Experience</h2>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '30px' }}>
                    A high-impact corporate activation designed for absolute precision. We deployed an 80ft seamless high-definition LED video wall, elevated press risers, and a 500-seat classroom grid, executing a rapid 6-hour teardown immediately following the summit.
                  </p>
                  <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '20px' }}>
                    <div>
                      <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-dark)' }}>80 ft</div>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>LED Canvas</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-dark)' }}>500+</div>
                      <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Attendees</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div style={{ flex: '1 1 500px', position: 'relative' }}>
                <ScrollReveal animation="reveal-scale">
                  <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', height: '70vh' }}>
                    <img src="/images/corporate/0d43104de7bcd575d7c468c563ec6253.jpg" alt="Corporate Summit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Full Bleed Interstitial */}
        <section style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden', marginBottom: '150px' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/weddings/24b5efff1c8e03140bb67798dba5bceb.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }}></div>
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
             <ScrollReveal>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--white)', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                  "Precision engineering meets<br/>unapologetic luxury."
                </h2>
             </ScrollReveal>
          </div>
        </section>
        
        {/* Project 3: Image Left, Text Right */}
        <section className="section" style={{ padding: '0 20px 150px 20px' }}>
          <div className="container-wide">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
              <div style={{ flex: '1 1 500px', position: 'relative' }}>
                <ScrollReveal animation="reveal-scale">
                  <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', height: '70vh' }}>
                    <img src="/images/corporate/1090deba6950722c605fd3d26ea9fc4c.jpg" alt="Tech Summit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </ScrollReveal>
              </div>
              <div style={{ flex: '1 1 400px', padding: 'var(--space-xl)' }}>
                <ScrollReveal>
                  <span style={{ color: 'var(--rose-deeper)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', fontSize: '0.9rem' }}>03 / Corporate Institutional</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: 'var(--text-dark)', marginTop: '15px', marginBottom: '20px', lineHeight: '1.1' }}>Tech Summit<br/>Mainstage</h2>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '30px' }}>
                    Designed for absolute clarity and focus. We transformed an empty hall into a cutting-edge technological forum, prioritizing acoustic baffling, flawless lighting arcs, and a multi-tiered stage built to support international keynote speakers without visual obstruction.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ===== SECTION 3: REEL & MOTION ARCHIVE ===== */}
      <section className="section" style={{ background: 'var(--white)', padding: '100px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container-wide">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <ScrollReveal>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>Motion Archive</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Watch how our crews transform empty grounds into high-end environments.</p>
            </ScrollReveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <ScrollReveal animation="reveal-scale">
              <div style={{ textAlign: 'center', cursor: 'pointer' }} className="reel-hover">
                <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '450px', marginBottom: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img src="/images/weddings/2744a951066cc81bccb451113b6f27da.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} className="reel-overlay">
                     <div style={{ width: '70px', height: '70px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.8rem', border: '2px solid rgba(255,255,255,0.8)' }}>?</div>
                  </div>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text-dark)', margin: 0 }}>Cinematic Bridal Entry</h4>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="reveal-scale">
              <div style={{ textAlign: 'center', cursor: 'pointer' }} className="reel-hover">
                <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '450px', marginBottom: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img src="/images/corporate/1090deba6950722c605fd3d26ea9fc4c.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} className="reel-overlay">
                     <div style={{ width: '70px', height: '70px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.8rem', border: '2px solid rgba(255,255,255,0.8)' }}>?</div>
                  </div>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text-dark)', margin: 0 }}>Tech Summit Logistics</h4>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="reveal-scale">
              <div style={{ textAlign: 'center', cursor: 'pointer' }} className="reel-hover">
                <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '450px', marginBottom: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img src="/images/weddings/b27628551f2d62c6051086e70a26b23d.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} className="reel-overlay">
                     <div style={{ width: '70px', height: '70px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.8rem', border: '2px solid rgba(255,255,255,0.8)' }}>?</div>
                  </div>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text-dark)', margin: 0 }}>Floral Canopy Rigging</h4>
              </div>
            </ScrollReveal>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
             .reel-hover:hover img { transform: scale(1.03); }
             .reel-hover:hover .reel-overlay { background: rgba(0,0,0,0.5) !important; }
             .reel-hover img { transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); }
          `}} />
        </div>
      </section>

      {/* ===== SECTION 4: INTAKE & INQUIRY ===== */}
      <section className="section" id="intake" style={{ background: 'var(--cream)', padding: '100px 0' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <ScrollReveal>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>Ready to Architect Your Event?</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Whether you are seeking design inspiration or a formal technical proposal, initiate your project below.</p>
            </ScrollReveal>
          </div>

          <div className="intake-split" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px' }}>
            <div className="intake-form-wrapper" style={{ background: 'var(--white)', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
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
"""

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Portfolio redesigned completely.")
