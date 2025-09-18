"use client"

import { useEffect, useState } from "react"
import { supabase, type Module } from "@/lib/supabase"

export function useModules() {
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const fetchModules = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase.from("modules").select("*").order("created_at", { ascending: false })

        if (error) throw error

        if (mounted) {
          setModules(data || [])
          setError(null)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : "An error occurred")
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchModules()

    return () => {
      mounted = false
    }
  }, [])

  return { modules, loading, error }
}
