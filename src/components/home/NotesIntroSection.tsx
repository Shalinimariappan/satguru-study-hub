"use client";

import { FileText, Upload, BookOpen, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotesIntroSection() {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-[#0B2C4D]" />,
      title: "Government Question Papers",
      desc: "Access previous year and latest government question papers to boost your exam preparation.",
    },
    {
      icon: <Upload className="h-6 w-6 text-[#0B2C4D]" />,
      title: "Frequent Uploads",
      desc: "We regularly update new notes and study materials to keep your learning fresh and relevant.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#0B2C4D]" />,
      title: "Easy-to-Learn PDFs",
      desc: "Download or read subject-wise PDFs anytime for structured and quick learning.",
    },
    {
      icon: <PlayCircle className="h-6 w-6 text-[#0B2C4D]" />,
      title: "Well-Organized Content",
      desc: "Find class-wise and subject-wise study materials arranged for quick access and better learning.",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B2C4D] mb-2">
            Explore Our Notes Section
          </h2>
          <div className="w-20 h-1 bg-satguru mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Our notes section provides a seamless way for students to access
            government question papers, well-organized study notes, and
            downloadable PDFs — all designed to make learning simpler and
            smarter.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-100 rounded-2xl shadow-md p-8 h-full">
            <h3 className="text-2xl font-bold text-[#0B2C4D] mb-4">
              Everything for Academic Success
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Access high-quality study materials, government question papers,
              important notes, and exam resources designed to help students
              prepare effectively and score better in their examinations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-satguru rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Subject-wise notes for easy learning.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-satguru rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Previous year government question papers.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-satguru rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Downloadable PDFs available anytime.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-satguru rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Regular updates with the latest study materials.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-satguru rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Easy navigation with class-wise and subject-wise resources.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                asChild
                className="bg-satguru hover:bg-blue-900 text-white py-2 px-6 rounded-lg font-medium transition"
              >
                <a href="/notes">Explore Notes</a>
              </Button>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-5 transition duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-blue-50 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <h4 className="text-md font-semibold text-[#0B2C4D]">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}