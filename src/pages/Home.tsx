
import HeroCarousel from "@/components/home/HeroCarousel";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyJoinSection from "@/components/home/WhyJoinSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <CoursesSection />
      <WhyJoinSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
