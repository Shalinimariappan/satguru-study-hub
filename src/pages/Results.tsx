
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
    <h1 className="text-4xl font-bold mb-4">Our Results</h1>
    <p className="text-xl max-w-2xl mx-auto">
      Learn more about Satguru Study Centre and our commitment to educational excellence
    </p>
  </div>
</div>


      

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
      <section className="py-16 bg-satguru">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Want to achieve similar results?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Join Satguru Study Centre and let us help you excel in your academics with our proven teaching methodology.
          </p>
          <a 
            href="/contact" 
            className="bg-white hover:bg-satguru-100 text-satguru px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </div>
  );
}
