// src/Notes.tsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  onAuthStateChanged,
  isSignInWithEmailLink,
  signInWithEmailLink,
  setPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";
import { FaLock } from "react-icons/fa";
import SignInPopup from "./SignInPopup";

const notesData = [
  { subject: "6th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "7th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "8th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "9th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "10th-Std-Question-Papers", resources: 40, type: "QuestionPaper" },
  { subject: "11th-Std-Commerce-Question-Papers", resources: 50, type: "QuestionPaper" },
];

export default function Notes() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [showSignIn, setShowSignIn] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [user, setUser] = useState<any>(null);

  // Handle auth state + email link sign-in
  useEffect(() => {
    // Persist session in local storage
    setPersistence(auth, browserLocalPersistence);

    // Check if user is returning via email link
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("email");
      if (!email) {
        email = window.prompt("Please confirm your email for login");
      }
      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("email"); // cleanup
            setUser(result.user);
          })
          .catch((err) => console.error("Sign-in error:", err));
      }
    }

    // Track user auth state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleClick = (subject: string) => {
    setSelectedSubject(subject);
    if (user) {
      navigate(`/notes/${subject}`);
    } else {
      setShowSignIn(true);
    }
  };

  const filteredData =
    filter === "All" ? notesData : notesData.filter((note) => note.type === filter);

  const getHeadingText = () => {
    if (filter === "Notes") return "Notes";
    if (filter === "QuestionPaper") return "Government Question Paper";
    return "Government Question Paper and Notes";
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/assets/banner.jpg')" }}
        />
        <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }} />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Notes</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about Satguru Study Centre and our commitment to educational excellence
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

          {user && (
            <button
              className="ml-auto bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button>
          )}
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
              className="relative flex justify-between items-center border border-gray-100 shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
              onClick={() => handleClick(note.subject)}
            >
              <div>
                <div className="flex items-center space-x-2 text-[#0B2C4D] font-semibold text-md">
                  <span>📘</span>
                  <span>{note.subject}</span>
                </div>
                <p className="text-sm text-gray-500">{note.resources} Resources</p>
              </div>
              {!user && (
                <FaLock className="text-gray-500 absolute top-3 right-3" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sign-in Popup */}
      {showSignIn && <SignInPopup onSuccess={() => setShowSignIn(false)} />}
    </div>
  );
}
