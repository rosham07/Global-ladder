import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ListTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [editing, setEditing] = useState(null); // store the testimonial being edited
  const [updatedMessage, setUpdatedMessage] = useState('');

  // Fetch testimonials
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/testimonials/get');
      setTestimonials(res.data);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      toast.error('Failed to fetch testimonials');
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await axios.delete(`http://localhost:5000/api/testimonials/delete/${id}`);
        setTestimonials(testimonials.filter((t) => t._id !== id));
        toast.success('Testimonial deleted successfully');
      } catch (err) {
        console.error('Error deleting testimonial:', err);
        toast.error('Failed to delete testimonial');
      }
    }
  };

  // Handle start editing
  const startEdit = (testimonial) => {
    setEditing(testimonial);
    setUpdatedMessage(testimonial.message);
  };

  // Handle save update
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/testimonials/update/${editing._id}`,
        { ...editing, message: updatedMessage }
      );
      const updated = testimonials.map((t) =>
        t._id === editing._id ? res.data : t
      );
      setTestimonials(updated);
      setEditing(null);
      toast.success('Testimonial updated successfully');
    } catch (err) {
      console.error('Error updating testimonial:', err);
      toast.error('Failed to update testimonial');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-auto">
      <h1 className="text-2xl font-semibold mb-4">List Testimonials</h1>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Message</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((t) => (
              <tr key={t._id}>
                <td className="px-4 py-2 border-b">{t.name}</td>
                <td className="px-4 py-2 border-b">{t.message}</td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  <button
                    onClick={() => startEdit(t)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="ml-2 text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Testimonial</h2>
            <p className="mb-2 font-medium">Name: {editing.name}</p>
            <textarea
              rows="4"
              className="w-full border border-gray-300 p-2 rounded"
              value={updatedMessage}
              onChange={(e) => setUpdatedMessage(e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 mr-2 bg-gray-300 text-black rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
