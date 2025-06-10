import { Award, BookOpen, GraduationCap, Quote, Star, ArrowLeft, Clock, Users } from "lucide-react";

export default function AboutFounder() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <a href="/about" className="inline-flex items-center text-satguru hover:text-satguru-dark transition-colors">
          <ArrowLeft className="mr-2" /> Back to About Us
        </a>
      </div>

      {/* Founder Section */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Founder Header */}
          <div className="relative h-64 bg-gradient-to-r from-satguru to-satguru-dark">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-32"></div>
            <div className="absolute bottom-6 left-8 text-white">
              <h1 className="text-4xl font-bold mb-1">Dr. Ramesh Kumar</h1>
              <p className="text-xl opacity-90">Founder & Principal</p>
            </div>
          </div>

          {/* Founder Content */}
          <div className="md:flex">
            {/* Founder Image */}
            <div className="md:w-1/3 p-8 -mt-20 relative z-10">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="assets/kam1.jpg"
                  alt="Dr. Ramesh Kumar"
                />
              </div>
            </div>

            {/* Founder Details */}
            <div className="md:w-2/3 p-8 pt-12 md:pt-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Founder</h2>
                <p className="text-gray-600 mb-4">
                  Dr. Ramesh Kumar, a visionary educator with a passion for transforming lives through education, founded Satguru Study Centre in 2017. His journey began in a small classroom with just 5 students, driven by the belief that every child deserves personalized attention and quality education.
                </p>
                <p className="text-gray-600 mb-4">
                  With a PhD in Education from the University of Madras, Dr. Kumar brings both academic excellence and practical teaching experience to the institution. His innovative teaching methodologies have helped countless students overcome their fear of difficult subjects and develop a genuine love for learning.
                </p>
                <p className="text-gray-600 mb-4">
                  Beyond academics, Dr. Kumar emphasizes character development, instilling values of discipline, perseverance, and curiosity in his students. His holistic approach to education has made Satguru Study Centre a trusted name among parents and students alike.
                </p>
                <p className="text-gray-600 mb-8">
                  Under his leadership, the institution has grown from humble beginnings to become one of Chennai's most respected educational centers, maintaining an exceptional 98% success rate in board examinations year after year.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-satguru/10 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <Clock className="text-satguru w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-satguru">6+</h3>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="bg-satguru/10 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="text-satguru w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-satguru">200+</h3>
                  <p className="text-sm text-gray-600">Students Taught</p>
                </div>
                <div className="bg-satguru/10 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="text-satguru w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-satguru">98%</h3>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
                <div className="bg-satguru/10 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <BookOpen className="text-satguru w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-satguru">15+</h3>
                  <p className="text-sm text-gray-600">Papers Published</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-gray-50 px-8 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="relative z-10 px-4 bg-gray-50">What Students Say</span>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                <Quote className="absolute top-4 left-4 text-gray-200 w-8 h-8" />
                <div className="pl-10">
                  <p className="text-gray-600 italic mb-4">
                    "Dr. Kumar's teaching style is exceptional. He made mathematics so simple that I went from fearing it to loving it. His patience and unique explanations helped me score 98% in my boards."
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src="https://randomuser.me/api/portraits/men/22.jpg"
                        alt="Rahul Sharma"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Rahul Sharma</p>
                      <p className="text-sm text-gray-500">Class 12, 98% in Maths</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                <Quote className="absolute top-4 left-4 text-gray-200 w-8 h-8" />
                <div className="pl-10">
                  <p className="text-gray-600 italic mb-4">
                    "The way Dr. Kumar explains concepts stays with you forever. His physics classes were so engaging that I decided to pursue engineering. Truly a life-changing mentor!"
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src="https://randomuser.me/api/portraits/women/33.jpg"
                        alt="Priya Patel"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Priya Patel</p>
                      <p className="text-sm text-gray-500">IIT Madras Student</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                <Quote className="absolute top-4 left-4 text-gray-200 w-8 h-8" />
                <div className="pl-10">
                  <p className="text-gray-600 italic mb-4">
                    "Dr. Kumar doesn't just teach subjects, he teaches how to learn. His study techniques helped me manage my time effectively and reduced my exam stress significantly."
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="Arjun Mehta"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Arjun Mehta</p>
                      <p className="text-sm text-gray-500">Class 10, 96% Overall</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                <Quote className="absolute top-4 left-4 text-gray-200 w-8 h-8" />
                <div className="pl-10">
                  <p className="text-gray-600 italic mb-4">
                    "As a parent, I've seen remarkable improvement in my child's confidence and academic performance since joining Satguru. Dr. Kumar's personal attention makes all the difference."
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src="https://randomuser.me/api/portraits/women/55.jpg"
                        alt="Mrs. Gupta"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Mrs. Gupta</p>
                      <p className="text-sm text-gray-500">Parent of Class 9 Student</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="relative z-10 px-4 bg-white">Gallery</span>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={`/assets/founder-gallery/${item}.jpg`} // Replace with your actual images
                    alt={`Dr. Kumar teaching ${item}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}