import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "../AuthContext";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzVBXyI186t_o70NzKTwwHZ2jV-WuL9Hv78iTYoYklv0kWIcD8qpJRp7EP7XRA1ywO0Kg/exec";

const SignInPopup = () => {
  const [phone, setPhone] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  // Load OTPless script once
  useEffect(() => {
    const existingScript = document.getElementById("otpless-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "otpless-script";
      script.src = "https://otpless.com/auth.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    // Callback function from OTPless after successful login
    (window as any).otpless = (otplessUser: any) => {
      const verifiedPhone = otplessUser?.mobile?.number;
      if (verifiedPhone) {
        localStorage.setItem("userPhone", verifiedPhone);
        signIn();
        navigate("/notes");
      }
    };
  }, [navigate, signIn]);

  const handleContinue = () => {
    if (!phone || phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    const fullPhone = "+" + phone;

    // Store number in Google Sheets
    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: fullPhone }),
    });

    // Pass phone to OTPless
    (window as any).otplessUserNumber = fullPhone;

    // Trigger OTPless login (invisible mode)
    if ((window as any).otplessInit && scriptLoaded) {
      (window as any).otplessInit();
    } else {
      console.error("OTPless script not ready.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-4 border rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Let's Sign In</h2>

      <PhoneInput
        country={"in"}
        value={phone}
        onChange={setPhone}
        inputClass="w-full p-2 border rounded"
        inputStyle={{ width: "100%" }}
        inputProps={{
          required: true,
          autoFocus: true,
        }}
      />

      <button
        onClick={handleContinue}
        className="w-full mt-4 bg-gray-400 text-white font-semibold py-2 rounded-md hover:bg-gray-500"
      >
        Continue
      </button>

      <div id="otpless-login-page" className="hidden"></div>
    </div>
  );
};

export default SignInPopup;
