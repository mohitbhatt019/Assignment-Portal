"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    college: "",
    country: "",
    course: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // To show loading state
  const [error, setError] = useState(null); // To handle errors
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Reset error

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // On successful registration, navigate to login page
        router.push("/login");
      } else {
        // Display error message if registration fails
        setError(result.message);
      }
    } catch (error) {
      // Handle network or server errors
      setError("Something went wrong, please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-black"
      style={{
        backgroundImage: `url('/images/ass-2.jpg')`, // Replace with your image URL
      }}
    >
      <div
        className="w-full max-w-2xl bg-white/90 shadow-lg rounded-lg p-8 animate-fadeIn"
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Create Your Account
        </h1>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>} {/* Show error message */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formData.college}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            disabled={loading} // Disable button during loading
          >
            {loading ? "Registering..." : "Register Now"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-blue-600 hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
