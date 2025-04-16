
import { 
  UserCheck, 
  Target, 
  Lightbulb, 
  BookOpen, 
  Clock, 
  Users
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex space-x-4">
    <div className="flex-shrink-0 mt-1">
      <div className="bg-satguru/10 p-2 rounded-full text-satguru">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function WhyJoinSection() {
  const features = [
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Personalized Attention",
      description: "Individual attention to each student to understand their strengths and areas of improvement."
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Innovative Teaching",
      description: "Modern teaching methodologies combined with traditional approaches for effective learning."
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Focused Approach",
      description: "Targeted learning to help students achieve their academic goals efficiently."
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Comprehensive Curriculum",
      description: "Well-structured curriculum covering all aspects of the syllabus with additional learning resources."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "6 Years of Excellence",
      description: "Established track record of academic excellence and student success for over 6 years."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Strong Student Community",
      description: "Join a community of 200+ students who are pursuing academic excellence together."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Join Satguru Study Centre?</h2>
          <div className="w-20 h-1 bg-satguru mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to helping students achieve their academic potential through dedicated guidance and support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-satguru text-white text-4xl font-bold py-4 px-6 rounded-lg mb-4 md:mb-0 md:mr-6">
              98%
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Exceptional Success Rate</h3>
              <p className="text-gray-600">
                Our students consistently achieve remarkable results, with a 98% success rate in board and school examinations.
                This is a testament to our dedicated teaching methods and personalized attention to each student.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
