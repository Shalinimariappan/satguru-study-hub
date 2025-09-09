import { useState } from "react";
import { ChevronDown, ChevronUp, Award } from "lucide-react";
interface ResultTabProps {
  year: string;
  isActive: boolean;
  onClick: () => void;
}

const ResultTab = ({ year, isActive, onClick }: ResultTabProps) => (
  <button
    className={`px-6 py-3 font-medium transition-colors ${
      isActive ? "bg-satguru text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    onClick={onClick}
  >
    {year}
  </button>
);

interface Subject {
  name: string;
  score: string;
}

interface StudentResultCardProps {
  name: string;
  grade: string;
  marks: string;
  percentage: string;
  image: string;
  subjects?: Subject[]; // <-- optional subject-wise marks
}

const StudentResultCard = ({
  name,
  grade,
  marks,
  percentage,
  image,
  subjects = [],
}: StudentResultCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-500">{grade}</p>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <Award className="h-5 w-5 text-satguru mr-2" />
            <span className="font-medium">Overall %</span>
          </div>
          <span className="text-lg font-bold text-satguru">{percentage}</span>
        </div>

        <button
          className="flex items-center justify-between w-full py-2 text-satguru font-medium"
          onClick={() => setExpanded((s) => !s)}
          aria-expanded={expanded}
        >
          <span>View Full Marks</span>
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {expanded && (
          <div className="mt-3 border-t pt-3">
            {/* Always show totals */}
            <div className="flex justify-between items-center py-1.5">
              <span className="text-gray-700">Total Marks</span>
              <span className="font-medium">{marks}</span>
            </div>

            {/* Subject-wise breakdown (if present) */}
            {subjects && subjects.length > 0 ? (
              <div className="mt-3">
                {subjects.map((sub, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1.5 border-b last:border-b-0">
                    <span className="text-gray-700">{sub.name}</span>
                    <span className="font-medium">{sub.score}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 mt-3">Subject-wise marks not added yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Results() {
  const [activeYear, setActiveYear] = useState("2023-2024");

  const placeholderImg = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

  const resultsData: Record<string, StudentResultCardProps[]> = {
    "2019-2020": [
      {
        name: "R. Keerthana",
        grade: "X",
        marks: "367/500",
        percentage: "74%",
        image: placeholderImg,
        subjects: [{ name: "Tamil", score: "81/100" },
          { name: "English", score: "83/100" },
          { name: "Mathematics", score: "67/100" },
          { name: "Science", score: "68/100" },
          { name: "Social Science", score: "68/100" },], // add subject list here when available
      },
      {
        name: "W. Arthi",
        grade: "XI-Com",
        marks: "460/600",
        percentage: "77%",
        image: placeholderImg,
        subjects: [{ name: "Mathematics", score: "96/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Tamil", score: "96/100" },], // add subject list here when available
      },
      {
        name: "T. Rakesh",
        grade: "XII-Com",
        marks: "486/600",
        percentage: "81%",
        image: placeholderImg,
        subjects: [{ name: "Mathematics", score: "96/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Tamil", score: "96/100" },], // add subject list here when available
      },
    ],
    "2020-2021": [
      {
        name: "V. Vishal",
        grade: "X",
        marks: "462/500",
        percentage: "92.4%",
        image: "/assets/vishali.jpg",
        subjects: [{ name: "Mathematics", score: "96/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Hindi", score: "96/100" },],
      },
      {
        name: "W. Arthi",
        grade: "XII-Com",
        marks: "522/600",
        percentage: "87%",
        image: placeholderImg,
        subjects: [{ name: "Mathematics", score: "96/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Tamil", score: "96/100" },], // add subject list here when available
      },
    ],
    "2021-2022": [
        {
        name: "S. Jai Kumar",
        grade: "X",
        marks: "378/500",
        percentage: "75.6%",
        image: placeholderImg,
        subjects: [{ name: "Tamil", score: "61/100" },
          { name: "English", score: "78/100" },
          { name: "Mathematics", score: "67/100" },
          { name: "Science", score: "84/100" },
          { name: "Social Science", score: "88/100" },],
      },
      {
        name: "V. Vishal",
        grade: "XI (COM)",
        marks: "560/600",
        percentage: "93.3%",
        image: "/assets/vishali.jpg",
        subjects: [{ name: "Tamil", score: "87/100" },
          { name: "English", score: "88/100" },
          { name: "Economics", score: "100/100" },
          { name: "Commerce", score: "94/100" },
          { name: "Accountancy", score: "97/100" },
          { name: "Computer Application", score: "94/100" },],
      },
       {
        name: "A. NavinRaj",
        grade: "XI SCI",
        marks: "525/600",
        percentage: "87.5%",
        image: placeholderImg,
        subjects: [{ name: "Mathematics", score: "96/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Hindi", score: "96/100" },],
      },
       {
        name: "S. Santhosh",
        grade: "XII SCI",
        marks: "434/600",
        percentage: "72.3%",
        image: placeholderImg,
        subjects: [{ name: "Mathematics", score: "96/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Hindi", score: "96/100" },],
      },
    ],
    "2022-2023": [
      {
        name: "D. Tharun",
        grade: "X",
        marks: "472/500",
        percentage: "94.4%",
        image: "/assets/tharun.jpg",
        subjects: [{ name: "Tamil", score: "93/100" },
          { name: "English", score: "90/100" },
          { name: "Mathematics", score: "99/100" },
          { name: "Science", score: "95/100" },
          { name: "Social Science", score: "95/100" },],
      },
      {
        name: "A. Muhammed Musthafa",
        grade: "XI SCI",
        marks: "493/600",
        percentage: "82.1%",
        image: "/assets/mustafa.jpg",
        subjects: [{ name: "Tamil", score: "85/100" },
          { name: "English", score: "70/100" },
          { name: "Mathematics", score: "73/100" },
          { name: "Physics", score: "85/100" },
          { name: "Chemistry", score: "85/100" },
          { name: "Computer Science", score: "95/100" },],
      },
      {
        name: "V. Vishal",
        grade: "XII (COM)",
        marks: "560/600",
        percentage: "93.3%",
        image: "/assets/vishali.jpg",
        subjects: [{ name: "Tamil", score: "85/100" },
          { name: "English", score: "83/100" },
          { name: "Economics", score: "99/100" },
          { name: "Commerce", score: "100/100" },
          { name: "Accountancy", score: "99/100" },
          { name: "Computer Application", score: "94/100" },],
      },
      {
        name: "G.S. Pranav",
        grade: "XII SCI",
        marks: "543/600",
        percentage: "90.5%",
        image: placeholderImg,
        subjects: [{ name: "Tamil", score: "64/100" },
          { name: "English", score: "84/100" },
          { name: "Mathematics", score: "96/100" },
          { name: "Physics", score: "100/100" },
          { name: "Chemistry", score: "100/100" },
          { name: "Computer Science", score: "99/100" },],
      },
    ],
    
    "2023-2024": [
      {
        name: "J. Joshua",
        grade: "X",
        marks: "450/500",
        percentage: "90%",
        image: "/assets/joshuaj.jpg",
        subjects: [{ name: "Tamil", score: "86/100" },
          { name: "English", score: "86/100" },
          { name: "Mathematics", score: "98/100" },
          { name: "Science", score: "93/100" },
          { name: "Social Science", score: "87/100" },],
      },
       {
        name: "D. Tharun",
        grade: "XI SCI",
        marks: "548/500",
        percentage: "91.3%",
        image: "/assets/tharun.jpg",
        subjects: [{ name: "Tamil", score: "88/100" },
          { name: "English", score: "86/100" },
          { name: "Mathematics", score: "94/100" },
          { name: "Physics", score: "97/100" },
          { name: "Chemistry", score: "88/100" },
          { name: "Computer Science", score: "95/100" },],
      },
      {
        name: "N. Pravin Kumar",
        grade: "XI COM",
        marks: "496/600",
        percentage: "82.6%",
        image: placeholderImg,
        subjects: [{ name: "Tamil", score: "74/100" },
          { name: "English", score: "73/100" },
          { name: "Economics", score: "85/100" },
          { name: "Commerce", score: "81/100" },
          { name: "Accountancy", score: "96/100" },
          { name: "Business Maths & Statistics", score: "87/100" }],
      },
      {
        name: "R. Preetha",
        grade: "XII COM",
        marks: "524/600",
        percentage: "87.3%",
        image: placeholderImg,
        subjects: [{ name: "Tamil", score: "94/100" },
          { name: "English", score: "71/100" },
          { name: "Economics", score: "86/100" },
          { name: "Commerce", score: "94/100" },
          { name: "Accountancy", score: "95/100" },
          { name: "Business Maths & Statistics", score: "84/100" },],
      },
      {
        name: "A. Muhammed Musthafa",
        grade: "XII SCI",
        marks: "509/600",
        percentage: "84.8%",
        image: "/assets/mustafa.jpg",
        subjects: [{ name: "Tamil", score: "90/100" },
          { name: "English", score: "84/100" },
          { name: "Mathematics", score: "83/100" },
          { name: "Physics", score: "76/100" },
          { name: "Chemistry", score: "83/100" },
          { name: "Computer Science", score: "93/100" },],
      },
    ],
    "2024-2025": [
      {
        name: "S. Joshva",
        grade: "X",
        marks: "472/500",
        percentage: "94.4%",
        image: placeholderImg,
        subjects: [{ name: "Tamil", score: "92/100" },
          { name: "English", score: "94/100" },
          { name: "Mathematics", score: "95/100" },
          { name: "Science", score: "99/100" },
          { name: "Social Science", score: "92/100" },],
      },
      {
        name: "J. Joshua",
        grade: "XI SCI",
        marks: "510/600",
        percentage: "85%",
        image: "/assets/joshuaj.jpg",
        subjects: [{ name: "Mathematics", score: "96/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Tamil", score: "96/100" },],
      },
      {
        name: "K. Ebinesar",
        grade: "XI COM",
        marks: "491/600",
        percentage: "81.81%",
        image: "/assets/ebinesar.jpg",
        subjects: [{ name: "Mathematics", score: "96/100" },
          { name: "Science", score: "97/100" },
          { name: "Social Science", score: "95/100" },
          { name: "English", score: "97/100" },
          { name: "Tamil", score: "96/100" },],
      },
      {
        name: "D. Tharun",
        grade: "XII SCI",
        marks: "566/600",
        percentage: "94.3%",
        image: "/assets/tharun.jpg",
        subjects: [{ name: "Tamil", score: "98/100" },
          { name: "English", score: "82/100" },
          { name: "Mathematics", score: "96/100" },
          { name: "Physics", score: "96/100" },
          { name: "Chemistry", score: "98/100" },
          { name: "Computer Science", score: "96/100" },],
      },
      {
        name: "N. Pravin Kumar",
        grade: "XII COM",
        marks: "528/600",
        percentage: "88%",
        image: placeholderImg,
        subjects: [{ name: "Tamil", score: "85/100" },
          { name: "English", score: "86/100" },
          { name: "Economics", score: "84/100" },
          { name: "Commerce", score: "90/100" },
          { name: "Accountancy", score: "97/100" },
          { name: "Business Maths & Statistics", score: "84/100" }],
      },
    ],
  };

  return (
    <div>
      {/* Header */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/assets/banner.jpg')" }} />
        <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }} />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Results</h1>
          <p className="text-xl max-w-2xl mx-auto">Learn more about Satguru Study Centre and our commitment to educational excellence</p>
        </div>
      </div>

      {/* Year-wise Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Performers</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">Explore the achievements of our top-performing students year by year</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-10">
            {Object.keys(resultsData).map((year) => (
              <ResultTab key={year} year={year} isActive={year === activeYear} onClick={() => setActiveYear(year)} />
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resultsData[activeYear as keyof typeof resultsData].map((student, index) => (
              <StudentResultCard key={index} {...student} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
