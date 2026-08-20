import os

filepath = r'C:\storyline website\frontend\src\pages\DesignStudio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

collage_section = """{/* ===== SECTION 4.5: ASYMMETRIC COLLAGE ===== */}
      <section className="section" style={{ background: 'var(--white)', paddingBottom: 'var(--space-3xl)' }}>
        <div className="container-wide">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <ScrollReveal>
              <h2 className="mega-heading" style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-sm)' }}>Studio Archive.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>A glimpse into our physical and digital creations.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="reveal-scale">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridAutoRows: '250px',
              gap: '15px'
            }}>
              {/* Large item (span 2 cols, 2 rows) */}
              <div style={{ gridColumn: 'span 2', gridRow: 'span 2', overflow: 'hidden', borderRadius: '16px' }}>
                  <img src="/images/studio/2e0274cc31aed3d4dc8a382ef2781e9e.jpg" alt="Studio Flatlay" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              {/* Small item */}
              <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
                  <img src="/images/studio/44a96405885b62322f5cb5b9f436b6d7.jpg" alt="Studio Details" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              {/* Tall item (span 2 rows) */}
              <div style={{ gridRow: 'span 2', overflow: 'hidden', borderRadius: '16px' }}>
                  <img src="/images/studio/44c98e1915e07e3ef6386b2389acbcf8.jpg" alt="Studio Signage" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              {/* Small item */}
              <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
                  <img src="/images/studio/4961615bc0531e5c17959352a93f8819.jpg" alt="Studio Setup" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              {/* Wide item (span 2 cols) */}
              <div style={{ gridColumn: 'span 2', overflow: 'hidden', borderRadius: '16px' }}>
                  <img src="/images/studio/4a4152194a213190089f335dbce00bb5.jpg" alt="Studio Graphic" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              {/* Small item */}
              <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
                  <img src="/images/studio/54c4d95f59dce49d5883304320f08840.jpg" alt="Studio Creation" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              {/* Small item */}
              <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
                  <img src="/images/studio/3b4a4879e1f1acb984d21bec0bfffdf9.jpg" alt="Studio Creation" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
            </div>
            
            {/* Mobile-only note for grid responsiveness - Using a small media query in inline style isn't fully possible, but since the container is repeat(4, 1fr), it might squish on mobile. To make it responsive without CSS classes, I'll use a media query in CSS. Since I don't want to edit global CSS right now, let's keep it simple. Actually, grid-template-columns: 'repeat(auto-fit, minmax(250px, 1fr))' handles mobile better, but breaks the strict "masonry" 2-col/2-row spans unless we are careful. Let's use it but simplify the spans. */}
          </ScrollReveal>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .studio-collage {
              display: flex !important;
              flex-direction: column !important;
            }
          }
        `}} />
      </section>

      {/* ===== SECTION 5: THE STUDIO INTAKE ===== */}"""

content = content.replace("""{/* ===== SECTION 5: THE STUDIO INTAKE ===== */}""", collage_section)

# To ensure the mobile style applies correctly, let's add the class to the grid
content = content.replace(
    """<div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridAutoRows: '250px',
              gap: '15px'
            }}>""",
    """<div className="studio-collage" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridAutoRows: '250px',
              gap: '15px'
            }}>"""
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Collage added.")
