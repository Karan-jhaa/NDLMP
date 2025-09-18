"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  ArrowLeft,
  Play,
  Pause,
  CheckCircle,
  Users,
  AlertTriangle,
  Trophy,
  Target,
  Timer,
  Mountain,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const drillData = {
  "1": {
    title: "Earthquake Drop Drill",
    description: "Practice the Drop, Cover, and Hold On technique",
    type: "earthquake",
    icon: Mountain,
    duration: 900, // 15 minutes in seconds
    steps: [
      {
        id: 1,
        title: "Initial Alert",
        description: "Earthquake alert has been issued. Prepare to take action.",
        duration: 30,
        instructions: "Stay calm and listen for the earthquake simulation to begin.",
        action: "wait",
      },
      {
        id: 2,
        title: "Drop",
        description: "Drop to your hands and knees immediately.",
        duration: 5,
        instructions: "Get down on your hands and knees before the earthquake knocks you over.",
        action: "drop",
      },
      {
        id: 3,
        title: "Take Cover",
        description: "Take cover under a sturdy desk or table.",
        duration: 10,
        instructions: "Crawl under a nearby sturdy desk or table for protection.",
        action: "cover",
      },
      {
        id: 4,
        title: "Hold On",
        description: "Hold on to your shelter and protect your head and neck.",
        duration: 60,
        instructions: "Hold on to your shelter with one hand and protect your head/neck with the other.",
        action: "hold",
      },
      {
        id: 5,
        title: "Stay in Position",
        description: "Remain in position until shaking stops.",
        duration: 45,
        instructions: "Stay under cover until the earthquake simulation ends completely.",
        action: "wait",
      },
      {
        id: 6,
        title: "Check for Hazards",
        description: "Look around for immediate dangers before moving.",
        duration: 30,
        instructions: "Check for broken glass, fallen objects, or other hazards in your area.",
        action: "assess",
      },
      {
        id: 7,
        title: "Exit if Safe",
        description: "If safe to do so, exit the building using designated routes.",
        duration: 180,
        instructions: "Use stairs, not elevators. Walk, don't run. Follow evacuation routes.",
        action: "evacuate",
      },
      {
        id: 8,
        title: "Assembly Point",
        description: "Report to the designated assembly point.",
        duration: 120,
        instructions: "Go to the designated outdoor assembly area and check in with drill coordinators.",
        action: "assemble",
      },
    ],
  },
}

export default function DrillPage() {
  const params = useParams()
  const drillId = params.drillId as string
  const [currentStep, setCurrentStep] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [stepCompletionTimes, setStepCompletionTimes] = useState<number[]>([])

  const drill = drillData[drillId as keyof typeof drillData]

  useEffect(() => {
    if (drill && currentStep < drill.steps.length) {
      setTimeRemaining(drill.steps[currentStep].duration)
    }
  }, [currentStep, drill])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => {
          if (time <= 1) {
            handleStepComplete()
            return 0
          }
          return time - 1
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeRemaining])

  if (!drill) {
    return <div>Drill not found</div>
  }

  const handleStartDrill = () => {
    setIsActive(true)
    setStartTime(new Date())
    setCurrentStep(0)
    setTimeRemaining(drill.steps[0].duration)
  }

  const handlePauseDrill = () => {
    setIsActive(false)
  }

  const handleResumeDrill = () => {
    setIsActive(true)
  }

  const handleStepComplete = () => {
    const completionTime = Date.now() - (startTime?.getTime() || 0)
    setStepCompletionTimes((prev) => [...prev, completionTime])

    if (currentStep < drill.steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setIsCompleted(true)
      setIsActive(false)
    }
  }

  const handleManualStepComplete = () => {
    handleStepComplete()
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const currentStepData = drill.steps[currentStep]
  const progress = ((currentStep + 1) / drill.steps.length) * 100

  if (isCompleted) {
    const totalTime = stepCompletionTimes.reduce((sum, time) => sum + time, 0)
    const score = Math.max(60, 100 - Math.floor((totalTime - drill.duration * 1000) / 1000))

    return (
      <div className="min-h-screen bg-gradient-to-r from-amber-500 to-orange-700">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Link href="/drills" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">SafeLearn</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold text-foreground">Drill Complete</h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Drill Completed!</CardTitle>
              <CardDescription>Great job completing the {drill.title}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-2">{score}</div>
                  <div className="text-sm text-muted-foreground">Final Score</div>
                </div>
                <div className="bg-secondary/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {formatTime(Math.floor(totalTime / 1000))}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Time</div>
                </div>
                <div className="bg-accent/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-accent mb-2">+75</div>
                  <div className="text-sm text-muted-foreground">Points Earned</div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Performance Feedback</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Excellent response time during the Drop phase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Good adherence to safety protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm">Consider practicing evacuation routes for faster exit times</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => window.location.reload()}>
                  <Play className="h-4 w-4 mr-2" />
                  Practice Again
                </Button>
                <Link href="/drills">
                  <Button variant="outline" className="bg-transparent">
                    Back to Drills
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-500 to-orange-700 fade-in">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/drills" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">SafeLearn</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold text-foreground">{drill.title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {drill.steps.length}
              </div>
              <Badge variant="secondary">{Math.round(progress)}% Complete</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Progress */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Drill Progress</CardTitle>
                <Progress value={progress} className="h-2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {drill.steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`p-2 rounded-lg text-sm ${
                        index === currentStep
                          ? "bg-primary/10 border border-primary/20"
                          : index < currentStep
                            ? "bg-muted text-muted-foreground"
                            : "text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {index < currentStep ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : index === currentStep ? (
                          <div className="h-4 w-4 rounded-full bg-primary animate-pulse" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                        )}
                        <span className="font-medium">{step.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!isActive && currentStep === 0 ? (
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <drill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{drill.title}</CardTitle>
                  <CardDescription>{drill.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4">Drill Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Timer className="h-4 w-4 text-muted-foreground" />
                        <span>Duration: {formatTime(drill.duration)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>Participants: 245</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                        <span>Points: 75</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-1">Important Instructions</h4>
                        <p className="text-sm text-yellow-700">
                          Follow all instructions carefully and complete each step as directed. This drill simulates a
                          real emergency situation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button size="lg" onClick={handleStartDrill}>
                      <Play className="h-5 w-5 mr-2" />
                      Start Drill
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{currentStepData.title}</CardTitle>
                      <CardDescription>{currentStepData.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{formatTime(timeRemaining)}</div>
                      <div className="text-sm text-muted-foreground">remaining</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">Instructions</h3>
                    <p className="text-foreground">{currentStepData.instructions}</p>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    {isActive ? (
                      <Button variant="outline" onClick={handlePauseDrill}>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause Drill
                      </Button>
                    ) : (
                      <Button onClick={handleResumeDrill}>
                        <Play className="h-4 w-4 mr-2" />
                        Resume Drill
                      </Button>
                    )}

                    <Button onClick={handleManualStepComplete}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Complete Step
                    </Button>
                  </div>

                  <div className="text-center">
                    <Progress
                      value={
                        ((drill.steps[currentStep].duration - timeRemaining) / drill.steps[currentStep].duration) * 100
                      }
                      className="h-2 mb-2"
                    />
                    <div className="text-sm text-muted-foreground">
                      Step {currentStep + 1} of {drill.steps.length}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
