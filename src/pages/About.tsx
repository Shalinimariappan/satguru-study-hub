
import { GraduationCap, Users, Award, Clock, BookOpen, Target, Component } from "lucide-react";
import promoter from './Promoter'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="relative py-16">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{
      backgroundImage:
        "url('/assets/banner.jpg')",
    }}
  ></div>

  {/* Color Overlay with 65% opacity */}
  <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }}></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center text-white">
    <h1 className="text-4xl font-bold mb-4">About Us</h1>
    <p className="text-xl max-w-2xl mx-auto">
      Learn more about Satguru Study Centre and our commitment to educational excellence
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
                Satguru Study Centre was founded in 2017 with a mission to provide quality education to students in Chennai. 
                What started as a small tutoring service has now grown into a reputable institution with over 200 students.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, with over a decade of teaching experience, envisioned a learning environment where students
                could receive personalized attention and guidance to excel in their academics.
              </p>
              <p className="text-gray-600">
                Over the past 6 years, we have consistently maintained a 98% success rate in board examinations, 
                making us one of the most trusted tuition centers in Chennai.
              </p>
            </div>
            <div className="relative">
              <img 
                src="assets/students.JPG" 
                alt="Students studying" 
                className="rounded-lg shadow-xl"
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
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-satguru">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide high-quality educational support that empowers students to reach their full academic potential
                through personalized attention, innovative teaching methods, and a nurturing learning environment.
              </p>
              <p className="text-gray-600">
                We strive to instill a love for learning and critical thinking skills that extend beyond the classroom,
                preparing students not just for examinations but for lifelong success.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-satguru">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be recognized as the premier educational institution that transforms students into confident,
                knowledgeable, and responsible individuals ready to face the challenges of tomorrow.
              </p>
              <p className="text-gray-600">
                We envision creating a community of learners who not only excel academically but also develop
                important life skills such as critical thinking, problem-solving, and effective communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over the years, we have made a significant impact on the academic journey of our students.
              Here are some key figures that highlight our success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-satguru/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-satguru" />
              </div>
              <h3 className="text-4xl font-bold text-satguru mb-2">6+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-satguru/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-satguru" />
              </div>
              <h3 className="text-4xl font-bold text-satguru mb-2">200+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-satguru/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-satguru" />
              </div>
              <h3 className="text-4xl font-bold text-satguru mb-2">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-satguru/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-satguru" />
              </div>
              <h3 className="text-4xl font-bold text-satguru mb-2">20+</h3>
              <p className="text-gray-600">Expert Teachers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated team of educators who are passionate about teaching and committed to student success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Principal" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Ramesh Kumar</h3>
                <p className="text-satguru mb-3">Principal</p>
                <p className="text-gray-600">
                  With over 15 years of teaching experience, Dr. Kumar leads our institution with vision and dedication.
                </p><Link to="promoter">
  <button>View</button>
</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Science Teacher" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Mrs. Anjali Sharma</h3>
                <p className="text-satguru mb-3">Science Department Head</p>
                <p className="text-gray-600">
                  An expert in Physics and Chemistry, Mrs. Sharma has helped numerous students excel in science subjects.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://randomuser.me/api/portraits/men/67.jpg" 
                alt="Mathematics Teacher" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Mr. Suresh Patel</h3>
                <p className="text-satguru mb-3">Mathematics Expert</p>
                <p className="text-gray-600">
                  Known for making mathematics simple and engaging, Mr. Patel has a track record of producing top scorers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-satguru">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Satguru Study Centre?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enroll your child today and give them the academic advantage they deserve.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/courses" 
              className="bg-white text-satguru px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Courses
            </a>
            <a 
              href="/contact" 
              className="bg-satguru-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors border border-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
