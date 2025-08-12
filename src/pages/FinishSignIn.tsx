// src/pages/FinishSignIn.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; // same as before

export default function FinishSignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const url = window.location.href;
        if (isSignInWithEmailLink(auth, url)) {
          // prefer email param in query, else localStorage
          const params = new URLSearchParams(window.location.search);
          const emailFromQuery = params.get("email");
          const subject = params.get("subject") || "";

          let email = emailFromQuery;
          if (!email) {
            const stored = window.localStorage.getItem("emailForSignIn");
            email = stored || "";
          }
          if (!email) {
            alert("No email available to complete sign-in. Please open the sign-in link on the same device where you requested it.");
            return;
          }

          const result = await signInWithEmailLink(auth, email, url);
          // result.user is signed in
          // tell Apps Script to confirm this email
          await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify({ action: "confirm", email }),
          });

          // mark logged in client-side
          window.localStorage.setItem("isLoggedIn", "true");
          // optional: remove emailForSignIn
          window.localStorage.removeItem("emailForSignIn");

          // redirect to the requested subject or home
          if (subject) navigate(`/notes/${subject}`);
          else navigate("/notes");
        } else {
          // not a sign-in email link
          // you might want to navigate home
          navigate("/notes");
        }
      } catch (err) {
        console.error("FinishSignIn error:", err);
        alert("Sign-in failed. Please try again.");
      }
    })();
  }, [navigate]);

  return (
    <div className="p-6">
      <h2>Completing sign-in…</h2>
      <p>If you are not redirected automatically, please wait or re-open the link from your email.</p>
    </div>
  );
}
