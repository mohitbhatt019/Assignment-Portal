"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'; // Correct import for App Router

export default function UploadAssignment() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    file: null,
  });
  const router = useRouter(); 

  const [assignments, setAssignments] = useState([]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, file: e.target.files[0] });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAssignment = {
      name: formData.name,
      description: formData.description,
      fileName: formData.file ? formData.file.name : "",
    };

    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);

    // Reset the form
    setFormData({
      name: "",
      description: "",
      file: null,
    });
    alert("Assignment uploaded successfully!");
    router.push("/orderlist"); 

  };

  return (
    <div className="text-black"
      style={{
        height: "82vh",
        padding: 1,
        backgroundImage: `url('/images/ass-4.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Upload Your Assignment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload File
            </label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="block w-full text-gray-500 border px-3 py-2 rounded-lg cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Assignment
          </button>
        </form>
      </motion.div>
    </div>
  );
}
