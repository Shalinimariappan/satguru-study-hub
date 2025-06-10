import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../AuthContext";

const notesData = [
  { subject: "AUDITING & ETHICS", resources: 6, type: "QuestionPaper" },
  { subject: "Advanced Accounting", resources: 8, type: "Notes" },
  { subject: "Corporate and other law", resources: 9, type: "QuestionPaper" },
  { subject: "Direct and indirect tax", resources: 8, type: "Notes" },
  { subject: "Costing", resources: 8, type: "Notes" },
  { subject: "Financial management & Strategic Management", resources: 8, type: "QuestionPaper" },
];

export default function Notes() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const [filter, setFilter] = useState("All");

  const handleClick = (subject: string) => {
    if (isSignedIn) {
      navigate(`/notes/${subject}`);
    } else {
      navigate("/signin", { state: { redirectTo: `/notes/${subject}` } });
    }
  };

  const filteredData =
    filter === "All"
      ? notesData
      : notesData.filter((note) => note.type === filter);

  const getHeadingText = () => {
    if (filter === "Notes") return "Notes";
    if (filter === "QuestionPaper") return "Government Question Paper";
    return "Government Question Paper and Notes";
  };

  return (
    <div>
      <div className="relative py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('/assets/banner.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }} />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Notes</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about Satguru Study Centre and our commitment to educational excellence
          </p>
        </div>
      </div>

      <div className="p-8 sm:p-16">
        <div className="flex items-center mb-4 space-x-2">
          <label className="font-medium text-[#0B2C4D]">Select Notes:</label>
          <select
            className="border px-3 py-1 rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Notes">Notes Only</option>
            <option value="QuestionPaper">Question Papers</option>
          </select>
        </div>

        <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2 text-[#0B2C4D]">
          <span>🎓</span>
          <span>{getHeadingText()}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((note, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border border-gray-100 shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
              onClick={() => handleClick(note.subject)}
            >
              <div>
                <div className="flex items-center space-x-2 text-[#0B2C4D] font-semibold text-md">
                  <span>📘</span>
                  <span>{note.subject}</span>
                </div>
                <p className="text-sm text-gray-500">{note.resources} Resources</p>
              </div>
              {!isSignedIn && (
                <span className="text-yellow-400 text-lg" title="Sign in to access">🔒</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
