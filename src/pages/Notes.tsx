import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const notesData = [
  { subject: "6th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "7th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "8th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "9th-Std-Question-Papers", resources: 30, type: "QuestionPaper" },
  { subject: "10th-Std-Question-Papers", resources: 40, type: "QuestionPaper" },
  { subject: "11th-Std-Science-Question-Papers", resources: 50, type: "QuestionPaper" },
  { subject: "11th-Std-Commerce-Question-Papers", resources: 50, type: "QuestionPaper" },
  { subject: "12th-Std-Commerce-Question-Papers", resources: 50, type: "QuestionPaper" },
  { subject: "12th-Std-Science-Question-Papers", resources: 50, type: "QuestionPaper" },
];

export default function Notes() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  // ✅ Track user login status only
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.emailVerified) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  // ✅ When user clicks card
  const handleCardClick = (subject: string) => {
    if (user) {
      navigate(`/notes/${subject}`); // go to resources
    } else {
      navigate("/signin"); // ask them to login/signup
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notes</h1>
        {user && (
          <button onClick={handleLogout} className="text-sm text-red-500">
            Logout
          </button>
        )}
      </div>

      {/* ✅ Cards visible to everyone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notesData.map((note, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(note.subject)}
            className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="font-semibold">{note.subject}</h2>
            <p className="text-sm">{note.resources} Resources</p>
          </div>
        ))}
      </div>
    </div>
  );
}
