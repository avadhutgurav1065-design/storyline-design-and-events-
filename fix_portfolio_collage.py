import os
import re

filepath = r'C:\storyline website\frontend\src\pages\Portfolio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

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
                <div className="placeholder-image corporate-bg">
                  <span className="project-label">Tech Summit Mainstage</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid-item square">
                <div className="placeholder-image print-bg">
                  <span className="project-label">Foil Stationery Detail</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid-item landscape span-2">
                <div className="placeholder-image social-bg">
                  <span className="project-label">Sangeet Night Architecture</span>
                </div>
              </div>
            </ScrollReveal>
          </div>"""

new_grid = """{/* Asymmetric Image Grid */}
          <div className="custom-asymmetric-collage">
            
            {/* Item 1: Large Wide */}
            <ScrollReveal animation="reveal-scale">
              <div className="collage-item collage-wide">
                <img src="/images/weddings/0578776d7acbf027e19a6892aca759e3.jpg" alt="Portfolio" />
                <div className="collage-caption">The Royal Botanical Mandap</div>
              </div>
            </ScrollReveal>

            {/* Item 2: Tall Portrait */}
            <ScrollReveal animation="reveal-scale">
              <div className="collage-item collage-tall" style={{ marginTop: '40px' }}>
                <img src="/images/corporate/7275c62519f387d8b04aa08cd435b1c8.jpg" alt="Portfolio" />
                <div className="collage-caption">Tech Summit Mainstage</div>
              </div>
            </ScrollReveal>

            {/* Item 3: Square Small */}
            <ScrollReveal animation="reveal-scale">
              <div className="collage-item collage-square" style={{ marginTop: '-40px' }}>
                <img src="/images/weddings/bf3f2fd306de8de31850e0b095052a9d.jpg" alt="Portfolio" />
                <div className="collage-caption">Bespoke Floral Details</div>
              </div>
            </ScrollReveal>

            {/* Item 4: Large Wide */}
            <ScrollReveal animation="reveal-scale">
              <div className="collage-item collage-wide">
                <img src="/images/corporate/0d43104de7bcd575d7c468c563ec6253.jpg" alt="Portfolio" />
                <div className="collage-caption">FujiFilm Brand Activation</div>
              </div>
            </ScrollReveal>
            
            {/* Item 5: Square Small */}
            <ScrollReveal animation="reveal-scale">
              <div className="collage-item collage-square" style={{ marginTop: '30px' }}>
                <img src="/images/corporate/1090deba6950722c605fd3d26ea9fc4c.jpg" alt="Portfolio" />
                <div className="collage-caption">LED Stage Architecture</div>
              </div>
            </ScrollReveal>
            
            {/* Item 6: Tall Portrait */}
            <ScrollReveal animation="reveal-scale">
              <div className="collage-item collage-tall" style={{ marginTop: '-60px' }}>
                <img src="/images/weddings/b27628551f2d62c6051086e70a26b23d.jpg" alt="Portfolio" />
                <div className="collage-caption">Sangeet Night Canopy</div>
              </div>
            </ScrollReveal>

          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .custom-asymmetric-collage {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                grid-auto-rows: 250px;
                gap: 20px;
                margin-top: var(--space-3xl);
                padding: 0 10px;
            }
            .collage-item {
                position: relative;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                cursor: pointer;
            }
            .collage-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
            }
            .collage-item:hover img {
                transform: scale(1.05);
            }
            .collage-caption {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 20px;
                background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                color: white;
                font-family: var(--font-display);
                font-size: 1.2rem;
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.3s ease;
                text-shadow: 0 2px 4px rgba(0,0,0,0.8);
            }
            .collage-item:hover .collage-caption {
                opacity: 1;
                transform: translateY(0);
            }
            
            .collage-wide {
                grid-column: span 2;
                grid-row: span 2;
            }
            .collage-tall {
                grid-row: span 3;
            }
            .collage-square {
                grid-row: span 2;
            }
            
            @media (max-width: 768px) {
                .custom-asymmetric-collage {
                    display: flex;
                    flex-direction: column;
                }
                .collage-item {
                    height: 300px !important;
                    margin-top: 0 !important;
                    margin-bottom: 20px;
                }
            }
          `}} />"""

content = content.replace(old_grid, new_grid)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Asymmetric collage updated.")
