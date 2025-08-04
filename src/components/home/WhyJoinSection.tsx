
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
      title: "Focus on Individual Attention",
      description: "We believe that personal support makes all the difference. That’s why we maintain small groups, encourage questions, and provide regular test analysis for improvement."
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
      title: "Strong Academic Support",
      description: "Our coaching is syllabus-based, exam-oriented, and thoroughly aligned with school standards. Whether it’s basics in primary classes or board exam prep in higher secondary, we provide complete academic guidance."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "6 Years of Excellence",
      description: "Established track record of academic excellence and student success for over 6 years."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Parent-Teacher Connection",
      description: "We maintain regular communication with parents through timely updates and shared academic plans. A portion sheet will be provided for each subject, and students are expected to get it signed weekly by their parents. Dedicated parent–teacher meetings will also be held for Classes X, XI, and XII during board exam preparation to ensure focused support and progress tracking."
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
        
        
      </div>
    </section>
  );
}
