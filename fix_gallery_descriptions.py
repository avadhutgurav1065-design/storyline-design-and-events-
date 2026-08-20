import os
import re

filepath = r'C:\storyline website\frontend\src\pages\Weddings.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

gallery_regex = r'const galleryImages = \[.*?\];'
replacement_gallery = """const galleryImages = [
    { src: '/images/weddings/0578776d7acbf027e19a6892aca759e3.jpg', name: 'Haldi Welcome Signage', category: 'Signage' },
    { src: '/images/weddings/0f51575b0db9a3efb67c33817a31212e.jpg', name: 'Courtyard Seating Setup', category: 'Seating' },
    { src: '/images/weddings/1b9aab1a6de5fe16d3c11daea7bc7e3e.jpg', name: 'Grand Marigold Canopy', category: 'Mandap' },
    { src: '/images/weddings/24b5efff1c8e03140bb67798dba5bceb.jpg', name: 'The Botanical Walkway', category: 'Entrance' },
    { src: '/images/weddings/2744a951066cc81bccb451113b6f27da.jpg', name: 'Sunflower Welcome Mirror', category: 'Decor' },
  ];"""

content = re.sub(gallery_regex, replacement_gallery, content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Gallery descriptions updated.")
