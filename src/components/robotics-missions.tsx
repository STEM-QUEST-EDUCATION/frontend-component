"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function RoboticsMissions() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const cardWidth = 220 // card width + gap (reduced from 280)
    const totalWidth = cardWidth * 4 // 4 cards

    const autoScroll = setInterval(() => {
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })

      scrollAmount += cardWidth

      // Reset when reaching the end
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0
      }
    }, 3000) // Scroll every 3 seconds

    return () => clearInterval(autoScroll)
  }, [])

  const scrollbarHideStyle = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`
  return (
    <div className="max-w-md mx-auto pl-4 py-6">
      <style jsx>{scrollbarHideStyle}</style>
      <h1 className="text-[#00b2ff] text-lg xxs:text-base font-bold mb-6">Robotics Missions</h1>

      <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-4 pr-4 snap-x scrollbar-hide">
        {/* Mission 1 */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#00b2ff] bg-white flex-shrink-0 w-[220px] snap-center shadow-lg">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Children working on a robotics assembly line project"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <h2 className="text-[#00b2ff] text-base font-bold mb-1">1. Assembly Line</h2>
            <p className="text-[#4f4f4f] text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
        </div>

        {/* Mission 2 */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#00b2ff] bg-white flex-shrink-0 w-[220px] snap-center shadow-lg">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Children working on a robotics accessibility project"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <h2 className="text-[#00b2ff] text-base font-bold mb-1">2. Accessibility</h2>
            <p className="text-[#4f4f4f] text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
        </div>

        {/* Mission 3 */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#00b2ff] bg-white flex-shrink-0 w-[220px] snap-center shadow-lg">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Children working on a robotics programming project"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <h2 className="text-[#00b2ff] text-base font-bold mb-1">3. Programming</h2>
            <p className="text-[#4f4f4f] text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
        </div>

        {/* Mission 4 */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#00b2ff] bg-white flex-shrink-0 w-[220px] snap-center shadow-lg">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Children working on a robotics innovation project"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <h2 className="text-[#00b2ff] text-base font-bold mb-1">4. Innovation</h2>
            <p className="text-[#4f4f4f] text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  )
}

