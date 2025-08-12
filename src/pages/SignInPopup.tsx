// src/components/SignInPopup.tsx
import React, { useState } from "react";
import { auth } from "../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

interface Props {
  onClose: () => void;
  emailCallback?: (email: string) => void; // optional
  pendingSubject?: string; // subject user clicked to access
}

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwVy96yOj_3S5cpm61fdK4B4SuALy3OoCOiwSO13orTW_oVQwz2hfo_Krk9LJnFHpah/exec"; // replace
const ACTION_URL_BASE = "https://satgurustudycentre.com/FinishSignIn"; // replace with your finish URL (or localhost)

export default function SignInPopup({ onClose, pendingSubject }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const actionCodeSettings = {
    // After sign-in, the user will be redirected to this URL.
    url: `${ACTION_URL_BASE}?email=${encodeURIComponent(email)}&subject=${encodeURIComponent(pendingSubject || "")}`,
    handleCodeInApp: true,
  };

  const handleSubmit = async () => {
    if (!name || !phone || !email) {
      alert("Please fill name, phone and email.");
      return;
    }

    // Save pending row to Google Sheets
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "pending",
          email,
          name,
          phone,
          subject: pendingSubject || "",
        }),
      });
    } catch (err) {
      console.error("Failed to save pending:", err);
      alert("Failed to start sign-in. Try again.");
      return;
    }

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      // Save email locally so we can use it when completing sign-in on same device
      window.localStorage.setItem("emailForSignIn", email);
      setSent(true);
      alert("Sign-in link sent to your email. Please open the email and click the link to complete sign-in.");
    } catch (err) {
      console.error("sendSignInLinkToEmail error:", err);
      alert("Failed to send sign-in link. Check your Firebase configuration and authorized domain.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-96">
        <h3 className="text-lg font-semibold mb-4">Sign in to access notes</h3>

        {!sent ? (
          <>
            <input className="border p-2 w-full mb-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="border p-2 w-full mb-2" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input className="border p-2 w-full mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="bg-blue-600 text-white px-4 py-2 w-full rounded" onClick={handleSubmit}>Send verification email</button>
          </>
        ) : (
          <div>
            <p>Verification link sent to <strong>{email}</strong>. Open it to complete sign-in.</p>
            <p className="mt-2 text-sm text-gray-600">If you clicked the link on another device, open the same link here and your details will be confirmed automatically.</p>
          </div>
        )}

        <button className="mt-4 text-sm text-gray-600" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
