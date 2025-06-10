
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
  type: string;
  fees: string;
  duration: string;
  subjects: string[];
}

const CourseCard = ({ 
  icon, 
  title, 
  description, 
  type, 
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
 
  

  const lowerCourses = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "LKG",
      description: "Specialized program for senior secondary students pursuing humanities stream.",
      type: "StateBoard(TNSB)",
      fees: "₹450/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "UKG",
      description: "Focused program for commerce students with emphasis on practical application.",
      type: "StateBoard(TNSB)",
      fees: "₹500/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "CLASS I",
      description: "Rigorous program for science students preparing for competitive exams and boards.",
      type: "StateBoard(TNSB)",
      fees: "₹550/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
     {
      icon: <Calculator className="h-6 w-6" />,
      title: "CLASS II",
      description: "Focused program for commerce students with emphasis on practical application.",
      type: "StateBoard(TNSB)",
      fees: "₹600/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
     {
      icon: <Globe className="h-6 w-6" />,
      title: "CLASS III",
      description: "Specialized program for senior secondary students pursuing humanities stream.",
      type: "StateBoard(TNSB)",
      fees: "₹650/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    }
  ];
   const PreparatorCourses = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "CLASS IV",
      description: "Specialized program for senior secondary students pursuing humanities stream.",
      type: "StateBoard(TNSB)",
      fees: "₹700/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "CLASS V",
      description: "Focused program for commerce students with emphasis on practical application.",
      type: "StateBoard(TNSB)",
      fees: "₹750/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
  ];

  const MiddleCourses = [
    {
      icon: <Atom className="h-6 w-6" />,
      title: "CLASS VI",
      description: "Rigorous program for science students preparing for competitive exams and boards.",
      type: "StateBoard(TNSB)",
      fees: "₹900/month",
      duration: "5:30PM - 8:00PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "CLASS VII",
      description: "Specialized program for senior secondary students pursuing humanities stream.",
      type: "StateBoard(TNSB)",
      fees: "₹1000/month",
      duration: "5:30PM - 8:00PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "CLASS VIII",
      description: "Focused program for commerce students with emphasis on practical application.",
      type: "StateBoard(TNSB)",
      fees: "₹1100/month",
      duration: "5:45PM - 8:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "CLASS IX",
      description: "Rigorous program for science students preparing for competitive exams and boards.",
      type: "StateBoard(TNSB)",
      fees: "₹1200/month",
      duration: "5:45PM - 8:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    }
  ];
  
  
  const specialCourses = [
    {
      icon: <Languages className="h-6 w-6" />,
      title: "CLASS X",
      description: "Special program focused on improving language proficiency in English, Hindi, Tamil, and other languages.",
      type: "StateBoard(TNSB)",
      fees: "₹1,300/month",
      duration: "6:00PM - 9:00PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
  ];

const HigherCourses = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "XI-SCIENCE (PCM)",
      description: "Specialized program for senior secondary students pursuing humanities stream.",
      type: "StateBoard(TNSB)",
      fees: "₹450/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "UKG",
      description: "Focused program for commerce students with emphasis on practical application.",
      type: "StateBoard(TNSB)",
      fees: "₹500/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "CLASS I",
      description: "Rigorous program for science students preparing for competitive exams and boards.",
      type: "StateBoard(TNSB)",
      fees: "₹550/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
     {
      icon: <Calculator className="h-6 w-6" />,
      title: "CLASS II",
      description: "Focused program for commerce students with emphasis on practical application.",
      type: "StateBoard(TNSB)",
      fees: "₹600/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    },
     {
      icon: <Globe className="h-6 w-6" />,
      title: "CLASS III",
      description: "Specialized program for senior secondary students pursuing humanities stream.",
      type: "StateBoard(TNSB)",
      fees: "₹650/month",
      duration: "5:15PM - 7:30PM",
      subjects: ["Tamil","English", "Mathematics", "Science", "Social Science"]
    }
  ];

  return (
    <div>
      <div className="relative py-16">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{
      backgroundImage:
        "url('/assets/banner.jpg')",
    }}
  ></div>

  {/* Color Overlay with 65% opacity */}
  <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }}></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center text-white">
    <h1 className="text-4xl font-bold mb-4">Courses</h1>
    <p className="text-xl max-w-2xl mx-auto">
      Learn more about Satguru Study Centre and our commitment to educational excellence
    </p>
  </div>
</div>

      

    

      {/* Senior Secondary Classes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Foundational Level (LKG to II)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lowerCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

       <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Preparator Level (IV to VI)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PreparatorCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Middle School Stage (VII to IX)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MiddleCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">High School Stage(X)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {specialCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Higher Secondary Stage (XI to XII)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HigherCourses.map((course, index) => (
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
