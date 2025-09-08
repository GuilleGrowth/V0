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
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-primary/30 md:from-background/80 md:via-background/60 md:to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 pt-10 md:pt-32">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl leading-tight md:text-6xl font-bold font-heading text-foreground mb-4 sm:mb-6">
              We Grow Racket Clubs with{" "}
              <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent [&]:text-accent">
                AI-Powered Marketing
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl md:max-w-2xl mx-auto md:mx-0">
              Fill courts and boost memberships with AI-powered marketing automation.
            </p>

            <div className="flex flex-col gap-3 justify-center md:justify-start items-center md:items-start md:flex-row md:gap-4 max-w-xs sm:max-w-sm mx-auto md:max-w-none md:mx-0">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium h-11 px-6 rounded-xl w-full sm:w-auto"
                >
                  Book a Free Strategy Call
                </Button>
              </Link>
              <Link href="/case-studies" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground h-11 px-6 rounded-xl bg-background w-full sm:w-auto font-medium"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
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
