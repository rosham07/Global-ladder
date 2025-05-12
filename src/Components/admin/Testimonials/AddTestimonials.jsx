import React, { useState } from 'react';

export default function AddTestimonials() {
  // State to store the form data
  const [testimonial, setTestimonial] = useState({
    name: '',
    message: '',
    position: '',
    imageUrl: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the testimonial to your backend or API
    console.log('Testimonial Submitted:', testimonial);

    // Optionally, you can clear the form after submission
    setTestimonial({
      name: '',
      message: '',
      position: '',
      imageUrl: ''
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Add Testimonial</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name input */}
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
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
          <label htmlFor="message" className="block text-gray-700">Testimonial Message</label>
          <textarea
            id="message"
            name="message"
            value={testimonial.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Position input */}
        <div>
          <label htmlFor="position" className="block text-gray-700">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={testimonial.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image URL input */}
        <div>
          <label htmlFor="imageUrl" className="block text-gray-700">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={testimonial.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
