"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface STEMItem {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  attributes: string[]
  attributesTitle?: string
  imageUrl: string
  iconUrl?: string
  color: string
  learnMoreUrl: string
}

const stemData: STEMItem[] = [
  {
    id: 1,
    title: "Robotics",
    shortDescription: "Involves the design, construction, programming and operation of robots.",
    fullDescription:
      "Robotics is a captivating and dynamic component of STEM learning. It involves the design, construction, programming, and operation of robots to perform tasks, solve problems, and explore various fields.",
    attributes: [
      "Encourage Curiosity",
      "Innovative Thinking",
      "Inspire Creativity",
      "Confidence Building",
      "High-Demand Career",
      "Team Building",
    ],
    attributesTitle: "Robotics Stream Attributes",
    imageUrl: "/placeholder.svg",
    iconUrl: "/robot-icon.png",
    color: "bg-[#00A3FF]",
    learnMoreUrl: "/courses/robotics",
  },
  {
    id: 2,
    title: "IOT",
    shortDescription: "Focuses on connecting everyday objects and devices to the internet.",
    fullDescription:
      "IOT (Internet of Things) is about creating smart devices that communicate seamlessly. It enables automation and real-time data sharing to improve efficiency in various fields.",
    attributes: [
      "Smart Automation",
      "Real-time Data",
      "Scalability",
      "Interconnected Devices",
      "Security Challenges",
      "Cloud Integration",
    ],
    attributesTitle: "IOT Stream Attributes",
    imageUrl: "/placeholder.svg",
    iconUrl: "/iot-icon.png",
    color: "bg-pink-500",
    learnMoreUrl: "/courses/iot",
  },
  {
    id: 3,
    title: "AI/ML",
    shortDescription: "Explores artificial intelligence and machine learning algorithms.",
    fullDescription:
      "Artificial Intelligence and Machine Learning are revolutionizing technology. Learn to create intelligent systems that can learn from data and make decisions.",
    attributes: [
      "Neural Networks",
      "Deep Learning",
      "Data Analysis",
      "Pattern Recognition",
      "Problem Solving",
      "Future Technology",
    ],
    attributesTitle: "AI/ML Stream Attributes",
    imageUrl: "/placeholder.svg",
    iconUrl: "/ai-icon.png",
    color: "bg-purple-500",
    learnMoreUrl: "/courses/ai-ml",
  },
  {
    id: 4,
    title: "Cybersecurity",
    shortDescription: "Protects systems, networks, and programs from digital attacks.",
    fullDescription:
      "Cybersecurity is crucial in our digital world. Learn to protect data, systems, and networks from cyber threats while understanding ethical hacking and defense strategies.",
    attributes: [
      "Network Security",
      "Ethical Hacking",
      "Risk Management",
      "Digital Forensics",
      "Critical Thinking",
      "Privacy Protection",
    ],
    attributesTitle: "Cybersecurity Stream Attributes",
    imageUrl: "/placeholder.svg",
    iconUrl: "/security-icon.png",
    color: "bg-green-500",
    learnMoreUrl: "/courses/cybersecurity",
  },
  {
    id: 5,
    title: "Game Development",
    shortDescription: "Creates interactive gaming experiences through programming and design.",
    fullDescription:
      "Game Development combines creativity with technical skills. Learn to design and program games while understanding physics, graphics, and user experience.",
    attributes: [
      "Game Design",
      "3D Modeling",
      "Physics Engine",
      "User Experience",
      "Creative Coding",
      "Project Management",
    ],
    attributesTitle: "Game Development Stream Attributes",
    imageUrl: "/placeholder.svg",
    iconUrl: "/game-icon.png",
    color: "bg-orange-500",
    learnMoreUrl: "/courses/game-development",
  },
  {
    id: 6,
    title: "Data Science",
    shortDescription: "Analyzes complex data to help organizations make better decisions.",
    fullDescription:
      "Data Science transforms raw data into meaningful insights. Learn statistics, programming, and visualization to solve real-world problems through data analysis.",
    attributes: [
      "Data Analysis",
      "Statistics",
      "Visualization",
      "Big Data",
      "Machine Learning",
      "Business Intelligence",
    ],
    attributesTitle: "Data Science Stream Attributes",
    imageUrl: "/placeholder.svg",
    iconUrl: "/data-icon.png",
    color: "bg-teal-500",
    learnMoreUrl: "/courses/data-science",
  },
]

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0 L14 8 L22 8 L16 12 L18 20 L12 16 L6 20 L8 12 L2 8 L10 8 Z" />
    </svg>
  )
}

