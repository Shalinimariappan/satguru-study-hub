
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselItems = [
  {
    id: 1,
    title: "Excellence in Education",
    subtitle: "Providing quality tuition for students from LKG to XII",
    description: "Join Satguru Study Centre to excel in your academics with our expert guidance.",
    image: "/assets/students.JPG",
    ctaText: "Explore Courses",
    ctaLink: "/courses"
  },
  {
    id: 2,
    title: "98% Success Rate",
    subtitle: "Proven track record of academic excellence",
    description: "Our students consistently achieve top scores in their examinations.",
    image: "/assets/about.jpg",
    ctaText: "View Results",
    ctaLink: "/results"
  },
  {
    id: 3,
    title: "Expert Teachers",
    subtitle: "Learn from qualified and experienced educators",
    description: "Our faculty brings years of teaching experience to help students reach their potential.",
    image: "assets/staffs.JPG",
    ctaText: "About Us",
    ctaLink: "/about"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Slides */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-black">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">{item.title}</h2>
              <h3 className="text-white text-xl md:text-2xl mb-4">{item.subtitle}</h3>
              <p className="text-white text-lg mb-8">{item.description}</p>
              <Button
                asChild
                className="bg-satguru hover:bg-satguru-light text-white px-6 py-2 text-lg"
              >
                <a href={item.ctaLink}>{item.ctaText}</a>
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-satguru" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
