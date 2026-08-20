import os
import re

filepath = r'C:\storyline website\frontend\src\pages\DesignStudio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_section_2 = """{/* ===== SECTION 2: 3D RENDERING ===== */}
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ position: 'relative' }}>
                      <img src="/images/studio/3d-render.jpg" alt="3D Digital Render" style={{ width: '100%', borderRadius: '12px', display: 'block', border: '2px solid var(--rose-deeper)' }} />
                      <div style={{ position: 'absolute', bottom: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', letterSpacing: '0.05em' }}>DIGITAL 3D RENDER</div>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <img src="/images/studio/physical-build.jpg" alt="Physical Build" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
                      <div style={{ position: 'absolute', bottom: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', letterSpacing: '0.05em' }}>PHYSICAL BUILD</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>"""

new_section_2 = """{/* ===== SECTION 2: 3D RENDERING ===== */}
      <section className="section" style={{ background: 'var(--cream)', overflow: 'hidden' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--space-3xl)' }}>
            <ScrollReveal animation="reveal-scale">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '1rem' }}>
                <FaCubes style={{ fontSize: '2rem', color: 'var(--rose-deeper)' }} />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--rose-deeper)' }}>The Blueprint</span>
              </div>
              <h2 className="mega-heading" style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-md)' }}>See It Before We Build It.</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: 'var(--space-md)' }}>
                We eliminate all guesswork and financial risk. For luxury weddings, corporate builds, and B2B partners, our design studio renders your exact venue in 3D space. 
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.7', paddingLeft: '1rem', borderLeft: '3px solid var(--rose-deeper)', display: 'inline-block', textAlign: 'left' }}>
                Walk through the digital blueprint, approve the structural layout, and sign off on the exact aesthetic before a single piece of iron is loaded onto our trucks.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="reveal-scale">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
              gap: '20px',
              background: 'var(--white)', 
              padding: '15px', 
              borderRadius: '24px', 
              boxShadow: 'var(--shadow-elevated)'
            }}>
              <div style={{ position: 'relative' }}>
                <img src="/images/studio/3d-render.jpg" alt="3D Digital Render" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', border: '3px solid var(--rose-deeper)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '8px 16px', borderRadius: '30px', fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 'bold' }}>DIGITAL 3D RENDER</div>
              </div>
              <div style={{ position: 'relative' }}>
                <img src="/images/studio/physical-build.jpg" alt="Physical Build" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '8px 16px', borderRadius: '30px', fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 'bold' }}>PHYSICAL BUILD</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>"""

content = content.replace(old_section_2, new_section_2)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Layout fixed.")
