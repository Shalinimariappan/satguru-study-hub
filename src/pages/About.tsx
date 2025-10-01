import { GraduationCap, Users, Award, Clock } from "lucide-react";
import { Link } from 'react-router-dom';
import FAQSection from "../components/home/FAQSection";
import { useEffect, useState } from "react";

export default function About() {
  const [photoAnimate, setPhotoAnimate] = useState(false);

  // Baseline animation for "Our Story" image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoAnimate(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="relative py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/assets/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }}></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Welcome to Satguru Study Centre, We are committed to delivering academic excellence and guiding students to achieve their dreams.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-satguru mb-6"></div>
              <p className="text-gray-600 mb-4">
                Established in 2019, Satguru Study Centre started with a vision to provide high-quality education for school and college students in <strong>Chennai</strong>. What began as a small classroom in <strong>New Washermenpet</strong> has now grown into one of the <strong>best tuition centres in Chennai</strong>, trusted by over 200+ students every year.
              </p>
              <p className="text-gray-600 mb-4">
                With 6+ years of excellence and a 99.2% success rate in board exams, we focus on personalized coaching, doubt-clearing sessions, and result-oriented study plans.
              </p>
              <p className="text-gray-600">
                Parents across Chennai choose us because we combine experienced teachers, modern teaching techniques, and individual mentoring to ensure student success.
              </p>
            </div>
            <div className="relative">
              <img
                src="assets/banner.jpg"
                alt="Students studying at Satguru Study Centre"
                className={`rounded-lg shadow-xl transition-transform duration-1000 ${
                  photoAnimate ? "translate-y-1 scale-105" : "translate-y-0 scale-100"
                }`}
              />
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-satguru-light opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:bg-satguru cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4 text-satguru group-hover:text-white transition-colors duration-300">Our Mission</h3>
              <p className="text-gray-600 mb-4 group-hover:text-white transition-colors duration-300">
                To be recognized as the <strong>top tuition centre in Chennai</strong> by empowering students with strong academic foundations, modern learning methods, and confidence to excel in board exams and competitive exams.
              </p>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                We provide specialized coaching for Class 10, 11, and 12 in Mathematics, Physics, Chemistry, Accountancy, Commerce, Economics and other subjects to help students reach their full potential.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:bg-satguru cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4 text-satguru group-hover:text-white transition-colors duration-300">Our Vision</h3>
              <p className="text-gray-600 mb-4 group-hover:text-white transition-colors duration-300">
                To become the first choice for every parent searching for a <strong>trusted tuition centre in New Washermenpet and Chennai</strong> by nurturing disciplined, confident, and successful students.
              </p>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                We aim to transform learning into a joyful journey while preparing students for both academic and real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over the years, Satguru Study Centre has grown into one of the most sought-after <strong>tuition centres in Chennai</strong>, producing consistent academic results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Metric Cards */}
            {[
              { Icon: Clock, value: "6+", text: "Years of Experience" },
              { Icon: Users, value: "1000+", text: "Students Enrolled" },
              { Icon: Award, value: "99.2%", text: "Success Rate" },
              { Icon: GraduationCap, value: "20+", text: "Expert Teachers" },
            ].map((card, i) => (
              <div key={i} className="group bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center transition-all duration-300 hover:bg-satguru cursor-pointer">
                <div className="p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-satguru/20">
                  <card.Icon className="h-8 w-8 text-satguru group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-satguru group-hover:text-white transition-colors duration-300">{card.value}</h3>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action */}
      <section className="py-16 bg-satguru">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Looking for the Best Tuition Centre in Chennai?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Satguru Study Centre today and give your child the academic boost they deserve. We proudly serve students in <strong>New Washermenpet</strong> and across Chennai.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/courses" className="bg-white text-satguru px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Explore Courses</a>
            <a href="/contact" className="bg-satguru-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors border border-white">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
