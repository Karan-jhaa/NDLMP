CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (id)
);

-- Enable necessary extensions
create extension if not exists "pgcrypto";

-- Alerts table for region-specific disaster alerts
CREATE TABLE public.alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  region text NOT NULL,
  title text NOT NULL,
  description text,
  severity text CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  start_time timestamptz,
  end_time timestamptz,
  source text,
  created_at timestamptz DEFAULT now()
);

-- Education modules table
CREATE TABLE public.modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content jsonb,          -- store structured steps/quizzes etc.
  media_path text,
  created_at timestamptz DEFAULT now()
);

-- Drills table for virtual emergency drills
CREATE TABLE public.drills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  scheduled_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Drill participants tracking
CREATE TABLE public.drill_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  drill_id uuid REFERENCES public.drills(id) ON DELETE CASCADE,
  user_id uuid,           -- if you're tracking registered users
  participated boolean DEFAULT false,
  score int,
  updated_at timestamptz DEFAULT now()
);

-- Emergency contacts table
CREATE TABLE public.emergency_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  region text,
  contact_type text CHECK (contact_type IN ('emergency', 'local', 'personal')),
  created_at timestamptz DEFAULT now()
);

-- User progress tracking
CREATE TABLE public.user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  module_id uuid REFERENCES public.modules(id) ON DELETE CASCADE,
  completed boolean DEFAULT false,
  score int,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.drills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.drill_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emergency_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to alerts and modules
CREATE POLICY "public can read alerts"
  ON public.alerts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "public can read modules"
  ON public.modules
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "public can read drills"
  ON public.drills
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "public can read emergency contacts"
  ON public.emergency_contacts
  FOR SELECT
  TO public
  USING (true);

-- Policies for authenticated users
CREATE POLICY "users can insert their own progress"
  ON public.user_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users can read their own progress"
  ON public.user_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "users can update their own progress"
  ON public.user_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "users can insert drill participation"
  ON public.drill_participants
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users can read their drill participation"
  ON public.drill_participants
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
