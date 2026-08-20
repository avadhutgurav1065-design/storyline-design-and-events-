import os

filepath = r'C:\storyline website\frontend\src\pages\Portfolio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{/* Asymmetric Image Grid */}"
end_marker = "{/* ===== SECTION 3: RENDER TO REALITY (Slider) ===== */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find markers!")
    print(f"Start: {start_idx}, End: {end_idx}")
else:
    new_collage = """{/* Asymmetric Image Grid */}
          <div className="custom-asymmetric-collage">
            
            {/* Item 1: Large Wide */}
            <div className="collage-item" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
              <img src="/images/weddings/0578776d7acbf027e19a6892aca759e3.jpg" alt="Haldi Welcome Sign" />
              <div className="collage-caption">Haldi Welcome Sign</div>
            </div>

            {/* Item 2: Square */}
            <div className="collage-item">
              <img src="/images/corporate/7275c62519f387d8b04aa08cd435b1c8.jpg" alt="Corporate Stage" />
              <div className="collage-caption">Corporate Stage setup</div>
            </div>

            {/* Item 3: Tall Portrait */}
            <div className="collage-item" style={{ gridRow: 'span 2' }}>
              <img src="/images/weddings/bf3f2fd306de8de31850e0b095052a9d.jpg" alt="Floral Entrance Arch" />
              <div className="collage-caption">Floral Entrance Arch</div>
            </div>

            {/* Item 4: Square */}
            <div className="collage-item">
              <img src="/images/weddings/b27628551f2d62c6051086e70a26b23d.jpg" alt="Outdoor Lounge Seating" />
              <div className="collage-caption">Outdoor Lounge Seating</div>
            </div>
            
            {/* Item 5: Large Wide */}
            <div className="collage-item" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
              <img src="/images/corporate/0d43104de7bcd575d7c468c563ec6253.jpg" alt="LED Welcome Board" />
              <div className="collage-caption">Modern White Welcome Board</div>
            </div>
            
            {/* Item 6: Tall Portrait */}
            <div className="collage-item" style={{ gridRow: 'span 2' }}>
              <img src="/images/corporate/1090deba6950722c605fd3d26ea9fc4c.jpg" alt="Stage Setup" />
              <div className="collage-caption">Orange Entrance Arch</div>
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
          `}} />
        </div>
      </section>

      """
    
    new_content = content[:start_idx] + new_collage + content[end_idx:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Collage fixed perfectly by index.")
