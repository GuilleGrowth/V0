"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const slidingTexts = ["Fitness Clubs", "Health Clubs", "Social Clubs"]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % slidingTexts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/passionate-racket-sports-players-celebrating-with-.jpg"
          alt="Happy membership club members celebrating with passion and joy on court"
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
            <div className="mb-4 flex justify-center md:justify-start">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20">
                ONLY FOR MEMBERSHIP CLUBS
              </span>
            </div>

            <h1 className="text-4xl leading-tight md:text-6xl font-bold font-heading text-foreground mb-2 sm:mb-3">
              We Grow{" "}
              <span className="inline-block min-w-[320px] md:min-w-[380px] text-left whitespace-nowrap ml-6 md:ml-0">
                <span
                  key={currentTextIndex}
                  className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent [&]:text-accent animate-in slide-in-from-bottom-2 duration-500"
                >
                  {slidingTexts[currentTextIndex]}
                </span>
              </span>{" "}
              with AI-Powered Marketing
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
