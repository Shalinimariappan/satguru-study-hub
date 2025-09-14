import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import contact from "./Contact";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      if (!userCred.user.emailVerified) {
        alert("Please verify your email(Check Spam Folder) before signing in.");
        await signOut(auth);
        return;
      }
      navigate("/notes");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

        <form onSubmit={handleSignIn} className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </span>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium shadow-md transition"
          >
            Sign In
          </button>

          {/* Forgot Password & Contact Admin */}
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <button
              type="button"
              onClick={() => navigate("/Contact")}
              className="hover:text-green-600 transition"
            >
              Forgot Password?Contact Admin
            </button>
          </div>

          {/* Divider */}
          <div className="text-center text-sm text-gray-500">or</div>

          {/* Sign Up Redirect */}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="w-full border border-green-600 text-green-600 py-2 rounded-lg font-medium hover:bg-green-50 transition"
          >
            New user? Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
