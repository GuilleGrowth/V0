"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 w-full z-50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90 border-b border-slate-700">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-14%20at%201.02.18%20PM-yQqnv2p2zaaaw0HRboJOoYf2sFAVXm.png"
                alt="RacketGrowth Logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-2xl font-bold font-heading text-white">RacketGrowth</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white hover:text-teal-400 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium h-11 px-6 rounded-xl">
                Book Strategy Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-teal-400 hover:bg-slate-800/50 h-11 w-11"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-slate-900 border-slate-700">
                <div className="flex flex-col space-y-6 pt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white hover:text-teal-400 transition-colors text-lg font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full h-11">
                      Book Strategy Call
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
