"use client"

import { useState, useEffect, useMemo } from "react"
import { Star, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function StemStreams() {
  const [activeStream, setActiveStream] = useState("Robotics")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Wrap streamsData in useMemo to prevent recreation on every render
  const streamsData = useMemo(
    () => ({
      Robotics: {
        svgIcon: (
          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.105 10.2145H22.852V6.29941C22.8222 5.82843 22.4344 5.44575 21.957 5.41632H13.395V0H11.605V5.41632H3.04296C2.56563 5.44575 2.1778 5.82843 2.14797 6.29941V10.2145H0.894988C0.387828 10.2145 0 10.5971 0 11.0976V16.926C0 17.4264 0.387828 17.8091 0.894988 17.8091H2.14797V23.2548C2.1778 23.7258 2.56563 24.1085 3.04296 24.1379H21.957C22.4344 24.1085 22.8222 23.7258 22.852 23.2548V17.8091H24.105C24.6122 17.8091 25 17.4264 25 16.926V11.0976C25 10.5971 24.6122 10.2145 24.105 10.2145ZM5.84726 12.3045C5.84726 10.8915 7.01074 9.74348 8.44272 9.74348C9.8747 9.74348 11.0382 10.8915 11.0382 12.3045C11.0382 13.7174 9.8747 14.8654 8.44272 14.8654C7.01074 14.8654 5.84726 13.7174 5.84726 12.3045ZM16.4379 19.9874H8.56205V18.2212H16.4379V19.9874ZM19.1527 12.3045C19.1527 13.7174 17.9893 14.8654 16.5573 14.8654C15.0955 14.8654 13.932 13.7174 13.9021 12.3045C13.9021 10.8621 15.0656 9.71405 16.4976 9.68461C17.9296 9.65517 19.1229 10.8326 19.1527 12.2456C19.1527 12.275 19.1527 12.275 19.1527 12.3045Z"
              fill="currentColor"
            />
          </svg>
        ),
        images: [
          "/placeholder.svg?height=400&width=500&text=Robotics+1",
          "/placeholder.svg?height=400&width=500&text=Robotics+2",
          "/placeholder.svg?height=400&width=500&text=Robotics+3",
        ],
        title: "Shape Young Minds to Help Create Something Meaningful.",
        description:
          "Robotics is a captivating and dynamic component of STEM learning. It involves the design, construction, programming, and operation of robots to perform tasks, solve problems, and explore various fields.",
        attributes: [
          "Encourage Curiosity",
          "Innovative Thinking",
          "Inspire Creativity",
          "Confidence Building",
          "High-Demand Career",
          "Team Building",
        ],
        learning: [
          "Building Robots",
          "Mechanical Engineering",
          "Coding Robots",
          "Assembling Robots",
          "Trouble-Shooting",
          "Calibration",
        ],
      },
      IOT: {
        svgIcon: (
          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.0186 7.88593C21.9021 3.545 18.3336 0 13.9648 0C10.9171 0 8.15773 1.75762 6.78806 4.44622C4.79393 4.36821 3.10307 5.91888 2.985 7.88441C1.20831 8.72498 0 10.5165 0 12.5C0 15.3267 2.34909 17.6758 5.17578 17.6758H7.37305V22.0703H5.77335C5.46989 21.2196 4.66461 20.6055 3.71094 20.6055C2.49939 20.6055 1.51367 21.5912 1.51367 22.8027C1.51367 24.0143 2.49939 25 3.71094 25C4.66461 25 5.46989 24.3858 5.77335 23.5352H8.83789V17.6758H11.7676V20.7403C10.9169 21.0438 10.3027 21.8491 10.3027 22.8027C10.3027 24.0143 11.2885 25 12.5 25C13.7115 25 14.6973 24.0143 14.6973 22.8027C14.6973 21.8491 14.0831 21.0438 13.2324 20.7403V17.6758H16.1621V23.5352H19.2266C19.5301 24.3858 20.3354 25 21.2891 25C22.5006 25 23.4863 24.0143 23.4863 22.8027C23.4863 21.5912 22.6309 20.6055 21.2891 20.6055C20.3354 20.6055 19.5301 21.2196 19.2266 22.0703H17.627V17.6758H19.8242C22.6509 17.6758 25 15.3267 25 12.5C25 10.5181 23.7932 8.72707 22.0186 7.88593ZM13.1279 15.0284C12.8504 14.575 12.1494 14.575 11.8719 15.0284L10.6232 14.2632C11.4328 12.9398 13.5672 12.9398 14.3768 14.2632L13.1279 15.0284ZM15.6263 13.4993C14.9532 12.3991 13.7846 11.7418 12.5 11.7418C11.2154 11.7418 10.0468 12.3991 9.37366 13.4993L8.1234 12.7354C9.06467 11.1961 10.7012 10.277 12.5 10.277C14.299 10.277 15.9353 11.1961 16.8768 12.7354L15.6263 13.4993ZM18.1255 11.9707C16.9167 9.99298 14.8138 8.81214 12.5 8.81214C10.1862 8.81214 8.08334 9.99298 6.87447 11.9707L5.6242 11.2068C7.10201 8.79002 9.67197 7.3473 12.5 7.3473C15.328 7.3473 17.898 8.79002 19.3758 11.2068L18.1255 11.9707Z"
              fill="currentColor"
            />
          </svg>
        ),
        images: [
          "/placeholder.svg?height=400&width=500&text=IOT+1",
          "/placeholder.svg?height=400&width=500&text=IOT+2",
          "/placeholder.svg?height=400&width=500&text=IOT+3",
        ],
        title: "Connect Devices to Create Smart Solutions.",
        description:
          "Internet of Things (IoT) is an exciting field that connects everyday objects to the internet, allowing them to send and receive data. Students learn how to create systems that make life easier and more efficient.",
        attributes: [
          "Problem Solving",
          "Systems Thinking",
          "Digital Literacy",
          "Data Analysis",
          "Future Technology",
          "Practical Applications",
        ],
        learning: [
          "Sensor Technology",
          "Network Connectivity",
          "Data Collection",
          "Smart Home Systems",
          "Cloud Computing",
          "Security Protocols",
        ],
      },
      Coding: {
        svgIcon: (
          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71645C0.0054161 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 10.8585 24.6767 9.23302 24.0485 7.71645C23.4203 6.19989 22.4996 4.8219 21.3388 3.66116C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0ZM8.1625 14.3375C8.25461 14.4233 8.32849 14.5268 8.37973 14.6418C8.43097 14.7568 8.45852 14.881 8.46074 15.0068C8.46296 15.1327 8.43981 15.2578 8.39266 15.3745C8.34551 15.4912 8.27532 15.5973 8.1863 15.6863C8.09728 15.7753 7.99124 15.8455 7.8745 15.8926C7.75777 15.9398 7.63273 15.963 7.50685 15.9607C7.38097 15.9585 7.25683 15.931 7.14183 15.8797C7.02683 15.8285 6.92333 15.7546 6.8375 15.6625L4.3375 13.1625C4.25042 13.0755 4.18134 12.9723 4.13421 12.8586C4.08707 12.7449 4.06281 12.6231 4.06281 12.5C4.06281 12.3769 4.08707 12.2551 4.13421 12.1414C4.18134 12.0277 4.25042 11.9245 4.3375 11.8375L6.8375 9.3375C6.92333 9.24539 7.02683 9.17151 7.14183 9.12027C7.25683 9.06903 7.38097 9.04148 7.50685 9.03926C7.63273 9.03704 7.75777 9.06019 7.8745 9.10734C7.99124 9.15449 8.09728 9.22468 8.1863 9.3137C8.27532 9.40272 8.34551 9.50876 8.39266 9.6255C8.43981 9.74223 8.46296 9.86727 8.46074 9.99315C8.45852 10.119 8.43097 10.2432 8.37973 10.3582C8.32849 10.4732 8.25461 10.5767 8.1625 10.6625L6.32625 12.5L8.1625 14.3375ZM14.6113 9.95375L12.1113 15.7862C12.0104 16.0105 11.8254 16.1861 11.5963 16.2753C11.3672 16.3644 11.1122 16.36 10.8862 16.263C10.6603 16.1659 10.4816 15.984 10.3885 15.7564C10.2955 15.5288 10.2956 15.2738 10.3888 15.0462L12.8888 9.21375C12.9896 8.98952 13.1746 8.8139 13.4037 8.72473C13.6328 8.63556 13.8878 8.63998 14.1138 8.73704C14.3397 8.83409 14.5184 9.01601 14.6115 9.2436C14.7045 9.47118 14.7044 9.72622 14.6113 9.95375ZM20.6625 13.1625L18.1625 15.6625C18.0767 15.7546 17.9732 15.8285 17.8582 15.8797C17.7432 15.931 17.619 15.9585 17.4932 15.9607C17.3673 15.963 17.2422 15.9398 17.1255 15.8926C17.0088 15.8455 16.9027 15.7753 16.8137 15.6863C16.7247 15.5973 16.6545 15.4912 16.6073 15.3745C16.5602 15.2578 16.537 15.1327 16.5393 15.0068C16.5415 14.881 16.569 14.7568 16.6203 14.6418C16.6715 14.5268 16.7454 14.4233 16.8375 14.3375L18.6738 12.5L16.8375 10.6625C16.7454 10.5767 16.6715 10.4732 16.6203 10.3582C16.569 10.2432 16.5415 10.119 16.5393 9.99315C16.537 9.86727 16.5602 9.74223 16.6073 9.6255C16.6545 9.50876 16.7247 9.40272 16.8137 9.3137C16.9027 9.22468 17.0088 9.15449 17.1255 9.10734C17.2422 9.06019 17.3673 9.03704 17.4932 9.03926C17.619 9.04148 17.7432 9.06903 17.8582 9.12027C17.9732 9.17151 18.0767 9.24539 18.1625 9.3375L20.6625 11.8375C20.7496 11.9245 20.8187 12.0277 20.8658 12.1414C20.9129 12.2551 20.9372 12.3769 20.9372 12.5C20.9372 12.6231 20.9129 12.7449 20.8658 12.8586C20.8187 12.9723 20.7496 13.0755 20.6625 13.1625Z"
              fill="currentColor"
            />
          </svg>
        ),
        images: [
          "/placeholder.svg?height=400&width=500&text=Coding+1",
          "/placeholder.svg?height=400&width=500&text=Coding+2",
          "/placeholder.svg?height=400&width=500&text=Coding+3",
        ],
        title: "Develop Skills to Build the Digital Future.",
        description:
          "Coding is the language of the future. It teaches logical thinking and problem-solving while giving students the tools to create websites, apps, games, and software that can change the world.",
        attributes: [
          "Logical Thinking",
          "Attention to Detail",
          "Persistence",
          "Algorithmic Thinking",
          "Digital Creation",
          "Universal Skill",
        ],
        learning: [
          "Programming Languages",
          "Web Development",
          "App Creation",
          "Game Design",
          "Debugging Skills",
          "Algorithm Design",
        ],
      },
      Animation: {
        svgIcon: (
          <svg width="20" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.8333 0H4.16667C1.86806 0 0 1.8659 0 4.16185V15.2601C0 17.5561 1.86806 19.422 4.16667 19.422H25.8333C28.1319 19.422 30 17.5561 30 15.2601V4.16185C30 1.8659 28.1319 0 25.8333 0ZM23.0556 11.0983C21.2431 11.0983 19.7014 9.93989 19.125 8.3237H18.0556C14.2292 8.3237 11.1111 11.4382 11.1111 15.2601C11.1111 16.0231 10.4861 16.6474 9.72222 16.6474C8.95833 16.6474 8.33333 16.0231 8.33333 15.2601C8.33333 12.9642 6.46528 11.0983 4.16667 11.0983C3.40278 11.0983 2.77778 10.474 2.77778 9.71098C2.77778 8.94798 3.40278 8.3237 4.16667 8.3237C6.27778 8.3237 8.16667 9.26705 9.44444 10.7584C11.0694 7.66474 14.3194 5.54913 18.0556 5.54913H19.125C19.7014 3.93295 21.2431 2.77457 23.0556 2.77457C25.3542 2.77457 27.2222 4.64046 27.2222 6.93642C27.2222 9.23237 25.3542 11.0983 23.0556 11.0983ZM24.4444 6.93642C24.4444 7.69942 23.8194 8.3237 23.0556 8.3237C22.2917 8.3237 21.6667 7.69942 21.6667 6.93642C21.6667 6.17341 22.2917 5.54913 23.0556 5.54913C23.8194 5.54913 24.4444 6.17341 24.4444 6.93642Z"
              fill="currentColor"
            />
          </svg>
        ),
        images: [
          "/placeholder.svg?height=400&width=500&text=Animation+1",
          "/placeholder.svg?height=400&width=500&text=Animation+2",
          "/placeholder.svg?height=400&width=500&text=Animation+3",
        ],
        title: "Bring Ideas to Life Through Movement and Storytelling.",
        description:
          "Animation combines art and technology to create moving images that tell stories and explain concepts. Students learn to express ideas visually while mastering digital tools used in entertainment and education.",
        attributes: [
          "Visual Storytelling",
          "Artistic Expression",
          "Technical Precision",
          "Time Management",
          "Creative Problem Solving",
          "Industry Relevance",
        ],
        learning: [
          "2D Animation",
          "3D Modeling",
          "Character Design",
          "Storyboarding",
          "Motion Graphics",
          "Visual Effects",
        ],
      },
    }),
    [],
  ) // Empty dependency array means this will only be created once

  // Memoize streams to prevent recreation on every render
  const streams = useMemo(() => {
    return Object.keys(streamsData).map((key) => {
      const data = streamsData[key as keyof typeof streamsData]
      return {
        name: key,
        ...data,
        image: data.images ? data.images[0] : undefined,
        svgIcon: data.svgIcon,
      }
    })
  }, [streamsData]) // Only depends on streamsData

  // Find the active stream
  const activeStreamData = streamsData[activeStream as keyof typeof streamsData]

  useEffect(() => {
    const interval = setInterval(() => {
      const activeImages = streamsData[activeStream as keyof typeof streamsData].images
      setCurrentImageIndex((prevIndex) => (prevIndex >= activeImages.length - 1 ? 0 : prevIndex + 1))
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [activeStream, streamsData]) // Add streamsData to the dependency array

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [activeStream]) // No change needed here

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <h1 className="text-[#092139] text-lg xxs:text-base font-bold mb-5">Explore STEM Streams</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {streams.map((stream) => {
          const isActive = activeStream === stream.name

          return (
            <button
              key={stream.name}
              className={`rounded-xl p-2.5 flex items-center transition-all ${
                isActive
                  ? "bg-[#00b2ff] text-white shadow-lg [box-shadow:inset_0_2px_4px_rgba(0,0,0,0.3)]"
                  : "bg-[#ffffff] border-2 border-[#00b2ff] text-[#00b2ff]"
              }`}
              onClick={() => setActiveStream(stream.name)}
            >
              <div className="p-1 rounded-lg mr-2">
                <div
                  className={`w-6 h-6 flex items-center justify-center ${isActive ? "text-white" : "text-[#00b2ff]"}`}
                >
                  {stream.svgIcon}
                </div>
              </div>
              <span className="text-sm font-semibold">{stream.name}</span>
            </button>
          )
        })}
      </div>

      {/* Image carousel section */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl mb-6">
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        {streams.map((stream) => (
          <div
            key={stream.name}
            className={`absolute inset-0 transition-opacity duration-300 ${
              activeStream === stream.name ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide">
              {stream.images &&
                stream.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative min-w-full h-full snap-center transition-transform duration-500 transform p-4 ${
                      index === currentImageIndex ? "scale-100" : "scale-95 opacity-80"
                    }`}
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${stream.name} illustration ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Content section */}
      <div className="space-y-6">
        <h2 className="text-[#00b2ff] text-lg xxs:text-base font-bold leading-tight">{activeStreamData.title}</h2>

        <p className="text-[#4f4f4f] text-sm">{activeStreamData.description}</p>

        <div>
          <h3 className="text-[#092139] text-lg xxs:text-base font-bold mb-4">{activeStream} Stream Attributes</h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {activeStreamData.attributes.map((attribute, index) => (
              <div key={index} className="flex items-center">
                <Star className="w-5 h-5 text-[#fccb40] mr-2 flex-shrink-0" />
                <span className="text-[#4f4f4f] text-sm">{attribute}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[#092139] text-lg xxs:text-base font-bold mb-4">What will the Students Learn?</h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {activeStreamData.learning.map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-[#32ba7c] mr-2 flex-shrink-0" />
                <span className="text-[#4f4f4f] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

