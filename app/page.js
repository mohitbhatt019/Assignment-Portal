import Navbar from "./components/Navbar";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Welcome to Assignment Portal
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Helping students achieve excellence for over 5 years, with 10k+ successful assignments.
      </p>
      <Dashboard />
    </div>
  );
}
