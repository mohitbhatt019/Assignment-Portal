"use client";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

export default function OrderList() {
  const [assignments] = useState([
    {
      name: "John Doe",
      description: "Math Assignment",
      fileName: "math_assignment.pdf",
    },
    {
      name: "Jane Smith",
      description: "Science Project",
      fileName: "science_project.ppt",
    },
  ]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure component is mounted on client
    setIsClient(true);
  }, []);

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Description", selector: (row) => row.description },
    {
      name: "File",
      cell: (row) => (
        <a
          href="#"
          className="text-blue-500 hover:underline"
          onClick={() => alert(`Downloading ${row.fileName}`)}
        >
          {row.fileName}
        </a>
      ),
    },
  ];

  if (!isClient) return null; // Prevent SSR rendering

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Uploaded Assignments</h1>
      <DataTable
        title="Assignments List"
        columns={columns}
        data={assignments}
        pagination
        highlightOnHover
        selectableRows
      />
    </div>
  );
}
