"use client";

import { GraduationCap, Users, Video, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [photoAnimate, setPhotoAnimate] = useState(false);

  // Baseline animation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoAnimate(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            About Satguru Study Centre
          </h2>
          <div className="w-20 h-1 bg-satguru mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to Satguru Study Centre — the best place to learn, grow, and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Empowering Minds since 2019</h3>
            <p className="text-gray-600 mb-4">
              Satguru Study Centre is one of the most trusted educational institutions in New Washermenpet, Chennai. 
              For over 7 years, we have been committed to shaping the academic journey of students from I to XII by 
              providing structured, syllabus-oriented, and value-driven education.
            </p>
            <p className="text-gray-600 mb-6">
              With a team of dedicated teachers and a structured curriculum, we have been 
              consistently delivering excellent results year after year.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 text-satguru mr-2" />
                <span className="font-medium">Expert Faculty</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-satguru mr-2" />
                <span className="font-medium">200+ Students</span>
              </div>
              <div className="flex items-center">
                <Video className="h-6 w-6 text-satguru mr-2" />
                <span className="font-medium">CCTV in All Rooms</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-satguru mr-2" />
                <span className="font-medium">7 Years Experience</span>
              </div>
            </div>

            <Button asChild className="bg-satguru hover:bg-satguru-light">
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>

          {/* Right Image - Baseline Animation */}
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transition-transform duration-1000"
            style={{
              transform: photoAnimate 
                ? "translateY(-5px) scale(1.03)" 
                : "translateY(0) scale(1)"
            }}
          >
            <img
              src="assets/child.JPG"
              alt="Students studying at Satguru Study Centre"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-satguru rounded-lg opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-satguru-light rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
