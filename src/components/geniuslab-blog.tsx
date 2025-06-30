"use client"

import { ChevronRight, Megaphone, Crown, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect, useCallback } from "react"

export default function GeniuslabBlog() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [likedPosts, setLikedPosts] = useState<boolean[]>([false, false, false, false])
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Use useCallback to memoize the scrollToNextCard function
  const scrollToNextCard = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cards = container.querySelectorAll('[class*="snap-start"]')

      if (cards.length === 0) return

      // Get the current scroll position
      const currentScrollLeft = container.scrollLeft

      // Check if we're near the end of the scroll container
      const isNearEnd = currentScrollLeft + container.clientWidth + 20 >= container.scrollWidth

      // If we're near the end, loop back to the beginning
      if (isNearEnd) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        })
        return
      }

      // Find the next card to scroll to
      let nextCardIndex = 0
      let foundNext = false

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement
        const cardLeftPosition = card.offsetLeft

        // If this card is just after the current scroll position, it's our target
        if (cardLeftPosition > currentScrollLeft + 10) {
          nextCardIndex = i
          foundNext = true
          break
        }
      }

      // If we didn't find a next card, go back to the first
      if (!foundNext) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        })
      } else {
        // Scroll to the next card
        const nextCard = cards[nextCardIndex] as HTMLElement
        container.scrollTo({
          left: nextCard.offsetLeft,
          behavior: "smooth",
        })
      }
    }
  }, [])

  const toggleLike = (index: number) => {
    const newLikedPosts = [...likedPosts]
    newLikedPosts[index] = !newLikedPosts[index]
    setLikedPosts(newLikedPosts)
  }

  // Set up auto-carousel that always plays
  useEffect(() => {
    // Start auto-scrolling with a 3-second interval
    autoPlayIntervalRef.current = setInterval(() => {
      scrollToNextCard()
    }, 3000)

    // Clean up the interval when component unmounts
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
      }
    }
  }, [scrollToNextCard])

  return (
    <div className="max-w-md mx-auto p-4 font-sans text-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#092139] text-lg xxs:text-base font-bold">GENIUSLAB Blog</h1>
        <button
          className="bg-[#092139] text-white p-2 rounded-full"
          onClick={scrollToNextCard}
          aria-label="Scroll to next card"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-[#00b2ff] rounded-lg p-3 flex flex-col items-center justify-center text-white h-24 w-full shadow-md">
          <Megaphone className="w-8 h-8 mb-1" />
          <div className="text-center">
            <div className="font-bold text-xs">Latest</div>
            <div className="font-bold text-xs">Updates</div>
          </div>
        </div>

        <div className="bg-[#ee728f] rounded-lg p-3 flex flex-col items-center justify-center text-white h-24 w-full shadow-md">
          <Crown className="w-8 h-8 mb-1" />
          <div className="text-center">
            <div className="font-bold text-xs">STEM</div>
            <div className="font-bold text-xs">Legends</div>
          </div>
        </div>

        <div className="bg-[#ffd41f] rounded-lg p-3 flex flex-col items-center justify-center text-black h-24 w-full shadow-md overflow-visible relative">
          <Star className="w-7 h-7 mb-1 fill-black stroke-black flex-shrink-0 z-10" />
          <div className="text-center">
            <div className="font-bold text-xs">Post of the</div>
            <div className="font-bold text-xs">Month</div>
          </div>
        </div>
      </div>

      {/* Blog Post Cards */}
      <div className="relative w-full overflow-hidden">
        <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 pb-4 pl-0 snap-x no-scrollbar">
          {/* First Blog Post */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#f2f2f2] flex-shrink-0 w-[220px] snap-start first:ml-0 flex flex-col">
            <div className="relative">
              <div className="bg-[#ff6b00] h-40 relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Winner of STEM Competition"
                  width={400}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <button
                  className="absolute top-3 right-3 text-white transition-all duration-300"
                  onClick={() => toggleLike(0)}
                  aria-label={likedPosts[0] ? "Unlike post" : "Like post"}
                >
                  <Star className={`w-5 h-5 ${likedPosts[0] ? "fill-yellow-400 stroke-yellow-400" : "stroke-white"}`} />
                </button>
              </div>
            </div>
            <div className="p-3 bg-white flex-grow flex flex-col min-h-[200px]">
              <h2 className="text-[#00b2ff] text-base font-bold mb-1">Winner of the Annual STEM Competition</h2>
              <p className="text-[#4f4f4f] text-xs mb-3">
                With 4 Teams competing on a high pressure short time tasks only one was crowned as the winner of the
                Annual STEM Competition.
              </p>
              <div className="mt-auto">
                <Link href="#" className="inline-block bg-[#00b2ff] text-white font-bold py-1 px-3 rounded-lg text-xs">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Second Blog Post */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#f2f2f2] flex-shrink-0 w-[220px] snap-start flex flex-col">
            <div className="relative">
              <div className="bg-purple-700 h-40 relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="STEM Exercises"
                  width={400}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <button
                  className="absolute top-3 right-3 text-white transition-all duration-300"
                  onClick={() => toggleLike(1)}
                  aria-label={likedPosts[1] ? "Unlike post" : "Like post"}
                >
                  <Star className={`w-5 h-5 ${likedPosts[1] ? "fill-yellow-400 stroke-yellow-400" : "stroke-white"}`} />
                </button>
              </div>
            </div>
            <div className="p-3 bg-white flex-grow flex flex-col min-h-[200px]">
              <h2 className="text-[#00b2ff] text-base font-bold mb-1">Top 5 Best STEM Exercises</h2>
              <p className="text-[#4f4f4f] text-xs mb-3">
                Discover the top 5 STEM exercises that will help students develop critical thinking and problem-solving
                skills through hands-on activities.
              </p>
              <div className="mt-auto">
                <Link href="#" className="inline-block bg-[#00b2ff] text-white font-bold py-1 px-3 rounded-lg text-xs">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Third Blog Post */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#f2f2f2] flex-shrink-0 w-[220px] snap-start flex flex-col">
            <div className="relative">
              <div className="bg-green-600 h-40 relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Science Fair Projects"
                  width={400}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <button
                  className="absolute top-3 right-3 text-white transition-all duration-300"
                  onClick={() => toggleLike(2)}
                  aria-label={likedPosts[2] ? "Unlike post" : "Like post"}
                >
                  <Star className={`w-5 h-5 ${likedPosts[2] ? "fill-yellow-400 stroke-yellow-400" : "stroke-white"}`} />
                </button>
              </div>
            </div>
            <div className="p-3 bg-white flex-grow flex flex-col min-h-[200px]">
              <h2 className="text-[#00b2ff] text-base font-bold mb-1">Science Fair Project Ideas</h2>
              <p className="text-[#4f4f4f] text-xs mb-3">
                Explore our top 10 innovative science fair project ideas that will impress the judges and help students
                learn about scientific principles.
              </p>
              <div className="mt-auto">
                <Link href="#" className="inline-block bg-[#00b2ff] text-white font-bold py-1 px-3 rounded-lg text-xs">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Fourth Blog Post */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#f2f2f2] flex-shrink-0 w-[220px] snap-start flex flex-col">
            <div className="relative">
              <div className="bg-blue-800 h-40 relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Coding for Kids"
                  width={400}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <button
                  className="absolute top-3 right-3 text-white transition-all duration-300"
                  onClick={() => toggleLike(3)}
                  aria-label={likedPosts[3] ? "Unlike post" : "Like post"}
                >
                  <Star className={`w-5 h-5 ${likedPosts[3] ? "fill-yellow-400 stroke-yellow-400" : "stroke-white"}`} />
                </button>
              </div>
            </div>
            <div className="p-3 bg-white flex-grow flex flex-col min-h-[200px]">
              <h2 className="text-[#00b2ff] text-base font-bold mb-1">Coding for Kids: Getting Started</h2>
              <p className="text-[#4f4f4f] text-xs mb-3">
                Learn how to introduce programming concepts to children in a fun and engaging way with these
                beginner-friendly coding activities and resources.
              </p>
              <div className="mt-auto">
                <Link href="#" className="inline-block bg-[#00b2ff] text-white font-bold py-1 px-3 rounded-lg text-xs">
                  Read More
                </Link>
              </div>
            </div>
          </div>
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

