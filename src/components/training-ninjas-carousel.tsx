"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect, useCallback } from "react"

interface Expert {
  id: number
  name: string
  role: string
  image: string
  accentColor: string
}

export default function TrainingNinjasCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Sample experts data
  const experts: Expert[] = [
    {
      id: 1,
      name: "Simran Kapoor",
      role: "All-Rounder STEM Expert",
      image: "/placeholder.svg?height=400&width=300",
      accentColor: "#00b2ff", // Blue accent
    },
    {
      id: 2,
      name: "Sushant Yadav",
      role: "All-Rounder STEM Expert",
      image: "/placeholder.svg?height=400&width=300",
      accentColor: "#ee728f", // Pink accent
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Robotics Specialist",
      image: "/placeholder.svg?height=400&width=300",
      accentColor: "#00b2ff", // Blue accent
    },
    {
      id: 4,
      name: "Rahul Mehta",
      role: "Computer Science Expert",
      image: "/placeholder.svg?height=400&width=300",
      accentColor: "#ee728f", // Pink accent
    },
  ]

  // Function to scroll to the next card
  const scrollToNext = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current

      // Update current index - increment by 1 to cycle through all cards
      const newIndex = (currentIndex + 1) % experts.length
      setCurrentIndex(newIndex)

      // Get all card elements
      const cards = container.querySelectorAll(".carousel-card")
      if (cards.length > newIndex) {
        // Get the active card element
        const activeCard = cards[newIndex] as HTMLElement

        // Scroll the active card to the left side of the viewport
        container.scrollTo({
          left: activeCard.offsetLeft,
          behavior: "smooth",
        })
      }
    }
  }, [currentIndex, experts.length])

  // Set up auto-carousel
  useEffect(() => {
    autoPlayIntervalRef.current = setInterval(() => {
      scrollToNext()
    }, 2000) // Reduced interval to see the changes more quickly

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
      }
    }
  }, [scrollToNext])

  // Check if a card is active based on its index
  const isActiveCard = (index: number) => {
    return index === currentIndex
  }

  return (
    <div className="w-full py-6 pl-6 rounded-xl ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#092139] text-lg xxs:text-base font-bold">Meet Our Training Ninjas</h1>
        <button className="bg-[#092139] text-white p-2 mr-4 rounded-full" onClick={scrollToNext} aria-label="Next experts">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative w-full overflow-hidden">
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto snap-x no-scrollbar pb-4 pr-6">
          {experts.map((expert, index) => (
            <div
              key={expert.id}
              className={`carousel-card flex-shrink-0 w-[calc(50%-8px)] min-w-[250px] snap-start rounded-xl overflow-hidden shadow-lg border ${
                isActiveCard(index) ? "border-[#00b2ff] border-2" : "border-transparent"
              }`}
            >
              <div className="relative aspect-[5/4] w-full">
                <Image src={expert.image || "/placeholder.svg"} alt={expert.name} fill className="object-cover" />
              </div>
              <div className="p-5 bg-white">
                <h2 className="text-lg xxs:text-base font-bold mb-1" style={{ color: expert.accentColor }}>
                  {expert.name}
                </h2>
                <p className="text-gray-700 text-sm mb-4">{expert.role}</p>
                <Link
                  href="#"
                  className="inline-block py-2 px-6 rounded-lg text-white text-sm font-medium"
                  style={{ backgroundColor: expert.accentColor }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  )
}

