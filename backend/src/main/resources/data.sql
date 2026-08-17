-- ============================================
-- Storyline Design & Events — Seed Data
-- ============================================

-- Service Offerings (20 departments from the business plan)
INSERT INTO service_offerings (id, name, category, description, icon, display_order, is_active) VALUES
(1, 'Core Event Management', 'CORE', 'Overall event direction, operations, planning & coordination, command centre, timeline management, vendor and client coordination.', 'command', 1, true),
(2, 'Guest & VIP Management', 'CORE', 'RSVP & registration, guest management, VIP/VVIP protocol, hospitality, airport reception, accommodation, transportation, luggage management.', 'users', 2, true),
(3, 'Artist & Talent Management', 'CORE', 'Artist booking & contracts, hospitality, transportation, accommodation, green room, rider management, celebrity & influencer coordination.', 'star', 3, true),
(4, 'Food & Beverage', 'CORE', 'F&B management, catering, guest and artist meals, VIP dining, beverage management, service staff, food hygiene & quality control.', 'utensils', 4, true),
(5, 'Production & Technical', 'CORPORATE', 'Stage management & setup, sound/audio, lighting, LED screens, trussing & rigging, power/generator, AV support, backstage, show calling, technical rehearsals.', 'settings', 5, true),
(6, 'Logistics', 'CORE', 'Material transportation, loading & unloading, vehicle management, equipment movement, warehouse & storage, inventory, vendor & artist logistics.', 'truck', 6, true),
(7, 'Creative & Design', 'DESIGN_STUDIO', 'Graphic design, branding & visual identity, stage design, venue branding, invitation design, signage & wayfinding, social media creatives, printing & production.', 'palette', 7, true),
(8, 'Décor & Venue', 'WEDDING', 'Venue management, décor, floral & props, furniture, entrance & registration area, table setup, lounge/VIP area, green room, theming & styling.', 'flower', 8, true),
(9, 'Rituals & Protocol', 'WEDDING', 'Traditional ceremony coordination, religious & cultural requirements, ritual materials, priest coordination, VIP protocol, ceremony scheduling.', 'scroll', 9, true),
(10, 'Hampers & Gifting', 'WEDDING', 'Gift procurement & packaging, welcome kits, guest hampers, artist gifts, VIP gifts, distribution management.', 'gift', 10, true),
(11, 'Security & Safety', 'CORE', 'Crowd management, VIP security, entry/exit control, access pass management, fire safety, emergency response, medical/first aid, evacuation planning.', 'shield', 11, true),
(12, 'Hospitality & Backstage', 'CORE', 'Hospitality desk, backstage & green room management, artist requirements, crew hospitality, volunteer management, staff coordination.', 'coffee', 12, true),
(13, 'Registration & Accreditation', 'CORPORATE', 'Registration, RSVP, guest database, QR/digital check-in, ID/badge printing, access passes, accreditation, attendance tracking.', 'clipboard', 13, true),
(14, 'Marketing & Communication', 'CORE', 'Social media, PR & media relations, photography, videography, influencer management, press/media desk, live updates, content creation.', 'megaphone', 14, true),
(15, 'Finance & Procurement', 'CORE', 'Budget management, accounts, vendor payments, purchase/procurement, quotations & negotiation, contracts, expense tracking.', 'calculator', 15, true),
(16, 'Sponsorship & Partnerships', 'CORPORATE', 'Sponsorship acquisition & management, brand deliverables, partner coordination, sponsor branding & hospitality.', 'handshake', 16, true),
(17, 'Volunteers & Manpower', 'CORE', 'Staff allocation, duty roster, shift management, training & briefing, attendance, uniform/ID distribution.', 'users-cog', 17, true),
(18, 'Documentation & Compliance', 'CORE', 'Contracts & agreements, permissions, licenses, insurance, vendor documentation, government coordination, event documentation.', 'file-text', 18, true),
(19, 'Photography & Media', 'CORE', 'Event photography, videography, live streaming, reels/short-form content, event aftermovie, media coordination.', 'camera', 19, true),
(20, 'Post-Event', 'CORE', 'Event closure, vendor settlement, material return, inventory reconciliation, guest/client feedback, event report, financial closing.', 'check-circle', 20, true)
ON CONFLICT (id) DO NOTHING;

