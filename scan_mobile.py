import os
import re

src_dir = r'C:\storyline website\frontend\src'
files_to_check = []

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.css'):
            files_to_check.append(os.path.join(root, file))

issues = []

# Regex to find hardcoded pixel widths/heights/font-sizes > 50px that might break mobile
pixel_regex = re.compile(r'((?:width|height|maxWidth|maxHeight|fontSize|minHeight|minWidth)\s*:\s*[\'"]?(\d{3,}px|\d+\.\d+rem|\d+vw)[\'"]?)')

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for i, line in enumerate(content.splitlines()):
        matches = pixel_regex.findall(line)
        if matches:
            for match in matches:
                # ignore small values, mainly look for >= 300px or huge rem
                val_str = match[1]
                if 'px' in val_str:
                    val = int(val_str.replace('px', ''))
                    if val > 300:
                        issues.append(f"{os.path.basename(filepath)}:{i+1} -> {match[0]}")
                elif 'rem' in val_str:
                    val = float(val_str.replace('rem', ''))
                    if val > 3:
                        issues.append(f"{os.path.basename(filepath)}:{i+1} -> {match[0]}")

print("Potential hardcoded layout issues found:")
for issue in issues[:30]:
    print(issue)
if len(issues) > 30:
    print(f"... and {len(issues) - 30} more.")

