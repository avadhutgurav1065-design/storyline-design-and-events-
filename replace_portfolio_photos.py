import os

filepath = r'C:\storyline website\frontend\src\pages\Portfolio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Hero Background
# Old: backgroundImage: "url('/images/weddings/bf3f2fd306de8de31850e0b095052a9d.jpg')",
content = content.replace(
    "backgroundImage: \"url('/images/weddings/bf3f2fd306de8de31850e0b095052a9d.jpg')\"",
    "backgroundImage: \"url('/images/weddings/b298984a872bb6d0de1a8c8b9b8f5661.jpg')\""
)

# Replace Reel 1
# Old: src="/images/weddings/24b5efff1c8e03140bb67798dba5bceb.jpg"
content = content.replace(
    "src=\"/images/weddings/24b5efff1c8e03140bb67798dba5bceb.jpg\"",
    "src=\"/images/corporate/c1a06f5c3eaf9218df24aa906fb70d88.jpg\""
)

# Replace Reel 2
# Old: src="/images/corporate/1090deba6950722c605fd3d26ea9fc4c.jpg"
content = content.replace(
    "src=\"/images/corporate/1090deba6950722c605fd3d26ea9fc4c.jpg\"",
    "src=\"/images/weddings/8b259ae4a9475382e0591f4b42a88dda.jpg\""
)

# Replace Reel 3
# Old: src="/images/weddings/2744a951066cc81bccb451113b6f27da.jpg"
content = content.replace(
    "src=\"/images/weddings/2744a951066cc81bccb451113b6f27da.jpg\"",
    "src=\"/images/weddings/60c5fcf0c9adfd30d972eb3a6e0b43fc.jpg\""
)

# Replace Reel 4
# Old: src="/images/corporate/1d6bc30b89db004a40e889de31d045b9.jpg"
content = content.replace(
    "src=\"/images/corporate/1d6bc30b89db004a40e889de31d045b9.jpg\"",
    "src=\"/images/weddings/dafab3d9cfc08a1fe1dbfc4ed357a9f0.jpg\""
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Non-gallery photos updated to the highest quality assets.")
