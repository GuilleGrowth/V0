"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const clubTypes = [
  {
    title: "Fitness Clubs",
    icon: "💪",
  },
  {
    title: "Wellness Clubs",
    icon: "🧘",
  },
  {
    title: "Social Clubs",
    icon: "🎾",
  },
]

export function ClubTypesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clubTypes.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clubTypes.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clubTypes.length)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
          aria-label="Previous club type"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
          aria-label="Next club type"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        {/* Carousel Content */}
        <div className="text-center px-8">
          <div className="text-4xl mb-3">{clubTypes[currentIndex].icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{clubTypes[currentIndex].title}</h3>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {clubTypes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-accent" : "bg-white/40"
              }`}
              aria-label={`Go to ${clubTypes[index].title}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
