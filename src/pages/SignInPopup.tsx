// src/SignInPopup.tsx
import { useState } from "react";
import { auth } from "./firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { FaTimes } from "react-icons/fa";

export default function SignInPopup({ onSuccess }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [linkSent, setLinkSent] = useState(false);

  const actionCodeSettings = {
    url: "https://satgurustudycentre.com/notes", // redirect after email verify
    handleCodeInApp: true
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("phone", phone);
      window.localStorage.setItem("email", email);
      setLinkSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="popup">
      {linkSent ? (
        <div className="success-message">
          <FaTimes
            style={{ float: "right", cursor: "pointer" }}
            onClick={onSuccess}
          />
          <p>✅ Verification link sent to your email!</p>
          <p>Please check your inbox and <b>spam folder</b>.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Send Verification Link</button>
        </form>
      )}
    </div>
  );
}
