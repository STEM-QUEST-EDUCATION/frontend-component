"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect, useCallback } from "react"

export interface ProjectItem {
  id: number
  name: string
  role: string
  image: string
  accentColor: string
  linkText: string
  linkUrl: string
}

interface ExploreProjectProps {
  title: string
  items: ProjectItem[]
}

export default function ExploreProject({ title, items }: ExploreProjectProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Function to scroll to the next card
  const scrollToNext = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current

      // Update current index - increment by 1 to cycle through all cards
      const newIndex = (currentIndex + 1) % items.length
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
  }, [currentIndex, items.length])

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
    <div className="w-full py-6 pl-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#092139] text-lg xxs:text-base font-bold">{title}</h1>
      </div>

      <div className="relative w-full overflow-hidden">
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto snap-x no-scrollbar pb-4 pr-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-card flex-shrink-0 w-[calc(60%-8px)] min-w-[260px] snap-start rounded-xl overflow-hidden shadow-lg border ${
                isActiveCard(index) ? "border-[#00b2ff] border-2" : "border-transparent"
              }`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-3 bg-white">
                <h2 className="text-lg xxs:text-base font-bold mb-0.5" style={{ color: item.accentColor }}>
                  {item.name}
                </h2>
                <p className="text-gray-700 text-sm mb-2">{item.role}</p>
                <Link
                  href={item.linkUrl}
                  className="inline-block py-1.5 px-5 rounded-lg text-white text-sm font-medium"
                  style={{ backgroundColor: item.accentColor }}
                >
                  {item.linkText}
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

