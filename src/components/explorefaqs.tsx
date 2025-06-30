"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type ExploreItem = {
  location: string
  description: string
  gradeLevel?: string
  tools?: string[]
  projects?: string[]
}

const exploreData: ExploreItem[] = [
  // Existing detailed explore data
  {
    location: "LEGO Spike Prime Robotics Lab",
    description:
      "Hands-on robotics workshops for Grades 1-3 using LEGO Spike Prime kits. Focus on basic coding, simple machines, and creative problem solving.",
    gradeLevel: "Grades 1-3",
    tools: ["LEGO Spike Prime", "TinkerCad"],
    projects: ["Animal Life Cycle", "Thief Alarm"],
  },
  {
    location: "AI Coding Center",
    description:
      "Advanced coding and AI workshops for Grades 4-6. Includes Python programming, machine learning basics, and AI project development.",
    gradeLevel: "Grades 4-6",
    tools: ["Python", "SolidWorks", "MS Excel"],
    projects: ["AI Big Bus", "Earthquake Simulator"],
  },
  {
    location: "STEM Innovation Hub",
    description:
      "Integrated STEM workshops for Grades 7-8 covering robotics, coding, and AI applications. Includes project-based learning and competitions.",
    gradeLevel: "Grades 7-8",
    tools: ["LEGO EV3", "Makey Makey", "MS PowerPoint"],
    projects: ["Robotic Car", "Apple Catching Game"],
  },
  {
    location: "Advanced Robotics Lab",
    description:
      "High school level robotics and AI workshops for Grades 9-10. Focus on complex robotics systems, AI algorithms, and engineering design.",
    gradeLevel: "Grades 9-10",
    tools: ["LEGO Technic", "Lego Mindstorms", "3D Printing"],
    projects: ["Solar System Simulator", "Constellation Animator"],
  },
  {
    location: "Teacher Training Academy",
    description:
      "Professional development program for educators covering Robotics, ICT, Coding, and AI. Includes digital marketing training and classroom integration strategies.",
    tools: ["LEGO WeDo", "LEGO Robot Inventor", "Cybersecurity Tools"],
    projects: ["Thief Alarm", "Robotics Repair Workshop"],
  },
  {
    location: "STEM Competitions Arena",
    description:
      "Venue for hosting robotics competitions, coding challenges, and AI hackathons. Open to students and educators for collaborative learning.",
    projects: ["Robotic Car Competition", "Coding Hackathon"],
  },
  {
    location: "AI Ethics Discussion Hub",
    description:
      "Forum for discussing ethical considerations in AI development. Includes workshops on responsible AI practices and case studies.",
    tools: ["AI Ethics Frameworks", "Machine Learning Models"],
  },
  {
    location: "Robotics Repair Workshop",
    description:
      "Training center for learning robotics maintenance and repair. Includes hands-on sessions with various robotics kits and tools.",
    tools: ["LEGO EV3", "LEGO Mindstorms", "3D Printing"],
  },
  {
    location: "STEM Education Center",
    description:
      "Educational programs for students focusing on robotics, AI, and coding fundamentals. Includes interactive exhibits and project-based learning.",
    projects: ["Animal Life Cycle", "Solar System Simulator"],
  },
  {
    location: "AI Art Gallery",
    description:
      "Exhibitions showcasing art created using AI algorithms and robotics technologies. Includes workshops on AI in creative fields.",
    tools: ["AI Art Tools", "Machine Learning Models"],
  },

  // New "near me" explore items
  {
    location: "LEGO Workshops near me",
    description:
      "LEGO Robotics Workshops Near Me, LEGO Engineering for Kids Near Me, LEGO STEM Workshops Near Me, LEGO Coding Classes Near Me, LEGO Mindstorms Workshops Near Me, LEGO Technic Engineering Near Me, LEGO Stop Motion Animation Near Me, LEGO Architecture Workshops Near Me, LEGO Design and Innovation Labs Near Me, LEGO Team Building Activities Near Me",
  },
  {
    location: "Robotics Labs Workshops near me",
    description:
      "Robotics Labs Workshops Near Me, Advanced Robotics Labs Near Me, Robotics Research Labs Near Me, AI & Robotics Labs Near Me, Educational Robotics Labs Near Me, Industrial Robotics Labs Near Me, Autonomous Robotics Labs Near Me, Robotics Innovation Labs Near Me, Robotics Prototyping Labs Near Me, Robotics Testing Labs Near Me",
  },
  {
    location: "AI Coding Workshops near me",
    description:
      "AI Coding Workshops Near Me, Machine Learning Coding Workshops Near Me, Deep Learning Coding Workshops Near Me, Python for AI Workshops Near Me, AI Programming Bootcamps Near Me, Neural Networks Coding Workshops Near Me, AI App Development Workshops Near Me, AI Software Engineering Near Me, AI Algorithm Development Near Me, AI Model Training Workshops Near Me",
  },
  {
    location: "STEM Education Workshops near me",
    description:
      "STEM Education Workshops Near Me, STEM Teacher Training Near Me, STEM for Kids Workshops Near Me, STEM Innovation Hubs Near Me, STEM Research Labs Near Me, STEM Career Counseling Near Me, STEM Entrepreneurship Near Me, STEM Community Events Near Me, STEM Family Days Near Me, Hands-on STEM Learning Near Me",
  },
  {
    location: "3D Printing Workshops near me",
    description:
      "3D Printing Workshops Near Me, 3D Printing Basics Near Me, Advanced 3D Modeling Near Me, 3D Printing in Manufacturing Near Me, 3D Printing for Artists Near Me, 3D Printing Certification Near Me, 3D Printing in Healthcare Near Me, 3D Printing for Educators Near Me, 3D Printing Business Near Me, 3D Printing Competitions Near Me",
  },
  {
    location: "Cybersecurity Training Workshops near me",
    description:
      "Cybersecurity Training Workshops Near Me, Cybersecurity Basics Near Me, Ethical Hacking Workshops Near Me, AI Security Workshops Near Me, Cybersecurity Certification Near Me, Cyber Defense Labs Near Me, Cybersecurity for Kids Near Me, Corporate Cybersecurity Training Near Me, Cyber Threat Analysis Workshops Near Me, Cybersecurity Career Guidance Near Me",
  },
  {
    location: "Drone Workshops near me",
    description:
      "Drone Workshops Near Me, Drone Racing Workshops Near Me, Aerial Robotics Near Me, Drone Photography Near Me, Drone Repair Training Near Me, Drone Safety Certification Near Me, Drone Programming Near Me, Drone Applications in Agriculture Near Me, Drone Use in Emergency Services Near Me, Drone Entrepreneurship Near Me",
  },
  {
    location: "AI Ethics Workshops near me",
    description:
      "AI Ethics Workshops Near Me, AI Ethics Frameworks Near Me, Responsible AI Development Near Me, AI Bias Mitigation Near Me, AI in Law Workshops Near Me, AI Ethics Certification Near Me, AI Social Impact Workshops Near Me, AI Policy Making Near Me, AI Ethics in Healthcare Near Me, AI Ethics in Education Near Me",
  },
  {
    location: "Virtual Reality Workshops near me",
    description:
      "Virtual Reality Workshops Near Me, VR Gaming Workshops Near Me, AR Development Workshops Near Me, VR in Education Workshops Near Me, VR Art Workshops Near Me, AR/VR Certification Near Me, VR Healthcare Applications Near Me, AR/VR Entrepreneurship Near Me, VR Safety Training Near Me, VR Filmmaking Workshops Near Me",
  },
  {
    location: "STEM Competitions Workshops near me",
    description:
      "STEM Competitions Workshops Near Me, Robotics Competitions Near Me, Science Fair Preparation Workshops Near Me, Math Olympiad Training Near Me, Engineering Challenges Near Me, Coding Hackathons Near Me, Physics Competitions Workshops Near Me, STEM Innovation Challenges Near Me, Space Science Competitions Near Me, Environmental Science Competitions Near Me",
  },
]