-- Portfolio / Case Studies
INSERT INTO portfolio (id, title, description, category, image_url, stats, client_name, location, event_date, is_featured, display_order) VALUES
(1, 'The Grand Ceiling', 'A breathtaking floral ceiling installation spanning the entire reception hall — 2,000+ custom floral stems suspended from engineered rigging, creating an immersive botanical canopy that transformed the venue into a living garden.', 'WEDDING', '/images/portfolio/grand-ceiling.jpg', '2000+ Custom Floral Stems | Engineered Suspension Rigging | 12-Hour Overnight Setup | 40-Person Crew', 'The Sharma Family', 'Pune, Maharashtra', '2026-01-01', true, 1),
(2, 'The Corporate Stage', 'A flagship corporate product launch requiring precision staging for 500+ attendees — custom LED backdrop integration, architectural stage design, and full AV production delivered on a 24-hour turnaround.', 'CORPORATE', '/images/portfolio/corporate-stage.jpg', 'Custom LED Backdrop | 500+ Attendee Staging | Precision Lighting | 24-Hour Build Turnaround', 'Tech Corp India', 'Pune, Maharashtra', '2026-03-01', true, 2),
(3, 'The Royal Mandap', 'A bespoke multi-tiered mandap structure combining traditional Maharashtrian design with contemporary architectural elements — hand-carved wooden accents, cascading floral pillars, and integrated atmospheric lighting.', 'WEDDING', '/images/portfolio/royal-mandap.jpg', 'Custom Woodwork | 8 Floral Pillars | Integrated Lighting | 3-Day Installation', 'The Patil Family', 'Lonavala, Maharashtra', '2025-12-01', true, 3),
(4, 'Leadership Summit 2026', 'A three-day corporate leadership summit with full stage rigging, branded environments across four breakout rooms, sponsor activation zones, and real-time content production for social media distribution.', 'CORPORATE', '/images/portfolio/leadership-summit.jpg', '3-Day Multi-Stage Build | 4 Breakout Rooms | 800+ Attendees | Live Content Production', 'Enterprise Solutions Ltd', 'Pune, Maharashtra', '2026-02-01', true, 4),
(5, 'Botanical Reception', 'An outdoor reception transformed into an enchanted garden with custom iron archways, hanging floral installations, and ambient lighting design creating a seamless indoor-outdoor flow.', 'WEDDING', '/images/portfolio/botanical-reception.jpg', 'Custom Iron Archways | 1500+ Stem Count | Ambient Lighting | Indoor-Outdoor Flow', 'The Deshmukh Family', 'Pune, Maharashtra', '2026-01-15', false, 5),
(6, 'Brand Activation Suite', 'An immersive brand activation for a luxury automobile launch — custom-fabricated display structures, interactive LED walls, and experiential zones designed to showcase the vehicle in a curated environment.', 'CORPORATE', '/images/portfolio/brand-activation.jpg', 'Custom Fabrication | Interactive LED | 3 Experience Zones | 200+ VIP Guests', 'AutoLux India', 'Mumbai, Maharashtra', '2026-04-01', false, 6)
ON CONFLICT (id) DO NOTHING;

-- Testimonials
INSERT INTO testimonials (id, client_name, role, quote, rating, category, is_active, display_order) VALUES
(1, 'Priya & Rohit Sharma', 'Wedding Clients', 'Storyline did not just decorate our wedding — they engineered an experience. The floral ceiling was the single most photographed element across three days. Every guest asked who built it.', 5, 'WEDDING', true, 1),
(2, 'Anand Kulkarni', 'VP Events, Tech Corp India', 'We needed a 500-seat stage built overnight with zero room for error. Storyline delivered a flawless setup — rigging, LED integration, sound — all tested and ready by 6 AM. That is the standard we now hold every vendor to.', 5, 'CORPORATE', true, 2),
(3, 'Meera & Aditya Patil', 'Wedding Clients', 'Our mandap was a piece of architecture, not decoration. The woodwork, the floral pillars, the lighting — every detail was considered. We felt like we were getting married inside a work of art.', 5, 'WEDDING', true, 3),
(4, 'Sneha Joshi', 'Director, Enterprise Solutions Ltd', 'Three days, four stages, 800 attendees — and not a single technical hiccup. Storyline runs a command centre, not a decoration service. That distinction matters when your CEO is on stage.', 5, 'CORPORATE', true, 4),
(5, 'The Deshmukh Family', 'Wedding Clients', 'The transition from indoor ceremony to outdoor reception was seamless. Storyline thought about the guest journey in a way no other vendor we spoke to even mentioned.', 5, 'WEDDING', true, 5)
ON CONFLICT (id) DO NOTHING;

