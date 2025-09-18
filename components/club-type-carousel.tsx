"use client"

import { useState, useEffect } from "react"

const clubTypes = ["fitness clubs", "wellness clubs", "social clubs"]

export function ClubTypeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clubTypes.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block min-w-[140px] text-left">
      <span key={currentIndex} className="inline-block animate-in fade-in-0 duration-500">
        {clubTypes[currentIndex]}
      </span>
    </span>
  )
}
