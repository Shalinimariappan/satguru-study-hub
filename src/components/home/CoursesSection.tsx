"use client";

import {
  BookOpen,
  Calculator,
  Brain,
  School,
  Atom,
  Globe,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/pagination";

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  levels: string[];
}

const CourseCard = ({ icon, title, description, levels }: CourseCardProps) => (
  <div
    className="bg-white p-6 rounded-lg shadow-md border border-gray-100
               hover:bg-satguru hover:text-white
               hover:shadow-xl transition-all duration-300 group h-full"
  >
    <div
      className="bg-satguru/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4
                 group-hover:bg-white/20"
    >
      {icon}
    </div>

    <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
      {title}
    </h3>

    <p className="text-gray-600 mb-4 group-hover:text-gray-200">
      {description}
    </p>

    <div>
      <h4 className="text-sm font-semibold text-gray-500 mb-2 group-hover:text-gray-200">
        Classes Covered
      </h4>
      <div className="flex flex-wrap gap-2">
        {levels.map((level, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full
                       group-hover:bg-white/20 group-hover:text-white"
          >
            {level}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function CoursesSection() {
  const courses = [
    {
      icon: <School className="h-6 w-6 text-satguru group-hover:text-white" />,
      title: "Foundational Level",
      description:
        "Early learning and strong academic foundations for young learners.",
      levels: ["LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V"],
    },
    {
      icon: <BookOpen className="h-6 w-6 text-satguru group-hover:text-white" />,
      title: "Middle School (Preparator)",
      description:
        "Concept clarity and subject strengthening for higher classes.",
      levels: ["Class VI", "Class VII", "Class VIII", "Class IX"],
    },
    {
      icon: <Calculator className="h-6 w-6 text-satguru group-hover:text-white" />,
      title: "SSC – Class X",
      description:
        "Board exam–focused coaching with revision and test practice.",
      levels: ["Class X"],
    },
    {
      icon: <Atom className="h-6 w-6 text-satguru group-hover:text-white" />,
      title: "HSC – Science Stream",
      description:
        "Physics, Chemistry, Maths, Biology with board exam preparation.",
      levels: ["Class XI", "Class XII"],
    },
    {
      icon: <Globe className="h-6 w-6 text-satguru group-hover:text-white" />,
      title: "HSC – Commerce Stream",
      description:
        "Accountancy, Commerce, Economics and Business Maths coaching.",
      levels: ["Class XI", "Class XII"],
    },
    {
      icon: <Brain className="h-6 w-6 text-satguru group-hover:text-white" />,
      title: "Language Studies",
      description:
        "Tamil and English language development across all grades.",
      levels: ["LKG", "UKG", "I–V", "VI–VIII", "IX–X", "XI–XII"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Courses
          </h2>
          <div className="w-20 h-1 bg-satguru mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching from LKG to Class XII with expert guidance.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-10"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔘 View All Courses Button */}
        <div className="text-center mt-10">
          <Button asChild className="bg-satguru hover:bg-satguru-light px-8 py-3">
            <a href="/courses">View All Courses</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
