// app/dashboard/page.js
import Link from 'next/link';
import DashboardCard from './DashboardCard';

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-900 text-white">
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
      {/* Add Button to Navigate to Upload Assignment */}
      <div className="flex justify-center">
        <Link href="/upload-assignment">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
            Upload Assignment
          </button>
        </Link>
      </div>
    </div>
  );
}