-- Team Members (from org structure)
INSERT INTO team_members (id, name, role, bio, display_order, is_active) VALUES
(1, 'Avadhut', 'Founder & Creative Director', 'Brand vision, key client relationships, and final design sign-off on every project. The creative force behind Storyline''s signature aesthetic — where structural precision meets organic artistry.', 1, true),
(2, 'Event Director', 'Operations Head', 'The command centre for every live event — overseeing core event management, timeline execution, and on-ground operations.', 2, true),
(3, 'Client Servicing Lead', 'Client & VIP Coordination', 'Client and guest communication, RSVP management, timelines, and VIP protocol — ensuring every touchpoint feels intentional.', 3, true),
(4, 'Production Head', 'Technical & Staging', 'Staging, rigging, sound, lighting, LED, and power — engineering-grade execution on every build.', 4, true),
(5, 'Design Studio Lead', 'Creative & Print', 'Décor, floral design, and all print/graphic design — visual consistency from the save-the-date to the Instagram recap.', 5, true),
(6, 'Vendor & Logistics Manager', 'Supply Chain', 'Vendor sourcing, transport, inventory, and warehousing — the operational backbone of every event.', 6, true)
ON CONFLICT (id) DO NOTHING;

-- Event Packages — Weddings
INSERT INTO event_packages (id, name, tier, scope, price_range, category, features, is_popular, display_order) VALUES
(1, 'Signature', 'SIGNATURE', 'Single-function décor + coordination (mandap or reception only)', '₹8 – 15 Lakh', 'WEDDING', 'Single venue styling,Floral design for one function,Basic lighting design,Day-of coordination,Vendor liaison for décor elements,Setup and teardown management', false, 1),
(2, 'Bespoke', 'BESPOKE', 'Full 2–3 function wedding — décor, floral, planning, guest management', '₹15 – 40 Lakh', 'WEDDING', 'Multi-function design (Mehendi/Sangeet/Wedding/Reception),Custom floral installations,Luxury drapery and styling,Full planning and coordination,Guest and VIP management,RSVP and registration,Vendor management,Design Studio collateral (invites/signage)', true, 2),
(3, 'Full-Scale Production', 'FULL_SCALE', 'Multi-day / destination-style wedding, custom structures, full logistics', '₹40 Lakh +', 'WEDDING', 'All Bespoke features included,Custom structural fabrication,Engineered installations (mandaps/ceilings),Full logistics and transportation,Accommodation management,Artist and entertainment management,Photography and videography coordination,Dedicated command centre,Post-event documentation', false, 3)
ON CONFLICT (id) DO NOTHING;

-- Event Packages — Corporate
INSERT INTO event_packages (id, name, tier, scope, price_range, category, features, is_popular, display_order) VALUES
(4, 'Essential', 'ESSENTIAL', 'Single-day activation or panel stage, up to 150 pax', '₹3 – 7 Lakh', 'CORPORATE', 'Single-day event setup,Stage and podium design,Basic sound and lighting,Branded backdrop,Registration setup,Day-of coordination', false, 4),
(5, 'Premium', 'PREMIUM', 'Conference/launch with custom staging, LED, branded environment', '₹7 – 20 Lakh', 'CORPORATE', 'Custom stage fabrication,LED screen integration,Full AV production,Branded environments,Sponsor deliverables,Registration and accreditation,Photography coverage,Crew and volunteer management', true, 5),
(6, 'Flagship', 'FLAGSHIP', 'Multi-day summit or 500+ pax build, full rigging & production', '₹20 Lakh +', 'CORPORATE', 'All Premium features included,Multi-day stage builds,Full trussing and rigging,Power and generator management,Multiple breakout rooms,Live streaming capability,Dedicated command centre,Security and safety management,Post-event reporting and analysis', false, 6)
ON CONFLICT (id) DO NOTHING;

-- Sync sequences for all tables using IDENTITY so that new inserts do not clash with hardcoded IDs
SELECT setval(pg_get_serial_sequence('service_offerings', 'id'), coalesce(max(id), 1), true) FROM service_offerings;
SELECT setval(pg_get_serial_sequence('portfolio', 'id'), coalesce(max(id), 1), true) FROM portfolio;
SELECT setval(pg_get_serial_sequence('testimonials', 'id'), coalesce(max(id), 1), true) FROM testimonials;
SELECT setval(pg_get_serial_sequence('team_members', 'id'), coalesce(max(id), 1), true) FROM team_members;
SELECT setval(pg_get_serial_sequence('event_packages', 'id'), coalesce(max(id), 1), true) FROM event_packages;
