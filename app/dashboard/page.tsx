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
  BookOpen,
  AlertTriangle,
  Trophy,
  Download,
  Calendar,
  Target,
  Ban as Bar,
  LucidePieChart as RechartsPieChart,
  Bell as Cell,
  Radius as XAxis,
  Radius as YAxis,
  CreditCard as CartesianGrid,
  BookType as Tooltip,
  ListEnd as Legend,
  LucideContainer as ResponsiveContainer,
  LinkIcon as LineIcon,
} from "lucide-react"
import Link from "next/link"
import { AreaChart, BarChart, LineChart, Area, Line } from "recharts"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const overviewStats = {
  totalUsers: 1247,
  activeUsers: 892,
  completedModules: 3456,
  averageScore: 87,
  totalDrills: 156,
  drillParticipation: 78,
  alertsSent: 23,
  preparednessScore: 92,
}

const monthlyData = [
  { month: "Jan", users: 850, modules: 2100, drills: 45, score: 82 },
  { month: "Feb", users: 920, modules: 2400, drills: 52, score: 84 },
  { month: "Mar", users: 1050, modules: 2800, drills: 48, score: 86 },
  { month: "Apr", users: 1150, modules: 3200, drills: 55, score: 87 },
  { month: "May", users: 1247, modules: 3456, drills: 62, score: 87 },
]

const drillPerformanceData = [
  { type: "Earthquake", completed: 234, average: 89, participation: 94 },
  { type: "Fire", completed: 198, average: 92, participation: 87 },
  { type: "Flood", completed: 156, average: 85, participation: 82 },
  { type: "Weather", completed: 189, average: 88, participation: 91 },
]

const moduleCompletionData = [
  { name: "Earthquake Safety", completed: 89, total: 100 },
  { name: "Fire Safety", completed: 76, total: 100 },
  { name: "Flood Preparedness", completed: 65, total: 100 },
  { name: "Severe Weather", completed: 58, total: 100 },
  { name: "Power Outage", completed: 72, total: 100 },
  { name: "Emergency Kit", completed: 84, total: 100 },
]

const userEngagementData = [
  { name: "Daily Active", value: 45, color: "#22c55e" },
  { name: "Weekly Active", value: 35, color: "#3b82f6" },
  { name: "Monthly Active", value: 15, color: "#f59e0b" },
  { name: "Inactive", value: 5, color: "#ef4444" },
]

const recentAlerts = [
  {
    id: 1,
    title: "Severe Thunderstorm Warning",
    type: "weather",
    severity: "high",
    sent: "2024-01-15T14:30:00Z",
    recipients: 1247,
    opened: 1156,
  },
  {
    id: 2,
    title: "Flood Watch",
    type: "flood",
    severity: "medium",
    sent: "2024-01-15T12:00:00Z",
    recipients: 892,
    opened: 756,
  },
  {
    id: 3,
    title: "Earthquake Information",
    type: "earthquake",
    severity: "low",
    sent: "2024-01-15T08:45:00Z",
    recipients: 1247,
    opened: 934,
  },
]

const topPerformers = [
  { name: "Sarah Chen", class: "Grade 10A", score: 98, modules: 12, drills: 8 },
  { name: "Mike Johnson", class: "Grade 9B", score: 96, modules: 11, drills: 7 },
  { name: "Emma Davis", class: "Grade 11C", score: 94, modules: 10, drills: 9 },
  { name: "Alex Rodriguez", class: "Grade 10B", score: 93, modules: 12, drills: 6 },
  { name: "Lisa Wang", class: "Grade 9A", score: 92, modules: 9, drills: 8 },
]

