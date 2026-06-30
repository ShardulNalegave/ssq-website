import { Link } from '@tanstack/react-router'
import { Mail, Phone } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-xl font-semibold tracking-tight text-foreground">
                SwiftSynQ
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Tailored self-hosted server setups for people &amp; enterprises. Your data
              stays with you, without compromising on convenience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/servers" className="text-sm text-muted-foreground">
                  Server Models
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="tel:+918007997380"
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 80079 97380
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} SwiftSynQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
