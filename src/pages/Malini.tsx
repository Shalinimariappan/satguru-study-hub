import React from "react";

const LeadershipProfile = () => {
  return (
    
    <div className=" text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-50 to-white">
        <div className="container mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Dr. Ramesh Kumar"
              className="rounded-2xl object-cover w-full h-[480px] shadow-md"
            />
          </div>

          {/* Intro Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Dr. Ramesh Kumar
            </h1>
            <p className="text-xl text-sky-600 font-medium mb-4">Principal</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With over 15 years of experience, Dr. Kumar leads our institution
              with bold vision and innovation. His leadership is rooted in
              academic excellence and student-centric transformation.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-sky-700 mb-2">
            About Dr. Kumar
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Dr. Ramesh Kumar has been with the institution since its inception.
            His commitment to nurturing impactful learning experiences has
            transformed how students engage with education today. He believes
            that great learning is fueled by empathy, curiosity, and a deep
            sense of purpose.
          </p>
        </div>

        {/* Career Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-sky-700 mb-2">
            Career Highlights
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Over the years, Dr. Kumar has expanded the academic team,
            restructured the curriculum, and introduced innovative teaching
            methods. His strategic leadership has resulted in top-performing
            students and meaningful institutional partnerships.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-sky-700 mb-2">
            Vision & Values
          </h2>
          <blockquote className="border-l-4 border-sky-600 pl-4 italic text-gray-600">
            “Education should be fearless, inclusive, and forward-thinking.”
          </blockquote>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Dr. Kumar regularly contributes to national conversations on
            inclusive education and is a prominent voice at education summits.
            His philosophy emphasizes adaptability, technology in learning, and
            personal growth.
          </p>
        </div>
      </section>

      {/* Student Feedback Photo Wall */}
<section className=" bg-gray-50 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
      Students Remember Dr. Kumar
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      A glimpse of handwritten feedback, thank you notes, and heartfelt messages from students whose lives were touched by his leadership.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <img
          src="https://i.imgur.com/Ed0lCZT.jpg" // Replace with actual student + feedback image
          alt="Student Feedback 1"
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <img
          src="https://i.imgur.com/4ZQZx2O.jpg"
          alt="Student Feedback 2"
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <img
          src="https://i.imgur.com/rB2yAVQ.jpg"
          alt="Student Feedback 3"
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Add more if needed */}
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="bg-sky-50 py-10">
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Want to learn more about our team?
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition"
          >
            Back to Leadership Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default LeadershipProfile;
