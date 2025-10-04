"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, User, Mail, Lock, MapPin, Users, GraduationCap } from "lucide-react"
import Link from "next/link"
import { supabase } from "../../lib/supabase"    // ✅ import supabase client

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    organization: "",
    location: "",
    agreeToTerms: false,
    subscribeToAlerts: true,
  })

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // ✅ handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match")
      return
    }
    if (!formData.agreeToTerms) {
      setErrorMsg("You must agree to the Terms to continue")
      return
    }

    setLoading(true)

    try {
      // 1. Create auth user
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })

      if (error) throw error

      // 2. Get the authenticated user (needed for RLS)
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()
      if (userError) throw userError

      // 3. Insert profile details linked to user.id
      if (user) {
        const { error: insertError } = await supabase.from("user_details").insert([
          {
            id: user.id, // 👈 must match authenticated user id
            first_name: formData.firstName,
            last_name: formData.lastName,
            role: formData.role,
            organization: formData.organization,
            location: formData.location,
            subscribed: formData.subscribeToAlerts,
          },
        ])
        if (insertError) throw insertError
      }

      // redirect or success message
      window.location.href = "/signin"
    } catch (err: any) {
      setErrorMsg(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-950 via-gray-800/90 to-slate-600/70 bg-[url('/12310.jpg')] bg-cover bg-center bg-no-repeat">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 slide-up">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white-foreground mb-2">Join NDLMP</h1>
            <p className="text-white-foreground">
              Start your disaster preparedness journey today and help build a safer community
            </p>
          </div>

          {/* ✅ wrap card in form */}
          <form onSubmit={handleSubmit}>
            <Card className="scale-in interactive-card">
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
                <CardDescription>Fill out the form below to get started with NDLMP</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          Student
                        </div>
                      </SelectItem>
                      <SelectItem value="teacher">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Teacher/Educator
                        </div>
                      </SelectItem>
                      <SelectItem value="parent">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Parent/Guardian
                        </div>
                      </SelectItem>
                      <SelectItem value="administrator">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          School Administrator
                        </div>
                      </SelectItem>
                      <SelectItem value="emergency">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          Emergency Professional
                        </div>
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="organization"
                        placeholder="School, Company, etc."
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="location"
                        placeholder="City, State"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm">
                      I agree to the{" "}
                      <Link href="/terms" className="text-black hover:text-primary/80 transition-colors">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="subscribeToAlerts"
                      checked={formData.subscribeToAlerts}
                      onCheckedChange={(checked) => setFormData({ ...formData, subscribeToAlerts: checked as boolean })}
                    />
                    <Label htmlFor="subscribeToAlerts" className="text-sm">
                      Subscribe to emergency alerts and safety notifications for my area
                    </Label>
                  </div>
                </div>

                {/* ✅ button now submits form */}
                <Button
                  type="submit"
                  className="w-full bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition border hover-lift"
                  size="lg"
                  disabled={!formData.agreeToTerms || loading}
                >
                  {loading ? "Creating..." : "Create Account"}
                </Button>

                {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/signin" className="text-black hover:text-primary/80 transition-colors">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
