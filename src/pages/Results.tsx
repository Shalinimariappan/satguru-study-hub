
import { useState } from "react";
import { ChevronDown, ChevronUp, Award, Star } from "lucide-react";

interface ResultTabProps {
  year: string;
  isActive: boolean;
  onClick: () => void;
}

const ResultTab = ({ year, isActive, onClick }: ResultTabProps) => (
  <button
    className={`px-6 py-3 font-medium transition-colors ${
      isActive
        ? "bg-satguru text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    onClick={onClick}
  >
    {year}
  </button>
);

interface StudentResultCardProps {
  name: string;
  grade: string;
  percentage: string;
  subjects: { name: string; score: string }[];
  image: string;
}

const StudentResultCard = ({
  name,
  grade,
  percentage,
  subjects,
  image,
}: StudentResultCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-500">{grade}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Award className="h-5 w-5 text-satguru mr-2" />
              <span className="font-medium">Overall Percentage:</span>
            </div>
            <span className="text-lg font-bold text-satguru">{percentage}</span>
          </div>
        </div>

        <button
          className="flex items-center justify-between w-full py-2 text-satguru font-medium"
          onClick={() => setExpanded(!expanded)}
        >
          <span>Subject Marks</span>
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {expanded && (
          <div className="mt-3 border-t pt-3">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-1.5"
              >
                <span className="text-gray-700">{subject.name}</span>
                <span className="font-medium">{subject.score}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Results() {
  const [activeYear, setActiveYear] = useState("2023");

  const resultsData = {
    "2023": [
      {
        name: "Ananya Patel",
        grade: "Class XII",
        percentage: "97.8%",
        subjects: [
          { name: "Mathematics", score: "99/100" },
          { name: "Physics", score: "98/100" },
          { name: "Chemistry", score: "97/100" },
          { name: "English", score: "96/100" },
          { name: "Computer Science", score: "99/100" },
        ],
        image: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        name: "Rahul Sharma",
        grade: "Class XII",
        percentage: "96.4%",
        subjects: [
          { name: "Mathematics", score: "98/100" },
          { name: "Physics", score: "95/100" },
          { name: "Chemistry", score: "96/100" },
          { name: "English", score: "97/100" },
          { name: "Biology", score: "96/100" },
        ],
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Priya Singh",
        grade: "Class X",
        percentage: "98.2%",
        subjects: [
          { name: "Mathematics", score: "99/100" },
          { name: "Science", score: "98/100" },
          { name: "Social Science", score: "97/100" },
          { name: "English", score: "99/100" },
          { name: "Hindi", score: "98/100" },
        ],
        image: "https://randomuser.me/api/portraits/women/33.jpg",
      },
      {
        name: "Vikram Mehta",
        grade: "Class X",
        percentage: "95.8%",
        subjects: [
          { name: "Mathematics", score: "94/100" },
          { name: "Science", score: "96/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "98/100" },
          { name: "Hindi", score: "96/100" },
        ],
        image: "https://randomuser.me/api/portraits/men/67.jpg",
      },
    ],
    "2022": [
      {
        name: "Sanjay Kumar",
        grade: "Class XII",
        percentage: "98.2%",
        subjects: [
          { name: "Mathematics", score: "98/100" },
          { name: "Physics", score: "99/100" },
          { name: "Chemistry", score: "98/100" },
          { name: "English", score: "97/100" },
          { name: "Computer Science", score: "99/100" },
        ],
        image: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        name: "Meera Gupta",
        grade: "Class XII",
        percentage: "97.4%",
        subjects: [
          { name: "Mathematics", score: "98/100" },
          { name: "Physics", score: "97/100" },
          { name: "Chemistry", score: "96/100" },
          { name: "English", score: "98/100" },
          { name: "Biology", score: "98/100" },
        ],
        image: "https://randomuser.me/api/portraits/women/24.jpg",
      },
      {
        name: "Arjun Reddy",
        grade: "Class X",
        percentage: "96.8%",
        subjects: [
          { name: "Mathematics", score: "97/100" },
          { name: "Science", score: "98/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Telugu", score: "97/100" },
        ],
        image: "https://randomuser.me/api/portraits/men/42.jpg",
      },
      {
        name: "Kavya Sharma",
        grade: "Class X",
        percentage: "97.0%",
        subjects: [
          { name: "Mathematics", score: "98/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "96/100" },
          { name: "English", score: "97/100" },
          { name: "Hindi", score: "97/100" },
        ],
        image: "https://randomuser.me/api/portraits/women/28.jpg",
      },
    ],
    "2021": [
      {
        name: "Rohit Kapoor",
        grade: "Class XII",
        percentage: "96.6%",
        subjects: [
          { name: "Mathematics", score: "96/100" },
          { name: "Physics", score: "97/100" },
          { name: "Chemistry", score: "96/100" },
          { name: "English", score: "98/100" },
          { name: "Computer Science", score: "96/100" },
        ],
        image: "https://randomuser.me/api/portraits/men/29.jpg",
      },
      {
        name: "Neha Mishra",
        grade: "Class XII",
        percentage: "95.8%",
        subjects: [
          { name: "Mathematics", score: "95/100" },
          { name: "Physics", score: "96/100" },
          { name: "Chemistry", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Biology", score: "96/100" },
        ],
        image: "https://randomuser.me/api/portraits/women/37.jpg",
      },
      {
        name: "Aditya Singh",
        grade: "Class X",
        percentage: "97.4%",
        subjects: [
          { name: "Mathematics", score: "98/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "97/100" },
          { name: "English", score: "98/100" },
          { name: "Hindi", score: "97/100" },
        ],
        image: "https://randomuser.me/api/portraits/men/52.jpg",
      },
      {
        name: "Shreya Joshi",
        grade: "Class X",
        percentage: "96.2%",
        subjects: [
          { name: "Mathematics", score: "96/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Hindi", score: "96/100" },
        ],
        image: "https://randomuser.me/api/portraits/women/48.jpg",
      },
    ],
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-satguru py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Results</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Celebrating the academic achievements of our students
          </p>
        </div>
      </div>

      {/* Result Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Academic Excellence</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in the consistent academic achievements of our students.
              Our 98% success rate is a testament to our dedicated teaching approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-satguru/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-satguru" />
              </div>
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-gray-600">Overall Success Rate</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-satguru/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-satguru" />
              </div>
              <h3 className="text-2xl font-bold mb-2">95+</h3>
              <p className="text-gray-600">Average Percentage in Class XII</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-satguru/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-satguru" />
              </div>
              <h3 className="text-2xl font-bold mb-2">92+</h3>
              <p className="text-gray-600">Average Percentage in Class X</p>
            </div>
          </div>
        </div>
      </section>

      {/* Year-wise Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Performers</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the achievements of our top-performing students year by year
            </p>
          </div>

          {/* Year Tabs */}
          <div className="flex flex-wrap justify-center mb-10">
            {Object.keys(resultsData).map((year) => (
              <ResultTab
                key={year}
                year={year}
                isActive={year === activeYear}
                onClick={() => setActiveYear(year)}
              />
            ))}
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resultsData[activeYear as keyof typeof resultsData].map(
              (student, index) => (
                <StudentResultCard key={index} {...student} />
              )
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to achieve similar results?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Satguru Study Centre and let us help you excel in your academics with our proven teaching methodology.
          </p>
          <a 
            href="/contact" 
            className="bg-satguru hover:bg-satguru-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </div>
  );
}
