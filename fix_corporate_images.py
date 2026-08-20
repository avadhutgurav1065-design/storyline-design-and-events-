import os
import re

filepath = r'C:\storyline website\frontend\src\pages\Corporate.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Update Case Studies with the new corporate images
case_studies_regex = r'const caseStudies = \[.*?\];'
replacement_case_studies = """const caseStudies = [
      {
        src: '/images/corporate/0d43104de7bcd575d7c468c563ec6253.jpg',
        tags: 'Brand Installation, Grand Entrance, Custom Arches',
        title: 'Avadh Utopia Celebration'
      },
      {
        src: '/images/corporate/1d6bc30b89db004a40e889de31d045b9.jpg',
        tags: 'Gala Setup, A/V Projection, Banquet Layout',
        title: 'World of Children Gala'
      },
      {
        src: '/images/corporate/5c4de1cf0d30d1174a9d1f8d0630ef58.jpg',
        tags: 'LED Wall Production, Lighting Design, Stage Fabrication',
        title: 'Stellar Tech Gala'
      }
    ];"""

content = re.sub(case_studies_regex, replacement_case_studies, content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Corporate case studies updated with new images.")
