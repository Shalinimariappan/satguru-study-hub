
import { BookOpen, School, Brain, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  levels: string[];
}

const CourseCard = ({ icon, title, description, levels }: CourseCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="bg-satguru/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-gray-500 mb-2">Available for:</h4>
      <div className="flex flex-wrap gap-2">
        {levels.map((level, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">
            {level}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function CoursesSection() {
  const courses = [
    {
      icon: <BookOpen className="h-6 w-6 text-satguru" />,
      title: "Language Studies",
      description: "English, Hindi, Tamil and more language courses to build strong communication skills.",
      levels: ["LKG", "UKG", "I-V", "VI-VIII", "IX-X", "XI-XII"]
    },
    {
      icon: <Calculator className="h-6 w-6 text-satguru" />,
      title: "Mathematics",
      description: "Build a strong foundation in mathematics with our structured curriculum.",
      levels: ["I-V", "VI-VIII", "IX-X", "XI-XII"]
    },
    {
      icon: <Brain className="h-6 w-6 text-satguru" />,
      title: "Science",
      description: "Physics, Chemistry, Biology and Environmental Science for all grades.",
      levels: ["VI-VIII", "IX-X", "XI-XII"]
    },
    {
      icon: <School className="h-6 w-6 text-satguru" />,
      title: "Social Studies",
      description: "History, Geography, Civics and Economics for comprehensive learning.",
      levels: ["VI-VIII", "IX-X", "XI-XII"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Courses</h2>
          <div className="w-20 h-1 bg-satguru mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive tuition for all subjects from LKG to Class XII.
            Choose from a variety of courses designed to help students excel academically.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-satguru hover:bg-satguru-light">
            <a href="/courses">View All Courses</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
