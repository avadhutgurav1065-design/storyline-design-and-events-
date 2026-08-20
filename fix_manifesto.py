import os
import re

filepath = r'C:\storyline website\frontend\src\pages\About.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_manifesto = """{/* ===== SECTION 1: THE EDITORIAL MANIFESTO ===== */}
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
              <h1 className="mega-heading" style={{ color: 'var(--white)', textShadow: '0 4px 20px rgba(0,0,0,0.8)', marginBottom: 'var(--space-lg)' }}>
                We Build the Structure.<br/><span className="accent" style={{ color: 'var(--rose-deeper)' }}>You Live the Story.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal>
              <p style={{ fontSize: '1.4rem', color: '#f0f0f0', lineHeight: '1.8', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                Storyline Design & Events is Pune's premier event styling and production house. Rebuilt from the ground up as a house of craftsmanship, we bridge the gap between heavy structural engineering and bespoke aesthetic design.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== NEW SECTION: THE GENESIS (COMPANY PROFILE) ===== */}"""

content = re.sub(
    r'\{\/\* ===== SECTION 1: THE EDITORIAL MANIFESTO ===== \*\/\}.*?\{\/\* ===== NEW SECTION: THE GENESIS \(COMPANY PROFILE\) ===== \*\/\}',
    new_manifesto,
    content,
    flags=re.DOTALL
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Manifesto section overhauled.")
