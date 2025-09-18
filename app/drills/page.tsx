"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Users,
  Play,
  CheckCircle,
  Calendar,
  Trophy,
  Target,
  Timer,
  Flame,
  Waves,
  Mountain,
  Wind,
  MapPin,
  Star,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const upcomingDrills = [
  {
    id: 1,
    title: "Earthquake Drop Drill",
    description: "Practice the Drop, Cover, and Hold On technique",
    type: "earthquake",
    icon: Mountain,
    scheduledDate: "2024-01-20T10:00:00Z",
    duration: "15 minutes",
    participants: 245,
    maxParticipants: 300,
    difficulty: "Beginner",
    points: 50,
    status: "upcoming",
    location: "School-wide",
  },
  {
    id: 2,
    title: "Fire Evacuation Drill",
    description: "Complete building evacuation simulation",
    type: "fire",
    icon: Flame,
    scheduledDate: "2024-01-22T14:30:00Z",
    duration: "20 minutes",
    participants: 189,
    maxParticipants: 250,
    difficulty: "Intermediate",
    points: 75,
    status: "upcoming",
    location: "Building A & B",
  },
  {
    id: 3,
    title: "Severe Weather Shelter",
    description: "Practice sheltering procedures for severe weather",
    type: "weather",
    icon: Wind,
    scheduledDate: "2024-01-25T11:15:00Z",
    duration: "12 minutes",
    participants: 156,
    maxParticipants: 200,
    difficulty: "Beginner",
    points: 40,
    status: "upcoming",
    location: "Gymnasium",
  },
]

const completedDrills = [
  {
    id: 4,
    title: "Flood Response Drill",
    description: "Emergency response to flooding scenario",
    type: "flood",
    icon: Waves,
    completedDate: "2024-01-15T09:00:00Z",
    duration: "18 minutes",
    participants: 198,
    yourTime: "2:45",
    averageTime: "3:12",
    score: 92,
    points: 65,
    status: "completed",
    feedback: "Excellent response time! Remember to check for injuries after reaching safety.",
  },
  {
    id: 5,
    title: "Lockdown Procedure",
    description: "Security lockdown and shelter-in-place drill",
    type: "security",
    icon: Shield,
    completedDate: "2024-01-10T13:20:00Z",
    duration: "25 minutes",
    participants: 234,
    yourTime: "1:58",
    averageTime: "2:15",
    score: 88,
    points: 80,
    status: "completed",
    feedback: "Good job securing the area. Work on quieter movement next time.",
  },
]

const drillStats = {
  totalDrills: 12,
  completedDrills: 8,
  averageScore: 89,
  totalPoints: 520,
  streak: 5,
  rank: 23,
}

