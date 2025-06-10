
import { useState } from "react";
import { Calendar, Image, Award, BookOpen } from "lucide-react";

export default function Events() {
  const [activeTab, setActiveTab] = useState("Cooking");

  const events = {
    Cooking: {
      title: "Art & Drawing Competition",
      description: "Our annual drawing competition helps students express their creativity and develop artistic skills.",
      aim: "To encourage creative expression and artistic skills in students of all age groups.",
      images: [
        "assets/cook1.jpg",
        "assets/cook2.jpg",
        "assets/cook3.jpg",
        "assets/cook4.jpg"
      ]
    },
    Cultural: {
      title: "Handwriting Workshop",
      description: "Our handwriting workshops focus on developing neat, legible handwriting which is essential for exams.",
      aim: "To improve students' handwriting skills, which directly impacts their academic performance in written exams.",
      images: [
        "assets/cultural1.JPG",
        "assets/cultural2.jpg",
        "assets/cultural3.jpg",
        "assets/cultural4.JPG"
      ]
    },
    Farewell: {
      title: "Career Guidance Seminar",
      description: "Expert-led seminars to help students make informed decisions about their academic and career paths.",
      aim: "To provide students with the necessary information and guidance to make well-informed decisions about their future academic and career paths.",
      images: [
        "assets/farewell1.jpg",
        "assets/students.JPG",
      ]
    },
    Kamarajarday: {
      title: "Science Exhibition",
      description: "Annual science exhibition where students showcase their innovative projects and experiments.",
      aim: "To foster scientific curiosity, innovation, and practical application of scientific concepts through hands-on projects.",
      images: [
        "assets/kam1.jpg",
        "assets/kam2.jpg",
        "assets/kam3.jpg",
        "assets/kam4.jpg"
      ]
    },
    Independentday: {
      title: "Science Exhibition",
      description: "Annual science exhibition where students showcase their innovative projects and experiments.",
      aim: "To foster scientific curiosity, innovation, and practical application of scientific concepts through hands-on projects.",
      images: [
       "assets/independent1.jpg",
        "assets/independent2.jpg",
        "assets/independent3.jpg",
        "assets/independent4.jpg"
      ]
    },
      Parentsmeet: {
      title: "Science Exhibition",
      description: "Annual science exhibition where students showcase their innovative projects and experiments.",
      aim: "To foster scientific curiosity, innovation, and practical application of scientific concepts through hands-on projects.",
      images: [
        "assets/parent1.jpg",
        "assets/parent2.jpg",
        "assets/parent3.jpg",
        "assets/parent4.jpg"
      ]
    },
     Staffmeet: {
      title: "Science Exhibition",
      description: "Annual science exhibition where students showcase their innovative projects and experiments.",
      aim: "To foster scientific curiosity, innovation, and practical application of scientific concepts through hands-on projects.",
      images: [
        "assets/staff1.jpg",
        "assets/staff2.jpg",
        "assets/staff3.jpg"
      ]
    },
      Tour: {
      title: "Science Exhibition",
      description: "Annual science exhibition where students showcase their innovative projects and experiments.",
      aim: "To foster scientific curiosity, innovation, and practical application of scientific concepts through hands-on projects.",
      images: [
        "assets/tour1.jpg",
        "assets/tour2.jpg",
        "assets/tour3.jpg",
        "assets/tour4.jpg"
      ]
    },
  };

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
    <h1 className="text-4xl font-bold mb-4">Events</h1>
    <p className="text-xl max-w-2xl mx-auto">
      Learn more about Satguru Study Centre and our commitment to educational excellence
    </p>
  </div>
</div>  
      {/* Event Details with Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Highlights</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on each tab to learn more about our events and see photos from past activities.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-10">
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "Cooking"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Cooking")}
            >
              Cooking
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "Cultural"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Cultural")}
            >
              Cultural
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "Farewell"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Farewell")}
            >
              Farewell
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "Kamarajarday"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Kamarajarday")}
            >
            Kamarajar day
            </button>
             <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "Independentday"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Independentday")}
            >
            Independent day
            </button>
             <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "Parentsmeet"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Parentsmeet")}
            >
            Parents meet
            </button>
             <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "Staffmeet"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Staffmeet")}
            >
            Staff meet
            </button>
             <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "Tour"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Tour")}
            >
            Tour
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-satguru">
                  {events[activeTab as keyof typeof events].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {events[activeTab as keyof typeof events].description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Our Aim:</h4>
                  <p className="text-gray-600">
                    {events[activeTab as keyof typeof events].aim}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="text-lg font-semibold mb-2">Next Event:</h4>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-satguru" />
                    <span>Coming Soon - Stay Tuned!</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {events[activeTab as keyof typeof events].images.map(
                  (image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md">
                      <img
                        src={image}
                        alt={`${events[activeTab as keyof typeof events].title} - ${index + 1}`}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our upcoming events. Register early to secure your spot!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-satguru text-white text-center py-2 px-4 rounded-lg mb-4">
                <p className="text-sm font-medium">COMING SOON</p>
                <p className="text-2xl font-bold">TBD</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">Annual Science Exhibition</h3>
              <p className="text-gray-600 mb-4">
                Showcase your scientific knowledge and creativity with innovative projects.
              </p>
              <a
                href="/contact"
                className="block text-center bg-satguru hover:bg-satguru-dark text-white py-2 rounded-lg font-medium transition-colors"
              >
                Register Interest
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-satguru text-white text-center py-2 px-4 rounded-lg mb-4">
                <p className="text-sm font-medium">COMING SOON</p>
                <p className="text-2xl font-bold">TBD</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">Handwriting Workshop</h3>
              <p className="text-gray-600 mb-4">
                Improve your handwriting skills with guidance from calligraphy experts.
              </p>
              <a
                href="/contact"
                className="block text-center bg-satguru hover:bg-satguru-dark text-white py-2 rounded-lg font-medium transition-colors"
              >
                Register Interest
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-satguru text-white text-center py-2 px-4 rounded-lg mb-4">
                <p className="text-sm font-medium">COMING SOON</p>
                <p className="text-2xl font-bold">TBD</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Guidance Seminar</h3>
              <p className="text-gray-600 mb-4">
                Get insights from industry professionals about various career options.
              </p>
              <a
                href="/contact"
                className="block text-center bg-satguru hover:bg-satguru-dark text-white py-2 rounded-lg font-medium transition-colors"
              >
                Register Interest
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
