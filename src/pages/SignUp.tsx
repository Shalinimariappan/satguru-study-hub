import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCred.user);
      alert("Signup successful! Please verify your email (Check Spam Folder). After verified your email, Sign in again!");
      navigate("/signin");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={() => navigate("/notes")}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

        <form onSubmit={handleSignUp} className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-satguru focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:satguru focus:outline-none transition"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </span>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-satguru hover:bg-blue-800 text-white py-2 rounded-lg font-medium shadow-md transition"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="text-center text-sm text-gray-500">or</div>

          {/* Sign In Redirect */}
          <button
            type="button"
            onClick={() => navigate("/signin")}
            className="w-full border border-satguru text-satguru py-2 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Already have an account? Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