export default function DashboardPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("month")

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
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
              <h1 className="text-xl font-semibold text-foreground">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hover-lift bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button size="sm" className="bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Drill
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 slide-up">
          <Card className="interactive-card glow-effect">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewStats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="interactive-card glow-effect">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewStats.activeUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="interactive-card glow-effect">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Modules Completed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewStats.completedModules.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+15%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="interactive-card glow-effect">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Preparedness Score</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewStats.preparednessScore}%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+3%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6 scale-in">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="drills">Drills</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Growth Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    User Growth
                  </CardTitle>
                  <CardDescription>Monthly active users and engagement trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="users" stroke="#22c55e" fill="#22c55e" fillOpacity={0.1} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* User Engagement Pie Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RechartsPieChart className="h-5 w-5" />
                    User Engagement
                  </CardTitle>
                  <CardDescription>Distribution of user activity levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart
                      data={userEngagementData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {userEngagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Performance Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bar className="h-5 w-5" />
                  Learning Progress Overview
                </CardTitle>
                <CardDescription>Module completion rates and drill performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="modules" fill="#3b82f6" name="Modules Completed" />
                    <Bar dataKey="drills" fill="#22c55e" name="Drills Completed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Performers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Top Performers
                  </CardTitle>
                  <CardDescription>Students with highest preparedness scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPerformers.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{student.name}</div>
                            <div className="text-sm text-muted-foreground">{student.class}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{student.score}%</div>
                          <div className="text-xs text-muted-foreground">
                            {student.modules}M • {student.drills}D
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* User Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineIcon className="h-5 w-5" />
                    User Activity
                  </CardTitle>
                  <CardDescription>Daily active users over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="users" stroke="#22c55e" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* User Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>User Statistics</CardTitle>
                <CardDescription>Detailed breakdown of user engagement and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">{overviewStats.activeUsers}</div>
                    <div className="text-sm text-muted-foreground">Active This Month</div>
                    <Progress value={71} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">{overviewStats.averageScore}%</div>
                    <div className="text-sm text-muted-foreground">Average Score</div>
                    <Progress value={87} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">{overviewStats.drillParticipation}%</div>
                    <div className="text-sm text-muted-foreground">Drill Participation</div>
                    <Progress value={78} className="mt-4 " />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Module Completion Rates
                </CardTitle>
                <CardDescription>Progress across all learning modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {moduleCompletionData.map((module, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{module.name}</span>
                        <span className="text-muted-foreground">{module.completed}% complete</span>
                      </div>
                      <Progress value={module.completed} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Module Performance Trends</CardTitle>
                <CardDescription>Completion rates over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="modules" stroke="#3b82f6" strokeWidth={2} name="Modules Completed" />
                    <Line type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={2} name="Average Score" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Drill Performance by Type
                </CardTitle>
                <CardDescription>Completion rates and scores across different drill types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {drillPerformanceData.map((drill, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{drill.type} Drills</h4>
                        <Badge variant="secondary">{drill.completed} completed</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Average Score</div>
                          <div className="text-xl font-bold text-primary">{drill.average}%</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Participation Rate</div>
                          <div className="text-xl font-bold text-secondary">{drill.participation}%</div>
                        </div>
                      </div>
                      <Progress value={drill.participation} className="mt-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Drill Participation Trends</CardTitle>
                <CardDescription>Monthly drill completion and participation rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="drills" fill="#22c55e" name="Drills Completed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Recent Alerts
                </CardTitle>
                <CardDescription>Emergency alerts sent to users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="p-4 rounded-lg border border-border">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{alert.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              variant={
                                alert.severity === "high"
                                  ? "destructive"
                                  : alert.severity === "medium"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {alert.severity}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{alert.type}</span>
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <Users className="h-4 w-4 inline mr-1" />
                          {formatDate(alert.sent)}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Recipients</div>
                          <div className="font-medium">{alert.recipients.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Opened</div>
                          <div className="font-medium">
                            {alert.opened.toLocaleString()} ({Math.round((alert.opened / alert.recipients) * 100)}%)
                          </div>
                        </div>
                      </div>
                      <Progress value={(alert.opened / alert.recipients) * 100} className="mt-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alert Effectiveness</CardTitle>
                <CardDescription>Open rates and engagement metrics for emergency alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">{overviewStats.alertsSent}</div>
                    <div className="text-sm text-muted-foreground">Alerts Sent</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">89%</div>
                    <div className="text-sm text-muted-foreground">Average Open Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">2.3min</div>
                    <div className="text-sm text-muted-foreground">Average Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
