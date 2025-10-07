"use client";

import { FileText, Upload, BookOpen, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button"; // Make sure you have your Button component

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
      title: "Access Demo Video",
      desc: "Watch our short video guide to learn how to sign up, sign in, and access your notes easily.",
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
            Our notes section provides a seamless way for students to access government question papers, 
            well-organized study notes, and downloadable PDFs — all designed to make learning simpler and smarter.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Video + Button */}
          <div>
            <div className="mt-6 rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/aMk8ogn7JA4"
                title="How to access notes - Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              />
            </div>

            {/* View Notes Button */}
            <div className="mt-6 text-center">
              <Button
                asChild
                className="bg-satguru hover:bg-blue-900 text-white py-2 px-6 rounded-lg font-medium transition"
              >
                <a href="/notes">View Notes</a>
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
                  <div className="bg-blue-50 p-3 rounded-full">{feature.icon}</div>
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
