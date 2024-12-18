"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Login2() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();

  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    debugger
    localStorage.setItem("ExternalLoginUsername", session.user.email);
    router.push("/upload-assignment");
    //<button onClick={() => signOut()}>Sign out</button>
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {

    debugger
    e.preventDefault();
    login(); // Set authentication state
    router.push("/upload-assignment"); // Navigate to upload screen
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/ass-2.jpg')`, // Reference your image
      }}
    >
      <div
        className="w-full max-w-md bg-white/90 shadow-lg rounded-lg p-8 animate-fadeIn"
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Login to Your Account
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none text-black"
            required
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => router.push("/register")}
            className="text-blue-600 hover:underline"
          >
            Register here
          </button>
          <button onClick={() => signIn()}>Login With FB and Google?</button>
        </p>
      </div>
    </div>
  );
}
