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
              src="/assets/malini.jpeg"
              alt="Mrs. Malini"
              className="rounded-2xl object-cover w-full h-[480px] shadow-md"
            />
          </div>

          {/* Intro Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Mrs. Malini
            </h1>
            <p className="text-xl text-satguru font-medium mb-2">
              Founder & Managing director
            </p>
            <p className="text-lg text-gray-700 font-medium mb-4">
              B.Sc, MCA, B.Ed
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Mrs. Malini is the Co-Founder and Academic Director of{" "}
              <span className="font-semibold text-satguru">
                Satguru Study Centre (SSC)
              </span>   
              . With a strong academic foundation and a passion for education, she plays a vital role in shaping students’ learning journeys. Her leadership reflects discipline, care, and a deep commitment to academic excellence. In addition to her role at SSC, she is also working as a Computer Science Teacher at KC Sankaralinga Nadar Higher Secondary School, where she continues to inspire and guide students with dedication and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-satguru mb-2">
            About Mrs. Malini
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Mrs. Malini has been instrumental in building and managing the
            managing structure of Satguru Study Centre from the ground up.
            As an Academic Director, she oversees curriculum planning,
            faculty coordination, and student progress with a hands-on
            approach. Her ability to balance academics and mentorship makes
            her a trusted guide for both students and parents.
          </p>
        </div>

        {/* Academic Expertise */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-satguru mb-2">
            Academic Expertise
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
            <li>
              Heads the <span className="font-medium">Science Group</span> with
              specialization in{" "}
              <span className="font-medium">
                Computer Science & Computer Applications
              </span>
              .
            </li>
            <li>
              Designs and monitors academic plans to ensure strong conceptual
              clarity and consistent performance.
            </li>
            <li>
              Integrates discipline, practical understanding, and exam-focused
              strategies into daily learning.
            </li>
          </ul>
        </div>

        {/* Leadership & Responsibility */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-satguru mb-2">
            Leadership & Responsibilities
          </h2>
          <blockquote className="border-l-4 border-satguru pl-4 italic text-gray-600">
            “True education begins with personal attention and genuine care.”
          </blockquote>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Mrs. Malini personally manages and mentors students while also
            maintaining direct communication with parents. Her involvement
            ensures transparency, trust, and a supportive learning environment.
            She strongly believes that academic success is achieved through
            collaboration between educators, students, and families.
          </p>
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
