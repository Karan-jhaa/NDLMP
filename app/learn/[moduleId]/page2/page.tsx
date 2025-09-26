"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Shield,
  BookOpen,
  Play,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Trophy,
  Star,
  FileText,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const moduleContent = {
  "2": {
    title: "Earthquake Safety",
    lessons: [
      {
        id: 1,
        title: "Understanding Earthquakes",
       content:"Practice how to protect yourself during earthquakes, with family and coworkers Make an Emergency Plan: Create a family emergency communications plan that has an out-of-state contact. Plan where to meet if you get separated. Make a supply kit that includes enough food and water for several days, a flashlight, a fire extinguisher and a whistle.Being prepared allows you to avoid unnecessary excursions and to address minor medical issues at home, alleviating the burden on urgent care centers and hospitals.Remember that not everyone can afford to respond by stocking up on necessities. For those who can afford it, make essential purchases and slowly build up supplies.Protect Your Home: Secure heavy items in your home like bookcases, refrigerators, water heaters, televisions and objects that hang on walls. Store heavy and breakable objects on low shelves.Consider making improvements to your building to fix structural issues that could cause your building to collapse during an earthquake.Consider obtaining an earthquake insurance policy. A standard homeowner’s insurance policy does not cover earthquake damage.Stay Safe Duringfeature_mini imgIf an earthquake happens, protect yourself right away:If you are inside, stay and do not run outside and avoid doorways.If you are in bed, turn face down and cover your head and neck with a pillow.If you are in a car, pull over and stop. Set your parking brake.If you're outside, stay there. Move to an open area away from buildings, trees, streetlights, and power lines. Drop and cover until shaking stops to protect yourself from flying debris. Learn more at Earthquake Country Alliance.Protect Yourself During EarthquakesImage Illustration of drop, cover, hold on. 1. Drop (or Lock)Wherever you are, drop down to your hands and knees and hold onto something sturdy. If you’re using a wheelchair or walker with a seat, make sure your wheels are locked and remain seated until the shaking stops.2. CoverCover your head and neck with your arms. If a sturdy table or desk is nearby, crawl underneath it for shelter. If no shelter is nearby, crawl next to an interior wall (away from windows). Crawl only if you can reach better cover without going through an area with more debris. Stay on your knees or bent over to protect vital organs.3. Hold OnPractice how to protect yourself during earthquakes, with family and coworkers.Make an Emergency Plan: Create a family emergency communications plan that has an out-of-state contact. Plan where to meet if you get separated. Make a supply kit that includes enough food and water for several days, a flashlight, a fire extinguisher and a whistle.Being prepared allows you to avoid unnecessary excursions and to address minor medical issues at home, alleviating the burden on urgent care centers and hospitals.Remember that not everyone can afford to respond by stocking up on necessities. For those who can afford it, make essential purchases and slowly build up supplies.Protect Your Home: Secure heavy items in your home like bookcases, refrigerators, water heaters, televisions and objects that hang on walls. Store heavy and breakable objects on low shelves.Consider making improvements to your building to fix structural issues that could cause your building to collapse during an earthquake.Consider obtaining an earthquake insurance policy. A standard homeowner’s insurance policy does not cover earthquake damage.Stay Safe Duringfeature_mini imgIf an earthquake happens, protect yourself right away:If you are inside, stay and do not run outside and avoid doorways.If you are in bed, turn face down and cover your head and neck with a pillow.If you are in a car, pull over and stop. Set your parking brake.If you're outside, stay there. Move to an open area away from buildings, trees, streetlights, and power lines. Drop and cover until shaking stops to protect yourself from flying debris. Learn more at Earthquake Country Alliance.Protect Yourself During EarthquakesImageIllustration of drop, cover, hold on. 1. Drop (or Lock)Wherever you are, drop down to your hands and knees and hold onto something sturdy. If you’re using a wheelchair or walker with a seat, make sure your wheels are locked and remain seated until the shaking stops.2. Cover Cover your head and neck with your arms. If a sturdy table or desk is nearby, crawl underneath it for shelter. If no shelter is nearby, crawl next to an interior wall (away from windows). Crawl only if you can reach better cover without going through an area with more debris. Stay on your knees or bent over to protect vital organs.3. Hold OnIf you are under a table or desk, hold on with one hand and be ready to move with it if it moves. If seated and unable to drop to the floor,bend forward, cover your head with your arms and hold on to your neck with both hands.Using a Cane? Illustration of a man practicing drop, cover and hold on using a cane.Using a Walker?ImageIllustration of a man practicing drop, cover and hold on using a walker.Using a Wheelchair?Image Illustration of a man practicing drop, cover and hold on using a wheelchair.Stay Safe Afterfeature_mini imgThere can be serious hazards after an earthquake, such as damage to the building, leaking gas and water lines, or downed power lines.Expect aftershocks to follow the main shock of an earthquake. Be ready to Drop, Cover, and Hold On if you feel an aftershock.If you are in a damaged building, go outside and quickly move away from the building. Do not enter damaged buildings.If you are trapped, send a text or bang on a pipe or wall. Cover your mouth with your shirt for protection and instead of shouting, use a whistle.If you are in an area that may experience tsunamis, go inland or to higher ground immediately after the shaking stops. Avoid contact with floodwaters as they can contain chemicals, sewage, and debris.Check yourself to see if you are hurt and help others if you have training. Learn how to be the help until help arrives.If you are sick or injured and need medical attention, contact your healthcare provider for instructions. If you are experiencing a medical emergency, call 9-1-1.feature_mini imgOnce you are safe, pay attention to local news reports for emergency information and instructions via battery-operated radio, TV, social media or from cell phone text alerts.Use social media to let people know you’re okay.Use text messages to communicate, which may be more reliable than phone calls.Be careful when cleaning up. Wear protective clothing, including a long-sleeved shirt, long pants, work gloves and sturdy thick-soled shoes. Do not try to remove heavy debris by yourself. Use an appropriate mask if cleaning mold or other debris. People with asthma and other lung conditions and/or immune suppression should not enter buildings with indoor water leaks or mold growth that can be seen or smelled. Children should not take part in disaster cleanup work.."
},
    ],
    quiz: {
      title: "Earthquake Safety Quiz",
      questions: [
        {
          id: 1,
          question: "What should you do immediately when you feel an earthquake?",
          options: [
            "Run outside as fast as possible",
            "Drop, Cover, and Hold On",
            "Stand in a doorway",
            "Get under a table and stay there",
          ],
          correct: 1,
          explanation:
            "Drop, Cover, and Hold On is the recommended response to protect yourself during earthquake shaking.",
        },
        {
          id: 2,
          question: "How long should your emergency kit supplies last?",
          options: ["1 day", "3 days", "1 week", "2 weeks"],
          correct: 1,
          explanation:
            "Emergency kits should contain supplies for at least 3 days, as it may take that long for help to arrive.",
        },
      ],
    },
  },
}

