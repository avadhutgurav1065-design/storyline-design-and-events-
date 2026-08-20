import os
import re

filepath = r'C:\storyline website\frontend\src\pages\DesignStudio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Hero Image
content = content.replace(
    'url("/images/portfolio/512314d3077a801ae45d506c9de6f114.jpg")',
    'url("/images/studio/29b953f956be7594c7acd4e5379326bc.jpg")'
)

# 2. Update 3D Render Section to show both 3d-render.jpg and physical-build.jpg
old_render_html = """<img src="/images/portfolio/7275c62519f387d8b04aa08cd435b1c8.jpg" alt="3D Render vs Reality" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '20px', 
                    left: '20px', 
                    background: 'rgba(0,0,0,0.7)', 
                    color: 'white', 
                    padding: '8px 16px', 
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em'
                  }}>
                    PHYSICAL BUILD
                  </div>"""

new_render_html = """<div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ position: 'relative' }}>
                      <img src="/images/studio/3d-render.jpg" alt="3D Digital Render" style={{ width: '100%', borderRadius: '12px', display: 'block', border: '2px solid var(--rose-deeper)' }} />
                      <div style={{ position: 'absolute', bottom: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', letterSpacing: '0.05em' }}>DIGITAL 3D RENDER</div>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <img src="/images/studio/physical-build.jpg" alt="Physical Build" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
                      <div style={{ position: 'absolute', bottom: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', letterSpacing: '0.05em' }}>PHYSICAL BUILD</div>
                    </div>
                  </div>"""

content = content.replace(old_render_html, new_render_html)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Studio images updated.")
