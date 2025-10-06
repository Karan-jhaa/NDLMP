"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Phone,
  Search,
  MapPin,
  Clock,
  Plus,
  Edit,
  Trash2,
  Star,
  Building,
  Users,
  Heart,
  Flame,
  Hospital,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const emergencyContacts = [
  {
    id: 1,
    name: "NDRF",
    phone: "011-24363260",
    type: "emergency",
    description: "Earthquake/Flood/Disaster/N.D.R.F",
    icon: Heart,
    priority: "critical",
    available: "24/7",
    category: "Earthquake/Flood/Disaster/N.D.R.F",
  },
  {
    id: 2,
    name: "102",
    phone: "National Ambulance Service (NAS).",
    type: "emergency",
    description: "National Ambulance Service (NAS).",
    icon: Heart,
    priority: "high",
    available: "24/7",
    category: "medical",
  },
  {
    id: 3,
    name: "Police Helpline",
    phone: "100",
    type: "emergency",
    description: "Police Helpline",
    icon: Building,
    priority: "high",
    available: "24/7",
    category: "Police",
  },
  {
    id: 4,
    name: "Fire",
    phone: "101",
    type: "emergency",
    description: "Fire Helpline",
    icon: Heart,
    priority: "high",
    available: "24/7",
    category: "Fire", 
  },
  {
    id: 5,
    name: "Cyber Crime Helpline",
    phone: "1930",
    type: "emergency",
    description: "Cyber Crime Helpline",
    icon: Heart,
    priority: "critical",
    available: "24/7",
    category: "Cyber Crime",
  },
  {
    id: 6,
    name: "Integrated Helpline",
    phone: "112",
    type: "emergency",
    description: "Emergency Response Support System (ERSS)",
    icon: Phone,
    priority: "critical",
    available: "24/7",
    category: "general",
  },
   {
    id: 7,
    name: "Road Accident Helpline",
    phone: "1073",
    type: "emergency",
    description: "Road Accident Helpline",
    icon: Heart,
    priority: "critical",
    available: "24/7",
    category: "Road Accident",
  }, {
    id: 8,
    name: "LPG Leak Helpline",
    phone: "1930",
    type: "emergency",
    description: "LPG Leak Helpline",
    icon: Heart,
    priority: "critical",
    available: "24/7",
    category: "LPG Leak Helpline",
  },
]

const localContacts = [
  {
    id: 9,
    name: "San Francisco General Hospital",
    phone: "(628) 206-8000",
    address: "1001 Potrero Ave, San Francisco, CA 94110",
    type: "hospital",
    description: "Level 1 Trauma Center",
    icon: Hospital,
    priority: "high",
    available: "24/7",
    category: "medical",
    distance: "2.3 miles",
  },
  {
    id: 10,
    name: "SF Fire Department Station 1",
    phone: "(415) 558-3200",
    address: "676 Howard St, San Francisco, CA 94105",
    type: "fire",
    description: "Fire and rescue services",
    icon: Flame,
    priority: "high",
    available: "24/7",
    category: "fire",
    distance: "1.8 miles",
  },
  {
    id: 11,
    name: "SFPD Central Station",
    phone: "(415) 315-2400",
    address: "766 Vallejo St, San Francisco, CA 94133",
    type: "police",
    description: "Police services and emergency response",
    icon: Shield,
    priority: "high",
    available: "24/7",
    category: "police",
    distance: "2.1 miles",
  },
  {
    id: 12,
    name: "SF Emergency Management",
    phone: "(415) 558-2700",
    address: "1011 Turk St, San Francisco, CA 94102",
    type: "emergency-management",
    description: "City emergency coordination",
    icon: Building,
    priority: "medium",
    available: "Business hours",
    category: "government",
    distance: "3.2 miles",
  },
]

const personalContacts = [
  {
    id: 13,
    name: "John Smith (Emergency Contact)",
    phone: "(555) 123-4567",
    relationship: "Spouse",
    type: "personal",
    description: "Primary emergency contact",
    icon: Users,
    priority: "critical",
    category: "family",
  },
  {
    id: 14,
    name: "Sarah Johnson (Backup Contact)",
    phone: "(555) 987-6543",
    relationship: "Sister",
    type: "personal",
    description: "Secondary emergency contact",
    icon: Users,
    priority: "high",
    category: "family",
  },
]

