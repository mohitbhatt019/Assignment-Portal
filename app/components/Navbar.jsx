"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { logout } = useAuth();
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false); // Ensures the component renders only on the client
  const isAuthenticated =
    typeof window !== "undefined" &&
    localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    setIsHydrated(true); // Marks the component as ready after hydration
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut({ redirect: false });
    localStorage.setItem("isAuthenticated", "false"); // Clear auth status
    router.push("/login");
    await logout();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  if (!isHydrated)
    return (
      <nav className="bg-gray-900 text-white py-4 px-6 shadow-md flex justify-between items-center animate-pulse">
        <div className="bg-gray-700 h-8 w-36 rounded"></div>
        <div className="flex space-x-8 items-center">
          <div className="bg-gray-700 h-6 w-24 rounded"></div>
          <div className="bg-gray-700 h-6 w-24 rounded"></div>
          <div className="bg-gray-700 h-8 w-20 rounded"></div>
        </div>
      </nav>
    ); // Prevent rendering until hydration is complete

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-md flex justify-between items-center">
      {/* Logo/Title */}
      <div className="font-bold text-2xl text-white">Assignment Portal</div>

      {/* Navbar Links */}
      <div className="flex space-x-8 items-center">
        <Link
          href="/dashboard"
          className="hover:text-blue-400 transition-colors duration-300 text-lg font-medium">
          Dashboard
        </Link>
        <Link
          href="/contact"
          className="hover:text-blue-400 transition-colors duration-300 text-lg font-medium">
          Contact
        </Link>

        {/* Auth Button (Login/Logout) */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 py-2 px-6 rounded-lg text-white font-semibold hover:bg-red-700 transition duration-300">
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-600 py-2 px-6 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
