"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Shield, Menu, Bell, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Learn", href: "/learn" },
  { name: "Alerts", href: "/alerts" },
  { name: "Drills", href: "/drills" },
  { name: "Contacts", href: "/contacts" },
  { name: "Dashboard", href: "/dashboard" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className="border-b border-white/20 sticky top-0 z-50 page-transition shadow-lg"
      style={{
        background: "gradient-to-r from-amber-500 to-orange-700",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover-lift">
            <Shield className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">NDLMP</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors duration-200 hover:text-white/90 ${
                  pathname === item.href ? "text-white border-b-2  pb-1" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* <Button
              variant="ghost"
              size="sm"
              className="relative hover-lift hover:bg-white/10 text-white hover:text-white"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                <span className="sr-only">New notifications</span>
              </span>
            </Button> */}

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Link href="/signin">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover-lift border-white/30 text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/get-started">
                <Button size="sm" className="hover-lift bg-white text-blue-900 hover:bg-white/90">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="hover:bg-white/10 text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-white" />
                    <span className="text-lg font-bold text-white">NDLMP</span>
                  </div>

                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-medium transition-colors duration-200 hover:text-white/90 p-2 rounded-md ${
                          pathname === item.href ? "text-white bg-white/10" : "text-white/70 hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="flex flex-col gap-2 pt-4 border-t">
                    <Link href="/signin" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-white/30 text-white hover:bg-white hover:text-blue-900 bg-transparent"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/get-started" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-white text-blue-900 hover:bg-white/90">Get Started</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
