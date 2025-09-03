import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90 border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-14%20at%201.02.18%20PM-yQqnv2p2zaaaw0HRboJOoYf2sFAVXm.png"
                alt="RacketGrowth Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold font-heading text-white">RacketGrowth</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-white hover:text-teal-400 transition-colors">
                Services
              </Link>
              <Link href="/case-studies" className="text-white hover:text-teal-400 transition-colors">
                Case Studies
              </Link>
              <Link href="/about" className="text-white hover:text-teal-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-teal-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Book Strategy Call
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
