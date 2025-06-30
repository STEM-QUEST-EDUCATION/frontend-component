"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "LEGO  Spike  Essential",
    description:
      "LEGO Spike Essential is a robotics kit created by LEGO for educational purposes. This kit has a programmable chip namely STM32 Microcontroller, colour sensor, gyroscope sensor and LED matrix which can also be programed using Scratch Block Coding. Using these robotics kits at GeniusLabs Innovation Centre, students from the age of 6 years can build projects like Animal Alarm, Good Morning Machine, Earthquake Simulator, Life Cycle, Smart AI Bus",
  },
  {
    title: "LEGO  Spike  Prime",
    description:
      "LEGO Spike Prime is a robotics kit created by LEGO for educational purposes. This kit has a programmable chip namely STM32 Microcontroller, colour sensor, pressure sensor, gyroscope sensor which can also be programed using Scratch Block Coding. Using these robotics kits at GeniusLabs Innovation Centre, students from the age of 8  years can build projects like Weather Forecaster, Humanoid, Smart Color Sorter, Smart Robotic Arm",
  },
  {
    title: "LEGO  BricQ Motion Essential",
    description:
      "LEGO BrocQ Essential  is a robotics kit created by LEGO for educational purposes. It has gears, weight bricks, springs, easy-build elements and more.   BricQ Motion Essential  helps foster an understanding of forces, motion, and interactions by providing easy hands-on learning experiences without the need for technology.. Using these robotics kits at GeniusLabs Innovation Centre, students from the age of 5  years can build projects like Free Throw, Weightlifter,Race Car, Hockey Practice",
  },
  {
    title: "LEGO  BricQ Motion Prime",
    description:
      "LEGO BrocQ Prime is a robotics kit created by LEGO for educational purposes. It has gears, wheels, balls, weights and pneumatics, 4 minifigures and more.   BricQ Motion Prime  engages secondary school students in STEAM learning as they experiment with forces, motion and interactions in the context of sports. BricQ Motion Prime provides easy, hands-on learning experiences without the need for technology.. Using these robotics kits at GeniusLabs Innovation Centre, students from the age of 5  years can build projects like Free Kick,Pass the Ball, Strike the Ball.",
  },
  {
    title: "LEGO  Simple and Powered Machines",
    description:
      "LEGO Simple and Powered Machine is a robotics kit created by LEGO for educational purposes. This set contains a brick assortment and curriculum materials for exploring design engineering with more advanced mechanisms, structures, and forces. Use this set with the accompanying curriculum pack to promote students' fundamental STEM understanding of simple and powered machines, structures, and mechanisms.Using these robotics kits at GeniusLabs Innovation Centre, students from the age of 9  years can build projects like types of Simple Machines, Fishing rod, The Hammer.",
  },
  {
    title: "LEGO Robot Inventor",
    description:
      "LEGO Robot Inventor a robotics kit created by LEGO for educational purposes. This kit has a programmable hub that stores up to 20 programs colour sensor, pressure sensor, gyroscope sensor and customizable 5x5 light matrix which can also be programed using Scratch Block Coding and we can also code for RC(Remote control). Using these robotics kits at GeniusLabs Innovation Centre, students from the age of 10  years can build projects like AI Cat, Smart Bowling Robot, Smart Golf Game, Mars Rover",
  },
  {
    title: "Scratch MIT Coding Software",
    description:
      "Scratch, created by the MIT Media Lab, is a block-based coding platform designed for kids aged 8-16. It introduces programming in a fun and interactive way, helping children develop creativity, problem-solving, and logical thinking skills. By designing their own stories, games, and animations, kids learn to think computationally while collaborating and sharing projects with a global community. This hands-on experience lays the foundation for essential digital skills needed in the future. Using this platform at GeniusLabs Innovation Centre, students from the age of 6-14  years can build  Science City Game, Asteroid falling Animation, Balloon Math Game, Hit Wicket Game , Cricket Mania Game",
  },
]

const AUTO_SLIDE_INTERVAL = 5000 // 5 seconds

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState("next")
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setDirection("next")
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 300)

    // Reset timer after slide change
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(nextSlide, AUTO_SLIDE_INTERVAL)
  }, [])

  const resetAutoSlideTimer = useCallback(
    (delay: number = AUTO_SLIDE_INTERVAL) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      timerRef.current = setTimeout(nextSlide, delay)
    },
    [nextSlide],
  )

  const prevSlide = useCallback(() => {
    setDirection("prev")
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 300)
    resetAutoSlideTimer()
  }, [resetAutoSlideTimer])

  useEffect(() => {
    resetAutoSlideTimer()
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [resetAutoSlideTimer])

  return (
    <div className="flex flex-col">
      <div className="p-4">
        <h1 className="font-bold text-base xxs:text-sm text-center text-[#1f5b89]">
          GeniusLabs Workshops Education Partners
        </h1>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-4">
        <style jsx>{`
          @keyframes slideOutLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .slide-out-left {
            animation: slideOutLeft 0.3s forwards;
          }
          .slide-in-right {
            animation: slideInRight 0.3s forwards;
          }
          @keyframes slideOutRight {
            from { transform: translateX(0); }
            to { transform: translateX(100%); }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }
          .slide-out-right {
            animation: slideOutRight 0.3s forwards;
          }
          .slide-in-left {
            animation: slideInLeft 0.3s forwards;
          }
        `}</style>
        <div className="relative h-[200px] rounded-[30px] border-2 border-blue-gl bg-white p-2 pt-8">
          <h1 className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 min-w-fit h-[40px] flex items-center justify-center rounded-full border-2 border-blue-gl bg-white px-4 text-sm xs:text-xs font-bold text-[#1f5b89] overflow-hidden whitespace-nowrap">
            <span
              className={`block w-full text-center transition-all duration-300 ${
                isTransitioning
                  ? direction === "next"
                    ? "slide-out-left"
                    : "slide-out-right"
                  : direction === "next"
                    ? "slide-in-right"
                    : "slide-in-left"
              }`}
            >
              {slides[currentSlide].title}
            </span>
          </h1>
          <div className="flex h-full items-center justify-center overflow-hidden">
            <p
              className={`text-center text-xs text-[#1f5b89] px-2 max-h-[140px] overflow-y-auto transition-all duration-300 ${
                isTransitioning
                  ? direction === "next"
                    ? "slide-out-left"
                    : "slide-out-right"
                  : direction === "next"
                    ? "slide-in-right"
                    : "slide-in-left"
              }`}
            >
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-blue-gl p-2 text-[#143e5e] transition-colors hover:bg-[#143e5e] hover:text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-blue-gl p-2 text-[#143e5e] transition-colors hover:bg-[#143e5e] hover:text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