const priorityColors = {
  critical: "bg-destructive text-destructive-foreground",
  high: "bg-yellow-500 text-white",
  medium: "bg-blue-500 text-white",
  low: "bg-muted text-muted-foreground",
}

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const allContacts = [...emergencyContacts, ...localContacts, ...personalContacts]

  const filteredContacts = allContacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)

    const matchesCategory = selectedCategory === "all" || contact.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-950 via-gray-800/90 to-slate-600/70">
      <Navbar />

      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NDLMP</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold text-foreground">Emergency Contacts</h1>
            </div>
            {/* <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                <Edit className="h-4 w-4 mr-2" />
                Manage Contacts
              </Button>
              <Button size="sm" className="bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift">
                <Plus className="h-4 w-4 mr-2" />
                Add Contact
              </Button>
            </div> */}
          </div>
        </div>
      </header>

      {/* <div className="bg-muted/30 border-b border-border pulse-glow"> */}
        {/* <div className="container mx-auto px-4 py-4"> */}
          {/* <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Quick Call:</span>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleCall("911")}
              className="whitespace-nowrap hover-lift"
            >
              <Phone className="h-4 w-4 mr-2" />
              911 Emergency
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCall("1-800-222-1222")}
              className="whitespace-nowrap bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift"
            >
              <Heart className="h-4 w-4 mr-2" />
              Poison Control
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCall("988")}
              className="whitespace-nowrap bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift"
            >
              <Heart className="h-4 w-4 mr-2" />
              Crisis Lifeline
            </Button>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Search and Filters */}
          <div className="lg:col-span-1 slide-up">
            <Card className="mb-6 interactive-card glow-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="all">Earthquake/Flood/Disaster/N.D.R.F</option>
                    <option value="general">General</option>
                    <option value="medical">Medical</option>
                    <option value="Fire">Fire</option>
                    <option value="Police">Police</option>
                    <option value="Road Accident">Road Accident</option>
                    <option value="family">Family</option>
                    <option value="Cyber Crime">Cyber Crime</option>
                    <option value="LPG Leak Helpline">LPG Leak Helpline</option>
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
                <div className="text-sm text-muted-foreground mb-3">India</div>
                <p className="text-xs text-muted-foreground mb-3">Contacts are sorted by proximity to your location.</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent hover-lift">
                  Update Location
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 scale-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white-foreground mb-2">Emergency Contacts</h2>
              <p className="text-white-foreground">
                Quick access to emergency services, local contacts, and personal emergency contacts.
              </p>
            </div>

            <Tabs defaultValue="emergency" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="emergency">Emergency Services</TabsTrigger>
                {/* <TabsTrigger value="local">Local Services</TabsTrigger> */}
                {/* <TabsTrigger value="personal">Personal Contacts</TabsTrigger> */}
              </TabsList>

              <TabsContent value="emergency" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredContacts
                    .filter((contact) => contact.type === "emergency")
                    .map((contact) => (
                      <Card key={contact.id} className="interactive-card">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                                <contact.icon className="h-6 w-6 text-destructive" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{contact.name}</CardTitle>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge className={priorityColors[contact.priority]}>{contact.priority}</Badge>
                                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {contact.available}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <CardDescription>{contact.description}</CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="space-y-4">
                            <div className="text-2xl font-bold text-foreground">{contact.phone}</div>

                            <div className="flex gap-2">
                              <Button className="flex-1 bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition hover-lift border hover-lift" onClick={() => handleCall(contact.phone)}>
                                <Phone className="h-4 w-4 mr-2" />
                                Call Now
                              </Button>
                              <Button variant="outline" size="icon" className="hover-lift bg-transparent">
                                <Star className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="local" className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {filteredContacts
                    .filter((contact) => contact.type === "local")
                    .map((contact) => (
                      <Card key={contact.id} className="interactive-card">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <contact.icon className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{contact.name}</CardTitle>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge className={priorityColors[contact.priority]}>{contact.priority}</Badge>
                                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {contact.available}
                                  </div>
                                  {contact.distance && (
                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                      <MapPin className="h-3 w-3" />
                                      {contact.distance}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <CardDescription>{contact.description}</CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="text-xl font-bold text-foreground mb-1">{contact.phone}</div>
                              {contact.address && (
                                <div className="text-sm text-muted-foreground flex items-start gap-1">
                                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                  {contact.address}
                                </div>
                              )}
                            </div>

                            <div className="flex gap-2">
                              <Button className="flex-1 hover-lift" onClick={() => handleCall(contact.phone)}>
                                <Phone className="h-4 w-4 mr-2" />
                                Call
                              </Button>
                              <Button variant="outline">
                                <MapPin className="h-4 w-4 mr-2" />
                                Directions
                              </Button>
                              <Button variant="outline" size="icon" className="hover-lift bg-transparent">
                                <Star className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredContacts
                    .filter((contact) => contact.type === "personal")
                    .map((contact) => (
                      <Card key={contact.id} className="interactive-card">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                                <contact.icon className="h-6 w-6 text-secondary" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{contact.name}</CardTitle>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge className={priorityColors[contact.priority]}>{contact.priority}</Badge>
                                  <div className="text-xs text-muted-foreground">{contact.relationship}</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              <Button variant="outline" size="icon" className="hover-lift bg-transparent">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon" className="hover-lift bg-transparent">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <CardDescription>{contact.description}</CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="space-y-4">
                            <div className="text-xl font-bold text-foreground">{contact.phone}</div>

                            <div className="flex gap-2">
                              <Button className="flex-1 hover-lift" onClick={() => handleCall(contact.phone)}>
                                <Phone className="h-4 w-4 mr-2" />
                                Call
                              </Button>
                              <Button variant="outline" size="icon" className="hover-lift bg-transparent">
                                <Star className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>

                {filteredContacts.filter((contact) => contact.type === "personal").length === 0 && (
                  <Card>
                    <CardContent className="text-center py-12">
                      <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">No personal contacts</h3>
                      <p className="text-muted-foreground mb-4">
                        Add your emergency contacts to have them readily available during emergencies.
                      </p>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Emergency Contact
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
