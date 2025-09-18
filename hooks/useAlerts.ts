"use client"

import { useEffect, useState } from "react"
import { supabase, type Alert } from "@/lib/supabase"

export function useAlerts(region?: string) {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const fetchAlerts = async () => {
      try {
        setLoading(true)
        let query = supabase.from("alerts").select("*").order("created_at", { ascending: false })

        if (region) {
          query = query.eq("region", region)
        }

        const { data, error } = await query

        if (error) throw error

        if (mounted) {
          setAlerts(data || [])
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

    fetchAlerts()

    // Set up real-time subscription for new alerts
    const channel = supabase
      .channel("alerts-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "alerts",
          filter: region ? `region=eq.${region}` : undefined,
        },
        (payload) => {
          if (mounted) {
            setAlerts((prev) => [payload.new as Alert, ...prev])
          }
        },
      )
      .subscribe()

    return () => {
      mounted = false
      supabase.removeChannel(channel)
    }
  }, [region])

  return { alerts, loading, error }
}
