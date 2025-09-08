import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { FaLock } from "react-icons/fa";

const notesData = [
  { subject: "6th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "7th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "8th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "9th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "10th-Std-Question-Papers", resources: 40, type: "QuestionPaper" },
  { subject: "11th-Std-Science-Question-Papers", resources: 50, type: "QuestionPaper" },
  { subject: "11th-Std-Commerce-Question-Papers", resources: 50, type: "QuestionPaper" },
  { subject: "12th-Std-Commerce-Question-Papers", resources: 50, type: "QuestionPaper" },
  { subject: "12th-Std-Science-Question-Papers", resources: 50, type: "QuestionPaper" },
];

export default function Notes() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  // Sign-in modal state
  const [showSignIn, setShowSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [userVerified, setUserVerified] = useState(false);

  // Track user authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserVerified(!!(user && user.emailVerified));
    });
    return unsubscribe;
  }, []);

  const handleClick = (subject: string) => {
    setSelectedSubject(subject);
    if (userVerified) {
      navigate(`/notes/${subject}`);
    } else {
      setShowSignIn(true);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, "password123");
      await sendEmailVerification(userCredential.user);
      setMessage("Verification email sent. Please check your inbox.");
    } catch (err: any) {
      setMessage(err.message);
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
              {!userVerified && (
                <FaLock className="text-gray-500 absolute top-3 right-3" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sign-in Modal */}
      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Sign in to view {selectedSubject}</h3>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 mb-3 w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-2 mb-3 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 mb-3 w-full"
            />
            <button
              onClick={handleSignIn}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Send Verification Email
            </button>
            {message && <p className="text-sm text-gray-600 mt-3">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
