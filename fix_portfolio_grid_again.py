import os
import re

filepath = r'C:\storyline website\frontend\src\pages\Portfolio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_collage = """{/* Asymmetric Image Grid */}
          <div className="custom-asymmetric-collage">
            
            {/* Item 1: Large Wide (span 2 cols, 2 rows) */}
            <div className="collage-item" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
              <img src="/images/weddings/0578776d7acbf027e19a6892aca759e3.jpg" alt="Portfolio" />
              <div className="collage-caption">Luxury Mandap Design</div>
            </div>

            {/* Item 2: Small Square (span 1 col, 1 row) */}
            <div className="collage-item">
              <img src="/images/corporate/7275c62519f387d8b04aa08cd435b1c8.jpg" alt="Portfolio" />
              <div className="collage-caption">Event Production</div>
            </div>

            {/* Item 3: Tall Portrait (span 1 col, 2 rows) */}
            <div className="collage-item" style={{ gridRow: 'span 2' }}>
              <img src="/images/weddings/bf3f2fd306de8de31850e0b095052a9d.jpg" alt="Portfolio" />
              <div className="collage-caption">Floral Architecture</div>
            </div>

            {/* Item 4: Small Square (span 1 col, 1 row) */}
            <div className="collage-item">
              <img src="/images/corporate/1090deba6950722c605fd3d26ea9fc4c.jpg" alt="Portfolio" />
              <div className="collage-caption">Stage Lighting</div>
            </div>
            
            {/* Item 5: Large Wide (span 2 cols, 2 rows) */}
            <div className="collage-item" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
              <img src="/images/corporate/0d43104de7bcd575d7c468c563ec6253.jpg" alt="Portfolio" />
              <div className="collage-caption">Corporate Summit Setup</div>
            </div>
            
            {/* Item 6: Small Square (span 1 col, 1 row) */}
            <div className="collage-item">
              <img src="/images/weddings/b27628551f2d62c6051086e70a26b23d.jpg" alt="Portfolio" />
              <div className="collage-caption">Bespoke Event Styling</div>
            </div>

            {/* Item 7: Small Square (span 1 col, 1 row) */}
            <div className="collage-item">
              <img src="/images/corporate/1d6bc30b89db004a40e889de31d045b9.jpg" alt="Portfolio" />
              <div className="collage-caption">Venue Transformation</div>
            </div>

          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .custom-asymmetric-collage {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-auto-rows: 250px;
                gap: 15px;
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
                font-size: 1.1rem;
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.3s ease;
                text-shadow: 0 2px 4px rgba(0,0,0,0.8);
            }
            .collage-item:hover .collage-caption {
                opacity: 1;
                transform: translateY(0);
            }
            
            @media (max-width: 900px) {
                .custom-asymmetric-collage {
                    display: flex;
                    flex-direction: column;
                }
                .collage-item {
                    height: 300px !important;
                    margin-bottom: 15px;
                }
            }
          `}} />"""

content = re.sub(r'\{\/\* Asymmetric Image Grid \*\/\}.*?<\/style>\s*\}\}\s*\/>', new_collage, content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Collage hierarchy fixed.")
