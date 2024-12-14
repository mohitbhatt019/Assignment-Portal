"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("User Logged In:", credentials);
    const isAuthenticated = localStorage.setItem("isAuthenticated",true);

    // Navigate to upload assignment page
    router.push("/upload-assignment");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4 w-80">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 rounded-lg"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <button
          onClick={() => router.push("/register")}
          className="text-blue-400 hover:underline"
        >
          Register here
        </button>
      </p>
    </div>
  );
}
