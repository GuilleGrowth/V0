import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ClubTypesCarousel } from "./club-types-carousel"

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
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-primary/35 md:from-background/85 md:via-background/65 md:to-primary/25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center md:text-left max-w-2xl mb-8">
            <h1 className="text-4xl leading-tight md:text-6xl font-bold font-heading text-foreground mb-2 sm:mb-3">
              We Grow Membership Clubs with{" "}
              <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent [&]:text-accent">
                AI-Powered Marketing
              </span>
            </h1>

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

          <div className="flex justify-center md:justify-start mb-8 mt-32">
            <ClubTypesCarousel />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
