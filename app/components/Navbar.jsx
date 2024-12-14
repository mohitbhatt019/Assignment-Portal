export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <div className="font-bold text-lg">Assignment Portal</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>
    );
  }
  