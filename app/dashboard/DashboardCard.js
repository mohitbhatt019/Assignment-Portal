// app/dashboard/DashboardCard.js
export default function DashboardCard({ title, description, stats }) {
    return (
      <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <p className="text-lg font-bold">{stats}</p>
      </div>
    );
  }
  