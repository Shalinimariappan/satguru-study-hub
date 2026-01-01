"use client";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const founders = [
  {
    name: "Mrs. Malini",
    role: "Co-Founder & Managing Director",
    image: "/assets/malini.jpeg",
    link: "/malini",
  },
  {
    name: "Mr. Godwin",
    role: "Co-Founder & Promoter",
    image: "/assets/godwin.jpeg",
    link: "/godwin",
  },
  {
    name: "Ms. Keerthika",
    role: "Chief Operating Officer(COO)",
    image: "/assets/keerthi.jpeg",
    link: "/keerthika",
  },
];

export default function Founders() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Management Team of SSC</h2>
          <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate minds behind Satguru Study Centre — the driving
            force inspiring hundreds of students to reach academic excellence.
          </p>
        </div>

        {/* 📱 Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            className="pb-10"
          >
            {founders.map((founder, index) => (
              <SwiperSlide key={index}>
                <FounderCard {...founder} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 💻 Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <FounderCard key={index} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🔹 Founder Card */
function FounderCard({
  name,
  role,
  image,
  link,
}: {
  name: string;
  role: string;
  image: string;
  link: string;
}) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
      <img
        src={image}
        alt={name}
        className="w-full h-[420px] object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500
                   flex flex-col justify-end items-center text-center p-6"
      >
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-gray-200 mb-4 text-sm">{role}</p>
        <Link
          to={link}
          className="bg-satguru text-white px-5 py-2 rounded-lg
                     hover:bg-satguru-dark transition-colors"
        >
          About
        </Link>
      </div>
    </div>
  );
}
