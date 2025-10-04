"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  AlertTriangle,
  Bell,
  MapPin,
  Clock,
  Search,
  Filter,
  Flame,
  Waves,
  Wind,
  Mountain,
  Thermometer,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar" // Updated Navbar component import
import { Footer } from "@/components/footer" // Updated Footer component import

const alerts = [
  {
    id: 1,
    type: "severe-weather",
    title: "Severe Thunderstorm Warning",
    description: "Severe thunderstorms with damaging winds and large hail expected in your area.",
    severity: "high",
    location: "San Francisco Bay Area, CA",
    issued: "2024-01-15T14:30:00Z",
    expires: "2024-01-15T20:00:00Z",
    icon: Wind,
    status: "active",
    source: "National Weather Service",
    instructions: "Move to an interior room on the lowest floor. Avoid windows and doors.",
  },
  {
    id: 2,
    type: "flood",
    title: "Flood Watch",
    description: "Heavy rainfall may cause flooding in low-lying and poor drainage areas.",
    severity: "medium",
    location: "Santa Clara County, CA",
    issued: "2024-01-15T12:00:00Z",
    expires: "2024-01-16T06:00:00Z",
    icon: Waves,
    status: "active",
    source: "National Weather Service",
    instructions: "Avoid driving through flooded roads. Turn around, don't drown.",
  },
  {
    id: 3,
    type: "fire",
    title: "Red Flag Warning",
    description: "Critical fire weather conditions with strong winds and low humidity.",
    severity: "high",
    location: "Napa County, CA",
    issued: "2024-01-15T10:00:00Z",
    expires: "2024-01-15T18:00:00Z",
    icon: Flame,
    status: "active",
    source: "Cal Fire",
    instructions: "Avoid outdoor activities that could spark fires. Be prepared to evacuate.",
  },
  {
    id: 4,
    type: "earthquake",
    title: "Earthquake Information",
    description: "Magnitude 3.2 earthquake occurred 15 miles southeast of San Jose.",
    severity: "low",
    location: "San Jose, CA",
    issued: "2024-01-15T08:45:00Z",
    expires: null,
    icon: Mountain,
    status: "informational",
    source: "USGS",
    instructions: "No action required. Monitor for aftershocks.",
  },
  {
    id: 5,
    type: "heat",
    title: "Excessive Heat Warning",
    description: "Dangerously hot temperatures expected with heat index values up to 110°F.",
    severity: "high",
    location: "Central Valley, CA",
    issued: "2024-01-14T18:00:00Z",
    expires: "2024-01-16T21:00:00Z",
    icon: Thermometer,
    status: "expired",
    source: "National Weather Service",
    instructions: "Stay indoors during peak hours. Drink plenty of water.",
  },
]

const severityColors = {
  low: "bg-blue-500/10 text-blue-700 border-blue-200",
  medium: "bg-yellow-500/10 text-yellow-700 border-yellow-200",
  high: "bg-red-500/10 text-red-700 border-red-200",
}

const statusColors = {
  active: "bg-destructive text-destructive-foreground",
  informational: "bg-blue-500 text-white",
  expired: "bg-muted text-muted-foreground",
}