function TopCard({ item }: { item: STEMItem }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="relative">
        <div className={`aspect-[3/2] relative ${item.color}`}>
          <Image
            src={item.imageUrl || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0">
            <div className="absolute top-[15%] left-[15%] w-4 h-4 text-yellow-300">
              <StarIcon />
            </div>
            <div className="absolute top-[20%] right-[20%] w-4 h-4 text-yellow-300">
              <StarIcon />
            </div>
            <div className="absolute bottom-[40%] right-[10%] w-3 h-3 text-yellow-300">
              <StarIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 h-[180px] flex flex-col items-start justify-between">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-base xxs:text-sm font-bold text-[#00b2ff]">{item.title}</h3>
          {item.iconUrl && (
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="11" fill="#00B2FF" />
                <path
                  d="M16.6753 9.88241H16.0627V7.96838C16.0481 7.73813 15.8585 7.55104 15.6252 7.53665H11.4393V4.88867H10.5642V7.53665H6.37829C6.14493 7.55104 5.95533 7.73813 5.94074 7.96838V9.88241H5.32817C5.08023 9.88241 4.89062 10.0695 4.89062 10.3141V13.1636C4.89062 13.4082 5.08023 13.5953 5.32817 13.5953H5.94074V16.2577C5.95533 16.488 6.14493 16.675 6.37829 16.6894H15.6252C15.8585 16.675 16.0481 16.488 16.0627 16.2577V13.5953H16.6753C16.9232 13.5953 17.1128 13.4082 17.1128 13.1636V10.3141C17.1128 10.0695 16.9232 9.88241 16.6753 9.88241ZM7.74928 10.9042C7.74928 10.2134 8.3181 9.65215 9.01818 9.65215C9.71826 9.65215 10.2871 10.2134 10.2871 10.9042C10.2871 11.595 9.71826 12.1562 9.01818 12.1562C8.3181 12.1562 7.74928 11.595 7.74928 10.9042ZM12.927 14.6603H9.07652V13.7968H12.927V14.6603ZM14.2542 10.9042C14.2542 11.595 13.6854 12.1562 12.9853 12.1562C12.2706 12.1562 11.7018 11.595 11.6872 10.9042C11.6872 10.199 12.256 9.63776 12.9561 9.62337C13.6562 9.60898 14.2396 10.1846 14.2542 10.8754C14.2542 10.8898 14.2542 10.8898 14.2542 10.9042Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
        <p className="text-[#4f4f4f] text-[10px] leading-relaxed h-auto min-h-[48px]">{item.shortDescription}</p>
        <a
          href={item.learnMoreUrl}
          className="mt-auto py-1.5 px-4 rounded-lg text-white font-medium transition-colors text-xs bg-[#00b2ff] hover:bg-[#0090dd]"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

function DetailCard({ item }: { item: STEMItem }) {
  return (
    <div className="rounded-xl overflow-hidden bg-black mx-4">
      <div className="relative">
        <div className={`aspect-video relative ${item.color}`}>
          <Image
            src={item.imageUrl || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-contain p-8"
            sizes="100vw"
          />
          <div className="absolute inset-0">
            <div className="absolute top-[10%] left-[10%] w-6 h-6 text-yellow-300">
              <StarIcon />
            </div>
            <div className="absolute top-[20%] right-[30%] w-8 h-8 text-yellow-300">
              <StarIcon />
            </div>
            <div className="absolute bottom-[30%] right-[10%] w-6 h-6 text-yellow-300">
              <StarIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-6 bg-white">
        <div className="flex items-center justify-between">
          <h2 className="text-lg xxs:text-base font-bold text-[#00b2ff]">{item.title}</h2>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="11" fill="#00B2FF" />
              <path
                d="M16.6753 9.88241H16.0627V7.96838C16.0481 7.73813 15.8585 7.55104 15.6252 7.53665H11.4393V4.88867H10.5642V7.53665H6.37829C6.14493 7.55104 5.95533 7.73813 5.94074 7.96838V9.88241H5.32817C5.08023 9.88241 4.89062 10.0695 4.89062 10.3141V13.1636C4.89062 13.4082 5.08023 13.5953 5.32817 13.5953H5.94074V16.2577C5.95533 16.488 6.14493 16.675 6.37829 16.6894H15.6252C15.8585 16.675 16.0481 16.488 16.0627 16.2577V13.5953H16.6753C16.9232 13.5953 17.1128 13.4082 17.1128 13.1636V10.3141C17.1128 10.0695 16.9232 9.88241 16.6753 9.88241ZM7.74928 10.9042C7.74928 10.2134 8.3181 9.65215 9.01818 9.65215C9.71826 9.65215 10.2871 10.2134 10.2871 10.9042C10.2871 11.595 9.71826 12.1562 9.01818 12.1562C8.3181 12.1562 7.74928 11.595 7.74928 10.9042ZM12.927 14.6603H9.07652V13.7968H12.927V14.6603ZM14.2542 10.9042C14.2542 11.595 13.6854 12.1562 12.9853 12.1562C12.2706 12.1562 11.7018 11.595 11.6872 10.9042C11.6872 10.199 12.256 9.63776 12.9561 9.62337C13.6562 9.60898 14.2396 10.1846 14.2542 10.8754C14.2542 10.8898 14.2542 10.8898 14.2542 10.9042Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <p className="text-[#4f4f4f] text-sm xxs:text-xs leading-relaxed">{item.fullDescription}</p>
        <div className="space-y-4">
          <h3 className="text-lg xxs:text-base font-semibold text-[#00b2ff]">
            {item.attributesTitle || `${item.title} Stream Attributes`}
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {item.attributes.map((attribute, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 text-yellow-300">
                  <StarIcon />
                </div>
                <span className="text-[#4f4f4f] text-sm xxs:text-xs">{attribute}</span>
              </div>
            ))}
          </div>
        </div>
        <a
          href={item.learnMoreUrl}
          className="mx-auto block py-2.5 px-8 rounded-lg text-white font-medium text-sm transition-colors bg-[#00b2ff] hover:bg-[#0090dd] text-center w-40"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default function STEMCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemsPerPage = 2
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const page = Math.floor(activeIndex / itemsPerPage)

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === stemData.length - 1 ? 0 : prev + 1))
  }, [])

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(handleNext, 1500)
  }, [handleNext])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    startAutoPlay()

    return () => {
      stopAutoPlay()
    }
  }, [startAutoPlay, stopAutoPlay])

  const visibleItems = stemData.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg xxs:text-base font-bold bg-gradient-to-r from-[#00b2ff] to-blue-600 bg-clip-text text-transparent">
            Explore STEM Streams
          </h1>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-lg bg-[#00b2ff]/20 hover:bg-[#00b2ff]/30 flex items-center justify-center transition-colors"
            aria-label="Next item"
          >
            <ChevronRight className="w-5 h-5 text-[#00b2ff]" />
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {visibleItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  animate={{
                    opacity: page * itemsPerPage + idx === activeIndex ? 1 : 0.5,
                    scale: page * itemsPerPage + idx === activeIndex ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <TopCard item={item} />
                </motion.div>
              ))}
            </div>

            <div className="relative overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `${-100 * activeIndex}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {stemData.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <DetailCard item={item} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

