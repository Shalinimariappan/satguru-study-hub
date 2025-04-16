
import { useState } from "react";
import { Calendar, Image, Award, BookOpen } from "lucide-react";

export default function Events() {
  const [activeTab, setActiveTab] = useState("drawing");

  const events = {
    drawing: {
      title: "Art & Drawing Competition",
      description: "Our annual drawing competition helps students express their creativity and develop artistic skills.",
      aim: "To encourage creative expression and artistic skills in students of all age groups.",
      images: [
        "https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1471666875520-c75081f42081?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=500&auto=format"
      ]
    },
    handwriting: {
      title: "Handwriting Workshop",
      description: "Our handwriting workshops focus on developing neat, legible handwriting which is essential for exams.",
      aim: "To improve students' handwriting skills, which directly impacts their academic performance in written exams.",
      images: [
        "https://images.unsplash.com/photo-1455885661740-29cbf08a42fa?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=500&auto=format"
      ]
    },
    career: {
      title: "Career Guidance Seminar",
      description: "Expert-led seminars to help students make informed decisions about their academic and career paths.",
      aim: "To provide students with the necessary information and guidance to make well-informed decisions about their future academic and career paths.",
      images: [
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=500&auto=format"
      ]
    },
    science: {
      title: "Science Exhibition",
      description: "Annual science exhibition where students showcase their innovative projects and experiments.",
      aim: "To foster scientific curiosity, innovation, and practical application of scientific concepts through hands-on projects.",
      images: [
        "https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1581092921461-6484e3a4c2e8?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1574169208538-4f45163ade8d?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=500&auto=format"
      ]
    },
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-satguru py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Events</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore the various events and activities we organize to enhance students' learning experience
          </p>
        </div>
      </div>

      {/* Events Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Satguru Study Centre, we believe in the holistic development of students.
              Beyond academic coaching, we organize various events to nurture creativity,
              critical thinking, and practical skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-satguru/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image className="h-8 w-8 text-satguru" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Art & Drawing</h3>
              <p className="text-gray-600">
                Annual competitions to encourage artistic expression and creativity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-satguru/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-satguru" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Handwriting</h3>
              <p className="text-gray-600">
                Workshops focused on improving handwriting skills for better academic performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-satguru/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-satguru" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="text-gray-600">
                Seminars with industry experts to help students make informed career choices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-satguru/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-satguru" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Science Exhibition</h3>
              <p className="text-gray-600">
                Annual exhibition showcasing student projects and scientific experiments.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                activeTab === "drawing"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("drawing")}
            >
              Drawing
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "handwriting"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("handwriting")}
            >
              Handwriting
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "career"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("career")}
            >
              Career Guidance
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "science"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("science")}
            >
              Science Exhibition
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
