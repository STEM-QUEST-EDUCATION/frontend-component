"use client"

import { GraduationCap, Compass, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import Image from "next/image"

export default function RoboticsCurriculum() {
  // Removed: const [isMobile, setIsMobile] = useState(false)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const ageCards = [
    {
      ageRange: "6-8",
      foundation: "Simple Powered Machines / Bricq",
      explore: "Lego Spike Essential",
      curious: "Lego Spike Essential+",
      champion: "Lego Spike Prime",
    },
    {
      ageRange: "8-10",
      foundation: "Lego Spike Essential",
      explore: "Lego Spike Prime",
      curious: "Lego Mindstorms",
      champion: "VEX IQ",
    },
    {
      ageRange: "10-12",
      foundation: "Lego Spike Prime",
      explore: "Lego Mindstorms",
      curious: "VEX IQ",
      champion: "Arduino Basics",
    },
    {
      ageRange: "12-14",
      foundation: "VEX IQ",
      explore: "Arduino Basics",
      curious: "Raspberry Pi Projects",
      champion: "VEX EDR",
    },
    {
      ageRange: "14-16",
      foundation: "Arduino Advanced",
      explore: "Raspberry Pi Advanced",
      curious: "VEX EDR",
      champion: "FIRST Tech Challenge",
    },
  ]

  const nextCard = useCallback(() => {
    setDirection("next")
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % ageCards.length)
  }, [ageCards.length])

  const prevCard = useCallback(() => {
    setDirection("prev")
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + ageCards.length) % ageCards.length)
  }, [ageCards.length])

  useEffect(() => {
    const timer = setInterval(() => {
      nextCard()
    }, 5000)

    return () => clearInterval(timer)
  }, [nextCard]) // Added nextCard to dependencies

  // Removed useEffect hook setting isMobile

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextCard()
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [isPaused, nextCard])

  const currentCard = ageCards[currentCardIndex]

  return (
    <div className="relative w-full my-10 overflow-hidden">
      {/* Curved blue background */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20264-HVUccWCAUlKpyfwO40DsuV4y7K633s.svg"
            alt=""
            width={778}
            height={716}
            className="transform -translate-y-[18%] md:-translate-y-[20%] object-cover w-full h-full scale-125 md:scale-150"
            aria-hidden="true"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-6 md:pt-8 relative z-10">
        {/* Title and description */}
        <div className="max-w-2xl mx-auto mb-4 md:mb-6 text-left ml-4 md:ml-12 text-white">
          <h1 className="text-xl xxs:text-lg font-bold mb-2 md:mb-3 mt-0">Robotics Curriculum</h1>
          <p className="text-sm leading-relaxed">
            Robotics is a captivating and dynamic component of STEM learning. It involves the design, construction,
            programming, and operation of robots to perform tasks, solve problems, and explore various fields.
          </p>
        </div>

        {/* Main card container with animation wrapper */}
        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="transition-all duration-300 ease-in-out transform"
            key={currentCardIndex}
            style={{
              animation:
                direction === "next"
                  ? `slideFromRight 0.8s ease-in-out forwards`
                  : `slideFromLeft 0.8s ease-in-out forwards`,
            }}
          >
            {/* Age badge */}
            <div className="absolute -top-3 md:-top-4 right-8 md:right-12 z-20">
              <div className="bg-[#ee728f] text-white font-bold text-sm px-3 md:px-5 py-1 md:py-1.5 rounded-lg shadow-lg">
                Age {currentCard.ageRange}
              </div>
            </div>

            {/* Card content */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-3 md:p-5 pt-6 md:pt-8 mt-4 relative border-2 border-[#00b2ff]">
              {/* Foundation section */}
              <div className="mb-6 md:mb-7">
                <div className="flex items-center bg-[#828282] text-white rounded-tl-lg rounded-tr-lg px-2 md:px-3 py-0.5 w-fit">
                  <GraduationCap className="mr-1 w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-semibold text-sm">Foundation</span>
                </div>
                <div className="bg-[#a4a4a4] text-white rounded-tr-lg rounded-bl-lg rounded-br-lg px-3 md:px-4 py-1 md:py-1.5">
                  <p className="text-sm font-semibold">{currentCard.foundation}</p>
                </div>
              </div>

              {/* Explore section */}
              <div className="mb-6 md:mb-7">
                <div className="flex items-center bg-[#2D9CDB] text-white rounded-tl-lg rounded-tr-lg px-2 md:px-3 py-0.5 w-fit">
                  <Compass className="mr-1 w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-semibold text-sm">Explore</span>
                </div>
                <div className="bg-[#00B2FF] text-white rounded-tr-lg rounded-bl-lg rounded-br-lg px-3 md:px-4 py-1 md:py-1.5">
                  <p className="text-sm font-semibold">{currentCard.explore}</p>
                </div>
              </div>

              {/* Curious section */}
              <div className="mb-6 md:mb-7">
                <div className="flex items-center bg-[#2D9CDB] text-white rounded-tl-lg rounded-tr-lg px-2 md:px-3 py-0.5 w-fit">
                  <HelpCircle className="mr-1 w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-semibold text-sm">Curious</span>
                </div>
                <div className="bg-[#00B2FF] text-white rounded-tr-lg rounded-bl-lg rounded-br-lg px-3 md:px-4 py-1 md:py-1.5">
                  <p className="text-sm font-semibold">{currentCard.curious}</p>
                </div>
              </div>

              {/* Champion section */}
              <div className="">
                <div className="flex items-center bg-[#df2450] text-white rounded-tl-lg rounded-tr-lg px-2 md:px-3 py-0.5 w-fit">
                  <div className="mr-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 md:w-4 md:h-4"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">Champion</span>
                </div>
                <div className="bg-[#ee728f] text-white rounded-tr-lg rounded-bl-lg rounded-br-lg px-3 md:px-4 py-1 md:py-1.5">
                  <p className="text-sm font-semibold">{currentCard.champion}</p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 mt-4 z-50">
                <button
                  className="bg-white rounded-full p-1.5 md:p-2 shadow-[3px_3px_12px_rgba(0,0,0,0.25)]"
                  onClick={prevCard}
                  aria-label="Previous age group"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#092139] stroke-2" />
                </button>
              </div>

              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 mt-4 z-50">
                <button
                  className="bg-white rounded-full p-1.5 md:p-2 shadow-[3px_3px_12px_rgba(0,0,0,0.25)]"
                  onClick={nextCard}
                  aria-label="Next age group"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#092139] stroke-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideFromRight {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideFromLeft {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      {/* Custom CSS for mobile and background */}
      <style jsx>{`
        @media (max-width: 767px) {
          .container {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </div>
  )
}

