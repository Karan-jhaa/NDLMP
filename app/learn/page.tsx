"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, BookOpen, Play, CheckCircle, Lock, Trophy, Clock, Download, Video } from "lucide-react"
import { useRouter } from "next/navigation"


const modules = [
  // Example modules data
  {
    id: 1,
    title: "Earthquake Safety",
    difficulty: "Beginner",
    duration: "1h",
    description: "Module 1",
    icon: BookOpen,
    status: "in-progress",
    progress: 100,
    lessons: 5,
    quizzes: 2,
    points: 10,
    badge: "Badge 1",
    video : "https://www.youtube.com/playlist?list=PLOuQBh7LWB0hOWWx2lyYdrk_cZ0qtTrNT"
  },
  {
    id: 2,
    title: "Tsunami safety",
    difficulty: "Intermediate",
    duration: "1h",
    description: "Module 2",
    icon: BookOpen,
    status: "in-progress",
    progress: 50,
    lessons: 10,
    quizzes: 5,
    points: 20,
    badge: "Badge 2",
    video : "https://www.youtube.com/playlist?list=PLOuQBh7LWB0hOWWx2lyYdrk_cZ0qtTrN"
  },
  {
    id: 3,
    title: "Cyclone Saftey",
    difficulty: "Intermediate",
    duration: "1h",
    description: "Module 3",
    icon: BookOpen,
    status: "in progress",
    progress: 100,
    lessons: 15,
    quizzes: 8,
    points: 30,
    badge: "Badge 3",
    video : "https://www.youtube.com/watch?v=OW3YndLhlcA"
  },
  {
    id: 4,
    title: "Landslide Safety",
    difficulty: "Intermediate",
    duration: "1h",
    description: "Module 4",
    icon: BookOpen,
    status: "in progress",
    progress: 100,
    lessons: 15,
    quizzes: 8,
    points: 30,
    badge: "Badge 3",
    video : "https://www.youtube.com/shorts/h2EaLy_Tei4"
  },
  {
    id: 5,
    title: "Floods Safety",
    difficulty: "Advanced",
    duration: "1h",
    description: "Module 5",
    icon: BookOpen,
    status: "in progress",
    progress: 100,
    lessons: 15,
    quizzes: 8,
    points: 30,
    badge: "Badge 3",
    video : "https://www.youtube.com/channel/UCw3hLp10uttanaPSygx9RAA" 
  },
  {
    id: 6,
    title: "Heat wave Safety",
    difficulty: "Advanced",
    duration: "1h",
    description: "Module 6",
    icon: BookOpen,
    status: "in progress",
    progress: 100,
    lessons: 15,
    quizzes: 8,
    points: 30,
    badge: "Badge 3",
    video : "https://www.youtube.com/watch?v=5pdqGO9BAM0" 
  },
]

export default function LearnPage() {
  
const router= useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all")

  const totalPoints = modules.reduce((sum, module) => (module.status === "completed" ? sum + module.points : sum), 0)

  const completedModules = modules.filter((m) => m.status === "completed").length
  const totalModules = modules.length

const handlePlayVideo = (videoUrl) => {
    window.open(videoUrl, "_blank"); // opens in new tab
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-950 via-gray-800/90 to-slate-600/70">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="text-5xl lg:col-span-1 slide-up bg-[url('/1239.jpg')] bg-cover bg-center bg-no-repeat"><b>NATURAL DISASTER LEARNING AND MANAGMENT PORTAL</b></div>

          {/* Main Content */}
          <div className="lg:col-span-3 scale-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white-foreground mb-2">Interactive Learning Modules</h2>
              <p className="text-white-foreground">
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
                          {/* <div className="flex items-center gap-4">
                            <span>{module.lessons} lessons</span>
                            <span>{module.quizzes} quizzes</span>
                          </div> */}
                          {/* <div className="flex items-center gap-1">
                            <Trophy className="h-4 w-4" />
                            <span>{module.points} pts</span>
                          </div> */}
                        </div>

                        {module.badge && module.status === "completed" && (
                          <Badge variant="secondary" className="w-fit bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition border">
                            {module.badge}
                          </Badge>
                        )}

                        <div className="flex gap-2">
                          {/* {module.status === "locked" ? (
                            <Button disabled className="flex-1 bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition border">
                              <Lock className="mr-2 h-4 w-4" />
                              Locked
                            </Button>
                          ) : ( */}
                            <>
                              <Button className="flex-1 bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition border hover-lift" onClick={() => handlePlayVideo(module.video)}>
                                <Play className="mr-2 h-4 w-4" />
                                {module.status === "completed"
                                  ? "Play Again"
                                  : module.status === "in-progress"
                                    ? "Continue"
                                    : "Play"}
                              </Button>
                              <Button variant="outline" className="hover-lift bg-transparent " onClick={() => router.push(`/learn/${module.id}`)}>
                                <BookOpen className="mr-2 h-5 w-5" />
                                Module
                              </Button>
                            </>
                           {/* )}  */}
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