// Component code remains unchanged

function ExploreItem({ location, description, gradeLevel, tools, projects, index }: ExploreItem & { index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : "0px"
    }
  }, [isOpen])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`border rounded-lg shadow-sm overflow-hidden transition-all duration-500 ease-in-out hover:shadow-md ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <button
        className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-[#00b2ff] font-medium mr-2">Q{index + 1}.</span>
          <span className="text-sm font-medium text-[#0b5394]">{location}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: "0px" }}
      >
        <div className="px-4 py-3">
          <p className="text-xs text-[#0b5394]">{description}</p>
          {gradeLevel && <p className="mt-2 text-xs text-[#0b5394]">Recommended Grade Level: {gradeLevel}</p>}
          {tools && tools.length > 0 && (
            <p className="mt-2 text-xs text-[#0b5394]">
              Tools Used: {tools.map((tool, index) => (index === tools.length - 1 ? tool : `${tool}, `))}
            </p>
          )}
          {projects && projects.length > 0 && (
            <p className="mt-2 text-xs text-[#0b5394]">
              Featured Projects:{" "}
              {projects.map((project, index) => (index === projects.length - 1 ? project : `${project}, `))}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ExploreFAQs() {
  const [visibleCount, setVisibleCount] = useState(5)
  const [isLoading, setIsLoading] = useState(false)

  const showMoreLocations = () => {
    setIsLoading(true)
    let newCount = visibleCount
    const interval = setInterval(() => {
      newCount++
      setVisibleCount(newCount)
      if (newCount >= Math.min(visibleCount + 5, exploreData.length)) {
        clearInterval(interval)
        setIsLoading(false)
      }
    }, 300)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h1 className="text-lg xxs:text-base font-bold text-left mb-6 text-[#0b5394]">Explore GeniusLabs Workshops</h1>

      <div className="space-y-3">
        {exploreData.slice(0, visibleCount).map((item, index) => (
          <ExploreItem
            key={index}
            location={item.location}
            description={item.description}
            gradeLevel={item.gradeLevel}
            tools={item.tools}
            projects={item.projects}
            index={index}
          />
        ))}
      </div>

      {visibleCount < exploreData.length && (
        <div className="text-center mt-6">
          <Button variant="outline" onClick={showMoreLocations} className="px-6 py-2 text-sm" disabled={isLoading}>
            {isLoading ? "Loading..." : "Learn More"}
          </Button>
        </div>
      )}
    </div>
  )
}

