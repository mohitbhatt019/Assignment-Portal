"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [externalLogin, setExternalLogin] = useState(false);

  useEffect(() => {
    // Client-specific logic here to check external login status
    if (typeof window !== 'undefined') {
      setExternalLogin(localStorage.getItem("ExternalLoginUsername") !== null);
    }
  }, [session]);

  const handleLogout = async () => {
    if (externalLogin) {
      localStorage.removeItem("ExternalLoginUsername");
    }

    await signOut({ redirect: false });
    localStorage.removeItem("Authenticated"); // Clear authentication status for simple login
    logout();
     router.push("/login");
  };

  const showLogoutButton = (session || isAuthenticated || externalLogin) && status !== "loading";

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">Assignment Portal</div>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/contact">Contact</Link>
        {showLogoutButton ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 py-2 px-4 rounded hover:bg-red-700 text-white"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
