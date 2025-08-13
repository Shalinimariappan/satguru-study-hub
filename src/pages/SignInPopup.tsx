// src/SignInPopup.tsx
import { useState } from "react";
import { auth } from "./firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

export default function SignInPopup({ onSuccess }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const actionCodeSettings = {
    url: "http://localhost:5173/notes", // redirect after email verify
    handleCodeInApp: true
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("phone", phone);
      window.localStorage.setItem("email", email);
      alert("Verification link sent to your email!");
      onSuccess(); // Close popup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
      <button type="submit">Send Verification Link</button>
    </form>
  );
}
