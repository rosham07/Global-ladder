import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddTestimonials() {
  const [testimonial, setTestimonial] = useState({
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/testimonials/create',
        testimonial
      );
      console.log('Testimonial Submitted:', response.data);
      toast.success('Testimonial added successfully!');
      setTestimonial({ name: '', message: '' });
    } catch (err) {
      console.error('Error submitting testimonial:', err);
      const msg =
        err.response?.data?.message ||
        'Failed to submit testimonial. Please try again.';
      toast.error(msg);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Add Testimonial</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name input */}
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={testimonial.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message input */}
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Testimonial Message
          </label>
          <textarea
            id="message"
            name="message"
            value={testimonial.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Testimonial
          </button>
        </div>
      </form>
    </div>
  );
}
