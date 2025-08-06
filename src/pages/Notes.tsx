import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SignInPopup from "./SignInPopup";

const notesData = [
  { subject: "6th STD Question Papers", resources: 30, type: "QuestionPaper" },
  { subject: "7th STD Question Papers", resources: 30, type: "QuestionPaper" },
  { subject: "8th STD Question Papers", resources: 30, type: "QuestionPaper" },
  { subject: "9th STD Question Papers", resources: 30, type: "QuestionPaper" },
  { subject: "10th STD Question Papers", resources: 40, type: "QuestionPaper" },
  { subject: "11th STD Commerce Question Papers", resources: 50, type: "QuestionPaper" },
];

export default function Notes() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  // Optional: persist sign-in across reloads
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsSignedIn(loggedIn);
  }, []);

  const handleCardClick = (subject: string) => {
    if (!isSignedIn) {
      setShowSignIn(true);
    } else {
      navigate(`/notes/${subject}`);
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
      {/* Show sign-in popup if not logged in */}
      {showSignIn && (
        <SignInPopup
          onClose={() => setShowSignIn(false)}
          onSuccess={(phone) => {
            localStorage.setItem("isLoggedIn", "true");
            setIsSignedIn(true);
            setShowSignIn(false);
          }}
        />
      )}

      {/* Banner Section */}
      <div className="relative py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/assets/banner.jpg')",
          }}
        />
        <div
          className="absolute inset-0 bg-satguru"
          style={{ opacity: 0.65 }}
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Notes</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about Satguru Study Centre and our commitment to
            educational excellence
          </p>
        </div>
      </div>

      {/* Content Section */}
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

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((note, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border border-gray-100 shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
              onClick={() => handleCardClick(note.subject)}
            >
              <div>
                <div className="flex items-center space-x-2 text-[#0B2C4D] font-semibold text-md">
                  <span>📘</span>
                  <span>{note.subject}</span>
                </div>
                <p className="text-sm text-gray-500">
                  {note.resources} Resources
                </p>
              </div>

              {/* Lock Icon if not signed in */}
              {!isSignedIn && (
                <span className="text-gray-400 text-xl">🔒</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
