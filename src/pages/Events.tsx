import { useState } from "react";
import { Calendar } from "lucide-react";

export default function Events() {
  const [activeTab, setActiveTab] = useState("Cooking");

  const events = {
    Cooking: {
      title: "Cooking Competition",
      description:
        "Our cooking competition is a fun platform for students to showcase their culinary talents and creativity in the kitchen.",
      aim: "To encourage innovation, teamwork, and love for cooking among students.",
      images: [
        "assets/cook1.jpg",
        "assets/cook2.jpg",
        "assets/cook3.jpg",
        "assets/cook4.jpg",
      ],
    },
    Cultural: {
      title: "Cultural Fest",
      description:
        "Our cultural fest celebrates diversity, traditions, and talents through music, dance, and drama performances.",
      aim: "To promote cultural awareness, creativity, and unity among students.",
      images: [
        "assets/cultural1.JPG",
        "assets/cultural2.jpg",
        "assets/cultural3.jpg",
        "assets/cultural4.JPG",
      ],
    },
    Farewell: {
      title: "Farewell Function",
      description:
        "Our farewell function is a heartfelt occasion to cherish memories and bid farewell to our beloved seniors.",
      aim: "To celebrate achievements, friendships, and wish our seniors success in their future journey.",
      images: ["assets/farewell1.jpg", "assets/students.JPG"],
    },
    Kamarajarday: {
      title: "Kamarajar Day",
      description:
        "Kamarajar Day is observed to honor the contributions of the great leader who emphasized education and simplicity.",
      aim: "To inspire students with the values of honesty, hard work, and service to society.",
      images: [
        "assets/kam1.jpg",
        "assets/kam2.jpg",
        "assets/kam3.jpg",
        "assets/kam4.jpg",
      ],
    },
    Independentday: {
      title: "Independence Day Celebration",
      description:
        "Our Independence Day celebration is filled with pride, patriotism, and performances honoring our nation’s freedom.",
      aim: "To instill love for the country and respect for the sacrifices of our freedom fighters.",
      images: [
        "assets/independent1.jpg",
        "assets/independent2.jpg",
        "assets/independent3.jpg",
        "assets/independent4.jpg",
      ],
    },
    Parentsmeet: {
      title: "Parents Meet",
      description:
        "Our parents meet is an opportunity to strengthen the bond between school and home for the growth of students.",
      aim: "To share progress, exchange feedback, and build stronger relationships with parents.",
      images: [
        "assets/parent1.jpg",
        "assets/parent2.jpg",
        "assets/parent3.jpg",
        "assets/parent4.jpg",
      ],
    },
    Staffmeet: {
      title: "Staff Meet",
      description:
        "Our staff meet provides a space for collaboration, planning, and sharing new ideas for better learning outcomes.",
      aim: "To enhance teamwork, improve teaching strategies, and support student success.",
      images: ["assets/staff1.jpg", "assets/staff2.jpg", "assets/staff3.jpg"],
    },
    Tour: {
      title: "Educational Tour",
      description:
        "Our educational tour helps students learn beyond classrooms and explore new experiences in a fun way.",
      aim: "To combine learning with adventure, broaden perspectives, and create lifelong memories.",
      images: [
        "assets/tour1.jpg",
        "assets/tour2.jpg",
        "assets/tour3.jpg",
        "assets/tour4.jpg",
      ],
    },
  };

  return (
    <div>
      <div className="relative py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/assets/banner.jpg')",
          }}
        ></div>

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }}></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Events</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Celebrating learning, achievements, and the journey of our students at Satguru Study Centre
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
            {Object.keys(events).map((key) => (
              <button
                key={key}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === key
                    ? "bg-satguru text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(key)}
              >
                {key.replace(/([A-Z])/g, " $1").trim()}
              </button>
            ))}
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
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        src={image}
                        alt={`${events[activeTab as keyof typeof events].title} - ${
                          index + 1
                        }`}
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
    </div>
  );
}
