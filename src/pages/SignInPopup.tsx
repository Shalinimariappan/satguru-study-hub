// src/SignInPopup.tsx
import { useState } from "react";
import { auth } from "./firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { FaXmark } from "react-icons/fa6"; // modern X icon (black)

export default function SignInPopup({ onSuccess, onBack, subject }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const actionCodeSettings = {
    url: `https://satgurustudycentre.com/notes/${subject}`, // redirect back to that subject
    handleCodeInApp: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("phone", phone);
      window.localStorage.setItem("email", email);
      alert("Verification link sent to your email! Check spam folder if not found.");
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "320px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        {/* Back / Close Button */}
        <button
          onClick={onBack}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <FaXmark size={20} color="#000000" />
        </button>

        <h3 style={{ fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>
          Sign in to view {subject}
        </h3>

        <form
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          onSubmit={handleSubmit}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "10px",
              borderRadius: "6px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send Verification Email
          </button>
        </form>
      </div>
    </div>
  );
}
