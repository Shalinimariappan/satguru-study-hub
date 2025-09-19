"use client";

import { 
  BookOpen, 
  Calculator, 
  Atom, 
  Globe, 
  Languages 
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CourseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  type: string;
  fees: string;
  admission?: string;
  duration: string;
  subjects: string[];
}

const CourseCard = ({ 
  icon, 
  title, 
  description, 
  type, 
  fees, 
  admission, 
  duration, 
  subjects 
}: CourseProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
    <div className="p-6">
      <div className="flex items-start">
        <div className="bg-satguru/10 p-3 rounded-full text-satguru mr-4 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Type</h4>
          <p className="font-medium">{type}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Timing</h4>
          <p className="font-medium">{duration}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">Subjects Covered</h4>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 text-xs rounded-full text-gray-700">
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
    
    <div className="bg-gray-50 py-4 px-6 border-t border-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-500">Monthly Fee</span>
          <p className="text-xl font-bold text-satguru">{fees}</p>
          {admission && <p className="text-sm text-gray-500">Admission: {admission}</p>}
        </div>
        <a 
          href="/contact" 
          className="bg-satguru hover:bg-satguru-dark text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
        >
          Enquire Now
        </a>
      </div>
    </div>
  </div>
);

export default function Courses() {
  // 🔊 Play sound on slide change
  const playSound = () => {
    const audio = new Audio("/assets/slide-sound.mp3");
    audio.play();
  };

  // 📚 Updated courses data
  const lowerCourses = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "LKG",
      description: "Specialized program for early learners.",
      type: "StateBoard(TNSB)",
      fees: "₹450/month",
      admission: "₹90",
      duration: "5:30PM - 8:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "UKG",
      description: "Focused program for growing kids.",
      type: "StateBoard(TNSB)",
      fees: "₹500/month",
      admission: "₹100",
      duration: "5:30PM - 8:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "Class I",
      description: "Rigorous program for foundation building.",
      type: "StateBoard(TNSB)",
      fees: "₹550/month",
      admission: "₹110",
      duration: "5:30PM - 8:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Class II",
      description: "Strong foundation program.",
      type: "StateBoard(TNSB)",
      fees: "₹600/month",
      admission: "₹120",
      duration: "5:30PM - 8:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Class III",
      description: "Transition learning stage.",
      type: "StateBoard(TNSB)",
      fees: "₹650/month",
      admission: "₹130",
      duration: "5:30PM - 8:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Class IV",
      description: "Specialized program for transition years.",
      type: "StateBoard(TNSB)",
      fees: "₹700/month",
      admission: "₹140",
      duration: "5:30PM - 8:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "Class V",
      description: "Focused program for deeper learning.",
      type: "StateBoard(TNSB)",
      fees: "₹750/month",
      admission: "₹150",
      duration: "5:30PM - 8:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    }
  ];

  const PreparatorCourses = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Class VI",
      description: "Rigorous program preparing for middle school.",
      type: "StateBoard(TNSB)",
      fees: "₹900/month",
      admission: "₹180",
      duration: "5:30PM - 9:00PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Class VII",
      description: "Strong program to prepare for higher levels.",
      type: "StateBoard(TNSB)",
      fees: "₹1000/month",
      admission: "₹200",
      duration: "5:30PM - 9:00PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "Class VIII",
      description: "Intensive program for board prep foundation.",
      type: "StateBoard(TNSB)",
      fees: "₹1100/month",
      admission: "₹220",
      duration: "5:30PM - 9:00PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Class IX",
      description: "Advanced learning program before SSC.",
      type: "StateBoard(TNSB)",
      fees: "₹1200/month",
      admission: "₹240",
      duration: "5:30PM - 9:00PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    }
  ];

  const SSC = [
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Class X (SSC)",
      description: "Special program focused on board preparation.",
      type: "StateBoard(TNSB)",
      fees: "₹1300/month",
      admission: "₹260",
      duration: "6:00PM - 9:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    }
  ];

  const HSC = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Class XI (Commerce)",
      description: "Higher Secondary Commerce program.",
      type: "StateBoard(TNSB)",
      fees: "₹1400/month",
      admission: "₹280",
      duration: "6:00PM - 9:30PM",
      subjects: ["Accountancy", "Commerce", "Economics", "English", "Business Maths", "Tamil", "Computer Application"]
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "Class XI (Science)",
      description: "Higher Secondary Science program.",
      type: "StateBoard(TNSB)",
      fees: "₹1500/month",
      admission: "₹300",
      duration: "6:00PM - 9:30PM",
      subjects: ["Physics", "Chemistry", "Biology","Maths", "English", "Tamil","Computer Science"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Class XII (Commerce)",
      description: "Final year Commerce program.",
      type: "StateBoard(TNSB)",
      fees: "₹1600/month",
      admission: "₹320",
      duration: "6:00PM - 9:30PM",
      subjects: ["Accountancy", "Commerce", "Economics", "English", "Business Maths", "Tamil", "Computer Application"]
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "Class XII (Science)",
      description: "Final year Science program.",
      type: "StateBoard(TNSB)",
      fees: "₹1700/month",
      admission: "₹340",
      duration: "6:00PM - 9:30PM",
      subjects: ["Physics", "Chemistry", "Biology","Maths", "English", "Tamil","Computer Science"]
    }
  ];

  // 🎠 Carousel reusable wrapper
  const Carousel = ({ courses }: { courses: CourseProps[] }) => (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1.2}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      onSlideChange={playSound}
      className="pb-10"
    >
      {courses.map((course, index) => (
        <SwiperSlide key={index}>
          <CourseCard {...course} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/assets/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }}></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Courses</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about Satguru Study Centre and our commitment to educational excellence
          </p>
        </div>
      </div>

    {/* Special Note */}
<div className="container mx-auto px-4 mt-8 flex items-center">
  <div className="bg-blue-100 border border-blue-300 rounded-md px-3 py-2 text-left shadow-sm">
    <p className="text-sm font-medium text-blue-800">
      💡Note: Single parent fees charge will be 70% (Save 30%)
    </p>
  </div>
</div>


      {/* Foundational */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Foundational Level (LKG to V)</h2>
          <Carousel courses={lowerCourses} />
        </div>
      </section>

      {/* Preparator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Preparator Level (VI to IX)</h2>
          <Carousel courses={PreparatorCourses} />
        </div>
      </section>

      {/* SSC */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Secondary School (SSC - Class X)</h2>
          <Carousel courses={SSC} />
        </div>
      </section>

      {/* HSC */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Higher Secondary (HSC - XI & XII)</h2>
          <Carousel courses={HSC} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-satguru">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Enroll?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Satguru Study Centre today and give your child the academic support they need to excel.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-satguru px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
