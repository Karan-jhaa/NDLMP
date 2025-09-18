-- Insert sample alerts
INSERT INTO public.alerts (region, title, description, severity, start_time, end_time, source) VALUES
('Mumbai', 'Heavy Rainfall Alert', 'Heavy to very heavy rainfall expected in Mumbai and surrounding areas', 'high', now(), now() + interval '24 hours', 'IMD'),
('Delhi', 'Air Quality Warning', 'Air quality index reaching hazardous levels', 'medium', now(), now() + interval '48 hours', 'CPCB'),
('Chennai', 'Cyclone Watch', 'Cyclone formation possible in Bay of Bengal', 'critical', now(), now() + interval '72 hours', 'IMD'),
('Kolkata', 'Flood Warning', 'River water levels rising due to continuous rainfall', 'high', now(), now() + interval '36 hours', 'CWC');

-- Insert sample education modules
INSERT INTO public.modules (slug, title, content) VALUES
('earthquake-safety', 'Earthquake Safety Basics', '{"lessons": [{"title": "Understanding Earthquakes", "content": "Learn about earthquake causes and effects"}, {"title": "Drop, Cover, Hold", "content": "Master the basic earthquake response technique"}], "quiz": [{"question": "What should you do first during an earthquake?", "options": ["Run outside", "Drop and take cover", "Stand in doorway"], "correct": 1}]}'),
('fire-safety', 'Fire Safety and Prevention', '{"lessons": [{"title": "Fire Prevention", "content": "Learn how to prevent fires at home and school"}, {"title": "Evacuation Procedures", "content": "Understand proper evacuation techniques"}], "quiz": [{"question": "How often should smoke detectors be tested?", "options": ["Monthly", "Yearly", "Never"], "correct": 0}]}'),
('flood-preparedness', 'Flood Preparedness', '{"lessons": [{"title": "Flood Risks", "content": "Understanding flood risks in your area"}, {"title": "Emergency Kit", "content": "Preparing a flood emergency kit"}], "quiz": [{"question": "What should be in a flood emergency kit?", "options": ["Food and water", "Important documents", "Both"], "correct": 2}]}');

-- Insert sample drills
INSERT INTO public.drills (title, scheduled_at) VALUES
('Monthly Fire Drill', now() + interval '7 days'),
('Earthquake Response Drill', now() + interval '14 days'),
('Flood Evacuation Drill', now() + interval '21 days');

-- Insert sample emergency contacts
INSERT INTO public.emergency_contacts (name, phone, region, contact_type) VALUES
('Fire Department', '101', 'Mumbai', 'emergency'),
('Police', '100', 'Mumbai', 'emergency'),
('Ambulance', '108', 'Mumbai', 'emergency'),
('Disaster Management Office', '+91-22-2266-0001', 'Mumbai', 'local'),
('Red Cross Mumbai', '+91-22-2266-7777', 'Mumbai', 'local'),
('Fire Department', '101', 'Delhi', 'emergency'),
('Police', '100', 'Delhi', 'emergency'),
('Ambulance', '108', 'Delhi', 'emergency'),
('Delhi Disaster Management', '+91-11-2338-0001', 'Delhi', 'local');
