import os
import re

filepath = r'C:\storyline website\frontend\src\styles\pages.css'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace slider images (.physical-build and .digital-render)
content = re.sub(
    r'\.physical-build\s*\{\s*background-image:\s*url\([^)]+\);\s*\}',
    r'.physical-build { background-image: url(\'/images/weddings/c40adfc1cc37422c20ca275f585ed184.jpg\'); }',
    content
)
content = re.sub(
    r'\.digital-render\s*\{\s*background-image:\s*url\([^)]+\);(.*?) \}',
    r'.digital-render { background-image: url(\'/images/weddings/c40adfc1cc37422c20ca275f585ed184.jpg\');\1 }',
    content
)

# Replace .bg-mandap
content = re.sub(
    r'\.bg-mandap\s*\{\s*background-image:\s*url\([^)]+\);\s*\}',
    r'.bg-mandap { background-image: url(\'/images/weddings/58003c63304370c1aa6195a216344cd9.jpg\'); }',
    content
)

# Replace .bg-tech
content = re.sub(
    r'\.bg-tech\s*\{\s*background-image:\s*url\([^)]+\);\s*\}',
    r'.bg-tech { background-image: url(\'/images/corporate/7275c62519f387d8b04aa08cd435b1c8.jpg\'); }',
    content
)

# Replace .bg-reveal
content = re.sub(
    r'\.bg-reveal\s*\{\s*background-image:\s*url\([^)]+\);\s*\}',
    r'.bg-reveal { background-image: url(\'/images/corporate/0d43104de7bcd575d7c468c563ec6253.jpg\'); }',
    content
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS portfolio background images updated.")
