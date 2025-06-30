"use client";

import { useEffect, useState, useMemo } from "react";
import React from "react";
import Image from "next/image";
import { WorkshopCard } from "@/components/workshop-card";
import WinnerCard from "@/components/WinnerCard";
import WorkshopDatePicker from "@/components/workshop-date-picker";
import Footer from "@/components/ui/footer";
import LoadingAnimation from "@/components/ui/loading-animation";
// import { analytics } from "@/lib/firebaseConfig";
// import { logEvent } from "firebase/analytics";
import "@/styles/fonts";
import Footerpage from "@/components/ui/Footerpage";
import EventBannerCarousel from "@/components/EventBannerCarousel"
import EducationStats from "@/components/education-stats"
import WhyGeniusLabs from "@/components/why-geniuslabs";
import FAQComponent from "@/components/FAQComponent"
import StemInfographic from "@/components/stem-infographic";
import STEMCarousel from "@/components/stem-carousel"
import ExploreProject, { type ProjectItem } from "@/components/explore-project"
import  Slider  from "@/components/Slider"
import Steps from "@/components/step";
import GeniuslabBlog from "@/components/geniuslab-blog"
import TrainingNinjasCarousel from "@/components/training-ninjas-carousel";
import StemStreams from "@/components/stem-streams"
import RoboticsCurriculum from "@/components/robotics-curriculum";
import RoboticsMissions from "@/components/robotics-missions"
import ExploreItem from "@/components/explorefaqs"


interface Workshop {
  _id: string; // Unique identifier for the workshop
  theme: string;
  date_of_workshop: string;
  duration: number;
  rate: number;
  video_url: string;
  description: string;
  // location: string;
  likes: number;
  rating: number;
  children_enrolled: number;
  kit_name: string;
}

interface Winner {
  name: string;
  age: string;
  school: string;
  organization: string;
  scholarship: string;
  championType: string;
  imageSrc: string;
}

export default function Page() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const projectsData: ProjectItem[] = [
    {
      id: 1,
      name: "Simran Kapoor",
      role: "All-Rounder STEM Expert",
      image: "/placeholder.svg?height=400&width=300",
      accentColor: "#00b2ff", // Blue accent
      linkText: "Learn More",
      linkUrl: "/experts/simran-kapoor",
    },
    {
      id: 2,
      name: "Sushant Yadav",
      role: "All-Rounder STEM Expert",
      image: "/placeholder.svg?height=400&width=300",
      accentColor: "#ee728f", // Pink accent
      linkText: "Learn More",
      linkUrl: "/experts/sushant-yadav",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Robotics Specialist",
      image: "/placeholder.svg?height=400&width=300",
      accentColor: "#00b2ff", // Blue accent
      linkText: "Learn More",
      linkUrl: "/experts/priya-sharma",
    },
    {
      id: 4,
      name: "Rahul Mehta",
      role: "Computer Science Expert",
      image: "/placeholder.svg?height=400&width=300",
      accentColor: "#ee728f", // Pink accent
      linkText: "Learn More",
      linkUrl: "/experts/rahul-mehta",
    },
  ]

  const winners: Winner[] = [
    {
      name: "Shanaya Prashad Kaul",
      age: "5 years",
      school: "Prometheus School",
      organization: "Space Creations & NASA",
      scholarship: "₹ 5000 Scholarship",
      championType: "ROBOTICS CHAMPION",
      imageSrc: "/WinnerCard/photo1.png",
    },
    {
      name: "Hrishik Gautam",
      age: "10 years",
      school: "Lotus Valley",
      organization: "Robotic Cars and Stunts",
      scholarship: "₹ 5000 Scholarship",
      championType: "ROBOTICS CHAMPION",
      imageSrc: "/WinnerCard/photo2.png",
    },
  ];

  // Fetch workshops data from the API
  const fetchWorkshops = async () => {
    try {
      const response = await fetch("/api/workshops");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWorkshops(data.data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsFooterVisible(currentScrollY < lastScrollY || currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const sortedWorkshops = useMemo(() => {
    return [...workshops].sort((a, b) => {
      const dateA = new Date(a.date_of_workshop);
      const dateB = new Date(b.date_of_workshop);
      return dateA.getTime() - dateB.getTime();
    });
  }, [workshops]);

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-5">
      {/* Header */}
      <div className="bg-white p-4 sticky top-0 z-20 border-b rounded-lg">
        <div className="flex items-center justify-between mb-1">
          {/* Welcome Section */}
          <div className="flex-shrink">
            <h1 className="text-2xl font-bold text-blue-gl">
              Welcome <span className="inline-block animate-wave">👋</span>
            </h1>
            
          </div>

          {/* Responsive Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/LOGO.png"
              alt="Logo"
              className="h-auto max-w-full object-contain"
              width={132}
              height={48}
              priority
            />
          </div>
        </div>
      </div>

      <EventBannerCarousel />

      <EducationStats />

      <WhyGeniusLabs />

      <StemInfographic />

      <STEMCarousel />

      <div className="relative my-4 py-6 rounded-lg" style={{ backgroundImage: 'url(/yellowbg.svg)', backgroundSize: 'cover', backgroundPosition: 'center'  ,backgroundRepeat: 'no-repeat' }}>
        <ExploreProject title="Explore Projects" items={projectsData} />
      </div>

      <GeniuslabBlog />

      <div className="relative my-4 py-6 rounded-lg" style={{ backgroundImage: 'url(/bluebg.svg)', backgroundSize: 'cover', backgroundPosition: 'center'  ,backgroundRepeat: 'no-repeat' }}>
      <TrainingNinjasCarousel/>
      </div>

      <Slider />

      <Steps />

      <StemStreams />

      <RoboticsCurriculum />

      <RoboticsMissions />

      {/* Workshop Date Picker */}
      <div className="px-4 mt-6">
        <WorkshopDatePicker
          stepLabel="Step 1"
          title="Pick up your workshop date"
        />
      </div>

      {/* Main Content */}
      <div className="p-4 mt-4">
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          sortedWorkshops.map((workshop, index) => (
            <React.Fragment key={workshop._id}>
              <WorkshopCard
                _id={workshop._id}
                date={workshop.date_of_workshop}
                enrolled={workshop.children_enrolled}
                price={workshop.rate}
                src={workshop.video_url}
                theme={workshop.theme}
                kitName={workshop.kit_name}
              />
              {/* Display WinnerCard after every 3 WorkshopCards */}
              {(index + 1) % 3 === 0 && winners.length > 0 && (
                <WinnerCard
                  key={`winner-${index}`}
                  {...winners[Math.floor(index / 3) % winners.length]}
                />
              )}
            </React.Fragment>
          ))
        )}
      </div>
      
      <FAQComponent />

      <ExploreItem />

      <Footerpage />

      {/* Footer */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white p-4 border-t transition-transform duration-300 z-50 ${
          isFooterVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Footer />
      </div>
    </div>
  );
}
