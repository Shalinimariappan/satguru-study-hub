import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent of Class X Student",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    quote: "Satguru Study Centre has been instrumental in my child's academic growth. The teachers are highly qualified and provide individual attention. My son's grades have improved significantly since joining.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // sample
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Parent of Class XII Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The dedication of teachers at Satguru Study Centre is commendable. They not only focus on academics but also on the overall development of students. My daughter scored 95% in her board exams thanks to their guidance.",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY"
  },
  {
    id: 3,
    name: "Anita Patel",
    role: "Parent of Primary Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "What sets Satguru Study Centre apart is their personalized approach to teaching. They understand each child's learning pace and adapt their methods accordingly. Highly recommended for young learners.",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Parent of Class XI Student",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "The study materials provided by Satguru Study Centre are comprehensive and well-structured. The regular tests and feedback have helped my son develop good study habits and improve his performance.",
    video: "https://www.youtube.com/embed/kXYiU_JCYtU"
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What Parents Say</h2>
          <div className="w-20 h-1 bg-satguru mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from parents whose children have benefited from our tuition programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
                    <div className="flex justify-center mb-6">
                      <Quote className="h-10 w-10 text-satguru opacity-30" />
                    </div>

                    <p className="text-gray-700 text-lg text-center italic mb-6">
                      "{testimonial.quote}"
                    </p>

                    {testimonial.video && (
                      <div className="mb-6">
                        <div className="aspect-w-16 aspect-h-9">
                          <iframe
                            src={testimonial.video}
                            title="Video Testimonial"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-64 rounded-lg shadow"
                          ></iframe>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? "bg-satguru" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
