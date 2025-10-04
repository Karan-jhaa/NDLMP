import { Shield, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border  bg-gradient-to-tr from-gray-950 via-gray-800/90 to-slate-600/70 py-12 px-4 page-transition">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-white" />
              <span className="text-lg font-bold text-white-foreground">NDLMP</span>
            </div>
            <p className="text-muted-gray-700-foreground mb-4">
              Empowering communities through interactive disaster preparedness education.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-gray-700-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@ndlmp.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-NDLMP-HELP</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Emergency Response Center</span>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <h4 className="font-semibold text-white-foreground mb-4">Platform</h4>
            <ul className="space-y-2 text-muted-gray-700-foreground">
              <li>
                <Link href="/learn" className="hover:text-primary transition-colors duration-200">
                  Interactive Modules
                </Link>
              </li>
              <li>
                <Link href="/alerts" className="hover:text-primary transition-colors duration-200">
                  Real-time Alerts
                </Link>
              </li>
              <li>
                <Link href="/drills" className="hover:text-primary transition-colors duration-200">
                  Virtual Drills
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary transition-colors duration-200">
                  Analytics Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div className="fade-in">
            <h4 className="font-semibold text-white-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-gray-700-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-200">
                  About NDLMP
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-primary transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
                  Privacy & Safety
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-200">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="fade-in">
            <h4 className="font-semibold text-white-foreground mb-4">Emergency</h4>
            <ul className="space-y-2 text-muted-gray-700-foreground">
              <li>
                <Link href="/contacts" className="hover:text-destructive transition-colors duration-200">
                  Emergency Contacts
                </Link>
              </li>
              <li>
                <Link href="/alerts" className="hover:text-destructive transition-colors duration-200">
                  Current Alerts
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-primary transition-colors duration-200">
                  Quick Response Guides
                </Link>
              </li>
              <li>
                <Link href="/evacuation" className="hover:text-primary transition-colors duration-200">
                  Evacuation Routes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-gray-700-foreground fade-in">
          <p>&copy; 2024 NDLMP. All rights reserved. Built for community safety and preparedness.</p>
          <p className="text-xs mt-2">In case of immediate emergency, call 911 or your local emergency services.</p>
        </div>
      </div>
    </footer>
  )
}
