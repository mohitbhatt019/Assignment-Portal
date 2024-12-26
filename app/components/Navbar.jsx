"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault(); // Prevent default link behavior
    await signOut({ redirect: false });
    router.push("/login");
    await logout();
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default link behavior
    router.push("/login");
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-md flex justify-between items-center">
      {/* Logo/Title */}
      <div className="font-bold text-2xl text-white">Assignment Portal</div>

      {/* Navbar Links */}
      <div className="flex space-x-8 items-center">
        <Link
          href="/dashboard"
          className="hover:text-blue-400 transition-colors duration-300 text-lg font-medium"
        >
          Dashboard
        </Link>
        <Link
          href="/contact"
          className="hover:text-blue-400 transition-colors duration-300 text-lg font-medium"
        >
          Contact
        </Link>

        {/* Auth Button (Login/Logout) */}
        {localStorage.getItem("isAuthenticated")=="true" ? (
          <Link
            href="/login"
            onClick={handleLogout}
            className="bg-red-600 py-2 px-6 rounded-lg text-white font-semibold hover:bg-red-700 transition duration-300"
          >
            Logout
          </Link>
        ) : (
          <Link
            href="/login"
            onClick={handleLogin}
            className="bg-blue-600 py-2 px-6 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
