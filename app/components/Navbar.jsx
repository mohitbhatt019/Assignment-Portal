// E:\Assignment-Portal\assignment-portal\app\components/Navbar.js
"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">Assignment Portal</div>
      <div className="space-x-4">
        <Link href="/dashboard">
         Dashboard
        </Link>
        <Link href="/contact">
         Contact
        </Link>
        {isAuthenticated ? (
          <Link href="/login" onClick={logout}  >
            Logout
          </Link>
        ) : (
          <Link href="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
