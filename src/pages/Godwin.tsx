import React from "react";

const LeadershipProfile = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-satguru/10 to-white">
        <div className="container mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full">
            <img
              src="/assets/godwin.jpeg"
              alt="Mr. Godwin Franklin"
              className="rounded-2xl object-cover w-full h-[480px] shadow-md"
            />
          </div>

          {/* Intro Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Mr. Godwin Franklin
            </h1>
            <p className="text-xl text-satguru font-medium mb-2">
              Co-Founder & Promoter
            </p>
            <p className="text-lg text-gray-700 font-medium mb-4">
              B.Com, Pursuing Chartered Accountancy (CA)
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Mr. Godwin Franklin is the Co-Founder and Promoter of{" "}
              <span className="font-semibold text-satguru">
                Satguru Study Centre (SSC)
              </span>
              . With a strong foundation in commerce and an ongoing pursuit of
              Chartered Accountancy, he combines analytical excellence with a
              visionary approach to education. His passion for teaching and
              mentorship has inspired hundreds of students to excel in
              accountancy and business studies.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-satguru mb-2">
            About Mr. Godwin Franklin
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            As a co-founder of Satguru Study Centre, Mr. Franklin plays a vital
            role in shaping the institution’s philosophy and growth. He is known
            for his precision in handling academics, strategic planning, and
            operations. His expertise in accountancy, coupled with his calm
            leadership, has made him a role model for students who aspire to
            build a strong foundation in commerce and finance.
          </p>
        </div>

        {/* Career Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-satguru mb-2">
            Career Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
            <li>
              Co-founded{" "}
              <span className="font-semibold text-satguru">
                Satguru Study Centre
              </span>{" "}
              — one of the most reputed coaching institutions in Chennai.
            </li>
            <li>
              A strong pillar behind SSC’s growth, ensuring academic excellence
              and operational integrity.
            </li>
            <li>
              Passionately guides and mentors students in{" "}
              <span className="font-medium">accountancy and commerce</span>,
              making complex concepts easy to understand.
            </li>
            <li>
              Plays a key role in shaping SSC’s core values of{" "}
              <span className="font-medium">
                dedication, discipline, and student success.
              </span>
            </li>
          </ul>
        </div>

        {/* Vision & Values */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-satguru mb-2">
            Vision & Values
          </h2>
          <blockquote className="border-l-4 border-satguru pl-4 italic text-gray-600">
            “Education is not just about marks — it’s about mastering the
            mindset to achieve excellence.”
          </blockquote>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Mr. Godwin Franklin envisions Satguru Study Centre as a place where
            every student learns with confidence and purpose. He believes in
            nurturing discipline, conceptual clarity, and strong ethical values
            in every learner. His leadership continues to shape SSC into a
            trusted academic brand known for quality and commitment.
          </p>
        </div>
      </section>

      {/* Student Feedback / Video Section */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Students Remember Mr. Godwin Franklin
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Watch a heartfelt testimonial from students sharing how his guidance
            and motivation shaped their academic journey.
          </p>

          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-[480px] rounded-xl"
              src="https://www.youtube.com/embed/CttbldgMa2Y"
              title="Students Remember Mr. Godwin Franklin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-satguru/10 py-10">
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Want to know more about our leadership team?
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-satguru text-white rounded-full hover:bg-satguru-dark transition"
          >
            Back to Leadership Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default LeadershipProfile;
