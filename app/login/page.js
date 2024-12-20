"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useSession, signIn } from "next-auth/react";
import { FaFacebook, FaGoogle } from "react-icons/fa"; // For Facebook and Google icons
import { Oval } from "react-loader-spinner"; // Import the spinner

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Add loading state
  const { isAuthenticated, login } = useAuth(); // From AuthContext
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    // If user is already logged in (either through simple login or external login), redirect to dashboard
    if (session || localStorage.getItem("Authenticated")) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSimpleLogin = async (e) => {
    e.preventDefault();

    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        login();
        localStorage.setItem("Authenticated", "true"); // Store session locally
        router.push("/dashboard"); // Redirect user
      } else {
        alert(result.message || "Invalid username or password."); // Error message
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url('/images/ass-2.jpg')`,
      }}
    >
      {/* Overlay Spinner */}
      {loading && (
        <div className="absolute inset-0 bg-black opacity-50 z-10 flex items-center justify-center">
          <Oval color="#fff" height={60} width={50} />{" "}
        </div>
      )}

      <div
        className="w-full max-w-lg bg-white/90 shadow-lg rounded-xl p-10"
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-4xl font-semibold text-blue-600 mb-6 text-center">
          Login to Your Account
        </h1>
        <form onSubmit={handleSimpleLogin} className="space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            required
            disabled={loading} // Disable input during loading
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            required
            disabled={loading} // Disable input during loading
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
            disabled={loading} // Disable button during loading
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          {/* "New to this? Signup" text link */}
          <p className="text-sm text-gray-600">
            New to this?{" "}
            <button
              onClick={() => router.push("/register")}
              className="text-blue-600 hover:underline"
            >
              Sign up
            </button>
          </p>

          {/* Social login buttons with icons and labels */}
          <div className="mt-6 flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <button
                onClick={() => signIn("facebook")}
                className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 focus:outline-none transition duration-300"
                aria-label="Login with Facebook"
                disabled={loading} // Disable button during loading
              >
                <FaFacebook size={24} />
              </button>
              <span className="mt-2 text-sm text-gray-700">
                Login with Facebook
              </span>
            </div>

            <div className="flex flex-col items-center">
              <button
                onClick={() => signIn("google")}
                className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 focus:outline-none transition duration-300"
                aria-label="Login with Google"
                disabled={loading} // Disable button during loading
              >
                <FaGoogle size={24} />
              </button>
              <span className="mt-2 text-sm text-gray-700">
                Login with Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
