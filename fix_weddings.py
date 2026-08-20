import os
import re

filepath = r'C:\storyline website\frontend\src\pages\Weddings.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Services Tab removal -> List expansion
tabs_regex = r'\{\/\* Dynamic Tab Buttons \*\/\}.*?<\/AnimatePresence>\s*<\/div>'
replacement_services = """{/* All Services Displayed Sequentially */}
          <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
            {engineData.map((service, index) => (
              <ScrollReveal key={index} animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}>
                <div className="service-row" style={{ 
                  background: 'var(--white)', 
                  padding: 'var(--space-2xl)', 
                  borderRadius: '24px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-xl)'
                }}>
                  <div className="service-row-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <div style={{ fontSize: '3rem', color: 'var(--rose-deeper)' }}>{service.icon}</div>
                    <div>
                      <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{service.title}</h2>
                      <span className="label" style={{ opacity: 0.8 }}>{service.domain}</span>
                    </div>
                  </div>
                  <p className="panel-desc" style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text-dark)' }}>{service.description}</p>
                  <div className="panel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="panel-detail-item">
                        <h4 style={{ color: 'var(--rose-deeper)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{detail.label}</h4>
                        <p style={{ color: 'var(--text-muted)' }}>{detail.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>"""
content = re.sub(tabs_regex, replacement_services, content, flags=re.DOTALL)


# 2. Gallery images
gallery_regex = r'const galleryImages = \[.*?\];'
replacement_gallery = """const galleryImages = [
    { src: '/images/weddings/0578776d7acbf027e19a6892aca759e3.jpg', name: 'Elegant Floral Archway', category: 'Entrance' },
    { src: '/images/weddings/0f51575b0db9a3efb67c33817a31212e.jpg', name: 'Grand Mandap Setup', category: 'Mandap' },
    { src: '/images/weddings/1b9aab1a6de5fe16d3c11daea7bc7e3e.jpg', name: 'Luxury Table Setting', category: 'Decor' },
    { src: '/images/weddings/24b5efff1c8e03140bb67798dba5bceb.jpg', name: 'Vibrant Sangeet Stage', category: 'Stage' },
    { src: '/images/weddings/2744a951066cc81bccb451113b6f27da.jpg', name: 'Romantic Evening Reception', category: 'Lighting' },
  ];"""
content = re.sub(gallery_regex, replacement_gallery, content, flags=re.DOTALL)


# 3. Remove brochure CTA
brochure_regex = r'<div className="brochure-cta" style=\{\{.*?<\/div>'
content = re.sub(brochure_regex, '', content, flags=re.DOTALL)


# 4. Modify The Edge Section Heading
edge_regex = r'<SectionHeading\s*label="The Edge"\s*title="Why Trust Storyline\?"\s*\/>'
replacement_edge = """<div className="light-heading">
            <SectionHeading label="The Edge" title="Why Trust Storyline?" />
          </div>
          <style>{`.light-heading h2, .light-heading .label, .light-heading p { color: var(--white) !important; }`}</style>"""
content = re.sub(edge_regex, replacement_edge, content, flags=re.DOTALL)


# 5. Remove 'AnimatePresence' from framer-motion import since it's unused now
content = content.replace("AnimatePresence", "")
# Fix the import line which might look like: import { motion, useScroll, useTransform,  } from 'framer-motion';
content = content.replace(",  } from 'framer-motion'", " } from 'framer-motion'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Modifications applied successfully.")