export default function page2() {
  const params = useParams()
  const moduleId = params.moduleId as string
  const [currentLesson, setCurrentLesson] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const module = moduleContent[moduleId as keyof typeof moduleContent]

  if (!module) {
    return <div>Module not found</div>
  }

  const completedLessons = module.lessons.filter((2) => 2
  0.completed).length
  const progress = (completedLessons / module.lessons.length) * 100

  const handleQuizSubmit = () => {
    setQuizSubmitted(true)
  }

  const getQuizScore = () => {
    const correct = module.quiz.questions.filter((q, index) => quizAnswers[index] === q.correct).length
    return Math.round((correct / module.quiz.questions.length) * 100)
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-amber-500 to-orange-700">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/learn" className="flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold text-foreground">SafeLearn</span>
                </Link>
                <div className="h-6 w-px bg-border" />
                <h1 className="text-xl font-semibold text-foreground">{module.quiz.title}</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {!quizSubmitted ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  {module.quiz.title}
                </CardTitle>
                <CardDescription>Test your knowledge of earthquake safety principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {module.quiz.questions.map((question, index) => (
                  <div key={question.id} className="space-y-4">
                    <h3 className="text-lg font-medium">
                      {index + 1}. {question.question}
                    </h3>
                    <RadioGroup
                      value={quizAnswers[index]?.toString()}
                      onValueChange={(value) =>
                        setQuizAnswers((prev) => ({ ...prev, [index]: Number.parseInt(value) }))
                      }
                    >
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center space-x-2">
                          <RadioGroupItem value={optionIndex.toString()} id={`q${index}-${optionIndex}`} />
                          <Label htmlFor={`q${index}-${optionIndex}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={() => setShowQuiz(false)}>
                    Back to Lessons
                  </Button>
                  <Button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < module.quiz.questions.length}
                  >
                    Submit Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quiz Complete!</CardTitle>
                <CardDescription>You scored {getQuizScore()}% on this quiz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {module.quiz.questions.map((question, index) => (
                  <div key={question.id} className="space-y-2">
                    <h4 className="font-medium">
                      {index + 1}. {question.question}
                    </h4>
                    <div
                      className={`p-3 rounded-lg ${
                        quizAnswers[index] === question.correct
                          ? "bg-primary/10 border border-primary/20"
                          : "bg-destructive/10 border border-destructive/20"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {quizAnswers[index] === question.correct ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : (
                          <div className="h-4 w-4 rounded-full bg-destructive" />
                        )}
                        <span className="font-medium">
                          {quizAnswers[index] === question.correct ? "Correct" : "Incorrect"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{question.explanation}</p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center pt-6">
                  <Button onClick={() => setShowQuiz(false)}>Continue Learning</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    )
  }

  const currentLessonData = module.lessons[currentLesson]

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-500 to-orange-700 fade-in">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/learn" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">SafeLearn</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold text-foreground">{module.title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Lesson {currentLesson + 1} of {module.lessons.length}
              </div>
              <Badge variant="secondary">{Math.round(progress)}% Complete</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Lesson List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Progress</CardTitle>
                <Progress value={progress} className="h-2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {module.lessons.map((lesson, index) => (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        index === currentLesson ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {lesson.completed ? (
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{lesson.title}</div>
                          <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                        </div>
                      </div>
                    </button>
                  ))}

                  <button
                    onClick={() => setShowQuiz(true)}
                    className="w-full text-left p-3 rounded-lg transition-colors hover:bg-muted border-t border-border mt-4 pt-4"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Final Quiz</div>
                        <div className="text-xs text-muted-foreground">Test your knowledge</div>
                      </div>
                    </div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {currentLessonData.type === "video" && <Play className="h-5 w-5 text-primary" />}
                    {currentLessonData.type === "article" && <FileText className="h-5 w-5 text-primary" />}
                    {currentLessonData.type === "interactive" && <Star className="h-5 w-5 text-primary" />}
                    {currentLessonData.type === "checklist" && <CheckCircle className="h-5 w-5 text-primary" />}
                  </div>
                  <div>
                    <CardTitle>{currentLessonData.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {currentLessonData.type}
                      </Badge>
                      <span>{currentLessonData.duration}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {/* Lesson Content Area */}
                  <div className="bg-muted/30 rounded-lg p-8 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {currentLessonData.type === "video" && <Play className="h-12 w-12 text-primary" />}
                      {currentLessonData.type === "article" && <FileText className="h-12 w-12 text-primary" />}
                      {currentLessonData.type === "interactive" && <Star className="h-12 w-12 text-primary" />}
                      {currentLessonData.type === "checklist" && <CheckCircle className="h-12 w-12 text-primary" />}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{currentLessonData.title}</h3>
                    <p className="text-muted-foreground mb-6">{currentLessonData.content}</p>

                    {currentLessonData.type === "video" && (
                      <Button>
                        <Play className="mr-2 h-4 w-4" />
                        Play Video
                      </Button>
                    )}
                    {currentLessonData.type === "interactive" && (
                      <Button>
                        <Star className="mr-2 h-4 w-4" />
                        Start Simulation
                      </Button>
                    )}
                    {currentLessonData.type === "article" && (
                      <Button>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Read Article
                      </Button>
                    )}
                    {currentLessonData.type === "checklist" && (
                      <Button>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        View Checklist
                      </Button>
                    )}
                  </div>

                  {/* Navigation */}
                  {/* <div className="flex justify-between items-center pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                      disabled={currentLesson === 0}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button> */}

                    {/* <div className="flex items-center gap-2">
                      {!currentLessonData.completed && (
                        <Button variant="secondary">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Mark Complete
                        </Button>
                      )}
                    </div> */}

                    {/* <Button
                      onClick={() => setCurrentLesson(Math.min(module.lessons.length - 1, currentLesson + 1))}
                      disabled={currentLesson === module.lessons.length - 1}
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
