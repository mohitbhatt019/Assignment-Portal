// app/dashboard/page.js

"use client"; // Add this directive at the top

import { useAuth } from '../context/AuthContext';
import DashboardCard from './DashboardCard';
import { useRouter } from 'next/navigation'; // Correct import for App Router

export default function Dashboard() {
  const router = useRouter(); // Declare the useRouter hook here
  const { isAuthenticated, logout } = useAuth();

  const uploadAssignmentClick = () => {
    debugger
    if (!isAuthenticated) {
      router.push("/login"); // Use router.push from next/navigation
    }
    else       
    router.push("/upload-assignment"); // Use router.push from next/navigation

  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('/images/ass-1.jpg')`, // Reference your image
      }}
    >
      <div className="p-8 bg-gray-900/70 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Welcome to Assignment Portal</h1>
        <p className="mb-8">
          Helping students achieve excellence for over 5 years, with 10k+ successful assignments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard
            title="Total Assignments"
            description="Delivered successfully"
            stats="10,000+"
          />
          <DashboardCard
            title="Active Users"
            description="Students currently enrolled"
            stats="5,000+"
          />
          <DashboardCard
            title="Feedback Rating"
            description="Overall user rating"
            stats="4.8/5"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={uploadAssignmentClick} // Pass the function reference, don't invoke it here
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Upload Assignment
          </button>
        </div>
      </div>
    </div>
  );
}