export default function DrillsPage() {
  const [selectedTab, setSelectedTab] = useState("upcoming")

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getTimeUntilDrill = (dateString: string) => {
    const now = new Date()
    const drillTime = new Date(dateString)
    const diff = drillTime.getTime() - now.getTime()

    if (diff <= 0) return "Starting now"

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (days > 0) return `${days}d ${hours}h`
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  const getDrillTypeColor = (type: string) => {
    const colors = {
      earthquake: "bg-yellow-500/10 text-yellow-700 border-yellow-200",
      fire: "bg-red-500/10 text-red-700 border-red-200",
      flood: "bg-blue-500/10 text-blue-700 border-blue-200",
      weather: "bg-purple-500/10 text-purple-700 border-purple-200",
      security: "bg-gray-500/10 text-gray-700 border-gray-200",
    }
    return colors[type as keyof typeof colors] || "bg-muted text-muted-white-foreground"
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-500 to-orange-700 fade-in">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Stats */}
          <div className="lg:col-span-1 slide-up">
            <Card className="mb-6 interactive-card glow-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Your Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Completion Rate</span>
                    <span>{Math.round((drillStats.completedDrills / drillStats.totalDrills) * 100)}%</span>
                  </div>
                  <Progress value={(drillStats.completedDrills / drillStats.totalDrills) * 100} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-black">{drillStats.averageScore}</div>
                    <div className="text-xs text-muted-foreground">Avg Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">{drillStats.streak}</div>
                    <div className="text-xs text-muted-foreground">Day Streak</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-sm font-medium mb-2">Recent Achievements</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 text-black" />
                      <span>Perfect Score</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="h-4 w-4 text-black" />
                      <span>5-Day Streak</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Sarah Chen", score: 95, rank: 1 },
                    { name: "Mike Johnson", score: 93, rank: 2 },
                    { name: "You", score: drillStats.averageScore, rank: drillStats.rank },
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            user.name === "You"
                              ? "bg-black text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {user.rank}
                        </div>
                        <span className={`text-sm ${user.name === "You" ? "font-medium" : ""}`}>{user.name}</span>
                      </div>
                      <span className="text-sm font-medium">{user.score}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 scale-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Virtual Emergency Drills</h2>
              <p className="text-muted-foreground">
                Practice emergency procedures through scheduled drills and track your response performance.
              </p>
            </div>

            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upcoming">Upcoming Drills</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="practice">Practice Mode</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4">
                {upcomingDrills.map((drill) => (
                  <Card key={drill.id} className="interactive-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <drill.icon className="h-6 w-6 text-black" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{drill.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className={getDrillTypeColor(drill.type)}>
                                {drill.type}
                              </Badge>
                              <Badge variant="outline">{drill.difficulty}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-foreground">
                            {getTimeUntilDrill(drill.scheduledDate)}
                          </div>
                          <div className="text-xs text-muted-foreground">until start</div>
                        </div>
                      </div>
                      <CardDescription>{drill.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDate(drill.scheduledDate)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Timer className="h-4 w-4 text-muted-foreground" />
                            <span>{drill.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{drill.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                            <span>{drill.points} points</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Participants</span>
                            <span>
                              {drill.participants}/{drill.maxParticipants}
                            </span>
                          </div>
                          <Progress value={(drill.participants / drill.maxParticipants) * 100} className="h-2" />
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition border hover-lift">
                            <Play className="h-4 w-4 mr-2" />
                            Join Drill
                          </Button>
                          <Button variant="outline" className="hover-lift bg-transparent">
                            <Calendar className="h-4 w-4 mr-2" />
                            Add to Calendar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="completed" className="space-y-4">
                {completedDrills.map((drill) => (
                  <Card key={drill.id} className="interactive-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <drill.icon className="h-6 w-6 text-black" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{drill.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className={getDrillTypeColor(drill.type)}>
                                {drill.type}
                              </Badge>
                              <CheckCircle className="h-4 w-4 text-black" />
                              <span className="text-sm text-muted-foreground">Completed</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-black">{drill.score}</div>
                          <div className="text-xs text-muted-foreground">score</div>
                        </div>
                      </div>
                      <CardDescription>{drill.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="text-xs text-muted-foreground">Your Time</div>
                            <div className="font-medium">{drill.yourTime}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Average Time</div>
                            <div className="font-medium">{drill.averageTime}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Participants</div>
                            <div className="font-medium">{drill.participants}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Points Earned</div>
                            <div className="font-medium text-black">+{drill.points}</div>
                          </div>
                        </div>

                        {drill.feedback && (
                          <div className="bg-muted/50 rounded-lg p-4">
                            <h4 className="font-medium text-foreground mb-2">Feedback:</h4>
                            <p className="text-sm text-muted-foreground">{drill.feedback}</p>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                            View Details
                          </Button>
                          <Button variant="outline" className="hover-lift bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition">
                            <Play className="h-4 w-4 mr-2" />
                            Practice Again
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="practice" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-6 w-6 text-black" />
                      Practice Mode
                    </CardTitle>
                    <CardDescription>
                      Practice emergency procedures anytime without waiting for scheduled drills
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { type: "earthquake", title: "Earthquake Response", icon: Mountain, difficulty: "Beginner" },
                        { type: "fire", title: "Fire Evacuation", icon: Flame, difficulty: "Intermediate" },
                        { type: "flood", title: "Flood Response", icon: Waves, difficulty: "Intermediate" },
                        { type: "weather", title: "Severe Weather", icon: Wind, difficulty: "Beginner" },
                      ].map((practice, index) => (
                        <Card key={index} className="interactive-card cursor-pointer">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <practice.icon className="h-5 w-5 text-black" />
                              </div>
                              <div>
                                <CardTitle className="text-base">{practice.title}</CardTitle>
                                <Badge variant="outline" className="text-xs">
                                  {practice.difficulty}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <Button className="w-full bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition border hover-lift">
                              <Play className="h-4 w-4 mr-2" />
                              Start Practice
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
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
