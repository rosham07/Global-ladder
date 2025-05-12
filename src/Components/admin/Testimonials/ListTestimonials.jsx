import React, { useEffect, useState } from 'react';

// Simulated data
const fetchTestimonials = () => [
  {
    id: 1,
    name: "John Doe",
    message: "Great service, highly recommend!",
    position: "Customer",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "An amazing experience. Will come back again.",
    position: "Client",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function ListTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(fetchTestimonials());
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-auto">
      <h1 className="text-2xl font-semibold mb-4">List Testimonials</h1>

      {/* Responsive Table Wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Position</th>
              <th className="px-4 py-2 border-b">Message</th>
              <th className="px-4 py-2 border-b">Image</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((t) => (
              <tr key={t.id}>
                <td className="px-4 py-2 border-b">{t.name}</td>
                <td className="px-4 py-2 border-b">{t.position}</td>
                <td className="px-4 py-2 border-b">{t.message}</td>
                <td className="px-4 py-2 border-b">
                  <img
                    src={t.imageUrl}
                    alt={t.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="ml-2 text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
