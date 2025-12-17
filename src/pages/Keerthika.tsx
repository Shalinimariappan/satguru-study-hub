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
              src="/assets/keerthi.jpeg"
              alt="Ms. Keerthika"
              className="rounded-2xl object-cover w-full h-[480px] shadow-md"
            />
          </div>

          {/* Intro Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Ms. Keerthika
            </h1>
            <p className="text-xl text-satguru font-medium mb-2">
              Co-Founder & Student Success Head
            </p>
            <p className="text-lg text-gray-700 font-medium mb-4">
              M.Pharm
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ms. Keerthika is the Co-Founder and Student Success Head of{" "}
              <span className="font-semibold text-satguru">
                Satguru Study Centre (SSC)
              </span>
              . With a strong background in pharmaceutical sciences and a deep passion for student development, she focuses on building disciplined, confident, and well-rounded learners. Alongside her role at SSC, she is also working at Caplin Point, where she brings her professional expertise and commitment to excellence into practice.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-satguru mb-2">
            About Ms. Keerthika
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ms. Keerthika plays a crucial role in managing students at Satguru
            Study Centre with a strong focus on discipline, motivation, and
            holistic growth. She closely monitors each student’s progress and
            ensures that academic excellence is balanced with personal
            development.
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
                Physics, Chemistry, and Biology
              </span>
              .
            </li>
            <li>
              Designs structured study plans that help students stay consistent
              and exam-ready.
            </li>
            <li>
              Ensures clarity of concepts through systematic learning and
              regular assessments.
            </li>
          </ul>
        </div>

        {/* Leadership & Student Development */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-satguru mb-2">
            Leadership & Student Development
          </h2>
          <blockquote className="border-l-4 border-satguru pl-4 italic text-gray-600">
            “Discipline, encouragement, and balance are the pillars of student
            success.”
          </blockquote>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Ms. Keerthika personally manages students by creating discipline
            plans and guiding them toward positive habits. Beyond academics,
            she actively encourages students to participate in co-curricular
            and extra-curricular activities, helping them grow with confidence,
            responsibility, and self-belief.
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
