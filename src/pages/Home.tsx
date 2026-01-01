
import HeroCarousel from "@/components/home/HeroCarousel";
import AboutSection from "@/components/home/AboutSection";
import Founders from "@/components/home/Founders";
import CoursesSection from "@/components/home/CoursesSection";
import NotesIntroSection from "@/components/home/NotesIntroSection";
import WhyJoinSection from "@/components/home/WhyJoinSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <Founders />
      <CoursesSection />
      <NotesIntroSection/>
      <WhyJoinSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
