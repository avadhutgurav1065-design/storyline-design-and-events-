import os
import re

filepath = r'C:\storyline website\frontend\src\pages\Portfolio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

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

print("Reels updated.")
