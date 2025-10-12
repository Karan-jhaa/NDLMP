"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Users, BookOpen, Trophy, Bell, Phone, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react";

  const images = [
    "/12311.png",
    "/12312.png",
    "/1235.jpg",
    "/1236.jpg",
    "/12313.png"
  ];

export default function HomePage() {
 const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); // 1 second interval
    return () => clearInterval(interval);
  })
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-gray-950 via-gray-800/90 to-slate-600/70">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 slide-up bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div className="container mx-auto text-center ">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white-foreground mb-6 text-balance">Be Prepared. Stay Safe. Act Fast.</h2>
            <p className="text-xl text-gray-700-foreground mb-8 text-pretty">
              Interactive disaster education platform that combines gamified learning, real-time alerts, and virtual
              drills to keep your community prepared for any emergency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn">
                <Button size="lg" className="text-lg px-8 py-3 rounded-lg bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Learning
                </Button>
              </Link>
              <Link href="/alerts">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 rounded-lg bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Check Alerts
                </Button>

              </Link>
              <Link href="/drills">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-3 rounded-lg bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                  <Users className="mr-2 h-5 w-5" />
                  Join a Drill
                </Button>
              </Link>
              <Link href="/contacts">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-3 rounded-lg bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                  <Users className="mr-2 h-5 w-5" />
                  Contacts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Tiles */}
      <section className="py-16 px-4 bg-muted/30 fade-in">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900foreground">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/learn">
              <Card className="interactive-card cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Interactive Modules</CardTitle>
                  <CardDescription>Engaging multimedia lessons on disaster preparedness</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/alerts">
              <Card className="interactive-card cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                    <Bell className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle>Latest Alerts</CardTitle>
                  <CardDescription>Real-time disaster alerts for your region</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/contacts">
              <Card className="interactive-card cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Emergency Contacts</CardTitle>
                  <CardDescription>Quick access to emergency services and contacts</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/dashboard">
              <Card className="interactive-card cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Leaderboard</CardTitle>
                  <CardDescription>See top performers and earn achievements</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 scale-in">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white-foreground mb-4">Comprehensive Disaster Preparedness</h3>
            <p className="text-lg text-muted-gray-200-foreground max-w-2xl mx-auto">
              Our platform combines education, real-time information, and practical training to ensure everyone is
              prepared.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white-foreground mb-2">Interactive Learning Modules</h4>
                  <p className="text-muted-gray-200-foreground">
                    Multimedia content including videos, quizzes, and AR/VR simulations to make learning engaging and
                    memorable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white-foreground mb-2">Real-Time Alerts</h4>
                  <p className="text-muted-gray-200-foreground">
                    Location-based disaster alerts with push notifications, SMS, and email to keep you informed
                    instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white-foreground mb-2">Virtual Drills</h4>
                  <p className="text-muted-gray-200-foreground">
                    Scheduled mock drills with real-time participation tracking and post-drill feedback for continuous
                    improvement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white-foreground mb-2">Analytics Dashboard</h4>
                  <p className="text-muted-gray-200-foreground">
                    Comprehensive tracking of preparedness scores, drill participation, and progress reports for
                    administrators.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white-foreground mb-4">Gamified Experience</h4>
                <p className="text-muted-gray-200foreground mb-6">
                  Earn points, unlock badges, and compete on leaderboards while learning life-saving skills.
                </p>
                <div className="flex flex-wrap gap-2 text-gray-200 justify-center">
                  <Badge variant="outline">Points System</Badge>
                  <Badge variant="outline">Achievement Badges</Badge>
                  <Badge variant="outline">Leaderboards</Badge>
                  <Badge variant="outline">Progress Tracking</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-16 px-4 bg-muted/30 fade-in">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900foreground mb-4">Built for Everyone</h3>
            <p className="text-lg text-muted-gray-700foreground">
              Tailored experiences for students, educators, and administrators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Students & General Users</CardTitle>
                <CardDescription>Learn & Participate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access interactive modules, participate in virtual drills, and track your progress through gamified
                  learning experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Teachers & Parents</CardTitle>
                <CardDescription>Track & Guide</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor student progress, organize group activities, and access resources to guide learning at home or
                  in the classroom.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Administrators</CardTitle>
                <CardDescription>Dashboard & Reports</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access comprehensive analytics, generate reports, and track preparedness scores across your
                  organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 slide-up">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-white-foreground mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-muted-gray-200-foreground mb-8">
              Join thousands of users who are already better prepared for emergencies through our interactive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button size="lg" className="text-lg px-8 py-3 rounded-lg bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                  Start Learning Today
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 rounded-lg bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                   Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
