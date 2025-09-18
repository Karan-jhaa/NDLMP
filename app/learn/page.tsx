"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, BookOpen, Play, CheckCircle, Lock, Trophy, Clock, Download } from "lucide-react"

const modules = [
  // Example modules data
  {
    id: 1,
    title: "Module 1",
    difficulty: "Beginner",
    duration: "1h",
    description: "Description of Module 1",
    icon: BookOpen,
    status: "completed",
    progress: 100,
    lessons: 5,
    quizzes: 2,
    points: 10,
    badge: "Badge 1",
  },
  {
    id: 2,
    title: "Module 2",
    difficulty: "Intermediate",
    duration: "2h",
    description: "Description of Module 2",
    icon: Play,
    status: "in-progress",
    progress: 50,
    lessons: 10,
    quizzes: 5,
    points: 20,
    badge: "Badge 2",
  },
  {
    id: 3,
    title: "Module 3",
    difficulty: "Advanced",
    duration: "3h",
    description: "Description of Module 3",
    icon: Shield,
    status: "locked",
    progress: 0,
    lessons: 15,
    quizzes: 8,
    points: 30,
    badge: "Badge 3",
  },
]

export default function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const totalPoints = modules.reduce((sum, module) => (module.status === "completed" ? sum + module.points : sum), 0)

  const completedModules = modules.filter((m) => m.status === "completed").length
  const totalModules = modules.length

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-500 to-orange-700 fade-in">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 slide-up">{/* ... existing sidebar code ... */}</div>

          {/* Main Content */}
          <div className="lg:col-span-3 scale-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Interactive Learning Modules</h2>
              <p className="text-muted-foreground">
                Master disaster preparedness through engaging multimedia content, quizzes, and simulations.
              </p>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Modules</TabsTrigger>
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules
                .filter((module) => selectedCategory === "all" || module.difficulty.toLowerCase() === selectedCategory)
                .map((module) => (
                  <Card
                    key={module.id}
                    className={`interactive-card ${module.status === "locked" ? "opacity-60" : "cursor-pointer"}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                              module.status === "completed"
                                ? "bg-primary/10"
                                : module.status === "in-progress"
                                  ? "bg-secondary/10"
                                  : module.status === "locked"
                                    ? "bg-muted"
                                    : "bg-accent/10"
                            }`}
                          >
                            {module.status === "locked" ? (
                              <Lock className="h-6 w-6 text-muted-foreground" />
                            ) : (
                              <module.icon
                                className={`h-6 w-6 ${
                                  module.status === "completed"
                                    ? "text-primary"
                                    : module.status === "in-progress"
                                      ? "text-secondary"
                                      : "text-accent"
                                }`}
                              />
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{module.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {module.difficulty}
                              </Badge>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {module.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                        {module.status === "completed" && <CheckCircle className="h-6 w-6 text-primary" />}
                      </div>
                      <CardDescription className="mt-2">{module.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        {module.progress > 0 && (
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>Progress</span>
                              <span>{module.progress}%</span>
                            </div>
                            <Progress value={module.progress} className="h-2" />
                          </div>
                        )}

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span>{module.lessons} lessons</span>
                            <span>{module.quizzes} quizzes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Trophy className="h-4 w-4" />
                            <span>{module.points} pts</span>
                          </div>
                        </div>

                        {module.badge && module.status === "completed" && (
                          <Badge variant="secondary" className="w-fit bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition border">
                            {module.badge}
                          </Badge>
                        )}

                        <div className="flex gap-2">
                          {module.status === "locked" ? (
                            <Button disabled className="flex-1 bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition border">
                              <Lock className="mr-2 h-4 w-4" />
                              Locked
                            </Button>
                          ) : (
                            <>
                              <Button className="flex-1 bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition border hover-lift">
                                <Play className="mr-2 h-4 w-4" />
                                {module.status === "completed"
                                  ? "Play Again"
                                  : module.status === "in-progress"
                                    ? "Continue"
                                    : "Play"}
                              </Button>
                              <Button variant="outline" className="hover-lift bg-transparent">
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
