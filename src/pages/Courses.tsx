
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  Globe, 
  Languages, 
  Code, 
  BookMarked
} from "lucide-react";

interface CourseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ageGroup: string;
  fees: string;
  duration: string;
  subjects: string[];
}

const CourseCard = ({ 
  icon, 
  title, 
  description, 
  ageGroup, 
  fees, 
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
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Age Group</h4>
          <p className="font-medium">{ageGroup}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Duration</h4>
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
  const primaryCourses = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "LKG & UKG",
      description: "Foundation program for kindergarten students focusing on basic concepts and skill development.",
      ageGroup: "3-6 years",
      fees: "₹1,000/month",
      duration: "2 hours daily",
      subjects: ["English", "Mathematics", "General Knowledge", "Drawing", "Rhymes"]
    },
    {
      icon: <BookMarked className="h-6 w-6" />,
      title: "Classes I-II",
      description: "Primary education program designed to build strong fundamentals across all subjects.",
      ageGroup: "6-8 years",
      fees: "₹1,200/month",
      duration: "2 hours daily",
      subjects: ["English", "Mathematics", "Environmental Studies", "Language Skills"]
    },
    {
      icon: <BookMarked className="h-6 w-6" />,
      title: "Classes III-V",
      description: "Comprehensive program for upper primary students covering all academic subjects.",
      ageGroup: "8-11 years",
      fees: "₹1,500/month",
      duration: "2.5 hours daily",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Languages"]
    }
  ];
  
  const middleCourses = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Classes VI-VIII",
      description: "Structured program for middle school students with focus on building conceptual understanding.",
      ageGroup: "11-14 years",
      fees: "₹1,800/month",
      duration: "3 hours daily",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Languages"]
    }
  ];
  
  const secondaryCourses = [
    {
      icon: <Atom className="h-6 w-6" />,
      title: "Classes IX-X",
      description: "Intensive program for board preparation with regular tests and comprehensive study materials.",
      ageGroup: "14-16 years",
      fees: "₹2,200/month",
      duration: "3 hours daily",
      subjects: ["English", "Mathematics", "Science", "Social Science", "Languages"]
    }
  ];
  
  const seniorCourses = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Classes XI-XII (Humanities)",
      description: "Specialized program for senior secondary students pursuing humanities stream.",
      ageGroup: "16-18 years",
      fees: "₹2,500/month",
      duration: "3 hours daily",
      subjects: ["English", "History", "Geography", "Political Science", "Economics"]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Classes XI-XII (Commerce)",
      description: "Focused program for commerce students with emphasis on practical application.",
      ageGroup: "16-18 years",
      fees: "₹2,500/month",
      duration: "3 hours daily",
      subjects: ["English", "Accountancy", "Business Studies", "Economics", "Mathematics"]
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "Classes XI-XII (Science)",
      description: "Rigorous program for science students preparing for competitive exams and boards.",
      ageGroup: "16-18 years",
      fees: "₹2,800/month",
      duration: "3.5 hours daily",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"]
    }
  ];
  
  const specialCourses = [
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Language Enhancement",
      description: "Special program focused on improving language proficiency in English, Hindi, Tamil, and other languages.",
      ageGroup: "All ages",
      fees: "₹1,000/month",
      duration: "2 hours (3 days/week)",
      subjects: ["Reading", "Writing", "Speaking", "Listening", "Grammar"]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Mathematics Excellence",
      description: "Specialized coaching for students who need extra attention in mathematics.",
      ageGroup: "All ages",
      fees: "₹1,200/month",
      duration: "2 hours (3 days/week)",
      subjects: ["Arithmetic", "Algebra", "Geometry", "Trigonometry", "Calculus"]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-satguru py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive tuition programs for students from LKG to Class XII
          </p>
        </div>
      </div>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Satguru Study Centre, we offer structured tuition programs for all educational stages.
              Our curriculum is aligned with school syllabi and designed to help students excel academically.
            </p>
          </div>
          
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-md mb-12">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Our Courses?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-satguru/10 p-1 rounded-full text-satguru mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Comprehensive curriculum covering all subjects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-satguru/10 p-1 rounded-full text-satguru mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Expert teachers with years of teaching experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-satguru/10 p-1 rounded-full text-satguru mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Regular assessment and progress tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-satguru/10 p-1 rounded-full text-satguru mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Small batch sizes for personalized attention</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-satguru/10 p-1 rounded-full text-satguru mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Comprehensive study materials and resources</span>
                  </li>
                </ul>
              </div>
              
              <div className="hidden md:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format" 
                  alt="Students studying" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-satguru rounded-lg opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Classes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Primary Classes (LKG to V)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Middle Classes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Middle Classes (VI to VIII)</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {middleCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Classes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Secondary Classes (IX to X)</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {secondaryCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Secondary Classes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Senior Secondary Classes (XI to XII)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seniorCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Special Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {specialCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
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
