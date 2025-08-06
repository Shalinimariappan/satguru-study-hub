/*import { useState, useEffect, useRef } from "react";
import { auth } from "../firebase";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
} from "firebase/auth";

interface Props {
  onSuccess: (phone: string) => void;
  onClose: () => void;
}

export default function SignInPopup({ onSuccess, onClose }: Props) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(null);
  const recaptchaVerifier = useRef<RecaptchaVerifier | null>(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // ✅ Render reCAPTCHA only when DOM is ready
  useEffect(() => {
    if (!recaptchaVerifier.current && document.getElementById("recaptcha-container")) {
      recaptchaVerifier.current = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            console.log("reCAPTCHA solved automatically");
          },
        },
        auth
      );
      recaptchaVerifier.current.render().then(() => {
        setRecaptchaReady(true); // Now you can send OTP
      });
    }
  }, []);

  const sendOtp = async () => {
    if (!phone.match(/^\d{10}$/)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    if (!recaptchaReady || !recaptchaVerifier.current) {
      alert("reCAPTCHA is not ready yet. Please wait a second and try again.");
      return;
    }

    const fullPhone = `+91${phone}`;
    try {
      const result = await signInWithPhoneNumber(auth, fullPhone, recaptchaVerifier.current);
      setConfirmation(result);
      alert("OTP sent successfully!");
    } catch (err) {
      console.error("OTP send failed:", err);
      alert("Failed to send OTP. Try again.");
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    try {
      const result = await confirmation?.confirm(otp);
      const number = result?.user.phoneNumber || "";

      await fetch("https://script.google.com/macros/s/AKfycbxaB5FXCXoEVI1qiwJHCW5fCB7Y9S4i6UTE37Kgq-bd6LT-E4QUWH5Akum67YNQrQW0/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: number }),
      });

      localStorage.setItem("isLoggedIn", "true");
      onSuccess(number);
      onClose();
    } catch (err) {
      console.error("OTP verification failed:", err);
      alert("Incorrect OTP");
    }
  };

  return (
    <>
      }
      <div id="recaptcha-container" className="hidden" />

      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded shadow w-96">
          <h2 className="text-lg font-semibold mb-4 text-center">Login to Access Notes</h2>

          {!confirmation ? (
            <>
              <input
                type="text"
                placeholder="Enter phone (10 digits)"
                className="border px-3 py-2 w-full mb-4"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                onClick={sendOtp}
                disabled={!recaptchaReady}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
              >
                {recaptchaReady ? "Send OTP" : "Please wait..."}
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                className="border px-3 py-2 w-full mb-4"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                onClick={verifyOtp}
                className="bg-green-600 text-white px-4 py-2 rounded w-full"
              >
                Verify OTP
              </button>
            </>
          )}

          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-600 hover:underline w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}*/