export default function AlertsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSeverity, setSelectedSeverity] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch =
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSeverity = selectedSeverity === "all" || alert.severity === selectedSeverity
    const matchesType = selectedType === "all" || alert.type === selectedType

    return matchesSearch && matchesSeverity && matchesType
  })

  const activeAlerts = alerts.filter((alert) => alert.status === "active")

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  const getTimeUntilExpiry = (expires: string | null) => {
    if (!expires) return null
    const now = new Date()
    const expiryTime = new Date(expires)
    const diff = expiryTime.getTime() - now.getTime()

    if (diff <= 0) return "Expired"

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (hours > 0) {
      return `${hours}h ${minutes}m remaining`
    }
    return `${minutes}m remaining`
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-950 via-gray-800/90 to-slate-600/70">
      <Navbar />

      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NDLMP</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold text-foreground">Emergency Alerts</h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="destructive" className="animate-pulse">
                {activeAlerts.length} Active Alert{activeAlerts.length !== 1 ? "s" : ""}
              </Badge>
              <Button variant="outline" size="sm" className="hover-lift bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                <Bell className="h-4 w-4 mr-2" />
                Notification Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Active Alerts Banner */}
      {activeAlerts.length > 0 && (
        <div className="bg-destructive/10 border-b border-destructive/20 pulse-glow">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive animate-pulse" />
              <span className="font-medium text-destructive">
                {activeAlerts.length} active emergency alert{activeAlerts.length !== 1 ? "s" : ""} in your area
              </span>
              <Button variant="destructive" size="sm" className="ml-auto hover-lift">
                View All Active
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1 slide-up">
            <Card className="mb-6 interactive-card glow-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search alerts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Severity</label>
                  <select
                    value={selectedSeverity}
                    onChange={(e) => setSelectedSeverity(e.target.value)}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="all">All Severities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="all">All Types</option>
                    <option value="severe-weather">Severe Weather</option>
                    <option value="flood">Flood</option>
                    <option value="fire">Fire</option>
                    <option value="earthquake">Earthquake</option>
                    <option value="heat">Heat</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Your Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-3">San Francisco Bay Area, CA</div>
                <Button variant="outline" size="sm" className="w-full bg-transparent hover-lift">
                  Change Location
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 scale-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Emergency Alerts</h2>
              <p className="text-muted-foreground">
                Stay informed with real-time disaster alerts and emergency information for your area.
              </p>
            </div>

            <Tabs defaultValue="current" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="current">Current Alerts</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="map">Map View</TabsTrigger>
              </TabsList>

              <TabsContent value="current" className="space-y-4">
                {filteredAlerts.length === 0 ? (
                  <Card>
                    <CardContent className="text-center py-12">
                      <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">No alerts found</h3>
                      <p className="text-muted-foreground">
                        {searchTerm || selectedSeverity !== "all" || selectedType !== "all"
                          ? "Try adjusting your filters to see more alerts."
                          : "There are currently no active alerts for your area."}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  filteredAlerts.map((alert) => (
                    <Card key={alert.id} className="interactive-card">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                alert.severity === "high"
                                  ? "bg-destructive/10"
                                  : alert.severity === "medium"
                                    ? "bg-yellow-500/10"
                                    : "bg-blue-500/10"
                              }`}
                            >
                              <alert.icon
                                className={`h-6 w-6 ${
                                  alert.severity === "high"
                                    ? "text-destructive"
                                    : alert.severity === "medium"
                                      ? "text-yellow-600"
                                      : "text-blue-600"
                                }`}
                              />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{alert.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge className={statusColors[alert.status]}>
                                  {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                                </Badge>
                                <Badge variant="outline" className={severityColors[alert.severity]}>
                                  {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          {alert.expires && (
                            <div className="text-right text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 inline mr-1" />
                              {getTimeUntilExpiry(alert.expires)}
                            </div>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-foreground">{alert.description}</p>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {alert.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              Issued {formatTime(alert.issued)}
                            </div>
                          </div>

                          {alert.instructions && (
                            <div className="bg-muted/50 rounded-lg p-4">
                              <h4 className="font-medium text-foreground mb-2">Recommended Actions:</h4>
                              <p className="text-sm text-muted-foreground">{alert.instructions}</p>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="text-sm text-muted-foreground">Source: {alert.source}</div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                More Info
                              </Button>
                              <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                                <Bell className="h-4 w-4 mr-2" />
                                Subscribe
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>

              <TabsContent value="recent">
                <Card>
                  <CardContent className="text-center py-12">
                    <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">Recent Alerts</h3>
                    <p className="text-muted-foreground">View alerts from the past 30 days in your area.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="map">
                <Card>
                  <CardContent className="text-center py-12">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      View alerts on an interactive map with location-based markers.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
