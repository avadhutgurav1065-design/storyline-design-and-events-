import os
import re

filepath = r'C:\storyline website\frontend\src\pages\DesignStudio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_grid = """<div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
              gap: '20px',
              background: 'var(--white)', 
              padding: '15px', 
              borderRadius: '24px', 
              boxShadow: 'var(--shadow-elevated)'
            }}>"""

new_grid = """<div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '20px',
              background: 'var(--white)', 
              padding: '15px', 
              borderRadius: '24px', 
              boxShadow: 'var(--shadow-elevated)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>"""

content = content.replace(old_grid, new_grid)

# Also let's set a max height on the images so they don't blow up too tall
old_img_1 = """<img src="/images/studio/3d-render.jpg" alt="3D Digital Render" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', border: '3px solid var(--rose-deeper)' }} />"""
new_img_1 = """<img src="/images/studio/3d-render.jpg" alt="3D Digital Render" style={{ width: '100%', height: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '16px', border: '3px solid var(--rose-deeper)' }} />"""

old_img_2 = """<img src="/images/studio/physical-build.jpg" alt="Physical Build" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />"""
new_img_2 = """<img src="/images/studio/physical-build.jpg" alt="Physical Build" style={{ width: '100%', height: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '16px' }} />"""

content = content.replace(old_img_1, new_img_1)
content = content.replace(old_img_2, new_img_2)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Photo size fixed.")
