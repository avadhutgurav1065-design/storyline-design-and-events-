import os
import re

filepath = r'C:\storyline website\frontend\src\pages\Portfolio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Enhance Hero Section
old_hero = """{/* ===== SECTION 1: THE EDITORIAL HERO ===== */}
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
      </section>"""

new_hero = """{/* ===== SECTION 1: THE EDITORIAL HERO ===== */}
      <section className="section" style={{ padding: '20px' }}>
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '80vh', 
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
                <a href="#intake" className="btn" style={{ background: 'var(--rose-deeper)', color: 'var(--white)', padding: '16px 32px' }}>Request Portfolio Deck</a>
                <a href="#matrix" className="btn" style={{ background: 'transparent', border: '2px solid var(--white)', color: 'var(--white)', padding: '16px 32px' }}>Explore The Archive</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>"""
content = content.replace(old_hero, new_hero)


# 2. Enhance the Asymmetric Grid
old_grid = """{/* Asymmetric Image Grid */}
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
                <div className="placeholder-image corp-bg">
                  <span className="project-label">Tech Summit</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid-item square">
                <div className="placeholder-image social-bg">
                  <span className="project-label">50th Milestone</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid-item landscape span-2">
                <div className="placeholder-image luxury-bg">
                  <span className="project-label">Lakeside Sangeet</span>
                </div>
              </div>
            </ScrollReveal>
          </div>"""

new_grid = """{/* Asymmetric Image Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridAutoRows: '300px', gap: '20px', marginTop: 'var(--space-2xl)' }}>
            
            {/* Item 1 */}
            <ScrollReveal>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '100%', gridColumn: 'span 2', gridRow: 'span 2', cursor: 'pointer' }} className="portfolio-gallery-item">
                <img src="/images/weddings/0578776d7acbf027e19a6892aca759e3.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="gallery-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'flex-end', padding: '30px' }} className="gallery-overlay">
                  <div>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>The Royal Botanical Mandap</h3>
                    <p style={{ color: 'var(--rose)', margin: '5px 0 0 0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Luxury Wedding</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '100%', gridRow: 'span 2', cursor: 'pointer' }} className="portfolio-gallery-item">
                <img src="/images/corporate/7275c62519f387d8b04aa08cd435b1c8.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="gallery-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'flex-end', padding: '20px' }} className="gallery-overlay">
                  <div>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '1.3rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>B2B Tech Summit</h3>
                    <p style={{ color: 'var(--rose)', margin: '5px 0 0 0', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Corporate</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 3 */}
            <ScrollReveal>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '100%', cursor: 'pointer' }} className="portfolio-gallery-item">
                <img src="/images/weddings/1b9aab1a6de5fe16d3c11daea7bc7e3e.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="gallery-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'flex-end', padding: '20px' }} className="gallery-overlay">
                  <div>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '1.3rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Lakeside Sangeet</h3>
                    <p style={{ color: 'var(--rose)', margin: '5px 0 0 0', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Private Event</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 4 */}
            <ScrollReveal>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '100%', gridColumn: 'span 2', cursor: 'pointer' }} className="portfolio-gallery-item">
                <img src="/images/corporate/0d43104de7bcd575d7c468c563ec6253.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="gallery-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'flex-end', padding: '20px' }} className="gallery-overlay">
                  <div>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>FujiFilm Brand Expo</h3>
                    <p style={{ color: 'var(--rose)', margin: '5px 0 0 0', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Activation</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .portfolio-gallery-item:hover .gallery-img { transform: scale(1.05); }
            .portfolio-gallery-item:hover .gallery-overlay { opacity: 1 !important; }
            @media(max-width: 768px){
                .portfolio-gallery-item { grid-column: span 1 !important; grid-row: span 1 !important; height: 300px !important; }
            }
          `}} />"""
content = content.replace(old_grid, new_grid)

# 3. Enhance Reels section
old_reels = """<div className="reels-grid">
            <ScrollReveal animation="reveal-scale">
              <div className="reel-card">
                <div className="reel-video placeholder-dark">- </div>
                <p>12-Hour Overnight Mandap Build (Time-Lapse)</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-scale">
              <div className="reel-card">
                <div className="reel-video placeholder-dark">- </div>
                <p>The Floral Ceiling Rigging</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-scale">
              <div className="reel-card">
                <div className="reel-video placeholder-dark">- </div>
                <p>Cinematic Bridal Entry</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-scale">
              <div className="reel-card">
                <div className="reel-video placeholder-dark">- </div>
                <p>Expo Registration & VIP Lounge Flow</p>
              </div>
            </ScrollReveal>
          </div>"""

new_reels = """<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <ScrollReveal animation="reveal-scale">
              <div style={{ textAlign: 'center', cursor: 'pointer' }} className="reel-hover">
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '400px', marginBottom: '15px', boxShadow: 'var(--shadow-card)' }}>
                  <img src="/images/weddings/24b5efff1c8e03140bb67798dba5bceb.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', border: '2px solid white' }}>?</div>
                  </div>
                </div>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-dark)' }}>Overnight Mandap Build</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="reveal-scale">
              <div style={{ textAlign: 'center', cursor: 'pointer' }} className="reel-hover">
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '400px', marginBottom: '15px', boxShadow: 'var(--shadow-card)' }}>
                  <img src="/images/corporate/1090deba6950722c605fd3d26ea9fc4c.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', border: '2px solid white' }}>?</div>
                  </div>
                </div>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-dark)' }}>Tech Summit Registration</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="reveal-scale">
              <div style={{ textAlign: 'center', cursor: 'pointer' }} className="reel-hover">
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '400px', marginBottom: '15px', boxShadow: 'var(--shadow-card)' }}>
                  <img src="/images/weddings/2744a951066cc81bccb451113b6f27da.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', border: '2px solid white' }}>?</div>
                  </div>
                </div>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-dark)' }}>Cinematic Bridal Entry</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="reveal-scale">
              <div style={{ textAlign: 'center', cursor: 'pointer' }} className="reel-hover">
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '400px', marginBottom: '15px', boxShadow: 'var(--shadow-card)' }}>
                  <img src="/images/corporate/1d6bc30b89db004a40e889de31d045b9.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', border: '2px solid white' }}>?</div>
                  </div>
                </div>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-dark)' }}>Floral Rigging Logistics</p>
              </div>
            </ScrollReveal>
            
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
             .reel-hover:hover img { transform: scale(1.05); }
             .reel-hover img { transition: transform 0.5s ease; }
          `}} />"""
content = content.replace(old_reels, new_reels)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Portfolio page completely overhauled.")
