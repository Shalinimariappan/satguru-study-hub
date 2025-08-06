
import { GraduationCap, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">About Satguru Study Centre</h2>
          <div className="w-20 h-1 bg-satguru mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to Satguru Study Centre- The best place to learn, grow, and succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Empowering Minds since 2019</h3>
            <p className="text-gray-600 mb-4">
              Satguru Study Centre is one of the most trusted educational institutions in New Washermenpet, Chennai. For over 6 years, we have been committed to shaping the academic journey of students from I to XII by providing structured, syllabus-oriented, and value-driven education.
At Satguru, we don’t just teach; we build strong foundations that lead to academic excellence, personal growth, and lifelong learning.
With small batch sizes, focused attention, and timely feedback, our centre becomes a second home for learning — where doubts are welcomed, and success is celebrated.
We help every student build a strong foundation for the future.

            </p>
            <p className="text-gray-600 mb-6">
              With a team of dedicated teachers and a structured curriculum, we have been
              consistently delivering excellent results with a success rate of 98%.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 text-satguru mr-2" />
                <span className="font-medium">Expert Faculty</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-satguru mr-2" />
                <span className="font-medium">200+ Students</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-satguru mr-2" />
                <span className="font-medium">98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-satguru mr-2" />
                <span className="font-medium">6 Years Experience</span>
              </div>
            </div>
            
            <Button asChild className="bg-satguru hover:bg-satguru-light">
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
            <img 
                src="assets/child.JPG" 
                alt="Students studying" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-satguru rounded-lg opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-satguru-light rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
