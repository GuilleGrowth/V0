import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/passionate-racket-sports-players-celebrating-with-.jpg"
          alt="Happy racket sports players celebrating with passion and joy on court"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-primary/20 sm:from-background/60 sm:via-background/40 sm:to-primary/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 pt-10 md:pt-32">
        <h1 className="text-3xl leading-tight md:text-5xl font-bold font-heading text-foreground mb-4 sm:mb-6">
          We Grow Racket Clubs with{" "}
          <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent [&]:text-accent">
            AI-Powered Marketing
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
          Fill courts and boost memberships with AI-powered marketing automation.
        </p>

        <div className="flex flex-col gap-3 justify-center items-center md:flex-row md:gap-4 max-w-xs sm:max-w-sm mx-auto md:max-w-none">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-10 sm:h-11 px-4 sm:px-5 rounded-xl w-full sm:w-auto text-sm sm:text-base"
            >
              Book a Free Strategy Call
            </Button>
          </Link>
          <Link href="/case-studies" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground h-10 sm:h-11 px-4 sm:px-5 rounded-xl bg-background w-full sm:w-auto font-semibold text-sm sm:text-base"
            >
              View Case Studies
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile to save space */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
