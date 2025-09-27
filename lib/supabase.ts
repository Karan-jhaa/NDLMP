import { createClient } from "@supabase/supabase-js"


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface Alert {
  id: string
  region: string
  title: string
  description?: string
  severity: "low" | "medium" | "high" | "critical"
  start_time?: string
  end_time?: string
  source?: string
  created_at: string
}

export interface Module {
  id: string
  slug: string
  title: string
  content: any // JSON content with steps, quizzes, etc.
  media_path?: string
  created_at: string
}

export interface Drill {
  id: string
  title: string
  scheduled_at?: string
  created_at: string
}

export interface DrillParticipant {
  id: string
  drill_id: string
  user_id?: string
  participated: boolean
  score?: number
  updated_at: string
}

export interface EmergencyContact {
  id: string
  name: string
  phone: string
  region: string
  created_at: string
}
