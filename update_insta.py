import os

files = [
    r'C:\storyline website\frontend\src\components\Footer.jsx',
    r'C:\storyline website\frontend\src\pages\Contact.jsx'
]

old_link_1 = "https://www.instagram.com/storyline_design_and_events/?hl=en"
old_link_2 = "https://www.instagram.com/storyline_design_and_events/"
new_link = "https://www.instagram.com/storyline_design_and_events?igsh=dnpjam9lemFlaG94"

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace(old_link_1, new_link)
    content = content.replace(old_link_2, new_link)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Instagram links updated successfully!")
