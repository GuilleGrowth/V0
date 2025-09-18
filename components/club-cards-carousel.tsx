"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const clubTypes = [
  {
    id: "fitness",
    title: "Fitness Clubs",
    subtitle: "Turn free trials into loyal, long-term members.",
    emoji: "💪",
  },
  {
    id: "wellness",
    title: "Wellness Clubs",
    subtitle: "Grow recurring memberships for yoga, pilates, and holistic health.",
    emoji: "🌿",
  },
  {
    id: "social",
    title: "Social Clubs",
    subtitle: "Attract new members and build vibrant communities.",
    emoji: "🤝",
  },
]

export function ClubCardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % clubTypes.length)
      }, 2000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + clubTypes.length) % clubTypes.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clubTypes.length)
  }

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-6">
          <p className="text-sm text-white/80 font-medium tracking-wide">Membership industries we serve</p>
        </div>

        {/* Carousel Container */}
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              {clubTypes.map((club, index) => (
                <div
                  key={club.id}
                  className={`
                    absolute inset-0 group overflow-hidden rounded-[20px] p-8 text-center
                    bg-white/20 backdrop-blur-[16px] backdrop-saturate-[1.6]
                    border border-white/30 shadow-[0_15px_35px_rgba(0,0,0,0.4)]
                    transition-all duration-500 ease-in-out
                    ${
                      index === currentIndex
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 translate-x-8 scale-95 pointer-events-none"
                    }
                  `}
                >
                  <div className="text-[60px] mb-6 transition-all duration-300 group-hover:text-accent group-hover:scale-110">
                    {club.emoji}
                  </div>

                  <h3 className="text-xl font-bold text-white drop-shadow-lg mb-4 transition-opacity duration-300">
                    {club.title}
                  </h3>

                  <p className="text-base text-white/95 drop-shadow-md leading-relaxed transition-opacity duration-300">
                    {club.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 hidden lg:flex
                     w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                     hover:bg-white/20 hover:border-white/30 text-white/80 hover:text-white
                     transition-all duration-300"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 hidden lg:flex
                     w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                     hover:bg-white/20 hover:border-white/30 text-white/80 hover:text-white
                     transition-all duration-300"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {clubTypes.map((_, index) => (
            <button
              key={index}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === currentIndex ? "bg-accent w-6" : "bg-white/40 hover:bg-white/60"}
              `}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
